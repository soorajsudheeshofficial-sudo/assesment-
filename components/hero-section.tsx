import Image from "next/image"
import { Calendar, MapPin } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[500px] bg-[#0a1628] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/abstract-blue-neural-network-technology-background.jpg"
          alt="Neural network background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/70 via-[#0a1628]/50 to-[#0a1628]/90" />
      </div>

      <div className="relative z-10 px-6 md:px-12 py-8">
        <div className="mb-6">
          <div className="text-white">
            <span className="text-2xl font-light tracking-wide">simpl</span>
            <span className="text-2xl font-light tracking-wide text-orange-400">i</span>
            <span className="text-2xl font-light tracking-wide">learn</span>
          </div>
        </div>

        <div className="mb-4">
          <span className="inline-flex items-center gap-2 bg-[#22c55e] text-white text-xs font-semibold px-3 py-1.5 rounded">
            Invite-Only
          </span>
          <span className="ml-2 text-white/70 text-sm">An Executive Roundtable - Live</span>
        </div>

        {/* Title */}
        <h1 className="text-white mb-2">
          <span className="text-3xl md:text-4xl font-bold block">The Skills That Matter Next:</span>
          <span className="text-2xl md:text-3xl text-[#60a5fa] font-light">
            Preparing Your Workforce
            <br />& Leaders for the AI Era
          </span>
        </h1>

        {/* Date and Location */}
        <div className="flex flex-col gap-2 mt-6 text-white/90">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-orange-400" />
            <span className="text-sm">February 20, 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-orange-400" />
            <span className="text-sm">Chamberlain's Steak & Fish House, Dallas</span>
          </div>
        </div>
      </div>
    </section>
  )
}
