import type { Metadata } from "next"
import { ObrasPage } from "@/components/pages/obras-page"

export const metadata: Metadata = {
  title: "FLIP Obras — Infraestructura Industrial",
  description:
    "Pintura Airless, HVAC, pisos industriales y trabajos en altura. Equipos propios y tecnología de proceso para infraestructura industrial.",
  openGraph: {
    title: "FLIP Obras — Infraestructura Industrial",
    description: "Equipos propios. Tecnología de proceso. Certificación incluida.",
    url: "https://flipgroup.com.ar/obras",
  },
}

export default function Page() {
  return <ObrasPage />
}
