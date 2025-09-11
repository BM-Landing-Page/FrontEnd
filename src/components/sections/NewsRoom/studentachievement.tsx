"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Medal, Award, Star, Globe, Crown, Target, ArrowRight, Loader2 } from "lucide-react"
import { fetchAchievements, type Achievement } from "@/services/api"

interface DisplayAchievement extends Achievement {
  icon: any
  borderColor: string
  headerBg: string
  emoji: string
  awards: string[]
}

export default function StudentAchievement() {
  const [achievements, setAchievements] = useState<DisplayAchievement[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const getIconForAchievement = (title: string, tagline: string) => {
    const text = (title + " " + tagline).toLowerCase()
    if (text.includes("skating") || text.includes("sport")) return Medal
    if (text.includes("journalist") || text.includes("writing")) return Award
    if (text.includes("world record") || text.includes("record")) return Globe
    if (text.includes("chess")) return Crown
    if (text.includes("strength") || text.includes("physical")) return Trophy
    if (text.includes("cambridge") || text.includes("academic")) return Star
    return Target
  }

  const getColorScheme = (index: number) => {
    const schemes = [
      { borderColor: "#54BAB9", headerBg: "#F7ECDE", emoji: "🏆" },
      { borderColor: "#9ED2C6", headerBg: "#E9DAC1", emoji: "🌟" },
      { borderColor: "#54BAB9", headerBg: "#F7ECDE", emoji: "🎯" },
      { borderColor: "#E9DAC1", headerBg: "#9ED2C6", emoji: "⭐" },
    ]
    return schemes[index % schemes.length]
  }

  useEffect(() => {
    const loadAchievements = async () => {
      try {
        setLoading(true)
        const response = await fetchAchievements()

        if (response.success && response.data) {
          // Transform backend data to display format
          const transformedAchievements: DisplayAchievement[] = response.data.map((achievement, index) => {
            const colorScheme = getColorScheme(index)
            return {
              ...achievement,
              icon: getIconForAchievement(achievement.title, achievement.tagline),
              borderColor: colorScheme.borderColor,
              headerBg: colorScheme.headerBg,
              emoji: colorScheme.emoji,
              awards: achievement.desc ? achievement.desc.split("\n").filter((line) => line.trim()) : [],
            }
          })
          setAchievements(transformedAchievements)
        } else {
          setError(response.error || "Failed to load achievements")
        }
      } catch (err) {
        setError("An unexpected error occurred")
        console.error("Error loading achievements:", err)
      } finally {
        setLoading(false)
      }
    }

    loadAchievements()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-[#F7ECDE]/30 to-[#9ED2C6]/20 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-[#54BAB9] mx-auto mb-4" />
          <p className="text-xl text-gray-600">Loading achievements...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-[#F7ECDE]/30 to-[#9ED2C6]/20 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">⚠️ Error Loading Achievements</div>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-[#54BAB9] text-white px-6 py-2 rounded-lg hover:bg-[#54BAB9]/90 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#F7ECDE]/30 to-[#9ED2C6]/20">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-20 w-20 h-20 bg-[#54BAB9]/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-10 w-16 h-16 bg-[#9ED2C6]/15 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-10 w-24 h-24 bg-[#E9DAC1]/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-32 w-32 h-32 bg-[#F7ECDE]/30 rounded-full animate-bounce"></div>
      </div>

      {/* Hero Banner */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/studentachievement.jpg" alt="Student Achievements" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div className="text-white">
            <h1 className="text-6xl md:text-8xl font-black mb-6 drop-shadow-2xl">Student Achievements</h1>
            <p className="text-2xl md:text-3xl font-semibold drop-shadow-lg max-w-5xl mx-auto">
              Celebrating remarkable accomplishments on national and international platforms
            </p>
          </div>
        </div>
      </div>

      {/* Achievement Categories Section */}
      <div className="container mx-auto px-4 py-12 max-w-7xl relative">
        {/* Uniform Achievement Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.length > 0 ? (
            achievements.map((student, index) => {
              const IconComponent = student.icon
              const firstName = student.name.split(" ")[0]

              return (
                <Card
                  key={student.id || index}
                  className="border rounded-xl bg-white hover:shadow-md transition-shadow duration-200 h-full flex flex-col"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-md border border-[#54BAB9]/30 grid place-items-center text-[#54BAB9] bg-white">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-semibold text-gray-900">{student.name}</CardTitle>
                          <CardDescription className="text-sm text-gray-600">{student.tagline}</CardDescription>
                        </div>
                      </div>

                      {student.grade && (
                        <span className="px-2 py-1 rounded-full border border-[#54BAB9]/30 text-xs text-gray-700 bg-white">
                          {student.grade}
                        </span>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="pt-4 flex-grow">
                    <div className="space-y-4">
                      <div
                        className="p-3 rounded-md bg-gray-50 border-l-2"
                        style={{ borderLeftColor: student.borderColor }}
                      >
                        <p className="text-sm text-gray-800 leading-relaxed">{student.title}</p>
                      </div>

                      <ul className="space-y-2">
                        {student.awards.map((award, awardIndex) => (
                          <li key={awardIndex} className="flex items-start gap-2">
                            <span
                              className="mt-1 h-2 w-2 rounded-full"
                              style={{ backgroundColor: student.borderColor }}
                              aria-hidden="true"
                            />
                            <span className="text-sm text-gray-700 leading-relaxed">{award}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-2">
                        <p className="text-xs text-gray-500">Congratulations, {firstName}.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">No achievements found.</p>
            </div>
          )}
        </div>

        {/* Bottom Celebration Section */}
        <div className="mt-20">
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-[#54BAB9] via-[#9ED2C6] to-[#54BAB9] text-white overflow-hidden">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/15"></div>

              <CardContent className="p-16 text-center relative z-10">
                <h3 className="text-6xl font-black mb-8 drop-shadow-lg">Pride of Budding Minds</h3>

                <p className="text-2xl leading-relaxed max-w-5xl mx-auto mb-10 opacity-95 drop-shadow-md">
                  These exceptional achievements showcase the{" "}
                  <span className="font-black text-3xl">talent, dedication, and excellence</span> that define our
                  student community. From world records to international competitions, our students continue to set new
                  benchmarks and inspire others with their remarkable accomplishments.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mt-12">
                  <div className="bg-white/25 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/30">
                    <div className="text-5xl mb-4 drop-shadow-lg">🌍</div>
                    <div className="text-3xl font-black mb-3 drop-shadow-md">World Records</div>
                    <div className="opacity-95 text-lg font-semibold">Setting global standards</div>
                  </div>

                  <div className="bg-white/25 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/30">
                    <div className="text-5xl mb-4 drop-shadow-lg">🏆</div>
                    <div className="text-3xl font-black mb-3 drop-shadow-md">Championships</div>
                    <div className="opacity-95 text-lg font-semibold">National & international wins</div>
                  </div>

                  <div className="bg-white/25 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/30">
                    <div className="text-5xl mb-4 drop-shadow-lg">📚</div>
                    <div className="text-3xl font-black mb-3 drop-shadow-md">Academic Excellence</div>
                    <div className="opacity-95 text-lg font-semibold">Outstanding scholarly achievements</div>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Next Button - Centered */}
        <div className="py-12 bg-white">
          <div className="flex justify-center">
            <Link href="/studentvoice" className="inline-block">
              <div className="flex items-center gap-3 bg-[#54BAB9] hover:bg-[#54BAB9]/90 text-white px-8 py-4 rounded-lg shadow-md transition-colors cursor-pointer">
                <div className="text-center">
                  <div className="font-semibold text-lg">Thought Pieces</div>
                </div>
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
