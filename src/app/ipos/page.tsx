
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
        // Using the sample endpoint for development
        const response = await fetch('/api/ipo/sample');
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

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Upcoming IPOs</h1>
      
      {loading ? (
        <div className="w-full flex justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ipos.map((ipo) => (
            <Link 
              href={`/ipos/${ipo._id}`} 
              key={ipo._id}
              className="group"
            >
              <div className="bg-card rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4">
                  <h2 className="text-white text-lg font-semibold truncate">{ipo["Upcoming IPO 2025"]}</h2>
                </div>
                <div className="p-4 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Open Date</p>
                      <p className="font-medium">{ipo["Open Date"]}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Close Date</p>
                      <p className="font-medium">{ipo["Closing Date"]}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Issue Size</p>
                      <p className="font-medium">{ipo["IPO Size"]}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Type</p>
                      <p className="font-medium">{ipo["IPO Type"]}</p>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <p className="text-xs text-muted-foreground">Price Band</p>
                    <p className="font-semibold text-lg">{ipo["Price Band"]}</p>
                  </div>
                  
                  <div className="pt-2">
                    <button className="w-full py-2 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-md transition-colors text-sm font-medium flex items-center justify-center">
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
          No upcoming IPOs found
        </div>
      )}
    </div>
  );
}
