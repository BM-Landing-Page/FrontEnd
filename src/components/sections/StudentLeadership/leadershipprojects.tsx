"use client"

import Image from "next/image"
import { Heart, Globe, Zap, Target } from "lucide-react"
import { useState } from "react"

export default function LeadershipProjects() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

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

  const keyProjects = [
    {
      id: "kanavu",
      name: "KANAVU Project with ASSEFA",
      image: "/images/kadalurassefa.jpeg",
      description:
        "The KANAVU Project, through a partnership with ASSEFA, enabled student leaders to conduct fortnightly literacy sessions while immersing in community needs to build empathy and sustainable educational growth.",
    },
    {
      id: "eco-champs",
      name: "Eco Champs with BHUMI",
      image: "/images/ecochamps.jpeg",
      description:
        "A student-led, volunteer-guided sustainability program where Grades 7–11 learned, practiced and led eco-actions—from eco-bricks to composting—culminating in student changemakers winning awards for impactful ideas.",
    },
    {
      id: "bhumi-young",
      name: "BHUMI Young Changemakers Program",
      image: "/students-environmental-project-planning.jpg",
      description:
        "Student leaders identified their cause, learned from NGOs and community groups, trained to create impact, and independently executed and reported on their own service projects.",
    },
    {
      id: "kids-education",
      name: "Kids Education Revolution",
      image: "/images/ker.jpeg",
      description:
        "Our Grade 11 student was selected nationally as a young changemaker and learned partnership-driven approaches. She returned with new practices and insights that enriched the whole school community.",
    },
    {
      id: "scribe",
      name: "Scribe Program with Pratiksha Learning Centre",
      image: "/students-volunteering-helping-learning.jpg",
      description:
        "Through our ongoing partnership, students serve as scribing volunteers, gaining patience, strong listening skills, and deep empathy for diverse learning needs.",
    },
    {
      id: "paalvadi",
      name: "Visit to Government Paalvadi Schools",
      image: "/images/pallvadi.jpeg",
      description:
        "Student leaders visited Paalvadi government schools, learned about local livelihoods and women-led leadership and conducted storytelling and sports for kindergarteners. It ended with reflective mentoring discussions on giving back.",
    },
  ]

  const awarenessCulturalProjects = [
    {
      id: "beyond-green",
      name: "Beyond Green - Environmental Awareness Rally",
      image: "/images/beyondgreen.jpeg",
      description:
        "Students organized an impactful environmental awareness campaign, rallying the community to take action on ecological conservation and sustainable practices.",
    },
    {
      id: "chitlapakkam",
      name: "Chitlapakkam Rising - Save Lakes Walkathon",
      image: "/images/savelakes.jpeg",
      description:
        "A student-led walkathon initiative to raise awareness about lake conservation and environmental protection in the Chitlapakkam area.",
    },
    {
      id: "student-exchange",
      name: "Student Exchange Program",
      image: "/students-cultural-exchange-international.jpg",
      description:
        "Students participated in cultural exchanges that broadened perspectives, fostered global understanding, and built meaningful international connections.",
    },
  ]

  const studentLedInitiatives = [
    {
      id: "act",
      name: "Action for Community Transformation",
      image: "/act-symposium-sustainability-conference.jpg",
      description:
        "ACT was a student-led sustainability symposium which empowered students to analyse issues and pursue actionable environmental change. We brought together educators and experts for panel discussions and judging presentations for collaborative action.",
    },
    {
      id: "i-can",
      name: "I CAN School Challenge",
      image: "/students-design-thinking-challenge-innovation.jpg",
      description:
        'Through the "I CAN" School Challenge with Design for Change, our student leaders got featured for identifying issues like excessive screen time and low reading interest in their community, implementing their solution. They learned that small actions spark meaningful change.',
    },
    {
      id: "leadership-council",
      name: "Student Leadership Council - Outreach & Inclusion Department",
      image: "/student-leadership-council-meeting.jpg",
      description:
        "Student leaders drove outreach initiatives and fostered inclusion across the school community, creating safe spaces and meaningful engagement for all members.",
    },
    {
      id: "community-uplift",
      name: "Internal Community Upliftment Initiative",
      image: "/students-support-staff-interview-internship.jpg",
      description:
        "Student leaders built deep connections with support staff through home interviews, creating personalised skill-development internships where drivers explored media, admin, and football roles—revealing shared talent and the value of every community member.",
    },
    {
      id: "bmun",
      name: "Budding Minds United Nations (BMUN)",
      image: "/student-conference-debate-united-nations.jpg",
      description:
        "BMUN was a student-led diplomatic conference where learners handled end-to-end management including budget and logistics, united multiple schools to debate crises, practiced advanced negotiation and alliances and built global awareness.",
    },
  ]

  const ProjectCard = ({ project }: { project: (typeof keyProjects)[0] }) => {
    return (
      <div
        className="relative overflow-hidden rounded-lg h-64 cursor-pointer group"
        onMouseEnter={() => setHoveredCard(project.id)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[#54BAB9] opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>

        {/* Title - always visible */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
          <h3 className="text-white font-semibold text-lg">{project.name}</h3>
        </div>

        {/* Description - visible on hover */}
        {hoveredCard === project.id && (
          <div className="absolute inset-0 p-4 flex items-center justify-center">
            <p className="text-white text-sm text-center leading-relaxed">{project.description}</p>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-96 overflow-hidden">
        <Image
          src="/students-leading-community-initiatives-transformat.jpg"
          alt="Students leading community initiatives and transformation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-35"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4 drop-shadow-lg">Leadership projects</h1>
          </div>
        </div>
      </section>

      {/* Community Initiatives - Our Approach */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Community Initiatives</h2>
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

      {/* Key Community Projects at BMIS */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Community Projects at BMIS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Awareness & Cultural Exchange */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Awareness & Cultural Exchange</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awarenessCulturalProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Student-Led Initiatives */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Student-Led Initiatives</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentLedInitiatives.map((project) => (
              <ProjectCard key={project.id} project={project} />
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