import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, FileText, Heart, MessageSquare, ArrowRight, AlertTriangle, ThumbsUp } from "lucide-react"

export default function TipsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      <SiteHeader />

      <main className="flex-1 container py-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-6 text-center">Tips voor effectieve meldingen</h1>

          <p className="text-xl text-center text-muted-foreground mb-12">
            Leer hoe je impactvolle en constructieve reviews schrijft die echt verschil maken
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-6">De vier pijlers van een effectieve melding</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      Feitelijk
                    </CardTitle>
                    <CardDescription>Objectief en waarheidsgetrouw</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Beschrijf specifieke situaties en ervaringen zonder overdrijving. Gebruik objectieve taal en
                      vermijd emotionele uitspraken die de geloofwaardigheid kunnen ondermijnen.
                    </p>
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <ThumbsUp className="h-4 w-4 text-green-500 shrink-0 mt-1" />
                        <p className="text-sm">
                          <span className="font-medium">Goed:</span> "De arts heeft mijn dossier niet gelezen voordat
                          hij mij zag, wat bleek uit zijn vragen die al in mijn dossier beantwoord waren."
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <AlertTriangle className="h-4 w-4 text-red-500 shrink-0 mt-1" />
                        <p className="text-sm">
                          <span className="font-medium">Vermijd:</span> "De arts was totaal ongeïnteresseerd en heeft
                          duidelijk geen enkele moeite gedaan om mij te helpen."
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      Specifiek
                    </CardTitle>
                    <CardDescription>Concreet en gedetailleerd</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Noem concrete voorbeelden die je ervaring illustreren. Details zoals data, tijden, namen (indien
                      gepast) en exacte gebeurtenissen maken je review overtuigender.
                    </p>
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <ThumbsUp className="h-4 w-4 text-green-500 shrink-0 mt-1" />
                        <p className="text-sm">
                          <span className="font-medium">Goed:</span> "Mijn wond werd niet onderzocht tijdens het consult
                          op 12 mei en ik kon alleen contact krijgen via het callcenter, waar ik 45 minuten moest
                          wachten."
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <AlertTriangle className="h-4 w-4 text-red-500 shrink-0 mt-1" />
                        <p className="text-sm">
                          <span className="font-medium">Vermijd:</span> "Ze kijken nooit goed naar je klachten en je
                          kunt ze bijna nooit bereiken."
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="h-5 w-5 text-primary" />
                      Impact
                    </CardTitle>
                    <CardDescription>Persoonlijke en maatschappelijke gevolgen</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Leg uit wat de emotionele en praktische gevolgen waren. Beschrijf hoe de situatie jou of anderen
                      heeft beïnvloed om de ernst van de misstand te benadrukken.
                    </p>
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <ThumbsUp className="h-4 w-4 text-green-500 shrink-0 mt-1" />
                        <p className="text-sm">
                          <span className="font-medium">Goed:</span> "Door het gebrek aan communicatie voelde ik me
                          genegeerd en angstig, wat leidde tot extra stress tijdens een toch al moeilijke periode."
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <AlertTriangle className="h-4 w-4 text-red-500 shrink-0 mt-1" />
                        <p className="text-sm">
                          <span className="font-medium">Vermijd:</span> "Het was verschrikkelijk en ik was woedend over
                          hoe ze me behandelden."
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-primary" />
                      Constructief
                    </CardTitle>
                    <CardDescription>Gericht op verbetering</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Eindig met hoop op verbetering of suggesties. Een constructieve toon maakt je review serieuzer en
                      toont dat je doel verbetering is, niet alleen kritiek.
                    </p>
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <ThumbsUp className="h-4 w-4 text-green-500 shrink-0 mt-1" />
                        <p className="text-sm">
                          <span className="font-medium">Goed:</span> "Ik hoop dat deze feedback kan bijdragen aan betere
                          communicatieprocessen, zodat toekomstige patiënten een betere ervaring hebben."
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <AlertTriangle className="h-4 w-4 text-red-500 shrink-0 mt-1" />
                        <p className="text-sm">
                          <span className="font-medium">Vermijd:</span> "Ik raad iedereen af om hier ooit naartoe te
                          gaan."
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Voor en na voorbeelden</h2>

              <Card>
                <CardHeader>
                  <CardTitle>Voorbeeld van een verbeterde review</CardTitle>
                  <CardDescription>Zie hoe een review effectiever kan worden gemaakt</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2 text-red-500">Ineffectieve review:</h3>
                      <div className="p-4 bg-muted rounded-md">
                        <p className="italic">
                          "Deze gemeente is verschrikkelijk! Ze hebben mijn vergunningsaanvraag afgewezen zonder reden.
                          Niemand neemt ooit de telefoon op en ze zijn totaal incompetent. Blijf hier weg!"
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2 text-green-500">Effectieve review:</h3>
                      <div className="p-4 bg-muted rounded-md">
                        <p className="italic">
                          "Mijn ervaring met de vergunningsafdeling van Gemeente Amsterdam was teleurstellend. Na 6
                          maanden wachten op een besluit over mijn verbouwingsvergunning (aanvraagnummer 2023-0456),
                          werd deze zonder duidelijke uitleg afgewezen. Ik heb tussen 10 en 24 mei dagelijks geprobeerd
                          telefonisch contact te krijgen, maar werd steeds doorverwezen naar een voicemail die niet werd
                          beantwoord. Deze situatie heeft geleid tot aanzienlijke vertraging van mijn verbouwingsplannen
                          en extra kosten voor het inhuren van een adviseur. Ik hoop dat de gemeente haar
                          communicatieprocessen kan verbeteren en duidelijkere informatie kan verstrekken over de
                          redenen voor afwijzing, zodat anderen niet dezelfde frustrerende ervaring hoeven te hebben."
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Downloadbare hulpmiddelen</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="hover:shadow-md transition-all duration-300">
                  <CardHeader>
                    <CardTitle>Review Checklist</CardTitle>
                    <CardDescription>Een handige checklist om je review te controleren</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Download onze checklist om te zorgen dat je review alle belangrijke elementen bevat.
                    </p>
                    <Button className="w-full">Download Checklist (PDF)</Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-all duration-300">
                  <CardHeader>
                    <CardTitle>Review Sjabloon</CardTitle>
                    <CardDescription>Een kant-en-klaar sjabloon voor je review</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Gebruik ons sjabloon als startpunt voor het schrijven van je review.</p>
                    <Button className="w-full">Download Sjabloon (PDF)</Button>
                  </CardContent>
                </Card>
              </div>
            </section>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="rounded-full group">
                <Link href="/melden">
                  Begin met je melding
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
