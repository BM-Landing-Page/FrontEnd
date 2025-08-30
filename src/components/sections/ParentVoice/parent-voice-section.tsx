"use client"

import { useState } from "react"
import FeedbackForm from "./feedback-form"
import FeedbackList from "./feedback-list"
import TabSwitcher from "./tab-switcher"

// Theme colors (used minimally and consistently)
// primary: #54BAB9, accent: #9ED2C6, surface-1: #E9DAC1, surface-2: #F7ECDE, background: white
const COLORS = {
  primary: "#54BAB9",
  accent: "#9ED2C6",
  surface1: "#E9DAC1",
  surface2: "#F7ECDE",
  bg: "#FFFFFF",
}

export default function ParentVoiceSection() {
  const [activeTab, setActiveTab] = useState<"submit" | "view">("submit")

  return (
    <section className="w-full" style={{ backgroundColor: COLORS.bg }}>
      {/* Hero - full-bleed image with text overlay */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        <div className="relative h-64 md:h-96 lg:h-[28rem]">
          <img
            src="/parents-and-child-at-school-minimal.png"
            alt="Parents and child at school"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0">
            {/* Constrain overlay content while image remains full-bleed */}
            <div className="mx-auto max-w-5xl h-full px-4 flex items-end pb-6 md:pb-8">
              <div
                className="rounded-2xl border bg-white/90 backdrop-blur px-5 py-4 md:px-6 md:py-5"
                style={{ borderColor: COLORS.surface1 }}
              >
                <h1 className="text-pretty text-3xl md:text-4xl font-semibold" style={{ color: COLORS.primary }}>
                  Parents’ Voice
                </h1>
                <p className="mt-2 text-pretty leading-relaxed">
                  Share your thoughts to help us improve, and read what other parents are saying about their experience.
                </p>
                <div
                  className="mt-4 inline-flex items-center rounded-full px-4 py-2 text-sm"
                  style={{ backgroundColor: COLORS.accent }}
                >
                  Your feedback matters
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero end */}

      {/* Tabs and content */}
      <div className="mx-auto max-w-5xl px-4 pb-16">
        <TabSwitcher active={activeTab} onChange={setActiveTab} colors={COLORS} />
        <div className="mt-6">
          {activeTab === "submit" ? <FeedbackForm colors={COLORS} /> : <FeedbackList colors={COLORS} />}
        </div>
      </div>
    </section>
  )
}
