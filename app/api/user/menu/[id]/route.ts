import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { URL } from 'url';

// Helper untuk ambil ID dari URL
function extractIdFromUrl(req: NextRequest) {
  const pathname = new URL(req.url).pathname;
  const id = pathname.split('/').pop();
  return id || '';
}

// GET menu by ID
export async function GET(req: NextRequest) {
  const id = extractIdFromUrl(req);

  if (!id) {
    return NextResponse.json({ error: 'ID tidak ditemukan' }, { status: 400 });
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
    console.error('Gagal ambil menu:', error);
    return NextResponse.json({ error: 'Terjadi kesalahan server' }, { status: 500 });
  }
}

// PATCH update menu by ID
export async function PATCH(req: NextRequest) {
  const id = extractIdFromUrl(req);

  if (!id) {
    return NextResponse.json({ error: 'ID tidak ditemukan' }, { status: 400 });
  }

  try {
    const body = await req.json();
    const { name, price, description, image } = body;

    const updatedMenu = await prisma.menu.update({
      where: { id },
      data: { name, price, description, image },
    });

    return NextResponse.json(updatedMenu);
  } catch (error) {
    console.error('Gagal update menu:', error);
    return NextResponse.json({ error: 'Gagal mengupdate produk' }, { status: 500 });
  }
}
