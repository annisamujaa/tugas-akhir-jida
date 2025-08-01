'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import BaseAlert from "@/components/base-alert";
import LoaderSpinner from "@/components/loader-spinner";
import { signIn, getSession } from "next-auth/react";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState({
        type: '',
        message: '',
        isShow: false,
    });
    const [loading, setLoading] = useState(false);
    const [isLoadingGoogle, setIsLoadingGoogle] = useState(false);
    const router = useRouter(); 
  
    const handleLogin = async () => {
      setLoading(true);
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (res?.error) {
        setAlert({
          type: "error",
          message: res.error,
          isShow: true,
        });
        setLoading(false);
      } else {
        // Tunggu session ter-update
        const session = await getSession();
        const role = (session?.user as any)?.role;

        // Redirect sesuai role
        if (role === "admin") {
          router.push("/admin/dashboard");
        } else if (role === "user") {
          router.push("/");
        } else {
          router.push("/");
        }
        setLoading(false);
      }
    };

    const handleGoogleLogin = async () => {
      setIsLoadingGoogle(true);
      const res = await signIn("google", {
        callbackUrl: "/", // arahkan ke dashboard setelah login berhasil
      });
      console.log(res, "Google sign-in response");
      if (res?.error) {
        setAlert({
          type: "error",
          message: res.error,
          isShow: true
        });
        setIsLoadingGoogle(false);
      } else {
        router.push("/"); // ganti ke halaman tujuanmu
        setIsLoadingGoogle(false);
      }
    };

  //    const handleGoogleLogin = async () => {
  //   setIsLoadingGoogle(true);
  //   // Tidak perlu await + tidak perlu router.push
  //   signIn("google", { callbackUrl: "/" });
  // };


  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Kolom Gambar */}
      <div className="hidden md:flex w-full md:w-1/2 h-64 md:h-screen bg-gray-100 items-center justify-center">
        <Image
          src="/assets/images/login.png"
          alt="Login Illustration"
          width={700}
          height={500}
          className="object-cover rounded-lg"
        />
      </div>

      {/* Kolom Form */}
      <div className="w-full md:w-1/2 h-auto md:h-screen flex items-center justify-center p-6 sm:p-8">
        <div className="max-w-md w-full space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-red-700">Masuk ke akun Anda</h2>
            <p className="mt-2 text-sm text-gray-600">
              Belum punya akun? 
              <Link href={"/signup"} className="ps-1 text-red-700 hover:underline">Daftar</Link>
            </p>
          </div>
          <div className="mb-6">
              {alert.isShow && <BaseAlert alert={alert} />}
            </div>

          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Masukkan email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full border rounded-lg p-2 hover:border-red-700"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                placeholder="Masukkan password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full border rounded-lg p-2 hover:border-red-700"
              />
            </div>

          <button
            type="button"
            onClick={handleLogin}
            className="w-full bg-red-700 text-white py-2 rounded-lg hover:bg-red-800 transition">
            {loading ? 
            (<span className="flex items-center justify-center gap-2">Loading... <LoaderSpinner /></span>
            ) : ('Masuk')}
          </button>

            <div className="flex items-center my-4">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="mx-4 text-gray-500 text-sm">or</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>

            <button
              type="button"
              className="w-full text-white bg-black hover:bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center justify-center gap-3 cursor-pointer mb-6"
              disabled={isLoadingGoogle}
              onClick={handleGoogleLogin}
            >
              { isLoadingGoogle ? 'Loading' : 'Masuk dengan Google' }
              { isLoadingGoogle && (<LoaderSpinner />) }
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
