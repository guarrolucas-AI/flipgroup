"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Wind, Thermometer, Layers, ArrowUpRight, Drill } from "lucide-react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

const ORANGE = "#FF6B35"
const ORANGE_BORDER = "rgba(255,107,53,0.2)"
const ORANGE_BG = "rgba(255,107,53,0.06)"

const SERVICES = [
  {
    icon: Wind,
    title: "Pintura Airless",
    tag: "Industrial",
    desc: "Aplicación de pintura con sistemas airless de alta presión. Ideal para grandes superficies industriales, depósitos, naves y fachadas. Mayor rendimiento, acabado uniforme y tiempo de ejecución reducido.",
    specs: ["Pintura epoxi y poliuretano", "Superficies de hasta 10.000 m²", "Certificación de espesor de capa"],
  },
  {
    icon: Thermometer,
    title: "HVAC",
    tag: "Climatización",
    desc: "Diseño, suministro e instalación de sistemas de calefacción, ventilación y aire acondicionado para industria y comercio. Cálculo térmico y planos de ingeniería incluidos.",
    specs: ["Ductería en chapa y espiro", "Equipos industriales y comerciales", "Mantenimiento preventivo y correctivo"],
  },
  {
    icon: Layers,
    title: "Pisos industriales",
    tag: "Construcción",
    desc: "Ejecución de pisos de hormigón pulido, epóxico y poliuretánico para plantas industriales, frigoríficos, depósitos y centros logísticos. Resistencia química y mecánica certificada.",
    specs: ["Hormigón H-30 vibrado", "Tratamiento superficial endurecedor", "Resistencia a cargas pesadas"],
  },
  {
    icon: ArrowUpRight,
    title: "Trabajos en altura",
    tag: "Especializado",
    desc: "Pintura, mantenimiento y reparación en estructuras elevadas utilizando técnicas de acceso por cuerdas (rope access) y andamiaje. Personal certificado en seguridad en altura.",
    specs: ["Certificación IRAM en altura", "Silos, tanques y torres", "Sin necesidad de andamio tradicional"],
  },
]

const PROCESS = [
  { n: "01", title: "Relevamiento", desc: "Visitamos la obra o instalación para entender el alcance real del trabajo." },
  { n: "02", title: "Presupuesto", desc: "Cotización detallada con materiales, mano de obra y plazos de ejecución." },
  { n: "03", title: "Planificación", desc: "Cronograma de trabajo coordinado con tu equipo para minimizar interrupciones." },
  { n: "04", title: "Ejecución", desc: "Trabajo en campo con equipos propios y tecnología de proceso adecuada." },
  { n: "05", title: "Certificación", desc: "Entrega de certificados de obra con mediciones y control de calidad documentado." },
]

export function ObrasPage() {
  const servicesRef = useRef<HTMLElement>(null)
  const processRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLElement>(null)
  const servicesInView = useInView(servicesRef, { once: true, margin: "-10%" })
  const processInView = useInView(processRef, { once: true, margin: "-10%" })
  const ctaInView = useInView(ctaRef, { once: true, margin: "-10%" })

  return (
    <>
      <Navbar />
      <main className="flex-1">

        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="relative min-h-[70vh] flex items-center pt-24 pb-20 overflow-hidden">
          <div className="absolute inset-0 blueprint-grid opacity-20" />
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 60% 80% at 0% 100%, rgba(255,107,53,0.08) 0%, transparent 60%)" }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#070A0F]" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-[11px] font-mono tracking-[0.3em] text-[#455570] uppercase">
                  FLIP Obras
                </span>
                <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-[#EDF2F7]">
                  Infraestructura
                  <br />
                  <span style={{ color: ORANGE }}>industrial.</span>
                </h1>
                <p className="mt-6 text-lg text-[#8896A8] leading-relaxed max-w-2xl">
                  Equipos propios, tecnología de proceso y experiencia en obra industrial.
                  <span className="text-[#EDF2F7]"> Ejecutamos lo que otros no pueden.</span>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/contacto?tipo=obras"
                  className="flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold tracking-wider rounded-lg transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
                  style={{ background: ORANGE, color: "#070A0F" }}
                >
                  Solicitar presupuesto
                </Link>
                <Link
                  href="/obras/perforaciones"
                  className="flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-[#EDF2F7] rounded-lg border border-[#1E2E48] hover:border-[rgba(255,107,53,0.4)] hover:bg-[rgba(255,107,53,0.04)] transition-all duration-300"
                >
                  <Drill className="w-4 h-4" />
                  Ver Perforaciones
                </Link>
              </motion.div>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-12 flex flex-wrap gap-8"
              >
                {[
                  { v: "10.000 m²", l: "Superficie promedio por proyecto" },
                  { v: "8+", l: "Años de experiencia" },
                  { v: "4", l: "Unidades especializadas" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="tabular text-2xl font-bold text-[#EDF2F7]">{s.v}</div>
                    <div className="text-xs text-[#455570] mt-1">{s.l}</div>
                  </div>
                ))}
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
              <span className="text-[11px] font-mono tracking-[0.3em] text-[#455570] uppercase">Servicios</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#EDF2F7]">
                Cuatro frentes.
                <br />
                <span style={{ color: ORANGE }}>Un solo equipo.</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {SERVICES.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * i }}
                  className="p-8 rounded-xl border border-[#1E2E48] hover:border-[rgba(255,107,53,0.3)] bg-[#131D2E] hover:bg-[#1A2640] transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: ORANGE_BG }}
                    >
                      <s.icon className="w-5 h-5" style={{ color: ORANGE }} />
                    </div>
                    <div>
                      <div
                        className="text-[9px] font-mono tracking-widest mb-1"
                        style={{ color: ORANGE }}
                      >
                        {s.tag}
                      </div>
                      <h3 className="text-lg font-bold text-[#EDF2F7] group-hover:text-[#FF6B35] transition-colors">
                        {s.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-[#8896A8] leading-relaxed mb-6">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-2 text-xs text-[#455570]">
                        <span style={{ color: ORANGE }}>▸</span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Perforaciones callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6"
            >
              <Link
                href="/obras/perforaciones"
                className="flex items-center justify-between p-6 rounded-xl border transition-all duration-300 group"
                style={{ borderColor: "rgba(74,222,128,0.2)", background: "rgba(74,222,128,0.03)" }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(74,222,128,0.08)" }}
                  >
                    <Drill className="w-5 h-5 text-[#4ADE80]" />
                  </div>
                  <div>
                    <div className="text-[9px] font-mono tracking-widest text-[#4ADE80] mb-1">SUB-UNIDAD</div>
                    <h3 className="text-lg font-bold text-[#EDF2F7]">Perforaciones</h3>
                    <p className="text-sm text-[#8896A8] mt-1">Perforación horizontal, sondeos y pilotes. Exploración de terreno.</p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#4ADE80] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── PROCESO ──────────────────────────────────────── */}
        <section ref={processRef} className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <span className="text-[11px] font-mono tracking-[0.3em] text-[#455570] uppercase">Proceso</span>
              <h2 className="mt-3 text-4xl font-bold text-[#EDF2F7]">
                De la consulta a la{" "}
                <span style={{ color: ORANGE }}>entrega.</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border border-[#1E2E48] rounded-2xl overflow-hidden">
              {PROCESS.map((step, i) => (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={processInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="relative p-6 border-r border-b md:border-b-0 border-[#1E2E48] last:border-r-0 hover:bg-[#131D2E] transition-colors group"
                >
                  <span className="text-[10px] font-mono text-[#455570] mb-3 block">{step.n}</span>
                  <h3 className="text-sm font-bold mb-2 group-hover:text-[#FF6B35] transition-colors" style={{ color: ORANGE }}>
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#8896A8] leading-relaxed">{step.desc}</p>
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{ background: ORANGE }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section ref={ctaRef} className="py-24 bg-[#0D1320] border-t border-[#1E2E48]">
          <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#EDF2F7] mb-6">
                ¿Tenés un proyecto?
                <br />
                <span style={{ color: ORANGE }}>Hablemos.</span>
              </h2>
              <p className="text-[#8896A8] mb-10 text-lg">
                Relevamiento sin cargo en el área metropolitana de Buenos Aires.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contacto?tipo=obras"
                  className="inline-flex items-center justify-center gap-2 px-10 py-5 text-sm font-bold tracking-wider rounded-xl transition-all duration-300 hover:opacity-90 hover:scale-105"
                  style={{ background: ORANGE, color: "#070A0F" }}
                >
                  Solicitar presupuesto
                </Link>
                <a
                  href="https://wa.me/5491166614164"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-10 py-5 text-sm font-medium text-[#EDF2F7] rounded-xl border border-[#1E2E48] hover:border-[rgba(255,107,53,0.4)] transition-all duration-300"
                >
                  WhatsApp directo
                </a>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
