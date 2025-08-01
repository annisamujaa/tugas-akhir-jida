import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(request: NextRequest) {
  const id = request.nextUrl.pathname.split('/').pop(); // ambil ID dari URL

  if (!id) {
    return NextResponse.json({ error: 'ID tidak valid' }, { status: 400 });
  }

  try {
    const body = await request.json();
    const { name, price, description, image } = body;

    const updatedMenu = await prisma.menu.update({
      where: { id },
      data: { name, price, description, image },
    });

    return NextResponse.json(updatedMenu);
  } catch (error) {
    console.error('PATCH menu error:', error);
    return NextResponse.json({ error: 'Gagal mengupdate produk' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  const id = request.nextUrl.pathname.split('/').pop(); // ambil ID dari URL

  if (!id) {
    return NextResponse.json({ error: 'ID tidak valid' }, { status: 400 });
  }

  try {
    const menu = await prisma.menu.findUnique({
      where: { id },
    });

    if (!menu) {
      return NextResponse.json({ error: 'Menu tidak ditemukan' }, { status: 404 });
    }

    return NextResponse.json(menu);
  } catch (error) {
    console.error('GET menu error:', error);
    return NextResponse.json({ error: 'Gagal mengambil menu' }, { status: 500 });
  }
}
