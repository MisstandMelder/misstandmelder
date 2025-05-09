"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send, User, Bot, Loader2, AlertTriangle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

type Message = {
  role: "user" | "assistant"
  content: string
}

// Predefined responses for the mock chat
const mockResponses: Record<string, string> = {
  default: "Welkom bij MisstandMelder. Hoe kan ik u helpen bij het melden van een misstand?",
  greeting:
    "Hallo! Ik ben de MisstandMelder assistent. Ik kan u helpen bij het melden van een misstand. Kunt u me vertellen waar het incident plaatsvond?",
  location: "Dank u voor deze informatie. Wanneer vond het incident ongeveer plaats?",
  date: "Bedankt. Kunt u beschrijven wat er precies gebeurd is en wie erbij betrokken was?",
  description:
    'Dank u voor het delen van uw ervaring. Op basis van uw informatie zou ik de volgende melding voorstellen:\n\n"Op [datum] bij [locatie] heb ik het volgende meegemaakt: [beschrijving]. Dit had [impact] als gevolg. Ik hoop dat deze feedback kan bijdragen aan verbetering."\n\nU kunt deze tekst gebruiken als basis voor uw Google Review. Wilt u dat ik u help met het verder verfijnen van deze melding?',
  thanks:
    "Graag gedaan! Als u nog andere vragen heeft of hulp nodig heeft bij het melden van een misstand, laat het me weten. Uw feedback kan bijdragen aan structurele verbeteringen in Nederland.",
  help: "Om een misstand te melden via Google Reviews, volgt u deze stappen:\n\n1. Open Google Maps\n2. Zoek naar de organisatie of instelling\n3. Klik op 'Review schrijven'\n4. Schrijf uw review en geef een passende beoordeling\n5. Klik op 'Plaatsen'\n\nZorg ervoor dat uw review feitelijk, specifiek en respectvol is. Beschrijf wat er gebeurd is, wanneer het plaatsvond, en wat de impact was.",
}

export function MockChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: mockResponses.default,
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = input
    setInput("")
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])
    setIsLoading(true)

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Simple keyword matching for demo purposes
    let responseContent = mockResponses.default
    const lowerCaseMessage = userMessage.toLowerCase()

    if (lowerCaseMessage.includes("hallo") || lowerCaseMessage.includes("hoi") || lowerCaseMessage.includes("dag")) {
      responseContent = mockResponses.greeting
    } else if (
      lowerCaseMessage.includes("gemeente") ||
      lowerCaseMessage.includes("ziekenhuis") ||
      lowerCaseMessage.includes("bedrijf") ||
      lowerCaseMessage.includes("locatie")
    ) {
      responseContent = mockResponses.location
    } else if (
      lowerCaseMessage.includes("gisteren") ||
      lowerCaseMessage.includes("vandaag") ||
      lowerCaseMessage.includes("datum") ||
      lowerCaseMessage.includes("dag")
    ) {
      responseContent = mockResponses.date
    } else if (lowerCaseMessage.length > 50) {
      responseContent = mockResponses.description
    } else if (lowerCaseMessage.includes("bedankt") || lowerCaseMessage.includes("dank")) {
      responseContent = mockResponses.thanks
    } else if (
      lowerCaseMessage.includes("hoe") ||
      lowerCaseMessage.includes("help") ||
      lowerCaseMessage.includes("hulp")
    ) {
      responseContent = mockResponses.help
    }

    setIsLoading(false)
    setMessages((prev) => [...prev, { role: "assistant", content: responseContent }])
  }

  return (
    <>
      <Alert className="mb-6 bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800">
        <AlertTriangle className="h-4 w-4 text-yellow-600 dark:text-yellow-500" />
        <AlertTitle className="text-yellow-800 dark:text-yellow-500">Demo Modus</AlertTitle>
        <AlertDescription className="text-yellow-700 dark:text-yellow-400">
          De AI-assistent draait momenteel in demo-modus met vooraf ingestelde antwoorden. Voor volledige
          functionaliteit is een API-sleutel vereist.
        </AlertDescription>
      </Alert>

      <Card className="w-full overflow-hidden rounded-2xl shadow-xl border-0 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-900/80">
        <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent border-b px-6 py-4 flex flex-row items-center gap-4">
          <Avatar className="h-10 w-10 border-2 border-background">
            <AvatarImage src="/misstandmelder-logo.png" alt="MisstandMelder" />
            <AvatarFallback>
              <Bot className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-bold text-lg">
              MisstandMelder AI{" "}
              <span className="text-xs font-normal text-yellow-600 dark:text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30 px-2 py-0.5 rounded-full">
                Demo
              </span>
            </h3>
            <p className="text-sm text-muted-foreground">Uw persoonlijke assistent</p>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="flex flex-col h-[500px]">
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className="flex items-start max-w-[80%] group">
                    {message.role === "assistant" && (
                      <Avatar className="h-8 w-8 mr-3 mt-1">
                        <AvatarImage src="/misstandmelder-logo.png" alt="MisstandMelder" />
                        <AvatarFallback className="bg-primary/10">
                          <Bot className="h-4 w-4 text-primary" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={`px-4 py-3 rounded-2xl ${
                        message.role === "user"
                          ? "bg-gradient-to-r from-primary to-blue-600 text-white ml-auto"
                          : "bg-muted/80 border"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                    {message.role === "user" && (
                      <Avatar className="h-8 w-8 ml-3 mt-1">
                        <AvatarFallback className="bg-primary/10">
                          <User className="h-4 w-4 text-primary" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-start max-w-[80%]">
                    <Avatar className="h-8 w-8 mr-3 mt-1">
                      <AvatarImage src="/misstandmelder-logo.png" alt="MisstandMelder" />
                      <AvatarFallback className="bg-primary/10">
                        <Bot className="h-4 w-4 text-primary" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="px-4 py-3 rounded-2xl bg-muted/80 border">
                      <div className="flex space-x-2 items-center h-5">
                        <Loader2 className="h-4 w-4 animate-spin text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <div className="border-t p-4">
              <form onSubmit={handleSubmit} className="flex space-x-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Typ uw bericht..."
                  className="flex-1 rounded-full border-2 focus-visible:ring-primary"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  size="icon"
                  className="rounded-full h-10 w-10 bg-primary hover:bg-primary/90"
                  disabled={isLoading || !input.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
