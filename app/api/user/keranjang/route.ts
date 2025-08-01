import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma'; 
import { NextRequest} from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { userId, menuId, size, quantity, extraCheese, totalPrice } = body;

    const newMenu = await prisma.keranjang.create({
      data: {
        userId,
        menuId,
        size,
        quantity,
        extraCheese,
        totalPrice
      },
    });

    return NextResponse.json(newMenu, { status: 201 });
  } catch (error: any) {
    console.error("Gagal membuat menu:", error.message);
    return NextResponse.json(
      { error: "Terjadi kesalahan saat menyimpan menu", detail: error.message },
      { status: 500 }
    );
  }
}

// GET method in route.ts
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ error: "userId diperlukan" }, { status: 400 });
  }

  const data = await prisma.keranjang.findMany({
    where: { userId },
    include: {
      menu: true,
    },
  });

  return NextResponse.json(data);
}

export async function DELETE(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get('id'); // e.g. `/api/search?id=hello`
  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 });
  }
  // Hapus dari array
  await prisma.keranjang.delete({
    where: { id },
  });

  return NextResponse.json({ success: true, message: `Deleted product with ID ${id}` });
}



