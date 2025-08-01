'use client';
import NavLinks from './navLinkAdmin';
import { signOut } from 'next-auth/react';
import { PowerIcon } from '@heroicons/react/24/solid';

export default function SideNav() {

  return (
    <div>
    {/* Desktop sidebar */}
      <aside className="hidden md:flex md:flex-col w-64 h-screen bg-white border-r shadow-sm">
        <div className="p-4 text-2xl font-bold text-red-700 border-b">Dashboard</div>
        <nav className="flex-1 p-4 space-y-2">
          <NavLinks />
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-red-100 hover:text-red-600 md:flex-none md:justify-start md:p-2 md:px-3" 
          onClick={() => signOut()}>  <PowerIcon className='w-6'/> Logout</button>
        </nav>
      </aside>
    </div>
  );
}
