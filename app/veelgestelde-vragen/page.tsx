import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <header className="container flex items-center justify-between py-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/misstandmelder-logo.png"
            alt="MisstandMelder Logo"
            width={40}
            height={40}
            className="h-10 w-10"
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
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold mb-6 text-center">Veelgestelde vragen</h1>

          <p className="text-xl text-center text-muted-foreground mb-12">
            Antwoorden op de meest gestelde vragen over MisstandMelder
          </p>

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
                Je kunt verschillende soorten misstanden melden, zoals corruptie, bureaucratie, belangenverstrengeling,
                vriendjespolitiek en gebrek aan menselijkheid. Dit kan betrekking hebben op overheidsinstanties,
                zorginstellingen, onderwijsinstellingen, bedrijven en andere organisaties.
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
            <Button asChild className="rounded-full">
              <Link href="/contact">Neem contact op</Link>
            </Button>
          </div>
        </div>
      </main>

      <footer className="border-t bg-muted/40 mt-12">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Image
              src="/misstandmelder-logo.png"
              alt="MisstandMelder Logo"
              width={24}
              height={24}
              className="h-6 w-6"
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
