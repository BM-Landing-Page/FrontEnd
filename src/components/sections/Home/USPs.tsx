"use client"
import { motion } from "framer-motion"
import { Award, BookOpen, Star, Users } from "lucide-react"

export default function USPs() {
  const stats = [
    { number: "5000+", label: "Alumni Worldwide", icon: Users },
    { number: "98%", label: "University Acceptance", icon: Award },
    { number: "50+", label: "Expert Faculty", icon: Star },
    { number: "20", label: "Years of Excellence", icon: BookOpen },
    { number: "15:1", label: "Student-Teacher Ratio", icon: Users },
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
          <h2 className="text-3xl font-bold text-[#54BAB9]">Why Choose Us?</h2>
          <p className="text-[#1E293B] leading-relaxed">
            For two decades, we've been pioneering educational innovation, creating confident, compassionate, and
            creative learners who shape tomorrow.
          </p>
          <p className="text-[#1E293B] leading-relaxed">
            Our holistic approach seamlessly blends academic excellence with character development in a supportive,
            future-focused environment.
          </p>
          <button className="mt-4 px-6 py-3 bg-[#54BAB9] text-white rounded-full shadow-md hover:scale-105 transition-transform font-semibold text-sm">
            Discover More →
          </button>
        </motion.div>

        {/* Right Stats Cards */}
        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((s, i) => {
            const Icon = s.icon
            const bg = colorMap[i % colorMap.length]
            const textColor = bg === "#E9DAC1" ? "#54BAB9" : "white"
            return (
              <motion.div
                key={s.label}
                className={`relative flex flex-col justify-between h-48 p-8 rounded-xl shadow-xl overflow-hidden ${tilt(i)}`}
                style={{ backgroundColor: bg }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  rotate: 0, // on hover it flattens
                  boxShadow: "0px 15px 30px rgba(0,0,0,0.2)",
                }}
                viewport={{ once: true }}
              >
                <Icon size={28} className="absolute top-3 right-3 opacity-20" color={textColor} />
                <div className="text-3xl font-black" style={{ color: textColor }}>
                  {s.number}
                </div>
                <div className="text-sm mt-2 font-semibold leading-tight" style={{ color: textColor }}>
                  {s.label}
                </div>
              </motion.div>
            )
          })}
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
