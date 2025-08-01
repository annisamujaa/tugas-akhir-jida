import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  // Ambil ID dari pathname: /api/admin/menu/[id]
  const id = request.nextUrl.pathname.split("/").pop();

  if (!id) {
    return NextResponse.json({ message: "ID tidak ditemukan" }, { status: 400 });
  }

  try {
    const menu = await prisma.menu.findUnique({
      where: { id },
    });

    if (!menu) {
      return NextResponse.json({ message: "Menu tidak ditemukan" }, { status: 404 });
    }

    return NextResponse.json(menu);
  } catch (error) {
    console.error("Gagal fetch menu:", error);
    return NextResponse.json({ message: "Terjadi kesalahan server" }, { status: 500 });
  }
}
