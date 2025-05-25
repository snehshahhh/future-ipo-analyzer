
export interface FinancialReport {
  period_ended: string;
  revenue: string;
  expense: string;
  profit_after_tax: string;
  assets: string;
}

export interface IpoDates {
  ipo_open_date: string;
  ipo_close_date: string;
  basis_of_allotment: string;
  refunds: string;
  credit_to_demat_account: string;
  ipo_listing_date: string;
}

export interface IpoDetails {
  ipo_open_date?: string;
  ipo_close_date?: string;
  face_value: string;
  ipo_price_band: string;
  issue_size: string;
  fresh_issue: string;
  issue_type: string;
  ipo_listing: string;
  retail_quota: string;
  qib_quota: string;
  nii_quota: string;
  drhp_draft_prospectus?: string;
  drhp_link: string;
  rhp_draft_prospectus?: string;
  rhp_link: string;
  anchor_investors_list?: string;
}

export interface IpoMarketLot {
  application: string;
  lot_size: string;
  shares: string;
  amount: string;
}

export interface IPO {
  _id: string;
  upcoming_ipo_2025: string;
  open_date: string;
  closing_date: string;
  ipo_type: string;
  ipo_size: string;
  price_band: string;
  detail_url?: string;
  scraped_at?: string;
  about?: string;
  financial_report?: FinancialReport[];
  ipo_dates?: IpoDates;
  ipo_details?: IpoDetails;
  ipo_market_lot?: IpoMarketLot[];
  promoters?: string;
  rhp_url?: string;
}

// Analysis types
export interface ComprehensiveAnalysis {
  _id: string;
  ipo_table_id: string;
  company_name: string;
  fundamentals: {
    score: number;
    summary: string;
    market_position: string;
    business_model: string;
    revenue_details: {
      total_revenue: number;
      revenue_cagr: number;
      revenue_trend: string;
    };
    profit_analysis: {
      net_profit: number;
      profit_margin: number;
      ebitda?: number | null;
      profit_trend: string;
    };
    assets_and_liabilities: {
      total_assets: number;
      total_liabilities?: number | null;
      debt_to_equity_ratio?: number | null;
    };
    financial_ratios: {
      current_ratio?: number | null;
      quick_ratio?: number | null;
      return_on_equity?: number | null;
    };
  };
  risk_meter: {
    score: number;
    summary: string;
    key_risks: string[];
    risk_categories: {
      financial_risks: string[];
      market_risks: string[];
      operational_risks: string[];
      regulatory_risks: string[];
    };
    risk_mitigation: string;
  };
  flexibility: {
    score: number;
    summary: string;
    market_adaptability: {
      score: number;
      description: string;
    };
    financial_stability: {
      score?: number | null;
      description?: string | null;
    };
    operational_agility: {
      score: number;
      description: string;
    };
    product_diversification: string;
    pivoting_history: string[];
    future_adaptability_potential: string;
  };
  time: {
    score: number;
    summary: string;
    issue_dates: {
      opening: string;
      closing: string;
    };
    listing_details: {
      expected_date: string;
      exchanges: string[];
    };
    allotment_timeline: {
      date: string;
      process: string;
    };
    key_milestones: Array<{
      date: string;
      event: string;
    }>;
    market_timing_assessment: string;
    time_to_market: {
      score: number;
      rationale: string;
    };
  };
  performance: {
    score: number;
    summary: string;
    historical_growth: {
      pattern: string;
      rate: string;
      consistency: string;
    };
    key_achievements: string[];
    management_quality: {
      experience: string;
      track_record: string;
      score: number;
    };
    market_comparison: string;
    future_potential: {
      growth_forecast: string;
      upcoming_projects: string[];
    };
    consistency_analysis: {
      operational_years: number;
      revenue_stability: string;
      rationale: string;
    };
  };
  ipo_details: {
    issue_size: string;
    price_band: string;
    lot_size: number;
    allocation_details: {
      retail: number;
      qib: number;
      nii: number;
    };
    approximate_gains_potential: number;
    gains_rationale: string;
    profitability_of_allotment: {
      score: number;
      assessment: string;
    };
  };
  summary_metrics: {
    fundamentals_score: number;
    risk_meter: number;
    flexibility_score: number;
    time_score: number;
    performance_score: number;
    approximate_gains_potential: number;
    profitability_of_allotment: number;
    total_revenue: number;
    net_profit: number;
    total_assets: number;
  };
}
