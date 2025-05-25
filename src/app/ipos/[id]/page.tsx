
'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { IPO, ComprehensiveAnalysis } from '@/types/ipo';
import { RealIpoDetail } from '@/components/ipo/RealIpoDetail';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function IpoDetailPage() {
  const { id } = useParams();
  const [ipo, setIpo] = useState<IPO | null>(null);
  const [analysis, setAnalysis] = useState<ComprehensiveAnalysis | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchIpoDetails() {
      try {
        const response = await fetch(`/api/ipo/${id}`);
        const result = await response.json();
        
        if (result.success) {
          setIpo(result.data.ipo);
          setAnalysis(result.data.analysis);
        }
      } catch (error) {
        console.error('Failed to fetch IPO details:', error);
      } finally {
        setLoading(false);
      }
    }
    
    if (id) {
      fetchIpoDetails();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="container py-8">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="space-y-4 text-center">
            <div className="h-8 w-8 border-4 border-ipo-blue border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p>Loading IPO details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!ipo) {
    return (
      <div className="container py-8">
        <div className="mb-6">
          <Button asChild variant="ghost" size="sm">
            <Link href="/ipos" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to IPOs
            </Link>
          </Button>
        </div>
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold">IPO Not Found</h1>
            <p className="text-muted-foreground">
              The IPO you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link href="/ipos">View All IPOs</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="container py-4">
        <Button asChild variant="ghost" size="sm">
          <Link href="/ipos" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to IPOs
          </Link>
        </Button>
      </div>
      <RealIpoDetail ipo={ipo} analysis={analysis} />
    </div>
  );
}
