
'use client';

import { useEffect, useState } from 'react';
import { IPO } from '@/types/ipo';
import Link from 'next/link';

export default function IposPage() {
  const [ipos, setIpos] = useState<IPO[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
  }, []);

  const getStatusColor = (openDate: string, closingDate: string) => {
    const now = new Date();
    const open = new Date(openDate + ', 2025');
    const close = new Date(closingDate + ', 2025');
    
    if (now < open) return 'bg-blue-500'; // upcoming
    if (now >= open && now <= close) return 'bg-green-500'; // open
    return 'bg-orange-500'; // closed
  };

  const getStatus = (openDate: string, closingDate: string) => {
    const now = new Date();
    const open = new Date(openDate + ', 2025');
    const close = new Date(closingDate + ', 2025');
    
    if (now < open) return 'Upcoming';
    if (now >= open && now <= close) return 'Open';
    return 'Closed';
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-ipo-blue to-ipo-purple bg-clip-text text-transparent">
        Upcoming IPOs
      </h1>
      
      {loading ? (
        <div className="w-full flex justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-ipo-blue"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ipos.map((ipo) => (
            <Link 
              href={`/ipos/${ipo._id}`} 
              key={ipo._id}
              className="group"
            >
              <div className="bg-card rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="bg-gradient-to-r from-ipo-blue to-ipo-purple p-4">
                  <h2 className="text-white text-lg font-semibold truncate">
                    {ipo.upcoming_ipo_2025}
                  </h2>
                  <div className="mt-2">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(ipo.open_date, ipo.closing_date)}`}>
                      {getStatus(ipo.open_date, ipo.closing_date)}
                    </span>
                  </div>
                </div>
                <div className="p-4 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Open Date</p>
                      <p className="font-medium">{ipo.open_date}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Close Date</p>
                      <p className="font-medium">{ipo.closing_date}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Issue Size</p>
                      <p className="font-medium">{ipo.ipo_size}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Type</p>
                      <p className="font-medium">{ipo.ipo_type}</p>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <p className="text-xs text-muted-foreground">Price Band</p>
                    <p className="font-semibold text-lg bg-gradient-to-r from-ipo-emerald to-ipo-cyan bg-clip-text text-transparent">
                      {ipo.price_band}
                    </p>
                  </div>
                  
                  <div className="pt-2">
                    <button className="w-full py-2 group-hover:bg-ipo-blue/10 text-ipo-blue rounded-md transition-colors text-sm font-medium flex items-center justify-center">
                      View Details
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
      
      {!loading && ipos.length === 0 && (
        <div className="text-center py-20 text-muted-foreground">
          <h3 className="text-xl font-medium mb-2">No IPOs found</h3>
          <p>Check back later for upcoming IPO listings</p>
        </div>
      )}
    </div>
  );
}
