import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react" // Import ArrowRight

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      <SiteHeader />

      <main className="flex-1 container py-12">
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
          <h1 className="text-4xl font-bold mb-6 text-center">Veelgestelde vragen</h1>

          <p className="text-xl text-center text-muted-foreground mb-8">
            Antwoorden op de meest gestelde vragen over MisstandMelder
          </p>

          {/* Zoekbalk voor FAQ's */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Zoek in veelgestelde vragen..."
              className="pl-10 w-full"
              aria-label="Zoek in veelgestelde vragen"
            />
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Wat is MisstandMelder?</AccordionTrigger>
              <AccordionContent>
                MisstandMelder is een gratis, open-source platform dat burgers helpt om misstanden in Nederland aan te
                kaarten via Google Reviews. We bieden tools en begeleiding om objectieve en constructieve reviews te
                schrijven die bijdragen aan transparantie en verbetering.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Waarom Google Reviews gebruiken?</AccordionTrigger>
              <AccordionContent>
                Google Reviews is een krachtig platform dat door miljoenen mensen wordt gebruikt. Door misstanden hier
                te melden, worden ze zichtbaar voor iedereen die informatie zoekt over de betreffende instantie of
                organisatie. Dit creëert transparantie en stimuleert verbetering. Bovendien zijn Google Reviews moeilijk
                te verwijderen of te negeren door de betrokken organisaties.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Is MisstandMelder gratis te gebruiken?</AccordionTrigger>
              <AccordionContent>
                Ja, MisstandMelder is volledig gratis te gebruiken. We hebben geen winstoogmerk en vragen geen
                vergoeding voor onze diensten. Het platform wordt onderhouden door vrijwilligers en is open source.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Moet ik een account aanmaken?</AccordionTrigger>
              <AccordionContent>
                Nee, je hoeft geen account aan te maken om MisstandMelder te gebruiken. Je kunt direct een melding maken
                zonder registratie. Voor het plaatsen van de review op Google Maps heb je wel een Google-account nodig.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Wat voor soort misstanden kan ik melden?</AccordionTrigger>
              <AccordionContent>
                Je kunt verschillende soorten misstanden melden, zoals fraude, corruptie, discriminatie, intimidatie,
                diefstal, misbruik, nepotisme, bedrog, wanbeheer, bureaucratie, slechtzorg en nalatigheid. Dit kan
                betrekking hebben op overheidsinstanties, zorginstellingen, onderwijsinstellingen, bedrijven en andere
                organisaties.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>Hoe werkt de AI-assistent?</AccordionTrigger>
              <AccordionContent>
                Onze AI-assistent helpt je bij het opstellen van een objectieve en constructieve review. Je voert de
                details van de misstand in (locatie, datum, beschrijving, etc.) en de AI genereert een conceptreview die
                je kunt gebruiken of aanpassen. De assistent zorgt ervoor dat de review feitelijk, respectvol en
                constructief is.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>Hoe plaats ik mijn review op Google Maps?</AccordionTrigger>
              <AccordionContent>
                Nadat je een review hebt gegenereerd, kun je op de knop "Plaats op Google Maps" klikken. Je wordt dan
                doorgestuurd naar Google Maps waar je de review kunt plaatsen. Je hebt hiervoor een Google-account
                nodig. Als je al bent ingelogd op Google, kun je de review direct plaatsen.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>Is MisstandMelder anoniem?</AccordionTrigger>
              <AccordionContent>
                MisstandMelder zelf slaat geen persoonlijke gegevens op en je hoeft geen account aan te maken. Echter,
                voor het plaatsen van een review op Google Maps heb je een Google-account nodig, wat betekent dat je
                review niet volledig anoniem is. Je kunt wel een pseudoniem gebruiken voor je Google-account.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger>Kan ik bijdragen aan MisstandMelder?</AccordionTrigger>
              <AccordionContent>
                Ja, MisstandMelder is open source en we verwelkomen bijdragen. Je kunt bijdragen aan de code, de
                documentatie, of door feedback te geven. Bezoek onze GitHub-repository voor meer informatie.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger>Wat als mijn review wordt verwijderd?</AccordionTrigger>
              <AccordionContent>
                Google kan reviews verwijderen als ze niet voldoen aan hun richtlijnen. Daarom helpt onze AI-assistent
                je bij het opstellen van een objectieve en constructieve review die voldoet aan deze richtlijnen. Als je
                review toch wordt verwijderd, kun je proberen een nieuwe review te schrijven die beter voldoet aan de
                richtlijnen.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Heb je een vraag die hier niet wordt beantwoord?</p>
            <Button asChild className="rounded-full group">
              <Link href="/contact">
                Neem contact op
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
