import { ImageResponse } from "next/og"
import { makeOGElement } from "@/lib/og"

export const runtime = "edge"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OG() {
  return new ImageResponse(
    makeOGElement({
      title: ["Debajo de", "todo."],
      subtitle: "Perforación horizontal · Sondeos geotécnicos · Pilotes · Pozos",
      accent: "#4ADE80",
      tag: "PERFORACIONES",
      glowPosition: "left",
    }),
    size
  )
}
