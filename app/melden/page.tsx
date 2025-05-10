import { ReportingGuide } from "@/components/reporting-guide"
import { ArrowRight } from "lucide-react"

export default function ReportPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-background via-background to-blue-50 dark:to-blue-950/30 overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary">
              Maak impact
            </div>
            <div className="space-y-3 max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                Misstand Melden
              </h1>
              <p className="text-muted-foreground md:text-xl/relaxed max-w-2xl mx-auto">
                Gebruik dit formulier om een misstand te melden. De AI-assistent zal u helpen bij het opstellen van een
                effectieve melding die impact maakt.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl mt-12">
            <ReportingGuide />
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary">
              Tips
            </div>
            <div className="space-y-2 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Tips voor effectieve meldingen</h2>
              <p className="text-muted-foreground md:text-lg">
                Volg deze richtlijnen om uw melding zo effectief mogelijk te maken.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Wees feitelijk",
                description: "Beschrijf precies wat er is gebeurd, zonder overdrijving of emotionele taal.",
              },
              {
                title: "Wees specifiek",
                description: "Noem concrete voorbeelden, data, tijden en betrokken personen (zonder namen).",
              },
              {
                title: "Beschrijf de impact",
                description: "Leg uit hoe de situatie u of anderen heeft beïnvloed, zowel praktisch als emotioneel.",
              },
              {
                title: "Blijf respectvol",
                description: "Vermijd scheldwoorden of persoonlijke aanvallen, focus op de situatie.",
              },
              {
                title: "Wees beknopt",
                description: "Houd uw melding kort en to-the-point, zonder onnodige details.",
              },
              {
                title: "Suggereer oplossingen",
                description: "Indien mogelijk, geef constructieve suggesties voor verbetering.",
              },
            ].map((tip, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-background to-muted/30 p-6 shadow-md transition-all hover:shadow-lg border border-border/50 hover:border-primary/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mr-3">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                    <h3 className="text-xl font-bold">{tip.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
