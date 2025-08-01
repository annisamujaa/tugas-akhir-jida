import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest, context: { params: { id: string } }) {
  const id = context.params.id;

  const menu = await prisma.menu.findUnique({
    where: { id },
  });

  if (!menu) {
    return new Response("Menu not found", { status: 404 });
  }

  return Response.json(menu);
}
