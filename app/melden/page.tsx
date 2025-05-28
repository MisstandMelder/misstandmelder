"use client"; // Toegevoegd om Client Component te markeren

import { useState } from "react";
import { MeldingInterface } from "@/components/melding-interface";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Image from "next/image";

export default function MeldenPage() {
  const [meldingVerzonden, setMeldingVerzonden] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      <SiteHeader />
      <main className="flex-1 container py-12">
        {/* Banner afbeelding */}
        <div className="w-full max-w-5xl mx-auto mb-8 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/misstandmelder-banner.webp"
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

      <SiteFooter />
    </div>
  );
}