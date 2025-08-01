'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

export default function QuantityClient({price, menuId,}: {price: number; menuId: string;}) {
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(price);
  const [size, setSize] = useState('');
  const [extraCheese, setExtraCheese] = useState(false);
  const { data: session } = useSession();

  const handleAddToCart = async () => {
    if (!session?.user?.id) {
      alert('Silahkan login terlebih dahulu');
      return;
    }

    if (!size) {
      alert('Silakan pilih ukuran terlebih dahulu');
      return;
    }

    try {
      const res = await fetch('/api/user/keranjang', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: session.user.id,
          menuId,
          size,
          extraCheese, 
          quantity,
          totalPrice: total,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        alert('Berhasil ditambahkan ke keranjang!');
      } else {
        alert('Gagal menambahkan: ' + data.error);
      }
    } catch (error) {
      alert('Terjadi kesalahan jaringan');
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    let extra = extraCheese ? 5000 : 0;
    setTotal((price + extra) * quantity);
  }, [quantity, extraCheese, price]);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="my-6 space-y-5">
      <div className="w-full">
        <label htmlFor="size" className="block text-sm font-medium mb-1">
          Pilih Size
        </label>
        <select
          id="size"
          name="size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="mt-1 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
        >
          <option value="">-- Pilih Ukuran --</option>
          <option value="personal">Personal</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>

      <div className="flex items-center">
        <input
          id="extra-cheese"
          name="extra-cheese"
          type="checkbox"
          checked={extraCheese}
          onChange={(e) => setExtraCheese(e.target.checked)}
          className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
        />
        <label htmlFor="extra-cheese" className="ml-2 text-sm">
          Extra Cheese (+Rp5.000)
        </label>
      </div>

      <div className="flex flex-col items-end space-y-2">
        <div className="flex items-center space-x-4">
          <button
            onClick={decrement}
            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm"
          >
            −
          </button>
          <span className="text-xl">{quantity}</span>
          <button
            onClick={increment}
            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm"
          >
            +
          </button>
        </div>

        <div className="text-gray-700 text-lg font-medium">
          Total:{' '}
          <span className="font-semibold text-red-600 text-lg ms-3">
            Rp {total.toLocaleString()}
          </span>
        </div>
      </div>

      <div>
        <button
          onClick={handleAddToCart}
          className="w-full py-2 px-4 bg-red-700 hover:bg-gray-800 text-white font-semibold rounded-md flex items-center justify-center gap-2"
          type="button"
        >
          Tambah Ke Keranjang
        </button>
      </div>
    </div>
  );
}
