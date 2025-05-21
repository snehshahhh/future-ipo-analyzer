
export type IpoRating = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type IpoStatus = 'upcoming' | 'open' | 'closed' | 'listed';

export type IpoDetail = {
  id: string;
  companyName: string;
  companyLogo: string;
  ticker: string;
  sector: string;
  industryCategory: string;
  status: IpoStatus;
  issueSize: string;
  priceBand: string;
  lotSize: number;
  minLots: number;
  openDate: string;
  closeDate: string;
  listingDate: string;
  allocation: {
    qib: number;
    nii: number;
    retail: number;
  };
  fundamentalsScore: IpoRating;
  riskMeter: IpoRating;
  flexibilityScore: IpoRating;
  timeScore: IpoRating;
  performanceScore: IpoRating;
  overallScore: IpoRating;
  recommendation: 'Strong Buy' | 'Buy' | 'Moderate Buy' | 'Hold' | 'Avoid' | 'Insufficient Data';
  description: string;
  detailedAnalysis: {
    fundamentals: {
      summary: string;
      marketPosition: string;
      businessModel: string;
      revenue: {
        total: string;
        growth: string;
        breakdown: Array<{
          segment: string;
          percentage: number;
        }>;
      };
      profit: {
        netProfit: string;
        margin: string;
        growth: string;
      };
    };
    riskAssessment: {
      summary: string;
      keyRisks: string[];
      categories: {
        market: number;
        operational: number;
        financial: number;
        regulatory: number;
      };
      mitigation: string;
    };
    flexibility: {
      summary: string;
      marketAdaptability: string;
      financialStability: string;
      productDiversification: string;
      futureAdaptability: string;
    };
    timing: {
      summary: string;
      marketTimingAssessment: string;
      keyMilestones: Array<{
        date: string;
        event: string;
      }>;
    };
    performance: {
      summary: string;
      historicalGrowth: string;
      keyAchievements: string[];
      managementQuality: string;
      futureOutlook: string;
    };
  };
};

export type UserRole = 'user' | 'admin';

export type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
};
