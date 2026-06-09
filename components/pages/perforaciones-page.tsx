"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Drill, Target, MapPin, Layers3, ChevronLeft } from "lucide-react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

const GREEN = "#4ADE80"
const GREEN_BORDER = "rgba(74,222,128,0.2)"
const GREEN_BG = "rgba(74,222,128,0.06)"

const SERVICES = [
  {
    icon: Drill,
    title: "Perforación horizontal dirigida",
    desc: "Instalación de cañerías y cables bajo infraestructura existente sin excavación a cielo abierto. Ideal para cruces de rutas, vías férreas y ríos.",
  },
  {
    icon: Target,
    title: "Pilotes y micropilotes",
    desc: "Fundaciones especiales para suelos comprometidos. Diseño y ejecución de micropilotes de inyección para refuerzo estructural y nuevas fundaciones.",
  },
  {
    icon: MapPin,
    title: "Sondeos geotécnicos",
    desc: "Estudio y caracterización del subsuelo mediante sondeos a percusión y rotación. Informe geotécnico completo para proyectos de fundación.",
  },
  {
    icon: Layers3,
    title: "Pozos de extracción",
    desc: "Perforación y entubado de pozos para extracción de agua, depresión de freática durante obras y monitoreo de nivel freático.",
  },
]

export function PerforacionesPage() {
  const servicesRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLElement>(null)
  const servicesInView = useInView(servicesRef, { once: true, margin: "-10%" })
  const ctaInView = useInView(ctaRef, { once: true, margin: "-10%" })

  return (
    <>
      <Navbar />
      <main className="flex-1">

        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="relative min-h-[65vh] flex items-center pt-24 pb-20 overflow-hidden">
          <div className="absolute inset-0 blueprint-grid opacity-20" />
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 60% 60% at 50% 80%, rgba(74,222,128,0.07) 0%, transparent 60%)" }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#070A0F]" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Link
                href="/obras"
                className="inline-flex items-center gap-1 text-sm text-[#455570] hover:text-[#8896A8] transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                Volver a Obras
              </Link>
            </motion.div>

            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-[11px] font-mono tracking-[0.3em] text-[#455570] uppercase">
                  FLIP Obras · Perforaciones
                </span>
                <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-[#EDF2F7]">
                  Debajo de
                  <br />
                  <span style={{ color: GREEN }}>todo.</span>
                </h1>
                <p className="mt-6 text-lg text-[#8896A8] leading-relaxed max-w-2xl">
                  Perforación horizontal dirigida, sondeos geotécnicos, pilotes y pozos.
                  <span className="text-[#EDF2F7]"> Equipo especializado con tecnología propia.</span>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/contacto?tipo=perforaciones"
                  className="flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold tracking-wider rounded-lg transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
                  style={{ background: GREEN, color: "#070A0F" }}
                >
                  Solicitar consulta técnica
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SERVICIOS ────────────────────────────────────── */}
        <section ref={servicesRef} className="py-24 bg-[#0D1320] border-t border-[#1E2E48]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <span className="text-[11px] font-mono tracking-[0.3em] text-[#455570] uppercase">Especialidades</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#EDF2F7]">
                Lo que hacemos
                <br />
                <span style={{ color: GREEN }}>bajo tierra.</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {SERVICES.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.12 * i }}
                  className="p-8 rounded-xl border border-[#1E2E48] hover:border-[rgba(74,222,128,0.3)] bg-[#131D2E] hover:bg-[#1A2640] transition-all duration-300 group"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-6"
                    style={{ background: GREEN_BG }}
                  >
                    <s.icon className="w-5 h-5" style={{ color: GREEN }} />
                  </div>
                  <h3 className="text-lg font-bold text-[#EDF2F7] mb-3 group-hover:text-[#4ADE80] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-[#8896A8] leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section ref={ctaRef} className="py-24">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl font-bold text-[#EDF2F7] mb-6">
                ¿Proyecto especial?
                <br />
                <span style={{ color: GREEN }}>Consultanos.</span>
              </h2>
              <p className="text-[#8896A8] mb-10 text-lg">
                Evaluamos cada proyecto de forma personalizada. Envíanos los planos o una descripción del trabajo.
              </p>
              <Link
                href="/contacto?tipo=perforaciones"
                className="inline-flex items-center gap-2 px-10 py-5 text-sm font-bold tracking-wider rounded-xl transition-all duration-300 hover:opacity-90 hover:scale-105"
                style={{ background: GREEN, color: "#070A0F" }}
              >
                Hablar con el equipo técnico
              </Link>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
