import { NextResponse, NextRequest } from "next/server";
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const menu = await prisma.menu.findUnique({
      where: { id: params.id },
    });
    if (!menu) {
      return NextResponse.json({ error: 'Menu tidak ditemukan' }, { status: 404 });
    }
    return NextResponse.json(menu);
  } catch (error) {
    return NextResponse.json({ error: 'Gagal mengambil menu' }, { status: 500 });
  }
}
