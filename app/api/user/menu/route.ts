import  {prisma} from '@/lib/prisma' // Import prisma client from your lib
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const menus = await prisma.menu.findMany();
    return NextResponse.json(menus);
  } catch (error) {
    console.error("Error fetching menu:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}