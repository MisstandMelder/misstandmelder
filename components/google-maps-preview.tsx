"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, ExternalLink } from "lucide-react"

interface GoogleMapsPreviewProps {
  location: string
}

export function GoogleMapsPreview({ location }: GoogleMapsPreviewProps) {
  const [mapError, setMapError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [googleMapsUrl, setGoogleMapsUrl] = useState<string | null>(null)

  // Haal de Google Maps URL op van de server
  useEffect(() => {
    async function fetchGoogleMapsUrl() {
      try {
        const response = await fetch(`/api/google-maps-url?location=${encodeURIComponent(location)}`)
        if (!response.ok) {
          throw new Error("Failed to fetch Google Maps URL")
        }
        const data = await response.json()
        setGoogleMapsUrl(data.url)
      } catch (error) {
        console.error("Error fetching Google Maps URL:", error)
      }
    }

    fetchGoogleMapsUrl()
  }, [location])

  return (
    <Card className="bg-card shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold flex items-center gap-2">
          <MapPin className="h-5 w-5 text-primary" />
          Locatie op Google Maps
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="relative h-[300px] rounded-md overflow-hidden bg-muted">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted/80 z-10">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
                  <p>Kaart laden...</p>
                </div>
              </div>
            )}

            <img
              src={`/api/static-map?location=${encodeURIComponent(location)}&size=600x300&zoom=14`}
              alt={`Kaart van ${location}`}
              className="w-full h-full object-cover"
              onLoad={() => setIsLoading(false)}
              onError={() => {
                setMapError("Kon de kaart niet laden")
                setIsLoading(false)
              }}
            />

            {mapError && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted/90">
                <div className="text-center p-4">
                  <p className="text-destructive mb-2">{mapError}</p>
                  <p className="text-sm text-muted-foreground">
                    U kunt nog steeds de locatie bekijken op Google Maps via de onderstaande link.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-3">
            {googleMapsUrl && (
              <Button
                asChild
                className="flex gap-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Plaats op Google Maps
                </a>
              </Button>
            )}
            <p className="text-sm text-muted-foreground">
              Klik op de knop hierboven om naar Google Maps te gaan en uw review te plaatsen.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
