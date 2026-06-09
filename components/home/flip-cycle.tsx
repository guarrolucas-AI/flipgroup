"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const CYCLE_STEPS = [
  {
    id: "01",
    label: "Capital",
    desc: "Inversores financian proyectos de infraestructura real a través de la plataforma digital.",
    color: "#C9A84C",
    icon: "◆",
  },
  {
    id: "02",
    label: "Constech",
    desc: "Software propio certifica el avance, genera presupuestos automáticos y elimina incertidumbre.",
    color: "#00C4A7",
    icon: "⬡",
  },
  {
    id: "03",
    label: "Ejecución",
    desc: "Las unidades operativas ejecutan con tecnología propia: Airless, HVAC, Perforaciones, Pisos.",
    color: "#FF6B35",
    icon: "▲",
  },
  {
    id: "04",
    label: "Retorno",
    desc: "La obra concluida genera valor. El retorno fluye al inversor y se reinvierte en nuevos proyectos.",
    color: "#4ADE80",
    icon: "●",
  },
]

export function FlipCycle() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <section ref={ref} className="py-24 border-b border-[#1E2E48] bg-[#0D1320]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="text-[11px] font-mono tracking-[0.3em] text-[#455570] uppercase">
            El ciclo FLIP
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#EDF2F7]">
            Cómo funciona el <span className="text-gradient-blue">ecosistema</span>
          </h2>
          <p className="mt-4 text-[#8896A8] max-w-lg mx-auto">
            Capital, tecnología y obra forman un ciclo que se autopotencia. Cada proyecto cierra el loop y genera el siguiente.
          </p>
        </motion.div>

        {/* Cycle diagram */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#1E2E48] rounded-2xl overflow-hidden">
          {CYCLE_STEPS.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="relative p-8 border-r border-b md:border-b-0 border-[#1E2E48] last:border-r-0 flex flex-col gap-6 hover:bg-[#131D2E] transition-colors duration-300 group"
            >
              {/* Step number */}
              <div className="flex items-start justify-between">
                <span className="text-[11px] font-mono text-[#455570]">{step.id}</span>
                <span className="text-2xl" style={{ color: step.color }}>{step.icon}</span>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold mb-3" style={{ color: step.color }}>
                  {step.label}
                </h3>
                <p className="text-sm text-[#8896A8] leading-relaxed">{step.desc}</p>
              </div>

              {/* Arrow connector (desktop) */}
              {i < CYCLE_STEPS.length - 1 && (
                <div
                  className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-lg"
                  style={{ color: step.color }}
                >
                  →
                </div>
              )}

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ background: step.color }}
              />
            </motion.div>
          ))}
        </div>

        {/* Loop indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#E86A1A]" />
          <span className="text-[11px] font-mono text-[#455570] tracking-widest">
            ↺ CICLO CONTINUO
          </span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#4ADE80]" />
        </motion.div>
      </div>
    </section>
  )
}
