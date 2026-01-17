import Image from "next/image"
import { RSVPForm } from "./rsvp-form"

const insights = [
  "A clear view of the leadership & workforce capabilities that will matter most over the next 24-36 months.",
  "Insights from high-scale operating environments including the former CLO of McDonald's on what truly scales and what breaks under pressure.",
  "Signals for where capability gaps may already be forming in your organization.",
  "Peer-validated perspectives from leaders running workforce, talent, and transformation ecosystems at scale.",
  "Actionable insights you can take straight into your next exec meeting.",
]

export function InsightsSection() {
  return (
    <section className="bg-white py-12 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Go behind the curtain with real
          <br />
          examples and high-scale insights
        </h2>

        <p className="text-gray-700 font-semibold mb-6">
          You'll walk away with:
        </p>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <ul className="flex-1 space-y-4">
            {insights.map((insight, index) => (
              <li
                key={index}
                className="text-gray-700 text-sm leading-relaxed pl-4 border-l-4 border-[#f97316]"
              >
                {insight}
              </li>
            ))}
          </ul>

          <div className="w-full md:w-64 flex-shrink-0">
            <Image
              src="/white-chess-pieces-king-queen-bishop-knight-artist.jpg"
              alt="Chess pieces illustration"
              width={256}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="mt-10 max-w-2xl mx-auto md:mx-0">
          <RSVPForm variant="light" />
        </div>
      </div>
    </section>
  )
}
