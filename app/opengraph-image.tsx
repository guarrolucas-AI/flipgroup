import { ImageResponse } from "next/og"
import { makeOGElement } from "@/lib/og"

export const runtime = "edge"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OG() {
  return new ImageResponse(
    makeOGElement({
      title: ["FLIP", "GROUP"],
      subtitle: "Capital · Constech · Construcción · Perforaciones",
      accent: "#E86A1A",
      tag: "HOLDING",
      glowPosition: "left",
    }),
    size
  )
}
