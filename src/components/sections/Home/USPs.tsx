"use client"
import { motion } from "framer-motion"
import { Award, BookOpen, Star, Users } from "lucide-react"
import ScrollTicker from "./scroll-ticker"

export default function USPs() {
  const stats = [
    { number: "40+", label: "Alumni Worldwide", icon: Users },
    { number: "98%", label: "University Acceptance", icon: Award },
    { number: "50+", label: "Expert Faculty", icon: Star },
    { number: "20", label: "Years of Excellence", icon: BookOpen },
    { number: "100%", label: "Holistic Curriculum Coverage", icon: Award },
  ]

  const tilt = (i: number) => (i % 2 === 0 ? "rotate-[3deg]" : "-rotate-[3deg]")
  const colorMap = ["#9ED2C6", "#54BAB9", "#E9DAC1"]

  return (
    <section className="relative bg-white px-6 py-12 lg:px-24 overflow-hidden">
      {/* 🎈 Decorative Animated Bubbles */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 rounded-full z-0"
        style={{ backgroundColor: "#E9DAC1", opacity: 0.2 }}
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute top-1/2 right-10 w-14 h-14 rounded-full z-0"
        style={{ backgroundColor: "#54BAB9", opacity: 0.15 }}
        animate={{ x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-12 left-12 w-16 h-16 rounded-full z-0"
        style={{ backgroundColor: "#9ED2C6", opacity: 0.1 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-24 right-1/3 w-10 h-10 rounded-full z-0"
        style={{ backgroundColor: "#F7ECDE", opacity: 0.15 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Text Block */}
        <motion.div
          className="lg:col-span-5 bg-[#E9DAC1] rounded-xl p-8 shadow-xl space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-[#54BAB9] mb-4">Latest Updates</h3>
          <ScrollTicker />
          <p className="text-[#54BAB9] leading-relaxed text-sm">
            <b>Stay updated with our latest announcements and achievements</b>
          </p>
        </motion.div>

        {/* Right Stats Cards */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <motion.div
            className="text-left mb-6"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#54BAB9] mb-4">Why Choose Us</h2>
            <div className="w-24 h-1 bg-[#54BAB9] rounded-full"></div>
          </motion.div>

          {/* Top row - 3 cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {stats.slice(0, 3).map((s, i) => {
              const Icon = s.icon
              const bg = colorMap[i % colorMap.length]
              const textColor = bg === "#E9DAC1" ? "#54BAB9" : "white"
              return (
                <motion.div
                  key={s.label}
                  className={`relative flex flex-col justify-between h-28 p-4 rounded-xl shadow-xl overflow-hidden ${tilt(i)}`}
                  style={{ backgroundColor: bg }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    rotate: 0,
                    boxShadow: "0px 15px 30px rgba(0,0,0,0.2)",
                  }}
                  viewport={{ once: true }}
                >
                  <Icon size={20} className="absolute top-2 right-2 opacity-20" color={textColor} />
                  <div className="text-xl font-black" style={{ color: textColor }}>
                    {s.number}
                  </div>
                  <div className="text-xs mt-1 font-semibold leading-tight" style={{ color: textColor }}>
                    {s.label}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom row - 2 cards centered */}
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto w-full">
            {stats.slice(3, 5).map((s, i) => {
              const actualIndex = i + 3
              const Icon = s.icon
              const bg = colorMap[actualIndex % colorMap.length]
              const textColor = bg === "#E9DAC1" ? "#54BAB9" : "white"
              return (
                <motion.div
                  key={s.label}
                  className={`relative flex flex-col justify-between h-28 p-4 rounded-xl shadow-xl overflow-hidden ${tilt(actualIndex)}`}
                  style={{ backgroundColor: bg }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: actualIndex * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    rotate: 0,
                    boxShadow: "0px 15px 30px rgba(0,0,0,0.2)",
                  }}
                  viewport={{ once: true }}
                >
                  <Icon size={20} className="absolute top-2 right-2 opacity-20" color={textColor} />
                  <div className="text-xl font-black" style={{ color: textColor }}>
                    {s.number}
                  </div>
                  <div className="text-xs mt-1 font-semibold leading-tight" style={{ color: textColor }}>
                    {s.label}
                  </div>
                </motion.div>
              )
            })}
          </div>
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