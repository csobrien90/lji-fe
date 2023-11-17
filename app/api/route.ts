// Import Next request and response types
import { NextRequest, NextResponse } from 'next/server'

export function GET(req: NextRequest) {
  return NextResponse.json('Connected to the API')
}