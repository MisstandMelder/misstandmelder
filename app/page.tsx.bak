import { ChatInterface } from "@/components/chat-interface"
import { ExampleReview } from "@/components/example-review"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, MessageSquare, Shield } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section with more modern gradient and layout */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-background via-background to-blue-50 dark:to-blue-950/30 overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="flex flex-col justify-center space-y-6">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-1"></span> Open-source platform
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                  Maak misstanden zichtbaar in Nederland
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  MisstandMelder helpt u bij het effectief melden van misstanden via Google Reviews, zodat uw stem
                  gehoord wordt.
                </p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Link href="/melden">
                  <Button className="px-8 h-12 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
                    Misstand melden <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#chat">
                  <Button variant="outline" className="px-8 h-12 rounded-full border-2">
                    AI-assistent raadplegen
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] aspect-square">
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
                <img
                  src="/hero-image.png"
                  alt="MisstandMelder illustratie"
                  className="rounded-2xl object-cover w-full h-full shadow-xl relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - New modern component */}
      <section className="w-full py-12 md:py-16 bg-background border-y border-border/40">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Meldingen gemaakt</div>
            </div>
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Tevredenheid</div>
            </div>
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">AI-ondersteuning</div>
            </div>
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Open-source</div>
            </div>
          </div>
        </div>
      </section>

      {/* Example Review Section - Updated with modern card design */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary">
              Effectieve reviews
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Maak impact met uw melding
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Een krachtige review is feitelijk, specifiek en beschrijft zowel de situatie als de impact ervan.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-5xl">
            <ExampleReview />
          </div>
        </div>
      </section>

      {/* Chat Interface Section - Updated with modern styling */}
      <section
        id="chat"
        className="w-full py-16 md:py-24 bg-gradient-to-br from-blue-50/50 via-background to-background dark:from-blue-950/20 dark:via-background dark:to-background"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary">
              AI-assistent
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Krijg direct hulp bij uw melding
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Onze AI-assistent helpt u bij het melden van misstanden. Beschrijf uw ervaring en krijg direct hulp.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl">
            <ChatInterface />
          </div>
        </div>
      </section>

      {/* Features Section - Updated with modern cards and icons */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary">
              Voordelen
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Waarom MisstandMelder?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Wij maken het eenvoudig om misstanden effectief te melden en zichtbaar te maken.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-background to-muted/30 p-6 shadow-md transition-all hover:shadow-lg border border-border/50 hover:border-primary/20">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Veilig & Anoniem</h3>
                <p className="text-muted-foreground">Deel uw ervaring zonder zorgen over persoonlijke gegevens.</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-background to-muted/30 p-6 shadow-md transition-all hover:shadow-lg border border-border/50 hover:border-primary/20">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">AI-ondersteund</h3>
                <p className="text-muted-foreground">Onze AI helpt u bij het formuleren van effectieve meldingen.</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-background to-muted/30 p-6 shadow-md transition-all hover:shadow-lg border border-border/50 hover:border-primary/20">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Impact maken</h3>
                <p className="text-muted-foreground">Uw stem draagt bij aan structurele verbeteringen in Nederland.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - New modern component */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Klaar om een misstand te melden?
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Maak gebruik van onze tools om uw stem te laten horen en bij te dragen aan een beter Nederland.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row mt-6">
              <Link href="/melden">
                <Button className="px-8 h-12 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
                  Misstand melden <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#chat">
                <Button variant="outline" className="px-8 h-12 rounded-full border-2">
                  AI-assistent raadplegen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
