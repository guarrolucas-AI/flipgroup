import type { Metadata } from "next"
import { PerforacionesPage } from "@/components/pages/perforaciones-page"

export const metadata: Metadata = {
  title: "Perforaciones — FLIP Obras",
  description:
    "Perforación horizontal dirigida, sondeos geotécnicos, pilotes y pozos. Equipo especializado con tecnología propia.",
  openGraph: {
    title: "Perforaciones — FLIP Obras",
    description: "Perforación horizontal, sondeos geotécnicos y pilotes.",
    url: "https://flipgroup.com.ar/obras/perforaciones",
  },
}

export default function Page() {
  return <PerforacionesPage />
}
