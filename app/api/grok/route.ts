import { xAI } from 'ai';

export async function POST(request: Request) {
  try {
    console.log('Received POST request to /api/grok');
    const { message, messages } = await request.json();
    console.log('Request body:', { message, messages });
    const apiKey = process.env.XAI_API_KEY_2;
    console.log('API Key:', apiKey ? 'Loaded' : 'Not loaded');
    if (!apiKey) {
      throw new Error('Missing API key');
    }
    const response = await xAI({
      model: 'grok-3-latest',
      messages: [
        ...messages,
        { role: 'user', content: message || 'Testing.' },
      ],
      apiKey,
    });
    console.log('Grok API response:', response);
    return new Response(JSON.stringify({ text: response.text }), { status: 200 });
  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch response from Grok API', details: error.message }), { status: 500 });
  }
}
