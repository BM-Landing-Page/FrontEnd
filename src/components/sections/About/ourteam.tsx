"use client"
import { useState, useEffect } from "react"
import { Linkedin, Award, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { fetchTeamMembers, type TeamMember } from "@/services/api"

const departments = [
  { key: "chief executive", label: "Chief Executive" },
  { key: "admin team", label: "Administrative Team" },
  { key: "facilitators team", label: "Facilitators Team" },
  { key: "support staff", label: "Support Staff" },
  { key: "franchise team", label: "Franchise Team" },
]

export default function OurTeam() {
  const [activeTab, setActiveTab] = useState("chief executive")
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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

  // Cleanup: restore scroll when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  const filteredTeam = teamMembers.filter((member) => member.department === activeTab)

  const handleCardClick = (member: TeamMember) => {
    setSelectedMember(member)
    setIsModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedMember(null)
    document.body.style.overflow = "unset"
  }

  const LoadingSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[...Array(8)].map((_, index) => (
        <div key={index} className="rounded-2xl bg-white shadow-lg overflow-hidden animate-pulse">
          <div className="w-full h-64 bg-gray-200"></div>
          <div className="p-4 text-center">
            <div className="h-5 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
          </div>
        </div>
      ))}
    </div>
  )

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
      <section className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
        <Image
          src="/images/ourteam.jpg"
          alt="Our Team Hero"
          fill
          className="object-cover object-top md:object-center"
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
                No team members in {departments.find((d) => d.key === activeTab)?.label} department.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTeam.map((member) => (
                <div
                  key={member.id}
                  className="cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 rounded-2xl bg-white shadow-lg overflow-hidden"
                  onClick={() => handleCardClick(member)}
                >
                  <div className="relative w-full h-64 overflow-hidden">
                    <Image
                      src={member.image_url || "/placeholder.svg?height=400&width=300&query=professional headshot"}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = "/placeholder.svg?height=400&width=300"
                      }}
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-bold mb-1" style={{ color: "#54BAB9" }}>
                      {member.name}
                    </h3>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-gray-600">{member.education_background}</p>
                      <p className="text-sm font-medium text-gray-600">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="flex justify-center mt-16">
            <Link href="/alumni">
              <div className="flex items-center gap-3 bg-[#54BAB9] hover:bg-[#54BAB9]/90 text-white px-8 py-4 rounded-lg shadow-md transition-colors cursor-pointer">
                <div className="text-center">
                  <div className="font-semibold text-lg">Alumni</div>
                </div>
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Member Detail Modal */}
      {isModalOpen && selectedMember && (
        <div className="fixed inset-0 bg-white/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[70vh] flex flex-col shadow-2xl relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition-colors z-20"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Teal Header Section with Image and Info */}
            <div className="relative p-3 flex gap-3 flex-shrink-0" style={{ backgroundColor: "#54BAB9" }}>
              <div className="relative w-36 h-36 rounded-2xl overflow-hidden bg-white/20 flex-shrink-0 shadow-lg">
                <Image
                  src={selectedMember.image_url || "/placeholder.svg?height=400&width=300&query=professional headshot"}
                  alt={selectedMember.name}
                  fill
                  className="object-cover object-top"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/placeholder.svg?height=400&width=300"
                  }}
                />
              </div>
              {/* Text Info on Right */}
              <div className="flex-1 flex flex-col justify-center">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-2">{selectedMember.name}</h2>
                <p className="text-base text-white/90 mb-3">{selectedMember.role}</p>
                {selectedMember.education_background && (
                  <p className="text-sm text-white/90 mb-3 leading-relaxed">{selectedMember.education_background}</p>
                )}
                {selectedMember.joined_month && selectedMember.joined_year && (
                  <p className="text-sm text-white/90">
                    Joined:{" "}
                    {new Date(selectedMember.joined_year, selectedMember.joined_month - 1).toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                )}
              </div>
            </div>

            {/* White Content Area - Scrollable */}
            <div className="flex-1 overflow-y-auto p-4">
              {/* About Section */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-1 h-6 rounded-full" style={{ backgroundColor: "#54BAB9" }}></div>
                  <h3 className="text-xl font-bold text-gray-800">About</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{selectedMember.description}</p>
              </div>

              {/* Key Achievements Section */}
              {selectedMember.achievements && selectedMember.achievements.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-5 h-5" style={{ color: "#54BAB9" }} />
                    <h3 className="text-lg font-bold text-gray-800">Key Achievements</h3>
                  </div>
                  <div className="space-y-2">
                    {selectedMember.achievements.map((achievement, index) => (
                      <div
                        key={achievement.id || index}
                        className="p-3 rounded-xl text-white font-medium text-sm"
                        style={{ backgroundColor: "#54BAB9" }}
                      >
                        {achievement.description}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Experience Section - Only display if years_experience > 0 */}
              {selectedMember.years_experience &&
                typeof selectedMember.years_experience === "number" &&
                selectedMember.years_experience > 0 && (
                  <div
                    className="mb-6 p-4 rounded-lg border-2"
                    style={{ borderColor: "#9ED2C6", backgroundColor: "#E9DAC1" }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4" style={{ color: "#54BAB9" }}>
                        📅
                      </div>
                      <div>
                        <h4 className="font-semibold" style={{ color: "#54BAB9" }}>
                          Experience
                        </h4>
                        <p className="text-sm font-bold text-gray-800">{selectedMember.years_experience}+ years</p>
                      </div>
                    </div>
                  </div>
                )}

              {/* LinkedIn Button - Only shown if valid URL exists */}
              {selectedMember.linkedin_url &&
                selectedMember.linkedin_url !== "0" &&
                String(selectedMember.linkedin_url).trim() !== "" && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <button
                      className="w-full flex items-center justify-center gap-2 p-3 rounded-lg text-white font-semibold transition-opacity hover:opacity-90"
                      style={{ backgroundColor: "#54BAB9" }}
                      onClick={() => window.open(selectedMember.linkedin_url, "_blank")}
                    >
                      <Linkedin className="w-5 h-5" />
                      Connect on LinkedIn
                    </button>
                  </div>
                )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
