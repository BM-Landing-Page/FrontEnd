import Link from "next/link"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Medal, Award, Star, Globe, Crown, Target, ArrowRight } from "lucide-react"

export default function StudentAchievement() {
  const achievements = [
    {
      name: "Shree Achyutha Raju",
      grade: "Grade 4",
      title: "BMIS Skates Ahead!",
      achievement: "Represented Tamil Nadu at 62nd National Skating Championship",
      awards: ["GOLD in Street Skateboarding", "SILVER in Park Skateboarding"],
      icon: Medal,
      borderColor: "#54BAB9",
      headerBg: "#F7ECDE",
      emoji: "🛹",
    },
    {
      name: "Hariharan",
      grade: "9th Grade",
      title: "Young Journalist in Making",
      achievement: "Best Profile Article in Media Makers Fellowship",
      awards: ["Article: 'Chennai's Best Kept Secret? Hint: It's Served in a Clay Pot'"],
      icon: Award,
      borderColor: "#9ED2C6",
      headerBg: "#E9DAC1",
      emoji: "📰",
    },
    {
      name: "Rohan J",
      grade: "",
      title: "A World Record for Numbers",
      achievement: "International Number Master - New World Record",
      awards: ["Recited number names up to 102 digits", "Noble Book of World Records"],
      icon: Globe,
      borderColor: "#54BAB9",
      headerBg: "#F7ECDE",
      emoji: "🔢",
    },
    {
      name: "Jeisrikrishna",
      grade: "7th Grade",
      title: "Chess Master Extraordinaire",
      achievement: "Guinness World Record",
      awards: ["Fastest chess set arrangement blindfolded: 31.16 seconds"],
      icon: Crown,
      borderColor: "#E9DAC1",
      headerBg: "#9ED2C6",
      emoji: "♟️",
    },
    {
      name: "Sanjeev Krishna G",
      grade: "5 years old",
      title: "Strength & Determination",
      achievement: "New World Record in Noble Book of World Records",
      awards: ["Longest Distance Strolling (5 km) while Tugging 50 kg"],
      icon: Trophy,
      borderColor: "#54BAB9",
      headerBg: "#F7ECDE",
      emoji: "💪",
    },
    {
      name: "K.S. Saadhana Anugrahaa",
      grade: "",
      title: "Outstanding Cambridge Learner",
      achievement: "Highest score worldwide in Cambridge O Level Tamil",
      awards: ["June 2023 Cambridge O Level Tamil examinations"],
      icon: Star,
      borderColor: "#9ED2C6",
      headerBg: "#E9DAC1",
      emoji: "📚",
    },
    {
      name: "Varishta Sharravanan",
      grade: "Grade 8",
      title: "National Writing Excellence",
      achievement: "Runner-Up in National Writing Bee",
      awards: ["Outstanding storytelling, creativity, and expression"],
      icon: Target,
      borderColor: "#E9DAC1",
      headerBg: "#9ED2C6",
      emoji: "✍️",
    },
  ]

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
          {achievements.map((student, index) => {
            const IconComponent = student.icon
            const firstName = student.name.split(" ")[0]

            return (
              <Card
                key={index}
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
                        <CardDescription className="text-sm text-gray-600">{student.title}</CardDescription>
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
                    <div className="p-3 rounded-md bg-gray-50 border-l-2" style={{ borderLeftColor: "#54BAB9" }}>
                      <p className="text-sm text-gray-800 leading-relaxed">{student.achievement}</p>
                    </div>

                    <ul className="space-y-2">
                      {student.awards.map((award, awardIndex) => (
                        <li key={awardIndex} className="flex items-start gap-2">
                          <span
                            className="mt-1 h-2 w-2 rounded-full"
                            style={{ backgroundColor: "#54BAB9" }}
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
          })}
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
