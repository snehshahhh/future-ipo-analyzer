
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  
  // Return the full sample data if ID matches
  if (id === "682cb19358f15cc8daa65481") {
    return NextResponse.json({
      success: true,
      data: {
        "_id": "682cb19358f15cc8daa65481",
        "Upcoming IPO 2025": "Blue Water Logistics",
        "Closing Date": "29 May",
        "IPO Size": "₹40.50 Cr.",
        "IPO Type": "SME",
        "Open Date": "27 May",
        "Price Band": "₹132 to ₹135",
        "detail_url": "https://ipowatch.in/blue-water-logistics-ipo-date-review-price-allotment-details/",
        "scraped_at": "2025-05-20T16:50:26.689368",
        "about": "Blue Water Logistics Limited, founded in April 2010, is involved in the business of offering logistics and supply chain solutions. The company mainly focuses on offering services such as freight forwarding, customs clearance, and transportation handling services. The company's portfolio consists of a diverse range of logistics projects, supply chain management (SCM), and warehousing across air, sea, and land transport. Blue Water Logistics is dedicated to delivering comprehensive services to meet clients' needs, such as cargo pick-up, customs clearance, and delivery, offering a complete suite of logistics services. As of now, the company consists of 5 branches in various cities: Chennai, Delhi, Jaipur, Visakhapatnam, and Thane. The company caters to customers in confectionery, chemicals, crockery, natural stones, textiles, electronics, and fitness equipment. The company has a total of 70 employees in different departments as of December 1, 2024.",
        "financial_report": [
          {
            "period_ended": "2022",
            "revenue": "₹158.5",
            "expense": "₹155.24",
            "profit_after_tax": "₹2.44",
            "assets": "₹41.70"
          },
          {
            "period_ended": "2023",
            "revenue": "₹98.07",
            "expense": "₹96.01",
            "profit_after_tax": "₹1.54",
            "assets": "₹29.28"
          },
          {
            "period_ended": "2024",
            "revenue": "₹138.74",
            "expense": "₹130.81",
            "profit_after_tax": "₹5.94",
            "assets": "₹42.12"
          },
          {
            "period_ended": "2025",
            "revenue": "₹196.29",
            "expense": "₹181.99",
            "profit_after_tax": "₹10.67",
            "assets": "₹76.34"
          }
        ],
        "ipo_dates": {
          "ipo_open_date": "May 27, 2025",
          "ipo_close_date": "May 29, 2025",
          "basis_of_allotment": "May 30, 2025",
          "refunds": "June 2, 2025",
          "credit_to_demat_account": "June 2, 2025",
          "ipo_listing_date": "June 3, 2025"
        },
        "ipo_details": {
          "face_value": "₹10 Per Equity Share",
          "ipo_price_band": "₹132 to ₹135 Per Share",
          "issue_size": "Approx ₹40.50 Crores",
          "fresh_issue": "Approx ₹40.50 Crores",
          "issue_type": "Book Built Issue",
          "ipo_listing": "NSE SME",
          "retail_quota": "Not more than 35%",
          "qib_quota": "Not more than 50%",
          "nii_quota": "Not more than 15%",
          "drhp_link": "https://nsearchives.nseindia.com/emerge/corporates/content/aartic_22012025193333_BWL_DRHP.pdf",
          "rhp_link": "https://bwl.co.in/wp-content/uploads/2025/05/Blue-Water_RHP_17.05.2025.pdf"
        },
        "ipo_market_lot": [
          {
            "application": "Application",
            "lot_size": "Lot Size",
            "shares": "Shares",
            "amount": "Amount"
          },
          {
            "application": "Retail Minimum",
            "lot_size": "1",
            "shares": "1,000",
            "amount": "₹1,35,000"
          },
          {
            "application": "Retail Maximum",
            "lot_size": "1",
            "shares": "1,000",
            "amount": "₹1,35,000"
          },
          {
            "application": "S-HNI Minimum",
            "lot_size": "2",
            "shares": "2,000",
            "amount": "₹2,70,000"
          }
        ],
        "promoters": "The promoters of the company are Mr. Laxmi Narayan Mishra, Mr. Lalit Panda, Ms. Madhusmita Mohanty and Ms. Supriya Mishra."
      }
    });
  }
  
  return NextResponse.json(
    { success: false, error: 'IPO not found' },
    { status: 404 }
  );
}
