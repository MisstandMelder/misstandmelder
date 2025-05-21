import { generateText } from "ai"
import { createXai } from "@ai-sdk/xai"
import { type NextRequest, NextResponse } from "next/server"

// Create xai instance with explicit API key
const xai = createXai({
  apiKey: process.env.XAI_API_KEY || process.env.XAI_API_KEY_2,
})

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    const systemPrompt = `Je bent een behulpzame assistent voor het MisstandMelder platform, een gratis, open-source platform om misstanden in Nederland (zoals fraude, corruptie, discriminatie, etc.) te melden via Google Reviews. 
    
    Help de gebruiker bij het formuleren van een duidelijke en effectieve melding. Vraag naar details zoals:
    - Waar vond het incident plaats?
    - Wanneer gebeurde het?
    - Wie was erbij betrokken?
    - Wat is er precies gebeurd?
    - Welke sterrenbeoordeling (1-5) past bij de situatie?
    - Welk type misstand is van toepassing?
    
    Types misstanden die kunnen worden gemeld:
    - Fraude: Opzettelijk bedrog voor financieel of ander voordeel
    - Corruptie: Misbruik van toevertrouwde macht voor persoonlijk gewin
    - Discriminatie: Ongelijke behandeling op basis van kenmerken zoals afkomst, geslacht, etc.
    - Intimidatie: Gedrag dat angst of ongemak veroorzaakt
    - Diefstal: Onrechtmatig toe-eigenen van andermans bezit
    - Misbruik: Verkeerd gebruik van macht, positie of middelen
    - Nepotisme: Bevoordelen van familie of vrienden
    - Bedrog: Misleiding of valse voorstelling van zaken
    - Wanbeheer: Slecht of inefficiënt beheer van middelen of organisatie
    - Bureaucratie: Overdreven regels en procedures die effectiviteit belemmeren
    - Slechtzorg: Ondermaatse zorg in zorginstellingen
    - Nalatigheid: Verzuim om te handelen waar dat wel verwacht wordt
    
    Informatie over sterrenbeoordelingen:
    - 1 ster: Zeer ernstige misstanden, grove nalatigheid, corruptie
    - 2 sterren: Ernstige problemen, slechte dienstverlening, onprofessioneel gedrag
    - 3 sterren: Gemiddelde ervaring met enkele problemen
    - 4 sterren: Over het algemeen goed, maar met enkele verbeterpunten
    - 5 sterren: Uitstekende ervaring, geen misstanden (niet gebruikelijk voor dit platform)
    
    Geef advies over hoe ze hun ervaring kunnen delen op Google Maps en help hen bij het opstellen van een objectieve review.
    
    Antwoord in het Nederlands tenzij de gebruiker in een andere taal communiceert.`

    // Format messages for the AI model
    const formattedMessages = messages.map((msg: any) => ({
      role: msg.role,
      content: msg.content,
    }))

    const { text } = await generateText({
      model: xai("grok-3"),
      messages: formattedMessages,
      system: systemPrompt,
    })

    return NextResponse.json({ response: text })
  } catch (error) {
    console.error("Error in chat API:", error)
    return NextResponse.json({ error: "Failed to generate response" }, { status: 500 })
  }
}
