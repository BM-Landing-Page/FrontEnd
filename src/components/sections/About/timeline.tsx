"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

const timelineData = [
  {
    year: "2004",
    title: "Humble Beginnings",
    description: "Inception of Budding Minds International Play School with an initial cohort of just 8 children.",
    color: "#F7ECDE",
    icon: "🏠",
  },
  {
    year: "2006",
    title: "Our Franchise",
    description: "Launched Franchise - Budding Minds International Playschool at Bashyam Nagar, Chromepet.",
    color: "#E9DAC1",
    icon: "🌟",
  },
  {
    year: "2007",
    title: "Stronger Beginnings",
    description: "Introduced Pre-Primary 1, marking a key expansion in our Early Years program",
    color: "#9ED2C6",
    icon: "📈",
  },
  {
    year: "2012",
    title: "Cambridge Affiliation",
    description:
      "Accredited to Cambridge International Education, reinforcing our commitment to delivering a holistic and global education.",
    color: "#54BAB9",
    icon: "🎓",
  },
  {
    year: "2015",
    title: "Expanding Horizons",
    description: "BMIS expanded into an established secondary school.",
    color: "#F7ECDE",
    icon: "🏫",
  },
  {
    year: "2016",
    title: "Our Own Campus",
    description: "Marked a key milestone with the establishment of our  main campus at Manimangalam.",
    color: "#E9DAC1",
    icon: "🏛️",
  },
  {
    year: "2018",
    title: "Global Recognition & Leadership",
    description:
      "Recognized through affiliation with IGCSE and A Level qualifications. Launched the Student Leadership Program to build 21st-century skills",
    color: "#9ED2C6",
    icon: "🌍",
  },
  {
    year: "2019",
    title: "Academic Excellence & Educator Empowerment",
    description: "• First IGCSE batch graduated with stellar results.\n• Established as a Cambridge PDQ Centre.",
    color: "#54BAB9",
    icon: "🏆",
  },
  {
    year: "2022",
    title: "A Level Success",
    description: "• Our first batch of A Level students graduated with distinction.\n• Global Recognition & Leadership ",
    color: "#F7ECDE",
    icon: "🎯",
  },
  {
    year: "2025",
    title: "A New Era",
    description:
      "Opened our state-of-the-art campus for Grades 4–12, designed to foster creativity, leadership, and deep learning",
    color: "#E9DAC1",
    icon: "🚀",
  },
]

const heroImages = [
  {
    src: "/images/school-campus-1.jpg",
    alt: "Budding Minds Modern Campus",
  },
  {
    src: "/images/school-campus-2.jpg",
    alt: "Budding Minds International School Building",
  },
]

export default function Timeline() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(imageInterval)
  }, [])

  const colors = ["#F7ECDE", "#E9DAC1", "#9ED2C6", "#54BAB9"]

  const goToNext = () => {
    if (currentIndex < timelineData.length - 1) {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  return (
    <div ref={containerRef} className="min-h-screen overflow-hidden relative">
      {/* Hero Carousel Background */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        ))}
      </div>

      {/* Carousel Indicators */}
      <div className="absolute top-4 right-4 md:top-6 md:right-6 z-30 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 border-2 border-white shadow-lg ${
              index === currentImageIndex ? "bg-white scale-110" : "bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      <button
        onClick={goToPrev}
        disabled={currentIndex === 0}
        className={`absolute top-1/2 left-4 md:left-8 z-30 transform -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full backdrop-blur-md border-2 border-white/40 flex items-center justify-center transition-all duration-300 shadow-xl ${
          currentIndex === 0
            ? "bg-gray-400/50 text-gray-300 cursor-not-allowed"
            : "bg-white/30 text-white hover:bg-white/40 hover:scale-110 active:scale-95"
        }`}
        aria-label="Previous milestone"
      >
        <span className="text-2xl md:text-3xl font-bold">‹</span>
      </button>

      <button
        onClick={goToNext}
        disabled={currentIndex === timelineData.length - 1}
        className={`absolute top-1/2 right-4 md:right-8 z-30 transform -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full backdrop-blur-md border-2 border-white/40 flex items-center justify-center transition-all duration-300 shadow-xl ${
          currentIndex === timelineData.length - 1
            ? "bg-gray-400/50 text-gray-300 cursor-not-allowed"
            : "bg-white/30 text-white hover:bg-white/40 hover:scale-110 active:scale-95"
        }`}
        aria-label="Next milestone"
      >
        <span className="text-2xl md:text-3xl font-bold">›</span>
      </button>

      {/* Timeline Content Overlay */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="w-full h-full flex flex-col">
          <div className="flex-1 flex flex-col lg:flex-row">
            {/* Header Section */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-4 md:p-6 lg:p-8 order-1 lg:order-1">
              <div
                className={`max-w-md text-center lg:text-left transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <div className="relative mb-3 md:mb-4">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 md:mb-4 lg:mb-6 text-white relative drop-shadow-lg">
                    Our Journey
                    <div
                      className="absolute -top-1 -left-1 md:-top-2 md:-left-2 w-4 h-4 md:w-6 md:h-6 rounded-full opacity-60 animate-ping"
                      style={{ backgroundColor: "#54BAB9" }}
                    />
                  </h2>
                </div>

                <div
                  className="p-3 md:p-4 rounded-lg mb-3 md:mb-4 lg:mb-6 border border-opacity-50 backdrop-blur-lg shadow-xl"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    borderColor: "#E9DAC1",
                  }}
                >
                  <p className="text-xs md:text-sm lg:text-base text-gray-800 leading-relaxed font-medium">
                    From humble beginnings in a small home to becoming a globally recognized Cambridge International
                    School, Budding Minds has been nurturing young minds for over two decades.
                  </p>
                </div>

                <div className="flex items-center justify-center lg:justify-start space-x-2 text-xs md:text-sm lg:text-base">
                  <div
                    className="px-2 md:px-3 py-1 rounded-full backdrop-blur-md border border-white/30 flex items-center space-x-1 md:space-x-2"
                    style={{ backgroundColor: "rgba(84, 186, 185, 0.9)" }}
                  >
                    <div className="w-2 h-2 rounded-full animate-pulse bg-white" />
                    <span className="text-white font-medium">Use arrows to navigate</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Cards */}
            <div className="flex-1 lg:w-1/2 flex items-center justify-center p-4 md:p-6 lg:p-8 order-2 lg:order-2">
              <div className="relative w-full max-w-sm lg:max-w-md h-80 md:h-96">
                {timelineData.map((item, index) => {
                  const isActive = index === currentIndex
                  const isNext = index === currentIndex + 1
                  const isPrev = index === currentIndex - 1

                  let translateY = 0
                  let opacity = 0
                  let scale = 0.9
                  let zIndex = 1
                  let rotateX = 0

                  if (isActive) {
                    translateY = 0
                    opacity = 1
                    scale = 1
                    zIndex = 10
                    rotateX = 0
                  } else if (isNext) {
                    translateY = 100
                    opacity = 0
                    scale = 0.9
                    zIndex = 5
                    rotateX = 10
                  } else if (isPrev) {
                    translateY = -100
                    opacity = 0
                    scale = 0.9
                    zIndex = 5
                    rotateX = -10
                  } else {
                    translateY = index > currentIndex ? 100 : -100
                    opacity = 0
                    scale = 0.8
                    zIndex = 1
                    rotateX = index > currentIndex ? 10 : -10
                  }

                  return (
                    <Card
                      key={index}
                      className="absolute inset-0 transition-all duration-700 ease-out border-2 rounded-xl overflow-hidden shadow-2xl"
                      style={{
                        backgroundColor: item.color,
                        borderColor: isActive ? "#54BAB9" : "transparent",
                        transform: `translateY(${translateY}px) scale(${scale}) rotateX(${rotateX}deg)`,
                        opacity,
                        zIndex,
                      }}
                    >
                      {isActive && (
                        <div
                          className="absolute inset-0 opacity-20 animate-pulse"
                          style={{
                            background: `radial-gradient(circle at 50% 50%, ${item.color}88 0%, transparent 70%)`,
                          }}
                        />
                      )}

                      <CardContent className="p-3 md:p-4 lg:p-6 h-full flex flex-col justify-center relative overflow-hidden">
                        <div
                          className="absolute top-3 left-3 md:top-4 md:left-4 text-xl md:text-2xl lg:text-3xl animate-bounce"
                          style={{ animationDuration: "2s" }}
                        >
                          {item.icon}
                        </div>

                        <div className="absolute top-1 right-1 md:top-2 md:right-2 text-2xl md:text-4xl lg:text-6xl font-bold text-gray-800 opacity-10 transform rotate-12">
                          {item.year}
                        </div>

                        <div className="relative z-10 bg-white bg-opacity-90 p-3 md:p-4 rounded-lg border border-gray-200 shadow-lg">
                          <div className="text-sm md:text-lg lg:text-xl font-bold mb-2 text-gray-800 flex items-center space-x-2">
                            <span
                              className="px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold text-white shadow-md"
                              style={{ backgroundColor: "#54BAB9" }}
                            >
                              {item.year}
                            </span>
                          </div>

                          <h3 className="text-base md:text-xl lg:text-2xl font-bold mb-2 md:mb-3 text-gray-800 leading-tight">
                            {item.title}
                          </h3>

                          <p className="text-xs md:text-sm lg:text-base text-gray-700 leading-relaxed line-clamp-3 md:line-clamp-4 whitespace-pre-wrap">
                            {item.description}
                          </p>

                          <div
                            className="mt-2 md:mt-4 w-12 md:w-16 h-1 rounded-full shadow-sm"
                            style={{ backgroundColor: "#54BAB9" }}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center pb-4 md:pb-6">
            <div
              className="flex space-x-1 md:space-x-2 px-3 md:px-4 py-2 rounded-full border border-gray-300 backdrop-blur-lg shadow-xl"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
              }}
            >
              {timelineData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-500 shadow-sm hover:scale-110 active:scale-95 ${
                    index === currentIndex ? "scale-125" : ""
                  }`}
                  style={{
                    backgroundColor: index === currentIndex ? "#54BAB9" : index < currentIndex ? "#9ED2C6" : "#E9DAC1",
                  }}
                  aria-label={`Go to ${timelineData[index].year}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
        {colors.map((color, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-5 md:opacity-10 animate-pulse"
            style={{
              width: `${30 + i * 15}px`,
              height: `${30 + i * 15}px`,
              backgroundColor: color,
              left: `${5 + i * 20}%`,
              top: `${10 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
