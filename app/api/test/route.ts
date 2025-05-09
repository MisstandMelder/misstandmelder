// app/api/test/route.ts
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  try {
    const apiKey = process.env.XAI_API_KEY_2;
    if (!apiKey) {
      return NextResponse.json({ error: 'XAI_API_KEY_2 is not defined' }, { status: 500 });
    }

    const response = await axios.get('https://api.x.ai/grok/test', {
      headers: { 'Authorization': `Bearer ${apiKey}` }
    });

    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}