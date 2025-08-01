import Sidebar from '@/components/admin/sidenavAdmin';
import "@/app/globals.css";

export default function AdminLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html>
      <body >
          <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
          <Sidebar />
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
          </div>
      </body>
    </html>
  );
}