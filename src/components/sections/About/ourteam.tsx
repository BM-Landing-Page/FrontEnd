"use client"

import { useState, useEffect } from "react"
import { Linkedin, Award, GraduationCap, Calendar } from "lucide-react"
import Image from "next/image"
import { fetchTeamMembers, type TeamMember } from "@/services/api"

const departments = [
  { key: "all", label: "All Team" },
  { key: "chief executive", label: "Chief Executive" },
  { key: "admin team", label: "Admin Team" },
  { key: "facilitators team", label: "Facilitators Team" },
  { key: "support staff", label: "Support Staff" },
  { key: "franchise team", label: "Franchise Team" },
]

export default function OurTeam() {
  const [activeTab, setActiveTab] = useState("all")
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch team members on component mount
  useEffect(() => {
    const loadTeamMembers = async () => {
      setLoading(true)
      setError(null)

      const result = await fetchTeamMembers()

      if (result.success && result.data) {
        setTeamMembers(result.data)
      } else {
        setError(result.error || "Failed to load team members")
      }

      setLoading(false)
    }

    loadTeamMembers()
  }, [])

  const filteredTeam =
    activeTab === "all" ? teamMembers : teamMembers.filter((member) => member.department === activeTab)

  const handleCardClick = (member: TeamMember) => {
    setSelectedMember(member)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedMember(null)
  }

  // Loading skeleton component
  const LoadingSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="border-2 rounded-lg bg-white shadow-sm animate-pulse"
          style={{ borderColor: "#9ED2C6" }}
        >
          <div className="p-6 text-center">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200"></div>
            <div className="h-6 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
          </div>
        </div>
      ))}
    </div>
  )

  // Error component
  const ErrorMessage = ({ message }: { message: string }) => (
    <div className="text-center py-12">
      <div className="text-red-500 text-lg mb-4">⚠️ Error Loading Team</div>
      <p className="text-gray-600 mb-4">{message}</p>
      <button
        onClick={() => window.location.reload()}
        className="px-6 py-2 rounded-lg text-white hover:opacity-90 transition-opacity"
        style={{ backgroundColor: "#54BAB9" }}
      >
        Try Again
      </button>
    </div>
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="Our Team Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Our Team</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
              Meet the dedicated professionals who make our educational mission possible
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8" style={{ backgroundColor: "#F7ECDE" }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {departments.map((dept) => (
              <button
                key={dept.key}
                onClick={() => setActiveTab(dept.key)}
                disabled={loading}
                className={`px-4 py-2 rounded-full transition-all duration-300 disabled:opacity-50 ${
                  activeTab === dept.key ? "text-white shadow-lg" : "bg-white hover:bg-white/90 border-2"
                }`}
                style={{
                  backgroundColor: activeTab === dept.key ? "#54BAB9" : "white",
                  borderColor: activeTab === dept.key ? "#54BAB9" : "#9ED2C6",
                  color: activeTab === dept.key ? "white" : "#54BAB9",
                }}
              >
                {dept.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {loading ? (
            <LoadingSkeleton />
          ) : error ? (
            <ErrorMessage message={error} />
          ) : filteredTeam.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg mb-4">No team members found</div>
              <p className="text-gray-400">
                {activeTab === "all" ? "No team members available." : `No team members in ${activeTab} department.`}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTeam.map((member) => (
                <div
                  key={member.id}
                  className="cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 hover:border-opacity-100 rounded-lg bg-white shadow-sm"
                  style={{ borderColor: "#9ED2C6" }}
                  onClick={() => handleCardClick(member)}
                >
                  <div className="p-6 text-center">
                    <div
                      className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4"
                      style={{ borderColor: "#54BAB9" }}
                    >
                      <Image
                        src={member.image_url || "/placeholder.svg?height=300&width=300"}
                        alt={member.name}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = "/placeholder.svg?height=300&width=300"
                        }}
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2" style={{ color: "#54BAB9" }}>
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium" style={{ color: "#9ED2C6" }}>
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Team Member Detail Modal */}
      {isModalOpen && selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-hidden">
            {/* Teal Header Section */}
            <div className="relative p-8" style={{ backgroundColor: "#54BAB9" }}>
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex items-center gap-6">
                {/* Profile Photo - Rounded Square */}
                <div className="relative w-32 h-32 rounded-2xl overflow-hidden bg-white/20 flex-shrink-0">
                  <Image
                    src={selectedMember.image_url || "/placeholder.svg?height=300&width=300"}
                    alt={selectedMember.name}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/placeholder.svg?height=300&width=300"
                    }}
                  />
                </div>

                {/* Name and Role */}
                <div>
                  <h2 className="text-4xl font-bold text-white mb-2">{selectedMember.name}</h2>
                  <p className="text-xl text-white/90">{selectedMember.role}</p>
                </div>
              </div>
            </div>

            {/* White Content Area */}
            <div className="p-8 bg-white overflow-y-auto max-h-[60vh]">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - About and Achievements */}
                <div className="lg:col-span-2 space-y-8">
                  {/* About Section */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-1 h-8 rounded-full" style={{ backgroundColor: "#54BAB9" }}></div>
                      <h3 className="text-2xl font-bold text-gray-800">About {selectedMember.name.split(" ")[0]}.</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg">{selectedMember.description}</p>
                  </div>

                  {/* Key Achievements Section */}
                  {selectedMember.achievements && selectedMember.achievements.length > 0 && (
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <Award className="w-6 h-6" style={{ color: "#54BAB9" }} />
                        <h3 className="text-2xl font-bold text-gray-800">Key Achievements</h3>
                      </div>
                      <div className="space-y-4">
                        {selectedMember.achievements.map((achievement, index) => (
                          <div
                            key={achievement.id || index}
                            className="p-4 rounded-2xl text-gray-700 font-medium"
                            style={{ backgroundColor: "#54BAB9", color: "white" }}
                          >
                            {achievement.description}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Column - Info and Contact */}
                <div className="space-y-6">
                  {/* Education */}
                  {selectedMember.education_background && (
                    <div
                      className="p-4 rounded-xl border-2"
                      style={{ borderColor: "#9ED2C6", backgroundColor: "#F7ECDE" }}
                    >
                      <div className="flex items-start gap-3">
                        <GraduationCap className="w-5 h-5 mt-1" style={{ color: "#54BAB9" }} />
                        <div>
                          <h4 className="font-semibold mb-2" style={{ color: "#54BAB9" }}>
                            Education
                          </h4>
                          <p className="text-sm text-gray-700 leading-relaxed">{selectedMember.education_background}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Experience */}
                  {selectedMember.years_experience && (
                    <div
                      className="p-4 rounded-xl border-2"
                      style={{ borderColor: "#9ED2C6", backgroundColor: "#E9DAC1" }}
                    >
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5" style={{ color: "#54BAB9" }} />
                        <div>
                          <h4 className="font-semibold mb-1" style={{ color: "#54BAB9" }}>
                            Experience
                          </h4>
                          <p className="text-lg font-bold text-gray-800">{selectedMember.years_experience}+ years</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Joined Date */}
                  {selectedMember.joined_month && selectedMember.joined_year && (
                    <div
                      className="p-4 rounded-xl border-2"
                      style={{ borderColor: "#9ED2C6", backgroundColor: "rgba(158, 210, 198, 0.2)" }}
                    >
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5" style={{ color: "#54BAB9" }} />
                        <div>
                          <h4 className="font-semibold mb-1" style={{ color: "#54BAB9" }}>
                            Joined
                          </h4>
                          <p className="text-sm text-gray-700">
                            {new Date(selectedMember.joined_year, selectedMember.joined_month - 1).toLocaleDateString(
                              "en-US",
                              {
                                month: "long",
                                year: "numeric",
                              },
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Get in Touch Section */}
                  {selectedMember.linkedin_url && (
                    <div className="p-6 rounded-2xl" style={{ backgroundColor: "#54BAB9" }}>
                      <h3 className="text-xl font-bold text-white mb-4">Get in Touch</h3>
                      <div className="space-y-3">
                        <button
                          className="w-full flex items-center gap-3 p-3 rounded-xl bg-white/20 hover:bg-white/30 transition-colors text-white"
                          onClick={() => window.open(selectedMember.linkedin_url, "_blank")}
                        >
                          <Linkedin className="w-5 h-5" />
                          LinkedIn Profile
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
