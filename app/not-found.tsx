import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      <SiteHeader />

      <main className="flex-1 container flex flex-col items-center justify-center py-12">
        <div className="text-center space-y-6 max-w-md">
          <h1 className="text-6xl font-bold text-primary">404</h1>
          <h2 className="text-3xl font-bold">Pagina niet gevonden</h2>
          <p className="text-muted-foreground">Sorry, de pagina die je zoekt bestaat niet of is verplaatst.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild>
              <Link href="/" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Terug naar home
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/veelgestelde-vragen" className="flex items-center gap-2">
                <Search className="h-4 w-4" />
                Zoek hulp
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
