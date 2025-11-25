"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GraduationCap, Users, MapPin, Quote, RefreshCw } from "lucide-react"
import Image from "next/image"
import { fetchAllAlumni, fetchAlumniUniversities } from "@/services/api"

interface FormattedAlumni {
  name: string
  course: string
  university: string
  testimonial: string
}

export default function Alumni() {
  const [activeMainTab, setActiveMainTab] = useState<"voices" | "universities">("voices")
  const [allAlumniVoices, setAllAlumniVoices] = useState<FormattedAlumni[]>([])
  const [allUniversities, setAllUniversities] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [refreshing, setRefreshing] = useState(false)

  const loadData = async () => {
    try {
      setLoading(true)
      setError(null)

      const alumniResponse = await fetchAllAlumni()
      if (!alumniResponse.success || !alumniResponse.data) {
        throw new Error(alumniResponse.error || "Failed to fetch alumni")
      }

      const univResponse = await fetchAlumniUniversities()
      const universitiesData = univResponse.data || []

      const voices: FormattedAlumni[] = []
      const universitySet = new Set<string>()

      alumniResponse.data.forEach((alumnus: any) => {
        // Add alumni testimonial
        if (alumnus.testimonial) {
          voices.push({
            name: alumnus.name,
            course: "Graduate",
            university: alumnus.universities?.university_name || "Unknown University",
            testimonial: alumnus.testimonial,
          })
        }

        // Collect universities from alumni records
        if (alumnus.universities?.university_name) {
          universitySet.add(alumnus.universities.university_name)
        }
      })

      if (Array.isArray(universitiesData)) {
        universitiesData.forEach((uni: any) => {
          if (uni.university_name) {
            universitySet.add(uni.university_name)
          }
        })
      }

      setAllAlumniVoices(voices)
      setAllUniversities(Array.from(universitySet).sort())
    } catch (err) {
      console.error("[v0] Error loading alumni data:", err)
      setError(err instanceof Error ? err.message : "Failed to load alumni data")
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  const handleRefresh = async () => {
    setRefreshing(true)
    await loadData()
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-800 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading alumni data...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error: {error}</p>
          <p className="text-gray-600">Please check your API connection and try again.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden bg-gray-100">
        <div className="absolute inset-0">
          <Image
            src="/images/alumni.jpg"
            alt="Alumni Hero Banner"
            fill
            className="object-cover object-top opacity-40"
            style={{ objectPosition: "50% 20%" }}
          />
        </div>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
              style={{ backgroundColor: "#54BAB9" }}
            >
              <GraduationCap className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-5xl font-bold text-gray-800 mb-4">Alumni Voices</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Celebrating the achievements and journeys of our remarkable graduates
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="sticky top-0 z-20 bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex justify-center space-x-8 flex-1">
              {[
                { key: "voices", label: "Alumni Voices", icon: Users },
                { key: "universities", label: "Accepted Universities", icon: MapPin },
              ].map(({ key, label, icon: Icon }) => (
                <motion.button
                  key={key}
                  onClick={() => setActiveMainTab(key as "voices" | "universities")}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeMainTab === key ? "text-white shadow-lg" : "text-gray-600 hover:text-gray-800"
                  }`}
                  style={{
                    backgroundColor: activeMainTab === key ? "#54BAB9" : "transparent",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </motion.button>
              ))}
            </div>
            <motion.button
              onClick={handleRefresh}
              disabled={refreshing}
              className="ml-4 p-3 rounded-full text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Refresh data"
            >
              <RefreshCw className={`w-5 h-5 ${refreshing ? "animate-spin" : ""}`} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          {activeMainTab === "voices" ? (
            <motion.div
              key="voices"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid gap-8 md:gap-12">
                {allAlumniVoices.length > 0 ? (
                  allAlumniVoices.map((alumni, index) => (
                    <motion.div
                      key={`${alumni.name}-${index}`}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                    >
                      <div
                        className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
                        style={{ backgroundColor: index % 2 === 0 ? "#F7ECDE" : "#E9DAC1" }}
                      >
                        <div className="p-8">
                          <div className="flex flex-col lg:flex-row gap-6">
                            <div className="lg:w-1/3">
                              <div className="flex items-center space-x-3 mb-4">
                                <div
                                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                                  style={{ backgroundColor: "#54BAB9" }}
                                >
                                  {alumni.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </div>
                                <div>
                                  <h3 className="text-xl font-bold text-gray-800">{alumni.name}</h3>
                                </div>
                              </div>
                              <div className="space-y-2 text-sm text-gray-600">
                                <div className="flex items-center space-x-2">
                                  <GraduationCap className="w-4 h-4" />
                                  <span>{alumni.course}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <MapPin className="w-4 h-4" />
                                  <span>{alumni.university}</span>
                                </div>
                              </div>
                            </div>
                            <div className="lg:w-2/3">
                              <div className="relative">
                                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-gray-300" />
                                <p className="text-gray-700 leading-relaxed pl-6 italic">{alumni.testimonial}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-600">No alumni testimonials yet.</p>
                  </div>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="universities"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="shadow-lg rounded-lg" style={{ backgroundColor: "#F7ECDE" }}>
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Accepted Universities</h2>
                    <p className="text-gray-600">Our graduates have been accepted to these prestigious institutions</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {allUniversities.length > 0 ? (
                      allUniversities.map((university, index) => (
                        <motion.div
                          key={`${university}-${index}`}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05, duration: 0.4 }}
                          className="p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-white border-l-4"
                          style={{ borderLeftColor: "#54BAB9" }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="flex items-center space-x-3">
                            <div
                              className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                              style={{ backgroundColor: "#9ED2C6" }}
                            >
                              {index + 1}
                            </div>
                            <span className="text-gray-800 font-medium">{university}</span>
                          </div>
                        </motion.div>
                      ))
                    ) : (
                      <div className="col-span-full text-center py-12">
                        <p className="text-gray-600">No universities listed yet.</p>
                      </div>
                    )}
                  </div>
                  {allUniversities.length > 0 && (
                    <div className="mt-8 text-center">
                      <div
                        className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-white font-semibold"
                        style={{ backgroundColor: "#54BAB9" }}
                      >
                        <GraduationCap className="w-5 h-5" />
                        <span>{allUniversities.length} Universities</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
