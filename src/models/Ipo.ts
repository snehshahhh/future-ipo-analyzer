
import mongoose, { Schema } from 'mongoose';

// Financial report schema
const FinancialReportSchema = new Schema({
  period_ended: String,
  revenue: String,
  expense: String,
  profit_after_tax: String,
  assets: String
});

// IPO dates schema
const IpoDatesSchema = new Schema({
  ipo_open_date: String,
  ipo_close_date: String,
  basis_of_allotment: String,
  refunds: String,
  credit_to_demat_account: String,
  ipo_listing_date: String
});

// IPO details schema
const IpoDetailsSchema = new Schema({
  ipo_open_date: String,
  ipo_close_date: String,
  face_value: String,
  ipo_price_band: String,
  issue_size: String,
  fresh_issue: String,
  issue_type: String,
  ipo_listing: String,
  retail_quota: String,
  qib_quota: String,
  nii_quota: String,
  drhp_draft_prospectus: String,
  drhp_link: String,
  rhp_draft_prospectus: String,
  rhp_link: String,
  anchor_investors_list: String
});

// IPO market lot schema
const IpoMarketLotSchema = new Schema({
  application: String,
  lot_size: String,
  shares: String,
  amount: String
});

// Main IPO schema with updated field names
const IpoSchema = new Schema({
  upcoming_ipo_2025: { type: String, required: true },
  open_date: String,
  closing_date: String,
  ipo_type: String,
  ipo_size: String,
  price_band: String,
  detail_url: String,
  scraped_at: Date,
  about: String,
  financial_report: [FinancialReportSchema],
  ipo_dates: IpoDatesSchema,
  ipo_details: IpoDetailsSchema,
  ipo_market_lot: [IpoMarketLotSchema],
  promoters: String,
  rhp_url: String
}, { timestamps: true });

// Analysis schema
const AnalysisSchema = new Schema({
  ipo_table_id: { type: String, required: true },
  company_name: String,
  fundamentals: {
    score: Number,
    summary: String,
    market_position: String,
    business_model: String,
    revenue_details: {
      total_revenue: Number,
      revenue_cagr: Number,
      revenue_trend: String
    },
    profit_analysis: {
      net_profit: Number,
      profit_margin: Number,
      ebitda: Number,
      profit_trend: String
    },
    assets_and_liabilities: {
      total_assets: Number,
      total_liabilities: Number,
      debt_to_equity_ratio: Number
    },
    financial_ratios: {
      current_ratio: Number,
      quick_ratio: Number,
      return_on_equity: Number
    }
  },
  risk_meter: {
    score: Number,
    summary: String,
    key_risks: [String],
    risk_categories: {
      financial_risks: [String],
      market_risks: [String],
      operational_risks: [String],
      regulatory_risks: [String]
    },
    risk_mitigation: String
  },
  flexibility: {
    score: Number,
    summary: String,
    market_adaptability: {
      score: Number,
      description: String
    },
    financial_stability: {
      score: Number,
      description: String
    },
    operational_agility: {
      score: Number,
      description: String
    },
    product_diversification: String,
    pivoting_history: [String],
    future_adaptability_potential: String
  },
  time: {
    score: Number,
    summary: String,
    issue_dates: {
      opening: String,
      closing: String
    },
    listing_details: {
      expected_date: String,
      exchanges: [String]
    },
    allotment_timeline: {
      date: String,
      process: String
    },
    key_milestones: [{
      date: String,
      event: String
    }],
    market_timing_assessment: String,
    time_to_market: {
      score: Number,
      rationale: String
    }
  },
  performance: {
    score: Number,
    summary: String,
    historical_growth: {
      pattern: String,
      rate: String,
      consistency: String
    },
    key_achievements: [String],
    management_quality: {
      experience: String,
      track_record: String,
      score: Number
    },
    market_comparison: String,
    future_potential: {
      growth_forecast: String,
      upcoming_projects: [String]
    },
    consistency_analysis: {
      operational_years: Number,
      revenue_stability: String,
      rationale: String
    }
  },
  ipo_details: {
    issue_size: String,
    price_band: String,
    lot_size: Number,
    allocation_details: {
      retail: Number,
      qib: Number,
      nii: Number
    },
    approximate_gains_potential: Number,
    gains_rationale: String,
    profitability_of_allotment: {
      score: Number,
      assessment: String
    }
  },
  summary_metrics: {
    fundamentals_score: Number,
    risk_meter: Number,
    flexibility_score: Number,
    time_score: Number,
    performance_score: Number,
    approximate_gains_potential: Number,
    profitability_of_allotment: Number,
    total_revenue: Number,
    net_profit: Number,
    total_assets: Number
  }
}, { timestamps: true });

// Check if the models already exist to prevent OverwriteModelError
const Ipo = mongoose.models.Ipo || mongoose.model('Ipo', IpoSchema);
const Analysis = mongoose.models.Analysis || mongoose.model('Analysis', AnalysisSchema, 'ipo_comprehensive_analysis');

export default Ipo;
export { Analysis };
