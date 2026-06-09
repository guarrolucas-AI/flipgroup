import { ImageResponse } from "next/og"
import { makeOGElement } from "@/lib/og"

export const runtime = "edge"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OG() {
  return new ImageResponse(
    makeOGElement({
      title: ["Infraestructura", "industrial."],
      subtitle: "Airless · HVAC · Pisos industriales · Altura · Perforaciones",
      accent: "#FF6B35",
      tag: "FLIP OBRAS",
      glowPosition: "left",
    }),
    size
  )
}
