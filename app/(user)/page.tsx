'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
 
const kategori = [
  {
    name: 'Hot Promo',
    description: 'Cek apa saja yang sedang promo',
    image: 'https://res.cloudinary.com/dgdqjrsjb/image/upload/v1753593820/menu/otztpejceurcgoj2pzuw.png',
    href: '/menu',
  },
  {
    name: 'Combox',
    description: 'Paket Makanan untuk berbagai acara',
    image: 'https://res.cloudinary.com/dgdqjrsjb/image/upload/v1753685833/menu/a9cxriqtxsdgpyrwo9yo.png',
    href: '/menu',
  },
  {
    name: 'Pizza',
    description: 'Handmade pizza di setiap outlet Tiap harinya',
    image: 'https://res.cloudinary.com/dgdqjrsjb/image/upload/v1753689199/menu/z7c9g1vj6cooo12uifeu.png',
    href: '/menu',
  },
  {
    name: 'Pasta',
    description: 'Camilan pasta dan nasi untuk melengkapi menu anda',
    image: 'https://res.cloudinary.com/dgdqjrsjb/image/upload/v1753689335/menu/qgb80gfbzr1qjpn9furd.png',
    href: '/menu',
  },
];

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex-grow">
      <section className="mb-10">
        <Image
          src="/assets/images/hero-image.png"
          alt="Hero Image"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover">
        </Image>
      </section>

      <section className='py-10'>
        <h1 className='text-2xl text-center font-bold my-10'>Jelajahi Menu Kami</h1>
        <div className="flex flex-wrap justify-center gap-8">
          {kategori.map((kaegoris: any) => (
            <div
            key={kaegoris.name}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center w-60">
              <div className="w-24 h-24 relative mb-4">
                <Image
                src={kaegoris.image}
                alt={kaegoris.name}
                width={300}
                height={300}
                className="rounded-full object-cover"
               />
               </div>
                        <h3 className="font-semibold text-lg">{kaegoris.name}</h3>
                        <p className="text-sm text-gray-500 flex-1 text-center">{kaegoris.description}</p>
                        <div className="mt-auto w-full flex justify-center">
                          <Link href={kaegoris.href}>
                          <button className="bg-red-600 text-white px-4 py-1 mt-4 rounded-full hover:bg-red-700 w-full">
                            Lihat Menu
                          </button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
      </section >

      <section className='py-10'>
        <h1 className='text-2xl text-center font-bold my-10'>Choose What You Want</h1>
        <div className="max-w-4xl mx-auto flex space-x-6 justify-center items-center text-center">
          <button className="cursor-pointer border rounded-lg p-4 flex-1 flex flex-col items-center justify-center gap-2"
          onClick={() => router.push('/menu')}>
            <Image 
              src="/assets/icon/diantar.png"
              alt="Diantar"
              width={100}
              height={100}
            />
            <span className="text-sm font-medium">Diantar</span>
          </button>

          <button className="cursor-pointer border rounded-lg p-4 flex-1 flex flex-col items-center justify-center gap-2"
          onClick={() => router.push('/menu')}>
            <Image 
              src="/assets/icon/dijemput.png"
              alt="Dijemput"
              width={100}
              height={100}
            />
            <span className="text-sm font-medium">Dijemput</span>
          </button>
        </div>
      </section>
    </main>
    
  )
}