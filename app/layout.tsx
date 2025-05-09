import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Github, Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MisstandMelder | Maak misstanden zichtbaar",
  description: "Een AI-assistent voor het effectief melden van misstanden in Nederland via Google Reviews",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center px-4 sm:px-6 lg:px-8">
              <Link href="/" className="flex items-center space-x-2">
                <div className="relative h-8 w-8 overflow-hidden rounded-full bg-primary/10 p-1">
                  <img
                    src="/misstandmelder-logo.png"
                    alt="MisstandMelder Logo"
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="font-bold text-xl hidden sm:inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                  MisstandMelder
                </span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="ml-auto hidden md:flex gap-1">
                <Link href="/" className="group px-3 py-2 text-sm font-medium transition-colors hover:text-primary">
                  Home
                  <div className="h-0.5 w-0 bg-primary transition-all group-hover:w-full"></div>
                </Link>
                <Link
                  href="/melden"
                  className="group px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
                >
                  Melden
                  <div className="h-0.5 w-0 bg-primary transition-all group-hover:w-full"></div>
                </Link>
                <Link href="#chat" className="group px-3 py-2 text-sm font-medium transition-colors hover:text-primary">
                  AI-assistent
                  <div className="h-0.5 w-0 bg-primary transition-all group-hover:w-full"></div>
                </Link>
                <Link
                  href="https://github.com/misstandmelder/misstandmelder"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon" aria-label="GitHub" className="rounded-full">
                    <Github className="h-5 w-5" />
                  </Button>
                </Link>
              </nav>

              {/* Mobile Navigation */}
              <div className="md:hidden ml-auto">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                    <div className="flex flex-col gap-6 h-full">
                      <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center space-x-2">
                          <img src="/misstandmelder-logo.png" alt="MisstandMelder Logo" className="h-8 w-8" />
                          <span className="font-bold text-xl">MisstandMelder</span>
                        </Link>
                        <SheetTrigger asChild>
                          <Button variant="ghost" size="icon" className="rounded-full">
                            <X className="h-5 w-5" />
                            <span className="sr-only">Close menu</span>
                          </Button>
                        </SheetTrigger>
                      </div>
                      <nav className="flex flex-col gap-4">
                        <Link href="/" className="px-2 py-1 text-lg font-medium hover:text-primary">
                          Home
                        </Link>
                        <Link href="/melden" className="px-2 py-1 text-lg font-medium hover:text-primary">
                          Melden
                        </Link>
                        <Link href="#chat" className="px-2 py-1 text-lg font-medium hover:text-primary">
                          AI-assistent
                        </Link>
                        <Link
                          href="https://github.com/misstandmelder/misstand-melder"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2 py-1 text-lg font-medium hover:text-primary flex items-center gap-2"
                        >
                          <Github className="h-5 w-5" /> GitHub
                        </Link>
                      </nav>
                      <div className="mt-auto">
                        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} MisstandMelder</p>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </header>
          {children}
          <footer className="w-full border-t py-12 md:py-16 bg-muted/30">
            <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4 px-4 sm:px-6 lg:px-8">
              <div className="space-y-4">
                <Link href="/" className="flex items-center space-x-2">
                  <img src="/misstandmelder-logo.png" alt="MisstandMelder Logo" className="h-8 w-8" />
                  <span className="font-bold text-xl">MisstandMelder</span>
                </Link>
                <p className="text-sm text-muted-foreground max-w-xs">
                  Een open-source platform om misstanden in Nederland zichtbaar te maken via Google Reviews.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">Platform</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/melden" className="text-sm text-muted-foreground hover:text-foreground">
                      Melden
                    </Link>
                  </li>
                  <li>
                    <Link href="#chat" className="text-sm text-muted-foreground hover:text-foreground">
                      AI-assistent
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">Juridisch</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="/voorwaarden" className="text-sm text-muted-foreground hover:text-foreground">
                      Voorwaarden
                    </Link>
                  </li>
                  <li>
                    <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground">
                      Cookies
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://github.com/misstandmelder/misstandmelder"
                      className="text-sm text-muted-foreground hover:text-foreground"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="container mt-8 pt-8 border-t px-4 sm:px-6 lg:px-8">
              <p className="text-sm text-muted-foreground text-center">
                © {new Date().getFullYear()} MisstandMelder. Alle rechten voorbehouden.
              </p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
