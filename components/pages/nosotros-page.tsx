"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

const MILESTONES = [
  {
    year: "2016",
    title: "Fundación",
    desc: "FLIP nace como empresa de servicios industriales especializados en pintura y acabados de alto rendimiento.",
    color: "#E86A1A",
  },
  {
    year: "2018",
    title: "Expansión",
    desc: "Incorporación de HVAC, pisos industriales y trabajos en altura. Primeros proyectos de gran escala.",
    color: "#C9A84C",
  },
  {
    year: "2020",
    title: "Perforaciones",
    desc: "Creación de la unidad de perforaciones horizontales y sondeos geotécnicos para el sector industrial.",
    color: "#4ADE80",
  },
  {
    year: "2022",
    title: "Constech",
    desc: "Inicio del desarrollo de software propio para certificación de avance de obra. Primeras implementaciones internas.",
    color: "#00C4A7",
  },
  {
    year: "2024",
    title: "FLIP Capital",
    desc: "Lanzamiento de la plataforma de inversiones inmobiliarias. Primeros inversores externos en proyectos de infraestructura.",
    color: "#C9A84C",
  },
  {
    year: "2026",
    title: "Holding",
    desc: "FLIP Group consolida las cuatro unidades bajo una estructura holding. Apertura a inversores internacionales.",
    color: "#E86A1A",
  },
]

const VALUES = [
  {
    icon: "◆",
    color: "#C9A84C",
    title: "Transparencia total",
    desc: "Cada peso invertido es trazable. Constech certifica el avance de obra en tiempo real para que inversores y clientes vean exactamente qué ocurre.",
  },
  {
    icon: "⬡",
    color: "#00C4A7",
    title: "Tecnología en campo",
    desc: "No tercerizamos procesos clave. Tenemos nuestro propio software, nuestros propios equipos y nuestro propio equipo de ingeniería.",
  },
  {
    icon: "▲",
    color: "#FF6B35",
    title: "Calidad sin concesiones",
    desc: "Trabajamos con materiales de primera línea y técnicas certificadas. La reputación de una empresa de construcción se mide en décadas.",
  },
  {
    icon: "●",
    color: "#4ADE80",
    title: "Ciclo virtuoso",
    desc: "Capital financia obra. Obra genera certificaciones. Certificaciones generan confianza. Confianza atrae más capital. Siempre cerramos el loop.",
  },
]

const TEAM = [
  {
    name: "Lucas G.",
    role: "CEO & Fundador",
    focus: "Estrategia corporativa y relaciones con inversores",
    initial: "L",
    color: "#E86A1A",
  },
  {
    name: "Equipo Ops",
    role: "Director de Operaciones",
    focus: "Ejecución de obra, logística y equipos de campo",
    initial: "O",
    color: "#FF6B35",
  },
  {
    name: "Equipo Tech",
    role: "CTO — Constech",
    focus: "Desarrollo de plataforma y certificación digital",
    initial: "T",
    color: "#00C4A7",
  },
  {
    name: "Equipo Capital",
    role: "Director de Inversiones",
    focus: "Estructuración de proyectos y relación con inversores",
    initial: "C",
    color: "#C9A84C",
  },
]

export function NosotrosPage() {
  const timelineRef = useRef<HTMLElement>(null)
  const valuesRef = useRef<HTMLElement>(null)
  const teamRef = useRef<HTMLElement>(null)
  const timelineInView = useInView(timelineRef, { once: true, margin: "-10%" })
  const valuesInView = useInView(valuesRef, { once: true, margin: "-10%" })
  const teamInView = useInView(teamRef, { once: true, margin: "-10%" })

  return (
    <>
      <Navbar />
      <main className="flex-1">

        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="relative min-h-[70vh] flex items-center pt-24 pb-20 overflow-hidden">
          <div className="absolute inset-0 blueprint-grid opacity-20" />
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(232,106,26,0.06) 0%, transparent 60%)" }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#070A0F]" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-[11px] font-mono tracking-[0.3em] text-[#455570] uppercase">
                  Quiénes somos
                </span>
                <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-[#EDF2F7]">
                  Construimos desde
                  <br />
                  <span className="text-gradient-orange">adentro hacia afuera.</span>
                </h1>
                <p className="mt-6 text-xl text-[#8896A8] leading-relaxed max-w-2xl mx-auto">
                  FLIP Group nació en la obra. A lo largo de una década desarrollamos tecnología propia,
                  capital propio y un ecosistema que cierra el loop entre construcción e inversión.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-12 flex flex-wrap gap-12 justify-center"
              >
                {[
                  { v: "10+", l: "Años en el mercado" },
                  { v: "4", l: "Unidades de negocio" },
                  { v: "USD 2.8M", l: "Capital gestionado" },
                  { v: "47+", l: "Inversores activos" },
                ].map((s) => (
                  <div key={s.l} className="text-center">
                    <div className="tabular text-3xl font-bold text-[#EDF2F7]">{s.v}</div>
                    <div className="text-xs text-[#455570] mt-1">{s.l}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── TIMELINE ─────────────────────────────────────── */}
        <section ref={timelineRef} className="py-24 bg-[#0D1320] border-t border-[#1E2E48]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={timelineInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <span className="text-[11px] font-mono tracking-[0.3em] text-[#455570] uppercase">Historia</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#EDF2F7]">
                Una{" "}
                <span className="text-gradient-orange">década</span>{" "}
                de construcción.
              </h2>
            </motion.div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#1E2E48] hidden md:block" />

              <div className="space-y-8">
                {MILESTONES.map((m, i) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, y: 30 }}
                    animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.08 * i }}
                    className={`relative grid md:grid-cols-2 gap-8 ${
                      i % 2 === 0 ? "" : "md:direction-rtl"
                    }`}
                  >
                    {/* Year dot (center) */}
                    <div
                      className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10"
                      style={{ borderColor: m.color, background: "#0D1320" }}
                    />

                    {/* Content card */}
                    <div className={i % 2 === 0 ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}>
                      <div
                        className="inline-block px-3 py-1 rounded font-mono text-xs font-bold mb-3"
                        style={{ background: `${m.color}18`, color: m.color }}
                      >
                        {m.year}
                      </div>
                      <h3 className="text-xl font-bold text-[#EDF2F7] mb-2">{m.title}</h3>
                      <p className="text-sm text-[#8896A8] leading-relaxed">{m.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── VALORES ──────────────────────────────────────── */}
        <section ref={valuesRef} className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <span className="text-[11px] font-mono tracking-[0.3em] text-[#455570] uppercase">Valores</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#EDF2F7]">
                Lo que nos{" "}
                <span className="text-gradient-blue">mueve.</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {VALUES.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * i }}
                  className="p-6 rounded-xl border border-[#1E2E48] bg-[#131D2E] hover:bg-[#1A2640] transition-all duration-300 group"
                >
                  <div
                    className="text-2xl mb-4"
                    style={{ color: v.color }}
                  >
                    {v.icon}
                  </div>
                  <h3 className="text-base font-bold text-[#EDF2F7] mb-3">{v.title}</h3>
                  <p className="text-sm text-[#8896A8] leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EQUIPO ───────────────────────────────────────── */}
        <section ref={teamRef} className="py-24 bg-[#0D1320] border-t border-[#1E2E48]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <span className="text-[11px] font-mono tracking-[0.3em] text-[#455570] uppercase">El equipo</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#EDF2F7]">
                Quiénes{" "}
                <span className="text-gradient-orange">construyen.</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {TEAM.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={teamInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * i }}
                  className="p-6 rounded-xl border border-[#1E2E48] bg-[#131D2E] hover:bg-[#1A2640] transition-all duration-300 group text-center"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                    style={{ background: `${t.color}18`, color: t.color, border: `1px solid ${t.color}40` }}
                  >
                    {t.initial}
                  </div>
                  <h3 className="text-base font-bold text-[#EDF2F7] mb-1">{t.name}</h3>
                  <p className="text-xs font-mono text-[#455570] mb-3">{t.role}</p>
                  <p className="text-xs text-[#8896A8] leading-relaxed">{t.focus}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="py-24">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#EDF2F7] mb-6">
              Construyamos
              <br />
              <span className="text-gradient-orange">juntos.</span>
            </h2>
            <p className="text-[#8896A8] mb-10 text-lg">
              Inversores, constructores o desarrolladores que quieren digitalizar su obra:
              el equipo de FLIP Group está disponible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 text-sm font-bold tracking-wider rounded-xl bg-[#E86A1A] text-[#070A0F] transition-all duration-300 hover:opacity-90 hover:scale-105"
              >
                Contactar equipo
              </Link>
              <Link
                href="https://invest.flipgroup.com.ar"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 text-sm font-medium text-[#EDF2F7] rounded-xl border border-[#1E2E48] hover:border-[rgba(232,106,26,0.4)] transition-all duration-300"
              >
                Ver plataforma de inversiones
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
