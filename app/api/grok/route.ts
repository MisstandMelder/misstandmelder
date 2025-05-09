import { xAI } from 'ai';

export async function POST(request: Request) {
  try {
    console.log('Received POST request to /api/grok');
    const { message } = await request.json();
    console.log('Request body:', { message });
    const apiKey = process.env.XAI_API_KEY_2; // Gebruik XAI_API_KEY_2 voor misstandmelder
    console.log('API Key:', apiKey ? 'Loaded' : 'Not loaded');
    if (!apiKey) {
      throw new Error('Missing API key');
    }
    const response = await xAI({
      model: 'grok-3-latest',
      messages: [
        { role: 'system', content: 'You are a helpful assistant for MisstandMelder, assisting users in reporting issues in the Netherlands.' },
        { role: 'user', content: message || 'Testing.' },
      ],
      apiKey,
    });
    console.log('Grok API response:', response);
    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch response from Grok API' }), { status: 500 });
  }
}
