import { Button } from "@/components/ui/button"
import { ChevronDown, ExternalLink, Star, MapPin, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <header className="container flex items-center justify-between py-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/misstandmelder-logo-new.png"
            alt="MisstandMelder Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="font-bold text-xl">MisstandMelder</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/melden" className="text-sm font-medium hover:underline">
            Melden
          </Link>
          <Link href="/over-ons" className="text-sm font-medium hover:underline">
            Over Ons
          </Link>
          <Link href="/veelgestelde-vragen" className="text-sm font-medium hover:underline">
            FAQ
          </Link>
          <Button variant="outline" size="sm">
            NL
          </Button>
          <Button size="sm">Inloggen</Button>
        </div>
      </header>

      <main className="container pb-16">
        {/* Banner afbeelding */}
        <div className="w-full max-w-5xl mx-auto mb-8 mt-4 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/misstandmelder-banner.png"
            alt="Geef misstanden een stem"
            width={1500}
            height={500}
            className="w-full h-auto"
            priority
          />
        </div>

        <section className="mx-auto max-w-4xl py-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Maak misstanden zichtbaar in Nederland
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            MisstandMelder is een gratis platform om misstanden in Nederland aan te kaarten via krachtige Google
            Reviews. Samen maken we Nederland transparanter.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/melden">Begin direct met melden</Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full">
              Meer informatie
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Hoe het werkt</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              In drie eenvoudige stappen maak je misstanden zichtbaar en help je anderen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Identificeer de locatie</h3>
              <p className="text-muted-foreground">
                Zoek de exacte locatie op Google Maps waar de misstand heeft plaatsgevonden.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">2. Schrijf een objectieve review</h3>
              <p className="text-muted-foreground">
                Gebruik onze AI-assistent om een feitelijke en constructieve Google Review te schrijven.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">3. Plaats de review op Google</h3>
              <p className="text-muted-foreground">
                Plaats je review direct op Google Maps om de misstand zichtbaar te maken voor iedereen.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30 rounded-xl p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Waarom MisstandMelder?</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              MisstandMelder biedt een unieke manier om misstanden aan te kaarten en verandering te stimuleren
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Transparantie bevorderen</h3>
                <p className="text-muted-foreground">
                  Door misstanden zichtbaar te maken op Google Maps, creëren we transparantie en stimuleren we
                  verbetering.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Objectieve meldingen</h3>
                <p className="text-muted-foreground">
                  Onze AI-assistent helpt je bij het opstellen van feitelijke en constructieve reviews zonder emotionele
                  taal.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Collectieve impact</h3>
                <p className="text-muted-foreground">
                  Samen maken we misstanden zichtbaar en creëren we een collectieve stem die niet genegeerd kan worden.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Gratis en toegankelijk</h3>
                <p className="text-muted-foreground">
                  MisstandMelder is volledig gratis te gebruiken en maakt het voor iedereen mogelijk om misstanden aan
                  te kaarten.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Recente meldingen</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Bekijk recente meldingen die via MisstandMelder zijn geplaatst
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card rounded-lg overflow-hidden shadow-sm border">
                <div className="p-4 border-b">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-semibold text-primary">A</span>
                      </div>
                      <span className="font-medium">Anonieme melder</span>
                    </div>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="h-4 w-4"
                          fill={star <= 2 ? "#FFD700" : "none"}
                          stroke={star <= 2 ? "#FFD700" : "currentColor"}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Gemeente Amsterdam - Vergunningsafdeling</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Na 6 maanden wachten op een eenvoudige vergunning en talloze onbeantwoorde e-mails, werd mijn
                    aanvraag zonder uitleg afgewezen. Telefonisch was niemand bereikbaar.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">15 mei 2023</span>
                    <Button variant="ghost" size="sm" className="h-8 gap-1">
                      <MapPin className="h-3 w-3" />
                      <span className="text-xs">Google Maps</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline">Bekijk meer meldingen</Button>
          </div>
        </section>

        <section className="mx-auto max-w-3xl rounded-xl border bg-card p-8 shadow-lg my-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">Begin direct met melden</h2>
            <p className="mt-2 text-muted-foreground">
              Maak gebruik van onze AI-assistent om een effectieve melding te maken
            </p>
          </div>

          <div className="flex justify-center">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/melden">Naar het meldformulier</Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted/40">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Image
              src="/misstandmelder-logo-new.png"
              alt="MisstandMelder Logo"
              width={24}
              height={24}
              className="h-6 w-auto"
            />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} MisstandMelder. Open-source platform.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/misstandmelder/misstand-melder"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
            >
              GitHub
            </a>
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
            >
              Privacy
            </Link>
            <Link
              href="/contact"
              className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
