import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function PedagogyAndModules() {
  const programs = [
    {
      name: "CICTL",
      title: "Cambridge International Certificate in Teaching and Learning",
      description:
        "Perfect for educators working in schools, colleges, activity centres, and adult learning environments.",
      duration: "4 months",
      modules: 1,
      color: "from-[#54BAB9]",
      who: "Educators working in schools, colleges, activity centres, and adult learning environments",
    },
    {
      name: "CIDTL",
      title: "Cambridge International Diploma in Teaching and Learning",
      description:
        "For practising educators who wish to enhance pedagogy, implement evidence-based teaching practices, and lead improvements.",
      duration: "7 months",
      modules: 3,
      color: "from-[#9ED2C6]",
      who: "Practising educators who wish to enhance pedagogy, implement evidence-based teaching practices, and lead improvements",
    },
    {
      name: "CEYGP",
      title: "Cambridge Early Years Good Practice",
      description:
        "Designed for early years teachers, pre-primary educators, kindergarten facilitators, and childhood professionals.",
      duration: "4 months",
      modules: 1,
      color: "from-[#E9DAC1]",
      who: "Early years teachers, pre-primary educators, kindergarten facilitators, Montessori practitioners, and early childhood professionals",
    },
  ]

  const benefits = [
    {
      icon: "🧠",
      title: "Professional Thinking",
      description: "Develop strong professional thinking and reflective practice",
    },
    {
      icon: "📈",
      title: "Global Best Practices",
      description: "Apply global best practices in teaching and learning",
    },
    {
      icon: "🎯",
      title: "Learner Engagement",
      description: "Enhance learner engagement, progress, and achievement",
    },
    {
      icon: "🔍",
      title: "Classroom Strategies",
      description: "Strengthen classroom strategies and assessment approaches",
    },
    {
      icon: "🌟",
      title: "International Certification",
      description: "Grow professionally with internationally respected certification",
    },
  ]

  const budding_minds_benefits = [
    "Cambridge-certified Trainers with extensive expertise",
    "Structured, well-designed online sessions",
    "Subject Expert support for every candidate",
    "Hands-on guidance for portfolio preparation",
    "Personalised feedback and reflective conversations",
    "A supportive professional learning community",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative h-80 md:h-96 w-full overflow-hidden">
        <Image
          src="/images/pedagogymodules.jpg"
          alt="Cambridge Professional Development Qualifications"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Cambridge Professional Development Qualifications (PDQs)
            </h1>
            <p className="text-lg md:text-xl font-light">CICTL • CIDTL • CEYGP</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Introduction Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
            Empowering Educators. Elevating Learning.
          </h2>

          <div className="max-w-4xl mx-auto text-gray-700 space-y-6 text-lg leading-relaxed">
            <p>
              At Budding Minds International School, we are proud to offer internationally recognised Cambridge
              Professional Development Qualifications (PDQs). These programmes empower educators to strengthen their
              professional practice through reflective learning, research-based pedagogy, and meaningful classroom
              application.
            </p>

            <p>
              Designed and accredited by Cambridge Assessment International Education (CAIE), UK, these qualifications
              help teachers transform learning and build globally benchmarked teaching competencies.
            </p>

            <div className="border-l-4 border-[#54BAB9] pl-6 py-4">
              <p>
                These qualifications combine guided learning, practical classroom experience, observations, and
                reflective inquiry, enabling educators to create a measurable impact in their practice.
              </p>
            </div>
          </div>
        </div>

        {/* Why Cambridge PDQs */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Why Cambridge PDQs?</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-8">Cambridge PDQs help educators:</p>
            <ul className="space-y-4 text-gray-700 text-lg">
              <li className="flex items-start gap-4">
                <span className="text-[#54BAB9] font-bold text-2xl mt-1">•</span>
                <span>Develop strong professional thinking and reflective practice</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#54BAB9] font-bold text-2xl mt-1">•</span>
                <span>Apply global best practices in teaching and learning</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#54BAB9] font-bold text-2xl mt-1">•</span>
                <span>Enhance learner engagement, progress, and achievement</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#54BAB9] font-bold text-2xl mt-1">•</span>
                <span>Strengthen classroom strategies and assessment approaches</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#54BAB9] font-bold text-2xl mt-1">•</span>
                <span>Grow professionally with internationally respected certification</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Program Overview Cards */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Our Cambridge PDQ Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className={`bg-gradient-to-r ${program.color} to-[#E9DAC1] p-8 text-white`}>
                  <h3 className="text-3xl font-bold mb-2">{program.name}</h3>
                  <p className="text-white/90 font-semibold">{program.title}</p>
                </div>
                <div className="p-8">
                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-500 font-semibold">Duration</p>
                      <p className="text-xl font-bold text-gray-800">{program.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-semibold">Modules</p>
                      <p className="text-xl font-bold text-gray-800">{program.modules}</p>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Module Structure Table */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Program Structure & Requirements
          </h2>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-[#54BAB9] to-[#9ED2C6] text-white">
                    <th className="px-6 py-4 text-left font-bold">Category</th>
                    <th className="px-6 py-4 text-left font-bold">CICTL</th>
                    <th className="px-6 py-4 text-left font-bold">CIDTL</th>
                    <th className="px-6 py-4 text-left font-bold">CEYGP</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-bold text-gray-800 bg-gray-100">Structure</td>
                    <td className="px-6 py-4 text-gray-600">
                      <p className="font-semibold mb-2">Module 1: Exploring learning and teaching</p>
                      <ul className="text-sm space-y-1">
                        <li>Unit 1 – Understanding principles of learning and teaching.</li>
                        <li>Unit 2 – Teaching an effective lesson.</li>
                        <li>Unit 3 – Facilitating active learning through effective teaching and assessment.</li>
                      </ul>
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      <ul className="text-sm space-y-1">
                        <li>Module 1: Exploring Teaching and Learning</li>
                        <li>Module 2: Teaching and Learning in action</li>
                        <li>Module 3: Developing Professional practice</li>
                      </ul>
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      <p className="font-semibold mb-2">
                        Module 1: Exploring child development, learning and teaching in the Early Years
                      </p>
                      <ul className="text-sm space-y-1">
                        <li>Unit 1-Understanding child development</li>
                        <li>Unit 2-Teaching in an effective early years learning environment</li>
                        <li>Unit 3-Facilitating active learning in the early years</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-bold text-gray-800 bg-gray-100">Course duration</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">
                      <ul className="space-y-1">
                        <li>Guided and Individual learning support (4 months)</li>
                        <li>Classes on Alternate Saturdays and all Wednesdays</li>
                      </ul>
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm">
                      <ul className="space-y-1">
                        <li>Guided and Individual learning support (7 months)</li>
                      </ul>
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm">
                      <ul className="space-y-1">
                        <li>Guided and Individual learning support (4 months)</li>
                        <li>Classes on Alternate Saturdays and all Wednesdays</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-bold text-gray-800 bg-gray-100">Course completion</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">
                      Module 1 – Submission and feedback inclusive – 7 months
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm">
                      Module 1,2 and 3 – Submission and feedback inclusive – 1 year
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm">Submission and feedback inclusive – 7 months</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-bold text-gray-800 bg-gray-100">Assessment</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">
                      A pass or distinction in Module‑1 to be eligible for the CICTL certification from Cambridge
                      International Education(CIE) UK.
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm">
                      A pass or distinction in all the 3 modules to be eligible for the CIDTL certification from
                      Cambridge International Education(CIE) UK.
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm">
                      A pass or distinction in Module‑1 to be eligible for the CICTL certification from Cambridge
                      International Education(CIE) UK.
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-bold text-gray-800 bg-gray-100">Who can apply?</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">
                      Educators working in schools, colleges, activity centres, and adult learning environments.
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm">
                      <p className="mb-2">Practising educators who wish to:</p>
                      <ul className="space-y-1">
                        <li># Enhance pedagogy</li>
                        <li># Implement evidence-based teaching practices</li>
                        <li># Lead improvements in their teaching context</li>
                      </ul>
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm">
                      Early years teachers, pre-primary educators, kindergarten facilitators, Montessori practitioners,
                      and early childhood professionals.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Why Choose Budding Minds */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Why Choose Budding Minds International School?
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-8">
              As a Cambridge-accredited centre, Budding Minds International School offers:
            </p>
            <ul className="space-y-4 text-gray-700 text-lg">
              <li className="flex items-start gap-4">
                <span className="text-[#54BAB9] font-bold text-2xl mt-1">•</span>
                <span>Cambridge-certified Trainers with extensive expertise</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#54BAB9] font-bold text-2xl mt-1">•</span>
                <span>Structured, well-designed online sessions</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#54BAB9] font-bold text-2xl mt-1">•</span>
                <span>Subject Expert support for every candidate</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#54BAB9] font-bold text-2xl mt-1">•</span>
                <span>Hands-on guidance for portfolio preparation</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#54BAB9] font-bold text-2xl mt-1">•</span>
                <span>Personalised feedback and reflective conversations</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#54BAB9] font-bold text-2xl mt-1">•</span>
                <span>A supportive professional learning community</span>
              </li>
            </ul>
            <p className="text-lg text-gray-700 mt-8 font-semibold">
              Our commitment is to provide meaningful, transformative professional development rooted in real classroom
              practice.
            </p>
          </div>
        </div>
      </div>
      <div className="py-3 bg-white">
        <div className="flex justify-center">
          <Link href="/pdcommunity" className="inline-block">
            <div className="flex items-center gap-2 bg-[#54BAB9] hover:bg-[#54BAB9]/90 text-white px-5 py-2 rounded-lg shadow-md transition-colors cursor-pointer">
              <div className="text-center">
                <div className="font-semibold text-sm">PD Community</div>
              </div>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
