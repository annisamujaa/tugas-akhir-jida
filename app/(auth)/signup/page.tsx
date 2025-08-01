"use client";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useRouter } from "next/navigation";
import BaseAlert from "@/components/base-alert";
import LoaderSpinner from "@/components/loader-spinner";
import Link from "next/link";

export default function SignUpPage() {
  const [registerName, setName] = useState('');
  const [registerEmail, setEmail] = useState('');
  const [registerPassword, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [alert, setAlert] = useState({
    type: '',
    message: '',
    isShow: false,
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignUp = async () => {
    setLoading(true);
    console.log('Sign Up:', { name: registerName, email: registerEmail, password: registerPassword, role: role });
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({
        name: registerName,
        email: registerEmail,
        password: registerPassword,
        role: role,
      }),
      headers: {'Content-Type': 'application/json'},
    });
    const data = await res.json();
    if (res.ok) {
      setAlert({
        type: 'success',
        message: 'Akun berhasil dibuat! Silakan masuk.',
        isShow: true,
      });
      // Redirect to login page after successful registration
      setLoading(false);
      // Simpan email untuk verifikasi
      localStorage.setItem('pendingVerifyEmail', registerEmail);
      setTimeout(() => {
        router.push('/verify');
      }, 1000);
    } else {
      setAlert({
      type: 'error',
      message: data.error || 'Terjadi kesalahan saat membuat akun.',
      isShow: true,
    });

      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Kolom Gambar */}
      <div className="hidden md:flex w-full md:w-1/2 h-64 md:h-screen bg-gray-100 items-center justify-center">
        <Image
          src="/assets/images/signup.png"
          alt="Login Illustration"
          width={700}
          height={500}
          className="object-cover rounded-lg"
        />
      </div>

      {/* Kolom Form */}
      <div className="w-full md:w-1/2 h-auto md:h-screen flex items-center justify-center p-6 sm:p-8 mt-10">
        <div className="max-w-md w-full space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-red-600">Buat Akun Baru</h2>
            <p className="mt-2 text-sm text-gray-600">
              Sudah punya akun? 
              <Link href={"/login"} className="ps-1 text-red-600 hover:underline">Daftar</Link>
            </p>
          </div>

          <form className="space-y-4">
            {alert.isShow && (
              <BaseAlert alert={{type:alert.type, message:alert.message}}></BaseAlert>)}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
              <input
                id="name"
                type="text"
                placeholder="Masukkan nama lengkap"
                value={registerName}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 block w-full border rounded-lg hover:border-red-700 p-2"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Masukkan email"
                value={registerEmail}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full border rounded-lg hover:border-red-700 p-2"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700"> Password</label>
              <input
                id="password"
                type="password"
                placeholder="Masukkan password"
                value={registerPassword}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full border rounded-lg hover:border-red-700 p-2"
              />
            </div>
            <button
              type="button"
              onClick={handleSignUp}
              className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
              {loading ? 
              (<span className="flex items-center justify-center gap-2">Loading... <LoaderSpinner /></span>
              ) : ('Daftar')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
