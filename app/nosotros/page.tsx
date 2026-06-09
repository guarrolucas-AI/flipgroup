import type { Metadata } from "next"
import { NosotrosPage } from "@/components/pages/nosotros-page"

export const metadata: Metadata = {
  title: "Nosotros — FLIP Group",
  description:
    "Una década construyendo infraestructura industrial en Argentina. Capital, Constech, Obras y Perforaciones bajo una misma estructura holding.",
  openGraph: {
    title: "Nosotros — FLIP Group",
    description: "Una década construyendo desde adentro hacia afuera.",
    url: "https://flipgroup.com.ar/nosotros",
  },
}

export default function Page() {
  return <NosotrosPage />
}
