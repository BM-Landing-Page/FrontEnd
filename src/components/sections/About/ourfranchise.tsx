"use client"

import { useState, useEffect, useRef } from "react"
import { Calendar, FileText, Users, CheckCircle, AlertCircle, FileCheck } from "lucide-react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

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

export default function RoomPage() {
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

  const ctaRef = useRef(null)
  const [isCtaInView, setIsCtaInView] = useState(false)

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
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsCtaInView(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (ctaRef.current) {
      observer.observe(ctaRef.current)
    }

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current)
      }
    }
  }, [])

  const handleApplicationClick = () => {
    window.open('https://myschoolone.com/Web/Admission/ApplicationFormV2.php?iid=MTM=&ksjdkjsd=MQ==', '_blank')
  }

  return (
    <main className="w-full bg-white">
      {/* Hero Banner */}
      <section className="relative w-full h-96 md:h-[500px] overflow-hidden bg-gradient-to-b from-[#E9DAC1] to-white">
        <img
          src="/images/ourfranchiseherobanner.jpeg"
          alt="Budding Minds International Play School Chromepet"
          className="w-full h-full object-cover"
        />
        {/* Hero Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 text-white text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">Budding minds Chrompet </h1>
          <p className="text-xl md:text-2xl font-light text-balance">
            Budding minds International Play school
          </p>
        </div>
      </section>

      {/* Section 1: About Our Franchise - Text Left, Image Right */}
      <section className="relative py-12 md:py-16 px-4 md:px-8 bg-white overflow-hidden">
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
                <h2 className="text-2xl md:text-3xl font-bold text-[#54BAB9] mb-3 text-balance">About Our Franchise</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                Established in October 2006, Budding Minds International Play School – Chromepet marks the first & only
                franchise of Budding Minds International School.
              </p>
              <p className="text-gray-700 leading-relaxed text-base">
                Created to serve the families of Chromepet, Pallavaram, and Tambaram, the school carries forward the
                same ethos of joyful learning, inquiry, and care that defines BMIS.
              </p>
              <p className="text-gray-700 leading-relaxed text-base">
                Nestled in a quiet residential area, it offers a safe, warm, and home-like environment where children
                can explore, play, and grow with confidence. Every experience is thoughtfully designed to nurture
                curiosity, creativity, and a lifelong love for learning.
              </p>
              <p className="text-[#9ED2C6] font-semibold italic text-base">
                A small world of big dreams—where every child feels at home.
              </p>
            </div>

            {/* Image */}
            <div className="group">
              <div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <img
                  src="/images/aboutourfranchise.jpeg"
                  alt="Budding Minds Chromepet Classroom"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Founder - Image Left, Text Right */}
      <section className="relative py-12 md:py-16 px-4 md:px-8 bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {sectionBubbles.map((bubble) => (
            <SectionBubble key={bubble.id} {...bubble} />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="group">
              <div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <img
                  src="/images/founder.jpeg"
                  alt="Ms. Akhila Varadhan"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#54BAB9] mb-3 text-balance">Our Founder</h2>
                <p className="text-base md:text-lg font-semibold text-[#9ED2C6]">Franchise Head</p>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                Leading the Franchise, Ms. Akhila Varadhan is the driving force — a passionate educator and visionary
                leader who was once a proud parent at Budding Minds International School herself.
              </p>
              <p className="text-gray-700 leading-relaxed text-base">
                Her journey from parent to school leader reflects her deep trust in the BMIS philosophy and her
                commitment to providing children with the same love, quality, and creativity that she admired as a
                parent.
              </p>
              <p className="text-gray-700 leading-relaxed text-base">
                Ms. Akhila is known for being creative in bringing fresh ideas and engaging experiences into the
                classroom, steadfast in upholding Budding Minds' standards with dedication and care, and passionate in
                nurturing young learners with warmth, patience, and joy.
              </p>
              <p className="text-[#9ED2C6] font-semibold italic text-base">
                At Chromepet, we don't just teach — we nurture hearts and minds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Programmes Offered - Text Left, Image Right */}
      <section className="relative py-12 md:py-16 px-4 md:px-8 bg-white overflow-hidden">
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
                <h2 className="text-2xl md:text-3xl font-bold text-[#54BAB9] mb-3 text-balance">Programmes Offered</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                At Budding Minds International Play School – Chromepet, we offer early learning programmes that help
                children take their first joyful steps into structured learning:
              </p>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <span className="text-[#9ED2C6] font-bold text-lg flex-shrink-0">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900">Playgroup</p>
                    <p className="text-sm">Gentle introduction to social play, rhythm, and routines</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#9ED2C6] font-bold text-lg flex-shrink-0">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900">Preschool</p>
                    <p className="text-sm">Exploration through stories, art, and hands-on discovery</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#9ED2C6] font-bold text-lg flex-shrink-0">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900">Pre-Primary 1 (Junior KG)</p>
                    <p className="text-sm">Early literacy, numeracy, and readiness for formal school</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                Our play-based, experiential curriculum encourages children to explore, imagine, question, and express —
                building a strong foundation for cognitive, emotional, and social growth.
              </p>
              <p className="text-[#9ED2C6] font-semibold italic text-base">
                Learning here is joyful, purposeful, and full of discovery.
              </p>
            </div>

            {/* Image */}
            <div className="group">
              <div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <img
                  src="/images/programs.jpeg"
                  alt="Programmes at Budding Minds Chromepet"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Our Learning Environment - Image Left, Text Right */}
      <section className="relative py-12 md:py-16 px-4 md:px-8 bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {sectionBubbles.map((bubble) => (
            <SectionBubble key={bubble.id} {...bubble} />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="group">
              <div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <img
                  src="/images/learningenvironment.jpeg"
                  alt="Learning Environment"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#54BAB9] mb-3 text-balance">
                  Our Learning Environment
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                The Chromepet campus is designed to feel like an extension of home — warm, inviting, and filled with
                opportunities to play and learn. We believe the early years are not just about academics — they're about
                feeling safe, valued, and inspired.
              </p>
              <p className="text-gray-700 leading-relaxed text-base font-semibold mb-4">Children thrive in:</p>
              <div className="space-y-3 text-gray-700 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-[#54BAB9] font-bold flex-shrink-0">•</span>
                  <span>Bright, engaging classrooms thoughtfully equipped with age-appropriate learning materials</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#54BAB9] font-bold flex-shrink-0">•</span>
                  <span>Inviting play zones and sensory corners that make exploration and discovery exciting</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#54BAB9] font-bold flex-shrink-0">•</span>
                  <span>Caring facilitators who value and celebrate each child's unique personality</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#54BAB9] font-bold flex-shrink-0">•</span>
                  <span>A nurturing, home-like environment that offers warmth, comfort, and security</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#54BAB9] font-bold flex-shrink-0">•</span>
                  <span>
                    Vibrant, play-filled indoor and outdoor spaces that inspire imagination and joyful movement
                  </span>
                </div>
              </div>
              <p className="text-[#9ED2C6] font-semibold italic text-base">
                It's an environment where children learn through laughter, discovery, and love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Location & Admissions */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-gradient-to-b from-white to-[#F7ECDE]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#54BAB9] mb-4 text-balance">Location & Admissions</h2>
            <p className="text-gray-700 leading-relaxed text-base">
              Conveniently located in the heart of Chromepet, our campus serves families from Pallavaram, Chromepet, and
              Tambaram. We invite parents to visit the campus, meet our faculty and experience the warmth of our early
              years environment.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md border-2 border-[#9ED2C6]">
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-[#54BAB9] font-bold text-xl">📞</span>
                  <div>
                    <p className="text-sm text-gray-600">Call</p>
                    <p className="text-lg font-semibold text-gray-900">+91- 99404 47800</p>
                  </div>
                </div>
                <div className="hidden md:block w-1 h-12 bg-[#E9DAC1]"></div>
                <div className="flex items-center gap-3">
                  <span className="text-[#54BAB9] font-bold text-xl">📧</span>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="text-lg font-semibold text-gray-900">bmis@buddingminds.net</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed text-base italic">
            Join a learning community where every child's first school experience is filled with joy, care, and
            confidence.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="py-12 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#54BAB9" }}
      >
        <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
          isCtaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Ready to Start Your Application?
          </h2>
          <p className="text-base text-white font-normal mb-6">
            Begin your child's journey with Budding Minds today
          </p>
          <button
            className="inline-flex items-center px-8 py-3 font-semibold rounded-lg cursor-pointer text-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            style={{ backgroundColor: "#9ED2C6" }}
            onClick={handleApplicationClick}
          >
            Begin Application Process
          </button>
        </div>
        <div className="flex justify-center mt-12">
          <Link href="/bmisjourney">
            <div className="flex items-center gap-3 bg-[#54BAB9] hover:bg-[#54BAB9]/90 text-white px-8 py-4 rounded-lg shadow-md transition-colors cursor-pointer">
              <div className="text-center">
                <div className="font-semibold text-lg">BMIS Journey</div>
              </div>
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </section>
    </main>
  )
}