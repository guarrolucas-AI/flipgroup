"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

const STATS = [
  { value: 12, suffix: "+", label: "Proyectos ejecutados", color: "#E86A1A" },
  { value: 2.8, suffix: "MM USD", label: "Capital gestionado", color: "#C9A84C", decimals: 1 },
  { value: 8, suffix: "+", label: "Años de trayectoria", color: "#00C4A7" },
  { value: 47, suffix: "+", label: "Clientes corporativos", color: "#3B9EFF" },
]

function AnimatedCounter({
  value,
  suffix,
  decimals = 0,
}: {
  value: number
  suffix: string
  decimals?: number
}) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-20%" })

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const start = performance.now()
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setDisplay(+(ease * value).toFixed(decimals))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, value, decimals])

  return (
    <span ref={ref} className="tabular">
      {display.toFixed(decimals)}
      {suffix}
    </span>
  )
}

export function StatsBar() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <section ref={ref} className="border-y border-[#1E2E48] bg-[#0D1320] relative overflow-hidden">
      {/* Scan line */}
      <div className="absolute inset-0 scan-line pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#1E2E48]">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col gap-1.5 px-8 py-8"
            >
              <div
                className="text-4xl md:text-5xl font-bold leading-none"
                style={{ color: stat.color, fontFamily: "var(--font-jetbrains)" }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              </div>
              <p className="text-sm text-[#8896A8]">{stat.label}</p>
              <div className="mt-2 h-px w-8" style={{ background: stat.color, opacity: 0.4 }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
