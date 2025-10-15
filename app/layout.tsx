import type React from "react"
import type { Metadata } from "next"
import { Orbitron } from "next/font/google"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "700", "900"],
})

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "V2 - Nigerian Football Endless Runner | Run. Score. Conquer.",
  description:
    "Experience the spirit of Nigeria in every sprint. V2 is a cinematic football endless runner dedicated to Victor Boniface & Victor Osimhen. Coming to Android & iOS.",
  keywords:
    "V2, football game, endless runner, Nigerian football, Victor Boniface, Victor Osimhen, mobile game, XDegree Studios",
  openGraph: {
    title: "V2 - Nigerian Football Endless Runner",
    description: "Run. Score. Conquer the Field. The spirit of Nigeria in every sprint.",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "V2 - Nigerian Football Endless Runner",
    description: "Run. Score. Conquer the Field.",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
