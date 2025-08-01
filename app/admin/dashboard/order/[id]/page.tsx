'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export type Order = {
  id: string;
  nama: string;
  email: string;
  noHp: string;
  alamat: string;
  metode: string;
  total: number;
  paymentMethod: string;
  paymentDetail: string;
  items: {
    id: string;
    menu?: {
      name: string;
    };
    size: string;
    quantity: number;
    extraCheese: boolean;
    subtotal: number;
  }[];
};


export default function Page() {
  const params = useParams();
  const id = params.id as string;

  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await fetch(`/api/admin/order/${id}`);
        const data = await res.json();
        if (res.ok) {
          setOrder(data);
        } else {
          console.error('Gagal mengambil data order:', data);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchOrder();
  }, [id]);

  if (loading) return <div className="p-4">Loading...</div>;
  if (!order) return <div className="p-4 text-red-500">Order tidak ditemukan.</div>;

  return (
    <main className="min-h-screen p-6">
      <section className="bg-gray-50 py-4 px-6 rounded-md shadow-md">
        <h1 className='font-semibold py-4 text-red-700 text-lg'>Detail Pesanan</h1>
        <div className="mb-6 space-y-1 text-sm">
          <p><span className="font-semibold">Nama:</span> {order.nama}</p>
          <p><span className="font-semibold">Email:</span> {order.email}</p>
          <p><span className="font-semibold">No HP:</span> {order.noHp}</p>
          <p><span className="font-semibold">Alamat:</span> {order.alamat}</p>
          <p><span className="font-semibold">Metode Pengiriman:</span> {order.metode}</p>
          <p><span className="font-semibold">Metode Pembayaran:</span> {order.paymentMethod}</p>
          <p><span className="font-semibold">Detail Pembayaran:</span> {order.paymentDetail}</p>
        </div>

        <h2 className="text-md font-semibold mb-2">Item Pesanan</h2>
        <table className="min-w-full bg-white border rounded-lg text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 text-left">Menu</th>
              <th className="py-2 px-4 text-left">Ukuran</th>
              <th className="py-2 px-4 text-left">Keju Tambahan</th>
              <th className="py-2 px-4 text-left">Jumlah</th>
              <th className="py-2 px-4 text-left">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="py-2 px-4">{item.menu?.name || "-"}</td>
                <td className="py-2 px-4">{item.size}</td>
                <td className="py-2 px-4">{item.extraCheese ? "Ya" : "Tidak"}</td>
                <td className="py-2 px-4">{item.quantity}</td>
                <td className="py-2 px-4">Rp {item.subtotal.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex my-4">
            <p className="text-md font-semibold">Total :</p>
            <p className="text-md font-semibold ms-1">Rp {order.total?.toLocaleString() ?? '0'}</p>
        </div>

        <div className="my-4 py-4">
          <Link href="/admin/dashboard/order">
            <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-sm rounded">
              Kembali ke Daftar Order
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
