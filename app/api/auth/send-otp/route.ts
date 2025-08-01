import { PrismaClient } from "@/app/generated/prisma";
import nodemailer from "nodemailer";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    // Extract email from request body
  const { email } = await req.json();

  const user = await prisma.users.findUnique({ where: { email } });
  if (!user) return Response.json({ message: "User not found" }, { status: 404 });
// Generate OTP and set expiry time
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const expiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes
// Store OTP in the database
  await prisma.otps.create({
    data: {
      code: otp,
      expiry,
      userId: user.id,
    },
  });

//   Create a transporter for sending emails
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
// Send OTP email
  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP is ${otp}. It will expire in 10 minutes.`,
  });

  return Response.json({ message: "OTP sent" });
}