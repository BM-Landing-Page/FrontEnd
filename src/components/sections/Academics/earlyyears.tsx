"use client"

import { useState, useEffect } from "react"
import {
  BookOpen,
  Heart,
  Users,
  Palette,
  Music,
  Globe,
  Star,
  Play,
  Target,
  Lightbulb,
  Award,
  ArrowRight,
} from "lucide-react"

export default function EarlyYears() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const learningAreas = [
    {
      title: "Communication & Language",
      icon: <Users className="w-8 h-8" />,
      description: "Building confident speakers and active listeners",
    },
    {
      title: "Literacy",
      icon: <BookOpen className="w-8 h-8" />,
      description: "Early reading and writing foundations",
    },
    {
      title: "Numeracy",
      icon: <Target className="w-8 h-8" />,
      description: "Mathematical thinking through play",
    },
    {
      title: "Physical Development",
      icon: <Play className="w-8 h-8" />,
      description: "Gross and fine motor skill development",
    },
    {
      title: "Personal, Social & Emotional",
      icon: <Heart className="w-8 h-8" />,
      description: "Building relationships and self-confidence",
    },
    {
      title: "Understanding the World",
      icon: <Globe className="w-8 h-8" />,
      description: "Exploring communities, traditions, and nature",
    },
  ]

  const themes = [
    "Seasons & Weather",
    "Community Helpers",
    "Animals & Habitats",
    "Transportation",
    "Festivals & Traditions",
    "Space & Science",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center" style={{ backgroundColor: "#F7ECDE" }}>
        <div className="max-w-4xl mx-auto">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
              Early Years at <span style={{ color: "#54BAB9" }}>Budding Minds</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 font-light">
              Where learning begins with wonder, joy, and love.
            </p>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: "#9ED2C6" }}></div>
          </div>
        </div>

        {/* Decorative elements */}
        <div
          className="absolute top-10 left-10 w-20 h-20 rounded-full opacity-20 animate-bounce"
          style={{ backgroundColor: "#E9DAC1" }}
        ></div>
        <div
          className="absolute bottom-10 right-10 w-16 h-16 rounded-full opacity-20 animate-pulse"
          style={{ backgroundColor: "#9ED2C6" }}
        ></div>
      </section>

      {/* Founders' Vision */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Founders' Vision</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  Founded by <strong>Mr. Ashok</strong> and <strong>Ms. Latha</strong>, Budding Minds was born from
                  their personal journey as parents seeking the perfect early learning environment for their own
                  children.
                </p>
                <p className="mb-4">
                  With extensive certifications in early childhood education and a deep understanding of child
                  development, they created a nurturing space where every child's unique potential can flourish.
                </p>
                <p>
                  Their vision: to provide a foundation where children develop not just academically, but emotionally,
                  socially, and creatively – preparing them for a lifetime of learning and discovery.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-80 rounded-2xl shadow-lg overflow-hidden" style={{ backgroundColor: "#E9DAC1" }}>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <div
                      className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#54BAB9" }}
                    >
                      <Heart className="w-12 h-12 text-white" />
                    </div>
                    <p className="text-gray-700 font-medium">Nurturing Excellence Since 2004</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Learning Areas */}
      <section className="py-16 px-4" style={{ backgroundColor: "#F7ECDE" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Foundation for Lifelong Learning</h2>
            <p className="text-xl text-gray-600">EYFS-Aligned Learning Areas</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningAreas.map((area, index) => (
              <div
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white rounded-lg shadow-md"
              >
                <div className="p-6 text-center">
                  <div
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: "#9ED2C6" }}
                  >
                    <div style={{ color: "#54BAB9" }}>{area.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{area.title}</h3>
                  <p className="text-gray-600 text-sm">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kindergarten Focus */}
      <section className="py-16 px-4" style={{ backgroundColor: "#9ED2C6" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Early Readers & Writers</h2>
            <p className="text-xl text-white/90">Kindergarten Programme Excellence</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-4">Our Goal</h3>
                <p className="text-white/90 text-lg">
                  By the end of kindergarten, children confidently read Level 1 books and write complete paragraphs,
                  setting a strong foundation for primary school success.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-4">Daily Structure</h3>
                <ul className="text-white/90 space-y-2">
                  <li>• PP1 & PP2 structured learning routines</li>
                  <li>• Self-dependence activities (eating, dressing)</li>
                  <li>• Guided nap time for emotional regulation</li>
                  <li>• Confidence-building through independence</li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 text-center">
                <div className="flex justify-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <ArrowRight className="w-8 h-8 text-white mt-4" />
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                </div>
                <p className="text-white text-lg font-medium">Learning Journey Progress</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Literacy & Numeracy Approach */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Literacy */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800">Literacy Programme</h3>
              <div className="space-y-4">
                {/* Points */}
                <div className="flex items-start space-x-4">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#54BAB9" }}
                  >
                    <BookOpen className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Multi-Sensory Learning</h4>
                    <p className="text-gray-600">Engaging all senses for deeper understanding</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#54BAB9" }}>
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Inclusive Teaching</h4>
                    <p className="text-gray-600">Adapting to every child's learning style</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#54BAB9" }}>
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Early Readers by Age 5</h4>
                    <p className="text-gray-600">Proven track record of reading success</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Numeracy */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800">Numeracy Through Play</h3>
              <div className="space-y-4">
                {/* Points */}
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#9ED2C6" }}>
                    <Play className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Real-World Scenarios</h4>
                    <p className="text-gray-600">Mathematics in everyday contexts</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#9ED2C6" }}>
                    <Palette className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Theme-Based Integration</h4>
                    <p className="text-gray-600">Math woven into thematic learning</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#9ED2C6" }}>
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Hands-On Learning</h4>
                    <p className="text-gray-600">Manipulatives and interactive activities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thematic Curriculum */}
      <section className="py-16 px-4" style={{ backgroundColor: "#E9DAC1" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Holistic, Thematic Learning</h2>
            <p className="text-xl text-gray-600">Theme-Based Curriculum Since 2004</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {themes.map((theme, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: "#54BAB9" }}>
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800">{theme}</h4>
              </div>
            ))}
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Integrated Learning Benefits</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-2 text-gray-700">
                <li>• Cross-curricular connections strengthen understanding</li>
                <li>• Real-world relevance makes learning meaningful</li>
                <li>• Creative expression through multiple mediums</li>
              </ul>
              <ul className="space-y-2 text-gray-700">
                <li>• Critical thinking through exploration</li>
                <li>• Collaborative learning experiences</li>
                <li>• Cultural awareness and global perspectives</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Integration and CTA remain unchanged */}
      {/* ... */}
    </div>
  )
}
