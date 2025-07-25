import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Medal, Award, Star, Globe, Crown, Target } from "lucide-react"

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
          <img
            src="/placeholder.svg?height=400&width=1200&text=Students+celebrating+achievements+with+trophies+and+medals"
            alt="Student Achievements"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#54BAB9]/90 via-[#9ED2C6]/85 to-[#E9DAC1]/90"></div>
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
        <div className="flex justify-center gap-6 flex-wrap mb-16">
          <div className="px-8 py-4 rounded-full bg-gradient-to-r from-[#54BAB9] to-[#9ED2C6] text-white font-bold text-lg shadow-xl hover:scale-105 transition-all border-2 border-white">
            🌍 World Records
          </div>
          <div className="px-8 py-4 rounded-full bg-gradient-to-r from-[#9ED2C6] to-[#E9DAC1] text-white font-bold text-lg shadow-xl hover:scale-105 transition-all border-2 border-white">
            🏆 Championships
          </div>
          <div className="px-8 py-4 rounded-full bg-gradient-to-r from-[#E9DAC1] to-[#54BAB9] text-white font-bold text-lg shadow-xl hover:scale-105 transition-all border-2 border-white">
            📚 Excellence
          </div>
        </div>

        {/* Uniform Achievement Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((student, index) => {
            const IconComponent = student.icon

            return (
              <Card
                key={index}
                className="border-4 bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 h-full flex flex-col shadow-lg"
                style={{ borderColor: student.borderColor }}
              >
                <CardHeader className="pb-4 flex-shrink-0 relative" style={{ backgroundColor: student.headerBg }}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div
                        className="p-4 rounded-xl text-white shadow-lg"
                        style={{ backgroundColor: student.borderColor }}
                      >
                        <IconComponent className="h-7 w-7" />
                      </div>
                      <div className="text-5xl drop-shadow-lg">{student.emoji}</div>
                    </div>
                    {student.grade && (
                      <div
                        className="px-4 py-2 rounded-full text-sm font-bold border-2 shadow-md"
                        style={{
                          backgroundColor: "white",
                          color: student.borderColor,
                          borderColor: student.borderColor,
                        }}
                      >
                        {student.grade}
                      </div>
                    )}
                  </div>

                  <CardTitle className="text-2xl mb-3 font-black drop-shadow-sm" style={{ color: student.borderColor }}>
                    {student.name}
                  </CardTitle>
                  <CardDescription className="text-lg font-bold text-gray-800">{student.title}</CardDescription>
                </CardHeader>

                <CardContent className="pt-6 flex-grow flex flex-col">
                  <div className="space-y-5 flex-grow">
                    <div
                      className="bg-gray-50 p-4 rounded-xl border-l-4"
                      style={{ borderLeftColor: student.borderColor }}
                    >
                      <p className="text-gray-800 font-semibold leading-relaxed">{student.achievement}</p>
                    </div>

                    <div className="space-y-4 flex-grow">
                      {student.awards.map((award, awardIndex) => (
                        <div
                          key={awardIndex}
                          className="p-5 rounded-xl border-3 shadow-md hover:shadow-lg transition-all"
                          style={{
                            backgroundColor: awardIndex % 2 === 0 ? student.headerBg : "white",
                            borderColor: student.borderColor,
                          }}
                        >
                          <div className="flex items-start gap-4">
                            <span className="text-3xl drop-shadow-sm">🏆</span>
                            <span className="text-sm font-bold leading-relaxed text-gray-800">{award}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 text-center">
                      <div
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-3 shadow-lg hover:scale-105 transition-all"
                        style={{
                          borderColor: student.borderColor,
                          backgroundColor: student.headerBg,
                          color: student.borderColor,
                        }}
                      >
                        <span className="text-2xl">🎉</span>
                        <span className="font-black text-lg">Congratulations, {student.name.split(" ")[0]}!</span>
                      </div>
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
      </div>
    </div>
  )
}
