import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { location, date, description, rating } = await request.json()

    // Stel de prompt samen
    const prompt = `
      Genereer een professionele Google Review op basis van de volgende informatie:
      - Locatie: ${location}
      - Datum: ${date}
      - Beschrijving: ${description}
      - Beoordeling: ${rating} sterren
      De review moet feitelijk, specifiek, impactvol en constructief zijn, zoals het voorbeeld:
      "Mijn ervaring met [locatie] was teleurstellend. [Specifieke details]. Dit had een grote impact. Ik hoop op verbetering."
    `

    // Roep de xAI API aan
    const response = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.XAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "grok-3",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 200,
      }),
    })

    if (!response.ok) {
      throw new Error("Fout bij API-aanroep")
    }

    const data = await response.json()
    const generatedReview = data.choices[0]?.message?.content || "Geen review gegenereerd"

    return NextResponse.json({ review: generatedReview })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "Fout bij het genereren van de review" },
      { status: 500 }
    )
  }
}