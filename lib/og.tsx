// Shared OG image element builder
// Used by all opengraph-image.tsx files

export interface OGProps {
  title: string[]        // array of lines — last line gets accent color
  subtitle: string
  accent: string
  tag: string
  stat?: { value: string; label: string }
  glowPosition?: "left" | "right" | "center"
}

export function makeOGElement({
  title,
  subtitle,
  accent,
  tag,
  stat,
  glowPosition = "left",
}: OGProps) {
  const glowX =
    glowPosition === "left" ? -200 : glowPosition === "right" ? 800 : 300
  const glowY = -150

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#070A0F",
        position: "relative",
        overflow: "hidden",
        fontFamily: "sans-serif",
      }}
    >
      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          left: glowX,
          top: glowY,
          width: 900,
          height: 900,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${accent}22 0%, transparent 65%)`,
        }}
      />

      {/* Blueprint grid — horizontal */}
      {[0, 105, 210, 315, 420, 525].map((y) => (
        <div
          key={y}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: y,
            height: 1,
            background: "rgba(30,46,72,0.35)",
          }}
        />
      ))}
      {/* Blueprint grid — vertical */}
      {[0, 120, 240, 360, 480, 600, 720, 840, 960, 1080].map((x) => (
        <div
          key={x}
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: x,
            width: 1,
            background: "rgba(30,46,72,0.35)",
          }}
        />
      ))}

      {/* Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "64px 80px",
          flex: 1,
          position: "relative",
        }}
      >
        {/* Header row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 44,
                height: 44,
                border: `2px solid #E86A1A`,
                borderRadius: 6,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#E86A1A",
                fontSize: 20,
                fontWeight: 700,
              }}
            >
              F
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <span
                style={{ color: "#EDF2F7", fontSize: 18, fontWeight: 700, letterSpacing: "0.15em" }}
              >
                FLIP GROUP
              </span>
              <span style={{ color: "#455570", fontSize: 11, letterSpacing: "0.3em" }}>
                HOLDING
              </span>
            </div>
          </div>

          {/* Tag */}
          <div
            style={{
              display: "flex",
              padding: "6px 16px",
              border: `1px solid ${accent}55`,
              borderRadius: 6,
              color: accent,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.25em",
              background: `${accent}11`,
            }}
          >
            {tag}
          </div>
        </div>

        {/* Title */}
        <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "center", gap: 4 }}>
          {title.map((line, i) => (
            <div
              key={i}
              style={{
                fontSize: 88,
                fontWeight: 700,
                lineHeight: 1.05,
                color: i === title.length - 1 ? accent : "#EDF2F7",
                letterSpacing: "-0.02em",
              }}
            >
              {line}
            </div>
          ))}
          <div
            style={{
              fontSize: 28,
              color: "#8896A8",
              marginTop: 16,
              lineHeight: 1.4,
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {stat ? (
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <span
                style={{ fontSize: 36, fontWeight: 700, color: accent, fontVariantNumeric: "tabular-nums" }}
              >
                {stat.value}
              </span>
              <span style={{ fontSize: 14, color: "#455570", letterSpacing: "0.1em" }}>
                {stat.label}
              </span>
            </div>
          ) : (
            <div />
          )}

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ height: 2, width: 40, background: accent }} />
            <span
              style={{ color: "#455570", fontSize: 16, fontFamily: "monospace", letterSpacing: "0.05em" }}
            >
              flipgroup.com.ar
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
