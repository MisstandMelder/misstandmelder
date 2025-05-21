"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MeldingFormulier } from "@/components/melding-formulier"
import { ChatInterface } from "@/components/chat-interface"
import { GoogleMapsPreview } from "@/components/google-maps-preview"
import { Star, Copy } from "lucide-react"

type MeldingData = {
  location: string
  date: string
  description: string
  rating: number
  review: string
}

export function MeldingInterface() {
  const [activeTab, setActiveTab] = useState("formulier")
  const [meldingData, setMeldingData] = useState<MeldingData | null>(null)
  const [copySuccess, setCopySuccess] = useState(false)

  const handleMeldingGenerated = (data: MeldingData) => {
    setMeldingData(data)
    setActiveTab("resultaat")
  }

  const handleCopyToClipboard = () => {
    if (!meldingData) return

    navigator.clipboard.writeText(meldingData.review)
    setCopySuccess(true)
    setTimeout(() => setCopySuccess(false), 2000)
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="formulier" className="text-base py-3">
            Formulier
          </TabsTrigger>
          <TabsTrigger value="chat" className="text-base py-3">
            Chat Assistent
          </TabsTrigger>
          <TabsTrigger value="resultaat" className="text-base py-3" disabled={!meldingData}>
            Resultaat
          </TabsTrigger>
        </TabsList>

        <TabsContent value="formulier" className="mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <MeldingFormulier onMeldingGenerated={handleMeldingGenerated} />
            </div>
            <div className="lg:col-span-1">
              <Card className="bg-card shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Tips voor een effectieve melding</h3>
                  <ul className="space-y-3 list-disc pl-5 text-muted-foreground">
                    <li>Wees specifiek over wat er is gebeurd</li>
                    <li>Vermeld datum, tijd en exacte locatie</li>
                    <li>Beschrijf objectief zonder emotionele taal</li>
                    <li>Leg uit welke impact het had</li>
                    <li>Vermijd persoonlijke aanvallen</li>
                    <li>Suggereer constructieve verbeteringen</li>
                    <li>
                      <span className="font-medium">Sterrenbeoordeling:</span> Kies een passend aantal sterren (1-5)
                      voor de ernst van de misstand
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="chat" className="mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <ChatInterface />
            </div>
            <div className="lg:col-span-1">
              <Card className="bg-card shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Chat Assistent Hulp</h3>
                  <p className="mb-4 text-muted-foreground">
                    Onze AI-assistent helpt u bij het formuleren van een effectieve melding. U kunt vragen stellen over:
                  </p>
                  <ul className="space-y-3 list-disc pl-5 text-muted-foreground">
                    <li>Hoe u een specifieke situatie het beste kunt beschrijven</li>
                    <li>Welke details belangrijk zijn om te vermelden</li>
                    <li>Hoe u objectief kunt blijven in uw melding</li>
                    <li>Hoe u een Google Review plaatst</li>
                    <li>Wat de impact van uw melding kan zijn</li>
                    <li>Welke sterrenbeoordeling past bij uw situatie</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="resultaat" className="mt-0">
          {meldingData && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <Card className="mb-6 bg-card shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Gegenereerde Review</h3>
                    <div className="flex items-center mb-4">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="h-5 w-5"
                            fill={star <= meldingData.rating ? "#FFD700" : "none"}
                            stroke={star <= meldingData.rating ? "#FFD700" : "currentColor"}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-muted-foreground">{meldingData.date}</span>
                    </div>
                    <div className="p-4 border rounded-md bg-muted mb-4">
                      <p className="whitespace-pre-wrap">{meldingData.review}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button variant="outline" onClick={handleCopyToClipboard} className="flex gap-2">
                        <Copy className="h-4 w-4" />
                        {copySuccess ? "Gekopieerd!" : "Kopieer naar klembord"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div>
                <GoogleMapsPreview location={meldingData.location} />
              </div>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
