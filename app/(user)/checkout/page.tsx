// ✅ /app/menu/[id]/page.tsx
'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { MapPinIcon, ShoppingBagIcon, BanknotesIcon  } from '@heroicons/react/24/solid'; 
import PaymentMethodSelector from './paymentMethod';
import { useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

type KeranjangItem = {
  menuId: string;
  size: string;
  quantity: number;
  extraCheese: boolean;
  totalPrice: number;
};

type Payment = {
  metode: string;
  detail?: string;
};


export default function Page() {

  const searchParams = useSearchParams();
  const totalHarga = searchParams.get('total');
  const [metode, setMetode] = useState('diantar');
  const [keranjang, setKeranjang] = useState<KeranjangItem[]>([]);
  const router = useRouter();
  const { data: session } = useSession();

  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [noHp, setNoHp] = useState('');
  const [alamat, setAlamat] = useState('');
  const [payment, setPayment] = useState<Payment>({ metode: '' });

  const handlePesan = async () => {

    if (!session?.user.id) {
      alert("Silahkan login untuk melakukan pemesanan.");
      return;
    }
    const orderData = {
      userId: session?.user.id,
      nama,
      email,
      noHp,
      alamat,
      paymentMethod: payment.metode,
      paymentDetail: payment.detail,
      metode,
      total: Number(totalHarga),
      items: keranjang.map((item) => ({
        menuId: item.menuId,
        size: item.size,
        quantity: item.quantity,
        extraCheese: item.extraCheese,
        subtotal: item.totalPrice
      })),
    };
    const res = await fetch('/api/user/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData),
    });
    if (res.ok) {
      localStorage.removeItem('keranjang');
      setKeranjang([]);
      router.push('/order'); 
    }
  };


  useEffect(() => {
    const data = localStorage.getItem('keranjang');
    if (data) {
      setKeranjang(JSON.parse(data));
    }
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <h1 className="text-2xl font-bold text-center mb-6">Periksa Orderan</h1>
    <div className="max-w-3xl mx-auto my-4 mx-6">
        <div className="flex space-x-4 ">
        <button
          onClick={() => setMetode('diantar')}
          className={`flex-1 flex flex-col items-center justify-center gap-1 px-4 py-2 text-sm font-medium transition rounded-lg border ${
            metode === 'diantar'
              ? 'border-red-700'
              : 'border-black  hover:border-red-600'
          }`}
        >
          <Image src="/assets/icon/diantar.png" alt="Diantar" width={50} height={50} />
          Diantar
        </button>
        <button
          onClick={() => setMetode('dijemput')}
          className={`flex-1 flex flex-col items-center justify-center gap-1 px-4 py-2 text-sm font-medium transition rounded-lg border ${
            metode === 'dijemput'
              ? 'border-red-700'
              : 'border-black  hover:border-red-600'
          }`}
        >
          <Image src="/assets/icon/dijemput.png" alt="Dijemput" width={50} height={50} />
          Dijemput
        </button>

        </div>
        {/* <div className="my-5">
            <div className="flex">
                <MapPinIcon className="w-6 h-6 text-red-700" />
                <label className='font-medium mb-2 ms-1'>Lokasi Tempat Pesan</label>
            </div>
            <textarea
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
             />
        </div> */}

        <div className="my-5">
            <div className="flex">
                <ShoppingBagIcon className="w-6 h-6 text-red-700" />
                <label className='font-medium mb-2 ms-1'>Order</label>
            </div>
            <div>
                <label htmlFor="name">Nama <span className="text-red-500">*</span></label>
                <input type="text" name="name" id="name" 
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="w-full mt-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required/>
            </div>
            <div className='my-2'>
                <label htmlFor="email">Email <span className="text-red-500">*</span></label>
                <input type="email" name="email" id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required/>
            </div>
            <div className='my-2'>
                <label htmlFor="telepon">No Telepon <span className="text-red-500">*</span></label>
                <input type="number" name="telepon" id="telepon" 
                value={noHp}
                onChange={(e) => setNoHp(e.target.value)}
                className="w-full mt-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required/>
            </div>
            <div className='my-2'>
                <label htmlFor="telepon">Alamat <span className="text-red-500">*</span></label>
                <textarea
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                className="w-full mt-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required/>
            </div>
        </div>
        <div className="my-5">
            <div className="flex">
                <BanknotesIcon className="w-6 h-6 text-red-700" />
                <label className='font-medium mb-2 ms-1'>Payment</label>
            </div>
            <PaymentMethodSelector onChange={(pembayaran) => setPayment(pembayaran)} />
        </div>
        <div className="my-5">
            <div className="border bg-white rounded-lg text-center p-4">
                <p className='font-medium'>Jumlah Tagihan</p>
                <p>Rp {totalHarga}</p>
            </div>
        </div>
              
            <div className="">
                <button 
                onClick={handlePesan}
                className='cursor-pointer w-full py-2 px-4 bg-red-700 hover:bg-gray-800 text-white font-semibold rounded-md flex items-center justify-center gap-2' 
                type='button'>Pesan Sekarang</button>
            </div>
        
    </div>

    </main>
  );
}
