import Link from "next/link"
import Image from "next/image"
import { Github } from "lucide-react"

export function SiteFooter() {
  return (
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
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/misstandmelder/misstand-melder"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>
          <Link
            href="/privacy"
            className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            Privacy
          </Link>
          <Link
            href="/voorwaarden"
            className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            Voorwaarden
          </Link>
          <Link
            href="/contact"
            className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}
