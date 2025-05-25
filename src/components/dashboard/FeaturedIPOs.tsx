
import { useEffect, useState } from "react";
import Link from "next/link";
import { IPO } from "@/types/ipo";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const FeaturedIPOs = () => {
  const [ipos, setIpos] = useState<IPO[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFeaturedIpos() {
      try {
        const response = await fetch('/api/ipo');
        const result = await response.json();
        
        if (result.success) {
          // Display only first 3 IPOs as featured
          setIpos(result.data.slice(0, 3));
        }
      } catch (error) {
        console.error('Failed to fetch featured IPOs:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchFeaturedIpos();
  }, []);
  
  const getStatusColor = (openDate: string, closingDate: string) => {
    const now = new Date();
    const open = new Date(openDate + ', 2025');
    const close = new Date(closingDate + ', 2025');
    
    if (now < open) return "bg-blue-500 hover:bg-blue-600";
    if (now >= open && now <= close) return "bg-green-500 hover:bg-green-600";
    return "bg-orange-500 hover:bg-orange-600";
  };

  const getStatus = (openDate: string, closingDate: string) => {
    const now = new Date();
    const open = new Date(openDate + ', 2025');
    const close = new Date(closingDate + ', 2025');
    
    if (now < open) return 'Upcoming';
    if (now >= open && now <= close) return 'Open';
    return 'Closed';
  };

  if (loading) {
    return (
      <section className="py-16 px-4 sm:px-6">
        <div className="container">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-ipo-blue"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-ipo-blue to-ipo-purple bg-clip-text text-transparent">
            Featured IPOs
          </h2>
          <Button asChild variant="outline">
            <Link href="/ipos" className="flex items-center">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ipos.map((ipo) => (
            <Link key={ipo._id} href={`/ipos/${ipo._id}`} className="block group">
              <Card className="ipo-card h-full flex flex-col hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader className="relative pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <Badge variant="secondary" className={cn("capitalize mb-2", getStatusColor(ipo.open_date, ipo.closing_date))}>
                        {getStatus(ipo.open_date, ipo.closing_date)}
                      </Badge>
                      <CardTitle className="group-hover:text-ipo-blue transition-colors">
                        {ipo.upcoming_ipo_2025}
                      </CardTitle>
                    </div>
                    <div className="text-xs bg-ipo-purple/10 text-ipo-purple px-2 py-1 rounded-full">
                      {ipo.ipo_type}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground flex items-center mt-1">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>Opens: {ipo.open_date}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="py-4 flex-grow">
                  {ipo.about && (
                    <p className="mb-4 text-sm line-clamp-3">{ipo.about}</p>
                  )}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Issue Size:</span>
                      <span className="font-medium">{ipo.ipo_size}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Price Band:</span>
                      <span className="font-medium text-ipo-emerald">{ipo.price_band}</span>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="pt-2 pb-4">
                  <div className="w-full">
                    <button className="w-full py-2 group-hover:bg-ipo-blue/10 text-ipo-blue rounded-md transition-colors text-sm font-medium flex items-center justify-center">
                      View Analysis
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </CardFooter>
                <div className="ipo-card-overlay" />
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
