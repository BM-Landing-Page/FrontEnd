"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface ScrollItem {
  id: number
  text: string
  link: string
  created_at: string
}

export default function ScrollTicker() {
  const [scrollItems, setScrollItems] = useState<ScrollItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchScrollItems = async () => {
      try {
        const response = await fetch("https://backend-edhc.onrender.com/scroll")
        if (response.ok) {
          const data = await response.json()
          setScrollItems(data)
        }
      } catch (error) {
        console.error("Error fetching scroll items:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchScrollItems()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-32">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#54BAB9]"></div>
      </div>
    )
  }

  if (scrollItems.length === 0) {
    return <div className="text-center text-[#1E293B] py-8">No announcements available</div>
  }

  return (
    <div className="relative overflow-hidden h-32">
      <motion.div
        className="flex flex-col space-y-4"
        animate={{ y: [0, -scrollItems.length * 60] }}
        transition={{
          duration: scrollItems.length * 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        {[...scrollItems, ...scrollItems].map((item, index) => (
          <motion.div key={`${item.id}-${index}`} className="flex items-center space-x-3 py-2">
            <div className="w-2 h-2 bg-[#54BAB9] rounded-full flex-shrink-0"></div>
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1E293B] hover:text-[#54BAB9] transition-colors duration-200 text-sm leading-relaxed"
              >
                {item.text}
              </a>
            ) : (
              <span className="text-[#1E293B] text-sm leading-relaxed">{item.text}</span>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
