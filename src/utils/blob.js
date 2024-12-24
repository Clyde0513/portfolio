import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename');

  // Get file from form data
  const file = await request.blob();

  // Upload to Vercel Blob
  const blob = await put(filename, file, {
    access: 'public',
  });

  return NextResponse.json(blob);
}