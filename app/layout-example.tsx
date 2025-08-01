import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pizza",
  description: "Created by Annisa Muja Ahidah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
