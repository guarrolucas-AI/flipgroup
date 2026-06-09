"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ExternalLink, ChevronDown, Shield, TrendingUp, Eye } from "lucide-react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { cn } from "@/lib/utils"

const GOLD = "#C9A84C"
const GOLD_BORDER = "rgba(201,168,76,0.2)"
const GOLD_BG = "rgba(201,168,76,0.06)"

const FAQS = [
  {
    q: "¿Cuál es la tasa de retorno?",
    a: "Los proyectos activos ofrecen entre 12% y 18% TNA en dólares, dependiendo del tipo de obra, plazo y monto invertido. La tasa se fija al momento de la inversión y no varía durante el plazo.",
  },
  {
    q: "¿Cuál es la inversión mínima?",
    a: "El mínimo es USD 10.000 por proyecto. Para acceder a condiciones preferenciales y prioridad en nuevos proyectos, el mínimo es USD 50.000.",
  },
  {
    q: "¿Cómo está respaldada mi inversión?",
    a: "Cada inversión está respaldada por el contrato de obra correspondiente. Los fondos se aplican directamente a la ejecución del proyecto, con avance certificado en tiempo real por Constech.",
  },
  {
    q: "¿Cuánto dura la inversión?",
    a: "Los plazos varían entre 3 y 12 meses según el proyecto. El término exacto se especifica en el contrato antes de firmar.",
  },
  {
    q: "¿Cómo cobro mi retorno?",
    a: "Al vencimiento del plazo, el capital más el retorno se acredita en tu cuenta en dólares o en pesos al tipo de cambio oficial, según tu preferencia configurada en la plataforma.",
  },
  {
    q: "¿Esto está regulado?",
    a: "FLIP Capital SAS opera bajo normativa argentina vigente de financiamiento colectivo. Los contratos están confeccionados con asesoramiento legal y son ejecutables bajo la jurisdicción de la Ciudad Autónoma de Buenos Aires.",
  },
]

const PILLARS = [
  {
    icon: Shield,
    title: "Activos reales",
    desc: "No es fintech. No es cripto. Cada inversión está respaldada por infraestructura física en construcción: pisos, climatización, pintura industrial.",
  },
  {
    icon: TrendingUp,
    title: "Retorno fijo en USD",
    desc: "La tasa se fija antes de firmar y no cambia. Sin volatilidad de mercado, sin sorpresas. Entre 12% y 18% TNA según el proyecto.",
  },
  {
    icon: Eye,
    title: "Transparencia total",
    desc: "El software Constech certifica el avance de obra en tiempo real. Ves exactamente cómo se usa tu capital, etapa por etapa.",
  },
]

const STEPS = [
  { n: "01", title: "Registro", desc: "Creá tu cuenta en la plataforma en menos de 2 minutos.", icon: "◆" },
  { n: "02", title: "Selección", desc: "Explorá proyectos activos con sus especificaciones, plazos y tasas.", icon: "⬡" },
  { n: "03", title: "Firma digital", desc: "Revisá y firmá el contrato de inversión de forma 100% online.", icon: "▲" },
  { n: "04", title: "Seguimiento", desc: "Monitoreá el avance de tu proyecto en tiempo real vía Constech.", icon: "●" },
  { n: "05", title: "Retorno", desc: "Recibí tu capital más el retorno acordado al vencimiento del plazo.", icon: "◆" },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-[#1E2E48]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-sm font-medium text-[#EDF2F7] group-hover:text-[#C9A84C] transition-colors pr-4">
          {q}
        </span>
        <ChevronDown
          className={cn(
            "w-4 h-4 text-[#455570] flex-shrink-0 transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p className="pb-5 text-sm text-[#8896A8] leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function CapitalPage() {
  const pillarsRef = useRef<HTMLElement>(null)
  const stepsRef = useRef<HTMLElement>(null)
  const faqRef = useRef<HTMLElement>(null)
  const pillarsInView = useInView(pillarsRef, { once: true, margin: "-10%" })
  const stepsInView = useInView(stepsRef, { once: true, margin: "-10%" })
  const faqInView = useInView(faqRef, { once: true, margin: "-10%" })

  return (
    <>
      <Navbar />
      <main className="flex-1">

        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden">
          <div className="absolute inset-0 blueprint-grid opacity-25" />
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 80% 60% at 5% 50%, rgba(201,168,76,0.07) 0%, transparent 60%)" }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#070A0F]" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Copy */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="text-[11px] font-mono tracking-[0.3em] text-[#455570] uppercase">
                    FLIP Capital
                  </span>
                  <h1 className="mt-4 text-5xl md:text-6xl lg:text-[5rem] font-bold leading-[1.05] text-[#EDF2F7]">
                    Capital que
                    <br />
                    <span style={{ color: GOLD }}>construye.</span>
                  </h1>
                  <p className="mt-6 text-lg text-[#8896A8] leading-relaxed max-w-lg">
                    Invertí en proyectos de infraestructura industrial con{" "}
                    <span className="text-[#EDF2F7]">retornos fijos en dólares</span>.
                    Respaldado por activos reales, visible en tiempo real.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-10 flex flex-col sm:flex-row gap-4"
                >
                  <Link
                    href="https://invest.flipgroup.com.ar"
                    target="_blank"
                    className="flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold tracking-wider rounded-lg transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
                    style={{ background: GOLD, color: "#070A0F" }}
                  >
                    Ver proyectos activos
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contacto"
                    className="flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-[#EDF2F7] rounded-lg border border-[#1E2E48] hover:border-[rgba(201,168,76,0.4)] hover:bg-[rgba(201,168,76,0.04)] transition-all duration-300"
                  >
                    Hablar con un asesor
                  </Link>
                </motion.div>
              </div>

              {/* Stats card */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  className="relative p-8 rounded-2xl border blueprint-grid-sm scan-line hud-corner"
                  style={{ borderColor: GOLD_BORDER, background: "rgba(13,19,32,0.85)" }}
                >
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[10px] font-mono tracking-[0.25em] text-[#455570] uppercase">
                      Rendimiento proyectado
                    </span>
                    <span className="text-[10px] font-mono text-[#455570]">2026</span>
                  </div>

                  <div className="mb-8">
                    <div className="tabular text-[4.5rem] font-bold leading-none" style={{ color: GOLD }}>
                      12–18%
                    </div>
                    <div className="mt-2 text-sm text-[#8896A8]">TNA en dólares</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[#1E2E48]">
                    {[
                      { v: "USD 10K", l: "Mínimo por proyecto" },
                      { v: "3–12 m", l: "Plazo por proyecto" },
                      { v: "12+", l: "Proyectos financiados" },
                      { v: "USD 2.8M", l: "Capital gestionado" },
                    ].map((s) => (
                      <div key={s.l}>
                        <div className="tabular text-2xl font-bold text-[#EDF2F7]">{s.v}</div>
                        <div className="text-[11px] text-[#455570] mt-1">{s.l}</div>
                      </div>
                    ))}
                  </div>

                  <p className="mt-6 text-[10px] text-[#455570] leading-relaxed">
                    * Tasa referencial. La tasa exacta se especifica en el contrato de cada proyecto.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── POR QUÉ FLIP CAPITAL ─────────────────────────── */}
        <section ref={pillarsRef} className="py-24 bg-[#0D1320] border-y border-[#1E2E48]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <span className="text-[11px] font-mono tracking-[0.3em] text-[#455570] uppercase">Por qué elegirnos</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#EDF2F7]">
                Inversión real.{" "}
                <span style={{ color: GOLD }}>Sin volatilidad.</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {PILLARS.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.12 * i }}
                  className="p-8 rounded-xl border border-[#1E2E48] hover:border-[rgba(201,168,76,0.3)] bg-[#131D2E] hover:bg-[#1A2640] transition-all duration-300 group"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-6"
                    style={{ background: GOLD_BG }}
                  >
                    <p.icon className="w-5 h-5" style={{ color: GOLD }} />
                  </div>
                  <h3 className="text-lg font-bold text-[#EDF2F7] mb-3 group-hover:text-[#C9A84C] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#8896A8] leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CÓMO FUNCIONA ────────────────────────────────── */}
        <section ref={stepsRef} className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={stepsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <span className="text-[11px] font-mono tracking-[0.3em] text-[#455570] uppercase">El proceso</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#EDF2F7]">
                Cómo <span style={{ color: GOLD }}>invertís</span>
              </h2>
            </motion.div>

            <div className="relative">
              {/* Connecting line */}
              <div className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-px bg-[#1E2E48] z-0" />

              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8">
                {STEPS.map((step, i) => (
                  <motion.div
                    key={step.n}
                    initial={{ opacity: 0, y: 30 }}
                    animate={stepsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * i }}
                    className="flex flex-col items-center text-center gap-4 relative z-10"
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center border-2 text-lg"
                      style={{ borderColor: GOLD, background: "#070A0F", color: GOLD }}
                    >
                      {step.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#455570]">{step.n}</span>
                      <h3 className="text-sm font-bold text-[#EDF2F7] mt-1 mb-2">{step.title}</h3>
                      <p className="text-xs text-[#8896A8] leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────── */}
        <section ref={faqRef} className="py-24 bg-[#0D1320] border-t border-[#1E2E48]">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={faqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <span className="text-[11px] font-mono tracking-[0.3em] text-[#455570] uppercase">FAQ</span>
              <h2 className="mt-3 text-4xl font-bold text-[#EDF2F7]">
                Todo lo que necesitás{" "}
                <span style={{ color: GOLD }}>saber</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={faqInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {FAQS.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── CTA FINAL ────────────────────────────────────── */}
        <section className="py-32 relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)" }}
          />
          <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#EDF2F7] mb-6">
              Empezá a
              <br />
              <span style={{ color: GOLD }}>invertir hoy.</span>
            </h2>
            <p className="text-[#8896A8] mb-10 text-lg">
              Proyectos activos disponibles. Registro en 2 minutos.
            </p>
            <Link
              href="https://invest.flipgroup.com.ar"
              target="_blank"
              className="inline-flex items-center gap-2 px-10 py-5 text-sm font-bold tracking-wider rounded-xl transition-all duration-300 hover:opacity-90 hover:scale-105"
              style={{ background: GOLD, color: "#070A0F" }}
            >
              Ir a la plataforma
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
