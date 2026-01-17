import { RSVPForm } from "./rsvp-form"

export function IntroSection() {
  return (
    <section className="bg-white py-12 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* RSVP Form */}
        <div className="mb-10 max-w-2xl">
          <RSVPForm variant="light" />
        </div>

        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed">
            AI is accelerating change across every operational layer. Roles are shifting. Leadership models are
            collapsing and reforming. Frontline and mid-level managers will soon lead teams of people and intelligent
            agents.
          </p>

          <p className="text-gray-700">
            But even the most advanced enterprises are asking the same question:
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight text-center">
            Which capabilities will matter most,
            <br />
            and how do we build them at scale?
          </h2>

          <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
            This invite-only roundtable gathers CHROs, CLOs, and enterprise workforce leaders for a candid, senior-level
            discussion on what's coming next.
          </p>
        </div>
      </div>
    </section>
  )
}
