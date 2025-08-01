import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// // GET detail order
// export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
//   try {
//     const order = await prisma.order.findUnique({
//       where: { id: params.id },
//       include: {
//         items: {
//           include: {
//             menu: true,
//           },
//         },
//       },
//     });

//     if (!order) {
//       return NextResponse.json({ error: "Order tidak ditemukan" }, { status: 404 });
//     }

//     return NextResponse.json(order);
//   } catch (error: any) {
//     console.error("Gagal ambil detail order:", error.message);
//     return NextResponse.json({ error: "Server error", detail: error.message }, { status: 500 });
//   }
// }


// GET detail order
export async function GET(req: NextRequest) {
  const id = req.nextUrl.pathname.split("/").pop();

  if (!id) {
    return NextResponse.json({ error: "ID tidak ditemukan" }, { status: 400 });
  }

  try {
    const order = await prisma.order.findUnique({
      where: { id },
      include: {
        items: {
          include: {
            menu: true,
          },
        },
      },
    });

    if (!order) {
      return NextResponse.json({ error: "Order tidak ditemukan" }, { status: 404 });
    }

    return NextResponse.json(order);
  } catch (error: any) {
    console.error("Gagal ambil detail order:", error.message);
    return NextResponse.json({ error: "Server error", detail: error.message }, { status: 500 });
  }
}
