import { useState } from "react"
import { Button } from "@/components/ui/button"

type SchoolAwardContent = {
  subtitle: string
  description: string
}

type CambridgeAwardContent = {
  name: string
  award: string
}

type IAYPContent = {
  highlight: string
  detail: string
}

type TabData = {
  id: string
  label: string
  title: string
  fullText: string
  coordinators?: string[]
} & (
  | { id: "school-awards"; content: SchoolAwardContent[] }
  | { id: "cambridge-awards"; content: CambridgeAwardContent[] }
  | { id: "iayp"; content: IAYPContent[] }
)

const tabs: TabData[] = [
  {
    id: "school-awards",
    label: "School Awards & Recognitions",
    title: "Celebrating Excellence and Impact",
    content: [
      {
        subtitle: "Hodder Research School",
        description:
          "Recognized for our continued pursuit of evidence-based teaching practices and commitment to professional development.",
      },
      {
        subtitle: "Excellent Contribution to Holistic Approach",
        description:
          "The Economic Times – Education Leadership Awards (2025), honoring our efforts in nurturing socially responsible learners.",
      },
      {
        subtitle: "Community Engagement Initiative of the Year",
        description:
          "ScooNews at the New India Champions in Education Awards (2025), acknowledging our impactful outreach and civic learning initiatives.",
      },
    ],
    fullText:
      "At Budding Minds International School, excellence is not just an aspiration — it's a way of life. Over the years, our commitment to innovative pedagogy, holistic learning, and community engagement has been recognized by leading national and international institutions. Each recognition reflects our unwavering dedication to fostering purposeful learning, compassionate citizenship, and a culture of excellence — values that define the Budding Minds way.",
  },
  {
    id: "cambridge-awards",
    label: "Cambridge Learner Awards",
    title: "Celebrating Global Excellence",
    content: [
      {
        name: "Vinoth Maximus",
        award: "Cambridge IGCSE: Top in the World – Physical Science",
      },
      {
        name: "K. S. Saadhana Anugraha",
        award: "Cambridge IGCSE: Top in the World – Tamil & Mathematics",
      },
    ],
    fullText:
      "Our learners shine bright with Top in the World titles at the Cambridge IGCSE Awards — a proud moment for the entire Budding Minds community. These prestigious international recognitions stand as a testament to the academic rigour, perseverance, and passion for learning that define our students — and to the culture of excellence that lies at the heart of Budding Minds. Each award is not just a milestone but an inspiration — a reminder of what young minds can achieve when nurtured with purpose, passion, and perseverance.",
  },
  {
    id: "iayp",
    label: "IAYP Programme",
    title: "International Award for Young People",
    content: [
      {
        highlight: "Flexible, student-led activities",
        detail:
          "Across four core areas: Voluntary Service, Skill Development, Physical Recreation, and Adventurous Journey.",
      },
      {
        highlight: "Three Progressive Levels",
        detail: "Bronze → Silver → Gold with time-frames from 6 to 18 months.",
      },
      {
        highlight: "Non-competitive Structure",
        detail: "Participants set personal goals, work at their pace, and are supported by trained Award Leaders.",
      },
    ],
    fullText:
      "At Budding Minds International School, we are proud to be a certified YES Centre for the International Award for Young People (IAYP) — a globally recognised self-development programme for students aged 14 years and above. By offering the IAYP programme, BMIS empowers our adolescents to build resilience, leadership, empathy and global citizenship. For students ready to challenge themselves and make a positive impact – the IAYP at BMIS is a pathway to growth, discovery and distinction.",
    coordinators: ["Ms. HemaSudha (IAYP Coordinator)", "Anita Jai", "Aaliya Sultana", "Vaishali Rajan"],
  },
]

export default function AwardsPage() {
  const [activeTab, setActiveTab] = useState<string>("school-awards")
  const activeTabData = tabs.find((tab) => tab.id === activeTab)

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden" style={{ background: 'linear-gradient(135deg, #F7ECDE 0%, #E9DAC1 50%, #9ED2C6 100%)' }}>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#54BAB9' }}>Awards & Recognitions</h1>
            <p className="text-lg md:text-xl" style={{ color: '#54BAB9' }}>Celebrating Excellence and Global Achievement</p>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-12 md:py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="flex flex-wrap gap-3 mb-12 pb-6 justify-center" style={{ borderBottom: '1px solid #E9DAC1' }}>
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 font-medium transition-all rounded-md ${
                activeTab === tab.id
                  ? "text-white"
                  : "bg-transparent"
              }`}
              style={{
                backgroundColor: activeTab === tab.id ? '#54BAB9' : 'transparent',
                color: activeTab === tab.id ? 'white' : '#54BAB9',
              }}
              variant="ghost"
            >
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTabData && (
          <div className="animate-in fade-in duration-500">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#54BAB9' }}>{activeTabData.title}</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">{activeTabData.fullText}</p>

            {/* Content Grid */}
            <div className="grid gap-6 md:gap-8">
              {activeTabData.id === "school-awards" &&
                activeTabData.content.map((item, idx) => (
                  <div key={idx} className="pl-6 py-4 rounded-r-lg" style={{ borderLeft: '4px solid #54BAB9', backgroundColor: '#F7ECDE' }}>
                    <h3 className="text-xl font-semibold mb-2" style={{ color: '#54BAB9' }}>{item.subtitle}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                ))}

              {activeTabData.id === "cambridge-awards" && (
                <div className="grid md:grid-cols-2 gap-6">
                  {activeTabData.content.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-lg hover:shadow-lg transition-shadow"
                      style={{ background: 'linear-gradient(135deg, #F7ECDE 0%, #E9DAC1 100%)', border: '1px solid #9ED2C6' }}
                    >
                      <div className="mb-3 h-12 w-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#54BAB9' }}>
                        <span className="text-white font-bold text-lg">{idx + 1}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2" style={{ color: '#54BAB9' }}>{item.name}</h3>
                      <p className="text-gray-700">{item.award}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTabData.id === "iayp" && (
                <>
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {activeTabData.content.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-6 bg-white rounded-lg hover:shadow-md transition-all"
                        style={{ border: '2px solid #54BAB9' }}
                      >
                        <h3 className="text-lg font-bold mb-3" style={{ color: '#54BAB9' }}>{item.highlight}</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">{item.detail}</p>
                      </div>
                    ))}
                  </div>

                  {activeTabData.coordinators && (
                    <div className="mt-10 p-6 rounded-lg" style={{ backgroundColor: '#F7ECDE', border: '1px solid #E9DAC1' }}>
                      <h3 className="text-xl font-bold mb-4" style={{ color: '#54BAB9' }}>Certified Award Leaders</h3>
                      <ul className="space-y-2">
                        {activeTabData.coordinators.map((coordinator, idx) => (
                          <li key={idx} className="text-gray-700 flex items-center gap-3">
                            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#54BAB9' }}></span>
                            {coordinator}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </section>
    </main>
  )
}