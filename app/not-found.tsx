// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#fff6f6] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-[100px] font-extrabold text-red-700 leading-none mb-4">404</h1>
      <p className="text-2xl text-gray-800 font-semibold mb-2">Halaman Tidak Ditemukan</p>
      <p className="text-gray-600 mb-6">
        Sepertinya kamu nyasar... Tapi jangan khawatir, kami masih punya banyak pizza enak menunggumu!
      </p>
      <Link
        href="/"
      >
        <button type="button" className="bg-red-700 hover:bg-red-800 text-white text-lg font-bold py-2 px-6 rounded-full shadow-md transition">
            Kembali ke Beranda
        </button>
      </Link>
    </div>
  );
}
