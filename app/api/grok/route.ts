import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('Request body:', body);

    const apiKey = process.env.AI_URL_XAI_API_KEY_2;
    console.log('API Key Value:', apiKey);
    console.log('API Key:', apiKey ? 'Loaded' : 'Not loaded');

    if (!apiKey) {
      throw new Error('Missing API key');
    }

    const response = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'grok-3-latest',
        messages: body.messages.concat({ role: 'user', content: body.message }),
      }),
    });

    console.log('xAI API Response Status:', response.status);
    console.log('xAI API Response Headers:', [...response.headers.entries()]);

    if (!response.ok) {
      const errorText = await response.text();
      console.log('xAI API Error Response:', errorText);
      throw new Error(`xAI API error: ${response.status} ${errorText}`);
    }

    const data = await response.json();
    console.log('xAI API Response Data:', data);

    return NextResponse.json({ text: data.choices[0].message.content });
  } catch (error) {
    console.error('API Error:', {
      message: error.message,
      name: error.name,
      stack: error.stack,
    });
    return NextResponse.json(
      { error: 'Failed to fetch response from Grok API', details: error.message },
      { status: 500 }
    );
  }
}