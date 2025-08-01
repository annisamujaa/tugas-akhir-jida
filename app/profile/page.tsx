'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'profile'>('profile');

  // Redirect ke login jika tidak authenticated
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  const handleTabClick = (tab: 'profile' | 'signout') => {
    if (tab === 'signout') {
      signOut({ callbackUrl: '/login' });
    } else {
      setActiveTab(tab);
    }
  };

  if (status === 'loading') return <p>Loading...</p>;

  return (
    <div className="max-w-full mx-6 my-10 grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Sidebar Tab */}
      <div className="space-y-2">
        <button
          onClick={() => handleTabClick('profile')}
          className={`w-full text-left px-4 py-2 rounded-lg font-medium transition ${
            activeTab === 'profile' ? 'bg-red-700 text-white' : 'text-gray-600 hover:bg-red-100'
          }`}
        >
          Profile
        </button>
        <button
          onClick={() => handleTabClick('signout')}
          className="w-full text-left px-4 py-2 rounded-lg border font-medium text-red-700 hover:bg-red-100 transition"
        >
          Sign Out
        </button>
      </div>

      {/* Content Card */}
      <div className="md:col-span-3 bg-white rounded-2xl shadow-lg p-6 mb-10">
        {activeTab === 'profile' && (
          <div className='py-4'>
            <h2 className="text-2xl font-semibold text-red-700 mb-2 pb-4">Profile</h2>
            <div className="space-y-3">
                <div className="flex items-center justify-between space-x-2">
                <p className='font-medium'>Nama :</p>
                <p className=''>{session?.user?.name}</p>
              </div>
              <div className="flex items-center justify-between space-x-2">
                <p className='font-medium'>Email :</p>
                <p className=''>{session?.user?.email}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
