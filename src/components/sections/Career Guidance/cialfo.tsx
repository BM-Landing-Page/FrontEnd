import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CialfoPage() {
  return (
    <main className="w-full bg-white">
      {/* Hero Banner */}
      <div
        className="w-full h-64 bg-gradient-to-r from-[#54BAB9] to-[#9ED2C6] flex items-center justify-center"
        style={{
          backgroundImage: "url(/placeholder.svg?height=256&width=1200&query=global-partnership-education-banner)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Cialfo</h1>
          <p className="text-lg mt-2">Global Partnership with CIALFO</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Tagline */}
        <div className="mb-6 pb-4 border-b-2" style={{ borderColor: "#9ED2C6" }}>
          <p className="text-lg font-semibold" style={{ color: "#54BAB9" }}>
            Empowering our students to dream globally and plan confidently.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-5 mb-8">
          <p className="text-gray-700 leading-relaxed">
            At Budding Minds International School (BMIS), we're proud to partner with CIALFO, a global edtech company
            headquartered in Singapore and present in over 250 locations worldwide. Renowned for its student-first
            approach, CIALFO revolutionizes the way young learners explore higher education and career pathways.
          </p>

          <p className="text-gray-700 leading-relaxed">
            This partnership perfectly aligns with our mission — to guide every student through their journey of career
            exploration, university planning, and personal growth.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Through CIALFO's cutting-edge technology, our students, parents, and counselors gain access to an intuitive
            platform that simplifies college applications, connects them with top universities around the world, and
            provides powerful tools for building a personalized higher education plan.
          </p>
        </div>

        {/* How Our Students Benefit Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#54BAB9" }}>
            How Our Students Benefit
          </h2>
          <div className="space-y-4">
            <div className="pl-4 border-l-4" style={{ borderColor: "#9ED2C6" }}>
              <p className="text-gray-700 leading-relaxed">
                Each student receives individual login credentials to explore the CIALFO platform — enabling them to
                research universities, track applications, and access tailored career and college insights.
              </p>
            </div>

            <div className="pl-4 border-l-4" style={{ borderColor: "#9ED2C6" }}>
              <p className="text-gray-700 leading-relaxed">
                Students gain access to global webinars, university connect sessions, and an international high school
                tour, offering first-hand exposure to leading institutions and cultures across the world.
              </p>
            </div>

            <div className="pl-4 border-l-4" style={{ borderColor: "#9ED2C6" }}>
              <p className="text-gray-700 leading-relaxed">
                With CIALFO's advanced guidance tools, our students learn to make informed, confident decisions about
                their academic and career paths.
              </p>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="p-4 rounded-lg" style={{ backgroundColor: "#F7ECDE" }}>
          <p className="text-gray-700 leading-relaxed">
            Together with CIALFO, BMIS is transforming future readiness — helping every learner dream without boundaries
            and step into the global stage with clarity and confidence.
          </p>
        </div>
      </div>
      <div className="py-6 bg-white">
        <div className="flex justify-center">
          <Link href="/careerquest" className="inline-block">
            <div className="flex items-center gap-3 bg-[#54BAB9] hover:bg-[#54BAB9]/90 text-white px-6 py-3 rounded-lg shadow-md transition-colors cursor-pointer">
              <div className="text-center">
                <div className="font-semibold text-base">Career Quest</div>
              </div>
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}
