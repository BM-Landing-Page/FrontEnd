import Image from "next/image"
import { Heart, Globe, Zap, Target } from "lucide-react"

export default function LeadershipProjects() {
  const initiatives = [
    {
      icon: Target,
      title: "3D Model",
      description: "Student-Led Community Transformation",
    },
    {
      icon: Heart,
      title: "Empathy-Driven",
      description: "Fostering Deep understanding of community",
    },
    {
      icon: Zap,
      title: "Student-Driven",
      description: "Empowering students to lead, ideate and share",
    },
    {
      icon: Globe,
      title: "Community-Driven",
      description: "Direct engagement with communities establishing long-term partnerships",
    },
  ]

  const partnerships = [
    {
      name: "KANAVU Project",
      partner: "Partnership with ASSEFA",
      description:
        "The KANAVU Project, through a partnership with ASSEFA, enabled student leaders to conduct fortnightly literacy sessions while immersing in community needs to build empathy and sustainable educational growth.",
    },
    {
      name: "Eco Champs",
      partner: "Partnership with BHUMI",
      description:
        "A student-led, volunteer-guided sustainability program where Grades 7–11 learned, practiced and led eco-actions—from eco-bricks to composting—culminating in student changemakers winning awards for impactful ideas.",
    },
    {
      name: "BHUMI Young Changemakers Program",
      partner: "Partnership with BHUMI",
      description:
        "Student leaders identified their cause, learned from NGOs and community groups, trained to create impact, and independently executed and reported on their own service projects.",
    },
    {
      name: "Kids Education Revolution",
      partner: "A Teach-for-India Initiative",
      description:
        "Our Grade 11 student was selected nationally as a young changemaker and learned partnership-driven approaches. She returned with new practices and insights that enriched the whole school community.",
    },
    {
      name: "Inclusion & Insight - Scribe Program",
      partner: "Ongoing Partnership",
      description:
        "Through our ongoing partnership, students serve as scribing volunteers, gaining patience, strong listening skills, and deep empathy for diverse learning needs.",
    },
    {
      name: "Educational Empowerment",
      partner: "Local Government Schools",
      description:
        "Student leaders visited Paalvadi government schools, learned about local livelihoods and women-led leadership and conducted storytelling and sports for kindergarteners. It ended with reflective mentoring discussions on giving back.",
    },
  ]

  const studentLedInitiatives = [
    {
      title: "Action for Community Transformation",
      description:
        "ACT was a student-led sustainability symposium which empowered students to analyse issues and pursue actionable environmental change. We brought together educators and experts for panel discussions and judging presentations for collaborative action.",
    },
    {
      title: "I CAN School Challenge",
      description:
        'Through the "I CAN" School Challenge with Design for Change, our student leaders got featured for identifying issues like excessive screen time and low reading interest in their community, implementing their solution. They learned that small actions spark meaningful change.',
    },
    {
      title: "Kindness Week",
      description:
        "The Outreach & Inclusion team led Kindness Week with a gratitude corner, conflict-resolution sessions, seedball volunteering, and schoolwide grocery, stationery, and hygiene drives, donating all contributions to a local men's mental-health institution and a girls' shelter.",
    },
    {
      title: "Internal Community Upliftment Initiative",
      description:
        "Student leaders built deep connections with support staff through home interviews, creating personalised skill-development internships where drivers explored media, admin, and football roles—revealing shared talent and the value of every community member.",
    },
    {
      title: "Budding Minds United Nations",
      description:
        "BMUN was a student-led diplomatic conference where learners handled end-to-end management including budget and logistics, united multiple schools to debate crises, practiced advanced negotiation and alliances and built global awareness.",
    },
  ]

  const keyProjects = [
    { name: "KANAVU Project with ASSEFA" },
    { name: "Eco Champs with BHUMI" },
    { name: "BHUMI Young Changemakers Program" },
    { name: "Kids Education Revolution" },
    { name: "Scribe Program with Pratiksha Learning Centre" },
    { name: "Visit to Government Paalvadi Schools" },
    { name: "International Award for Young People" },
    { name: "Beyond Green - Environmental Awareness Rally" },
    { name: "Chitlapakkam Rising - Save Lakes Walkathon" },
    { name: "Student Exchange Program" },
    { name: "Action for Community Transformation" },
    { name: "I CAN School Challenge" },
    { name: "Student Leadership Council - Outreach & Inclusion Department" },
    { name: "Internal Community Upliftment Initiative" },
    { name: "Budding Minds United Nations (BMUN)" },
    { name: "Presented Projects before the Industrial Waste Management Association" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-96 overflow-hidden">
        <Image
          src="/images/leadership-hero.jpg"
          alt="Students leading community initiatives and transformation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-35"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4 drop-shadow-lg">
              Leadership projects
            </h1>
            {/* <p className="text-lg sm:text-xl max-w-2xl mx-auto drop-shadow-md">
              Empowering students to lead meaningful change through community engagement and transformative initiatives
            </p> */}
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Approach</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {initiatives.map((initiative, idx) => {
              const Icon = initiative.icon
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center p-4 rounded-lg"
                  style={{ backgroundColor: "#F7ECDE" }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                    style={{ backgroundColor: "#54BAB9" }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{initiative.title}</h3>
                  <p className="text-sm text-gray-700">{initiative.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Key Projects Overview */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Community Projects</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-3">
            {keyProjects.map((project, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg text-center text-sm font-medium text-gray-800"
                style={{ backgroundColor: "#E9DAC1" }}
              >
                {project.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Partnerships & Collaborations</h2>
          <div className="space-y-4">
            {partnerships.map((partnership, idx) => (
              <div key={idx} className="pb-4 border-b border-gray-200 last:border-b-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{partnership.name}</h3>
                <p className="text-sm font-medium text-gray-700 mb-2">{partnership.partner}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{partnership.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student-Led Initiatives */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Student-Led Initiatives</h2>
          <div className="space-y-4">
            {studentLedInitiatives.map((initiative, idx) => (
              <div key={idx} className="p-5 rounded-lg" style={{ backgroundColor: "#9ED2C6" }}>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{initiative.title}</h3>
                <p className="text-sm text-gray-800 leading-relaxed">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#54BAB9" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Creating Lasting Change</h2>
          <p className="text-base text-white leading-relaxed">
            Our student-led community initiatives reflect a deep commitment to empathy-driven action and sustainable
            impact. Through meaningful partnerships and collaborative projects, students discover their capacity to
            lead, inspire, and transform their communities.
          </p>
        </div>
      </section>
    </div>
  )
}
