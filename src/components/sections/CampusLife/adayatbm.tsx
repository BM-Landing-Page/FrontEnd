"use client"

import { useState } from "react"
import { Clock, Users, BookOpen, Coffee, Utensils, Trophy, MapPin } from "lucide-react"

export default function ADayAtBM() {
  const [selectedPeriod, setSelectedPeriod] = useState(0)

  const dailyFlow = [
    {
      time: "8:50 AM",
      title: "School Begins",
      description: "Students arrive and prepare for the day ahead",
      location: "Main Campus",
      participants: "All Students",
      icon: Clock,
      bgColor: "bg-[#F7ECDE]",
      textColor: "text-[#54BAB9]",
    },
    {
      time: "9:00 - 10:15 AM",
      title: "Morning Learning Block",
      description: "First two periods of core academic subjects",
      location: "Classrooms & Labs",
      participants: "Period 1 & 2",
      icon: BookOpen,
      bgColor: "bg-[#E9DAC1]",
      textColor: "text-[#54BAB9]",
    },
    {
      time: "10:15 - 10:25 AM",
      title: "Morning Break",
      description: "Quick refreshment and social time",
      location: "Cafeteria & Grounds",
      participants: "All Students",
      icon: Coffee,
      bgColor: "bg-[#9ED2C6]",
      textColor: "text-white",
    },
    {
      time: "10:25 AM - 12:40 PM",
      title: "Extended Learning",
      description: "Three consecutive periods for deep learning",
      location: "Various Classrooms",
      participants: "Periods 3, 4 & 5",
      icon: Users,
      bgColor: "bg-[#54BAB9]",
      textColor: "text-white",
    },
    {
      time: "12:40 - 1:10 PM",
      title: "Lunch Break",
      description: "Meal time and recreational activities",
      location: "Dining Hall",
      participants: "All Students",
      icon: Utensils,
      bgColor: "bg-[#F7ECDE]",
      textColor: "text-[#54BAB9]",
    },
    {
      time: "1:10 - 3:15 PM",
      title: "Afternoon Sessions",
      description: "Final three periods of the academic day",
      location: "Classrooms & Labs",
      participants: "Periods 6, 7 & 8",
      icon: BookOpen,
      bgColor: "bg-[#E9DAC1]",
      textColor: "text-[#54BAB9]",
    },
    {
      time: "3:15 - 4:30 PM",
      title: "Extended Activities",
      description: "Clubs, sports, and additional learning opportunities",
      location: "Various Venues",
      participants: "Optional",
      icon: Trophy,
      bgColor: "bg-[#9ED2C6]",
      textColor: "text-white",
    },
  ]

  const learningMethods = [
    {
      title: "Primary Approach",
      subtitle: "Grades 1-3",
      description:
        "Students stay in their homeroom classroom with their teacher, creating a stable and nurturing environment for young learners.",
      features: [
        "Single classroom setting",
        "Consistent teacher interaction",
        "Age-appropriate resources",
        "Comfortable learning space",
      ],
      bgColor: "bg-[#F7ECDE]",
    },
    {
      title: "Secondary System",
      subtitle: "Grade 4 and Above",
      description:
        "Students move between specialized subject rooms and laboratories, experiencing diverse learning environments with expert teachers.",
      features: ["Subject-specific rooms", "Specialized equipment", "Expert instruction", "Bag storage systems"],
      bgColor: "bg-[#E9DAC1]",
    },
  ]

  const activities = [
    {
      category: "Certificate Courses",
      frequency: "2 hours per week",
      description: "Specialized skill development programs",
      bgColor: "bg-[#F7ECDE]",
    },
    {
      category: "Music & Dance",
      frequency: "1 hour per week",
      description: "Creative arts and cultural expression",
      bgColor: "bg-[#E9DAC1]",
    },
    {
      category: "Sports Programs",
      frequency: "2+ times per week",
      description: "Physical fitness and team building",
      bgColor: "bg-[#9ED2C6]",
    },
    {
      category: "Club Activities",
      frequency: "2 hours per week",
      description: "Interest-based learning communities",
      bgColor: "bg-[#54BAB9]",
    },
    {
      category: "Library Sessions",
      frequency: "Weekly",
      description: "Reading development and research skills",
      bgColor: "bg-[#F7ECDE]",
    },
    {
      category: "Harmony Hours",
      frequency: "2 times per week",
      description: "Mental wellness and mindfulness activities",
      bgColor: "bg-[#9ED2C6]",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-96 overflow-hidden">
        <img
          src="/images/adaytbm.jpg"
          alt="A Day at BM"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#54BAB9]/70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4">A Day at BM</h1>
            <p className="text-xl max-w-2xl">Experience the structured rhythm of learning and growth</p>
          </div>
        </div>
      </div>

      {/* Daily Schedule */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#54BAB9] mb-6">Daily Schedule</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our carefully structured day balances academic learning with breaks and enrichment activities
            </p>
          </div>

          <div className="grid gap-6">
            {dailyFlow.map((period, index) => (
              <div
                key={index}
                className={`${period.bgColor} rounded-2xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer`}
                onClick={() => setSelectedPeriod(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className={`p-4 bg-white/20 rounded-xl`}>
                      <period.icon className={`w-8 h-8 ${period.textColor}`} />
                    </div>
                    <div>
                      <div className={`text-sm font-medium ${period.textColor} opacity-80`}>{period.time}</div>
                      <h3 className={`text-2xl font-bold ${period.textColor} mb-2`}>{period.title}</h3>
                      <p className={`${period.textColor} opacity-90`}>{period.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`flex items-center gap-2 ${period.textColor} opacity-80 mb-2`}>
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{period.location}</span>
                    </div>
                    <div className={`text-sm ${period.textColor} opacity-80`}>{period.participants}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Learning Methods */}
      <div className="py-20 bg-gradient-to-br from-[#F7ECDE] to-[#E9DAC1]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#54BAB9] mb-6">Learning Approaches</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Different grade levels experience tailored learning environments designed for their developmental needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {learningMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg">
                <div className={`inline-block px-4 py-2 ${method.bgColor} rounded-full mb-6`}>
                  <span className="text-[#54BAB9] font-medium">{method.subtitle}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#54BAB9] mb-4">{method.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{method.description}</p>

                <div className="space-y-3">
                  {method.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#54BAB9] rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Beyond Academics */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#54BAB9] mb-6">Beyond Academics</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Holistic development through diverse co-curricular activities and enrichment programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className={`${activity.bgColor} rounded-2xl p-6 hover:shadow-lg transition-all duration-300`}
              >
                <h3
                  className={`text-xl font-bold mb-3 ${activity.bgColor === "bg-[#54BAB9]" || activity.bgColor === "bg-[#9ED2C6]" ? "text-white" : "text-[#54BAB9]"}`}
                >
                  {activity.category}
                </h3>
                <div
                  className={`text-sm font-medium mb-3 ${activity.bgColor === "bg-[#54BAB9]" || activity.bgColor === "bg-[#9ED2C6]" ? "text-white/80" : "text-[#54BAB9]/80"}`}
                >
                  {activity.frequency}
                </div>
                <p
                  className={`${activity.bgColor === "bg-[#54BAB9]" || activity.bgColor === "bg-[#9ED2C6]" ? "text-white/90" : "text-gray-700"}`}
                >
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Information */}
      <div className="py-20 bg-gradient-to-r from-[#9ED2C6] to-[#54BAB9]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-3xl font-bold mb-2">8:50 AM</div>
              <div className="text-white/80">School Start Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">40-45</div>
              <div className="text-white/80">Minutes per Period</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4:30 PM</div>
              <div className="text-white/80">Extended Hours End</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">8</div>
              <div className="text-white/80">Periods per Day</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
