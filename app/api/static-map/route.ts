import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const location = searchParams.get("location");
  const zoom = searchParams.get("zoom") || "14";
  const size = searchParams.get("size") || "600x300";

  if (!location || typeof location !== "string" || location.trim() === "") {
    return NextResponse.json({ error: "Geldige locatieparameter vereist" }, { status: 400 });
  }

  const staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(
    location
  )}&zoom=${zoom}&size=${size}&maptype=roadmap&markers=color:red%7C${encodeURIComponent(
    location
  )}&key=${process.env.GOOGLE_MAPS_API_KEY}`;

  console.log("Statische kaart opvragen van:", staticMapUrl);

  try {
    const response = await fetch(staticMapUrl);

    if (!response.ok) {
      throw new Error(`Ophalen statische kaart mislukt: ${response.statusText}`);
    }

    const imageBuffer = await response.arrayBuffer();

    return new NextResponse(imageBuffer, {
      headers: {
        "Content-Type": "image/png", // Correcte MIME-type
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (error) {
    console.error("Fout bij ophalen statische kaart:", error.message, error.stack);
    console.warn("Terugsturen van fallback-afbeelding in plaats van kaart.");

    try {
      const fallbackUrl = `${
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      }/fallback-map.png`;
      const fallbackResponse = await fetch(fallbackUrl);

      if (!fallbackResponse.ok) {
        throw new Error(`Fallback-afbeelding niet gevonden: ${fallbackResponse.statusText}`);
      }

      const fallbackBuffer = await fallbackResponse.arrayBuffer();

      return new NextResponse(fallbackBuffer, {
        headers: {
          "Content-Type": "image/png", // Correcte MIME-type
          "Cache-Control": "public, max-age=3600",
        },
      });
    } catch (fallbackError) {
      console.error("Kon fallback-afbeelding niet laden:", fallbackError.message, fallbackError.stack);
      return NextResponse.json({ error: "Kan geen kaart of fallback tonen" }, { status: 500 });
    }
  }
}

