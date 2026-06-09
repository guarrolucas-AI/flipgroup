"use client"

import { useEffect, useRef, useState } from "react"
import dynamic from "next/dynamic"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowDown, ExternalLink } from "lucide-react"

const HeroScene = dynamic(() => import("./hero-scene"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-[#070A0F]" />,
})

const UNITS = [
  { id: "01", label: "Capital",       sub: "Crowdfunding inmobiliario", color: "#C9A84C", href: "/capital" },
  { id: "02", label: "Constech",      sub: "Software de obra",          color: "#00C4A7", href: "/constech" },
  { id: "03", label: "Obras",         sub: "Ejecución industrial",      color: "#FF6B35", href: "/obras" },
  { id: "04", label: "Perforaciones", sub: "Infraestructura base",      color: "#4ADE80", href: "/obras/perforaciones" },
]

function Coordinates() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handler, { passive: true })
    return () => window.removeEventListener("mousemove", handler)
  }, [])
  return (
    <span className="font-mono text-[10px] text-[#455570] select-none">
      {String(pos.x).padStart(4, "0")},{String(pos.y).padStart(4, "0")}
    </span>
  )
}

export function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex flex-col overflow-hidden">

      {/* ── 3D Canvas — full background ── */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      {/* ── Blueprint grid overlay ── */}
      <div className="absolute inset-0 z-0 blueprint-grid opacity-40 pointer-events-none" />

      {/* ── Left darkness gradient — keeps text legible ── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, #070A0F 38%, rgba(7,10,15,0.85) 55%, rgba(7,10,15,0.3) 75%, transparent 100%)",
        }}
      />

      {/* ── Bottom fade ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #070A0F)" }}
      />

      {/* ── HUD decorations ── */}
      <div className="absolute top-20 left-6 z-20 text-[10px] font-mono text-[#455570] select-none">
        <Coordinates />
      </div>
      <div className="absolute top-20 right-6 z-20 text-[10px] font-mono text-[#455570] select-none">
        SYS:ONLINE
      </div>

      {/* ── Main content — left aligned ── */}
      <div className="relative z-20 flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-16 max-w-3xl">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 flex items-center gap-3"
        >
          <div className="h-px w-8 bg-[#E86A1A]" />
          <span className="text-[11px] font-mono tracking-[0.3em] text-[#E86A1A] uppercase">
            Infrastructure · Technology · Capital
          </span>
        </motion.div>

        {/* Logo mark + Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Logo mark */}
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-10 h-10 flex-shrink-0">
              <div className="absolute inset-0 border-2 border-[#E86A1A] rounded rotate-[8deg] opacity-50" />
              <div className="absolute inset-0 border-2 border-[#E86A1A] rounded -rotate-[8deg] opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[#E86A1A] font-bold text-base tracking-widest">F</span>
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[#EDF2F7] text-sm font-bold tracking-[0.2em]">FLIP</span>
              <span className="text-[#8896A8] text-[10px] tracking-[0.35em] uppercase">GROUP</span>
            </div>
          </div>

          {/* Main title */}
          <h1
            className="text-[clamp(5rem,11vw,10rem)] font-bold leading-none tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            <span className="block text-[#EDF2F7]">FLIP</span>
            <span
              className="block"
              style={{ WebkitTextStroke: "2px #E86A1A", color: "transparent" }}
            >
              GROUP
            </span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 text-base md:text-lg text-[#8896A8] max-w-lg leading-relaxed"
        >
          El primer holding tecnológico de infraestructura industrial de Argentina.
          <br />
          <span className="text-[#EDF2F7] font-medium">Capital, software y ejecución</span>{" "}
          bajo una sola marca.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-start gap-4"
        >
          <Link
            href="/capital"
            className="group flex items-center gap-2 px-8 py-4 bg-[#E86A1A] text-[#070A0F] text-sm font-bold tracking-wide rounded hover:bg-[#FF8C3A] transition-all duration-200 shadow-lg shadow-[#E86A1A]/25"
          >
            Ver oportunidades
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link
            href="https://invest.flipgroup.com.ar"
            target="_blank"
            className="flex items-center gap-2 px-8 py-4 text-sm font-mono font-bold tracking-widest text-[#EDF2F7] border border-[#1E2E48] rounded hover:border-[#3B9EFF]/50 hover:text-[#3B9EFF] transition-all duration-200"
          >
            CLIENT OS <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      </div>

      {/* ── Business unit strip — bottom bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.0 }}
        className="relative z-20 border-t border-[#1E2E48]/80"
        style={{ background: "rgba(7,10,15,0.9)" }}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-[#1E2E48]/60">
          {UNITS.map((unit) => (
            <Link
              key={unit.id}
              href={unit.href}
              className="group flex flex-col gap-1 px-6 py-5 hover:bg-[#0F1520] transition-colors"
            >
              <span className="text-[10px] font-mono text-[#455570]">{unit.id}</span>
              <span
                className="text-sm font-bold tracking-wide transition-colors group-hover:opacity-80"
                style={{ color: unit.color }}
              >
                {unit.label}
              </span>
              <span className="text-[11px] text-[#455570] group-hover:text-[#8896A8] transition-colors">
                {unit.sub}
              </span>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute right-6 bottom-28 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] font-mono tracking-widest text-[#455570] rotate-90 mb-2 select-none">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-[#455570]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
