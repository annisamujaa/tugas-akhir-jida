import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const body = await request.json();
  const { name, price, description, image } = body;

  try {
    const updatedMenu = await prisma.menu.update({
      where: { id },
      data: { name, price, description, image },
    });

    return NextResponse.json(updatedMenu);
  } catch (error) {
    console.error('Update error:', error);
    return NextResponse.json(
      { error: 'Gagal mengupdate produk' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request,{ params }: { params: { id: string } }) {
  try {
    const menu = await prisma.menu.findUnique({
      where: { id: params.id },
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
