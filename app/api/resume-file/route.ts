import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const resumeDir = path.join(process.cwd(), 'public', 'resume');
    const files = fs.readdirSync(resumeDir);

    // Find the first PDF file
    const pdfFile = files.find(file => file.toLowerCase().endsWith('.pdf'));

    if (pdfFile) {
      return NextResponse.json({ filename: pdfFile });
    } else {
      return NextResponse.json({ error: 'No PDF file found' }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read resume directory' }, { status: 500 });
  }
}
