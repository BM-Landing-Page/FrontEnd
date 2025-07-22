import { BookOpen, Users, Award, Globe, TrendingUp } from "lucide-react"
import Head from "next/head"
import Image from "next/image"

export default function PedagogyTools() {
  return (
    <>
      <Head>
        <title>BMIS Assessment Framework - Guiding Student Growth Through International Benchmarks</title>
        <meta
          name="description"
          content="Comprehensive assessment framework including Cambridge Progression Tests, IGCSE, A Levels, and International Benchmark Tests for student growth and development."
        />
        <meta
          name="keywords"
          content="Cambridge assessments, IGCSE, A Levels, International Benchmark Tests, student assessment, education framework"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-96 md:h-[500px] overflow-hidden">
          <Image
            src="/placeholder.svg?height=500&width=1200"
            alt="Academic learning environment"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">BMIS Assessment Framework</h1>
              <p className="text-xl md:text-2xl font-light opacity-90">
                Guiding Student Growth Through International Benchmarks
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-12">
            {/* Cambridge Progression Tests - Clean Horizontal Layout */}
            <section className="bg-gradient-to-r from-[#F7ECDE] to-[#E9DAC1] rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="flex flex-col lg:flex-row items-start gap-8">
                <div className="lg:w-1/3">
                  <div className="bg-[#54BAB9] p-6 rounded-xl text-white mb-4">
                    <TrendingUp className="w-8 h-8 mb-3" />
                    <h2 className="text-2xl md:text-3xl font-bold">Cambridge Progression Tests</h2>
                    <p className="text-sm opacity-90 mt-2">Grades 2+ • Internal Assessment</p>
                  </div>
                </div>

                <div className="lg:w-2/3 grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Subjects Assessed</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-[#54BAB9] text-white px-3 py-1 rounded-full text-sm">English</span>
                      <span className="bg-[#9ED2C6] text-white px-3 py-1 rounded-full text-sm">Math</span>
                      <span className="bg-[#E9DAC1] text-gray-800 px-3 py-1 rounded-full text-sm">Science</span>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Benefits</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Yearly progress tracking</li>
                      <li>• Internal feedback system</li>
                      <li>• Strength/weakness analysis</li>
                      <li>• Clear mark schemes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Cambridge Lower Secondary Checkpoint - Centered Card */}
            <section className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border-2 border-[#9ED2C6]">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-[#54BAB9] text-white px-4 py-2 rounded-full mb-4">
                  <BookOpen className="w-5 h-5" />
                  <span className="font-medium">End of Lower Secondary</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Cambridge Lower Secondary Checkpoint
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {[
                  { subject: "English", color: "bg-[#F7ECDE]" },
                  { subject: "Mathematics", color: "bg-[#E9DAC1]" },
                  { subject: "Science", color: "bg-[#9ED2C6] text-white" },
                ].map((item, index) => (
                  <div key={index} className={`${item.color} p-4 rounded-xl text-center`}>
                    <h3 className="font-semibold">{item.subject}</h3>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#F7ECDE] p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">External Marking</h3>
                  <p className="text-gray-700 text-sm">
                    All assessments are externally marked by Cambridge International for objectivity and consistency.
                  </p>
                </div>

                <div className="bg-[#9ED2C6] p-6 rounded-xl text-white">
                  <h3 className="text-lg font-semibold mb-3">Student Outcomes</h3>
                  <p className="text-sm opacity-90">
                    Students receive achievement statements plus detailed diagnostic reports for targeted improvement.
                  </p>
                </div>
              </div>
            </section>

            {/* Cambridge IGCSE - Side-by-side Layout */}
            <section className="bg-gradient-to-r from-[#9ED2C6] to-[#54BAB9] rounded-2xl p-8 md:p-12 shadow-lg text-white">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-3 mb-6">
                    <Award className="w-8 h-8" />
                    <h2 className="text-3xl md:text-4xl font-bold">
                      Cambridge International General Certificate of Secondary Education
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white/20 p-4 rounded-xl">
                      <p className="font-semibold mb-1">March Series → Results in May</p>
                      <p className="font-semibold">June Series → Results in August</p>
                    </div>

                    <div className="bg-white/20 p-4 rounded-xl">
                      <h3 className="font-semibold mb-2">Assessment Types</h3>
                      <p className="text-sm opacity-90">Written • Oral • Coursework • Practical</p>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2 space-y-4">
                  <div className="bg-white/20 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold mb-4">Curriculum Options</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/30 p-3 rounded-lg text-center">
                        <p className="font-semibold">Core</p>
                        <p className="text-xs opacity-90">Foundation</p>
                      </div>
                      <div className="bg-white/30 p-3 rounded-lg text-center">
                        <p className="font-semibold">Extended</p>
                        <p className="text-xs opacity-90">Advanced</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/20 p-6 rounded-xl text-center">
                    <p className="text-2xl font-bold mb-2">A* → G</p>
                    <p className="text-sm opacity-90">Globally Recognized Grades</p>
                  </div>
                </div>
              </div>
            </section>

            {/* AS & A Level - Clean Grid Layout */}
            <section className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border-2 border-[#E9DAC1]">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-[#54BAB9] text-white px-4 py-2 rounded-full mb-4">
                  <Users className="w-5 h-5" />
                  <span className="font-medium">Advanced Qualifications</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Advanced Subsidiary & A Level Examinations
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-[#F7ECDE] p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Schedule</h3>
                  <p className="text-gray-700">March & June series annually</p>
                </div>

                <div className="bg-[#9ED2C6] p-6 rounded-xl text-white">
                  <h3 className="text-lg font-semibold mb-3">Duration</h3>
                  <p className="text-sm">Advanced Subsidiary Level: 1 Year</p>
                  <p className="text-sm">A Level: 2 Years</p>
                </div>

                <div className="bg-[#E9DAC1] p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Routes</h3>
                  <p className="text-sm text-gray-700">Advanced Subsidiary Only • Staged • Full A Level</p>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg">
                <p className="text-red-800 text-sm">
                  <strong>Note:</strong> Not all subjects allow staged routes. Advanced Subsidiary qualifications in
                  languages cannot be carried forward.
                </p>
              </div>
            </section>

            {/* International Benchmark Tests - Simple Layout */}
            <section className="bg-gradient-to-r from-[#E9DAC1] to-[#F7ECDE] rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <div className="bg-[#54BAB9] p-6 rounded-xl text-white">
                    <Globe className="w-8 h-8 mb-3" />
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">International Benchmark Tests</h2>
                    <p className="text-sm opacity-90">Grades 3-10 • ACER Developed</p>
                  </div>
                </div>

                <div className="lg:w-2/3 grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Subjects</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• English Language</li>
                      <li>• Mathematics</li>
                      <li>• Science</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Features</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Updated yearly</li>
                      <li>• Skill-based assessment</li>
                      <li>• International comparison</li>
                      <li>• Detailed reports</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  )
}
