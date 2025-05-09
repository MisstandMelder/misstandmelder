// app/api/grok/route.ts
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: Request) {
  try {
    const apiKey = process.env.XAI_API_KEY_2;
    if (!apiKey) {
      return NextResponse.json({ error: 'XAI_API_KEY_2 is not defined' }, { status: 500 });
    }

    const body = await request.json();
    const response = await axios.post('https://api.x.ai/grok', body, {
      headers: { 'Authorization': `Bearer ${apiKey}` }
    });

    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}