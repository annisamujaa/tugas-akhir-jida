// ✅ /app/menu/[id]/page.tsx
export const dynamic = 'force-dynamic';

import { prisma } from '@/lib/prisma';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import QuantityClient from './quantityClient';

export default async function Page({ params }: { params: { id: string } }) {
  const menu = await prisma.menu.findUnique({
    where: { id: params.id },
  });

  if (!menu) return notFound();

  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <h1 className="text-2xl font-bold text-center mb-6">Menu Yang Kamu Pilih</h1>
      <div className="max-w-3xl mx-auto bg-white px-6 py-3 rounded-lg shadow">
        <div className="flex flex-col md:flex-row gap-6 px-3 items-center">
          <div className="w-full md:w-1/3">
            <Image
              src={menu.image}
              alt={menu.name}
              width={300}
              height={300}
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl text-red-700 font-semibold mb-3">{menu.name}</h2>
            <p>{menu.description}</p>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto">
        <QuantityClient price={menu.price} menuId={menu.id} />
      </div>
    </main>
  );
}
