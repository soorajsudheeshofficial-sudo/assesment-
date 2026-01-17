import { HeroSection } from "@/components/hero-section"
import { IntroSection } from "@/components/intro-section"
import { ExploreSection } from "@/components/explore-section"
import { SpeakersSection } from "@/components/speakers-section"
import { InsightsSection } from "@/components/insights-section"
import { AgendaSection } from "@/components/agenda-section"
import { FooterSection } from "@/components/footer-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <IntroSection />
      <ExploreSection />
      <SpeakersSection />
      <InsightsSection />
      <AgendaSection />
      <FooterSection />
    </main>
  )
}
