import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const location = searchParams.get("location")
  const zoom = searchParams.get("zoom") || "14"
  const size = searchParams.get("size") || "600x300"

  if (!location) {
    return NextResponse.json({ error: "Location parameter is required" }, { status: 400 })
  }

  // Genereer de URL voor de statische kaart met de API key (veilig op de server)
  const staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(
    location,
  )}&zoom=${zoom}&size=${size}&maptype=roadmap&markers=color:red%7C${encodeURIComponent(
    location,
  )}&key=${process.env.GOOGLE_MAPS_API_KEY}`

  // Haal de afbeelding op van Google Maps API
  try {
    const response = await fetch(staticMapUrl)

    if (!response.ok) {
      throw new Error(`Failed to fetch static map: ${response.statusText}`)
    }

    // Lees de afbeeldingsdata
    const imageBuffer = await response.arrayBuffer()

    // Stuur de afbeelding terug naar de client
    return new NextResponse(imageBuffer, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=3600",
      },
    })
  } catch (error) {
    console.error("Error fetching static map:", error)
    return NextResponse.json({ error: "Failed to fetch static map" }, { status: 500 })
  }
}
