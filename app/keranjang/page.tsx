'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export type Keranjang = {
  id: string;
  userId: string;
  menuId: string;
  size: string;
  quantity: number;
  totalPrice: number;
  extraCheese: boolean;
  menu: {
    name: string;
    image: string;
    price: number;
  };
};

export default function Page() {
  const { data: session } = useSession();
  const [keranjang, setKeranjang] = useState<Keranjang[]>([]);
  const totalHarga = keranjang.reduce((acc, item) => acc + item.totalPrice, 0);
  const router = useRouter();


  const fetchKeranjang = async () => {
    if (!session?.user?.id) return;
      try {
        const res = await fetch(`/api/user/keranjang?userId=${session.user.id}`);
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

        const text = await res.text();
        const data = text ? JSON.parse(text) : [];
        setKeranjang(data);
      } catch (error) {
        console.error("Failed to fetch keranjang:", error);
      }
    };

    const handleDelete = async (id: string) => {
        // Konfirmasi sebelum menghapus
        if (!confirm('Apakah Anda yakin ingin menghapus menu ini dari keranjang?')) return;
        // Mengirim permintaan DELETE ke API
        const res = await fetch(`/api/user/keranjang?id=${id}`, {
            method: 'DELETE',
        });
        // Jika berhasil, panggil fetchMenu untuk memperbarui daftar menu
        if (res.ok) {
            fetchKeranjang();
        } else {
            alert('Gagal menghapus menu');
        }
    }

    const handleCheckoutClick = () => {
        localStorage.setItem('keranjang', JSON.stringify(keranjang));
        router.push(`/checkout?total=${totalHarga}`);
    };

  useEffect(() => {
    fetchKeranjang();
  }, [session]);


  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
        <h1 className="text-2xl font-bold text-center mb-6">Keranjang</h1>

        {keranjang.length === 0 ? (
            <p className="text-center text-gray-500">Keranjang kosong.</p>
        ) : (
            <ul className="space-y-4 ">
            {keranjang.map((item) => (
                <li key={item.id} className="bg-white shadow-md p-4 rounded-lg flex gap-4">
                <div className="w-24 h-24 relative flex-shrink-0">
                    <Image
                    src={item.menu.image}
                    alt={item.menu.name}
                    fill
                    className="object-cover rounded-md"
                    />
                </div>

                <div className="flex flex-col w-full">
                    <p className="font-semibold text-lg text-red-700">
                    {item.menu.name}
                    </p>

                    <div className="text-sm text-gray-700 space-y-1 mt-2">
                    <div className="flex justify-between">
                        <span>Size:</span>
                        <span>{item.size}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Quantity:</span>
                        <span>{item.quantity}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Extra Cheese:</span>
                        <span>{item.extraCheese ? "Ya" : "Tidak"}</span>
                    </div>
                    <div className="flex justify-between font-semibold border-t pt-2 mt-2">
                        <span>Subtotal:</span>
                        <span> Rp {item.totalPrice.toLocaleString()}</span>
                    </div>
                    </div>
                    <div className="text-right mt-4">
                        <button type='button' 
                        onClick={() => handleDelete(item.id)}
                        className='bg-red-700 hover:bg-red-800 text-white rounded-lg py-1 px-4'>
                            Hapus Pesanan</button>
                    </div>
                </div>
                </li>
            ))}
                <li className='space-y-6'>
                    <Link href={'/menu'}>
                        <button
                            type="button"
                            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 w-full rounded-lg transition">
                            + Tambah Pesanan
                        </button>
                    </Link>
                    <div className="border-t py-4 my-4">
                        <div className=" bg-white px-4 py-4 rounded-lg shadow-sm">
                        <h1 className='font-semibold text-xl'>Total Harga: <span className='text-red-700'>Rp {totalHarga.toLocaleString()}</span></h1>
                        {/* <h1 className='font-semibold text-2xl'>Rp {totalHarga}</h1> */}
                        </div>
                    </div>
                        <button
                            type="button"
                            onClick={handleCheckoutClick}
                            className="bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-4 w-full rounded-lg transition">
                            Checkout Sekarang
                        </button>
                    
                </li>
            </ul>
        )}
    </main>

  );
}
