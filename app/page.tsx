import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/home/hero"
import { StatsBar } from "@/components/home/stats-bar"
import { UnitsSection } from "@/components/home/units-section"
import { FlipCycle } from "@/components/home/flip-cycle"
import { CtaSection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <UnitsSection />
        <FlipCycle />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
