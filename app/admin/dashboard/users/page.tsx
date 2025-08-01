'use client';
// import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PencilIcon, TrashIcon} from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

export type Users = {
  id: string;
  name: string;
  email : string;
  role: string;
};

export default function Page() {

  const [users, setUsers] = useState<Users[]>([]);
  const router = useRouter();

  const fetchUsers= async () => {
    const res = await fetch('/api/admin/users');
    const data = await res.json();
    setUsers(data);
  };

    // const handleDelete = async (id: string) => {
    //     // Konfirmasi sebelum menghapus
    //     if (!confirm('Apakah Anda yakin ingin menghapus menu ini?')) return;
    //     // Mengirim permintaan DELETE ke API
    //     const res = await fetch(`/api/admin/menu?id=${id}`, {
    //         method: 'DELETE',
    //     });
    //     // Jika berhasil, panggil fetchMenu untuk memperbarui daftar menu
    //     if (res.ok) {
    //         fetchMenu();
    //     } else {
    //         alert('Gagal menghapus menu');
    //     }
    // }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <main className="min-h-screen">
      <section className="bg-gray-50 py-3">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold mb-8 text-red-600">Daftar User</h2>
          </div>

          {/* Tabel produk */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-xl shadow-md">
              <thead>
                <tr>
                  <th className="py-3 px-6 text-left font-semibold text-gray-700">Nama</th>
                  <th className="py-3 px-6 text-left font-semibold text-gray-700">Email</th>
                  <th className="py-3 px-6 text-left font-semibold text-gray-700">Role</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b">
                    <td className="py-1 px-6">{user.name}</td>
                    <td className="py-1 px-6 max-w-xs truncate">{user.email}</td>
                    <td className="py-1 px-6 max-w-xs truncate">{user.role}</td>
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
