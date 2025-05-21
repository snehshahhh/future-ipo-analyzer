
import { useEffect, useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { IpoCard } from "@/components/ipo/IpoCard";
import { dummyIpos } from "@/lib/data";
import { IpoDetail, IpoStatus } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarIcon, Search, SlidersHorizontal } from "lucide-react";

const IpoListPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<IpoStatus | "all">("all");
  const [ipos, setIpos] = useState<IpoDetail[]>(dummyIpos);
  const [filteredIpos, setFilteredIpos] = useState<IpoDetail[]>(dummyIpos);

  useEffect(() => {
    document.title = "IPO Tracker - IPO List";
    
    // Filter IPOs based on search term and active tab
    let filtered = [...ipos];
    
    // Apply tab filter
    if (activeTab !== "all") {
      filtered = filtered.filter(ipo => ipo.status === activeTab);
    }
    
    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        ipo =>
          ipo.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          ipo.sector.toLowerCase().includes(searchTerm.toLowerCase()) ||
          ipo.ticker.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredIpos(filtered);
  }, [searchTerm, activeTab, ipos]);

  return (
    <PageLayout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-4 animate-fade-in">IPO Calendar</h1>
        <p className="text-muted-foreground mb-8 animate-fade-in">
          Track and analyze all upcoming, open, and recently closed IPOs.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in">
          <div className="relative flex-grow">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search IPOs by name, sector or ticker..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <CalendarIcon className="h-4 w-4" />
              Sort by Date
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={(value) => setActiveTab(value as IpoStatus | "all")} className="mb-8">
          <TabsList>
            <TabsTrigger value="all">All IPOs</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="open">Open</TabsTrigger>
            <TabsTrigger value="closed">Closed</TabsTrigger>
            <TabsTrigger value="listed">Listed</TabsTrigger>
          </TabsList>
        </Tabs>
        
        {filteredIpos.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium mb-2">No IPOs found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIpos.map((ipo, index) => (
              <div key={ipo.id} className="animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <IpoCard ipo={ipo} />
              </div>
            ))}
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default IpoListPage;
