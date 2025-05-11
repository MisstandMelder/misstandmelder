"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Clipboard, Check, Loader2, Building, Calendar, FileText, Star } from "lucide-react"

export function ReportingGuide() {
  const [location, setLocation] = useState("")
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const [rating, setRating] = useState(1) // Nieuw: sterrenbeoordeling
  const [generatedReport, setGeneratedReport] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [copied, setCopied] = useState(false)
  const [chatMessages, setChatMessages] = useState<{ role: string; content: string }[]>([]) // Nieuw: chatgeschiedenis
  const [chatInput, setChatInput] = useState("") // Nieuw: chat invoer
  const [isChatting, setIsChatting] = useState(false)
  const [googleMapsLink, setGoogleMapsLink] = useState("") // Nieuw: Google Maps link

  // AI-assistent chatfunctionaliteit
  const handleChat = async () => {
    if (!chatInput.trim()) return

    const newMessages = [
      ...chatMessages,
      { role: "user", content: chatInput },
    ]
    setChatMessages(newMessages)
    setChatInput("")
    setIsChatting(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      })

      if (!response.ok) {
        throw new Error(`Chat API error: ${response.status}`)
      }

      const data = await response.json()
      setChatMessages([...newMessages, { role: "assistant", content: data.response }])

      // Suggesties voor formulierinvulling
      const assistantResponse = data.response.toLowerCase()
      if (assistantResponse.includes("locatie") && !location) {
        setLocation(assistantResponse.match(/locatie:?\s*([^\n]+)/)?.[1] || "")
      }
      if (assistantResponse.includes("datum") && !date) {
        setLocation(assistantResponse.match(/datum:?\s*([^\n]+)/)?.[1] || "")
      }
      if (assistantResponse.includes("beschrijving") && !description) {
        setDescription(assistantResponse.match(/beschrijving:?\s*([^\n]+)/)?.[1] || "")
      }
    } catch (error) {
      console.error("Error in chat:", error)
      setChatMessages([...newMessages, { role: "assistant", content: "Sorry, er ging iets mis. Probeer opnieuw." }])
    } finally {
      setIsChatting(false)
    }
  }

  // Genereer de review
  const handleGenerateReport = async () => {
    if (!location || !date || !description) {
      console.log("Missing input: ", { location, date, description })
      return
    }

    setIsGenerating(true)
    console.log("Generating report with inputs: ", { location, date, description, rating })

    try {
      const prompt = `Genereer een objectieve Google Review voor de volgende situatie:
      
      Locatie: ${location}
      Datum: ${date}
      Beschrijving: ${description}
      Beoordeling: ${rating} ster${rating > 1 ? "ren" : ""}
      
      Maak een duidelijke, feitelijke en respectvolle review die de situatie goed beschrijft en die nuttig is voor anderen.`

      console.log("Sending prompt to /api/grok: ", prompt)

      const response = await fetch('/api/grok', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: prompt,
          messages: [
            {
              role: 'system',
              content: 'Je bent een assistent die helpt bij het opstellen van effectieve meldingen van misstanden voor het MisstandMelder platform. Genereer een objectieve Google Review op basis van de gegeven informatie. De review moet feitelijk, duidelijk en respectvol zijn.',
            },
          ],
        }),
      })

      console.log("API response status: ", response.status)
      if (!response.ok) {
        const errorText = await response.text()
        console.error("API error response: ", errorText)
        throw new Error(`API error: ${response.status} ${errorText}`)
      }

      const data = await response.json()
      console.log("API response data: ", data)
      if (data.error) {
        console.error("API error details: ", data.details)
        throw new Error(data.details)
      }

      if (!data.text) {
        console.error("No text in API response: ", data)
        throw new Error("No text received from API")
      }

      console.log("Setting generated report: ", data.text)
      setGeneratedReport(data.text)

      // Genereer Google Maps link
      const mapsResponse = await fetch(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(location)}&inputtype=textquery&fields=place_id&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`)
      const mapsData = await mapsResponse.json()
      if (mapsData.candidates && mapsData.candidates[0]?.place_id) {
        setGoogleMapsLink(`https://www.google.com/maps/place/?q=place_id:${mapsData.candidates[0].place_id}`)
      } else {
        console.error("No place found for location:", location)
        setGoogleMapsLink(`https://www.google.com/maps/search/${encodeURIComponent(location)}`)
      }
    } catch (error) {
      console.error("Error generating report: ", error.message)
      setGeneratedReport("Er is een fout opgetreden bij het genereren van de melding. Probeer het later opnieuw.")
    } finally {
      setIsGenerating(false)
    }
  }

  // Kopieer naar klembord
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(generatedReport)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
      .catch((err) => console.error("Kon niet kopiëren:", err))
  }

  return (
    <Card className="w-full overflow-hidden rounded-2xl shadow-xl border-0 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-900/80">
      <CardHeader className="space-y-1 bg-gradient-to-r from-primary/10 to-transparent px-6 py-6 border-b">
        <CardTitle className="text-2xl font-bold">Misstand Melden</CardTitle>
        <CardDescription className="text-base">
          Gebruik de assistent of vul de details in om een effectieve melding te genereren
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <Tabs defaultValue="form" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 rounded-full p-1 bg-muted/50">
            <TabsTrigger
              value="chat"
              className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Chat met Assistent
            </TabsTrigger>
            <TabsTrigger
              value="form"
              className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Formulier
            </TabsTrigger>
            <TabsTrigger
              value="result"
              className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Resultaat
            </TabsTrigger>
          </TabsList>
          <TabsContent value="chat" className="space-y-4">
            <div className="h-[300px] p-4 rounded-lg border-2 bg-white dark:bg-gray-800 overflow-y-auto">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`mb-2 ${msg.role === "user" ? "text-right" : "text-left"}`}>
                  <span className={`inline-block p-2 rounded-lg ${msg.role === "user" ? "bg-primary text-white" : "bg-muted"}`}>
                    {msg.content}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Vraag de assistent om hulp..."
                onKeyPress={(e) => e.key === "Enter" && handleChat()}
                className="h-12 rounded-lg border-2"
              />
              <Button
                onClick={handleChat}
                disabled={isChatting || !chatInput.trim()}
                className="h-12 rounded-lg"
              >
                {isChatting ? <Loader2 className="h-5 w-5 animate-spin" /> : "Verstuur"}
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="form" className="space-y-8">
            <div className="space-y-3">
              <Label htmlFor="location" className="text-base flex items-center gap-2">
                <Building className="h-4 w-4 text-primary" /> Locatie
              </Label>
              <div className="relative">
                <Input
                  id="location"
                  placeholder="Bijv. Gemeente Amsterdam, Zaans Medisch Centrum"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="h-12 pl-4 rounded-lg border-2 focus-visible:ring-primary"
                />
              </div>
            </div>
            <div className="space-y-3">
              <Label htmlFor="date" className="text-base flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" /> Datum
              </Label>
              <div className="relative">
                <Input
                  id="date"
                  placeholder="Bijv. 15 mei 2023"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="h-12 pl-4 rounded-lg border-2 focus-visible:ring-primary"
                />
              </div>
            </div>
            <div className="space-y-3">
              <Label htmlFor="description" className="text-base flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary" /> Beschrijving van de situatie
              </Label>
              <Textarea
                id="description"
                placeholder="Beschrijf wat er is gebeurd, wie erbij betrokken was, en hoe het u heeft beïnvloed..."
                className="min-h-[200px] resize-none rounded-lg border-2 focus-visible:ring-primary"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="space-y-3">
              <Label className="text-base flex items-center gap-2">
                <Star className="h-4 w-4 text-primary" /> Beoordeling
              </Label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Button
                    key={star}
                    variant={rating >= star ? "default" : "outline"}
                    size="icon"
                    onClick={() => setRating(star)}
                    className="h-10 w-10 rounded-full"
                  >
                    <Star className="h-5 w-5" fill={rating >= star ? "currentColor" : "none"} />
                  </Button>
                ))}
              </div>
            </div>
            <Button
              onClick={handleGenerateReport}
              disabled={isGenerating || !location || !date || !description}
              className="w-full h-12 text-base rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Genereren...
                </>
              ) : (
                "Genereer Melding"
              )}
            </Button>
          </TabsContent>
          <TabsContent value="result">
            {generatedReport ? (
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border-2 border-primary/10 shadow-inner">
                  <div className="flex gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-5 w-5"
                        fill={rating >= star ? "yellow" : "none"}
                        stroke={rating >= star ? "yellow" : "currentColor"}
                      />
                    ))}
                  </div>
                  <Textarea
                    value={generatedReport}
                    onChange={(e) => setGeneratedReport(e.target.value)}
                    className="w-full min-h-[200px] resize-none rounded-lg border-2"
                  />
                </div>
                <div className="flex justify-between gap-2">
                  <Button
                    onClick={copyToClipboard}
                    variant="outline"
                    className="flex gap-2 rounded-full border-2 hover:bg-primary/10 hover:text-primary"
                  >
                    {copied ? (
                      <>
                        <Check className="h-5 w-5" /> Gekopieerd
                      </>
                    ) : (
                      <>
                        <Clipboard className="h-5 w-5" /> Kopieer naar klembord
                      </>
                    )}
                  </Button>
                  {googleMapsLink && (
                    <Button
                      asChild
                      className="flex gap-2 rounded-full bg-primary text-white hover:bg-primary/90"
                    >
                      <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
                        Plaats op Google Maps
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="rounded-full bg-primary/10 p-6 mb-6">
                  <Clipboard className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Nog geen melding gegenereerd</h3>
                <p className="text-muted-foreground max-w-md">
                  Vul het formulier in of gebruik de assistent om een melding te genereren.
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="border-t px-6 py-4 bg-muted/30">
        <p className="text-sm text-muted-foreground">
          Deze tool helpt u bij het opstellen van een objectieve melding. Controleer altijd de gegenereerde tekst
          voordat u deze gebruikt.
        </p>
      </CardFooter>
    </Card>
  )
}