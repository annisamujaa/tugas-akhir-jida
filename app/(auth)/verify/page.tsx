'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LoaderSpinner from '@/components/loader-spinner';
import BaseAlert from '@/components/base-alert';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function VerifyPage() {
 const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState({
    type: "",
    message: "",
    isShow: false
  });
  const router = useRouter();

  const verifyOtp = async () => {
    setIsLoading(true);
    const res = await fetch("/api/auth/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, otp }),
    });

    const data = await res.json();

    if (res.ok){
      setAlert({
        type: "success",
        message: "Verification successful, you can now login",
        isShow: true
      });
      setIsLoading(false);
      localStorage.removeItem("pendingVerifyEmail");

      setTimeout(() => {
        router.push("/login");
      }, 1000);
    }else{
      setAlert({
        type: "error",
        message: data.message || "Verification failed",
        isShow: true
      });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const pendingVerifyEmail = localStorage.getItem("pendingVerifyEmail");
    setEmail(pendingVerifyEmail || "");
  }, [])

  const sendOtp = async () => {
    await fetch("/api/auth/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <div className='justify-left mb-5'>
            <button
            onClick={() => router.back()}
            className="inline-flex items-center text-red-600 hover:text-red-800 text-sm font-medium">
                <ArrowLeftIcon className="h-5 w-5 mr-1" />
                Kembali
            </button>
        </div>
        <div className='text-center'>
            <h1 className="text-2xl font-bold text-red-600 mb-4">Masukkan Kode Verifikasi</h1>
            <p className="text-gray-600 mb-6">Kami telah mengirim 6 digit kode ke email kamu. Masukkan kode untuk melanjutkan.</p>
            { alert.isShow && (
                    <BaseAlert alert={{ type: alert.type, message: alert.message }} />
                )}
            <form className="space-y-4">
            <input
                id='otp'
                type="text"
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full text-center tracking-widest text-xl border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="••••••"
                inputMode="numeric"
                required
            />

            <button
                type="button"
                onClick={verifyOtp}
                className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
                {loading ? 
                (<span className="flex items-center justify-center gap-2">Memverifikasi... <LoaderSpinner /></span>
                ) : ('Verifikasi')}
            </button>
            </form>

            {/* {message && (
            <p className="mt-4 font-medium text-sm text-center">{message}</p>
            )} */}

            <p className="mt-6 text-sm text-gray-500">
            Tidak menerima kode? 
            <button onClick={sendOtp} className="text-red-600 hover:underline">Kirim ulang</button>
            </p>
        </div>
      </div>
    </div>
  )
}
