"use client"
import { useState } from "react"
import Link from "next/link"
import { Clock, Users, BookOpen, Coffee, Utensils, Trophy, MapPin, ArrowRight } from "lucide-react"

export default function ADayAtBM() {
  const [selectedPeriod, setSelectedPeriod] = useState(0)

  const dailyFlow = [
    {
      time: "8:50 AM",
      title: "A bright start of our day",
      description: "Students arrive and prepare for the day ahead",
      location: "Main Campus",
      participants: "All Students",
      icon: Clock,
    },
    {
      time: "9:00 - 10:15 AM",
      title: "Morning Learning Block",
      description: "First two periods of core academic subjects",
      location: "Classrooms & Labs",
      participants: "Period 1 & 2",
      icon: BookOpen,
    },
    {
      time: "10:15 - 10:25 AM",
      title: "Morning Break",
      description: "Quick refreshment and social time",
      location: "Cafeteria & Grounds",
      participants: "All Students",
      icon: Coffee,
    },
    {
      time: "10:25 AM - 12:40 PM",
      title: "Extended Learning",
      description: "Three consecutive periods for deep learning",
      location: "Various Classrooms",
      participants: "Periods 3, 4 & 5",
      icon: Users,
    },
    {
      time: "12:40 - 1:10 PM",
      title: "Lunch Break",
      description: "Meal time and recreational activities",
      location: "Dining Hall",
      participants: "All Students",
      icon: Utensils,
    },
    {
      time: "1:10 - 3:15 PM",
      title: "Afternoon Sessions",
      description: "Final three periods of the academic day",
      location: "Classrooms & Labs",
      participants: "Periods 6, 7 & 8",
      icon: BookOpen,
    },
    {
      time: "3:15 - 4:30 PM",
      title: "Extended Activities",
      description: "Clubs, sports, and additional learning opportunities",
      location: "Various Venues",
      participants: "Optional",
      icon: Trophy,
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
    },
    {
      title: "Secondary System",
      subtitle: "Grade 4 and Above",
      description:
        "Students move between specialized subject rooms and laboratories, experiencing diverse learning environments with expert teachers.",
      features: ["Subject-specific rooms", "Specialized equipment", "Expert instruction", "Bag storage systems"],
    },
  ]

  const activities = [
    {
      category: "Certificate Courses",
      frequency: "2 hours per week",
      description: "Specialized skill development programs",
    },
    {
      category: "'Specials' - Extra curriculars",
      frequency: "1 hour per week",
      description: "Creative arts and cultural expression",
    },
    {
      category: "Sports Programs",
      frequency: "2+ times per week",
      description: "Physical fitness and team building",
    },
    {
      category: "Club Activities",
      frequency: "2 hours per week",
      description: "Interest-based learning communities",
    },
    {
      category: "Library Sessions",
      frequency: "Weekly",
      description: "Reading development and research skills",
    },
    {
      category: "Harmony Hours",
      frequency: "2 times per week",
      description: "Mental wellness and mindfulness activities",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-80 overflow-hidden">
        <img src="/images/adayatbm.jpg" alt="A Day at BM" className="w-full h-full object-cover" />
        <div className="absolute inset-0 /70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-2">A Day at BM</h1>
            <p className="text-base max-w-2xl">Experience the structured rhythm of learning and growth</p>
          </div>
        </div>
      </div>

      <div className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-[#54BAB9] mb-3">Daily Schedule</h2>
            <p className="text-sm text-gray-600 max-w-3xl mx-auto">
              Our carefully structured day balances academic learning with breaks and enrichment activities
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {dailyFlow.map((period, index) => (
              <div
                key={index}
                className="bg-white border-2 border-[#54BAB9] rounded-xl p-4 hover:shadow-lg hover:border-[#54BAB9]/70 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedPeriod(index)}
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#54BAB9]/10 rounded-lg flex-shrink-0">
                    <period.icon className="w-5 h-5 text-[#54BAB9]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium text-[#54BAB9] opacity-80">{period.time}</div>
                    <h3 className="text-base font-bold text-gray-900 mb-1">{period.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{period.description}</p>
                    <div className="flex items-center gap-3 text-xs">
                      <div className="flex items-center gap-1 text-gray-500">
                        <MapPin className="w-3 h-3" />
                        <span>{period.location}</span>
                      </div>
                      <div className="text-gray-500">{period.participants}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-[#54BAB9] mb-3">Learning Approaches</h2>
            <p className="text-sm text-gray-600 max-w-3xl mx-auto">
              Different grade levels experience tailored learning environments designed for their developmental needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {learningMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white border-2 border-[#9ED2C6] rounded-xl p-5 hover:shadow-lg hover:border-[#9ED2C6]/70 transition-all duration-300"
              >
                <div className="inline-block px-3 py-1 bg-[#54BAB9]/10 rounded-full mb-3">
                  <span className="text-[#54BAB9] font-medium text-sm">{method.subtitle}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{method.description}</p>
                <div className="space-y-2">
                  {method.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#54BAB9] rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-[#54BAB9] mb-3">Beyond Academics</h2>
            <p className="text-sm text-gray-600 max-w-3xl mx-auto">
              Holistic development through diverse co-curricular activities and enrichment programs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white border-2 border-[#E9DAC1] rounded-xl p-4 hover:shadow-lg hover:border-[#E9DAC1]/70 transition-all duration-300"
              >
                <h3 className="text-base font-bold text-gray-900 mb-2">{activity.category}</h3>
                <div className="text-xs font-medium text-[#54BAB9] mb-2">{activity.frequency}</div>
                <p className="text-sm text-gray-600">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-6 bg-white">
        <div className="flex justify-center">
          <Link href="/eventsandcelebration" className="inline-block">
            <div className="flex items-center gap-3 bg-[#54BAB9] hover:bg-[#54BAB9]/90 text-white px-6 py-3 rounded-lg shadow-md transition-colors cursor-pointer">
              <div className="text-center">
                <div className="font-semibold text-base">Events and Celebration</div>
              </div>
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
