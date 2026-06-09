import Link from "next/link"

const UNITS = [
  { label: "Capital / Invest", href: "/capital", accent: "#C9A84C" },
  { label: "Constech", href: "/constech", accent: "#00C4A7" },
  { label: "Obras Airless", href: "/obras/airless", accent: "#FF6B35" },
  { label: "HVAC Industrial", href: "/obras/hvac", accent: "#FF6B35" },
  { label: "Perforaciones HB", href: "/obras/perforaciones", accent: "#4ADE80" },
]

const LEGAL = [
  { label: "Términos y Condiciones", href: "/legal" },
  { label: "Política de Privacidad", href: "/privacidad" },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#1E2E48] bg-[#0D1320]">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 border border-[#E86A1A] rounded-sm rotate-3 opacity-40" />
              <div className="absolute inset-0 border border-[#E86A1A] rounded-sm -rotate-3 opacity-70" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[#E86A1A] font-bold text-sm">F</span>
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[#EDF2F7] text-sm font-bold tracking-[0.15em]">FLIP</span>
              <span className="text-[#8896A8] text-[9px] tracking-[0.3em] uppercase">GROUP</span>
            </div>
          </div>
          <p className="text-[#8896A8] text-sm leading-relaxed max-w-xs">
            El primer holding tecnológico de infraestructura industrial de Argentina. Capital, software y ejecución bajo una sola marca.
          </p>
          <div className="mt-6 flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
            <span className="text-[10px] font-mono text-[#455570] tracking-widest uppercase">Sistemas operativos</span>
          </div>
        </div>

        {/* Units */}
        <div>
          <p className="text-[10px] font-mono tracking-widest text-[#455570] uppercase mb-5">Unidades de negocio</p>
          <ul className="space-y-3">
            {UNITS.map((u) => (
              <li key={u.href}>
                <Link
                  href={u.href}
                  className="flex items-center gap-2.5 text-sm text-[#8896A8] hover:text-[#EDF2F7] transition-colors group"
                >
                  <span className="w-1 h-1 rounded-full flex-shrink-0 transition-all group-hover:scale-150" style={{ background: u.accent }} />
                  {u.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-[10px] font-mono tracking-widest text-[#455570] uppercase mb-5">Contacto</p>
          <div className="space-y-3 text-sm text-[#8896A8]">
            <p>Buenos Aires, Argentina</p>
            <a href="mailto:contacto@flipgroup.com.ar" className="block hover:text-[#E86A1A] transition-colors">
              contacto@flipgroup.com.ar
            </a>
            <a href="https://wa.me/5491166614164" target="_blank" rel="noopener noreferrer" className="block hover:text-[#E86A1A] transition-colors">
              WhatsApp corporativo →
            </a>
          </div>
          <div className="mt-6">
            <p className="text-[10px] font-mono tracking-widest text-[#455570] uppercase mb-3">Plataformas</p>
            <Link
              href="https://invest.flipgroup.com.ar"
              target="_blank"
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-[#E86A1A] border border-[#E86A1A]/30 rounded hover:border-[#E86A1A]/60 transition-all"
            >
              ● invest.flipgroup.com.ar
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1E2E48] max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[11px] font-mono text-[#455570]">
          © {year} FLIP GROUP S.A. — Todos los derechos reservados.
        </p>
        <div className="flex items-center gap-4">
          {LEGAL.map((l) => (
            <Link key={l.href} href={l.href} className="text-[11px] text-[#455570] hover:text-[#8896A8] transition-colors">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
