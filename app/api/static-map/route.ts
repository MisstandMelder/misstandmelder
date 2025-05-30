import { type NextRequest, NextResponse } from "next/server"
import { readFile } from "fs/promises"
import path from "path"

export async function GET(request: NextRequest) {
  try {
    // Pad naar de fallback-afbeelding in de public-map
    const filePath = path.join(process.cwd(), "public", "fallback-map.png")
    const fallbackBuffer = await readFile(filePath)

    return new NextResponse(fallbackBuffer, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=3600",
      },
    })
  } catch (error) {
    console.error("Fallback image kon niet geladen worden:", error)
    return NextResponse.json({ error: "Kan geen fallback tonen" }, { status: 500 })
  }
}

