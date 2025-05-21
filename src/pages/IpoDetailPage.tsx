
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { IpoDetailSection } from "@/components/ipo/IpoDetailSection";
import { dummyIpos } from "@/lib/data";
import { IpoDetail } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const IpoDetailPage = () => {
  const { ipoId } = useParams<{ ipoId: string }>();
  const [ipo, setIpo] = useState<IpoDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    const fetchIpo = async () => {
      setLoading(true);
      // Simulating network delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const foundIpo = dummyIpos.find(i => i.id === ipoId);
      setIpo(foundIpo || null);
      setLoading(false);
      
      if (foundIpo) {
        document.title = `IPO Tracker - ${foundIpo.companyName}`;
      } else {
        document.title = "IPO Tracker - IPO Not Found";
      }
    };
    
    fetchIpo();
  }, [ipoId]);

  if (loading) {
    return (
      <PageLayout>
        <div className="container py-8">
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="space-y-4 text-center">
              <div className="h-8 w-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
              <p>Loading IPO details...</p>
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }

  if (!ipo) {
    return (
      <PageLayout>
        <div className="container py-8">
          <div className="mb-6">
            <Button asChild variant="ghost" size="sm">
              <Link to="/ipos" className="flex items-center">
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
                <Link to="/ipos">View All IPOs</Link>
              </Button>
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <IpoDetailSection ipo={ipo} />
    </PageLayout>
  );
};

export default IpoDetailPage;
