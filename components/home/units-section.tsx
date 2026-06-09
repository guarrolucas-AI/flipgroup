"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, TrendingUp, Code2, HardHat, Drill } from "lucide-react"

const UNITS = [
  {
    id: "01",
    title: "Capital",
    tagline: "Invertí en infraestructura real con retornos reales.",
    description:
      "Plataforma de crowdfunding inmobiliario con transparencia total. Proyectos de flipping con rentabilidades fijas del 14% anual o 1% mensual. Contratos digitales, panel de seguimiento en tiempo real y certificaciones de avance.",
    accent: "#C9A84C",
    accentDim: "rgba(201,168,76,0.08)",
    accentBorder: "rgba(201,168,76,0.2)",
    icon: TrendingUp,
    metrics: [
      { label: "Rentabilidad anual", value: "14%", mono: true },
      { label: "Inversión mínima", value: "USD 10K", mono: true },
      { label: "Proyectos activos", value: "3+", mono: false },
    ],
    cta: "Ver plataforma",
    href: "https://invest.flipgroup.com.ar",
    external: true,
    tag: "Fintech · PropTech",
  },
  {
    id: "02",
    title: "Constech",
    tagline: "Software propietario que digitaliza la obra.",
    description:
      "PintoCert: sistema de certificación digital de avance de obra. Presupuestos automatizados, cómputos por IA, certificados por item y seguimiento fotográfico geolocalizalizado. El único software construido por constructores, para constructores.",
    accent: "#00C4A7",
    accentDim: "rgba(0,196,167,0.06)",
    accentBorder: "rgba(0,196,167,0.2)",
    icon: Code2,
    metrics: [
      { label: "Tiempo de certificación", value: "−80%", mono: true },
      { label: "Disputas de obra", value: "0", mono: true },
      { label: "Obras certificadas", value: "20+", mono: false },
    ],
    cta: "Explorar Constech",
    href: "/constech",
    external: false,
    tag: "SaaS · ConsTech",
  },
  {
    id: "03",
    title: "Obras",
    tagline: "Ejecución industrial de alta complejidad.",
    description:
      "Pintura Airless industrial, impermeabilización técnica, trabajos en altura, HVAC para grandes superficies y pisos industriales epóxicos. Operamos donde otros no llegan: plantas industriales, depósitos, edificios de altura y complejos logísticos.",
    accent: "#FF6B35",
    accentDim: "rgba(255,107,53,0.06)",
    accentBorder: "rgba(255,107,53,0.2)",
    icon: HardHat,
    metrics: [
      { label: "m² ejecutados/año", value: "50K+", mono: true },
      { label: "Altura máx. operativa", value: "80m", mono: true },
      { label: "Tiempo de respuesta", value: "24hs", mono: false },
    ],
    cta: "Ver servicios",
    href: "/obras",
    external: false,
    tag: "Industrial · B2B",
  },
  {
    id: "04",
    title: "Perforaciones HB",
    tagline: "Infraestructura subterránea de precisión.",
    description:
      "Perforaciones direccionales y verticales para infraestructura de servicios, pozos de agua, extracción y monitoreo geotécnico. Tecnología de punta aplicada al subsuelo, operaciones en toda la región.",
    accent: "#4ADE80",
    accentDim: "rgba(74,222,128,0.06)",
    accentBorder: "rgba(74,222,128,0.2)",
    icon: Drill,
    metrics: [
      { label: "Profundidad máxima", value: "400m", mono: true },
      { label: "Proyectos activos", value: "5+", mono: true },
      { label: "Regiones operativas", value: "8", mono: false },
    ],
    cta: "Perforaciones HB →",
    href: "https://www.perforacioneshb.com.ar",
    external: true,
    tag: "Mining · Infrastructure",
  },
]

function UnitCard({ unit, index }: { unit: typeof UNITS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-15%" })
  const isEven = index % 2 === 0
  const Icon = unit.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative grid grid-cols-1 lg:grid-cols-2 gap-0 border-b border-[#1E2E48] min-h-[480px]"
    >
      {/* Content side */}
      <div
        className={`relative flex flex-col justify-center p-10 lg:p-16 ${
          isEven ? "lg:order-1" : "lg:order-2"
        }`}
      >
        {/* Background accent */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(ellipse 60% 60% at ${isEven ? "80%" : "20%"} 50%, ${unit.accentDim} 0%, transparent 70%)`,
          }}
        />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <span className="text-[10px] font-mono text-[#455570] tracking-widest">{unit.id} / FLIP GROUP</span>
              <div className="flex items-center gap-2 mt-2">
                <span
                  className="text-[10px] font-mono px-2 py-0.5 rounded border"
                  style={{ color: unit.accent, borderColor: unit.accentBorder, background: unit.accentDim }}
                >
                  {unit.tag}
                </span>
              </div>
            </div>
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ background: unit.accentDim, border: `1px solid ${unit.accentBorder}` }}
            >
              <Icon className="w-5 h-5" style={{ color: unit.accent }} />
            </div>
          </div>

          {/* Title */}
          <h2
            className="text-5xl lg:text-6xl font-bold leading-none mb-4"
            style={{ color: unit.accent }}
          >
            {unit.title}
          </h2>
          <p className="text-xl font-medium text-[#EDF2F7] mb-6 leading-snug">{unit.tagline}</p>
          <p className="text-[#8896A8] leading-relaxed mb-10 max-w-lg">{unit.description}</p>

          {/* CTA */}
          <Link
            href={unit.href}
            target={unit.external ? "_blank" : undefined}
            className="inline-flex items-center gap-2 text-sm font-bold group"
            style={{ color: unit.accent }}
          >
            {unit.cta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Metrics side */}
      <div
        className={`relative flex flex-col justify-center p-10 lg:p-16 border-[#1E2E48] ${
          isEven ? "lg:order-2 lg:border-l" : "lg:order-1 lg:border-r"
        }`}
        style={{ background: unit.accentDim }}
      >
        <div className="blueprint-grid-sm absolute inset-0 opacity-30" />

        <div className="relative z-10 space-y-10">
          {unit.metrics.map((metric) => (
            <div key={metric.label}>
              <div
                className={`text-5xl font-bold mb-2 leading-none ${metric.mono ? "tabular" : ""}`}
                style={{ color: unit.accent }}
              >
                {metric.value}
              </div>
              <p className="text-sm text-[#8896A8]">{metric.label}</p>
              <div className="mt-3 h-px" style={{ background: `linear-gradient(to right, ${unit.accent}40, transparent)` }} />
            </div>
          ))}
        </div>

        {/* Corner decoration */}
        <div
          className="absolute top-6 right-6 w-16 h-16 opacity-20"
          style={{
            borderRight: `1px solid ${unit.accent}`,
            borderTop: `1px solid ${unit.accent}`,
          }}
        />
        <div
          className="absolute bottom-6 left-6 w-16 h-16 opacity-20"
          style={{
            borderLeft: `1px solid ${unit.accent}`,
            borderBottom: `1px solid ${unit.accent}`,
          }}
        />
      </div>
    </motion.div>
  )
}

export function UnitsSection() {
  return (
    <section className="border-t border-[#1E2E48]">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between gap-8">
          <div>
            <span className="text-[11px] font-mono tracking-[0.3em] text-[#455570] uppercase">
              Unidades de negocio
            </span>
            <h2
              className="mt-3 text-4xl md:text-5xl font-bold text-[#EDF2F7] leading-tight"
            >
              Un holding,
              <br />
              <span className="text-gradient-orange">cuatro frentes.</span>
            </h2>
          </div>
          <p className="hidden md:block max-w-xs text-[#8896A8] text-sm leading-relaxed">
            Capital, tecnología y ejecución trabajan de forma integrada. Cada unidad potencia a las demás.
          </p>
        </div>
      </div>

      {/* Unit cards */}
      {UNITS.map((unit, i) => (
        <UnitCard key={unit.id} unit={unit} index={i} />
      ))}
    </section>
  )
}
