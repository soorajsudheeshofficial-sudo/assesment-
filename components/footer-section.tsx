import Image from "next/image"
import { RSVPForm } from "./rsvp-form"

export function FooterSection() {
  return (
    <section className="relative overflow-hidden py-16">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/luxury-steakhouse-restaurant-interior-with-elegant.jpg"
          alt="Restaurant background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0a1628]/70" />
      </div>

      {/* Centered content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-12">
        <h2 className="mb-8 text-3xl md:text-4xl font-bold text-white">
          Space is limited.
        </h2>

        <div className="max-w-2xl">
          <RSVPForm variant="dark" />
        </div>
      </div>

      {/* Full-width footer bar */}
      <div className="relative z-10 mt-16 border-t border-white/20 px-6 md:px-12">
        <div className="flex items-end justify-between">
          {/* Left brand */}
          <div className="text-2xl md:text-3xl font-light tracking-wide text-white">
            simpl<span className="text-orange-400">i</span>learn
          </div>

          {/* Right copyright */}
          <p className="text-sm text-white/70 text-right">
            © 2009–2025 Simplilearn Solutions. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  )
}
