import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ContactForm } from "@/components/contacto/contact-form"

export const metadata: Metadata = {
  title: "Contacto — FLIP Group",
  description:
    "Contactate con el equipo de FLIP Group. Inversiones, obras, Constech o consultas generales.",
  openGraph: {
    title: "Contacto — FLIP Group",
    description: "Invertir, construir, digitalizar. Hablemos.",
    url: "https://flipgroup.com.ar/contacto",
  },
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string>>
}) {
  const params = await searchParams
  const defaultTipo = params.tipo ?? "general"

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24">

        {/* Header */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 blueprint-grid opacity-20" />
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(232,106,26,0.06) 0%, transparent 60%)" }}
          />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <span className="text-[11px] font-mono tracking-[0.3em] text-[#455570] uppercase">
              Contacto
            </span>
            <h1 className="mt-4 text-5xl md:text-6xl font-bold text-[#EDF2F7]">
              Hablemos.
            </h1>
            <p className="mt-4 text-lg text-[#8896A8] max-w-lg mx-auto">
              Respondemos en menos de 24 horas hábiles.
            </p>
          </div>
        </section>

        {/* Form + Info */}
        <section className="py-16 pb-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-16">

              {/* Form — 3 cols */}
              <div className="lg:col-span-3">
                <div className="p-8 rounded-2xl border border-[#1E2E48] bg-[#0D1320]">
                  <h2 className="text-xl font-bold text-[#EDF2F7] mb-8">
                    Envianos tu consulta
                  </h2>
                  <ContactForm defaultTipo={defaultTipo} />
                </div>
              </div>

              {/* Info — 2 cols */}
              <div className="lg:col-span-2 space-y-8">

                {/* Quick contact */}
                <div className="p-6 rounded-xl border border-[#1E2E48] bg-[#0D1320]">
                  <h3 className="text-sm font-bold text-[#EDF2F7] mb-4">Contacto directo</h3>
                  <div className="space-y-4">
                    <a
                      href="mailto:contacto@flipgroup.com.ar"
                      className="flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#131D2E] flex items-center justify-center flex-shrink-0 mt-0.5 text-sm">
                        ✉
                      </div>
                      <div>
                        <div className="text-xs text-[#455570] mb-0.5">Email</div>
                        <div className="text-sm text-[#8896A8] group-hover:text-[#EDF2F7] transition-colors">
                          contacto@flipgroup.com.ar
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://wa.me/5491166614164"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#131D2E] flex items-center justify-center flex-shrink-0 mt-0.5 text-sm">
                        📱
                      </div>
                      <div>
                        <div className="text-xs text-[#455570] mb-0.5">WhatsApp</div>
                        <div className="text-sm text-[#8896A8] group-hover:text-[#E86A1A] transition-colors">
                          +54 9 11 6661-4164
                        </div>
                      </div>
                    </a>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#131D2E] flex items-center justify-center flex-shrink-0 mt-0.5 text-sm">
                        📍
                      </div>
                      <div>
                        <div className="text-xs text-[#455570] mb-0.5">Zona de operación</div>
                        <div className="text-sm text-[#8896A8]">
                          CABA y Gran Buenos Aires
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick links */}
                <div className="p-6 rounded-xl border border-[#1E2E48] bg-[#0D1320]">
                  <h3 className="text-sm font-bold text-[#EDF2F7] mb-4">Acceso rápido</h3>
                  <div className="space-y-2">
                    {[
                      { href: "https://invest.flipgroup.com.ar", label: "Plataforma de inversiones", color: "#C9A84C", ext: true },
                      { href: "/capital", label: "FLIP Capital", color: "#C9A84C" },
                      { href: "/constech", label: "FLIP Constech", color: "#00C4A7" },
                      { href: "/obras", label: "FLIP Obras", color: "#FF6B35" },
                    ].map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        target={l.ext ? "_blank" : undefined}
                        rel={l.ext ? "noopener noreferrer" : undefined}
                        className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-[#131D2E] transition-colors group"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full" style={{ background: l.color }} />
                          <span className="text-sm text-[#8896A8] group-hover:text-[#EDF2F7] transition-colors">
                            {l.label}
                          </span>
                        </div>
                        <span className="text-[#455570] text-xs">→</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-[#455570] leading-relaxed px-1">
                  Para consultas de inversión, un asesor se contacta dentro de las{" "}
                  <span className="text-[#8896A8]">24 horas hábiles</span>.
                  Para presupuestos de obra, coordinamos un relevamiento sin cargo en el área metropolitana.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
