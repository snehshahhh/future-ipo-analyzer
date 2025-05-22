
'use client';

import { useEffect, useState } from 'react';
import { IPO } from '@/types/ipo';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminIpoDetailPage({ params }: { params: { id: string } }) {
  const { isAuthenticated, isAdmin } = useAuth();
  const [ipo, setIpo] = useState<IPO | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Redirect if not admin
    if (isAuthenticated && !isAdmin) {
      router.push('/');
    }
    
    async function fetchIpoDetail() {
      try {
        // Using the sample endpoint for development
        const response = await fetch(`/api/ipo/sample/${params.id}`);
        const result = await response.json();
        
        if (result.success) {
          setIpo(result.data);
        }
      } catch (error) {
        console.error('Failed to fetch IPO details:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchIpoDetail();
  }, [isAuthenticated, isAdmin, params.id, router]);

  if (!isAuthenticated || !isAdmin) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="bg-red-50 dark:bg-red-900 p-6 rounded-lg shadow-md text-center">
          <h1 className="text-2xl font-bold text-red-600 dark:text-red-300 mb-4">Access Denied</h1>
          <p className="mb-4">You do not have permission to access this page.</p>
          <button 
            onClick={() => router.push('/')} 
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Go to Homepage
          </button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-20 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!ipo) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">IPO Not Found</h2>
        <p className="mb-6 text-muted-foreground">The requested IPO information could not be found.</p>
        <Link href="/admin" className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
          Back to Admin Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <Link href="/admin" className="text-sm text-muted-foreground hover:text-foreground flex items-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Admin Dashboard
          </Link>
          <h1 className="text-3xl font-bold">IPO Details: {ipo["Upcoming IPO 2025"]}</h1>
        </div>
        
        <div className="mt-4 md:mt-0 flex space-x-3">
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
            Edit IPO
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
            Delete IPO
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-card rounded-xl shadow-md overflow-hidden">
            <div className="border-b px-6 py-4">
              <h2 className="text-xl font-semibold">IPO Information</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-muted-foreground mb-4">Basic Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-muted-foreground">ID</span>
                      <span className="font-mono text-sm">{ipo._id}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-muted-foreground">Company Name</span>
                      <span className="font-medium">{ipo["Upcoming IPO 2025"]}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-muted-foreground">Open Date</span>
                      <span>{ipo["Open Date"]}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-muted-foreground">Close Date</span>
                      <span>{ipo["Closing Date"]}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-muted-foreground">IPO Type</span>
                      <span>{ipo["IPO Type"]}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-muted-foreground">IPO Size</span>
                      <span>{ipo["IPO Size"]}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-muted-foreground">Price Band</span>
                      <span>{ipo["Price Band"]}</span>
                    </div>
                  </div>
                </div>
                
                {ipo.ipo_details && (
                  <div>
                    <h3 className="text-muted-foreground mb-4">Issue Details</h3>
                    <div className="space-y-3">
                      {Object.entries(ipo.ipo_details)
                        .filter(([key]) => !key.includes('link') && !key.includes('draft_prospectus'))
                        .slice(0, 7)
                        .map(([key, value]) => (
                          <div key={key} className="flex justify-between border-b pb-2">
                            <span className="text-muted-foreground capitalize">{key.replace(/_/g, ' ')}</span>
                            <span>{value}</span>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8">
                <h3 className="text-muted-foreground mb-4">About</h3>
                <p className="text-sm leading-relaxed">{ipo.about}</p>
              </div>

              <div className="mt-8">
                <h3 className="text-muted-foreground mb-4">Promoters</h3>
                <p className="text-sm">{ipo.promoters}</p>
              </div>

              <div className="mt-8">
                <h3 className="text-muted-foreground mb-4">Financial Reports</h3>
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted/30">
                      <th className="px-4 py-2 text-left">Year</th>
                      <th className="px-4 py-2 text-left">Revenue</th>
                      <th className="px-4 py-2 text-left">Expenses</th>
                      <th className="px-4 py-2 text-left">Profit</th>
                      <th className="px-4 py-2 text-left">Assets</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ipo.financial_report?.map((report, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-muted/10' : ''}>
                        <td className="px-4 py-2">{report.period_ended}</td>
                        <td className="px-4 py-2">{report.revenue}</td>
                        <td className="px-4 py-2">{report.expense}</td>
                        <td className="px-4 py-2">{report.profit_after_tax}</td>
                        <td className="px-4 py-2">{report.assets}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-card rounded-xl shadow-md overflow-hidden mb-6">
            <div className="border-b px-6 py-4">
              <h2 className="text-xl font-semibold">Key Dates</h2>
            </div>
            <div className="p-6">
              {ipo.ipo_dates && (
                <div className="space-y-4">
                  {Object.entries(ipo.ipo_dates).map(([key, value]) => (
                    <div key={key} className="flex justify-between border-b pb-2 last:border-0">
                      <span className="text-muted-foreground capitalize">{key.replace(/_/g, ' ')}</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="bg-card rounded-xl shadow-md overflow-hidden">
            <div className="border-b px-6 py-4">
              <h2 className="text-xl font-semibold">Market Lot</h2>
            </div>
            <div className="p-6">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/30">
                    <th className="px-3 py-2 text-left text-sm">Application</th>
                    <th className="px-3 py-2 text-left text-sm">Lot Size</th>
                    <th className="px-3 py-2 text-left text-sm">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {ipo.ipo_market_lot?.slice(1).map((lot, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-muted/10' : ''}>
                      <td className="px-3 py-2 text-sm">{lot.application}</td>
                      <td className="px-3 py-2 text-sm">{lot.lot_size}</td>
                      <td className="px-3 py-2 text-sm font-medium">{lot.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-card rounded-xl shadow-md overflow-hidden mt-6">
            <div className="border-b px-6 py-4">
              <h2 className="text-xl font-semibold">Documents</h2>
            </div>
            <div className="p-6">
              {ipo.ipo_details?.drhp_link && (
                <a 
                  href={ipo.ipo_details.drhp_link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex justify-between items-center p-3 bg-muted/30 rounded-md hover:bg-muted/50 transition-colors mb-3"
                >
                  <span>Draft Prospectus (DRHP)</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
              
              {ipo.ipo_details?.rhp_link && (
                <a 
                  href={ipo.ipo_details.rhp_link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex justify-between items-center p-3 bg-muted/30 rounded-md hover:bg-muted/50 transition-colors"
                >
                  <span>Red Herring Prospectus (RHP)</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
