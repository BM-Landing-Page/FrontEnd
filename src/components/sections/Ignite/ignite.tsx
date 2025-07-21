"use client"

import { useEffect, useState } from "react"

export default function Ignite() {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    what: false,
    why: false,
    how: false,
    cta: false,
  })

  const [currentSlide, setCurrentSlide] = useState(0)

  const carouselImages = [
    "/placeholder.svg?height=600&width=1920&text=Students+Learning+Outdoors",
    "/placeholder.svg?height=600&width=1920&text=Hands-on+Workshop+Experience",
    "/placeholder.svg?height=600&width=1920&text=Community+Engagement+Activity",
    "/placeholder.svg?height=600&width=1920&text=Creative+Learning+Environment",
  ]

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute("data-section")
          if (sectionId) {
            setIsVisible((prev) => ({ ...prev, [sectionId]: true }))
          }
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll("[data-section]")
    sections.forEach((section) => observer.observe(section))

    // Trigger hero animation immediately
    setTimeout(() => {
      setIsVisible((prev) => ({ ...prev, hero: true }))
    }, 100)

    return () => observer.disconnect()
  }, [])

  // Carousel auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [carouselImages.length])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image Carousel - 50% Screen Height */}
      <section data-section="hero" className="relative h-[50vh] overflow-hidden">
        {/* Image Carousel */}
        <div className="absolute inset-0">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url('${image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}
        </div>

        {/* Overlay for better text readability */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, rgba(84, 186, 185, 0.7) 0%, rgba(158, 210, 198, 0.5) 50%, rgba(84, 186, 185, 0.7) 100%)`,
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className={`transition-all duration-1000 ${
                isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-2xl">IGNITE</h1>
              <p className="text-lg md:text-xl text-white/90 font-light tracking-wide mb-6 drop-shadow-lg">
                Where Learning Goes Beyond the Classroom
              </p>

              {/* Decorative Elements */}
              <div
                className={`transition-all duration-1000 delay-300 ${
                  isVisible.hero ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                <div
                  className="w-32 h-1 mx-auto rounded-full mb-6"
                  style={{
                    background: `linear-gradient(to right, #9ED2C6, #54BAB9)`,
                  }}
                />
                <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105 border border-white/30">
                  Discover IGNITE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-3">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* What is IGNITE? */}
      <section data-section="what" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-800 ${
              isVisible.what ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#54BAB9" }}>
                What is IGNITE?
              </h2>
              <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: "#9ED2C6" }} />
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div
                className={`transition-all duration-800 delay-200 ${
                  isVisible.what ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
              >
                <div
                  className="p-8 rounded-2xl shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, #F7ECDE 0%, #E9DAC1 100%)`,
                  }}
                >
                  <p className="text-lg leading-relaxed mb-6" style={{ color: "#54BAB9" }}>
                    IGNITE is Budding Minds International School's flagship experiential learning program designed to
                    kindle curiosity, courage, and creativity in students.
                  </p>
                  <p className="text-lg leading-relaxed" style={{ color: "#54BAB9" }}>
                    Rooted in real-world exposure and hands-on engagement, IGNITE takes learning far beyond
                    textbooks—into farms, ateliers, community spaces, and ecosystems that challenge and inspire.
                  </p>
                </div>
              </div>

              <div
                className={`transition-all duration-800 delay-400 ${
                  isVisible.what ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
              >
                <div
                  className="p-8 rounded-2xl border"
                  style={{
                    background: `linear-gradient(135deg, rgba(158, 210, 198, 0.3) 0%, rgba(84, 186, 185, 0.3) 100%)`,
                    borderColor: "#9ED2C6",
                  }}
                >
                  <p className="text-lg leading-relaxed" style={{ color: "#54BAB9" }}>
                    Each IGNITE venture is thoughtfully curated to complement academic goals while nurturing essential
                    life skills such as collaboration, empathy, adaptability, and self-reliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why IGNITE? */}
      <section
        data-section="why"
        className="py-20 px-6"
        style={{
          background: `linear-gradient(to bottom, white 0%, rgba(247, 236, 222, 0.3) 100%)`,
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-800 ${
              isVisible.why ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#54BAB9" }}>
                Why IGNITE?
              </h2>
              <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: "#54BAB9" }} />
              <p className="text-xl mt-8 italic" style={{ color: "#54BAB9" }}>
                Because we believe that the most powerful learning doesn't always happen at a desk.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-8 text-center" style={{ color: "#54BAB9" }}>
                IGNITE empowers students to:
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "Experience concepts in action", delay: "delay-100" },
                  { title: "Build real-world skills that foster independence and problem-solving", delay: "delay-200" },
                  { title: "Discover their passions through exploration and participation", delay: "delay-300" },
                  { title: "Connect with communities, cultures, and environments firsthand", delay: "delay-400" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-800 ${item.delay} ${
                      isVisible.why ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  >
                    <div
                      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                      style={{ borderLeft: `4px solid #54BAB9` }}
                    >
                      <div
                        className="w-8 h-8 rounded-full mb-4 flex items-center justify-center"
                        style={{ backgroundColor: "#9ED2C6" }}
                      >
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#54BAB9" }} />
                      </div>
                      <p className="leading-relaxed" style={{ color: "#54BAB9" }}>
                        {item.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How IGNITE works */}
      <section data-section="how" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-800 ${
              isVisible.how ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#54BAB9" }}>
                How IGNITE works
              </h2>
              <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: "#9ED2C6" }} />
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div
                className={`transition-all duration-800 delay-200 ${
                  isVisible.how ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
              >
                <div
                  className="p-8 rounded-2xl h-full"
                  style={{
                    background: `linear-gradient(135deg, #E9DAC1 0%, #F7ECDE 100%)`,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full mb-6 flex items-center justify-center"
                    style={{ backgroundColor: "#54BAB9" }}
                  >
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4" style={{ color: "#54BAB9" }}>
                    Integration
                  </h3>
                  <p className="leading-relaxed" style={{ color: "#54BAB9" }}>
                    IGNITE is integrated grade-wise across the academic calendar with carefully selected off-campus and
                    in-campus modules.
                  </p>
                </div>
              </div>

              <div
                className={`transition-all duration-800 delay-400 ${
                  isVisible.how ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div
                  className="p-8 rounded-2xl h-full border"
                  style={{
                    backgroundColor: "#9ED2C6",
                    borderColor: "#54BAB9",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full mb-6 flex items-center justify-center"
                    style={{ backgroundColor: "#54BAB9" }}
                  >
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Collaboration</h3>
                  <p className="leading-relaxed text-white">
                    These are designed in collaboration with experts and aligned with the developmental needs of each
                    age group.
                  </p>
                </div>
              </div>

              <div
                className={`transition-all duration-800 delay-600 ${
                  isVisible.how ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
              >
                <div
                  className="p-8 rounded-2xl h-full"
                  style={{
                    backgroundColor: "#F7ECDE",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full mb-6 flex items-center justify-center"
                    style={{ backgroundColor: "#54BAB9" }}
                  >
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4" style={{ color: "#54BAB9" }}>
                    Guidance
                  </h3>
                  <p className="leading-relaxed" style={{ color: "#54BAB9" }}>
                    Each experience is safe, purposeful, and fully guided—ensuring that learning outcomes are met while
                    students enjoy the freedom to explore, question, and reflect.
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`text-center mt-16 transition-all duration-800 delay-800 ${
                isVisible.how ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div
                className="p-8 rounded-2xl inline-block border"
                style={{
                  background: `linear-gradient(to right, #F7ECDE 0%, #E9DAC1 50%, #F7ECDE 100%)`,
                  borderColor: "#E9DAC1",
                }}
              >
                <p className="text-2xl font-bold italic" style={{ color: "#54BAB9" }}>
                  IGNITE is not a break from learning.
                  <br />
                  <span style={{ color: "#54BAB9" }}>It is how learning breaks out.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        data-section="cta"
        className="py-20 px-6"
        style={{
          backgroundColor: "#54BAB9",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-800 ${
              isVisible.cta ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to Explore?</h2>
            <p className="text-xl text-white/90 mb-12">
              Discover the transformative power of experiential learning through our IGNITE program.
            </p>
            <button
              className="group px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              style={{
                color: "#54BAB9",
                backgroundColor: "white",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#F7ECDE"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "white"
              }}
            >
              <span className="flex items-center gap-3">
                Explore our IGNITE gallery
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
