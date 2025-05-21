
import React from "react";
import { IpoDetail } from "@/lib/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Bookmark, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { ParameterScore } from "./ParameterScore";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface IpoDetailSectionProps {
  ipo: IpoDetail;
}

export const IpoDetailSection: React.FC<IpoDetailSectionProps> = ({ ipo }) => {
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

  const getRecommendationColor = (recommendation: string) => {
    switch (recommendation) {
      case "Strong Buy":
        return "text-green-600";
      case "Buy":
        return "text-blue-600";
      case "Moderate Buy":
        return "text-teal-600";
      case "Hold":
        return "text-amber-600";
      case "Avoid":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="container py-8">
      <div className="flex flex-col animate-fade-in">
        <div className="mb-6">
          <Button asChild variant="ghost" size="sm" className="mb-4">
            <Link to="/ipos" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to IPOs
            </Link>
          </Button>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className={cn("capitalize", getStatusBadgeStyle(ipo.status))}>
                  {ipo.status}
                </Badge>
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium">{ipo.ticker}</span> • {ipo.sector}
                </div>
              </div>
              <h1 className="text-3xl font-bold mb-1">{ipo.companyName}</h1>
              <p className="text-muted-foreground">{ipo.description}</p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Bookmark className="h-4 w-4 mr-2" />
                  Watchlist
                </Button>
                <Button size="sm" variant="outline">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Recommendation:</span>
                <span className={cn("font-bold", getRecommendationColor(ipo.recommendation))}>
                  {ipo.recommendation}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">IPO Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Issue Size</span>
                <span className="font-medium">{ipo.issueSize}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Price Band</span>
                <span className="font-medium">{ipo.priceBand}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Lot Size</span>
                <span className="font-medium">{ipo.lotSize} shares</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Min Investment</span>
                <span className="font-medium">
                  {ipo.minLots} lot ({ipo.minLots * ipo.lotSize} shares)
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Key Dates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Open Date</span>
                <span className="font-medium">{new Date(ipo.openDate).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Close Date</span>
                <span className="font-medium">{new Date(ipo.closeDate).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Listing Date</span>
                <span className="font-medium">{new Date(ipo.listingDate).toLocaleDateString()}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Allocation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-muted-foreground">QIB</span>
                  <span className="font-medium">{ipo.allocation.qib}%</span>
                </div>
                <Progress value={ipo.allocation.qib} />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-muted-foreground">NII</span>
                  <span className="font-medium">{ipo.allocation.nii}%</span>
                </div>
                <Progress value={ipo.allocation.nii} />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-muted-foreground">Retail</span>
                  <span className="font-medium">{ipo.allocation.retail}%</span>
                </div>
                <Progress value={ipo.allocation.retail} />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Performance Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
            <Card className="bg-card p-4 flex flex-col items-center justify-center">
              <h3 className="text-sm text-center mb-2">Fundamentals</h3>
              <div className={cn(
                "text-2xl font-bold rounded-full w-14 h-14 flex items-center justify-center",
                ipo.fundamentalsScore >= 8 ? "bg-green-100 text-green-800" :
                ipo.fundamentalsScore >= 6 ? "bg-blue-100 text-blue-800" :
                ipo.fundamentalsScore >= 4 ? "bg-yellow-100 text-yellow-800" :
                "bg-red-100 text-red-800"
              )}>
                {ipo.fundamentalsScore}
              </div>
            </Card>
            <Card className="bg-card p-4 flex flex-col items-center justify-center">
              <h3 className="text-sm text-center mb-2">Risk Meter</h3>
              <div className={cn(
                "text-2xl font-bold rounded-full w-14 h-14 flex items-center justify-center",
                ipo.riskMeter <= 3 ? "bg-green-100 text-green-800" :
                ipo.riskMeter <= 5 ? "bg-blue-100 text-blue-800" :
                ipo.riskMeter <= 7 ? "bg-yellow-100 text-yellow-800" :
                "bg-red-100 text-red-800"
              )}>
                {ipo.riskMeter}
              </div>
            </Card>
            <Card className="bg-card p-4 flex flex-col items-center justify-center">
              <h3 className="text-sm text-center mb-2">Flexibility</h3>
              <div className={cn(
                "text-2xl font-bold rounded-full w-14 h-14 flex items-center justify-center",
                ipo.flexibilityScore >= 8 ? "bg-green-100 text-green-800" :
                ipo.flexibilityScore >= 6 ? "bg-blue-100 text-blue-800" :
                ipo.flexibilityScore >= 4 ? "bg-yellow-100 text-yellow-800" :
                "bg-red-100 text-red-800"
              )}>
                {ipo.flexibilityScore}
              </div>
            </Card>
            <Card className="bg-card p-4 flex flex-col items-center justify-center">
              <h3 className="text-sm text-center mb-2">Timing</h3>
              <div className={cn(
                "text-2xl font-bold rounded-full w-14 h-14 flex items-center justify-center",
                ipo.timeScore >= 8 ? "bg-green-100 text-green-800" :
                ipo.timeScore >= 6 ? "bg-blue-100 text-blue-800" :
                ipo.timeScore >= 4 ? "bg-yellow-100 text-yellow-800" :
                "bg-red-100 text-red-800"
              )}>
                {ipo.timeScore}
              </div>
            </Card>
            <Card className="bg-card p-4 flex flex-col items-center justify-center">
              <h3 className="text-sm text-center mb-2">Performance</h3>
              <div className={cn(
                "text-2xl font-bold rounded-full w-14 h-14 flex items-center justify-center",
                ipo.performanceScore >= 8 ? "bg-green-100 text-green-800" :
                ipo.performanceScore >= 6 ? "bg-blue-100 text-blue-800" :
                ipo.performanceScore >= 4 ? "bg-yellow-100 text-yellow-800" :
                "bg-red-100 text-red-800"
              )}>
                {ipo.performanceScore}
              </div>
            </Card>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Overall Score</CardTitle>
              <CardDescription>Composite analysis based on all parameters</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className={cn(
                  "text-4xl font-bold rounded-full w-20 h-20 flex items-center justify-center",
                  ipo.overallScore >= 8 ? "bg-green-100 text-green-800" :
                  ipo.overallScore >= 6 ? "bg-blue-100 text-blue-800" :
                  ipo.overallScore >= 4 ? "bg-yellow-100 text-yellow-800" :
                  "bg-red-100 text-red-800"
                )}>
                  {ipo.overallScore}
                </div>
                <div>
                  <p className="text-lg font-medium mb-1">
                    <span className={getRecommendationColor(ipo.recommendation)}>
                      {ipo.recommendation}
                    </span>
                  </p>
                  <p className="text-muted-foreground">
                    This IPO scores {ipo.overallScore}/10 based on our comprehensive analysis framework.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="fundamentals" className="mb-8 animate-fade-in">
          <TabsList className="mb-4 w-full sm:w-auto">
            <TabsTrigger value="fundamentals">Fundamentals</TabsTrigger>
            <TabsTrigger value="risks">Risk Assessment</TabsTrigger>
            <TabsTrigger value="flexibility">Flexibility</TabsTrigger>
            <TabsTrigger value="timing">Timing</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>
          
          <TabsContent value="fundamentals">
            <Card>
              <CardHeader>
                <CardTitle>Fundamentals Analysis</CardTitle>
                <CardDescription>Score: {ipo.fundamentalsScore}/10</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>{ipo.detailedAnalysis.fundamentals.summary}</p>
                
                <Separator />
                
                <div>
                  <h4 className="font-semibold mb-2">Business & Market Position</h4>
                  <p className="mb-2">{ipo.detailedAnalysis.fundamentals.marketPosition}</p>
                  <p>{ipo.detailedAnalysis.fundamentals.businessModel}</p>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-semibold mb-2">Financial Overview</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-sm font-medium mb-1">Revenue</h5>
                      <p className="font-semibold">{ipo.detailedAnalysis.fundamentals.revenue.total}</p>
                      <p className="text-sm text-muted-foreground">Growth: {ipo.detailedAnalysis.fundamentals.revenue.growth}</p>
                      
                      <h6 className="text-sm font-medium mt-3 mb-1">Revenue Breakdown</h6>
                      {ipo.detailedAnalysis.fundamentals.revenue.breakdown.map((segment, index) => (
                        <div key={index} className="mb-2">
                          <div className="flex justify-between text-xs mb-1">
                            <span>{segment.segment}</span>
                            <span>{segment.percentage}%</span>
                          </div>
                          <Progress value={segment.percentage} className="h-1" />
                        </div>
                      ))}
                    </div>
                    <div>
                      <h5 className="text-sm font-medium mb-1">Profitability</h5>
                      <p className="font-semibold">{ipo.detailedAnalysis.fundamentals.profit.netProfit}</p>
                      <p className="text-sm text-muted-foreground">Margin: {ipo.detailedAnalysis.fundamentals.profit.margin}</p>
                      <p className="text-sm text-muted-foreground">Growth: {ipo.detailedAnalysis.fundamentals.profit.growth}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="risks">
            <Card>
              <CardHeader>
                <CardTitle>Risk Assessment</CardTitle>
                <CardDescription>Risk Meter: {ipo.riskMeter}/10 (lower is better)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>{ipo.detailedAnalysis.riskAssessment.summary}</p>
                
                <Separator />
                
                <div>
                  <h4 className="font-semibold mb-2">Key Risk Factors</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {ipo.detailedAnalysis.riskAssessment.keyRisks.map((risk, index) => (
                      <li key={index}>{risk}</li>
                    ))}
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-semibold mb-3">Risk Categories</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Market Risk</span>
                        <span className="font-medium">{ipo.detailedAnalysis.riskAssessment.categories.market}/10</span>
                      </div>
                      <Progress value={ipo.detailedAnalysis.riskAssessment.categories.market * 10} />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Operational Risk</span>
                        <span className="font-medium">{ipo.detailedAnalysis.riskAssessment.categories.operational}/10</span>
                      </div>
                      <Progress value={ipo.detailedAnalysis.riskAssessment.categories.operational * 10} />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Financial Risk</span>
                        <span className="font-medium">{ipo.detailedAnalysis.riskAssessment.categories.financial}/10</span>
                      </div>
                      <Progress value={ipo.detailedAnalysis.riskAssessment.categories.financial * 10} />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Regulatory Risk</span>
                        <span className="font-medium">{ipo.detailedAnalysis.riskAssessment.categories.regulatory}/10</span>
                      </div>
                      <Progress value={ipo.detailedAnalysis.riskAssessment.categories.regulatory * 10} />
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-semibold mb-2">Risk Mitigation</h4>
                  <p>{ipo.detailedAnalysis.riskAssessment.mitigation}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="flexibility">
            <Card>
              <CardHeader>
                <CardTitle>Flexibility Analysis</CardTitle>
                <CardDescription>Score: {ipo.flexibilityScore}/10</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>{ipo.detailedAnalysis.flexibility.summary}</p>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="market-adaptability">
                    <AccordionTrigger>Market Adaptability</AccordionTrigger>
                    <AccordionContent>
                      {ipo.detailedAnalysis.flexibility.marketAdaptability}
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="financial-stability">
                    <AccordionTrigger>Financial Stability</AccordionTrigger>
                    <AccordionContent>
                      {ipo.detailedAnalysis.flexibility.financialStability}
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="product-diversification">
                    <AccordionTrigger>Product Diversification</AccordionTrigger>
                    <AccordionContent>
                      {ipo.detailedAnalysis.flexibility.productDiversification}
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="future-adaptability">
                    <AccordionTrigger>Future Adaptability</AccordionTrigger>
                    <AccordionContent>
                      {ipo.detailedAnalysis.flexibility.futureAdaptability}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="timing">
            <Card>
              <CardHeader>
                <CardTitle>Timing Analysis</CardTitle>
                <CardDescription>Score: {ipo.timeScore}/10</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>{ipo.detailedAnalysis.timing.summary}</p>
                
                <Separator />
                
                <div>
                  <h4 className="font-semibold mb-2">Market Timing Assessment</h4>
                  <p>{ipo.detailedAnalysis.timing.marketTimingAssessment}</p>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-semibold mb-2">Key Milestones</h4>
                  <div className="space-y-3">
                    {ipo.detailedAnalysis.timing.keyMilestones.map((milestone, index) => (
                      <div key={index} className="flex">
                        <div className="mr-4 flex flex-col items-center">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          {index < ipo.detailedAnalysis.timing.keyMilestones.length - 1 && (
                            <div className="h-full w-px bg-border"></div>
                          )}
                        </div>
                        <div className="pb-4">
                          <p className="text-sm font-medium">
                            {new Date(milestone.date).toLocaleDateString()}
                          </p>
                          <p className="text-muted-foreground">{milestone.event}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="performance">
            <Card>
              <CardHeader>
                <CardTitle>Performance Analysis</CardTitle>
                <CardDescription>Score: {ipo.performanceScore}/10</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>{ipo.detailedAnalysis.performance.summary}</p>
                
                <Separator />
                
                <div>
                  <h4 className="font-semibold mb-2">Historical Growth</h4>
                  <p>{ipo.detailedAnalysis.performance.historicalGrowth}</p>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-semibold mb-2">Key Achievements</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {ipo.detailedAnalysis.performance.keyAchievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-semibold mb-2">Management & Future Outlook</h4>
                  <p className="mb-2"><span className="font-medium">Management:</span> {ipo.detailedAnalysis.performance.managementQuality}</p>
                  <p><span className="font-medium">Future Outlook:</span> {ipo.detailedAnalysis.performance.futureOutlook}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
