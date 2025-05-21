import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Shield, Users, Globe, GitBranch } from "lucide-react"

export default function OverOnsPage() {
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

      <main className="container py-12">
        {/* Banner afbeelding */}
        <div className="w-full max-w-5xl mx-auto mb-8 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/misstandmelder-banner.png"
            alt="Geef misstanden een stem"
            width={1500}
            height={500}
            className="w-full h-auto"
            priority
          />
        </div>

        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold mb-6 text-center">Over MisstandMelder</h1>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-center mb-8">
              MisstandMelder is een gratis, open-source platform om misstanden in Nederland aan te kaarten via Google
              Reviews.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Onze missie</h2>
            <p>
              MisstandMelder heeft als missie om transparantie te bevorderen en misstanden in Nederland zichtbaar te
              maken. Door gebruik te maken van de kracht van Google Reviews, creëren we een platform waar burgers hun
              ervaringen kunnen delen op een constructieve en objectieve manier.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Waarom Google Reviews?</h2>
            <p>
              Google Reviews is een krachtig platform dat door miljoenen mensen wordt gebruikt. Door misstanden hier te
              melden, worden ze zichtbaar voor iedereen die informatie zoekt over de betreffende instantie of
              organisatie. Dit creëert transparantie en stimuleert verbetering.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Objectiviteit</h3>
                <p className="text-muted-foreground">
                  We stimuleren objectieve en feitelijke meldingen, zonder emotionele taal of persoonlijke aanvallen.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Collectieve impact</h3>
                <p className="text-muted-foreground">
                  Door samen misstanden te melden, creëren we een collectieve stem die niet genegeerd kan worden.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Toegankelijkheid</h3>
                <p className="text-muted-foreground">
                  MisstandMelder is voor iedereen toegankelijk en gratis te gebruiken, zonder registratie.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <GitBranch className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Open Source</h3>
                <p className="text-muted-foreground">
                  MisstandMelder is volledig open source. Iedereen kan bijdragen aan de ontwikkeling van het platform.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-4">Wie zijn wij?</h2>
            <p>
              MisstandMelder is een initiatief van een groep bezorgde burgers die geloven in transparantie en
              verantwoording. We zijn geen commerciële organisatie en hebben geen winstoogmerk. Ons doel is simpelweg om
              bij te dragen aan een transparantere samenleving.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Open Source</h2>
            <p>
              MisstandMelder is volledig open source. De broncode is beschikbaar op GitHub en iedereen kan bijdragen aan
              de ontwikkeling van het platform. We geloven in transparantie en samenwerking, ook in de ontwikkeling van
              ons platform.
            </p>

            <div className="flex justify-center mt-12">
              <Button asChild className="rounded-full">
                <a
                  href="https://github.com/misstandmelder/misstand-melder"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2"
                >
                  <GitBranch className="h-4 w-4" />
                  Bekijk op GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t bg-muted/40 mt-12">
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
