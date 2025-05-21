
import { IpoDetail, User } from "./types";

// Generate dummy IPO data for our application
export const dummyIpos: IpoDetail[] = [
  {
    id: "ipo-001",
    companyName: "TechNova Systems",
    companyLogo: "/placeholder.svg",
    ticker: "TNS",
    sector: "Technology",
    industryCategory: "Software & Services",
    status: "upcoming",
    issueSize: "₹1,200 Cr",
    priceBand: "₹870 - ₹920",
    lotSize: 16,
    minLots: 1,
    openDate: "2025-06-10",
    closeDate: "2025-06-12",
    listingDate: "2025-06-18",
    allocation: {
      qib: 50,
      nii: 15,
      retail: 35,
    },
    fundamentalsScore: 8,
    riskMeter: 4,
    flexibilityScore: 7,
    timeScore: 9,
    performanceScore: 8,
    overallScore: 8,
    recommendation: "Strong Buy",
    description: "TechNova Systems is a leading provider of cloud-native security solutions for enterprise clients. With a comprehensive suite of cybersecurity products and services, the company has shown impressive growth in the rapidly expanding cloud security market.",
    detailedAnalysis: {
      fundamentals: {
        summary: "Strong fundamentals with consistent revenue growth and improving margins.",
        marketPosition: "Market leader in cloud-native security solutions with 15% market share.",
        businessModel: "SaaS model with recurring revenue streams and high customer retention.",
        revenue: {
          total: "₹850 Cr",
          growth: "32% YoY",
          breakdown: [
            { segment: "Security Solutions", percentage: 65 },
            { segment: "Managed Services", percentage: 25 },
            { segment: "Consulting", percentage: 10 }
          ]
        },
        profit: {
          netProfit: "₹120 Cr",
          margin: "14.1%",
          growth: "45% YoY"
        }
      },
      riskAssessment: {
        summary: "Moderate risk profile with strong mitigation strategies in place.",
        keyRisks: [
          "Increasing competition in cybersecurity space",
          "Rapid technological changes requiring constant innovation",
          "Regulatory changes affecting data privacy",
          "Talent acquisition challenges"
        ],
        categories: {
          market: 4,
          operational: 3,
          financial: 4,
          regulatory: 5
        },
        mitigation: "The company has implemented robust risk management frameworks and diversified its product portfolio to mitigate key risks."
      },
      flexibility: {
        summary: "High adaptability with diversified product offerings and agile development methodology.",
        marketAdaptability: "Demonstrated ability to quickly adapt to changing market conditions",
        financialStability: "Strong balance sheet with ₹300 Cr cash reserves and low debt",
        productDiversification: "Wide range of products serving different segments of the cybersecurity market",
        futureAdaptability: "Significant R&D investments (18% of revenue) ensuring future innovation capabilities"
      },
      timing: {
        summary: "Excellent market timing with cybersecurity concerns at all-time high.",
        marketTimingAssessment: "The IPO comes at an opportune time when enterprise spending on cybersecurity is growing rapidly due to increasing cyber threats.",
        keyMilestones: [
          { date: "2025-06-03", event: "Anchor Investor Allocation" },
          { date: "2025-06-10", event: "Issue Opening" },
          { date: "2025-06-12", event: "Issue Closing" },
          { date: "2025-06-15", event: "Allotment Finalization" },
          { date: "2025-06-17", event: "Refunds Initiation" },
          { date: "2025-06-18", event: "Listing on Exchanges" }
        ]
      },
      performance: {
        summary: "Consistent performance with strong revenue and profit growth.",
        historicalGrowth: "CAGR of 35% over the past 3 years",
        keyAchievements: [
          "Expanded client base from 150 to 500+ in 2 years",
          "Successfully launched 5 new products in the past 18 months",
          "Achieved industry-leading customer satisfaction scores",
          "Won several industry awards for innovation"
        ],
        managementQuality: "Highly experienced management team with proven track records in cybersecurity and software",
        futureOutlook: "Projected to maintain 30%+ growth for the next 3-5 years based on current trends and product roadmap"
      }
    }
  },
  {
    id: "ipo-002",
    companyName: "GreenEnergy Innovations",
    companyLogo: "/placeholder.svg",
    ticker: "GEI",
    sector: "Energy",
    industryCategory: "Renewable Energy",
    status: "upcoming",
    issueSize: "₹800 Cr",
    priceBand: "₹310 - ₹330",
    lotSize: 45,
    minLots: 1,
    openDate: "2025-06-15",
    closeDate: "2025-06-18",
    listingDate: "2025-06-24",
    allocation: {
      qib: 50,
      nii: 15,
      retail: 35,
    },
    fundamentalsScore: 7,
    riskMeter: 5,
    flexibilityScore: 6,
    timeScore: 8,
    performanceScore: 7,
    overallScore: 7,
    recommendation: "Buy",
    description: "GreenEnergy Innovations develops and manufactures advanced renewable energy storage solutions. Their flagship product, the EcoStore battery system, provides efficient and sustainable energy storage for both commercial and residential applications.",
    detailedAnalysis: {
      fundamentals: {
        summary: "Solid fundamentals with strong growth in the renewable energy storage sector.",
        marketPosition: "Growing market share (currently 8%) in the expanding renewable energy storage market.",
        businessModel: "Manufacturing and selling energy storage systems, with emerging subscription model for monitoring services.",
        revenue: {
          total: "₹520 Cr",
          growth: "28% YoY",
          breakdown: [
            { segment: "Commercial Solutions", percentage: 55 },
            { segment: "Residential Systems", percentage: 35 },
            { segment: "Services & Maintenance", percentage: 10 }
          ]
        },
        profit: {
          netProfit: "₹58 Cr",
          margin: "11.2%",
          growth: "35% YoY"
        }
      },
      riskAssessment: {
        summary: "Moderate risk with exposure to supply chain constraints and raw material price fluctuations.",
        keyRisks: [
          "Supply chain dependencies for rare earth materials",
          "Intense competition from global players",
          "Regulatory changes in renewable energy policies",
          "Technology disruption risk"
        ],
        categories: {
          market: 5,
          operational: 5,
          financial: 4,
          regulatory: 6
        },
        mitigation: "The company has secured long-term supply agreements and is investing in alternative materials research."
      },
      flexibility: {
        summary: "Good flexibility with adaptable manufacturing processes and diverse product applications.",
        marketAdaptability: "Has shown ability to pivot products for different market applications",
        financialStability: "Adequate cash reserves of ₹150 Cr with manageable debt levels",
        productDiversification: "Product range covers various capacity and application needs",
        futureAdaptability: "Active R&D (15% of revenue) focused on next-gen storage technologies"
      },
      timing: {
        summary: "Very good timing with global push towards renewable energy adoption.",
        marketTimingAssessment: "The IPO coincides with increasing government focus on renewable energy and sustainability initiatives worldwide.",
        keyMilestones: [
          { date: "2025-06-08", event: "Anchor Investor Allocation" },
          { date: "2025-06-15", event: "Issue Opening" },
          { date: "2025-06-18", event: "Issue Closing" },
          { date: "2025-06-21", event: "Allotment Finalization" },
          { date: "2025-06-23", event: "Refunds Initiation" },
          { date: "2025-06-24", event: "Listing on Exchanges" }
        ]
      },
      performance: {
        summary: "Consistent growth trajectory with improving operational efficiency.",
        historicalGrowth: "CAGR of 30% over the past 3 years",
        keyAchievements: [
          "Expanded manufacturing capacity by 200% in the last 2 years",
          "Reduced production costs by 15% through process innovations",
          "Established partnerships with major renewable energy providers",
          "Successful entry into international markets"
        ],
        managementQuality: "Strong leadership team with backgrounds in energy, manufacturing, and technology sectors",
        futureOutlook: "Projected to grow at 25-30% annually as renewable energy adoption accelerates globally"
      }
    }
  },
  {
    id: "ipo-003",
    companyName: "MediLife Sciences",
    companyLogo: "/placeholder.svg",
    ticker: "MLS",
    sector: "Healthcare",
    industryCategory: "Pharmaceuticals",
    status: "open",
    issueSize: "₹950 Cr",
    priceBand: "₹520 - ₹550",
    lotSize: 27,
    minLots: 1,
    openDate: "2025-05-18",
    closeDate: "2025-05-22",
    listingDate: "2025-05-28",
    allocation: {
      qib: 50,
      nii: 15,
      retail: 35,
    },
    fundamentalsScore: 8,
    riskMeter: 6,
    flexibilityScore: 7,
    timeScore: 7,
    performanceScore: 8,
    overallScore: 7,
    recommendation: "Buy",
    description: "MediLife Sciences is a biopharmaceutical company focused on developing innovative therapies for chronic diseases and rare conditions. The company has a robust pipeline of patented drug candidates with two products already approved and in the market.",
    detailedAnalysis: {
      fundamentals: {
        summary: "Strong research-backed fundamentals with two approved drugs and promising pipeline.",
        marketPosition: "Established player in specialty pharmaceutical segment with focus on chronic disease management.",
        businessModel: "R&D-driven model with revenue from approved drugs and potential licensing deals.",
        revenue: {
          total: "₹620 Cr",
          growth: "22% YoY",
          breakdown: [
            { segment: "Drug Products", percentage: 70 },
            { segment: "Licensing", percentage: 20 },
            { segment: "Contract Research", percentage: 10 }
          ]
        },
        profit: {
          netProfit: "₹75 Cr",
          margin: "12.1%",
          growth: "18% YoY"
        }
      },
      riskAssessment: {
        summary: "Moderate to high risk due to uncertain R&D outcomes and regulatory approval processes.",
        keyRisks: [
          "Clinical trial outcomes and regulatory approvals",
          "Patent expirations and generic competition",
          "Pricing pressure from healthcare reforms",
          "Manufacturing and quality control challenges"
        ],
        categories: {
          market: 6,
          operational: 5,
          financial: 6,
          regulatory: 7
        },
        mitigation: "Diversified pipeline targeting multiple conditions and therapeutic areas reduces dependence on single drug success."
      },
      flexibility: {
        summary: "Good flexibility with diverse research targets and adaptable development strategies.",
        marketAdaptability: "Research focus can be shifted based on emerging medical needs",
        financialStability: "₹280 Cr in cash reserves with R&D investments backed by strategic partners",
        productDiversification: "Pipeline targeting multiple therapeutic areas and conditions",
        futureAdaptability: "High R&D spending (25% of revenue) ensuring continued innovation"
      },
      timing: {
        summary: "Good timing with increased focus on healthcare innovation post-pandemic.",
        marketTimingAssessment: "The IPO comes at a time when healthcare investments are receiving significant attention due to increased awareness of medical research importance.",
        keyMilestones: [
          { date: "2025-05-11", event: "Anchor Investor Allocation" },
          { date: "2025-05-18", event: "Issue Opening" },
          { date: "2025-05-22", event: "Issue Closing" },
          { date: "2025-05-25", event: "Allotment Finalization" },
          { date: "2025-05-26", event: "Refunds Initiation" },
          { date: "2025-05-28", event: "Listing on Exchanges" }
        ]
      },
      performance: {
        summary: "Strong performance with consistent revenue growth and strategic partnerships.",
        historicalGrowth: "CAGR of 22% over the past 3 years",
        keyAchievements: [
          "Two drug approvals in the past 4 years",
          "Strategic partnerships with major pharmaceutical companies",
          "Expanded research capabilities with new state-of-the-art facility",
          "Recognized for innovation in chronic disease management"
        ],
        managementQuality: "Leadership team combines scientific expertise with business acumen",
        futureOutlook: "Pipeline products entering Phase III trials could significantly accelerate growth in 2-3 years"
      }
    }
  },
  {
    id: "ipo-004",
    companyName: "UrbanMobility Technologies",
    companyLogo: "/placeholder.svg",
    ticker: "UMT",
    sector: "Transportation",
    industryCategory: "Urban Mobility",
    status: "upcoming",
    issueSize: "₹650 Cr",
    priceBand: "₹210 - ₹230",
    lotSize: 65,
    minLots: 1,
    openDate: "2025-06-20",
    closeDate: "2025-06-23",
    listingDate: "2025-06-29",
    allocation: {
      qib: 50,
      nii: 15,
      retail: 35,
    },
    fundamentalsScore: 6,
    riskMeter: 7,
    flexibilityScore: 8,
    timeScore: 6,
    performanceScore: 6,
    overallScore: 6,
    recommendation: "Moderate Buy",
    description: "UrbanMobility Technologies provides innovative solutions for urban transportation challenges. Their platform combines electric mobility options, ride-sharing technology, and smart city infrastructure integration to create sustainable urban mobility ecosystems.",
    detailedAnalysis: {
      fundamentals: {
        summary: "Promising fundamentals in a growing sector, though currently in investment phase.",
        marketPosition: "Innovative player disrupting traditional urban transportation models.",
        businessModel: "Platform-based, combining hardware (EV fleet) and software (mobility management) solutions.",
        revenue: {
          total: "₹320 Cr",
          growth: "40% YoY",
          breakdown: [
            { segment: "Mobility Platform", percentage: 45 },
            { segment: "EV Fleet Operations", percentage: 35 },
            { segment: "Infrastructure Solutions", percentage: 20 }
          ]
        },
        profit: {
          netProfit: "₹15 Cr",
          margin: "4.7%",
          growth: "First profitable year"
        }
      },
      riskAssessment: {
        summary: "Higher risk profile due to emerging business model and regulatory uncertainties.",
        keyRisks: [
          "Urban mobility regulations vary across cities",
          "High capital requirements for fleet expansion",
          "Technology adoption barriers in some markets",
          "Competitive landscape with both startups and established players"
        ],
        categories: {
          market: 7,
          operational: 7,
          financial: 8,
          regulatory: 6
        },
        mitigation: "City-by-city expansion strategy allows adaptation to local regulations and market conditions."
      },
      flexibility: {
        summary: "Excellent flexibility with adaptable platform that can integrate various mobility solutions.",
        marketAdaptability: "Platform design allows adaptation to different urban environments",
        financialStability: "Recently raised ₹210 Cr in pre-IPO funding, though still requires capital for expansion",
        productDiversification: "Solutions span multiple transportation modes and city needs",
        futureAdaptability: "Tech-first approach allows rapid iteration and feature development"
      },
      timing: {
        summary: "Good timing aligned with urban sustainability trends, though capital markets are cautious.",
        marketTimingAssessment: "The IPO aligns with increasing focus on sustainable urban development and smart city initiatives.",
        keyMilestones: [
          { date: "2025-06-15", event: "Anchor Investor Allocation" },
          { date: "2025-06-20", event: "Issue Opening" },
          { date: "2025-06-23", event: "Issue Closing" },
          { date: "2025-06-26", event: "Allotment Finalization" },
          { date: "2025-06-28", event: "Refunds Initiation" },
          { date: "2025-06-29", event: "Listing on Exchanges" }
        ]
      },
      performance: {
        summary: "Growing performance metrics with recent path to profitability.",
        historicalGrowth: "CAGR of 45% over the past 3 years, though from a small base",
        keyAchievements: [
          "Successfully deployed in 12 major cities across 3 countries",
          "Reached 1.5 million monthly active users",
          "Achieved operational profitability in 4 key markets",
          "Reduced carbon emissions by an estimated 35,000 tons annually"
        ],
        managementQuality: "Young but innovative leadership team with backgrounds in technology and urban planning",
        futureOutlook: "Rapid growth potential as urban mobility transformation accelerates globally"
      }
    }
  },
  {
    id: "ipo-005",
    companyName: "AgriTech Innovations",
    companyLogo: "/placeholder.svg",
    ticker: "ATI",
    sector: "Agriculture",
    industryCategory: "Agricultural Technology",
    status: "closed",
    issueSize: "₹450 Cr",
    priceBand: "₹180 - ₹195",
    lotSize: 76,
    minLots: 1,
    openDate: "2025-05-05",
    closeDate: "2025-05-08",
    listingDate: "2025-05-15",
    allocation: {
      qib: 50,
      nii: 15,
      retail: 35,
    },
    fundamentalsScore: 7,
    riskMeter: 5,
    flexibilityScore: 6,
    timeScore: 7,
    performanceScore: 7,
    overallScore: 7,
    recommendation: "Buy",
    description: "AgriTech Innovations develops technology solutions for sustainable agriculture. Their product suite includes precision farming tools, IoT sensors for crop monitoring, and AI-powered analytics for yield optimization and resource management.",
    detailedAnalysis: {
      fundamentals: {
        summary: "Strong fundamentals with growing adoption of technology in agriculture sector.",
        marketPosition: "Pioneer in integrating IoT and AI technologies in agricultural applications.",
        businessModel: "Hardware sales + SaaS model for ongoing analytics and monitoring services.",
        revenue: {
          total: "₹280 Cr",
          growth: "25% YoY",
          breakdown: [
            { segment: "Farm Management Solutions", percentage: 40 },
            { segment: "IoT Devices & Sensors", percentage: 35 },
            { segment: "Data Analytics Services", percentage: 25 }
          ]
        },
        profit: {
          netProfit: "₹32 Cr",
          margin: "11.4%",
          growth: "30% YoY"
        }
      },
      riskAssessment: {
        summary: "Moderate risk profile with seasonal dependencies and adoption barriers in traditional farming.",
        keyRisks: [
          "Seasonality affecting sales cycles",
          "Technology adoption barriers in traditional farming communities",
          "Weather and climate-related unpredictability",
          "International market entry challenges due to varying agricultural practices"
        ],
        categories: {
          market: 5,
          operational: 4,
          financial: 5,
          regulatory: 6
        },
        mitigation: "Educational initiatives and demonstrations helping overcome adoption barriers, while geographic diversification reduces seasonal impacts."
      },
      flexibility: {
        summary: "Good flexibility with solutions adaptable to various crop types and farming environments.",
        marketAdaptability: "Solutions can be modified for different crops and farming practices",
        financialStability: "Healthy balance sheet with ₹120 Cr in cash and minimal debt",
        productDiversification: "Multiple product lines serving different agricultural needs",
        futureAdaptability: "R&D (14% of revenue) focused on expanding capabilities to new agricultural applications"
      },
      timing: {
        summary: "Good timing aligned with increasing focus on food security and sustainable farming practices.",
        marketTimingAssessment: "The IPO comes at a time when agricultural technology is gaining attention due to global food security concerns and sustainability initiatives.",
        keyMilestones: [
          { date: "2025-04-28", event: "Anchor Investor Allocation" },
          { date: "2025-05-05", event: "Issue Opening" },
          { date: "2025-05-08", event: "Issue Closing" },
          { date: "2025-05-11", event: "Allotment Finalization" },
          { date: "2025-05-13", event: "Refunds Initiation" },
          { date: "2025-05-15", event: "Listing on Exchanges" }
        ]
      },
      performance: {
        summary: "Consistent performance with growing customer base and expanding geographic presence.",
        historicalGrowth: "CAGR of 27% over the past 3 years",
        keyAchievements: [
          "Technology deployed across 500,000+ acres of farmland",
          "Proven yield improvements of 15-30% for partner farms",
          "Expanded from domestic to 5 international markets",
          "Developed partnerships with major agricultural input providers"
        ],
        managementQuality: "Experienced leadership combining agricultural expertise with technology backgrounds",
        futureOutlook: "Positioned to benefit from increasing technology adoption in agriculture globally"
      }
    }
  }
];

export const currentUser: User = {
  id: "user-001",
  name: "John Doe",
  email: "john@example.com",
  role: "user",
  avatar: "/placeholder.svg"
};

export const adminUser: User = {
  id: "admin-001",
  name: "Admin User",
  email: "admin@example.com",
  role: "admin",
  avatar: "/placeholder.svg"
};
