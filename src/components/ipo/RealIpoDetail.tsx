
import React from 'react';
import { IPO, ComprehensiveAnalysis } from '@/types/ipo';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface RealIpoDetailProps {
  ipo: IPO;
  analysis?: ComprehensiveAnalysis | null;
}

export const RealIpoDetail = ({ ipo, analysis }: RealIpoDetailProps) => {
  const getStatusColor = (openDate: string, closingDate: string) => {
    const now = new Date();
    const open = new Date(openDate + ', 2025');
    const close = new Date(closingDate + ', 2025');
    
    if (now < open) return 'bg-blue-500';
    if (now >= open && now <= close) return 'bg-green-500';
    return 'bg-orange-500';
  };

  const getStatus = (openDate: string, closingDate: string) => {
    const now = new Date();
    const open = new Date(openDate + ', 2025');
    const close = new Date(closingDate + ', 2025');
    
    if (now < open) return 'Upcoming';
    if (now >= open && now <= close) return 'Open';
    return 'Closed';
  };

  return (
    <div className="container py-8">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge className={cn("capitalize", getStatusColor(ipo.open_date, ipo.closing_date))}>
            {getStatus(ipo.open_date, ipo.closing_date)}
          </Badge>
          <span className="text-sm text-muted-foreground">{ipo.ipo_type}</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-ipo-blue to-ipo-purple bg-clip-text text-transparent">
          {ipo.upcoming_ipo_2025}
        </h1>
        {ipo.about && (
          <p className="text-muted-foreground mb-6">{ipo.about}</p>
        )}
      </div>

      {/* IPO Details Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">IPO Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Issue Size</span>
              <span className="font-medium">{ipo.ipo_size}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Price Band</span>
              <span className="font-medium">{ipo.price_band}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Type</span>
              <span className="font-medium">{ipo.ipo_type}</span>
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
              <span className="font-medium">{ipo.open_date}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Close Date</span>
              <span className="font-medium">{ipo.closing_date}</span>
            </div>
            {ipo.ipo_dates?.ipo_listing_date && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Listing Date</span>
                <span className="font-medium">{ipo.ipo_dates.ipo_listing_date}</span>
              </div>
            )}
          </CardContent>
        </Card>

        {ipo.ipo_details && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Allocation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-muted-foreground">QIB</span>
                  <span className="font-medium">{ipo.ipo_details.qib_quota}</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-muted-foreground">NII</span>
                  <span className="font-medium">{ipo.ipo_details.nii_quota}</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-muted-foreground">Retail</span>
                  <span className="font-medium">{ipo.ipo_details.retail_quota}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Analysis Section */}
      {analysis && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Performance Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
            <Card className="bg-card p-4 flex flex-col items-center justify-center">
              <h3 className="text-sm text-center mb-2">Fundamentals</h3>
              <div className={cn(
                "text-2xl font-bold rounded-full w-14 h-14 flex items-center justify-center",
                analysis.fundamentals.score >= 8 ? "bg-green-100 text-green-800" :
                analysis.fundamentals.score >= 6 ? "bg-blue-100 text-blue-800" :
                analysis.fundamentals.score >= 4 ? "bg-yellow-100 text-yellow-800" :
                "bg-red-100 text-red-800"
              )}>
                {analysis.fundamentals.score}
              </div>
            </Card>
            <Card className="bg-card p-4 flex flex-col items-center justify-center">
              <h3 className="text-sm text-center mb-2">Risk Meter</h3>
              <div className={cn(
                "text-2xl font-bold rounded-full w-14 h-14 flex items-center justify-center",
                analysis.risk_meter.score <= 3 ? "bg-green-100 text-green-800" :
                analysis.risk_meter.score <= 5 ? "bg-blue-100 text-blue-800" :
                analysis.risk_meter.score <= 7 ? "bg-yellow-100 text-yellow-800" :
                "bg-red-100 text-red-800"
              )}>
                {analysis.risk_meter.score}
              </div>
            </Card>
            <Card className="bg-card p-4 flex flex-col items-center justify-center">
              <h3 className="text-sm text-center mb-2">Flexibility</h3>
              <div className={cn(
                "text-2xl font-bold rounded-full w-14 h-14 flex items-center justify-center",
                analysis.flexibility.score >= 8 ? "bg-green-100 text-green-800" :
                analysis.flexibility.score >= 6 ? "bg-blue-100 text-blue-800" :
                analysis.flexibility.score >= 4 ? "bg-yellow-100 text-yellow-800" :
                "bg-red-100 text-red-800"
              )}>
                {analysis.flexibility.score}
              </div>
            </Card>
            <Card className="bg-card p-4 flex flex-col items-center justify-center">
              <h3 className="text-sm text-center mb-2">Timing</h3>
              <div className={cn(
                "text-2xl font-bold rounded-full w-14 h-14 flex items-center justify-center",
                analysis.time.score >= 8 ? "bg-green-100 text-green-800" :
                analysis.time.score >= 6 ? "bg-blue-100 text-blue-800" :
                analysis.time.score >= 4 ? "bg-yellow-100 text-yellow-800" :
                "bg-red-100 text-red-800"
              )}>
                {analysis.time.score}
              </div>
            </Card>
            <Card className="bg-card p-4 flex flex-col items-center justify-center">
              <h3 className="text-sm text-center mb-2">Performance</h3>
              <div className={cn(
                "text-2xl font-bold rounded-full w-14 h-14 flex items-center justify-center",
                analysis.performance.score >= 8 ? "bg-green-100 text-green-800" :
                analysis.performance.score >= 6 ? "bg-blue-100 text-blue-800" :
                analysis.performance.score >= 4 ? "bg-yellow-100 text-yellow-800" :
                "bg-red-100 text-red-800"
              )}>
                {analysis.performance.score}
              </div>
            </Card>
          </div>

          <Tabs defaultValue="fundamentals" className="mb-8">
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
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>{analysis.fundamentals.summary}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Market Position</h4>
                    <p>{analysis.fundamentals.market_position}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Business Model</h4>
                    <p>{analysis.fundamentals.business_model}</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-sm font-medium mb-1">Revenue</h5>
                      <p className="font-semibold">₹{analysis.fundamentals.revenue_details.total_revenue} Cr</p>
                      <p className="text-sm text-muted-foreground">CAGR: {analysis.fundamentals.revenue_details.revenue_cagr}%</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium mb-1">Profitability</h5>
                      <p className="font-semibold">₹{analysis.fundamentals.profit_analysis.net_profit} Cr</p>
                      <p className="text-sm text-muted-foreground">Margin: {analysis.fundamentals.profit_analysis.profit_margin}%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="risks">
              <Card>
                <CardHeader>
                  <CardTitle>Risk Assessment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>{analysis.risk_meter.summary}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Key Risk Factors</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {analysis.risk_meter.key_risks.map((risk, index) => (
                        <li key={index}>{risk}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Risk Mitigation</h4>
                    <p>{analysis.risk_meter.risk_mitigation}</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="flexibility">
              <Card>
                <CardHeader>
                  <CardTitle>Flexibility Analysis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>{analysis.flexibility.summary}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Product Diversification</h4>
                    <p>{analysis.flexibility.product_diversification}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Future Adaptability</h4>
                    <p>{analysis.flexibility.future_adaptability_potential}</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="timing">
              <Card>
                <CardHeader>
                  <CardTitle>Timing Analysis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>{analysis.time.summary}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Market Timing Assessment</h4>
                    <p>{analysis.time.market_timing_assessment}</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="performance">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Analysis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>{analysis.performance.summary}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Key Achievements</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {analysis.performance.key_achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Future Potential</h4>
                    <p>{analysis.performance.future_potential.growth_forecast}</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      )}

      {/* Financial Reports */}
      {ipo.financial_report && ipo.financial_report.length > 0 && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Financial Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b">
                    <th className="py-2">Period</th>
                    <th className="py-2">Revenue</th>
                    <th className="py-2">Expense</th>
                    <th className="py-2">Profit After Tax</th>
                    <th className="py-2">Assets</th>
                  </tr>
                </thead>
                <tbody>
                  {ipo.financial_report.map((report, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-2">{report.period_ended}</td>
                      <td className="py-2">{report.revenue}</td>
                      <td className="py-2">{report.expense}</td>
                      <td className="py-2">{report.profit_after_tax}</td>
                      <td className="py-2">{report.assets}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Promoters */}
      {ipo.promoters && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Promoters</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{ipo.promoters}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
