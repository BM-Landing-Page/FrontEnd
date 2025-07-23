"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Play } from "lucide-react"

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

export default function VideosShowcase() {
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

  const videos = [
    {
      id: "VIDEO_ID_1",
      title: "Campus Life & Learning",
      description: "Take a virtual tour of our vibrant campus and see learning in action.",
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "VIDEO_ID_2",
      title: "Student Success Stories",
      description: "Hear from our students and families about their educational journey.",
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
  ]

  const openVideo = (videoId: string) => {
    const url = `https://www.youtube.com/watch?v=${videoId}`
    window.open(url, "_blank")
  }

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
          <h2 className="text-3xl font-bold text-gray-900 mb-2">See Our School in Action</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get an inside look at our educational community through these featured videos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {videos.map((video, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#9ED2C6] to-[#54BAB9] p-1 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-white rounded-xl p-4">
                  <div
                    className="relative cursor-pointer rounded-xl overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300"
                    onClick={() => openVideo(video.id)}
                  >
                    <Image
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      width={300}
                      height={200}
                      className="w-full h-40 object-cover"
                    />

                    {/* Play button overlay */}
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-[#54BAB9] ml-1" fill="currentColor" />
                      </div>
                    </div>

                    {/* Gradient overlay */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#54BAB9] transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{video.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
