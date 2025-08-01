'use client';
// import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PencilIcon, TrashIcon} from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

export type Menu = {
  id: string;
  name: string;
  price : number;
  category: string;
  description: string;
  image: string;

};

export default function Menu() {

  const [menu, setMenu] = useState<Menu[]>([]);
  const router = useRouter();

  const fetchMenu = async () => {
    const res = await fetch('/api/admin/menu');
    const data = await res.json();
    setMenu(data);
  };

    const handleDelete = async (id: string) => {
        // Konfirmasi sebelum menghapus
        if (!confirm('Apakah Anda yakin ingin menghapus menu ini?')) return;
        // Mengirim permintaan DELETE ke API
        const res = await fetch(`/api/admin/menu?id=${id}`, {
            method: 'DELETE',
        });
        // Jika berhasil, panggil fetchMenu untuk memperbarui daftar menu
        if (res.ok) {
            fetchMenu();
        } else {
            alert('Gagal menghapus menu');
        }
    }

  useEffect(() => {
    fetchMenu();
  }, []);

  return (
    <main className="min-h-screen">
      <section className="bg-gray-50 py-3">
        <div className="">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold mb-8 text-red-600">Daftar Menu</h2>
            <Link href="/admin/dashboard/menu/addMenu">
              <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 mb-4">
                Tambah Menu
              </button>
            </Link> 
          </div>

          {/* Tabel produk */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-xl shadow-md">
              <thead>
                <tr>
                  <th className="py-3 px-6 text-left font-semibold text-gray-700">Gambar</th>
                  <th className="py-3 px-6 text-left font-semibold text-gray-700">Nama</th>
                  <th className="py-3 px-6 text-left font-semibold text-gray-700">Deskripsi</th>
                  <th className="py-3 px-6 text-left font-semibold text-gray-700">Price</th>
                  <th className="py-3 px-6 text-left font-semibold text-gray-700">Kategori</th>
                  <th className="py-3 px-6 text-left font-semibold text-gray-700">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {menu.map((menu) => (
                  <tr key={menu.id} className="border-b">
                    <td className="py-1 px-3">
                      <Image
                        src={menu.image}
                        alt={menu.name}
                        width={50}
                        height={50}
                        className="rounded-full object-cover">
                      </Image>
                    </td>
                    <td className="py-1 px-3">{menu.name}</td>
                    <td className="py-1 px-3 max-w-xs truncate">{menu.description}</td>
                    <td className="py-1 px-3 ">{menu.price}</td>
                    <td className="py-1 px-3 ">{menu.category}</td>
                    <td className="py-1 px-3">
                        <Link href={`/admin/dashboard/menu/${menu.id}`}>
                            <button
                                className="p-2 rounded hover:bg-gray-100 text-black"
                                title="Edit"
                                aria-label="Edit"
                                type="button">
                                <PencilIcon className="h-5 w-5" />
                            </button>
                        </Link>
                        <button
                            onClick={() => handleDelete(menu.id)}
                            className="p-2 rounded hover:bg-red-100 text-red-600 ml-2"
                            title="Delete"
                            aria-label="Delete"
                            type="button" >
                            <TrashIcon className="h-5 w-5" />
                        </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
