
'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { IPO } from '@/types/ipo';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const { isAuthenticated, isAdmin } = useAuth();
  const [ipos, setIpos] = useState<IPO[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Redirect if not admin
    if (isAuthenticated && !isAdmin) {
      router.push('/');
    }
    
    async function fetchIpos() {
      try {
        const response = await fetch('/api/ipo');
        const result = await response.json();
        
        if (result.success) {
          setIpos(result.data);
        }
      } catch (error) {
        console.error('Failed to fetch IPOs:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchIpos();
  }, [isAuthenticated, isAdmin, router]);

  if (!isAuthenticated) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="bg-red-50 dark:bg-red-900 p-6 rounded-lg shadow-md text-center">
          <h1 className="text-2xl font-bold text-red-600 dark:text-red-300 mb-4">Authentication Required</h1>
          <p className="mb-4">Please log in to access the admin dashboard.</p>
          <button 
            onClick={() => router.push('/login')} 
            className="px-4 py-2 bg-ipo-blue text-white rounded hover:bg-ipo-purple transition-colors"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="bg-red-50 dark:bg-red-900 p-6 rounded-lg shadow-md text-center">
          <h1 className="text-2xl font-bold text-red-600 dark:text-red-300 mb-4">Access Denied</h1>
          <p className="mb-4">You do not have permission to access this page.</p>
          <button 
            onClick={() => router.push('/')} 
            className="px-4 py-2 bg-ipo-blue text-white rounded hover:bg-ipo-purple transition-colors"
          >
            Go to Homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-ipo-blue to-ipo-purple bg-clip-text text-transparent">
        Admin Dashboard - IPO Management
      </h1>
      
      <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-ipo-blue to-ipo-purple p-6 rounded-xl text-white">
          <h3 className="text-lg font-medium">Total IPOs</h3>
          <p className="text-3xl font-bold">{ipos.length}</p>
        </div>
        <div className="bg-gradient-to-r from-ipo-emerald to-ipo-cyan p-6 rounded-xl text-white">
          <h3 className="text-lg font-medium">Mainboard IPOs</h3>
          <p className="text-3xl font-bold">{ipos.filter(ipo => ipo.ipo_type === 'Mainboard').length}</p>
        </div>
        <div className="bg-gradient-to-r from-ipo-amber to-ipo-rose p-6 rounded-xl text-white">
          <h3 className="text-lg font-medium">SME IPOs</h3>
          <p className="text-3xl font-bold">{ipos.filter(ipo => ipo.ipo_type === 'SME').length}</p>
        </div>
      </div>
      
      {loading ? (
        <div className="w-full flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-ipo-blue"></div>
        </div>
      ) : (
        <div className="bg-card rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-muted/50">
                  <th className="px-6 py-4 font-medium">ID</th>
                  <th className="px-6 py-4 font-medium">IPO Name</th>
                  <th className="px-6 py-4 font-medium">Open Date</th>
                  <th className="px-6 py-4 font-medium">Closing Date</th>
                  <th className="px-6 py-4 font-medium">Type</th>
                  <th className="px-6 py-4 font-medium">Size</th>
                  <th className="px-6 py-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-muted/20">
                {ipos.map((ipo) => (
                  <tr key={ipo._id} className="hover:bg-muted/10 transition-colors">
                    <td className="px-6 py-4 font-mono text-sm truncate max-w-[150px]">
                      {ipo._id}
                    </td>
                    <td className="px-6 py-4 font-medium">
                      {ipo.upcoming_ipo_2025}
                    </td>
                    <td className="px-6 py-4">{ipo.open_date}</td>
                    <td className="px-6 py-4">{ipo.closing_date}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        ipo.ipo_type === 'Mainboard' 
                          ? 'bg-ipo-blue/20 text-ipo-blue' 
                          : 'bg-ipo-emerald/20 text-ipo-emerald'
                      }`}>
                        {ipo.ipo_type}
                      </span>
                    </td>
                    <td className="px-6 py-4">{ipo.ipo_size}</td>
                    <td className="px-6 py-4">
                      <button 
                        onClick={() => router.push(`/ipos/${ipo._id}`)}
                        className="text-ipo-blue hover:underline mr-4"
                      >
                        View
                      </button>
                      <button 
                        className="text-ipo-emerald hover:underline mr-4"
                      >
                        Edit
                      </button>
                      <button 
                        className="text-red-600 dark:text-red-400 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {ipos.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              No IPO records found
            </div>
          )}
        </div>
      )}
    </div>
  );
}
