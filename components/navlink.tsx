'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
];

export default function NavLink() {
  const pathname = usePathname();
  const { data: session, status } = useSession();

  return (
    <ul className="flex justify-end text-black">
      {navLinks.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={`transition-colors px-2 ${
              pathname === link.href
                ? 'underline underline-offset-4 font-bold text-red-600'
                : 'hover:text-red-500'
            }`}
          >
            {link.label}
          </Link>
        </li>
      ))}
        {status === 'loading' ? null : session?.user ? (
          <>
            <li>
              <Link href="/order" className="px-2 hover:text-red-500">
                Order
              </Link>
            </li>
            <li>
              <Link href="/profile" className="px-2 hover:text-red-500">
                Profile
              </Link>
            </li>
            <li>
              <Link href="/keranjang" className="px-2 hover:text-red-500 flex items-center">
                <ShoppingCartIcon className="h-6 w-6" />
              </Link>
            </li>
          </>
        ) : (
          <li>
            <Link href="/login" className="px-2 hover:text-red-500">Login</Link>
          </li>
        )}

    </ul>
  );
}
