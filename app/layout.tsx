import type { Metadata } from "next"
import { Space_Grotesk, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

export const metadata: Metadata = {
  title: "FLIP Group — Capital · Constech · Construcción",
  description:
    "El primer holding tecnológico de infraestructura industrial de Argentina. Capital, software de gestión de obra e infraestructura industrial.",
  keywords: ["construcción", "tecnología", "inversión inmobiliaria", "infraestructura", "Argentina", "FLIP Group"],
  openGraph: {
    title: "FLIP Group",
    description: "Capital · Constech · Construcción",
    url: "https://flipgroup.com.ar",
    siteName: "FLIP Group",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FLIP Group",
    description: "Capital · Constech · Construcción",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="grain min-h-full flex flex-col bg-[#070A0F] text-[#EDF2F7] antialiased">
        {children}
      </body>
    </html>
  )
}
