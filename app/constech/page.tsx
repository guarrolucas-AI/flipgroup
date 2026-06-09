import type { Metadata } from "next"
import { ConstechPage } from "@/components/pages/constech-page"

export const metadata: Metadata = {
  title: "FLIP Constech — Software de Gestión de Obra",
  description:
    "Certificados de avance automáticos, presupuestos en tiempo real y dashboard para inversores. Diseñado para la construcción argentina.",
  openGraph: {
    title: "FLIP Constech — Software de Gestión de Obra",
    description: "Certificados de avance automáticos. Sin papeles. En tiempo real.",
    url: "https://flipgroup.com.ar/constech",
  },
}

export default function Page() {
  return <ConstechPage />
}
