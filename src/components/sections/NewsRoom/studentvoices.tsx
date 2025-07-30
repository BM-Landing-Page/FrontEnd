"use client"

import { useState, useEffect } from "react"
import { MessageCircle, User, Calendar, BookOpen, Globe, Heart, Lightbulb, Star, X, Loader2 } from "lucide-react"
import { fetchBlogs, type Blog } from "@/services/api"

interface Story {
  id: number
  title: string
  author: string
  grade: string
  date: string
  excerpt: string
  fullContent: string
  storyTheme: keyof typeof themeData
  color: string
  thumbnail?: string
}

const themeData = {
  opportunity: { icon: Star, label: "Opportunity" },
  reflection: { icon: Heart, label: "Reflection" },
  adaptation: { icon: Globe, label: "Adaptation" },
  learning: { icon: BookOpen, label: "Learning" },
  balance: { icon: Lightbulb, label: "Balance" },
  empathy: { icon: User, label: "Empathy" },
} as const

// Helper function to determine theme based on content
const determineTheme = (content: string, title: string): keyof typeof themeData => {
  const text = (content + title).toLowerCase()

  if (text.includes("opportunity") || text.includes("chance") || text.includes("unlock")) return "opportunity"
  if (text.includes("reflect") || text.includes("ponder") || text.includes("think")) return "reflection"
  if (text.includes("adapt") || text.includes("change") || text.includes("adjust")) return "adaptation"
  if (text.includes("learn") || text.includes("skill") || text.includes("education")) return "learning"
  if (text.includes("balance") || text.includes("social media") || text.includes("digital")) return "balance"
  if (text.includes("empathy") || text.includes("perspective") || text.includes("understand")) return "empathy"

  // Default themes based on content length or other factors
  const themes: (keyof typeof themeData)[] = [
    "opportunity",
    "reflection",
    "adaptation",
    "learning",
    "balance",
    "empathy",
  ]
  return themes[Math.floor(Math.random() * themes.length)]
}

// Helper function to get color scheme based on theme
const getColorScheme = (theme: keyof typeof themeData): string => {
  const colorSchemes = {
    opportunity: "from-[#F7ECDE] to-[#E9DAC1]",
    reflection: "from-[#9ED2C6] to-[#54BAB9]",
    adaptation: "from-[#E9DAC1] to-[#9ED2C6]",
    learning: "from-[#54BAB9] to-[#F7ECDE]",
    balance: "from-[#F7ECDE] to-[#54BAB9]",
    empathy: "from-[#9ED2C6] to-[#E9DAC1]",
  }
  return colorSchemes[theme]
}

// Helper function to extract excerpt from content
const extractExcerpt = (content: string, maxLength = 150): string => {
  const cleanContent = content.replace(/\n/g, " ").trim()
  if (cleanContent.length <= maxLength) return cleanContent

  const truncated = cleanContent.substring(0, maxLength)
  const lastSpace = truncated.lastIndexOf(" ")
  return lastSpace > 0 ? truncated.substring(0, lastSpace) + "..." : truncated + "..."
}

// Helper function to format date
const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default function StudentVoices() {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null)
  const [stories, setStories] = useState<Story[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        setLoading(true)
        const response = await fetchBlogs()

        if (response.success && response.data) {
          // Transform blogs to stories format
          const transformedStories: Story[] = response.data.map((blog: Blog) => {
            const theme = determineTheme(blog.content, blog.title)
            return {
              id: blog.id,
              title: blog.title,
              author: blog.author,
              grade: "Student", // Default since blogs don't have grade info
              date: formatDate(blog.created_at),
              excerpt: extractExcerpt(blog.content),
              fullContent: blog.content,
              storyTheme: theme,
              color: getColorScheme(theme),
              thumbnail: blog.thumbnail,
            }
          })
          setStories(transformedStories)
        } else {
          setError(response.error || "Failed to load stories")
        }
      } catch (err) {
        setError("An unexpected error occurred")
        console.error("Error loading blogs:", err)
      } finally {
        setLoading(false)
      }
    }

    loadBlogs()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-[#54BAB9] mx-auto mb-4" />
          <p className="text-lg text-gray-600">Loading student stories...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <X className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Unable to Load Stories</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-96 overflow-hidden">
        <img src="/placeholder.svg?height=400&width=1200" alt="Student Voices" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#54BAB9]/80 to-[#9ED2C6]/60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4">Student Voices</h1>
            <p className="text-xl max-w-2xl">Authentic stories of resilience, growth, and discovery</p>
          </div>
        </div>
      </div>

      {/* Stories Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Theme Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {Object.entries(themeData).map(([key, themeInfo]) => (
              <div key={key} className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
                <themeInfo.icon className="w-4 h-4 text-[#54BAB9]" />
                <span className="text-sm font-medium text-gray-700">{themeInfo.label}</span>
              </div>
            ))}
          </div>

          {/* Stories Grid */}
          {stories.length === 0 ? (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-600 mb-2">No Stories Yet</h3>
              <p className="text-gray-500">Check back soon for inspiring student stories!</p>
            </div>
          ) : (
            <div className="grid gap-12">
              {stories.map((storyItem) => {
                const IconComponent = themeData[storyItem.storyTheme].icon
                return (
                  <article key={storyItem.id} className="group">
                    <div
                      className={`relative overflow-hidden rounded-3xl bg-gradient-to-r ${storyItem.color} p-1 hover:shadow-2xl transition-all duration-500`}
                    >
                      <div className="bg-white rounded-3xl p-8 md:p-12 h-full">
                        <div className="grid md:grid-cols-3 gap-8">
                          {/* Story Content */}
                          <div className="md:col-span-2 space-y-6">
                            {/* Header */}
                            <div className="flex flex-wrap items-center gap-4 mb-6">
                              <div className={`p-3 rounded-2xl bg-gradient-to-r ${storyItem.color}`}>
                                <IconComponent className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-[#54BAB9] group-hover:text-[#54BAB9]/80 transition-colors">
                                  {storyItem.title}
                                </h2>
                                <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                                  <div className="flex items-center gap-2">
                                    <User className="w-4 h-4" />
                                    <span className="font-medium">{storyItem.author}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <BookOpen className="w-4 h-4" />
                                    <span>{storyItem.grade}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>{storyItem.date}</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Thumbnail */}
                            {storyItem.thumbnail && (
                              <div className="rounded-2xl overflow-hidden">
                                <img
                                  src={storyItem.thumbnail || "/placeholder.svg"}
                                  alt={storyItem.title}
                                  className="w-full h-48 object-cover"
                                />
                              </div>
                            )}

                            {/* Excerpt */}
                            <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-[#54BAB9]">
                              <p className="text-lg font-medium text-gray-800 italic leading-relaxed">
                                "{storyItem.excerpt}"
                              </p>
                            </div>

                            {/* Content Preview */}
                            <div className="prose prose-gray max-w-none">
                              <p className="text-gray-700 leading-relaxed">
                                {storyItem.fullContent.substring(0, 300)}...
                              </p>
                            </div>

                            {/* Read More Button */}
                            <button
                              onClick={() => setSelectedStory(storyItem)}
                              className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${storyItem.color} text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
                            >
                              <span>Read Full Story</span>
                              <MessageCircle className="w-4 h-4" />
                            </button>
                          </div>

                          {/* Sidebar */}
                          <div className="space-y-6">
                            {/* Author Card */}
                            <div className="bg-gray-50 p-6 rounded-2xl">
                              <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-[#54BAB9] rounded-full flex items-center justify-center">
                                  <User className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                  <h3 className="font-bold text-gray-800">{storyItem.author}</h3>
                                  <p className="text-sm text-gray-600">{storyItem.grade}</p>
                                </div>
                              </div>
                              <p className="text-sm text-gray-600">
                                Student perspective on navigating challenges and finding growth opportunities.
                              </p>
                            </div>

                            {/* Theme Badge */}
                            <div
                              className={`p-4 rounded-2xl bg-gradient-to-r ${storyItem.color} text-white text-center`}
                            >
                              <div className="flex items-center justify-center gap-2 mb-2">
                                <IconComponent className="w-5 h-5" />
                                <span className="font-semibold">{themeData[storyItem.storyTheme].label}</span>
                              </div>
                              <p className="text-sm opacity-90">Core theme of this story</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          )}
        </div>
      </div>

      {/* Full Story Modal */}
      {selectedStory && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl max-w-4xl max-h-[90vh] overflow-hidden">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-[#54BAB9]">{selectedStory.title}</h2>
                <p className="text-gray-600">
                  {selectedStory.author} - {selectedStory.grade}
                </p>
              </div>
              <button
                onClick={() => setSelectedStory(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[70vh]">
              {selectedStory.thumbnail && (
                <div className="mb-6 rounded-2xl overflow-hidden">
                  <img
                    src={selectedStory.thumbnail || "/placeholder.svg"}
                    alt={selectedStory.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
              )}
              <div className="prose prose-gray max-w-none">
                {selectedStory.fullContent.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed text-gray-700">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Impact Section */}
      <div className="py-24 bg-gradient-to-br from-[#F7ECDE] via-[#E9DAC1] to-[#9ED2C6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#54BAB9] mb-6">The Power of Student Voices</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              These stories represent more than individual experiences—they showcase the resilience, creativity, and
              wisdom of our student community.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl text-center shadow-lg">
              <div className="w-16 h-16 bg-[#54BAB9] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Resilience</h3>
              <p className="text-gray-600">Finding strength in challenging times</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl text-center shadow-lg">
              <div className="w-16 h-16 bg-[#9ED2C6] rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Innovation</h3>
              <p className="text-gray-600">Creative solutions to new problems</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl text-center shadow-lg">
              <div className="w-16 h-16 bg-[#E9DAC1] rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-[#54BAB9]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Global Perspective</h3>
              <p className="text-gray-600">Understanding our interconnected world</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl text-center shadow-lg">
              <div className="w-16 h-16 bg-[#F7ECDE] rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-[#54BAB9]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Growth</h3>
              <p className="text-gray-600">Learning and evolving through experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
