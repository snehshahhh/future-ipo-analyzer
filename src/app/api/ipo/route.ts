
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongo';
import Ipo from '@/models/Ipo';

export async function GET() {
  try {
    await dbConnect();
    
    // Get upcoming IPOs (those with future Open Dates)
    const currentDate = new Date();
    
    // For demo purposes, we'll just get all IPOs
    // In production, you would filter by date
    const ipos = await Ipo.find({})
      .select('_id Upcoming\ IPO\ 2025 Open\ Date Closing\ Date IPO\ Size Price\ Band IPO\ Type')
      .sort({ 'Open Date': 1 })
      .limit(10);
      
    return NextResponse.json({ success: true, data: ipos });
  } catch (error) {
    console.error('Error fetching IPOs:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch IPOs' },
      { status: 500 }
    );
  }
}
