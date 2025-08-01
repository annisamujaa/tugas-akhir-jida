import  {prisma} from '@/lib/prisma' // Import prisma client from your lib
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const menus = await prisma.menu.findMany();
    return NextResponse.json(menus);
  } catch (error) {
    console.error("Error fetching menu:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}


export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, price, category, description, image } = body;

    // Validasi manual
    if (!name || !price || !category || !description || !image) {
      return NextResponse.json({ error: "Semua field harus diisi." }, { status: 400 });
    }

    const newMenu = await prisma.menu.create({
      data: {
        name,
        price: parseFloat(price),
        category,
        description,
        image,
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

// // Mengupdate data
// export async function PATCH(request: NextRequest) {
//   const searchParams = request.nextUrl.searchParams;
//   const id = searchParams.get('id');

//   if (!id) {
//     return NextResponse.json({ error: 'ID tidak diberikan' }, { status: 400 });
//   }

//   const body = await request.json();
//   const { name, description, image } = body;

//   const index = menus.findIndex((p) => p.id === Number(id));
//   if (index === -1) {
//     return NextResponse.json({ error: 'Produk tidak ditemukan' }, { status: 404 });
//   }

//   menus[index] = {
//     ...menus[index],
//     name: name ?? menus[index].name,
//     description: description ?? menus[index].description,
//     image: image ?? menus[index].image,
//   };

//   return NextResponse.json(menus[index]);
// }

// Menghapus data
export async function DELETE(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get('id'); // e.g. `/api/search?id=hello`

  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 });
  }

  // Hapus dari array
  await prisma.menu.delete({
    where: { id },
  });

  return NextResponse.json({ success: true, message: `Deleted product with ID ${id}` });
}

