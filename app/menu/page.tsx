"use client";
import Image from 'next/image';
// import { fetchMenu } from '@/lib/data';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export type Menu = {
  id: string;
  name: string;
  price : number;
  category: string;
  description: string;
  image: string;
};

export default function Menu() {
//   const menus = await fetchMenu();
const [menu, setMenu] = useState<Menu[]>([]);

const fetchMenu = async () => {
  try {
    const res = await fetch('/api/user/menu');
    
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const text = await res.text();
    const data = text ? JSON.parse(text) : [];
    setMenu(data);
  } catch (error) {
    console.error("Failed to fetch menu:", error);
  }
};

  useEffect(() => {
    fetchMenu();
  }, []);

  const [activeTab, setActiveTab] = useState<'pizza' | 'pasta'>('pizza');
  
    const handleTabClick = (tab: 'pizza' | 'pasta') => {
        setActiveTab(tab);
    };

  return (
    <main className="min-h-screen">
      <section className='py-5'>
        <h1 className='text-2xl font-bold text-center'>Pilih Menu</h1>
      </section>

      <section className="flex justify-center">
        <div className="flex w-full max-w-lg space-x-2">
          <button
            onClick={() => handleTabClick('pizza')}
            className={`flex-1 px-4 py-2 rounded-lg font-medium text-center transition-all duration-200 ${
              activeTab === 'pizza'
                ? 'bg-red-700 text-white'
                : 'text-gray-700 hover:bg-red-100'
            }`}
          >
            Pizza
          </button>

          <button
            onClick={() => handleTabClick('pasta')}
            className={`flex-1 px-4 py-2 rounded-lg font-medium text-center transition-all duration-200 ${
              activeTab === 'pasta'
                ? 'bg-red-700 text-white'
                : 'text-gray-700 hover:bg-red-100'
            }`}
          >
            Pasta
          </button>
        </div>
      </section>


      <section className="bg-gray-50 py-12">
      {activeTab === 'pizza' && (
        <div className="flex flex-wrap justify-center gap-8">
            {menu.filter((item) => item.category.toLowerCase() === 'pizza').map((menu) => (
              <div
                key={menu.name}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center w-60"
              >
                <div className="w-24 h-24 relative mb-4">
                  <Image
                    src={menu.image}
                    alt={menu.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg my-2">{menu.name}</h3>
                <p className="text-sm text-gray-500 flex-1 text-center line-clamp-2 my-2">{menu.description}</p>
                <div className="mt-auto w-full flex justify-center">
                  <Link href={`/menu/${menu.id}`}>
                  <button className=" cursor-pointer bg-red-600 text-white px-10 py-1  mt-3 rounded-full hover:bg-red-600 w-full">
                    Pilih
                  </button>
                  </Link>
                </div>
              </div>
            ))}

          </div>
        )}

        {activeTab === 'pasta' && (
        <div className="flex flex-wrap justify-center gap-8">
            {menu.filter((item) => item.category.toLowerCase() === 'pasta').map((menu) => (
              <div
                key={menu.name}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center w-60"
              >
                <div className="w-24 h-24 relative mb-4">
                  <Image
                    src={menu.image}
                    alt={menu.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg my-2">{menu.name}</h3>
                <p className="text-sm text-gray-500 flex-1 text-center line-clamp-2 my-2">{menu.description}</p>
                <div className="mt-auto w-full flex justify-center">
                  <Link href={`/menu/${menu.id}`}>
                  <button className=" cursor-pointer bg-red-600 text-white px-10 py-1  mt-3 rounded-full hover:bg-red-600 w-full">
                    Pilih
                  </button>
                  </Link>
                </div>
              </div>
            ))}

          </div>
        )}
      </section>
    </main>
  );
}