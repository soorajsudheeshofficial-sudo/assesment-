import { Clock, Users, Brain, Lightbulb, Target, TrendingUp } from "lucide-react"

const capabilities = [
  {
    icon: Clock,
    title: "Skills Decay",
    description: "every 2-3 years faster for technical skills",
    color: "text-[#0ea5e9]",
  },
  {
    icon: Users,
    title: "Manager Role Shift",
    description: "orchestrating people + AI agents",
    color: "text-[#f97316]",
  },
  {
    icon: Brain,
    title: "Leaders + AI Co-Pilots",
    description: "requires sensemaking and systems thinking",
    color: "text-[#8b5cf6]",
  },
  {
    icon: Lightbulb,
    title: "Frontline Capability",
    description: "now depends on digital fluency",
    color: "text-[#0ea5e9]",
  },
  {
    icon: Target,
    title: "Core Human Capabilities",
    description: "analytical reasoning and scenario planning",
    color: "text-[#f97316]",
  },
  {
    icon: TrendingUp,
    title: "Winning Organizations",
    description: "predict skills ahead of demand",
    color: "text-[#eab308]",
  },
]

export function ExploreSection() {
  return (
    <section className="bg-[#fef3c7] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#f97316] mb-2">What We'll Explore</h2>
        <p className="text-gray-700 mb-8">The critical shifts every enterprise must plan for:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {capabilities.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
              <div className="flex items-start gap-3">
                <div className={`${item.color} mt-1`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
