// Navbar.js
import React from 'react';
import NavLink from '@/components/navlink';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return(
  <nav className="flex items-center justify-between px-4 py-3 bg-white">
    <div className="font-bold text-lg text-blue-800">
        <Link href={'/'}>
          <Image
            src="/assets/images/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="object-contain"
            priority
          />
        </Link>
    </div>
    <NavLink />
  </nav>
  );
}
