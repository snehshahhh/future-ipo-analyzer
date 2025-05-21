
import { Link } from "react-router-dom";
import { IpoDetail } from "@/lib/types";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { ParameterScore } from "./ParameterScore";
import { cn } from "@/lib/utils";

interface IpoCardProps {
  ipo: IpoDetail;
}

export const IpoCard = ({ ipo }: IpoCardProps) => {
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

  const getRecommendationVariant = (recommendation: string) => {
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
  };

  return (
    <Link to={`/ipos/${ipo.id}`} className="block group">
      <Card className="ipo-card h-full flex flex-col animate-fade-in">
        <CardHeader className="relative pb-4">
          <div className="flex justify-between items-start">
            <div>
              <Badge variant="secondary" className={cn("capitalize mb-2", getStatusBadgeStyle(ipo.status))}>
                {ipo.status}
              </Badge>
              <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                {ipo.companyName}
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                {ipo.sector} • {ipo.ticker}
              </p>
            </div>
            <div className="flex items-center space-x-1">
              <div className={cn(
                "text-sm font-semibold score-indicator",
                ipo.overallScore >= 8 ? "bg-green-100 text-green-800" :
                ipo.overallScore >= 6 ? "bg-blue-100 text-blue-800" :
                ipo.overallScore >= 4 ? "bg-yellow-100 text-yellow-800" :
                "bg-red-100 text-red-800"
              )}>
                {ipo.overallScore}/10
              </div>
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
        <div className="ipo-card-overlay"></div>
      </Card>
    </Link>
  );
};
