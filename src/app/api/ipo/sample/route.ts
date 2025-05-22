
import { NextResponse } from 'next/server';

export async function GET() {
  // Dummy data based on the example provided
  const sampleIpos = [
    {
      _id: "682cb19358f15cc8daa65481",
      "Upcoming IPO 2025": "Blue Water Logistics",
      "Closing Date": "29 May",
      "IPO Size": "₹40.50 Cr.",
      "IPO Type": "SME",
      "Open Date": "27 May",
      "Price Band": "₹132 to ₹135"
    },
    {
      _id: "682cb19358f15cc8daa65482",
      "Upcoming IPO 2025": "TechStar Innovations",
      "Closing Date": "15 June",
      "IPO Size": "₹150.75 Cr.",
      "IPO Type": "Mainboard",
      "Open Date": "12 June",
      "Price Band": "₹450 to ₹475"
    },
    {
      _id: "682cb19358f15cc8daa65483",
      "Upcoming IPO 2025": "GreenEnergy Solutions",
      "Closing Date": "5 June",
      "IPO Size": "₹80.25 Cr.",
      "IPO Type": "Mainboard",
      "Open Date": "2 June",
      "Price Band": "₹210 to ₹225"
    },
    {
      _id: "682cb19358f15cc8daa65484",
      "Upcoming IPO 2025": "HealthCare Plus",
      "Closing Date": "20 June",
      "IPO Size": "₹95.40 Cr.",
      "IPO Type": "SME",
      "Open Date": "17 June",
      "Price Band": "₹180 to ₹190"
    }
  ];
  
  return NextResponse.json({ success: true, data: sampleIpos });
}
