import { NextRequest, NextResponse } from "next/server";
import { prisma } from '@/lib/prisma';

type Params = {
  params: {
    id: string;
  };
};

export async function GET(request: NextRequest, { params }: Params) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: "ID tidak valid" }, { status: 400 });
  }

  try {
    const menu = await prisma.menu.findUnique({ where: { id } });

    if (!menu) {
      return NextResponse.json({ error: 'Menu tidak ditemukan' }, { status: 404 });
    }

    return NextResponse.json(menu);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Gagal mengambil menu' }, { status: 500 });
  }
}
