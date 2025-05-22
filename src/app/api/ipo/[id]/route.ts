
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongo';
import Ipo from '@/models/Ipo';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    await dbConnect();
    
    const ipo = await Ipo.findById(id);
    
    if (!ipo) {
      return NextResponse.json(
        { success: false, error: 'IPO not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, data: ipo });
  } catch (error) {
    console.error('Error fetching IPO details:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch IPO details' },
      { status: 500 }
    );
  }
}
