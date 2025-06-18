import { Button } from "@/components/ui/button"
import {
  Star,
  MapPin,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const meldingen = [
  {
    id: 1,
    naam: 'Evert Lenos',
    sterren: 1,
    datum: '3 juni 2023',
    titel: 'Beroofd door Justitie en de Gemeente: Hoe de Overheid levens verwoest',
    beschrijving: [
      'Na het overlijden van mijn vrouw — en de lange, moeilijke periode van haar ziekte waarin wij te maken kregen met grove tekortkomingen in de medische zorg — kwam ik in een emotionele crisis terecht.',
      'Tijdens een strafrechtelijk onderzoek bevroor de overheid al mijn middelen — volledig onterecht, zo bleek later.',
    ],
    foto: '/images/profile.jpg',
    mapLink:
      'https://www.google.com/maps/contrib/111399948181001198224/place/ChIJPSx5kIn8xUcRo8sY91Cflmk/@52.3330529,4.8102748,10z/data=!4m6!1m5!8m4!1e1!2s111399948181001198224!3m1!1e1?entry=ttu&g_ep=EgoyMDI1MDYxNS4wIKXMDSoASAFQAw%3D%3D',
  },
  // Voeg hier meer meldingen toe als je wilt
];

export default function MeldingenPagina() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Alle Meldingen</h1>

      <div className="space-y-6">
        {meldingen.map((melding) => (
          <div
            key={melding.id}
            className="bg-card rounded-lg overflow-hidden shadow-sm border hover:shadow-md transition-all duration-300"
          >
            <div className="p-4 border-b">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <img
                      src={melding.foto}
                      alt={`Profielfoto ${melding.naam}`}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                  </div>
                  <span className="font-medium">{melding.naam}</span>
                </div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4"
                      fill={star <= melding.sterren ? '#FFD700' : 'none'}
                      stroke={star <= melding.sterren ? '#FFD700' : 'currentColor'}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-2">{melding.titel}</h3>
              <div className="relative">
                <div className="absolute -left-2 -top-2 text-primary text-opacity-20 text-4xl">"</div>
                {melding.beschrijving.map((alinea, i) => (
                  <p
                    key={i}
                    className="text-sm text-muted-foreground mb-4 italic pl-4"
                  >
                    {alinea}
                  </p>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">{melding.datum}</span>
                <a
                  href={melding.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="sm" className="h-8 gap-1">
                    <MapPin className="h-3 w-3" />
                    <span className="text-xs">Google Maps</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
