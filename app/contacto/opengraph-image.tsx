import { ImageResponse } from "next/og"
import { makeOGElement } from "@/lib/og"

export const runtime = "edge"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OG() {
  return new ImageResponse(
    makeOGElement({
      title: ["Hablemos."],
      subtitle: "Inversiones, obras, Constech o consultas generales.",
      accent: "#E86A1A",
      tag: "CONTACTO",
      glowPosition: "center",
    }),
    size
  )
}
