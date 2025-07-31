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
  ArrowRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      <SiteHeader />

      <main className="flex-1 container pb-16">
        {/* Hero Section with Banner */}
        <section className="relative py-12 md:py-20">
          <div className="w-full max-w-5xl mx-auto mb-8 mt-4 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/misstandmelder-banner.webp"
              alt="Geef misstanden een stem"
              width={1500}
              height={500}
              className="w-full h-auto"
              priority
            />
          </div>

          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-fade-up animate-once animate-duration-[800ms] animate-delay-100">
              Maak misstanden zichtbaar in Nederland
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up animate-once animate-duration-[800ms] animate-delay-200">
              MisstandMelder is een gratis platform om misstanden in Nederland aan te kaarten via krachtige Google
              Reviews. Samen maken we Nederland transparanter.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 animate-fade-up animate-once animate-duration-[800ms] animate-delay-300">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/melden">Begin direct met melden</Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full group">
                Meer informatie
                <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:rotate-180" />
              </Button>
            </div>
          </div>
        </section>

        {/* Statistieken sectie - Verplaatst naar boven voor meer impact */}
        <section className="py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="bg-card rounded-lg p-6 text-center shadow-sm border border-border/50 hover:border-primary/50 hover:shadow-md transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground font-medium">Meldingen gemaakt</p>
            </div>

            <div className="bg-card rounded-lg p-6 text-center shadow-sm border border-border/50 hover:border-primary/50 hover:shadow-md transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground font-medium">Tevredenheid</p>
            </div>

            <div className="bg-card rounded-lg p-6 text-center shadow-sm border border-border/50 hover:border-primary/50 hover:shadow-md transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground font-medium">AI-ondersteuning</p>
            </div>

            <div className="bg-card rounded-lg p-6 text-center shadow-sm border border-border/50 hover:border-primary/50 hover:shadow-md transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground font-medium">Open-source</p>
            </div>
          </div>
        </section>

        {/* Hoe het werkt sectie */}
        <section className="py-12 md:py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold" id="hoe-het-werkt">
              Hoe het werkt
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              In drie eenvoudige stappen maak je misstanden zichtbaar en help je anderen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Identificeer de locatie</h3>
              <p className="text-muted-foreground">
                Zoek de exacte locatie op Google Maps waar de misstand heeft plaatsgevonden.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">2. Schrijf een objectieve review</h3>
              <p className="text-muted-foreground">
                Gebruik onze AI-assistent om een feitelijke en constructieve Google Review te schrijven.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
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

        {/* Wat maakt een review effectief sectie */}
        <section className="py-12 md:py-16 bg-muted/30 rounded-xl p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold" id="effectieve-reviews">
              Wat maakt een review effectief?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Een krachtige review die impact maakt volgt deze vier principes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300">
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

            <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300">
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

            <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300">
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

            <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300">
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

          <div className="mt-8 text-center">
            <Button asChild variant="outline" className="group">
              <Link href="/tips">
                Meer schrijftips
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Waarom MisstandMelder sectie */}
        <section className="py-12 md:py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold" id="waarom-misstandmelder">
              Waarom MisstandMelder?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              MisstandMelder biedt een unieke manier om misstanden aan te kaarten en verandering te stimuleren
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4 group hover:bg-card p-4 rounded-lg transition-all duration-300">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
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

            <div className="flex gap-4 group hover:bg-card p-4 rounded-lg transition-all duration-300">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
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

            <div className="flex gap-4 group hover:bg-card p-4 rounded-lg transition-all duration-300">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Collectieve impact</h3>
                <p className="text-muted-foreground">
                  Samen maken we misstanden zichtbaar en creëren we een collectieve stem die niet genegeerd kan worden.
                </p>
              </div>
            </div>

            <div className="flex gap-4 group hover:bg-card p-4 rounded-lg transition-all duration-300">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
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

        {/* Recente meldingen sectie */}
        <section className="py-12 md:py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold" id="recente-meldingen">
              Recente meldingen
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Bekijk recente meldingen die via MisstandMelder zijn geplaatst
            </p>
          </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {/* Melding 1: Evert Lenos */}
  <div className="bg-card rounded-lg overflow-hidden shadow-sm border hover:shadow-md transition-all duration-300">
    <div className="p-4 border-b">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
            <img
              src="/images/profile.jpg" // Pas dit pad aan naar de locatie van je foto
              alt="Profielfoto Evert Lenos"
              className="h-8 w-8 rounded-full object-cover"
            />
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
                  Zorgverlening ZMC: Zorgen over toegankelijkheid en patiëntgerichtheid
                </h3>
                <div className="relative">
                  <div className="absolute -left-2 -top-2 text-primary text-opacity-20 text-4xl">"</div>
                  <p className="text-sm text-muted-foreground mb-4 italic pl-4">
                    Mijn ervaring met het Zaans Medisch Centrum tijdens en na de behandeling van mijn vrouw was teleurstellend en pijnlijk. Hoewel er zeker toegewijde zorgverleners zijn – met name de verpleegkundigen – heb ik ook serieuze tekortkomingen ervaren in de manier waarop met patiënten en hun naasten wordt omgegaan. Deze tekortkomingen hadden een grote impact. Hieronder licht ik de belangrijkste knelpunten toe.</p>

<p className="text-sm text-muted-foreground mb-4 italic pl-4">Gebrek aan persoonlijke betrokkenheid
Tijdens de behandeling werd een wond, veroorzaakt door de kanker, niet persoonlijk door de behandelaar onderzocht. Na het overlijden van mijn vrouw kreeg ik te horen dat deze zorg bij een andere afdeling lag. In het licht van haar ernstige ziekte en de emotionele belasting voelde dit als een gemiste kans op meer mensgerichte zorg.
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">12 mei 2023</span>
                  <a
  href="https://www.google.com/maps/contrib/111399948181001198224/place/ChIJN1QNS978xUcRpkqq7Q5zMo4/@52.3330453,4.5028565,9z/data=!4m6!1m5!8m4!1e1!2s111399948181001198224!3m1!1e1?entry=ttu&g_ep=EgoyMDI1MDYxNS4wIKXMDSoASAFQAw%3D%3D"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button variant="ghost" size="sm" className="h-8 gap-1">
    <MapPin className="h-3 w-3" />
    <span className="text-xs">Google Maps</span>
  </Button>
</a>
                </div>
              </div>
            </div>

  {/* Melding 2: Evert Lenos */}
  <div className="bg-card rounded-lg overflow-hidden shadow-sm border hover:shadow-md transition-all duration-300">
    <div className="p-4 border-b">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
            <img
              src="/images/profile.jpg" // Pas dit pad aan naar de locatie van je foto
              alt="Profielfoto Evert Lenos"
              className="h-8 w-8 rounded-full object-cover"
            />
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
                 OmbudsMan – Geen bondgenoot, maar een bureaucratisch schild voor de overheid
                </h3>
                <div className="relative">
                  <div className="absolute -left-2 -top-2 text-primary text-opacity-20 text-4xl">"</div>
                  <p className="text-sm text-muted-foreground mb-4 italic pl-4">
                    De Nationale Ombudsman zou burgers moeten beschermen tegen onrechtmatig overheidsoptreden. In mijn geval bleek het tegenovergestelde waar. Wat volgde op mijn klacht over een valse koppeling tussen een tweet en mijn naam, was geen onafhankelijk onderzoek, maar een bureaucratische verdediging van het overheidsstandpunt.)</p>

<p className="text-sm text-muted-foreground mb-4 italic pl-4"> De NCTV verklaarde in 2021 een e-mail te hebben ontvangen via een server van de Tweede Kamer. In die e-mail zou een tweet zijn opgenomen die aan het account @EvertLenos werd toegeschreven. Uit mijn Twittergeschiedenis blijkt echter onomstotelijk dat mijn account op 9 december 2021 de naam @Covid19Proces droeg – niet @EvertLenos. De Tweede Kamer stelde op mijn verzoek een onderzoek in, maar vond géén enkel spoor van een dergelijke e-mail die via hun servers zou zijn verstuurd.)
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">3 juni 2023</span>
                  <a
  href="https://www.google.com/maps/contrib/111399948181001198224/place/ChIJPSx5kIn8xUcRo8sY91Cflmk/@52.3330529,4.8102748,10z/data=!4m6!1m5!8m4!1e1!2s111399948181001198224!3m1!1e1?entry=ttu&g_ep=EgoyMDI1MDYxNS4wIKXMDSoASAFQAw%3D%3D"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button variant="ghost" size="sm" className="h-8 gap-1">
    <MapPin className="h-3 w-3" />
    <span className="text-xs">Google Maps</span>
  </Button>
</a>
                </div>
              </div>
            </div>

  {/* Melding 3: Evert Lenos */}
  <div className="bg-card rounded-lg overflow-hidden shadow-sm border hover:shadow-md transition-all duration-300">
    <div className="p-4 border-b">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
            <img
              src="/images/profile.jpg" // Pas dit pad aan naar de locatie van je foto
              alt="Profielfoto Evert Lenos"
              className="h-8 w-8 rounded-full object-cover"
            />
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
                <div className="relative">
                  <div className="absolute -left-2 -top-2 text-primary text-opacity-20 text-4xl">"</div>
                  <p className="text-sm text-muted-foreground mb-4 italic pl-4">
                    Vrijspraak na schijnonderzoek: hoe de FIOD van de Belastingdienst en het OM Amsterdam hun grenzen overschreden</p>

<p className="text-sm text-muted-foreground mb-4 italic pl-4"> Op 22 mei 2024 sprak de rechtbank mij vrij van beschuldigingen van het witwassen van bitcoins, ondanks een zware eis van tien maanden gevangenisstraf en een boete van €16.000. De zaak begon na een tip van de Finse belastingautoriteiten. Vanaf het eerste verhoor had ik het gevoel dat er iets niet klopte. Ik had sterk de indruk dat de zaak verband hield met mijn kritische uitingen op Twitter tijdens de coronaperiode – iets wat later tijdens mijn eigen Woo onderzoeken toch wel beetje bij bevestigd werd.
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">27 mei 2023</span>
                  <a
  href="https://www.google.com/maps/contrib/111399948181001198224/place/ChIJN0Ovs1_ixUcRV_EiEjkfKvQ/@52.1886937,4.822067,9z/data=!4m4!1m3!8m2!1e1!2s111399948181001198224?entry=ttu&g_ep=EgoyMDI1MDYxNS4wIKXMDSoASAFQAw%3D%3D"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button variant="ghost" size="sm" className="h-8 gap-1">
    <MapPin className="h-3 w-3" />
    <span className="text-xs">Google Maps</span>
  </Button>
</a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" className="group">
              Bekijk meer meldingen
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </section>

        {/* CTA Sectie */}
        <section className="mx-auto max-w-3xl rounded-xl border bg-card p-8 shadow-lg my-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">Begin direct met melden</h2>
            <p className="mt-2 text-muted-foreground">
              Maak gebruik van onze AI-assistent om een effectieve melding te maken
            </p>
          </div>

          <div className="flex justify-center">
            <Button asChild size="lg" className="rounded-full group">
              <Link href="/melden">
                Naar het meldformulier
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>More actions
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
