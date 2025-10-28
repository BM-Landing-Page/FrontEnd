"use client"

import { useState } from "react"
import PrimaryYears from "@/components/sections/Academics/igcseandsenioryears"
import LowerSecondary from "@/components/sections/Academics/lowersecondary"

export default function CurriculumPage() {
  const [activeTab, setActiveTab] = useState<"primary" | "secondary">("primary")

  return (
    <div className="w-full bg-white">
      {/* Hero Banner */}
      <div className="w-full h-64 md:h-80 bg-gradient-to-r from-[#54BAB9] to-[#9ED2C6] flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">Our Curriculum</h1>
      </div>

      {/* Tab Switching - white background instead of peach */}
      <div className="flex justify-center gap-4 py-8 px-4 bg-white">
        <button
          onClick={() => setActiveTab("primary")}
          className={`px-8 py-3 rounded-full font-semibold transition-all ${
            activeTab === "primary"
              ? "bg-[#54BAB9] text-white"
              : "bg-white text-[#54BAB9] border-2 border-[#54BAB9] hover:bg-gray-50"
          }`}
        >
          Primary Years
        </button>
        <button
          onClick={() => setActiveTab("secondary")}
          className={`px-8 py-3 rounded-full font-semibold transition-all ${
            activeTab === "secondary"
              ? "bg-[#54BAB9] text-white"
              : "bg-white text-[#54BAB9] border-2 border-[#54BAB9] hover:bg-gray-50"
          }`}
        >
          Lower Secondary Years
        </button>
      </div>

      {/* Content */}
      <div className="w-full">{activeTab === "primary" ? <PrimaryYears /> : <LowerSecondary />}</div>
    </div>
  )
}
