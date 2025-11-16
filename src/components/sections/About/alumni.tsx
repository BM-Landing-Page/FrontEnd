"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GraduationCap, Users, MapPin, Calendar, Quote } from 'lucide-react'
import Image from "next/image"
import type { Alumni, Batch, University } from "@/services/api"
import { fetchAllAlumni, fetchAllBatches, fetchAlumniUniversities } from "@/services/api"

interface FormattedAlumni {
  name: string
  course: string
  university: string
  testimonial: string
}

interface AlumniVoicesByBatch {
  [key: string]: FormattedAlumni[]
}

interface UniversitiesByBatch {
  [key: string]: string[]
}

export default function Alumni() {
  const [activeMainTab, setActiveMainTab] = useState<"voices" | "universities">("voices")
  const [activeBatch, setActiveBatch] = useState<string>("2024")
  const [batches, setBatches] = useState<string[]>([])
  const [alumniVoices, setAlumniVoices] = useState<AlumniVoicesByBatch>({})
  const [universities, setUniversities] = useState<UniversitiesByBatch>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)

        const batchesResponse = await fetchAllBatches()
        if (!batchesResponse.success || !batchesResponse.data) {
          throw new Error(batchesResponse.error || "Failed to fetch batches")
        }

        const alumniResponse = await fetchAllAlumni()
        if (!alumniResponse.success || !alumniResponse.data) {
          throw new Error(alumniResponse.error || "Failed to fetch alumni")
        }

        const univResponse = await fetchAlumniUniversities()
        const alumniUniversityLinks = univResponse.data || []

        // Group alumni by batch
        const groupedByBatch: AlumniVoicesByBatch = {}
        const univByBatch: UniversitiesByBatch = {}
        const batchSet = new Set<string>()

        alumniResponse.data.forEach((alumnus: Alumni) => {
          const batchYear = alumnus.batches?.batch_year?.toString() || "Unknown"
          batchSet.add(batchYear)

          if (!groupedByBatch[batchYear]) {
            groupedByBatch[batchYear] = []
            univByBatch[batchYear] = []
          }

          // Add alumni testimonial
          if (alumnus.testimonial) {
            groupedByBatch[batchYear].push({
              name: alumnus.name,
              course: "Graduate",
              university: alumnus.universities?.university_name || "Unknown University",
              testimonial: alumnus.testimonial,
            })
          }

          // Collect universities
          if (alumnus.universities?.university_name && !univByBatch[batchYear].includes(alumnus.universities.university_name)) {
            univByBatch[batchYear].push(alumnus.universities.university_name)
          }
        })

        // Add accepted universities from alumni_universities table
        alumniUniversityLinks.forEach((link: any) => {
          const alumnus = alumniResponse.data?.find((a: Alumni) => a.alumni_id === link.alumni_id)
          if (alumnus && link.universities?.university_name) {
            const batchYear = alumnus.batches?.batch_year?.toString() || "Unknown"
            if (!univByBatch[batchYear]) {
              univByBatch[batchYear] = []
            }
            if (!univByBatch[batchYear].includes(link.universities.university_name)) {
              univByBatch[batchYear].push(link.universities.university_name)
            }
          }
        })

        const sortedBatches = Array.from(batchSet).sort()
        setBatches(sortedBatches)
        setAlumniVoices(groupedByBatch)
        setUniversities(univByBatch)

        if (sortedBatches.length > 0) {
          setActiveBatch(sortedBatches[0])
        }
      } catch (err) {
        console.error("[v0] Error loading alumni data:", err)
        setError(err instanceof Error ? err.message : "Failed to load alumni data")
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

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
          <div className="flex justify-center space-x-8 py-4">
            {[
              { key: "voices", label: "Alumni Voices", icon: Users },
              { key: "universities", label: "Universities", icon: MapPin },
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
        </div>
      </div>

      {/* Batch Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center space-x-4 mb-8 flex-wrap">
          {batches.map((batch) => (
            <motion.button
              key={batch}
              onClick={() => setActiveBatch(batch)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeBatch === batch ? "text-white shadow-lg" : "text-gray-600 hover:text-gray-800"
              }`}
              style={{
                backgroundColor: activeBatch === batch ? "#9ED2C6" : "#F7ECDE",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-4 h-4" />
              <span>Class of {batch}</span>
            </motion.button>
          ))}
        </div>

        {/* Content */}
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
                {alumniVoices[activeBatch]?.length > 0 ? (
                  alumniVoices[activeBatch].map((alumni, index) => (
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
                                  <div
                                    className="inline-block px-3 py-1 rounded-full text-sm font-medium mt-1"
                                    style={{ backgroundColor: "#9ED2C6", color: "white" }}
                                  >
                                    Class of {activeBatch}
                                  </div>
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
                    <p className="text-gray-600">No alumni testimonials for this batch yet.</p>
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
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Universities - Class of {activeBatch}</h2>
                    <p className="text-gray-600">Our graduates have been accepted to these prestigious institutions</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {universities[activeBatch]?.length > 0 ? (
                      universities[activeBatch].map((university, index) => (
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
                        <p className="text-gray-600">No universities listed for this batch yet.</p>
                      </div>
                    )}
                  </div>
                  {universities[activeBatch]?.length > 0 && (
                    <div className="mt-8 text-center">
                      <div
                        className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-white font-semibold"
                        style={{ backgroundColor: "#54BAB9" }}
                      >
                        <GraduationCap className="w-5 h-5" />
                        <span>{universities[activeBatch].length} Universities</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Stats */}
      <div className="py-16" style={{ backgroundColor: "#E9DAC1" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: Object.values(alumniVoices).flat().length, label: "Alumni Worldwide", icon: Users },
              { number: Object.values(universities).flat().length, label: "Universities", icon: MapPin },
              { number: batches.length, label: "Graduated Batches", icon: Calendar },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="text-center"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white"
                  style={{ backgroundColor: "#54BAB9" }}
                >
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">{stat.number}{stat.label.includes("Alumni") ? "+" : ""}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
