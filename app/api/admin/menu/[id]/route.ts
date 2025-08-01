// import { prisma } from '@/lib/prisma';
// import { NextRequest, NextResponse } from 'next/server';


// export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
//   const { id } = params;

//   if (!id) {
//     return NextResponse.json({ error: "ID tidak ditemukan" }, { status: 400 });
//   }

//   try {
//     const menu = await prisma.menu.findUnique({
//       where: { id },
//     });

//     if (!menu) {
//       return NextResponse.json({ error: "Menu tidak ditemukan" }, { status: 404 }); // ✅ HARUS JSON
//     }

//     return NextResponse.json(menu);
//   } catch (error) {
//     console.error("Gagal fetch menu:", error);
//     return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 }); // ✅ HARUS JSON
//   }
// }

// export async function PATCH(
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   const { id } = params;

//   try {
//     const body = await req.json();

//     // Validasi manual (opsional tapi disarankan)
//     if (!body.name || !body.price || !body.description) {
//       return NextResponse.json(
//         { error: 'Field wajib tidak lengkap' },
//         { status: 400 }
//       );
//     }

//     const updated = await prisma.menu.update({
//       where: { id },
//       data: {
//         name: body.name,
//         price: Number(body.price),
//         description: body.description,
//         image: body.image,
//       },
//     });

//     return NextResponse.json(updated);
//   } catch (error) {
//     console.error('PATCH Error:', error);
//     return NextResponse.json({ error: 'Gagal mengupdate menu' }, { status: 500 });
//   }
// }

import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const id = req.nextUrl.pathname.split('/').pop(); // atau pakai regex
  if (!id) {
    return NextResponse.json({ error: 'ID tidak ditemukan' }, { status: 400 });
  }

  try {
    const menu = await prisma.menu.findUnique({ where: { id } });
    if (!menu) {
      return NextResponse.json({ error: 'Menu tidak ditemukan' }, { status: 404 });
    }

    return NextResponse.json(menu);
  } catch (error) {
    console.error('GET Error:', error);
    return NextResponse.json({ error: 'Terjadi kesalahan server' }, { status: 500 });
  }
}


export async function PATCH(req: NextRequest) {
  const id = req.nextUrl.pathname.split('/').pop();

  if (!id) {
    return NextResponse.json({ error: 'ID tidak ditemukan' }, { status: 400 });
  }

  const body = await req.json();

  try {
    const updated = await prisma.menu.update({
      where: { id },
      data: body,
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Gagal update menu' }, { status: 500 });
  }
}

