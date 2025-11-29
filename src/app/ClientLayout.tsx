"use client"
import { useState, useEffect } from "react"
import type React from "react"

import Footer from "@/components/ui/Footer/footer"

// Floating Background Bubble Component
function FloatingBubble({
  duration,
  size,
  left,
  top,
  animationDelay,
}: {
  duration: number
  size: number
  left: string
  top: string
  animationDelay: number
}) {
  return (
    <div
      className="absolute rounded-full bg-gradient-to-br from-[#9ED2C6]/20 to-[#54BAB9]/20 animate-bounce"
      style={{
        width: `${size}vw`,
        height: `${size}vw`,
        left,
        top,
        animationDelay: `${animationDelay}s`,
        animationDuration: `${duration}s`,
        animationIterationCount: "infinite",
        animationDirection: "alternate",
      }}
    />
  )
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [bubbles, setBubbles] = useState<
    Array<{
      id: number
      duration: number
      size: number
      left: string
      top: string
      animationDelay: number
    }>
  >([])

  // Generate decorative bubbles once
  useEffect(() => {
    const newBubbles = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      duration: 3 + Math.random() * 4,
      size: 2 + Math.random() * 5, // 2vw – 7vw
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: Math.random() * 5,
    }))
    setBubbles(newBubbles)
  }, [])

  return (
    <>
      <main className="pt-16 min-h-[calc(100vh-64px)] bg-white relative overflow-hidden">
        {/* Bubbles overlay */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {bubbles.map((bubble) => (
            <FloatingBubble key={bubble.id} {...bubble} />
          ))}
        </div>
        {/* Actual content */}
        <div className="relative z-10">{children}</div>
      </main>
      <Footer />
    </>
  )
}
