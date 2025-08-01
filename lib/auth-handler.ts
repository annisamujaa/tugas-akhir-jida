// lib/auth-handler.ts
import NextAuth from "next-auth";
import { authOptions } from "./auth";

export const { auth } = NextAuth(authOptions);
