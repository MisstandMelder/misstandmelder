import { generateText } from "ai"
import { createXai } from "@ai-sdk/xai"
import { type NextRequest, NextResponse } from "next/server"

// Create xai instance with explicit API key
const xai = createXai({
  apiKey: process.env.XAI_API_KEY || process.env.XAI_API_KEY_2,
})

export async function POST(req: NextRequest) {
  try {
    const { location, date, description, impact, types, rating } = await req.json()

    // Converteer types array naar een leesbare string
    const typesText = types
      .map((type: string) => {
        const typeMap: Record<string, string> = {
          fraude: "fraude",
          corruptie: "corruptie",
          discriminatie: "discriminatie",
          intimidatie: "intimidatie",
          diefstal: "diefstal",
          misbruik: "misbruik",
          nepotisme: "nepotisme",
          bedrog: "bedrog",
          wanbeheer: "wanbeheer",
          bureaucratie: "bureaucratie",
          slechtzorg: "slechtzorg",
          nalatigheid: "nalatigheid",
        }
        return typeMap[type] || type
      })
      .join(", ")

    const { text } = await generateText({
      model: xai("grok-3"),
      prompt: `Genereer een objectieve Google Review voor de volgende situatie:
      
      Locatie: ${location}
      Datum: ${date}
      Type misstand: ${typesText}
      Beschrijving: ${description}
      Impact: ${impact}
      Beoordeling: ${rating} ster${rating > 1 ? "ren" : ""}
      
      Maak een duidelijke, feitelijke en respectvolle review die de situatie goed beschrijft en die nuttig is voor anderen. 
      De review moet passen bij een ${rating}-sterren beoordeling op Google Maps.`,
      system: `Je bent een assistent die helpt bij het opstellen van effectieve meldingen van misstanden voor het MisstandMelder platform. 
      Genereer een objectieve Google Review op basis van de gegeven informatie. 
      De review moet feitelijk, duidelijk en respectvol zijn.
      De toon van de review moet passen bij het aantal sterren in de beoordeling (1-5).`,
    })

    return NextResponse.json({ text })
  } catch (error) {
    console.error("Error generating report:", error)
    return NextResponse.json({ error: "Failed to generate report" }, { status: 500 })
  }
}
