'use client';
// import Image from 'next/image';
import { useRouter } from 'next/navigation';
import MenuForm from '@/components/admin/menuForm';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

export type Menu = {
  id: string;
  name: string;
  price : number;
  category: string;
  description: string;
  image: string;
};

export default function AddMenu() {
  const router = useRouter();

  const handleSubmit = async (data: Partial<Menu>) => {
    try {
      const res = await fetch('/api/admin/menu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json();
        console.error('Gagal menyimpan menu:', err);
        alert('Gagal menyimpan menu');
        return;
      }
      router.push('/admin/dashboard/menu');
    } catch (error) {
      console.error('Error saat submit menu:', error);
      alert('Terjadi kesalahan saat menyimpan menu');
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
                <h2 className="text-2xl font-bold mb-4 text-red-600">Tambah Menu</h2>
            </div>

            {/* Tabel tambah produk */}
            <div className="mb-6">
                <MenuForm onSubmit={handleSubmit}/>
            </div>
        </div>
      </section>
    </main>
  );
}
