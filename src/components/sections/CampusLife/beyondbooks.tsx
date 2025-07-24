"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import {
  Sparkles,
  Users,
  School,
  Trophy,
  Music,
  BookOpen,
  Palette,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

export default function BeyondBooks() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [activeTab, setActiveTab] = useState("ignite")

  const heroImages = [
    "/placeholder.svg?height=600&width=1200",
    "/placeholder.svg?height=600&width=1200",
    "/placeholder.svg?height=600&width=1200",
    "/placeholder.svg?height=600&width=1200",
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  const tabs = [
    { id: "ignite", label: "Ignite", icon: Sparkles },
    { id: "interschool", label: "InterSchool", icon: Users },
    { id: "intraschool", label: "IntraSchool", icon: School },
    { id: "excellence", label: "20 Years Excellence", icon: Trophy },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner Carousel */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="relative w-full h-full">
          {heroImages.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={src || "/placeholder.svg"}
                alt={`Hero image ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Beyond Books
              </h1>
              <p className="text-xl md:text-2xl font-light">
                Where learning transcends the classroom and experiences shape tomorrow's leaders
              </p>
            </div>
          </div>
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Curved Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div
              className="flex p-3 rounded-full shadow-2xl backdrop-blur-sm border border-white/20"
              style={{
                background: "linear-gradient(135deg, #54BAB9 0%, #9ED2C6 50%, #54BAB9 100%)",
              }}
            >
              {tabs.map((tab, index) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      relative flex items-center gap-3 px-6 py-4 rounded-full font-semibold transition-all duration-300 text-sm
                      ${
                        activeTab === tab.id
                          ? "bg-white text-gray-900 shadow-xl scale-105 transform"
                          : "text-white hover:bg-white/20 hover:scale-102 transform"
                      }
                      ${index === 0 ? "ml-0" : "ml-2"}
                      ${index === tabs.length - 1 ? "mr-0" : "mr-2"}
                    `}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="whitespace-nowrap">
                      {tab.id === "excellence" ? "20 Years Excellence" : tab.label}
                    </span>
                    {/* Active indicator */}
                    {activeTab === tab.id && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-transparent via-gray-400 to-transparent rounded-full"></div>
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Tab Content */}
          <div className="space-y-12">
            {/* IGNITE Content */}
            {activeTab === "ignite" && (
              <div className="space-y-12 animate-in fade-in duration-500">
                {/* Header Section */}
                <div
                  className="text-center py-16 rounded-2xl shadow-lg"
                  style={{ background: "linear-gradient(135deg, #9ED2C6 0%, #54BAB9 100%)" }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">IGNITE</h2>
                  <p className="text-2xl text-white/90 font-light">Where Learning Goes Beyond the Classroom</p>
                  <div className="w-24 h-1 bg-white/50 mx-auto mt-6"></div>
                </div>

                {/* What is IGNITE Section */}
                <div className="grid lg:grid-cols-3 gap-8">
                  <Card className="lg:col-span-2 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-0">
                    <CardContent
                      className="p-8"
                      style={{ background: "linear-gradient(135deg, #F7ECDE 0%, #E9DAC1 100%)" }}
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">What is IGNITE?</h3>
                      <div className="space-y-4 text-gray-700 leading-relaxed">
                        <p>
                          IGNITE is Budding Minds International School's flagship experiential learning program designed
                          to kindle curiosity, courage, and creativity in students. Rooted in real-world exposure and
                          hands-on engagement, IGNITE takes learning far beyond textbooks—into farms, ateliers,
                          community spaces, and ecosystems that challenge and inspire.
                        </p>
                        <p>
                          Each IGNITE venture is thoughtfully curated to complement academic goals while nurturing
                          essential life skills such as collaboration, empathy, adaptability, and self-reliance.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-0">
                    <CardContent
                      className="p-8 h-full flex flex-col justify-center"
                      style={{ background: "linear-gradient(135deg, #54BAB9 0%, #9ED2C6 100%)" }}
                    >
                      <div className="text-center">
                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                          <Sparkles className="w-10 h-10 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-4">Learning Philosophy</h4>
                        <p className="text-white/90 italic text-lg">
                          "IGNITE is not a break from learning. It is how learning breaks out."
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Why IGNITE Section */}
                <div
                  className="py-16 px-8 rounded-2xl shadow-lg"
                  style={{ background: "linear-gradient(135deg, #E9DAC1 0%, #F7ECDE 100%)" }}
                >
                  <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold mb-4" style={{ color: "#54BAB9" }}>
                      Why IGNITE?
                    </h3>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto italic">
                      Because we believe that the most powerful learning doesn't always happen at a desk.
                    </p>
                    <div className="w-16 h-1 mx-auto mt-4" style={{ backgroundColor: "#54BAB9" }}></div>
                  </div>
                  <div className="text-center mb-8">
                    <p className="text-xl font-medium" style={{ color: "#54BAB9" }}>
                      IGNITE empowers students to:
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden">
                      <div className="h-2" style={{ backgroundColor: "#54BAB9" }}></div>
                      <CardContent className="p-6 text-center">
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                          style={{ backgroundColor: "#9ED2C6" }}
                        >
                          <Sparkles className="w-8 h-8" style={{ color: "#54BAB9" }} />
                        </div>
                        <h4 className="text-lg font-bold mb-3" style={{ color: "#54BAB9" }}>
                          Experience concepts in action
                        </h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Transform theoretical knowledge into practical understanding through hands-on engagement with
                          real-world scenarios.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden">
                      <div className="h-2" style={{ backgroundColor: "#9ED2C6" }}></div>
                      <CardContent className="p-6 text-center">
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                          style={{ backgroundColor: "#54BAB9" }}
                        >
                          <Users className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-lg font-bold mb-3" style={{ color: "#54BAB9" }}>
                          Build real-world skills that foster independence and problem-solving
                        </h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Develop practical abilities and critical thinking that prepare students for life beyond the
                          classroom.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden">
                      <div className="h-2" style={{ backgroundColor: "#F7ECDE" }}></div>
                      <CardContent className="p-6 text-center">
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                          style={{ backgroundColor: "#E9DAC1" }}
                        >
                          <Heart className="w-8 h-8" style={{ color: "#54BAB9" }} />
                        </div>
                        <h4 className="text-lg font-bold mb-3" style={{ color: "#54BAB9" }}>
                          Discover their passions through exploration and participation
                        </h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Uncover interests and talents through diverse experiences and active engagement in various
                          fields.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden">
                      <div className="h-2" style={{ backgroundColor: "#E9DAC1" }}></div>
                      <CardContent className="p-6 text-center">
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                          style={{ backgroundColor: "#F7ECDE" }}
                        >
                          <School className="w-8 h-8" style={{ color: "#54BAB9" }} />
                        </div>
                        <h4 className="text-lg font-bold mb-3" style={{ color: "#54BAB9" }}>
                          Connect with communities, cultures, and environments firsthand
                        </h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Build empathy and understanding through direct interaction with diverse communities and
                          environments.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* How IGNITE Works Section */}
                <div
                  className="py-16 px-8 rounded-2xl shadow-lg"
                  style={{ background: "linear-gradient(135deg, #9ED2C6 0%, #54BAB9 100%)" }}
                >
                  <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-white mb-4">How IGNITE Works</h3>
                    <div className="w-16 h-1 bg-white/50 mx-auto"></div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0">
                      <CardContent className="p-6 text-center">
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                          style={{ backgroundColor: "#F7ECDE" }}
                        >
                          <BookOpen className="w-8 h-8" style={{ color: "#54BAB9" }} />
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-3">Grade-wise Integration</h4>
                        <p className="text-gray-700 leading-relaxed text-sm">
                          IGNITE is integrated across the academic calendar with carefully selected modules aligned with
                          developmental needs of each age group.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0">
                      <CardContent className="p-6 text-center">
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                          style={{ backgroundColor: "#E9DAC1" }}
                        >
                          <Users className="w-8 h-8" style={{ color: "#54BAB9" }} />
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-3">Expert Collaboration</h4>
                        <p className="text-gray-700 leading-relaxed text-sm">
                          Each experience is designed in collaboration with experts, ensuring authentic learning
                          opportunities and meaningful outcomes.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0">
                      <CardContent className="p-6 text-center">
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                          style={{ backgroundColor: "#9ED2C6" }}
                        >
                          <Heart className="w-8 h-8" style={{ color: "#54BAB9" }} />
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-3">Safe & Guided</h4>
                        <p className="text-gray-700 leading-relaxed text-sm">
                          Every experience is safe, purposeful, and fully guided while students enjoy the freedom to
                          explore, question, and reflect.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="text-center mt-12">
                    <Button
                      size="lg"
                      className="bg-white hover:bg-gray-50 text-gray-900 font-bold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200"
                      style={{ color: "#1f2937" }}
                    >
                      Explore our IGNITE Gallery
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* InterSchool Content */}
            {activeTab === "interschool" && (
              <div className="space-y-12 animate-in fade-in duration-500">
                {/* Header Section */}
                <div
                  className="text-center py-16 rounded-2xl shadow-lg"
                  style={{ background: "linear-gradient(135deg, #F7ECDE 0%, #E9DAC1 100%)" }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">InterSchool Events</h2>
                  <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                    Designed to spark collaboration, creativity, and critical thinking by bringing students from
                    different schools together through shared passions and challenges.
                  </p>
                  <div className="w-24 h-1 mx-auto mt-6" style={{ backgroundColor: "#54BAB9" }}></div>
                </div>

                <div className="grid gap-8">
                  <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-0 overflow-hidden">
                    <div
                      className="h-2"
                      style={{ background: "linear-gradient(90deg, #54BAB9 0%, #9ED2C6 100%)" }}
                    ></div>
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                          style={{ background: "linear-gradient(135deg, #9ED2C6 0%, #54BAB9 100%)" }}
                        >
                          <Users className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">BMUN</h3>
                          <p className="text-gray-600 text-lg">Model United Nations</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <p className="text-gray-700 leading-relaxed text-lg">
                          Our first-ever Model United Nations conference, featuring six dynamic committees including
                          UNHRC, UNSC, and IPJ. Students took on global issues with passion and diplomacy, and delegates
                          from various schools joined the debate.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          With BMUN's success, more editions are already in the pipeline.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 mt-6">
                          <div className="p-4 rounded-lg border shadow-sm" style={{ backgroundColor: "#F7ECDE" }}>
                            <h4 className="font-semibold text-gray-900 mb-2">Six Dynamic Committees</h4>
                            <p className="text-gray-700 text-sm">
                              Including UNHRC, UNSC, and IPJ for comprehensive global discussions
                            </p>
                          </div>
                          <div className="p-4 rounded-lg border shadow-sm" style={{ backgroundColor: "#E9DAC1" }}>
                            <h4 className="font-semibold text-gray-900 mb-2">Inter-school Participation</h4>
                            <p className="text-gray-700 text-sm">
                              Delegates from various schools joined the diplomatic debates
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-0 overflow-hidden">
                    <div
                      className="h-2"
                      style={{ background: "linear-gradient(90deg, #9ED2C6 0%, #F7ECDE 100%)" }}
                    ></div>
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                          style={{ background: "linear-gradient(135deg, #F7ECDE 0%, #9ED2C6 100%)" }}
                        >
                          <Heart className="w-8 h-8" style={{ color: "#54BAB9" }} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">ACT</h3>
                          <p className="text-gray-600 text-lg">Environmental Symposium</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <p className="text-gray-700 leading-relaxed text-lg">
                          An interschool environmental symposium where students proposed innovative solutions to
                          pressing environmental challenges.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          These ideas were presented to and reviewed by a panel of experts working in the field,
                          creating a real-world impact and encouraging eco-conscious leadership.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 mt-6">
                          <div className="p-4 rounded-lg border shadow-sm" style={{ backgroundColor: "#9ED2C6" }}>
                            <h4 className="font-semibold text-gray-900 mb-2">Expert Panel Reviews</h4>
                            <p className="text-gray-700 text-sm">
                              Professional experts evaluated student environmental solutions
                            </p>
                          </div>
                          <div className="p-4 rounded-lg border shadow-sm" style={{ backgroundColor: "#E9DAC1" }}>
                            <h4 className="font-semibold text-gray-900 mb-2">Real-world Impact</h4>
                            <p className="text-gray-700 text-sm">
                              Solutions designed to create actual environmental change
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-0 overflow-hidden">
                    <div
                      className="h-2"
                      style={{ background: "linear-gradient(90deg, #E9DAC1 0%, #54BAB9 100%)" }}
                    ></div>
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                          style={{ background: "linear-gradient(135deg, #E9DAC1 0%, #54BAB9 100%)" }}
                        >
                          <Palette className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">La Fête</h3>
                          <p className="text-gray-600 text-lg">French Cultural Event</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <p className="text-gray-700 leading-relaxed text-lg">
                          A vibrant French cultural event that brought together students through fashion shows, musical
                          performances, theatrical skits, and more—entirely in French.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          It celebrated the joy of language learning and cultural appreciation in a truly immersive way.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 mt-6">
                          <div className="p-4 rounded-lg border shadow-sm" style={{ backgroundColor: "#F7ECDE" }}>
                            <h4 className="font-semibold text-gray-900 mb-2">Immersive French Experience</h4>
                            <p className="text-gray-700 text-sm">
                              All performances and activities conducted entirely in French
                            </p>
                          </div>
                          <div className="p-4 rounded-lg border shadow-sm" style={{ backgroundColor: "#9ED2C6" }}>
                            <h4 className="font-semibold text-gray-900 mb-2">Cultural Celebration</h4>
                            <p className="text-gray-700 text-sm">
                              Fashion shows, music, and theatrical performances showcasing French culture
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-0">
                  <CardContent
                    className="p-8 text-center"
                    style={{ background: "linear-gradient(135deg, #54BAB9 0%, #9ED2C6 100%)" }}
                  >
                    <p className="text-white text-xl leading-relaxed max-w-4xl mx-auto">
                      Through these experiences, students not only showcase their talents but also build confidence,
                      forge new friendships, and engage with real-world ideas beyond the classroom.
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* IntraSchool Content */}
            {activeTab === "intraschool" && (
              <div className="space-y-12 animate-in fade-in duration-500">
                {/* Header Section */}
                <div
                  className="text-center py-16 rounded-2xl shadow-lg"
                  style={{ background: "linear-gradient(135deg, #9ED2C6 0%, #54BAB9 100%)" }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">IntraSchool Events</h2>
                  <p className="text-xl text-white/90 max-w-4xl mx-auto">
                    Our school is a vibrant hub of energy, creativity, and collaboration—brought to life through a wide
                    range of intraschool events.
                  </p>
                  <div className="w-24 h-1 bg-white/50 mx-auto mt-6"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-0 overflow-hidden">
                    <div className="h-2" style={{ backgroundColor: "#F7ECDE" }}></div>
                    <CardContent className="p-8 h-full">
                      <div className="flex items-center gap-3 mb-6">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                          style={{ backgroundColor: "#F7ECDE" }}
                        >
                          <Palette className="w-6 h-6" style={{ color: "#54BAB9" }} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">Kidsfest</h3>
                      </div>
                      <div className="space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                          Our annual flagship event that celebrates student creativity and learning through themed
                          performances. Past themes like The Lion King, Cue the Curtains, and Mutha Manikama have
                          brought the school to life.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          Every child participates—on stage or behind the scenes—making it a joyful culmination of their
                          year-long journey.
                        </p>
                        <div className="p-4 rounded-lg border shadow-sm mt-4" style={{ backgroundColor: "#F7ECDE" }}>
                          <h4 className="font-semibold text-gray-900 mb-3">Past Themes</h4>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-white rounded-full text-sm border shadow-sm">
                              The Lion King
                            </span>
                            <span className="px-3 py-1 bg-white rounded-full text-sm border shadow-sm">
                              Cue the Curtains
                            </span>
                            <span className="px-3 py-1 bg-white rounded-full text-sm border shadow-sm">
                              Mutha Manikama
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-0 overflow-hidden">
                    <div className="h-2" style={{ backgroundColor: "#9ED2C6" }}></div>
                    <CardContent className="p-8 h-full">
                      <div className="flex items-center gap-3 mb-6">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                          style={{ backgroundColor: "#9ED2C6" }}
                        >
                          <BookOpen className="w-6 h-6" style={{ color: "#54BAB9" }} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">Project Day</h3>
                      </div>
                      <div className="space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                          A key academic celebration, where students present what they've learned through interactive
                          displays and presentations. Rather than tests, Project Day encourages peer teaching,
                          collaboration, and creativity.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          Parents engage with students' work, making it a meaningful showcase of curiosity and
                          expression.
                        </p>
                        <div className="p-4 rounded-lg border shadow-sm mt-4" style={{ backgroundColor: "#9ED2C6" }}>
                          <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                          <div className="space-y-2">
                            <p className="text-sm text-gray-700">Interactive displays and student presentations</p>
                            <p className="text-sm text-gray-700">Parent engagement and peer teaching opportunities</p>
                            <p className="text-sm text-gray-700">Focus on creativity over traditional testing</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-0 overflow-hidden">
                    <div className="h-2" style={{ backgroundColor: "#E9DAC1" }}></div>
                    <CardContent className="p-8 h-full">
                      <div className="flex items-center gap-3 mb-6">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                          style={{ backgroundColor: "#E9DAC1" }}
                        >
                          <BookOpen className="w-6 h-6" style={{ color: "#54BAB9" }} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">Read-a-thon</h3>
                      </div>
                      <div className="space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                          Our special reading celebration for kindergarteners. Like a Project Day focused on literacy,
                          it features reading-based games and activities created by students.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          Parents are invited to explore and participate, making reading fun and memorable for our
                          youngest learners.
                        </p>
                        <div className="p-4 rounded-lg border shadow-sm mt-4" style={{ backgroundColor: "#E9DAC1" }}>
                          <h4 className="font-semibold text-gray-900 mb-3">Special Focus</h4>
                          <div className="space-y-2">
                            <p className="text-sm text-gray-700">Designed specifically for kindergarten students</p>
                            <p className="text-sm text-gray-700">Reading-based games and student-created activities</p>
                            <p className="text-sm text-gray-700">Interactive parent participation encouraged</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-0 overflow-hidden">
                    <div className="h-2" style={{ backgroundColor: "#54BAB9" }}></div>
                    <CardContent className="p-8 h-full">
                      <div className="flex items-center gap-3 mb-6">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                          style={{ backgroundColor: "#54BAB9" }}
                        >
                          <Trophy className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">Leagues</h3>
                      </div>
                      <div className="space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                          Held each term to promote sportsmanship and participation. Students compete in team games for
                          house points, individual sports like chess and badminton, and fun leagues formed through class
                          groups or auctions.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          These events ensure every student finds their space in sports—whether competitive or playful.
                        </p>
                        <div
                          className="p-4 rounded-lg border shadow-sm mt-4"
                          style={{ backgroundColor: "#54BAB9", color: "white" }}
                        >
                          <h4 className="font-semibold text-white mb-3">Sports Variety</h4>
                          <div className="space-y-2">
                            <p className="text-sm text-white/90">Team games for house point competitions</p>
                            <p className="text-sm text-white/90">Individual sports including chess and badminton</p>
                            <p className="text-sm text-white/90">Fun leagues through class groups and auctions</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-0">
                  <CardContent
                    className="p-8 text-center"
                    style={{ background: "linear-gradient(135deg, #F7ECDE 0%, #E9DAC1 100%)" }}
                  >
                    <p className="text-gray-700 text-xl leading-relaxed max-w-4xl mx-auto">
                      From the stage to the sports field and classroom displays, our intraschool events nurture the
                      whole child—academically, artistically, physically, and emotionally. They are essential moments
                      that spark joy, build connections, and allow every student to shine.
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* 20 Years Excellence Content */}
            {activeTab === "excellence" && (
              <div className="space-y-12 animate-in fade-in duration-500">
                {/* Header Section */}
                <div
                  className="text-center py-16 rounded-2xl shadow-lg"
                  style={{ background: "linear-gradient(135deg, #E9DAC1 0%, #54BAB9 100%)" }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">20 Years of Excellence</h2>
                  <p className="text-xl text-white/90 max-w-4xl mx-auto">
                    Celebrating two decades of nurturing minds, fostering creativity, and building a legacy of
                    educational excellence.
                  </p>
                  <div className="w-24 h-1 bg-white/50 mx-auto mt-6"></div>
                </div>

                {/* BM Reverie */}
                <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-0 overflow-hidden">
                  <div className="h-2" style={{ background: "linear-gradient(90deg, #F7ECDE 0%, #54BAB9 100%)" }}></div>
                  <CardContent className="p-0">
                    <div style={{ background: "linear-gradient(135deg, #F7ECDE 0%, #E9DAC1 100%)" }} className="p-8">
                      <div className="text-center mb-8">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">BM Reverie: Decade 2.0</h3>
                        <p className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto">
                          A week-long celebration of creativity, compassion, talent, and student voice marking our grand
                          20th year milestone.
                        </p>
                      </div>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                          {
                            title: "Masquerade",
                            desc: "A lively cosplay event celebrating imagination and self-expression through diverse characters and roles.",
                            color: "#54BAB9",
                          },
                          {
                            title: "Palette Paradiso",
                            desc: "A school-wide art takeover transforming the campus into a vibrant gallery with themed installations.",
                            color: "#9ED2C6",
                          },
                          {
                            title: "Razzle Dazzle",
                            desc: "A vibrant day of music and movement featuring student-led performances and diverse musical styles.",
                            color: "#E9DAC1",
                          },
                          {
                            title: "Beyond Green",
                            desc: '"The Green Horizon March" eco-awareness rally with powerful street plays promoting environmental restoration.',
                            color: "#F7ECDE",
                          },
                          {
                            title: "Acts of Compassion",
                            desc: "Heartfelt outreach initiative with NGO volunteering and motivational CD painting for those in need.",
                            color: "#54BAB9",
                          },
                          {
                            title: "Radiant Retreats",
                            desc: "Wellness-focused activities like Colors in the Dark, fostering mental health awareness and emotional well-being.",
                            color: "#9ED2C6",
                          },
                        ].map((event, index) => (
                          <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg border hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                          >
                            <div
                              className="w-full h-1 rounded-full mb-4"
                              style={{ backgroundColor: event.color }}
                            ></div>
                            <h4 className="font-bold text-gray-900 mb-3 text-lg">{event.title}</h4>
                            <p className="text-gray-700">{event.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Music Album & Memoir */}
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Music Album */}
                  <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-0 overflow-hidden">
                    <div
                      className="h-2"
                      style={{ background: "linear-gradient(90deg, #9ED2C6 0%, #54BAB9 100%)" }}
                    ></div>
                    <CardContent className="p-8 h-full">
                      <div className="flex items-center gap-3 mb-6">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                          style={{ background: "linear-gradient(135deg, #9ED2C6 0%, #54BAB9 100%)" }}
                        >
                          <Music className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">"20 Years of Memories" Album</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        A special music album performed by our talented student band, Team Vivace, under the mentorship
                        of music teacher Reuban Ashok.
                      </p>
                      <div className="space-y-4">
                        <div className="p-4 rounded-lg border shadow-sm" style={{ backgroundColor: "#F7ECDE" }}>
                          <h4 className="font-bold text-gray-900 mb-2">"BM Life in Style"</h4>
                          <p className="text-sm text-gray-700">
                            Our lively school anthem choreographed by Sunil Master, celebrating the essence of life at
                            Budding Minds.
                          </p>
                        </div>
                        <div className="p-4 rounded-lg border shadow-sm" style={{ backgroundColor: "#9ED2C6" }}>
                          <h4 className="font-bold text-gray-900 mb-2">"Feel the Beat"</h4>
                          <p className="text-sm text-gray-700">
                            A unique a cappella track created entirely using students' voices—no instruments, just
                            rhythm and harmony.
                          </p>
                        </div>
                        <div className="p-4 rounded-lg border shadow-sm" style={{ backgroundColor: "#E9DAC1" }}>
                          <h4 className="font-bold text-gray-900 mb-2">"Yaavarum Kelir"</h4>
                          <p className="text-sm text-gray-700">
                            A beautiful Tamil composition with lyrics by Dr. Annapoorani, reflecting cultural roots and
                            unity.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* The Memoir */}
                  <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-0 overflow-hidden">
                    <div
                      className="h-2"
                      style={{ background: "linear-gradient(90deg, #E9DAC1 0%, #F7ECDE 100%)" }}
                    ></div>
                    <CardContent className="p-8 h-full">
                      <div className="flex items-center gap-3 mb-6">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                          style={{ background: "linear-gradient(135deg, #E9DAC1 0%, #F7ECDE 100%)" }}
                        >
                          <Heart className="w-6 h-6" style={{ color: "#54BAB9" }} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">The Memoir</h3>
                      </div>
                      <div className="space-y-6">
                        <p className="text-gray-700 leading-relaxed">
                          A nostalgic souvenir capturing the school's journey from its humble beginnings to the vibrant
                          community it is today. Filled with photographs, heartfelt stories, and cherished memories.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          Launched in a special ceremony alongside the very first students of Budding Minds and
                          cherished well-wishers, making it a truly emotional and memorable moment.
                        </p>
                        <div className="p-4 rounded-lg border shadow-sm" style={{ backgroundColor: "#F7ECDE" }}>
                          <h4 className="font-semibold text-gray-900 mb-2">A Beautiful Tribute</h4>
                          <p className="text-sm text-gray-700">
                            The Memoir stands as a testament to everyone who has been part of the Budding Minds story
                            over the past two decades.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-0">
                  <CardContent
                    className="p-8 text-center"
                    style={{ background: "linear-gradient(135deg, #54BAB9 0%, #9ED2C6 100%)" }}
                  >
                    <p className="text-white text-xl leading-relaxed max-w-4xl mx-auto">
                      BM Reverie: Decade 2.0 was a true reflection of who we are—creative, compassionate, expressive,
                      and united in celebrating every student's journey through two decades of educational excellence.
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
