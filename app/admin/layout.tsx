
import NextAuthSession from '../nextAuthSession';
import "@/app/globals.css";

export default function AdminLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html>
      <body >
        <NextAuthSession>
          {children}
        </NextAuthSession>
      </body>
    </html>
  );
}