"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { FileCheck, BarChart3, Users, Zap, Shield, Globe } from "lucide-react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

const TEAL = "#00C4A7"
const TEAL_BORDER = "rgba(0,196,167,0.2)"
const TEAL_BG = "rgba(0,196,167,0.06)"

const MODULES = [
  {
    icon: FileCheck,
    title: "Certificados de avance",
    desc: "Generá certificados de avance de obra automáticos, con firma digital y trazabilidad completa. Compatible con estándares de la industria argentina.",
    tag: "CORE",
  },
  {
    icon: BarChart3,
    title: "Presupuestos automáticos",
    desc: "Comparación en tiempo real entre presupuesto planificado y ejecución real. Alertas tempranas de desvíos antes de que afecten el proyecto.",
    tag: "CORE",
  },
  {
    icon: Users,
    title: "Dashboard de inversores",
    desc: "Panel accesible para cada inversor: avance de obra, fotos de progreso, certificaciones emitidas y proyección de retorno.",
    tag: "CAPITAL",
  },
]

const FEATURES = [
  { icon: Zap, title: "API-first", desc: "Integración con sistemas ERP, AFIP y plataformas de pago via REST API." },
  { icon: Shield, title: "Auditoría completa", desc: "Log inmutable de cada acción. Cada certificado tiene hash criptográfico único." },
  { icon: Globe, title: "Web + mobile", desc: "Acceso desde cualquier dispositivo. PWA optimizada para obra en campo." },
]

const TERMINAL_LINES = [
  { t: 50, text: "$ constech init proyecto-edificio-A" },
  { t: 300, text: "> Proyecto creado. ID: PRJ-2026-0048" },
  { t: 600, text: "$ constech cert --avance 67.3 --fotos ./fotos/" },
  { t: 900, text: "> Procesando 12 imágenes..." },
  { t: 1200, text: "> Certificado generado: CERT-0048-003.pdf" },
  { t: 1500, text: "> Hash: sha256:a3f9e1b2..." },
  { t: 1800, text: "> Notificación enviada a 3 inversores ✓" },
  { t: 2100, text: "$ _" },
]

function TerminalCard() {
  return (
    <div
      className="rounded-2xl border overflow-hidden font-mono text-sm"
      style={{ borderColor: TEAL_BORDER, background: "#0A0F18" }}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-2 px-4 py-3 border-b"
        style={{ borderColor: TEAL_BORDER, background: "rgba(0,196,167,0.05)" }}
      >
        <div className="w-2.5 h-2.5 rounded-full bg-[#455570]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#455570]" />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: TEAL }} />
        <span className="ml-2 text-[10px] tracking-widest text-[#455570]">CONSTECH CLI</span>
      </div>

      {/* Content */}
      <div className="p-6 space-y-2">
        {TERMINAL_LINES.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: line.t / 1000, duration: 0.3 }}
            className={
              line.text.startsWith("$")
                ? "text-[#EDF2F7]"
                : line.text.startsWith(">")
                ? "pl-4"
                : "text-[#EDF2F7]"
            }
            style={
              line.text.startsWith(">")
                ? { color: TEAL }
                : line.text === "$ _"
                ? { color: "#EDF2F7" }
                : {}
            }
          >
            {line.text === "$ _" ? (
              <span className="cursor-blink">$ </span>
            ) : (
              line.text
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export function ConstechPage() {
  const modulesRef = useRef<HTMLElement>(null)
  const featuresRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLElement>(null)
  const modulesInView = useInView(modulesRef, { once: true, margin: "-10%" })
  const featuresInView = useInView(featuresRef, { once: true, margin: "-10%" })
  const ctaInView = useInView(ctaRef, { once: true, margin: "-10%" })

  return (
    <>
      <Navbar />
      <main className="flex-1">

        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="relative min-h-[85vh] flex items-center pt-24 pb-20 overflow-hidden">
          <div className="absolute inset-0 blueprint-grid opacity-20" />
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 70% 60% at 80% 50%, rgba(0,196,167,0.07) 0%, transparent 60%)" }}
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
                    FLIP Constech
                  </span>
                  <h1 className="mt-4 text-5xl md:text-6xl lg:text-[5rem] font-bold leading-[1.05] text-[#EDF2F7]">
                    Software que
                    <br />
                    <span style={{ color: TEAL }}>certifica obra.</span>
                  </h1>
                  <p className="mt-6 text-lg text-[#8896A8] leading-relaxed max-w-lg">
                    Certificados de avance, presupuestos automáticos y reportes para inversores.{" "}
                    <span className="text-[#EDF2F7]">Sin papeles. En tiempo real.</span>
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-10 flex flex-col sm:flex-row gap-4"
                >
                  <Link
                    href="/contacto?tipo=constech"
                    className="flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold tracking-wider rounded-lg transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
                    style={{ background: TEAL, color: "#070A0F" }}
                  >
                    Solicitar acceso
                  </Link>
                  <Link
                    href="/contacto"
                    className="flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-[#EDF2F7] rounded-lg border border-[#1E2E48] hover:border-[rgba(0,196,167,0.4)] hover:bg-[rgba(0,196,167,0.04)] transition-all duration-300"
                  >
                    Hablar con el equipo
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="mt-8 flex items-center gap-6"
                >
                  {["Web + Mobile", "API-first", "Firma digital"].map((tag) => (
                    <div key={tag} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full" style={{ background: TEAL }} />
                      <span className="text-xs text-[#455570] font-mono">{tag}</span>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Terminal */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <TerminalCard />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── MÓDULOS ───────────────────────────────────────── */}
        <section ref={modulesRef} className="py-24 bg-[#0D1320] border-y border-[#1E2E48]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={modulesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <span className="text-[11px] font-mono tracking-[0.3em] text-[#455570] uppercase">Módulos</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#EDF2F7]">
                Una plataforma,
                <br />
                <span style={{ color: TEAL }}>tres módulos.</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {MODULES.map((m, i) => (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={modulesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.12 * i }}
                  className="relative p-8 rounded-xl border border-[#1E2E48] hover:border-[rgba(0,196,167,0.3)] bg-[#131D2E] hover:bg-[#1A2640] transition-all duration-300 group overflow-hidden"
                >
                  <div
                    className="absolute top-4 right-4 text-[9px] font-mono tracking-widest px-2 py-0.5 rounded border"
                    style={{ borderColor: TEAL_BORDER, color: TEAL, background: TEAL_BG }}
                  >
                    {m.tag}
                  </div>
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-6"
                    style={{ background: TEAL_BG }}
                  >
                    <m.icon className="w-5 h-5" style={{ color: TEAL }} />
                  </div>
                  <h3 className="text-lg font-bold text-[#EDF2F7] mb-3 group-hover:text-[#00C4A7] transition-colors">
                    {m.title}
                  </h3>
                  <p className="text-sm text-[#8896A8] leading-relaxed">{m.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURES ─────────────────────────────────────── */}
        <section ref={featuresRef} className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
              >
                <span className="text-[11px] font-mono tracking-[0.3em] text-[#455570] uppercase">Tecnología</span>
                <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#EDF2F7] mb-6">
                  Construido para
                  <br />
                  <span style={{ color: TEAL }}>la industria real.</span>
                </h2>
                <p className="text-[#8896A8] leading-relaxed mb-8">
                  Diseñado desde cero para el mercado de construcción argentino.
                  Compatible con las normativas locales, los flujos reales de obra y los
                  tiempos de los equipos en campo.
                </p>
                <Link
                  href="/contacto?tipo=constech"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-lg border transition-all duration-300"
                  style={{ borderColor: TEAL_BORDER, color: TEAL }}
                >
                  Quiero una demo →
                </Link>
              </motion.div>

              <div className="grid gap-4">
                {FEATURES.map((f, i) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, x: 30 }}
                    animate={featuresInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * i }}
                    className="flex gap-4 p-5 rounded-xl border border-[#1E2E48] bg-[#131D2E] hover:border-[rgba(0,196,167,0.3)] transition-all duration-300 group"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: TEAL_BG }}
                    >
                      <f.icon className="w-4 h-4" style={{ color: TEAL }} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#EDF2F7] mb-1 group-hover:text-[#00C4A7] transition-colors">
                        {f.title}
                      </h3>
                      <p className="text-sm text-[#8896A8] leading-relaxed">{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
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
              <span className="text-[11px] font-mono tracking-[0.3em] text-[#455570] uppercase">Early access</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#EDF2F7] mb-6">
                Digitalizá tu obra.
                <br />
                <span style={{ color: TEAL }}>Sin fricción.</span>
              </h2>
              <p className="text-[#8896A8] mb-10 text-lg max-w-xl mx-auto">
                Estamos incorporando empresas constructoras a la plataforma. Hablá con el equipo y entrá al programa early access.
              </p>
              <Link
                href="/contacto?tipo=constech"
                className="inline-flex items-center gap-2 px-10 py-5 text-sm font-bold tracking-wider rounded-xl transition-all duration-300 hover:opacity-90 hover:scale-105"
                style={{ background: TEAL, color: "#070A0F" }}
              >
                Solicitar acceso early access
              </Link>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
