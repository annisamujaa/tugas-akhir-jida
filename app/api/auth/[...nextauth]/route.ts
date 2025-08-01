import NextAuth from "next-auth";
import { PrismaClient } from "@/app/generated/prisma";
import bcrypt from "bcrypt";
import { z } from "zod";
import { NextAuthOptions } from "next-auth";

// Import your providers here
import CredentialsProvider from "next-auth/providers/credentials";

import GoogleProvider from "next-auth/providers/google";

const prisma = new PrismaClient();
export const authOptions: NextAuthOptions = {
  providers: [
     GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      authorization: {
        params: {
          prompt: "select_account",
        },
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const schema = z.object({
          email: z.string().email(),
          password: z.string().min(6),
        });
        const { email, password } = schema.parse(credentials);

        const user = await prisma.users.findUnique({ where: { email } });

        if (!user) throw new Error("No user found");
        if (!user.password) throw new Error("No password set for user");
        if (!user.verifiedAt) throw new Error("User not verified");
        const valid = await bcrypt.compare(password, user.password);
        if (!valid) throw new Error("Invalid password");

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role
        };
      },
    }),
  ],
  
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async signIn({ user, account }) {
    if (account?.provider === "google") {
      if (!user.email) throw new Error("No email from Google account");

      let existingUser = await prisma.users.findUnique({ where: { email: user.email } });

    if (!existingUser) {
      existingUser = await prisma.users.create({
        data: {
          name: user.name || "",
          email: user.email,
          role: "user",
          verifiedAt: new Date(),
        },
      });
    } else if (!existingUser.verifiedAt) {
      existingUser = await prisma.users.update({
        where: { email: user.email },
        data: { verifiedAt: new Date() },
      });
    }

    // Inject the proper user.id into `user` so NextAuth can use it in jwt
    (user as any).id = existingUser.id;
    (user as any).role = existingUser.role;
  }
    return true;
  },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.id) {
        (session.user as any).id = token.id;
      }
      if (token?.role) {
        (session.user as any).role = token.role;
      }
      return session;
    },
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

// app/api/auth/[...nextauth]/route.ts
// import NextAuth from "next-auth";
// import { authOptions } from "@/lib/auth";

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };