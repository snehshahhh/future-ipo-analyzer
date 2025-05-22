
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

// Main IPO schema
const IpoSchema = new Schema({
  "Upcoming IPO 2025": { type: String, required: true },
  "Closing Date": String,
  "IPO Size": String,
  "IPO Type": String,
  "Open Date": String,
  "Price Band": String,
  detail_url: String,
  scraped_at: Date,
  about: String,
  financial_report: [FinancialReportSchema],
  ipo_dates: IpoDatesSchema,
  ipo_details: IpoDetailsSchema,
  ipo_market_lot: [IpoMarketLotSchema],
  promoters: String,
}, { timestamps: true });

// Check if the model already exists to prevent OverwriteModelError
const Ipo = mongoose.models.Ipo || mongoose.model('Ipo', IpoSchema);

export default Ipo;
