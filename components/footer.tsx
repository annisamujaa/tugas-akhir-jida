export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Kolom 1: Logo dan deskripsi */}
        <div>
          <h2 className="text-3xl font-bold mb-2 text-red-700">PizzaHut</h2>
          <p className="text-gray-300">Pizza hangat, topping melimpah, dan rasa yang bikin nagih sejak 2005.</p>
        </div>

        {/* Kolom 2: Navigasi */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-red-700">Navigasi</h3>
          <ul className="space-y-2 text-white">
            <li><a href="/" className="hover:text-red-600">Beranda</a></li>
            <li><a href="/menu" className="hover:text-red-600">Menu Pizza</a></li>
          </ul>
        </div>

        {/* Kolom 3: Jam buka */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-red-700">Jam Buka</h3>
          <ul className="text-white space-y-1">
            <li>Senin - Jumat: 10.00 - 22.00</li>
            <li>Sabtu - Minggu: 10.00 - 00.00</li>
          </ul>
        </div>

        {/* Kolom 4: Media sosial */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-red-700">Ikuti Kami</h3>
          <div className="flex flex-col space-y-2 text-white">
            <a href="#" className="hover:text-red-600">🍕 Instagram</a>
            <a href="#" className="hover:text-red-600">👍 Facebook</a>
            <a href="#" className="hover:text-red-600">📱 WhatsApp</a>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-red-700 mt-10 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} PizzaHut. Semua hak dilindungi.
      </div>
    </footer>
  );
}
