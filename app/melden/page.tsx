import { MeldingInterface } from "@/components/melding-interface"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function MeldenPage() {
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

        <div className="mx-auto max-w-4xl text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Misstand Melden</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Gebruik dit platform om een misstand te melden. Vul het formulier in, genereer een objectieve review, en
            plaats deze direct op Google Maps.
          </p>
        </div>

        <MeldingInterface />
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
