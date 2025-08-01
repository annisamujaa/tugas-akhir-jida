import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { z } from "zod";
import { PrismaClient } from "@/app/generated/prisma";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const data = await req.json();
    // Validate the input data
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string(),
    role: z.string(),
  });
    // Parse and validate the data
  const { email, password, name, role} = schema.parse(data);
//   Check if the user already exists
  const exist = await prisma.users.findUnique({
    where: { email },
  });
// If the user already exists, return an error response
  if (exist) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }
// Hash the password before saving it to the database
  const hashedPassword = await bcrypt.hash(password, 10);
// Create the user in the database
  const user = await prisma.users.create({
    data: {
      email,
      password: hashedPassword,
      name,
      role
    },
  });
// Send an OTP to the user's email
  await fetch(`${process.env.BASE_URL}/api/auth/send-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
// Return the created user data
  return NextResponse.json({ user });
}