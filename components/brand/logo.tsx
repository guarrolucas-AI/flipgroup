import { cn } from "@/lib/utils"

/* ── Mark-only SVG ──────────────────────────────────────────────── */
export function FlipMark({
  size = 40,
  className,
}: {
  size?: number
  className?: string
}) {
  return (
    <svg
      width={size}
      height={Math.round(size * 1.2)}
      viewBox="0 0 40 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Vertical stem — white */}
      <rect x="0" y="0" width="7" height="48" fill="#EDF2F7" />
      {/* Top horizontal bar — white */}
      <rect x="7" y="0" width="27" height="7" fill="#EDF2F7" />
      {/* Mid bar — brand orange */}
      <rect x="7" y="20" width="20" height="6" fill="#E86A1A" />

      {/* HUD corner — top right (engineering bracket) */}
      <path
        d="M30 1 L39 1 L39 11"
        stroke="#E86A1A"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      {/* HUD corner — bottom left (subtle) */}
      <path
        d="M1 37 L1 47 L11 47"
        stroke="#E86A1A"
        strokeWidth="1.5"
        strokeLinecap="square"
        fill="none"
        opacity="0.4"
      />
    </svg>
  )
}

/* ── Full lockup: mark + wordmark ───────────────────────────────── */
const SIZES = {
  sm: { mark: 26, flip: "text-xs",  group: "text-[8px]",  gap: "gap-2.5" },
  md: { mark: 34, flip: "text-sm",  group: "text-[9px]",  gap: "gap-3"   },
  lg: { mark: 52, flip: "text-2xl", group: "text-[12px]", gap: "gap-4"   },
}

export function FlipGroupLogo({
  size = "md",
  className,
  markOnly = false,
}: {
  size?: "sm" | "md" | "lg"
  className?: string
  markOnly?: boolean
}) {
  const s = SIZES[size]

  return (
    <div className={cn("flex items-center", s.gap, className)}>
      <FlipMark size={s.mark} />
      {!markOnly && (
        <div className="flex flex-col leading-none gap-[3px]">
          <span className={cn("text-[#EDF2F7] font-bold tracking-[0.2em]", s.flip)}>
            FLIP
          </span>
          <span className={cn("text-[#455570] tracking-[0.45em] uppercase font-mono", s.group)}>
            Group
          </span>
        </div>
      )}
    </div>
  )
}
