'use client';
// import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export type Order = {
  id: string;
  nama: string;
  email: string;
  noHp: string;
  alamat: string;
  metode: string;
  paymentMethod: string;
  paymentDetail: string;
};

export default function Page() {

  const [order, setOrder] = useState<Order[]>([]);
  const router = useRouter();

  const fetchOrder = async () => {
    const res = await fetch('/api/admin/order');
    const data = await res.json();
    setOrder(data);
  };

    const handleDelete = async (id: string) => {
        // Konfirmasi sebelum menghapus
        if (!confirm('Apakah Anda yakin ingin menghapus order ini?')) return;
        // Mengirim permintaan DELETE ke API
        const res = await fetch(`/api/admin/order?id=${id}`, {
            method: 'DELETE',
        });
        // Jika berhasil, panggil fetchorder untuk memperbarui daftar order
        if (res.ok) {
            fetchOrder();
        } else {
            alert('Gagal menghapus order');
        }
    }

  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <main className="min-h-screen">
      <section className="bg-gray-50 py-3">
        <div className="">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold mb-8 text-red-700">Daftar Order</h2>
          </div>

          {/* Tabel produk */}
          <div className="space-y-4">
            {order.map((orders) => (
                <div
                key={orders.id}
                className="bg-white shadow-md rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between"
                >
                <div className="space-y-1 text-sm text-gray-800">
                    <p><span className="font-semibold">Nama:</span> {orders.nama}</p>
                    <p><span className="font-semibold">Email:</span> {orders.email}</p>
                    <p><span className="font-semibold">No HP:</span> {orders.noHp}</p>
                    <p><span className="font-semibold">Alamat:</span> {orders.alamat}</p>
                    <p><span className="font-semibold">Metode Bayar:</span> {orders.paymentMethod}</p>
                    <p><span className="font-semibold">Detail:</span> {orders.paymentDetail}</p>
                </div>

                <div className="mt-4 sm:mt-0 sm:ml-6 flex gap-2">
                    <button
                        onClick={() => {handleDelete(orders.id)}}
                        className="px-3 py-1 text-sm text-white bg-red-700 hover:bg-red-800 rounded"
                        >
                        Hapus
                    </button>
                    <Link href={`/admin/dashboard/order/${orders.id}`}>
                        <button
                        onClick={() => {}}
                        className="px-3 py-1 text-sm text-white bg-black hover:bg-gray-500 rounded"
                        >
                        Detail
                        </button>
                    </Link>
                </div>
                </div>
            ))}
            </div>

        </div>
      </section>
    </main>
  );
}
