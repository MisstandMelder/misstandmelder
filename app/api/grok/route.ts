import { NextResponse } from 'next/server';
import { generateText } from 'ai';
import { createXai } from '@ai-sdk/xai';

export async function POST(request: Request) {
  try {
    console.log('Received POST request to /api/grok');
    const { message, messages } = await request.json();
    console.log('Request body:', { message, messages });

    const apiKey = process.env.AI_URL_XAI_API_KEY_2;
console.log('API Key:', apiKey ? 'Loaded' : 'Not loaded');
if (!apiKey) {
  throw new Error('Missing API key');
}

    // Initialiseer de xAI-provider
    const xai = createXai({
      apiKey,
      baseURL: 'https://api.x.ai/v1', // Standaard xAI API URL
    });

    // Gebruik generateText voor chat-completie
    const { text } = await generateText({
      model: xai('grok-3-latest'), // Model specificeren
      messages: [
        ...messages,
        { role: 'user', content: message || 'Testing.' },
      ],
    });

    console.log('Grok API response:', text);
    return NextResponse.json({ text }, { status: 200 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch response from Grok API', details: error.message },
      { status: 500 }
    );
  }
}
