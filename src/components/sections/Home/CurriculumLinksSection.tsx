"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { BookOpen, Users } from "lucide-react"

// Local bubble component for section
function SectionBubble({
  delay,
  duration,
  size,
  left,
  top,
  animationDelay,
  color,
}: {
  delay: number
  duration: number
  size: number
  left: string
  top: string
  animationDelay: number
  color: string
}) {
  return (
    <div
      className="absolute rounded-full animate-pulse"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: left,
        top: top,
        backgroundColor: color,
        animationDelay: `${animationDelay}s`,
        animationDuration: `${duration}s`,
        animationIterationCount: "infinite",
      }}
    />
  )
}

export default function CurriculumLinksSection() {
  const [sectionBubbles, setSectionBubbles] = useState<
    Array<{
      id: number
      delay: number
      duration: number
      size: number
      left: string
      top: string
      animationDelay: number
      color: string
    }>
  >([])

  useEffect(() => {
    const colors = ["#9ED2C6", "#54BAB9", "#F7ECDE", "#E9DAC1"]
    const newBubbles = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 3,
      size: 8 + Math.random() * 20,
      left: `${10 + Math.random() * 80}%`,
      top: `${10 + Math.random() * 30}%`,
      animationDelay: Math.random() * 4,
      color: colors[Math.floor(Math.random() * colors.length)] + "40",
    }))
    setSectionBubbles(newBubbles)
  }, [])

  const curriculumLinks = [
    {
      title: "Early Years",
      description: "Explore our nurturing curriculum and holistic learning environment for young minds.",
      href: "/earlyyears",
      icon: BookOpen,
      gradient: "from-[#F7ECDE] to-[#E9DAC1]",
      accentColor: "#9ED2C6",
      thumbnail: "/images/earlyyearshome.jpg",
    },
    {
      title: "Primary & Middle Years",
      description: "Discover our comprehensive curriculum designed for growing learners.",
      href: "/primaryandmiddleyears",
      icon: Users,
      gradient: "from-[#E9DAC1] to-[#9ED2C6]",
      accentColor: "#54BAB9",
      thumbnail: "/images/primaryhome.jpg",
    },
  ]

  return (
    <section className="w-full relative">
      {/* Section Bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {sectionBubbles.map((bubble) => (
          <SectionBubble key={bubble.id} {...bubble} />
        ))}
      </div>

      <div className="relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Curriculum at Budding Minds</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our educational pathways designed to nurture and inspire students at every stage of their learning
            journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {curriculumLinks.map((link, index) => {
            const IconComponent = link.icon
            return (
              <Link key={index} href={link.href} className="group block">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#9ED2C6] to-[#54BAB9] p-1 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="bg-white rounded-xl p-6 h-96">
                    {/* Thumbnail Image */}
                    <div className="relative overflow-hidden rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={link.thumbnail || "/placeholder.svg"}
                        alt={link.title}
                        width={400}
                        height={200}
                        className="w-full h-56 object-cover"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/50 to-transparent"></div>
                      {/* Icon overlay */}
                      <div className="absolute top-3 left-3 p-2 rounded-lg bg-white/90 shadow-sm">
                        <IconComponent className="w-5 h-5" style={{ color: link.accentColor }} />
                      </div>
                    </div>
                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{link.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Section Separator */}
      <div className="flex justify-center items-center py-8">
        <div className="flex items-center space-x-4 w-full max-w-md">
          {/* First line */}
          <div className="flex-1 h-1 bg-[#54BAB9] rounded-full"></div>
          {/* First circle */}
          <div className="w-4 h-4 bg-[#9ED2C6] rounded-full"></div>
          {/* Second line */}
          <div className="flex-1 h-1 bg-[#54BAB9] rounded-full"></div>
          {/* Second circle (cream/beige) */}
          <div className="w-4 h-4 bg-[#E9DAC1] rounded-full"></div>
          {/* Third line */}
          <div className="flex-1 h-1 bg-[#54BAB9] rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
