// app/api/admin/menu/[id]/route.ts

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const id = request.nextUrl.pathname.split("/").pop(); // ambil id dari URL

  if (!id) {
    return NextResponse.json({ error: "ID tidak valid" }, { status: 400 });
  }

  try {
    const menu = await prisma.menu.findUnique({
      where: { id },
    });

    if (!menu) {
      return NextResponse.json({ error: "Menu tidak ditemukan" }, { status: 404 });
    }

    return NextResponse.json(menu);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Gagal mengambil menu" }, { status: 500 });
  }
}
