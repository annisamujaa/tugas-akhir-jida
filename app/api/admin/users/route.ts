import  {prisma} from '@/lib/prisma' // Import prisma client from your lib
import { NextRequest, NextResponse } from 'next/server';

// Read Users
export async function GET() {
  const user = await prisma.users.findMany();
  return NextResponse.json(user);
}