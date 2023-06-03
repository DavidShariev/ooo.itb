import sendMail from '@/lib/sendEmail';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: any, res: any) {
  console.log(req)
  return NextResponse.json({ text: req.body?.name });
  
}

export async function POST(req: any, res:any) {
  const {data} = await req.json()
  console.log(data)
  sendMail(data.name, data.phone, data.email, data.text)
  return NextResponse.json({name:req.body?.name});
}