import  {prisma} from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth"; 

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }

  interface User {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { userId, nama, email, noHp, alamat, metode, total, paymentMethod, paymentDetail, items } = body;
    const newOrder = await prisma.order.create({
      data: {
        userId, 
        nama,
        email,
        noHp,
        alamat,
        metode,
        total,
        paymentMethod,
        paymentDetail,
        items: {
          create: items.map((item: any) => ({
            menuId: item.menuId,
            size: item.size,
            quantity: item.quantity,
            extraCheese: item.extraCheese,
            subtotal: item.subtotal,
          }))
        }
      },
    });

    await prisma.keranjang.deleteMany({
    where: {
        userId: userId,
    },
    });

    return NextResponse.json(newOrder, { status: 201 });
  } catch (error: any) {
    console.error("Gagal membuat order:", error.message);
    return NextResponse.json(
      { error: "Terjadi kesalahan saat menyimpan order", detail: error.message },
      { status: 500 }
    );
  }
}


export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const orders = await prisma.order.findMany({
      where: { userId: session.user.id },
      include: {
        items: {
          include: {
            menu: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(orders);
  } catch (error) {
    console.error("Error fetching user orders:", error);
    return NextResponse.json({ error: "Terjadi kesalahan saat mengambil order" }, { status: 500 });
  }
}

