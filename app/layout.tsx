import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import GoogleAnalytics from "@/components/google-analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MisstandMelder - Meld misstanden in Nederland",
  description:
    "Een gratis platform om misstanden in Nederland aan te kaarten via krachtige Google Reviews. Maak misstanden zichtbaar en stimuleer verandering.",
  keywords: "misstanden, melden, nederland, transparantie, google reviews, corruptie, fraude, bureaucratie, misbruik",
  authors: [{ name: "MisstandMelder Team" }],
  creator: "MisstandMelder",
  publisher: "MisstandMelder",
  metadataBase: new URL("https://misstandmelder.vercel.app"), // Toegevoegd
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://misstandmelder.vercel.app",
    title: "MisstandMelder - Meld misstanden in Nederland",
    description: "Een gratis platform om misstanden in Nederland aan te kaarten via krachtige Google Reviews",
    siteName: "MisstandMelder",
    images: [
      {
        url: "/images/misstandmelder-banner.webp",
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
    images: ["/images/misstandmelder-banner.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/misstandmelder-logo-new.webp", type: "image/webp" },
    ],
    apple: { url: "/misstandmelder-logo-new.webp", type: "image/webp" },
  },
  generator: "v0.dev",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="JdFG__OOtas_IAOGBJvSXvLnlsgJiff5svN1jDuZL_8" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1879162086277087"
          crossOrigin="anonymous"
        ></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-S1H5JG69T0"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-S1H5JG69T0');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <GoogleAnalytics />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
