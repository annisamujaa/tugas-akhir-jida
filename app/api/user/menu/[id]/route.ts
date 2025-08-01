import { NextRequest, NextResponse } from "next/server";
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  const { pathname } = new URL(request.url);
  const parts = pathname.split('/');
  const id = parts[parts.length - 1];

  try {
    const menu = await prisma.menu.findUnique({
      where: { id },
    });
    if (!menu) {
      return NextResponse.json({ error: 'Menu tidak ditemukan' }, { status: 404 });
    }
    return NextResponse.json(menu);
  } catch (error) {
    return NextResponse.json({ error: 'Gagal mengambil menu' }, { status: 500 });
  }
}
