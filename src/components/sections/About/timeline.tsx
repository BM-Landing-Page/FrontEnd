"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

const timelineData = [
  {
    year: "2004",
    title: "Humble Beginnings",
    description:
      "Budding Minds began in a small home with just 8 children—a dream space gifted by Dr. Ramani, mother of co-founder Ms. Sarasa Ashok.",
    color: "#F7ECDE",
    icon: "🏠",
  },
  {
    year: "2006",
    title: "First Franchise",
    description: "Launched Budding Minds International Playschool at Bashyam Nagar, Chromepet—our only franchise.",
    color: "#E9DAC1",
    icon: "🌟",
  },
  {
    year: "2007",
    title: "Structured Growth",
    description: "Moved to a larger setup and introduced Pre-primary 1, expanding our early years program.",
    color: "#9ED2C6",
    icon: "📈",
  },
  {
    year: "2012",
    title: "Cambridge Affiliation",
    description: "Became a Cambridge International School, strengthening our commitment to global, holistic education.",
    color: "#54BAB9",
    icon: "🎓",
  },
  {
    year: "2015",
    title: "Secondary Expansion",
    description: "BMIS grew into a full-fledged secondary school.",
    color: "#F7ECDE",
    icon: "🏫",
  },
  {
    year: "2016",
    title: "Our Own Campus",
    description: "Moved into our permanent home at Manimangalam. Our first Grade 10 batch graduated—a proud milestone.",
    color: "#E9DAC1",
    icon: "🏛️",
  },
  {
    year: "2018",
    title: "Global Recognition & Leadership",
    description:
      "Received IGCSE & A Level recognition. Launched the Student Leadership Program to build 21st-century skills.",
    color: "#9ED2C6",
    icon: "🌍",
  },
  {
    year: "2019",
    title: "Academic Excellence & Educator Empowerment",
    description: "Became a Cambridge PDQ Centre. First IGCSE batch graduated with stellar results.",
    color: "#54BAB9",
    icon: "🏆",
  },
  {
    year: "2022",
    title: "A Level Success",
    description: "Our first A Level students graduated with distinction.",
    color: "#F7ECDE",
    icon: "🎯",
  },
  {
    year: "2025",
    title: "A New Era",
    description:
      "Opened our state-of-the-art campus for Grades 4–12, designed to foster creativity, leadership, and deep learning.",
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
  const [isScrolling, setIsScrolling] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Auto-rotate carousel images
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(imageInterval)
  }, [])

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()

      if (isScrolling) return

      setIsScrolling(true)

      if (e.deltaY > 0 && currentIndex < timelineData.length - 1) {
        setCurrentIndex((prev) => prev + 1)
      } else if (e.deltaY < 0 && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1)
      }

      setTimeout(() => {
        setIsScrolling(false)
      }, 1000)
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false })
      return () => container.removeEventListener("wheel", handleWheel)
    }
  }, [currentIndex, isScrolling])

  const [touchStart, setTouchStart] = useState<number | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientY)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return

    const touchEnd = e.changedTouches[0].clientY
    const distance = touchStart - touchEnd

    if (Math.abs(distance) > 50) {
      if (distance > 0 && currentIndex < timelineData.length - 1) {
        setCurrentIndex((prev) => prev + 1)
      } else if (distance < 0 && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1)
      }
    }
    setTouchStart(null)
  }

  const colors = ["#F7ECDE", "#E9DAC1", "#9ED2C6", "#54BAB9"]

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-hidden relative"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Hero Carousel Background - Full Screen */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/5" />
          </div>
        ))}
      </div>

      {/* Carousel Indicators */}
      <div className="absolute top-6 right-6 z-30 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 border-2 border-white shadow-lg ${
              index === currentImageIndex ? "bg-white scale-110" : "bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Timeline Content Overlay */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="w-full">
          <div className="flex flex-col md:flex-row h-80 md:h-96">
            {/* Left Side - Description */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8">
              <div
                className={`max-w-md text-center md:text-left transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <div className="relative mb-4">
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white relative drop-shadow-lg">
                    Our Journey
                    <div
                      className="absolute -top-2 -left-2 w-6 h-6 rounded-full opacity-60 animate-ping"
                      style={{ backgroundColor: "#54BAB9" }}
                    />
                  </h2>
                </div>

                <div
                  className="p-4 rounded-lg mb-4 md:mb-6 border border-opacity-50 backdrop-blur-lg shadow-xl"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    borderColor: "#E9DAC1",
                  }}
                >
                  <p className="text-sm md:text-base text-gray-800 leading-relaxed font-medium">
                    From humble beginnings in a small home to becoming a globally recognized Cambridge International
                    School, Budding Minds has been nurturing young minds for over two decades. Our journey is marked by
                    continuous growth, academic excellence, and an unwavering commitment to holistic education.
                  </p>
                </div>

                <div className="flex items-center justify-center md:justify-start space-x-2 text-sm md:text-base">
                  <div
                    className="px-3 py-1 rounded-full backdrop-blur-md border border-white/30 flex items-center space-x-2"
                    style={{ backgroundColor: "rgba(84, 186, 185, 0.9)" }}
                  >
                    <div className="w-2 h-2 rounded-full animate-pulse bg-white" />
                    <span className="hidden md:inline text-white font-medium">Scroll to explore our milestones</span>
                    <span className="md:hidden text-white font-medium">Swipe to explore our milestones</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Timeline Cards */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8">
              <div className="relative w-full max-w-sm h-full max-h-80">
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
                      {/* Card Glow Effect */}
                      {isActive && (
                        <div
                          className="absolute inset-0 opacity-20 animate-pulse"
                          style={{
                            background: `radial-gradient(circle at 50% 50%, ${item.color}88 0%, transparent 70%)`,
                          }}
                        />
                      )}

                      <CardContent className="p-4 md:p-6 h-full flex flex-col justify-center relative overflow-hidden">
                        {/* Icon */}
                        <div
                          className="absolute top-4 left-4 text-2xl md:text-3xl animate-bounce"
                          style={{ animationDuration: "2s" }}
                        >
                          {item.icon}
                        </div>

                        {/* Background Year */}
                        <div className="absolute top-2 right-2 text-4xl md:text-6xl font-bold text-gray-800 opacity-10 transform rotate-12">
                          {item.year}
                        </div>

                        {/* Content */}
                        <div className="relative z-10 bg-white bg-opacity-90 p-4 rounded-lg border border-gray-200 shadow-lg">
                          <div className="text-lg md:text-xl font-bold mb-2 text-gray-800 flex items-center space-x-2">
                            <span
                              className="px-3 py-1 rounded-full text-sm font-semibold text-white shadow-md"
                              style={{ backgroundColor: "#54BAB9" }}
                            >
                              {item.year}
                            </span>
                          </div>

                          <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-800 leading-tight">
                            {item.title}
                          </h3>

                          <p className="text-sm md:text-base text-gray-700 leading-relaxed line-clamp-4">
                            {item.description}
                          </p>

                          {/* Decorative Line */}
                          <div
                            className="mt-4 w-16 h-1 rounded-full shadow-sm"
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
          <div className="flex justify-center mt-4">
            <div
              className="flex space-x-2 px-4 py-2 rounded-full border border-gray-300 backdrop-blur-lg shadow-xl"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
              }}
            >
              {timelineData.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-500 shadow-sm ${
                    index === currentIndex ? "scale-125" : ""
                  }`}
                  style={{
                    backgroundColor: index === currentIndex ? "#54BAB9" : index < currentIndex ? "#9ED2C6" : "#E9DAC1",
                  }}
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
            className="absolute rounded-full opacity-10 animate-pulse"
            style={{
              width: `${60 + i * 30}px`,
              height: `${60 + i * 30}px`,
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
