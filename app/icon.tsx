import { ImageResponse } from "next/og"

export const runtime = "edge"
export const size = { width: 32, height: 32 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#070A0F",
          display: "flex",
          position: "relative",
        }}
      >
        {/* Vertical stem */}
        <div style={{ position: "absolute", left: 7, top: 5, width: 4, height: 22, background: "#EDF2F7" }} />
        {/* Top bar */}
        <div style={{ position: "absolute", left: 7, top: 5, width: 15, height: 4, background: "#EDF2F7" }} />
        {/* Mid bar — orange */}
        <div style={{ position: "absolute", left: 7, top: 14, width: 11, height: 3, background: "#E86A1A" }} />
        {/* Top-right corner dot */}
        <div style={{ position: "absolute", right: 6, top: 6, width: 3, height: 3, background: "#E86A1A" }} />
      </div>
    ),
    size
  )
}
