
import { Link } from "react-router-dom";
import { IpoDetail } from "@/lib/types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ParameterScore } from "../ipo/ParameterScore";

interface FeaturedIPOsProps {
  ipos: IpoDetail[];
}

export const FeaturedIPOs = ({ ipos }: FeaturedIPOsProps) => {
  // Display only first 3 IPOs
  const featuredIPOs = ipos.slice(0, 3);
  
  const getStatusBadgeStyle = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-500 hover:bg-blue-600";
      case "open":
        return "bg-green-500 hover:bg-green-600";
      case "closed":
        return "bg-orange-500 hover:bg-orange-600";
      case "listed":
        return "bg-purple-500 hover:bg-purple-600";
      default:
        return "bg-gray-500 hover:bg-gray-600";
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured IPOs</h2>
          <Button asChild variant="outline">
            <Link to="/ipos" className="flex items-center">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredIPOs.map((ipo) => (
            <Link key={ipo.id} to={`/ipos/${ipo.id}`} className="block group">
              <Card className="ipo-card h-full flex flex-col">
                <CardHeader className="relative pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <Badge variant="secondary" className={cn("capitalize mb-2", getStatusBadgeStyle(ipo.status))}>
                        {ipo.status}
                      </Badge>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {ipo.companyName}
                      </CardTitle>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="text-sm font-semibold">{ipo.overallScore}/10</div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground flex items-center mt-1">
                    <Calendar className="h-3 w-3 mr-1" />
                    {ipo.status === "upcoming" && (
                      <span>Opens: {new Date(ipo.openDate).toLocaleDateString()}</span>
                    )}
                    {ipo.status === "open" && (
                      <span>Closes: {new Date(ipo.closeDate).toLocaleDateString()}</span>
                    )}
                    {ipo.status === "closed" && (
                      <span>Lists on: {new Date(ipo.listingDate).toLocaleDateString()}</span>
                    )}
                    {ipo.status === "listed" && (
                      <span>Listed: {new Date(ipo.listingDate).toLocaleDateString()}</span>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="py-4 flex-grow">
                  <p className="mb-4 text-sm line-clamp-2">{ipo.description}</p>
                  <div className="space-y-3">
                    <ParameterScore 
                      label="Fundamentals" 
                      score={ipo.fundamentalsScore} 
                      maxScore={10} 
                    />
                    <ParameterScore 
                      label="Risk Meter" 
                      score={10 - ipo.riskMeter} 
                      maxScore={10}
                      inverted
                    />
                    <ParameterScore 
                      label="Performance" 
                      score={ipo.performanceScore} 
                      maxScore={10} 
                    />
                  </div>
                </CardContent>
                
                <CardFooter className="pt-2 pb-4">
                  <div className="flex justify-between items-center w-full">
                    <div className="text-sm">
                      <span className="font-semibold">{ipo.priceBand}</span>
                      <span className="text-muted-foreground ml-2">
                        {ipo.issueSize}
                      </span>
                    </div>
                    <Badge variant={getRecommendationVariant(ipo.recommendation)}>
                      {ipo.recommendation}
                    </Badge>
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

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

function getRecommendationVariant(recommendation: string) {
  switch (recommendation) {
    case "Strong Buy":
      return "default";
    case "Buy":
      return "secondary";
    case "Moderate Buy":
      return "outline";
    case "Hold":
      return "secondary";
    case "Avoid":
      return "destructive";
    default:
      return "outline";
  }
}
