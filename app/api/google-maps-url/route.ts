import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const location = searchParams.get("location")

  if (!location) {
    return NextResponse.json({ error: "Location parameter is required" }, { status: 400 })
  }

  // Genereer de Google Maps URL zonder de API key bloot te stellen
  const googleMapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(location)}`

  return NextResponse.json({ url: googleMapsUrl })
}
