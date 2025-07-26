"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react"
import { fetchGalleryItems, type GalleryItem } from "../../../services/api"

export default function AnimatedGallery() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [scrollX, setScrollX] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Fetch gallery data on component mount
  useEffect(() => {
    const loadGalleryItems = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await fetchGalleryItems()
        if (response.success && response.data) {
          setGalleryItems(response.data)
        } else {
          setError(response.error || "Failed to load gallery items")
        }
      } catch (err) {
        setError("An unexpected error occurred")
        console.error("Error loading gallery:", err)
      } finally {
        setLoading(false)
      }
    }

    loadGalleryItems()
  }, [])

  const scrollToIndex = (index: number) => {
    if (containerRef.current && !isTransitioning && galleryItems.length > 0) {
      setIsTransitioning(true)
      const itemWidth = containerRef.current.clientWidth
      containerRef.current.scrollTo({
        left: index * itemWidth,
        behavior: "smooth",
      })
      setCurrentIndex(index)
      setTimeout(() => setIsTransitioning(false), 800)
    }
  }

  const goToPrevious = () => {
    if (galleryItems.length === 0) return
    const newIndex = currentIndex > 0 ? currentIndex - 1 : galleryItems.length - 1
    scrollToIndex(newIndex)
  }

  const goToNext = () => {
    if (galleryItems.length === 0) return
    const newIndex = currentIndex < galleryItems.length - 1 ? currentIndex + 1 : 0
    scrollToIndex(newIndex)
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (galleryItems.length === 0) return
      if (event.key === "ArrowLeft") {
        event.preventDefault()
        goToPrevious()
      } else if (event.key === "ArrowRight") {
        event.preventDefault()
        goToNext()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentIndex, galleryItems.length])

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && galleryItems.length > 0) {
        const scrollLeft = containerRef.current.scrollLeft
        setScrollX(scrollLeft)
        const itemWidth = containerRef.current.clientWidth
        const newIndex = Math.round(scrollLeft / itemWidth)
        if (newIndex !== currentIndex) {
          setCurrentIndex(newIndex)
        }
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("scroll", handleScroll)
      return () => container.removeEventListener("scroll", handleScroll)
    }
  }, [galleryItems.length, currentIndex])

  // Loading state
  if (loading) {
    return (
      <div className="h-screen bg-gradient-to-br from-white via-[#F7ECDE]/20 to-[#E9DAC1]/30 flex items-center justify-center">
        <div className="text-center animate-fade-in-up">
          <Loader2 className="w-16 h-16 animate-spin text-[#54BAB9] mx-auto mb-6" />
          <h2 className="text-2xl font-light text-gray-700 mb-2">Loading Gallery</h2>
          <p className="text-gray-500">Fetching beautiful memories...</p>
          <div className="flex justify-center mt-4 space-x-1">
            <div className="w-2 h-2 bg-[#54BAB9] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
            <div className="w-2 h-2 bg-[#9ED2C6] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
            <div className="w-2 h-2 bg-[#E9DAC1] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="h-screen bg-gradient-to-br from-white via-[#F7ECDE]/20 to-[#E9DAC1]/30 flex items-center justify-center">
        <div className="text-center animate-fade-in-up max-w-md mx-auto px-6">
          <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-light text-gray-700 mb-3">Unable to Load Gallery</h2>
          <p className="text-gray-500 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-[#54BAB9] hover:bg-[#9ED2C6] text-white px-6 py-2 rounded-full transition-colors duration-300"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  // Empty state
  if (galleryItems.length === 0) {
    return (
      <div className="h-screen bg-gradient-to-br from-white via-[#F7ECDE]/20 to-[#E9DAC1]/30 flex items-center justify-center">
        <div className="text-center animate-fade-in-up max-w-md mx-auto px-6">
          <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
            <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-light text-gray-700 mb-3">No Memories Yet</h2>
          <p className="text-gray-500 mb-4">The gallery is empty. Check back later for new memories and moments!</p>
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-[#F7ECDE] rounded-full animate-pulse" />
            <div className="w-3 h-3 bg-[#E9DAC1] rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
            <div className="w-3 h-3 bg-[#9ED2C6] rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="h-screen bg-gradient-to-br from-white via-[#F7ECDE]/20 to-[#E9DAC1]/30 overflow-hidden relative">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full opacity-20 animate-float-${i % 4}`}
            style={{
              width: `${8 + (i % 3) * 4}px`,
              height: `${8 + (i % 3) * 4}px`,
              backgroundColor: i % 4 === 0 ? "#F7ECDE" : i % 4 === 1 ? "#E9DAC1" : i % 4 === 2 ? "#9ED2C6" : "#54BAB9",
              left: `${10 + ((i * 8) % 80)}%`,
              top: `${15 + ((i * 12) % 70)}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + (i % 3)}s`,
              transform: `translateX(${scrollX * (0.1 + (i % 3) * 0.05)}px)`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20 p-8">
        <div className="flex items-center justify-between">
          <div className="animate-slide-in-left">
            <h1 className="text-4xl md:text-6xl font-light text-gray-800 tracking-wider animate-gradient-text">
              OUR GALLERY
            </h1>
            <div className="w-24 h-px bg-[#54BAB9] mt-2 animate-expand"></div>
          </div>
          <div className="text-right text-gray-600 animate-slide-in-right">
            <p className="text-xs opacity-60 mt-1 animate-pulse-soft">Use ← → keys or click arrows</p>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        disabled={isTransitioning || galleryItems.length === 0}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm hover:bg-white/90 rounded-full p-4 shadow-lg transition-all duration-500 hover:scale-125 hover:rotate-12 group animate-bounce-in-left disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft
          size={32}
          className="text-gray-700 group-hover:text-[#54BAB9] transition-all duration-300 group-hover:scale-110"
        />
      </button>

      <button
        onClick={goToNext}
        disabled={isTransitioning || galleryItems.length === 0}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm hover:bg-white/90 rounded-full p-4 shadow-lg transition-all duration-500 hover:scale-125 hover:-rotate-12 group animate-bounce-in-right disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronRight
          size={32}
          className="text-gray-700 group-hover:text-[#54BAB9] transition-all duration-300 group-hover:scale-110"
        />
      </button>

      {/* Horizontal Scrolling Container */}
      <div
        ref={containerRef}
        className="flex h-full overflow-x-auto overflow-y-hidden pt-32 pb-16 scroll-smooth snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Hide scrollbar */}
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {galleryItems.map((item, index) => (
          <div key={item.id} className="flex-none w-screen h-full flex items-center justify-center px-16 snap-center">
            <div className="relative max-w-5xl mx-auto">
              {/* Animated background elements */}
              <div
                className="absolute -top-12 -left-12 w-32 h-32 rounded-full opacity-10 animate-pulse-glow"
                style={{
                  backgroundColor:
                    index % 4 === 0 ? "#F7ECDE" : index % 4 === 1 ? "#E9DAC1" : index % 4 === 2 ? "#9ED2C6" : "#54BAB9",
                  animationDelay: `${index * 0.5}s`,
                  transform: `translateX(${scrollX * 0.1}px) rotate(${scrollX * 0.05}deg)`,
                }}
              />
              <div
                className="absolute -bottom-16 -right-16 w-24 h-24 rounded-full opacity-10 animate-spin-slow"
                style={{
                  backgroundColor: index % 4 === 2 ? "#9ED2C6" : "#54BAB9",
                  animationDelay: `${index * 0.3}s`,
                  transform: `translateX(${scrollX * -0.08}px)`,
                }}
              />

              {/* Orbiting elements */}
              <div
                className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full opacity-30 animate-orbit"
                style={{
                  backgroundColor: "#54BAB9",
                  animationDelay: `${index * 0.2}s`,
                }}
              />

              {/* Image container */}
              <div
                className={`relative group cursor-pointer animate-fade-in-up ${
                  currentIndex === index ? "animate-scale-in" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Dynamic glow effect */}
                <div
                  className="absolute -inset-8 rounded-3xl opacity-20 blur-2xl transition-all duration-700 group-hover:opacity-50 group-hover:blur-3xl animate-pulse-glow"
                  style={{
                    background: `linear-gradient(135deg, ${
                      index % 4 === 0
                        ? "#F7ECDE"
                        : index % 4 === 1
                          ? "#E9DAC1"
                          : index % 4 === 2
                            ? "#9ED2C6"
                            : "#54BAB9"
                    }, transparent)`,
                  }}
                />

                {/* Main image */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white p-6 transition-all duration-700 group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-3xl animate-shimmer">
                  <Image
                    src={item.image_url || "/placeholder.svg"}
                    alt={item.description}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover rounded-2xl max-h-[70vh] transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/placeholder.svg?height=600&width=800&text=Image+Not+Available"
                    }}
                  />

                  {/* Hover overlay with description only */}
                  <div
                    className={`absolute inset-6 rounded-2xl bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end transition-all duration-500 ${
                      hoveredItem === item.id ? "opacity-100 backdrop-blur-sm" : "opacity-0"
                    }`}
                  >
                    <div className="p-8 text-white animate-slide-up">
                      <p className="text-lg md:text-xl leading-relaxed font-light animate-fade-in-delayed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Animated corner elements */}
                <div
                  className="absolute top-2 left-2 w-6 h-6 border-l-3 border-t-3 rounded-tl-lg opacity-60 animate-draw-border"
                  style={{ borderColor: "#54BAB9" }}
                />
                <div
                  className="absolute bottom-2 right-2 w-6 h-6 border-r-3 border-b-3 rounded-br-lg opacity-60 animate-draw-border"
                  style={{ borderColor: "#9ED2C6", animationDelay: "0.3s" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Animated progress bar */}
      {galleryItems.length > 0 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-slide-up">
          <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg animate-float">
            <div className="w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#54BAB9] to-[#9ED2C6] rounded-full transition-all duration-700 animate-shimmer"
                style={{ width: `${((currentIndex + 1) / galleryItems.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* More floating decorative elements */}
      <div
        className="absolute top-1/4 left-20 w-4 h-4 rounded-full opacity-30 animate-float-reverse"
        style={{ backgroundColor: "#F7ECDE", transform: `translateX(${scrollX * 0.15}px)` }}
      />
      <div
        className="absolute top-3/4 right-32 w-6 h-6 rounded-full opacity-20 animate-bounce-slow"
        style={{ backgroundColor: "#9ED2C6", animationDelay: "2s", transform: `translateX(${scrollX * -0.1}px)` }}
      />
      <div
        className="absolute top-1/2 right-20 w-2 h-2 rounded-full opacity-40 animate-pulse-glow"
        style={{ backgroundColor: "#54BAB9", animationDelay: "1s", transform: `translateX(${scrollX * 0.2}px)` }}
      />
      <div
        className="absolute top-1/3 left-1/3 w-3 h-3 rounded-full opacity-25 animate-spin-slow"
        style={{ backgroundColor: "#E9DAC1", transform: `translateX(${scrollX * 0.05}px)` }}
      />
    </div>
  )
}
