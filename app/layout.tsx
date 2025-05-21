import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MisstandMelder - Meld misstanden in Nederland",
  description:
    "Een gratis platform om misstanden in Nederland aan te kaarten via krachtige Google Reviews. Maak misstanden zichtbaar en stimuleer verandering.",
  keywords: "misstanden, melden, nederland, transparantie, google reviews, corruptie, fraude, bureaucratie, misbruik",
  authors: [{ name: "MisstandMelder Team" }],
  creator: "MisstandMelder",
  publisher: "MisstandMelder",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://misstandmelder.nl",
    title: "MisstandMelder - Meld misstanden in Nederland",
    description: "Een gratis platform om misstanden in Nederland aan te kaarten via krachtige Google Reviews",
    siteName: "MisstandMelder",
    images: [
      {
        url: "/images/misstandmelder-banner.png",
        width: 1200,
        height: 630,
        alt: "MisstandMelder - Geef misstanden een stem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MisstandMelder - Meld misstanden in Nederland",
    description: "Een gratis platform om misstanden in Nederland aan te kaarten via krachtige Google Reviews",
    images: ["/images/misstandmelder-banner.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/misstandmelder-logo-new.png", type: "image/png" },
    ],
    apple: { url: "/misstandmelder-logo-new.png", type: "image/png" },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
