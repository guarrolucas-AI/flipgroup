import { ImageResponse } from "next/og"
import { makeOGElement } from "@/lib/og"

export const runtime = "edge"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OG() {
  return new ImageResponse(
    makeOGElement({
      title: ["Software que", "certifica obra."],
      subtitle: "Certificados de avance automáticos. Sin papeles. En tiempo real.",
      accent: "#00C4A7",
      tag: "FLIP CONSTECH",
      glowPosition: "center",
    }),
    size
  )
}
