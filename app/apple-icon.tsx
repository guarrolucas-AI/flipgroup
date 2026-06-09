import { ImageResponse } from "next/og"

export const runtime = "edge"
export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "#070A0F",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Orange corner accent — top right */}
        <div style={{ position: "absolute", top: 16, right: 16, width: 18, height: 2, background: "#E86A1A" }} />
        <div style={{ position: "absolute", top: 16, right: 16, width: 2, height: 18, background: "#E86A1A" }} />
        {/* Orange corner accent — bottom left */}
        <div style={{ position: "absolute", bottom: 16, left: 16, width: 18, height: 2, background: "rgba(232,106,26,0.4)" }} />
        <div style={{ position: "absolute", bottom: 16, left: 16, width: 2, height: 18, background: "rgba(232,106,26,0.4)" }} />

        {/* F mark — scaled up */}
        {/* Vertical stem */}
        <div style={{ position: "absolute", left: 44, top: 36, width: 20, height: 108, background: "#EDF2F7" }} />
        {/* Top bar */}
        <div style={{ position: "absolute", left: 44, top: 36, width: 80, height: 20, background: "#EDF2F7" }} />
        {/* Mid bar — orange */}
        <div style={{ position: "absolute", left: 44, top: 88, width: 60, height: 16, background: "#E86A1A" }} />
      </div>
    ),
    size
  )
}
