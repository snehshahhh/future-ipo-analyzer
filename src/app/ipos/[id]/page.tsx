
'use client';

import { useEffect, useState } from 'react';
import { IPO } from '@/types/ipo';
import Link from 'next/link';

export default function IpoDetailPage({ params }: { params: { id: string } }) {
  const [ipo, setIpo] = useState<IPO | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
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
  }, [params.id]);

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
        <Link href="/ipos" className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
          Back to IPO List
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row mb-6 items-start md:items-center justify-between">
        <div>
          <Link href="/ipos" className="text-sm text-muted-foreground hover:text-foreground flex items-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to IPOs
          </Link>
          <h1 className="text-3xl font-bold">{ipo["Upcoming IPO 2025"]}</h1>
        </div>
        
        <div className="mt-4 md:mt-0 bg-card px-4 py-2 rounded-lg shadow-sm">
          <span className="text-xs text-muted-foreground">Listing Type</span>
          <p className="text-lg font-semibold">{ipo["IPO Type"]}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-card p-4 rounded-lg shadow-md">
          <p className="text-sm text-muted-foreground">Open Date</p>
          <p className="text-xl font-semibold">{ipo["Open Date"]}</p>
        </div>
        
        <div className="bg-card p-4 rounded-lg shadow-md">
          <p className="text-sm text-muted-foreground">Close Date</p>
          <p className="text-xl font-semibold">{ipo["Closing Date"]}</p>
        </div>
        
        <div className="bg-card p-4 rounded-lg shadow-md">
          <p className="text-sm text-muted-foreground">Price Band</p>
          <p className="text-xl font-semibold">{ipo["Price Band"]}</p>
        </div>
      </div>
      
      <div className="bg-card rounded-xl shadow-md overflow-hidden mb-8">
        <div className="border-b">
          <div className="flex">
            <button 
              className={`px-6 py-4 text-sm font-medium ${activeTab === 'overview' ? 'border-b-2 border-primary' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`px-6 py-4 text-sm font-medium ${activeTab === 'financials' ? 'border-b-2 border-primary' : ''}`}
              onClick={() => setActiveTab('financials')}
            >
              Financials
            </button>
            <button 
              className={`px-6 py-4 text-sm font-medium ${activeTab === 'details' ? 'border-b-2 border-primary' : ''}`}
              onClick={() => setActiveTab('details')}
            >
              IPO Details
            </button>
          </div>
        </div>
        
        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="animate-fade-in">
              <h2 className="text-xl font-bold mb-4">About the Company</h2>
              <p className="mb-6 leading-relaxed">
                {ipo.about}
              </p>
              
              <h3 className="text-lg font-semibold mb-3">Key Dates</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {ipo.ipo_dates && Object.entries(ipo.ipo_dates).map(([key, value]) => (
                  <div key={key} className="bg-muted/30 p-3 rounded-md">
                    <p className="text-xs text-muted-foreground capitalize">{key.replace(/_/g, ' ')}</p>
                    <p className="font-medium">{value}</p>
                  </div>
                ))}
              </div>
              
              <h3 className="text-lg font-semibold mb-3">Promoters</h3>
              <p className="leading-relaxed">{ipo.promoters}</p>
            </div>
          )}
          
          {activeTab === 'financials' && (
            <div className="animate-fade-in">
              <h2 className="text-xl font-bold mb-4">Financial Performance</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted/30">
                      <th className="px-4 py-3 text-left">Year</th>
                      <th className="px-4 py-3 text-left">Revenue</th>
                      <th className="px-4 py-3 text-left">Expenses</th>
                      <th className="px-4 py-3 text-left">Profit After Tax</th>
                      <th className="px-4 py-3 text-left">Assets</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ipo.financial_report?.map((report, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-muted/10' : ''}>
                        <td className="px-4 py-3">{report.period_ended}</td>
                        <td className="px-4 py-3">{report.revenue}</td>
                        <td className="px-4 py-3">{report.expense}</td>
                        <td className="px-4 py-3 font-medium text-emerald-600 dark:text-emerald-400">{report.profit_after_tax}</td>
                        <td className="px-4 py-3">{report.assets}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Revenue Growth</h3>
                <div className="h-64 bg-muted/20 rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Financial charts will be implemented here</p>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'details' && (
            <div className="animate-fade-in">
              <h2 className="text-xl font-bold mb-4">IPO Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Issue Information</h3>
                  {ipo.ipo_details && (
                    <div className="space-y-3">
                      {Object.entries(ipo.ipo_details)
                        .filter(([key]) => !key.includes('link') && !key.includes('draft_prospectus'))
                        .map(([key, value]) => (
                          <div key={key} className="flex justify-between border-b pb-2">
                            <span className="text-muted-foreground capitalize">{key.replace(/_/g, ' ')}</span>
                            <span className="font-medium">{value}</span>
                          </div>
                        ))
                      }
                    </div>
                  )}
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Lot Size & Application</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-muted/30">
                          <th className="px-4 py-2 text-left">Application</th>
                          <th className="px-4 py-2 text-left">Lot Size</th>
                          <th className="px-4 py-2 text-left">Shares</th>
                          <th className="px-4 py-2 text-left">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ipo.ipo_market_lot?.slice(1).map((lot, index) => (
                          <tr key={index} className={index % 2 === 0 ? 'bg-muted/10' : ''}>
                            <td className="px-4 py-2">{lot.application}</td>
                            <td className="px-4 py-2">{lot.lot_size}</td>
                            <td className="px-4 py-2">{lot.shares}</td>
                            <td className="px-4 py-2 font-medium">{lot.amount}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-6 space-y-3">
                    <h3 className="text-lg font-semibold mb-2">Documents</h3>
                    {ipo.ipo_details?.drhp_link && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Draft Prospectus (DRHP)</span>
                        <a 
                          href={ipo.ipo_details.drhp_link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          View Document
                        </a>
                      </div>
                    )}
                    
                    {ipo.ipo_details?.rhp_link && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Red Herring Prospectus (RHP)</span>
                        <a 
                          href={ipo.ipo_details.rhp_link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          View Document
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
