"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Calendar, Target, Award, Heart, Palette, Trophy, Globe } from "lucide-react"

export default function SLCOverview() {
  const departments = [
    {
      name: "Outreach and Inclusion",
      icon: <Globe className="w-6 h-6" />,
      color: "#54BAB9",
      description:
        "Leading service-learning and outreach initiatives, connecting students with local and global communities. They promote diversity, inclusion, and accessibility across events.",
    },
    {
      name: "Events and Engagement",
      icon: <Calendar className="w-6 h-6" />,
      color: "#9ED2C6",
      description:
        "Planning and executing vibrant school events that boost school spirit. They coordinate with staff and vendors for logistics, manage venues and equipment.",
    },
    {
      name: "Creative Expressions",
      icon: <Palette className="w-6 h-6" />,
      color: "#E9DAC1",
      description:
        "Promoting artistic talent through writing, art, music, and design. Leading the BM Gazette, organizing creative events, and supporting school displays.",
    },
    {
      name: "Sports and Wellness",
      icon: <Trophy className="w-6 h-6" />,
      color: "#F7ECDE",
      description:
        "Organizing school sporting events, leagues, and Sports Day while working closely with the sports coordinator to promote wellness.",
    },
  ]

  const timelineEvents = [
    {
      year: "Initial Phase",
      title: "Foundation & Growth",
      description:
        "Inclusive application process for Grades 5-10, term-wise elections, and the first Student Leadership Summit.",
      color: "#F7ECDE",
    },
    {
      year: "Pandemic Era",
      title: "Digital Adaptation",
      description:
        "Transition to online format with Global Analytica and virtual talent shows, facing engagement challenges.",
      color: "#E9DAC1",
    },
    {
      year: "Post-Pandemic",
      title: "Reflection & Redefinition",
      description:
        "Strategic pause to redefine purpose, structured responsibilities, and introduction of disciplinary committee.",
      color: "#9ED2C6",
    },
    {
      year: "2025-2026",
      title: "Cabinet Model Success",
      description: "Department-based Student Leadership Cabinet with clear delegation and collaborative functioning.",
      color: "#54BAB9",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#F7ECDE] via-[#E9DAC1] to-[#9ED2C6]"
          style={{
            backgroundImage: `url('/placeholder.svg?height=800&width=1200')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
          }}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Student Leadership Program
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              A Journey of Growth, Reflection, and Transformation at Budding Minds
            </p>
            <div className="bg-white/20 text-white border border-white/30 rounded-full text-lg px-6 py-2 inline-block">
              Evolution Overview
            </div>
          </div>
        </div>
      </section>

      {/* Evolution Timeline */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Evolution Journey</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From inclusive beginnings to a structured cabinet model, discover how our Student Leadership Program has
              transformed over the years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timelineEvents.map((event, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="h-2 w-full" style={{ backgroundColor: event.color }} />
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: event.color }}
                    >
                      {index + 1}
                    </div>
                    <div className="ml-3 px-3 py-1 border border-gray-300 rounded-full text-sm bg-white text-gray-700 inline-block">
                      {event.year}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{event.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Cabinet Structure */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#F7ECDE]/30 to-[#9ED2C6]/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Student Leadership Cabinet 2025-2026</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our department-based leadership model with clear delegation and collaborative functioning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="h-1 w-full" style={{ backgroundColor: dept.color }} />
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center text-white mr-4"
                      style={{ backgroundColor: dept.color }}
                    >
                      {dept.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{dept.name}</h3>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed">{dept.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto overflow-hidden">
            <div className="bg-gradient-to-r from-[#54BAB9] to-[#9ED2C6] p-8 md:p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                At BMIS, we are dedicated to fostering the next generation of leaders. Our Student Leadership Cabinet is
                designed to make a real impact on our school community through structured collaboration, meaningful
                engagement, and inclusive representation.
              </p>
            </div>
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-12 h-12 bg-[#F7ECDE] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-[#54BAB9]" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Inclusive Leadership</h3>
                  <p className="text-gray-600">Fostering diverse voices and perspectives across all grade levels.</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-[#E9DAC1] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-[#54BAB9]" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Meaningful Impact</h3>
                  <p className="text-gray-600">
                    Creating tangible change through structured departments and clear responsibilities.
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-[#9ED2C6] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-[#54BAB9]" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Excellence</h3>
                  <p className="text-gray-600">
                    Promoting accountability, recognition, and continuous growth in leadership.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
