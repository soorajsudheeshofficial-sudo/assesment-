import Image from "next/image"

const speakers = [
  {
    name: "Rob Lauber",
    image: "/professional-headshot-middle-aged-white-male-execu.jpg",
    bio: "Rob Lauber is a global workforce and capability-building leader with over 25 years of experience helping organizations prepare leaders and frontline teams for change. Most recently, he served as SVP and Chief Learning Officer at McDonald's, leading learning and development across 37,000+ restaurants worldwide. His perspective is especially relevant as organizations rethink leadership and capability models in the age of AI.",
  },
  {
    name: "Krishna Kumar",
    image: "/professional-headshot-indian-male-executive-ceo-in.jpg",
    bio: "Krishna Kumar is the Founder and CEO of Simplilearn, working closely with enterprises navigating workforce transformation driven by AI and digital change. At the center of the learning and skills ecosystem, he brings a unique perspective on how roles, leadership expectations, and capabilities are evolving across industries. Through direct engagement with enterprise leaders and education partners, he sees what scales, and what doesn't, in building workforce readiness for the AI era, offering a cross-enterprise view of the priorities shaping workforce strategy today.",
  },
  {
    name: "Sudipto Mitra",
    image: "/professional-headshot-indian-male-business-executi.jpg",
    bio: "Sudipto Mitra is a senior transformation and growth leader with over 20 years of experience helping enterprises navigate large-scale change across technology, operations, and talent. As Chief Revenue Officer at Simplilearn, he works with executive teams to address workforce capability gaps as AI reshapes roles and operating models. He previously held leadership roles at Accenture, IBM Consulting, and WorkFusion.",
  },
]

export function SpeakersSection() {
  return (
    <section className="bg-gradient-to-br from-[#1e40af] via-[#3b82f6] to-[#06b6d4] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#f97316] mb-8">Featured Speakers</h2>

        <div className="space-y-8">
          {speakers.map((speaker, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 rounded-lg overflow-hidden">
                <Image
                  src={speaker.image || "/placeholder.svg"}
                  alt={speaker.name}
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#f97316] mb-2">{speaker.name}</h3>
                <p className="text-white/90 text-sm leading-relaxed">{speaker.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Expert Perspectives */}
        <div className="mt-10 bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] rounded-lg p-6">
          <h3 className="text-lg font-bold text-[#fbbf24] mb-2">Additional Expert Perspectives</h3>
          <p className="text-white/90 text-sm leading-relaxed">
            Invited experts from leading consulting and enterprise learning organizations will contribute short
            perspectives, offering insight into how large organizations are evolving skills and leadership models in the
            AI era.
          </p>
        </div>
      </div>
    </section>
  )
}
