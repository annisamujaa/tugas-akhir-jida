'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import MenuForm from '@/components/admin/menuForm';
import { Menu } from '@/app/admin/dashboard/menu/addMenu/page'; // Import tipe yang sama dengan AddMenu

export default function EditMenu() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [menu, setMenu] = useState<Menu | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchMenu = async () => {
      try {
        const res = await fetch(`/api/admin/menu/${id}`);
        const data = await res.json();
        if (res.ok) {
          setMenu(data);
        } else {
          console.error('Gagal mengambil data menu:', data);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchMenu();
  }, [id]);

  const handleUpdate = async (data: Partial<Menu>) => {
    try {
      const res = await fetch(`/api/admin/menu/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json();
        console.error('Gagal memperbarui menu:', err);
        alert('Gagal memperbarui menu');
        return;
      }

      router.push('/admin/dashboard/menu');
    } catch (error) {
      console.error('Error saat update menu:', error);
      alert('Terjadi kesalahan saat memperbarui menu');
    }
  };

  return (
    <main className="min-h-screen">
      <section className="bg-gray-50 py-3">
        <div className="max-w-4xl mx-auto px-4">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-1 bg-white text-red-600 px-2 py-1 text-sm border border-red-600 rounded-lg hover:bg-red-50 transition-all duration-200 shadow-sm">
            <ArrowLeftIcon className="h-4 w-4" />
            Kembali
          </button>

          <div className="flex justify-between items-center my-5">
            <h2 className="text-2xl font-bold mb-4 text-red-600">Edit Menu</h2>
          </div>

          <div className="mb-6">
            {loading ? (
              <p>Loading...</p>
            ) : menu ? (
              <MenuForm initialData={menu} onSubmit={handleUpdate} />
            ) : (
              <p>Menu tidak ditemukan.</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
