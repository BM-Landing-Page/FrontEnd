"use client"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import type React from "react"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

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

export default function EarlyYearsProgramme() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
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

  const heroImages = ["/images/earlyhero1.jpg", "/images/earlyhero2.jpg", "/images/earlyhero3.jpg"]

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

  useEffect(() => {
    if (!isAutoPlay) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlay, heroImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    setIsAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
    setIsAutoPlay(false)
  }

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement
    const currentSrc = target.src

    if (currentSrc.includes("hqdefault.jpg")) {
      target.src = currentSrc.replace("hqdefault.jpg", "mqdefault.jpg")
    } else if (currentSrc.includes("mqdefault.jpg")) {
      target.src = currentSrc.replace("mqdefault.jpg", "default.jpg")
    } else {
      target.src = "/placeholder.svg?height=200&width=300&text=Video+Thumbnail"
    }
  }

  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
  }

  // YouTube thumbnail URL
  const skillsHubVideoUrl = "https://youtu.be/zn-ex81WN1E?si=oQKFtodinerA5RIQ"
  const skillsHubVideoId = getYouTubeVideoId(skillsHubVideoUrl)
  const skillsHubThumbnail = skillsHubVideoId
    ? `https://img.youtube.com/vi/${skillsHubVideoId}/maxresdefault.jpg`
    : "/placeholder.svg?height=200&width=300&text=Video+Thumbnail"

  return (
    <main className="w-full bg-white">
      {/* Hero Carousel */}
      <section className="relative w-full h-96 md:h-[500px] overflow-hidden bg-gradient-to-b from-[#E9DAC1] to-white">
        <div className="relative w-full h-full">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`Hero slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-[#54BAB9]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-[#54BAB9]" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index)
                  setIsAutoPlay(false)
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide ? "bg-[#54BAB9] w-8" : "bg-white/60 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Hero Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 text-white text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">Early Years Programme</h1>
          <p className="text-xl md:text-2xl font-light text-balance">Rooted in Inquiry, Rising with Confidence</p>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Introduction Paragraph */}
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              At Budding Minds International School (BMIS), every child's journey begins with wonder, exploration, and
              joy. Recognized among the best preschools in Chennai, our Early Years Programme lays the foundation for a
              lifetime of learning — where curiosity leads to understanding, and every question sparks discovery.
              Because the best beginnings build confident, creative learners.
            </p>
          </div>

          {/* Programme Offerings */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#54BAB9] text-balance">
              Our Early Years Programme Offers:
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-3">
                <span className="text-[#9ED2C6] font-bold text-lg mt-0.5 flex-shrink-0">✓</span>
                <span className="text-gray-700 text-base">Inquiry-based, play-driven learning</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#9ED2C6] font-bold text-lg mt-0.5 flex-shrink-0">✓</span>
                <span className="text-gray-700 text-base">
                  Holistic development across cognitive, emotional, and physical domains
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#9ED2C6] font-bold text-lg mt-0.5 flex-shrink-0">✓</span>
                <span className="text-gray-700 text-base">
                  Creative, theme-based curriculum integrating play and academics
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#9ED2C6] font-bold text-lg mt-0.5 flex-shrink-0">✓</span>
                <span className="text-gray-700 text-base">
                  Strong communication and literacy foundation through Jolly Phonics
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#9ED2C6] font-bold text-lg mt-0.5 flex-shrink-0">✓</span>
                <span className="text-gray-700 text-base">Life skills and empathy-based education</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#9ED2C6] font-bold text-lg mt-0.5 flex-shrink-0">✓</span>
                <span className="text-gray-700 text-base">
                  Learning through multisensory activities, celebrations, field trips
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Discovery Den - Card Design */}
      <section className="py-2 md:py-3 px-4 md:px-8 bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {sectionBubbles.map((bubble) => (
            <SectionBubble key={bubble.id} {...bubble} />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#54BAB9] mb-3 text-balance">Discovery Den!</h2>
                <p className="text-base md:text-lg font-semibold text-[#9ED2C6]">Life Skills for Everyday Confidence</p>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                Our exclusive Life Skills Sessions help children to build confidence and self-awareness, develop empathy
                and social skills, communicate effectively, and solve problems independently. These sessions prepare
                them for life beyond school — shaping emotionally intelligent, kind, and self-assured individuals.
              </p>
            </div>

            {/* Video Card - Right Side (Instagram) */}
            <div className="group">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#9ED2C6] to-[#54BAB9] p-1.5 shadow-2xl hover:shadow-3xl transition-all duration-300">
                <div className="bg-white rounded-3xl p-6 space-y-4">
                  <div
                    className="relative cursor-pointer rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300"
                    onClick={() =>
                      window.open("https://www.instagram.com/reel/DQMCZx-geJ0/?igsh=MXdzeG80cjJlMTY0aA==", "_blank")
                    }
                  >
                    <img
                      src="/images/discoveryden.jpeg"
                      alt="Discovery Den - Life Skills"
                      className="w-full h-56 object-cover"
                    />
                    {/* Play button overlay */}
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-[#54BAB9] ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-gray-900">Discovery Den!</h3>
                    <p className="text-sm text-gray-600">Life Skills for Everyday Confidence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Skills Hub - Card Design */}
      <section className="py-2 md:py-3 px-4 md:px-8 bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {sectionBubbles.map((bubble) => (
            <SectionBubble key={bubble.id} {...bubble} />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Video Card - Left Side (YouTube) */}
            <div className="group">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#9ED2C6] to-[#54BAB9] p-1.5 shadow-2xl hover:shadow-3xl transition-all duration-300">
                <div className="bg-white rounded-3xl p-6 space-y-4">
                  <div
                    className="relative cursor-pointer rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300"
                    onClick={() => window.open(skillsHubVideoUrl, "_blank")}
                  >
                    <img
                      src={skillsHubThumbnail || "/placeholder.svg"}
                      alt="Skills Hub - Discovering Brilliance"
                      className="w-full h-56 object-cover"
                      onError={handleImageError}
                    />
                    {/* Play button overlay */}
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-[#54BAB9] ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-gray-900">Skills Hub</h3>
                    <p className="text-sm text-gray-600">Discovering Every Child's Brilliance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#54BAB9] mb-3 text-balance">Skills Hub</h2>
                <p className="text-base md:text-lg font-semibold text-[#9ED2C6]">
                  Discovering Every Child's Brilliance
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                Every child is gifted in their own way — and we make sure they know it! Through our Skills hub, children
                explore and strengthen their unique talents across linguistic, logical, spatial, musical,
                bodily-kinesthetic, interpersonal, intrapersonal, and naturalistic intelligences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Early Literacy */}
      <section className="py-2 md:py-3 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#54BAB9] mb-3 text-balance">Early Literacy</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                Our Kindergarten Literacy Programme helps every child become an enthusiastic reader and expressive
                writer. Our Programme builds independence and confidence in every learner. At BMIS, early literacy
                begins with joyful read-alouds, exploring different genres of fiction and non-fiction texts that
                develops a love for book reading at a very early stage of child's life.
              </p>
              <div className="space-y-4">
                <p className="text-base font-semibold text-[#54BAB9]">
                  Jolly Phonics program – Building Strong Readers and Writers
                </p>
                <ul className="text-gray-700 space-y-3 leading-relaxed text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-[#9ED2C6] font-bold text-lg mt-0.5">✓</span>
                    <span>Learn 42 letter sounds through songs, actions & stories</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#9ED2C6] font-bold text-lg mt-0.5">✓</span>
                    <span>Spell and blend letter sounds to read fluently</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#9ED2C6] font-bold text-lg mt-0.5">✓</span>
                    <span>Read simple stories with understanding and enjoyment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#9ED2C6] font-bold text-lg mt-0.5">✓</span>
                    <span>Write simple short stories, poems and letters with creativity</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="group">
              <div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <img
                  src="/images/earlyliteracy.jpg"
                  alt="Early Literacy"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Early Numeracy */}
      <section className="py-2 md:py-3 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="group">
              <div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <img
                  src="/images/earlynumeracy.jpg"
                  alt="Early Numeracy"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#54BAB9] mb-3 text-balance">
                  Early Numeracy Through Experience
                </h2>
                <p className="text-base md:text-lg font-semibold text-[#9ED2C6]">ELPS Approach</p>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                Our numeracy curriculum helps children experience the joy of numbers through the E–L–P–S model:
              </p>
              <div className="space-y-4 text-gray-700 leading-relaxed text-base">
                <p>
                  <span className="font-bold text-[#54BAB9]">E – Experience:</span> Hands-on learning through real-life
                  exploration
                </p>
                <p>
                  <span className="font-bold text-[#54BAB9]">L – Language:</span> Express ideas using mathematical
                  vocabulary
                </p>
                <p>
                  <span className="font-bold text-[#54BAB9]">P – Pictorial:</span> Represent understanding through
                  visuals
                </p>
                <p>
                  <span className="font-bold text-[#54BAB9]">S – Symbol:</span> Apply concepts with numbers
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                With engaging tools like Jodo Gyan and Rangometry, children connect maths to the world around them —
                making numeracy natural, fun, and meaningful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Early Exploration */}
      <section className="py-2 md:py-3 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#54BAB9] mb-3 text-balance">
                  Early Exploration of the World
                </h2>
                <p className="text-base md:text-lg font-semibold text-[#9ED2C6]">Theme-Based Curriculum</p>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                Theme-based approach that connects literacy, numeracy, creativity, and social learning under one central
                idea. Children explore meaningful themes across weeks, building real-world connections and deep
                understanding. This helps them think critically, communicate confidently, and express ideas creatively.
              </p>
              <p className="text-gray-700 leading-relaxed text-base">
                Each day at BMIS is a blend of play, exploration, and purpose — helping children grow into confident,
                empathetic, and resilient learners. "Children learn best when they're joyfully engaged — that's the BM
                Way!"
              </p>
            </div>
            <div className="group">
              <div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <img
                  src="/images/earlyexploration.jpg"
                  alt="Early Exploration"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="py-4 bg-white">
        <div className="flex justify-center">
          <Link href="/primaryandlowersecondaryyears" className="inline-block">
            <div className="flex items-center gap-2 bg-[#54BAB9] hover:bg-[#54BAB9]/90 text-white px-5 py-2 rounded-lg shadow-md transition-colors cursor-pointer text-sm">
              <div className="text-center">
                <div className="font-semibold">Primary and Lower Secondary Years</div>
              </div>
              <ArrowRight className="w-3 h-3" />
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}
