import { generateText } from 'ai';
import { xai } from '@ai-sdk/xai';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    console.log('Received POST request to /api/grok');
    const { message, messages } = await req.json();
    console.log('Request body:', { message, messages });

    const apiKey = process.env.XAI_API_KEY_2;
console.log('API Key Value:', apiKey);
console.log('API Key:', apiKey ? 'Loaded' : 'Not loaded');
if (!apiKey) {
  throw new Error('Missing API key');
}

    const { text } = await generateText({
      model: xai('grok-3-latest'),
      messages: [
        ...messages,
        { role: 'user', content: message || 'Testing.' },
      ],
    });

    return NextResponse.json({ text });
  } catch (error) {
    console.error('API Error:', {
      message: error.message,
      name: error.name,
      stack: error.stack,
      error: String(error)
    });
    return NextResponse.json(
      {
        error: 'Failed to fetch response from Grok API',
        details: error.message || String(error)
      },
      { status: 500 }
    );
  }
}