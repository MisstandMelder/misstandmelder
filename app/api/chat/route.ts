import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      console.error('Invalid or missing messages:', messages)
      return NextResponse.json({ error: 'Missing or invalid messages' }, { status: 400 })
    }

    const systemPrompt = `Je bent een behulpzame assistent voor het MisstandMelder platform, een gratis, open-source platform om misstanden in Nederland (zoals corruptie, bureaucratie, gebrek aan menselijkheid) te melden via Google Reviews. 
    
    Help de gebruiker bij het formuleren van een duidelijke en effectieve melding. Vraag naar details zoals:
    - Waar vond het incident plaats?
    - Wanneer gebeurde het?
    - Wie was erbij betrokken?
    - Wat is er precies gebeurd?
    
    Geef advies over hoe ze hun ervaring kunnen delen op Google Maps en help hen bij het opstellen van een objectieve review.
    
    Antwoord in het Nederlands tenzij de gebruiker in een andere taal communiceert.`

    const lastMessage = messages[messages.length - 1].content

    console.log('Sending request to xAI API with messages:', messages)
    console.log('System prompt:', systemPrompt)
    console.log('Last message:', lastMessage)

    const response = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.XAI_API_KEY_2}`,
      },
      body: JSON.stringify({
        model: 'grok',
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages.slice(0, -1),
          { role: 'user', content: lastMessage },
        ],
        max_tokens: 1000,
      }),
    })

    console.log('xAI API response status:', response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.error('xAI API error:', errorText)
      return NextResponse.json({ error: 'Failed to fetch from xAI API', details: errorText }, { status: response.status })
    }

    const data = await response.json()
    console.log('xAI API response data:', data)

    if (!data.choices || !data.choices[0].message.content) {
      console.error('Invalid API response:', data)
      return NextResponse.json({ error: 'Invalid response from xAI API' }, { status: 500 })
    }

    return NextResponse.json({ response: data.choices[0].message.content })
  } catch (error) {
    console.error('Error in /api/chat:', error.message)
    return NextResponse.json({ error: 'Internal server error', details: error.message }, { status: 500 })
  }
}
