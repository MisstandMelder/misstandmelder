// components/google-analytics.tsx
"use client"

import { useEffect } from "react"

export default function GoogleAnalytics() {
  useEffect(() => {
    // Voeg het Google Analytics script dynamisch toe
    const script = document.createElement("script")
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-S1H5JG69T0"
    script.async = true
    document.head.appendChild(script)

    // Init Google Analytics
    window.dataLayer = window.dataLayer || []
    function gtag(...args: any[]) {
      window.dataLayer.push(args)
    }
    gtag("js", new Date())
    gtag("config", "G-S1H5JG69T0")

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return null
}
