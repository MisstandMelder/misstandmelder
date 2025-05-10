import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"

export function ExampleReview() {
  return (
    <Card className="w-full overflow-hidden rounded-2xl shadow-xl border-0 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-900/80">
      <CardContent className="p-0">
        <div className="grid md:grid-cols-5">
          {/* Left side - Review content */}
          <div className="p-8 md:col-span-3 relative">
            <Quote className="absolute top-6 left-6 h-8 w-8 text-primary/10" />
            <div className="flex items-center space-x-4 mb-6">
              <Avatar className="h-14 w-14 border-2 border-primary/20 ring-2 ring-background">
                <AvatarFallback className="bg-primary/10 text-primary font-semibold">EL</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-lg">Evert Lenos</h3>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 text-muted-foreground" />
                  <Star className="h-4 w-4 text-muted-foreground" />
                  <Star className="h-4 w-4 text-muted-foreground" />
                  <Star className="h-4 w-4 text-muted-foreground" />
                  <span className="ml-2 text-sm text-muted-foreground">3.0</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="h-6 w-1 bg-primary rounded-full mr-2"></div>
                <p className="text-lg font-medium">Zaans Medisch Centrum: Toegankelijkheid en patiëntgerichtheid</p>
              </div>
              <blockquote className="text-lg leading-relaxed"><i>
                "Mijn ervaring met het Zaans Medisch Centrum tijdens en na de behandeling van mijn vrouw was teleurstellend en pijnlijk. Hoewel er zeker toegewijde zorgverleners zijn – met name de verpleegkundigen – heb ik ook serieuze tekortkomingen ervaren in de manier waarop met patiënten en hun naasten wordt omgegaan. Deze tekortkomingen hadden een grote impact. "</i>
              </blockquote>
            </div>
          </div>

          {/* Right side - Why effective */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 md:col-span-2">
            <h4 className="font-bold text-lg mb-4 flex items-center">
              <div className="h-6 w-1 bg-primary rounded-full mr-2"></div>
              Waarom deze review effectief is
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mr-3 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3 w-3"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <span className="font-medium">Feitelijk</span>
                  <p className="text-sm text-muted-foreground">Beschrijft specifieke situaties en ervaringen</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mr-3 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3 w-3"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <span className="font-medium">Specifiek</span>
                  <p className="text-sm text-muted-foreground">
                    Noemt concrete voorbeelden (wond niet onderzocht, contact via callcenter)
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mr-3 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3 w-3"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <span className="font-medium">Impact</span>
                  <p className="text-sm text-muted-foreground">Legt uit wat de emotionele gevolgen waren</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mr-3 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3 w-3"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <span className="font-medium">Constructief</span>
                  <p className="text-sm text-muted-foreground">Eindigt met hoop op verbetering</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
