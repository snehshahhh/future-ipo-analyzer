
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongo';
import Ipo from '@/models/Ipo';

export async function GET() {
  try {
    await dbConnect();
    
    // Get upcoming IPOs from the real database
    const ipos = await Ipo.find({})
      .select('_id upcoming_ipo_2025 open_date closing_date ipo_size price_band ipo_type')
      .sort({ open_date: 1 })
      .limit(20);
      
    return NextResponse.json({ success: true, data: ipos });
  } catch (error) {
    console.error('Error fetching IPOs:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch IPOs' },
      { status: 500 }
    );
  }
}
