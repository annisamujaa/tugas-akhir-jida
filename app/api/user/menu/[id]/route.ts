// app/api/admin/menu/[id]/route.ts

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: Request) {
  const url = new URL(req.url)
  const id = url.pathname.split("/").pop() // ambil ID dari URL

  // contoh: fetch menu dari DB pakai ID
  const menu = await prisma.menu.findUnique({
    where: { id: id || "" }
  })

  if (!menu) {
    return NextResponse.json({ error: "Menu not found" }, { status: 404 })
  }

  return NextResponse.json(menu)
}
