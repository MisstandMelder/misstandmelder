"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Clipboard, Check, Loader2, Building, Calendar, FileText } from "lucide-react"

export function ReportingGuide() {
  const [location, setLocation] = useState("")
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const [generatedReport, setGeneratedReport] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleGenerateReport = async () => {
    if (!location || !date || !description) return

    setIsGenerating(true)
    try {
      const prompt = `Genereer een objectieve Google Review voor de volgende situatie:
      
      Locatie: ${location}
      Datum: ${date}
      Beschrijving: ${description}
      
      Maak een duidelijke, feitelijke en respectvolle review die de situatie goed beschrijft en die nuttig is voor anderen.`

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

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
      }

      const data = await response.json()
      if (data.error) {
        throw new Error(data.details)
      }

      setGeneratedReport(data.text)
    } catch (error) {
      console.error("Error generating report:", error)
      setGeneratedReport("Er is een fout opgetreden bij het genereren van de melding. Probeer het later opnieuw.")
    } finally {
      setIsGenerating(false)
    }
  }

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
          Vul de details in om een effectieve melding te genereren
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <Tabs defaultValue="form" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 rounded-full p-1 bg-muted/50">
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
                  <p className="whitespace-pre-wrap text-base leading-relaxed">{generatedReport}</p>
                </div>
                <div className="flex justify-end">
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
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="rounded-full bg-primary/10 p-6 mb-6">
                  <Clipboard className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Nog geen melding gegenereerd</h3>
                <p className="text-muted-foreground max-w-md">
                  Vul het formulier in en genereer een melding om het resultaat hier te zien.
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