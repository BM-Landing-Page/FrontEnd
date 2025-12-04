"use client"

import { useEffect, useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import type React from "react"
import { createCareerApplication, type CareerFormData } from "@/services/api"
import Image from "next/image"

interface Position {
  id: string
  name: string
  description: string
}

function CareerFormContent() {
  const searchParams = useSearchParams()
  const positionIdFromUrl = searchParams.get("position")

  const [positions, setPositions] = useState<Position[]>([])
  const [formData, setFormData] = useState<CareerFormData & { position_id: string }>({
    position_id: positionIdFromUrl || "",
    name: "",
    gender: "",
    email: "",
    contact_number: "",
    date_of_birth: "",
    marital_status: "",
    address: "",
    resume: null,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const [showGenderDropdown, setShowGenderDropdown] = useState(false)
  const [showMaritalDropdown, setShowMaritalDropdown] = useState(false)

  const genderOptions = ["Male", "Female", "Other", "Prefer not to say"]
  const maritalOptions = ["Single", "Married"]

  useEffect(() => {
    fetchPositions()
  }, [])

  const fetchPositions = async () => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "https://backend-edhc.onrender.com"
      const response = await fetch(`${apiUrl}/positions`)

      if (!response.ok) {
        throw new Error("Failed to fetch positions")
      }

      const data = await response.json()
      setPositions(data)
    } catch (err) {
      console.error("Error fetching positions:", err)
    }
  }

  const handleInputChange = (field: keyof CareerFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (submitStatus.type === "error") {
      setSubmitStatus({ type: null, message: "" })
    }
  }

  const handlePositionChange = (positionId: string) => {
    setFormData((prev) => ({ ...prev, position_id: positionId }))
  }

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData((prev) => ({ ...prev, resume: file }))
  }

  const validateForm = (): string | null => {
    if (!formData.position_id) return "Please select a position"
    if (!formData.name.trim()) return "Name is required"
    if (!formData.gender) return "Gender is required"
    if (!formData.email.trim()) return "Email is required"
    if (!formData.contact_number.trim()) return "Contact number is required"
    if (!formData.date_of_birth) return "Date of birth is required"
    if (!formData.address.trim()) return "Address is required"

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) return "Please enter a valid email address"

    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const validationError = validateForm()
    if (validationError) {
      setSubmitStatus({
        type: "error",
        message: validationError,
      })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const { position_id, ...dataToSubmit } = formData
      const response = await createCareerApplication({
        ...dataToSubmit,
        position_id,
      })

      if (response.success) {
        setSubmitStatus({
          type: "success",
          message: "Your application has been submitted successfully! We will get back to you soon.",
        })

        setFormData({
          position_id: "",
          name: "",
          gender: "",
          email: "",
          contact_number: "",
          date_of_birth: "",
          marital_status: "",
          address: "",
          resume: null,
        })
      } else {
        setSubmitStatus({
          type: "error",
          message: response.error || "Failed to submit application",
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: error instanceof Error ? error.message : "An unexpected error occurred",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#E9DAC1] to-white">
      {/* Hero Banner */}
      <div className="relative w-full h-64 md:h-80 mb-8 overflow-hidden">
        <Image src="/career.jpg" alt="Career Application" fill className="object-cover" priority />
        <div className="absolute inset-0  flex items-center">
          <div className="max-w-6xl mx-auto px-4 w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-black text-center">Join Our Team</h1>
            <p className="text-black/90 mt-2 text-center">Take the next step in your career with us</p>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto py-8 px-4">
        {/* Form Container */}
        <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
          {/* Status Messages */}
          {submitStatus.type === "success" && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
              {submitStatus.message}
            </div>
          )}

          {submitStatus.type === "error" && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
              {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#54BAB9]"
                placeholder="Enter your full name"
              />
            </div>

            {/* Position Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Position <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.position_id}
                onChange={(e) => handlePositionChange(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#54BAB9] bg-white"
                required
              >
                <option value="">-- Select a Position --</option>
                {positions.map((position) => (
                  <option key={position.id} value={position.id}>
                    {position.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Gender */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Gender <span className="text-red-500">*</span>
              </label>
              <button
                type="button"
                onClick={() => setShowGenderDropdown(!showGenderDropdown)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-left bg-white focus:outline-none focus:border-[#54BAB9] flex justify-between items-center"
              >
                {formData.gender || "Select gender"}
                <span className="text-gray-400">▼</span>
              </button>
              {showGenderDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                  {genderOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        handleInputChange("gender", option)
                        setShowGenderDropdown(false)
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-[#E9DAC1] transition"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#54BAB9]"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Contact Number */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Contact Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={formData.contact_number}
                onChange={(e) => handleInputChange("contact_number", e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#54BAB9]"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Date of Birth <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={formData.date_of_birth}
                onChange={(e) => handleInputChange("date_of_birth", e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#54BAB9]"
              />
            </div>

            {/* Marital Status */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Marital Status</label>
              <button
                type="button"
                onClick={() => setShowMaritalDropdown(!showMaritalDropdown)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-left bg-white focus:outline-none focus:border-[#54BAB9] flex justify-between items-center"
              >
                {formData.marital_status || "Select status"}
                <span className="text-gray-400">▼</span>
              </button>
              {showMaritalDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                  {maritalOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        handleInputChange("marital_status", option)
                        setShowMaritalDropdown(false)
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-[#E9DAC1] transition"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Address <span className="text-red-500">*</span>
              </label>
              <textarea
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#54BAB9] resize-none"
                rows={3}
                placeholder="Enter your full address"
              />
            </div>

            {/* Resume Upload */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Upload Resume</label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleResumeChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#54BAB9] file:bg-[#54BAB9] file:text-white file:px-4 file:py-2 file:rounded file:border-0 file:cursor-pointer"
              />
              {formData.resume && <p className="mt-2 text-sm text-gray-600">Selected: {formData.resume.name}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#54BAB9] hover:bg-[#4a9b9a] disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default function CareerApplyPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-[#E9DAC1] to-white flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <CareerFormContent />
    </Suspense>
  )
}
