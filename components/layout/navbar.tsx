"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import { FlipGroupLogo } from "@/components/brand/logo"

const NAV_LINKS = [
  { label: "Capital", href: "/capital", accent: "#C9A84C" },
  { label: "Constech", href: "/constech", accent: "#00C4A7" },
  { label: "Obras", href: "/obras", accent: "#FF6B35" },
  { label: "Perforaciones", href: "/obras/perforaciones", accent: "#4ADE80" },
  { label: "Nosotros", href: "/nosotros", accent: "#EDF2F7" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[rgba(7,10,15,0.92)] backdrop-blur-xl border-b border-[#1E2E48]"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <FlipGroupLogo size="md" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm text-[#8896A8] hover:text-[#EDF2F7] transition-colors duration-200 group"
              >
                <span className="relative z-10">{link.label}</span>
                <span
                  className="absolute bottom-1 left-4 right-4 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ background: link.accent }}
                />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Link
              href="https://invest.flipgroup.com.ar"
              target="_blank"
              className="hidden md:flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-bold tracking-widest text-[#E86A1A] border border-[#E86A1A]/40 rounded hover:border-[#E86A1A] hover:bg-[#E86A1A]/08 transition-all duration-200"
            >
              <span>CLIENT OS</span>
              <ExternalLink className="w-3 h-3" />
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center text-[#8896A8] hover:text-[#EDF2F7] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#0D1320] border-b border-[#1E2E48] shadow-2xl md:hidden"
          >
            <nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-sm text-[#8896A8] hover:text-[#EDF2F7] rounded-lg hover:bg-[#1A2640] transition-all"
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: link.accent }} />
                  {link.label}
                </Link>
              ))}
              <Link
                href="https://invest.flipgroup.com.ar"
                target="_blank"
                onClick={() => setMobileOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 px-4 py-3 text-xs font-mono font-bold tracking-widest text-[#E86A1A] border border-[#E86A1A]/40 rounded hover:border-[#E86A1A] transition-all"
              >
                CLIENT OS <ExternalLink className="w-3 h-3" />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
