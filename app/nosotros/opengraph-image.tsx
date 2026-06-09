import { ImageResponse } from "next/og"
import { makeOGElement } from "@/lib/og"

export const runtime = "edge"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OG() {
  return new ImageResponse(
    makeOGElement({
      title: ["Una década", "construyendo."],
      subtitle: "Capital, tecnología y obra bajo una estructura holding.",
      accent: "#E86A1A",
      tag: "NOSOTROS",
      stat: { value: "2016–2026", label: "EN EL MERCADO" },
      glowPosition: "right",
    }),
    size
  )
}
