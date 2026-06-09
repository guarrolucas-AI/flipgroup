"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Mail, MessageSquare } from "lucide-react"

export function CtaSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 blueprint-grid opacity-40" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(232,106,26,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[11px] font-mono tracking-[0.3em] text-[#455570] uppercase">
            Próximos pasos
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl font-bold leading-tight text-[#EDF2F7]">
            Construyamos
            <br />
            <span className="text-gradient-orange">juntos.</span>
          </h2>

          <p className="mt-6 text-lg text-[#8896A8] max-w-2xl mx-auto leading-relaxed">
            ¿Sos inversor buscando rendimientos reales? ¿Una empresa que necesita obra de calidad?
            ¿Un desarrollador que quiere digitalizar su proceso?
            <span className="text-[#EDF2F7]"> Tenemos una solución para cada frente.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {/* CTA 1 - Capital */}
          <Link
            href="https://invest.flipgroup.com.ar"
            target="_blank"
            className="group flex flex-col gap-4 p-6 rounded-xl border border-[rgba(201,168,76,0.2)] bg-[rgba(201,168,76,0.05)] hover:border-[rgba(201,168,76,0.5)] hover:bg-[rgba(201,168,76,0.08)] transition-all duration-300"
          >
            <div className="text-2xl">◆</div>
            <div>
              <p className="text-sm font-bold text-[#C9A84C] mb-1">Invertir capital</p>
              <p className="text-xs text-[#8896A8]">Rendimientos fijos desde USD 10.000</p>
            </div>
            <div className="flex items-center gap-1 text-xs text-[#C9A84C] group-hover:gap-2 transition-all">
              invest.flipgroup.com.ar <ExternalLink className="w-3 h-3" />
            </div>
          </Link>

          {/* CTA 2 - Obra */}
          <Link
            href="/contacto"
            className="group flex flex-col gap-4 p-6 rounded-xl border border-[rgba(255,107,53,0.2)] bg-[rgba(255,107,53,0.05)] hover:border-[rgba(255,107,53,0.5)] hover:bg-[rgba(255,107,53,0.08)] transition-all duration-300"
          >
            <div className="text-2xl">▲</div>
            <div>
              <p className="text-sm font-bold text-[#FF6B35] mb-1">Solicitar obra</p>
              <p className="text-xs text-[#8896A8]">Airless, HVAC, Altura, Pisos industriales</p>
            </div>
            <div className="flex items-center gap-1 text-xs text-[#FF6B35] group-hover:gap-2 transition-all">
              Contactar equipo <MessageSquare className="w-3 h-3" />
            </div>
          </Link>

          {/* CTA 3 - Constech */}
          <Link
            href="/constech"
            className="group flex flex-col gap-4 p-6 rounded-xl border border-[rgba(0,196,167,0.2)] bg-[rgba(0,196,167,0.05)] hover:border-[rgba(0,196,167,0.5)] hover:bg-[rgba(0,196,167,0.08)] transition-all duration-300"
          >
            <div className="text-2xl">⬡</div>
            <div>
              <p className="text-sm font-bold text-[#00C4A7] mb-1">Digitalizar tu obra</p>
              <p className="text-xs text-[#8896A8]">Constech — certificados y presupuestos automáticos</p>
            </div>
            <div className="flex items-center gap-1 text-xs text-[#00C4A7] group-hover:gap-2 transition-all">
              Ver plataforma <Mail className="w-3 h-3" />
            </div>
          </Link>
        </motion.div>

        {/* Direct contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="mailto:contacto@flipgroup.com.ar"
            className="text-sm text-[#8896A8] hover:text-[#EDF2F7] transition-colors"
          >
            contacto@flipgroup.com.ar
          </a>
          <div className="hidden sm:block w-px h-4 bg-[#1E2E48]" />
          <a
            href="https://wa.me/5491166614164"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#8896A8] hover:text-[#E86A1A] transition-colors"
          >
            WhatsApp corporativo →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
