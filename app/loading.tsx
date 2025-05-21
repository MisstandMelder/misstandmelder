import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      <SiteHeader />

      <main className="flex-1 container flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="h-16 w-16 relative">
            <div className="absolute inset-0 rounded-full border-4 border-primary border-opacity-20"></div>
            <div className="absolute inset-0 rounded-full border-4 border-t-primary animate-spin"></div>
          </div>
          <p className="text-lg font-medium text-muted-foreground">Laden...</p>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
