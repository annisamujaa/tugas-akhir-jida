'use client';
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export type Menu = {
  name: string;
};

export type OrderItem = {
  id: string;
  menu: Menu;
  size: string;
  quantity: number;
  extraCheese: boolean;
  subtotal: number;
};

export type Order = {
  id: string;
  nama: string;
  alamat: string;
  paymentMethod: string;
  paymentDetail: string;
  total: number;
  items: OrderItem[];
};

export default function OrderPage() {
  const { data: session, status } = useSession();
  const [orders, setOrders] = useState<Order[]>([]);

  const fetchOrders = async () => {
    if (status === "authenticated") {
      try {
        const res = await fetch('/api/user/order'); 

        if (!res.ok) throw new Error("Failed to fetch orders");

        const data = await res.json();
        setOrders(data);
      } catch (err) {
        console.error("Error fetching orders:", err);
      }
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [status, session]);


  if (status === "loading") return <p className="text-center">Loading session...</p>;

  if (status === "unauthenticated") return <p className="text-center">Silakan login untuk melihat pesanan Anda.</p>;

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 sm:px-10">
      <h1 className="text-2xl font-bold text-red-700 mb-6 text-center">Pesanan Saya</h1>

      {orders.length === 0 ? (
        <p className="text-center text-gray-600">Belum ada pesanan.</p>
      ) : (
        <div className="grid gap-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white p-6 rounded-lg shadow border">
              <p><span className="font-semibold">Nama:</span> {order.nama}</p>
              <p><span className="font-semibold">Alamat:</span> {order.alamat}</p>
              <p><span className="font-semibold">Pembayaran:</span> {order.paymentMethod} ({order.paymentDetail})</p>
              <p><span className="font-semibold">Total:</span> Rp {order.total.toLocaleString("id-ID")}</p>

              <div className="mt-4">
                <h2 className="font-semibold">Item:</h2>
                {order.items.map(item => (
                  <div key={item.id} className="text-sm pl-2 border-l ml-2 mt-1">
                    <p className="font-semibold">{item.menu.name} - {item.size} x {item.quantity}</p>
                    <p>Keju ekstra: {item.extraCheese ? "Ya" : "Tidak"}</p>
                    <p>Subtotal: Rp {item.subtotal.toLocaleString("id-ID")}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
