import type { Metadata } from "next"
import { CapitalPage } from "@/components/pages/capital-page"

export const metadata: Metadata = {
  title: "FLIP Capital — Inversiones en Infraestructura",
  description:
    "Invertí en proyectos de infraestructura industrial con retornos fijos en dólares. Desde USD 10.000. Respaldado por activos reales.",
  openGraph: {
    title: "FLIP Capital — Inversiones en Infraestructura",
    description: "Retornos fijos en USD. Respaldado por activos reales de construcción.",
    url: "https://flipgroup.com.ar/capital",
  },
}

export default function Page() {
  return <CapitalPage />
}
