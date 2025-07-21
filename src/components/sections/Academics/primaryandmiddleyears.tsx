"use client"

import type React from "react"

import { motion } from "framer-motion"

// Animation variants with correct type cast for `ease`
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0, 0, 0.2, 1] as [number, number, number, number],
    },
  },
}

// Optional color palette
const colors = {
  lightTan: "#F7ECDE",
  mediumTan: "#E9DAC1",
  lightTeal: "#9ED2C6",
  darkTeal: "#54BAB9",
  white: "#FFFFFF",
}

// Reusable Feature Card
interface FeatureCardProps {
  title: string
  description?: string
  icon?: string
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => (
  <motion.div
    className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    variants={fadeInUpVariants}
  >
    {icon && <span className="text-4xl mb-3">{icon}</span>}
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    {description && <p className="text-base text-gray-600 leading-relaxed">{description}</p>}
  </motion.div>
)

export default function PrimaryAndMiddleYears() {
  const primarySubjectsData = [
    {
      grade: "1",
      english: "✔",
      math: "✔",
      evs: "✔",
      languages: "Tamil + Hindi",
      globalstudies: "–",
      ict: "–",
      robotics: "–",
      pe: "✔",
    },
    {
      grade: "2",
      english: "✔",
      math: "✔",
      evs: "✔",
      languages: "Tamil + Hindi",
      globalstudies: "–",
      ict: "–",
      robotics: "✔",
      pe: "✔",
    },
    {
      grade: "3",
      english: "✔",
      math: "✔",
      evs: "✔",
      languages: "Tamil + Hindi",
      globalstudies: "✔",
      ict: "✔",
      robotics: "✔",
      pe: "✔",
    },
    {
      grade: "4–5",
      english: "✔",
      math: "✔",
      evs: "✔",
      languages: "Tamil / Hindi + French",
      globalstudies: "✔",
      ict: "✔",
      robotics: "✔",
      pe: "✔",
    },
  ]

  const lowerSecondarySubjectsData = [
    {
      grade: "6–8",
      english: "✔",
      math: "✔",
      science: "✔",
      languages: "Tamil / Hindi / French",
      globalstudies: "✔",
      ict: "✔",
      robotics: "✔",
      pe: "✔",
    },
  ]

  const Specials = [
    { label: "Dance", emoji: "🎶" },
    { label: "Music", emoji: "🎼" },
    { label: "Arts & Crafts", emoji: "🎨" },
    { label: "Karate", emoji: "🥋" },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Hero Banner Section */}
      <motion.section
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center text-white p-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/placeholder.svg?height=500&width=1500&query=school%20children%20learning%20in%20classroom)`,
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUpVariants}
      >
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg" variants={fadeInUpVariants}>
            Empowering Future Leaders
          </motion.h1>
          <motion.p className="text-xl md:text-2xl leading-relaxed drop-shadow-lg" variants={fadeInUpVariants}>
            Discover the Cambridge Curriculum at BMIS: Nurturing Excellence from Primary to Middle Years.
          </motion.p>
        </div>
      </motion.section>

      {/* Section 1: Cambridge Primary Programme (CPP) */}
      <Section title="Cambridge Primary Programme (CPP)" bg={colors.lightTan}>
        <p className="text-xl leading-relaxed mb-6 text-center max-w-3xl mx-auto">
          The Cambridge Primary Programme (CPP) from the University of Cambridge builds essential skills in English,
          Mathematics, and Science for children aged 5 to 11. Adopted in full at BMIS, this programme offers a
          step-by-step learning journey that prepares students exceptionally well for secondary education.
        </p>
        <p className="text-xl leading-relaxed mb-12 text-center max-w-3xl mx-auto">
          CPP not only develops academic competence but also allows teachers and parents to track each child’s growth.
          From Grade 2 onwards, students take Progression Tests in English, Math, and Science to benchmark their
          performance globally.
        </p>
        <h3 className="text-3xl font-bold mb-8 text-[#54BAB9] text-center">Key Features:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard title="Structured Learning" description="Objectives for each academic year." icon="📚" />
          <FeatureCard title="Holistic Development" description="Through integrated subjects." icon="🌱" />
          <FeatureCard title="Progress Tracking" description="With Progression Tests from Grade 2." icon="📈" />
          <FeatureCard title="Curriculum Flexibility" description="With expert Cambridge guidance." icon="💡" />
        </div>
      </Section>

      <Section title="Subjects Offered in Primary Grades (Grades 1–5)" bg={colors.white}>
        <SubjectsTable data={primarySubjectsData} type="primary" />
        <h3 className="text-3xl font-bold mb-8 text-[#54BAB9] text-center">Specials (Co-curricular):</h3>
        <div className="flex flex-wrap justify-center gap-4 text-lg leading-relaxed">
          {Specials.map((item, idx) => (
            <motion.div
              key={idx}
              className="flex items-center gap-2 p-4 bg-[#9ED2C6] text-gray-900 rounded-full shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUpVariants}
            >
              <span role="img" aria-label={`${item.label} emoji`}>
                {item.emoji}
              </span>
              {item.label}
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Robotics: PLAY – CREATE – INNOVATE" bg={colors.lightTan}>
        <p className="text-xl leading-relaxed max-w-3xl mx-auto text-center">
          Students are introduced to robot construction, Scratch-based coding, and design thinking techniques, aligned
          with the Cambridge curriculum and 21st-century skills.
        </p>
      </Section>

      <Section title="Flipped Learning – From Grade 5 Onwards" bg={colors.white}>
        <p className="text-xl leading-relaxed mb-6 max-w-3xl mx-auto text-center">
          Starting Grade 5, BMIS follows a Flipped Classroom Model. Preparation for class topics is assigned as
          pre-class research or reading. This model encourages students to take ownership of learning.
        </p>
      </Section>

      <Section title="Cambridge Secondary Programme" bg={colors.lightTan}>
        <p className="text-xl leading-relaxed mb-12 text-center max-w-3xl mx-auto">
          The Cambridge Lower Secondary Programme (Grades 6–8) prepares students for the IGCSE curriculum in Grades
          9–10. It is designed for learners aged 11 to 14.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard title="English & English as a Second Language" icon="🗣️" />
          <FeatureCard title="Mathematics" icon="🔢" />
          <FeatureCard title="Science" icon="🔬" />
        </div>
      </Section>

      <Section title="Assessment & Benchmarking" bg={colors.white}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard title="Progression Tests" description="Internal assessments to track progress." icon="📝" />
          <FeatureCard title="Checkpoint Tests" description="Externally benchmarked tests." icon="🌍" />
        </div>
      </Section>

      <Section title="Global Perspective Projects" bg={colors.lightTan}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard title="Identify Problems" icon="🔍" />
          <FeatureCard title="Analyze Causes & Effects" icon="🔗" />
          <FeatureCard title="Propose Solutions" icon="💡" />
          <FeatureCard title="Brainstorm Strategies" icon="🧠" />
        </div>
      </Section>

      <Section title="Subjects Offered in Lower Secondary (Grades 6–8)" bg={colors.white}>
        <SubjectsTable data={lowerSecondarySubjectsData} type="secondary" />
      </Section>
    </div>
  )
}

// Reusable Section Component
const Section = ({
  title,
  bg,
  children,
}: {
  title: string
  bg: string
  children: React.ReactNode
}) => (
  <motion.section
    className="py-16 px-4"
    style={{ backgroundColor: bg }}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={fadeInUpVariants}
  >
    <div className="max-w-5xl mx-auto">
      <h2 className="text-5xl font-extrabold mb-8 text-[#54BAB9] text-center">{title}</h2>
      {children}
    </div>
  </motion.section>
)

// Table Generator
const SubjectsTable = ({
  data,
  type,
}: {
  data: any[]
  type: "primary" | "secondary"
}) => {
  const headers =
    type === "primary"
      ? ["Grade", "English", "Math", "EVS", "Languages", "Global Studies", "ICT", "Robotics", "PE"]
      : ["Grade", "English", "Math", "Science", "Languages", "Global Studies", "ICT", "Robotics", "PE"]
  return (
    <div className="overflow-x-auto mb-12 border border-gray-200 rounded-xl shadow-xl">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-[#54BAB9] text-white">
          <tr>
            {headers.map((head) => (
              <th key={head} className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#F7ECDE]"}>
              {headers.map((head, idx) => {
                const key = head.toLowerCase().replace(/ /g, "")
                return (
                  <td key={idx} className="px-6 py-4 whitespace-nowrap text-base text-gray-700">
                    {row[key]}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
