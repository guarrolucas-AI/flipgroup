import { ImageResponse } from "next/og"
import { makeOGElement } from "@/lib/og"

export const runtime = "edge"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OG() {
  return new ImageResponse(
    makeOGElement({
      title: ["Capital que", "construye."],
      subtitle: "Inversiones en infraestructura industrial con retornos fijos en dólares.",
      accent: "#C9A84C",
      tag: "FLIP CAPITAL",
      stat: { value: "12–18% TNA", label: "RENDIMIENTO EN USD" },
      glowPosition: "right",
    }),
    size
  )
}
