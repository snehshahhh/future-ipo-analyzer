
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongo';
import { Analysis } from '@/models/Ipo';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    await dbConnect();
    
    const analysis = await Analysis.findOne({ ipo_table_id: id });
    
    if (!analysis) {
      return NextResponse.json(
        { success: false, error: 'Analysis not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, data: analysis });
  } catch (error) {
    console.error('Error fetching IPO analysis:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch IPO analysis' },
      { status: 500 }
    );
  }
}
