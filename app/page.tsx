import { Button } from "@/components/ui/button"
import {
  ChevronDown,
  ExternalLink,
  Star,
  MapPin,
  Shield,
  CheckCircle,
  FileText,
  Heart,
  MessageSquare,
} from "lucide-react"
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

        {/* Nieuwe sectie over effectieve reviews */}
        <section className="py-16 bg-muted/30 rounded-xl p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Wat maakt een review effectief?</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Een krachtige review die impact maakt volgt deze vier principes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Feitelijk</h3>
                  <p className="text-muted-foreground">
                    Beschrijf specifieke situaties en ervaringen zonder overdrijving. Gebruik objectieve taal en vermijd
                    emotionele uitspraken die de geloofwaardigheid kunnen ondermijnen.
                  </p>
                  <div className="mt-3 p-3 bg-muted rounded-md">
                    <p className="text-sm italic">
                      "De arts heeft mijn dossier niet gelezen voordat hij mij zag, wat bleek uit zijn vragen die al in
                      mijn dossier beantwoord waren."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Specifiek</h3>
                  <p className="text-muted-foreground">
                    Noem concrete voorbeelden die je ervaring illustreren. Details zoals data, tijden, namen (indien
                    gepast) en exacte gebeurtenissen maken je review overtuigender.
                  </p>
                  <div className="mt-3 p-3 bg-muted rounded-md">
                    <p className="text-sm italic">
                      "Mijn wond werd niet onderzocht tijdens het consult en ik kon alleen contact krijgen via het
                      callcenter, waar ik 45 minuten moest wachten."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Impact</h3>
                  <p className="text-muted-foreground">
                    Leg uit wat de emotionele en praktische gevolgen waren. Beschrijf hoe de situatie jou of anderen
                    heeft beïnvloed om de ernst van de misstand te benadrukken.
                  </p>
                  <div className="mt-3 p-3 bg-muted rounded-md">
                    <p className="text-sm italic">
                      "Door het gebrek aan communicatie voelde ik me genegeerd en angstig, wat leidde tot extra stress
                      tijdens een toch al moeilijke periode."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Constructief</h3>
                  <p className="text-muted-foreground">
                    Eindig met hoop op verbetering of suggesties. Een constructieve toon maakt je review serieuzer en
                    toont dat je doel verbetering is, niet alleen kritiek.
                  </p>
                  <div className="mt-3 p-3 bg-muted rounded-md">
                    <p className="text-sm italic">
                      "Ik hoop dat deze feedback kan bijdragen aan betere communicatieprocessen, zodat toekomstige
                      patiënten een betere ervaring hebben."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
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

        {/* Statistieken sectie */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">MisstandMelder in cijfers</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Onze impact en bereik blijft groeien dankzij mensen zoals jij
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-card rounded-lg p-6 text-center shadow-sm border border-border/50">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground font-medium">Meldingen gemaakt</p>
            </div>

            <div className="bg-card rounded-lg p-6 text-center shadow-sm border border-border/50">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground font-medium">Tevredenheid</p>
            </div>

            <div className="bg-card rounded-lg p-6 text-center shadow-sm border border-border/50">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground font-medium">AI-ondersteuning</p>
            </div>

            <div className="bg-card rounded-lg p-6 text-center shadow-sm border border-border/50">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground font-medium">Open-source</p>
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
            {/* Melding 1: Jan Jansen */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm border">
              <div className="p-4 border-b">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-semibold text-primary">J</span>
                    </div>
                    <span className="font-medium">Jan Jansen</span>
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
                <h3 className="font-bold mb-2">
                  Zorgverlening ZMC: Zorgen over toegankelijkheid en patiëntgerichtheid
                </h3>
                <p className="text-sm text-muted-foreground mb-4 italic">
                  "Mijn ervaring met het Zaans Medisch Centrum tijdens en na de behandeling van mijn vrouw was
                  teleurstellend en pijnlijk. Hoewel er zeker toegewijde zorgverleners zijn – met name de
                  verpleegkundigen – heb ik ook serieuze tekortkomingen ervaren in de manier waarop met patiënten en hun
                  naasten wordt omgegaan. Deze tekortkomingen hadden een grote impact."
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">12 mei 2023</span>
                  <Button variant="ghost" size="sm" className="h-8 gap-1">
                    <MapPin className="h-3 w-3" />
                    <span className="text-xs">Google Maps</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Melding 2: Anonieme melder */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm border">
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
                        fill={star <= 1 ? "#FFD700" : "none"}
                        stroke={star <= 1 ? "#FFD700" : "currentColor"}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2">
                  Schending van Privacy en Gebrek aan Transparantie door Stichting Inlichtingenbureau
                </h3>
                <p className="text-sm text-muted-foreground mb-4 italic">
                  "Tijdens mijn onderzoek naar de werkwijze van het Inlichtingenbureau ontdekte ik een verontrustend
                  geval waarbij een "signaal" van dit bureau leidde tot een torenhoge vordering bij een vrouw die haar
                  moeder regelmatig boodschappen liet doen. Het ontbreken van transparantie in de werkwijze van de
                  stichting is zorgwekkend. Hoe ver gaat men in het verzamelen van persoonlijke gegevens en wat gebeurt
                  er daarna met die data?"
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">3 juni 2023</span>
                  <Button variant="ghost" size="sm" className="h-8 gap-1">
                    <MapPin className="h-3 w-3" />
                    <span className="text-xs">Google Maps</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Melding 3: Evert Lenos */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm border">
              <div className="p-4 border-b">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-semibold text-primary">E</span>
                    </div>
                    <span className="font-medium">Evert Lenos</span>
                  </div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-4 w-4"
                        fill={star <= 1 ? "#FFD700" : "none"}
                        stroke={star <= 1 ? "#FFD700" : "currentColor"}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2">
                  Hoe de FIOD van de Belastingdienst en het OM Amsterdam hun grenzen overschreden
                </h3>
                <p className="text-sm text-muted-foreground mb-4 italic">
                  "Een ander diep zorgwekkend aspect was de vervalsing van een proces-verbaal door rechercheur Daan
                  Mijnsbergen van de FIOD. Deze ambtenaar, die wist dat mijn vrouw ernstig ziek was, manipuleerde het
                  verslag van een telefoongesprek om de zaak tegen mij te versterken. Dit is geen kwestie van een
                  menselijke fout; het toont aan hoe manipulatie binnen dit systeem wordt getolereerd – zo niet
                  aangemoedigd."
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">27 mei 2023</span>
                  <Button variant="ghost" size="sm" className="h-8 gap-1">
                    <MapPin className="h-3 w-3" />
                    <span className="text-xs">Google Maps</span>
                  </Button>
                </div>
              </div>
            </div>
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
