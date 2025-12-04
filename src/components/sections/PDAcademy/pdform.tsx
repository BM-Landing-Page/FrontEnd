"use client"

import type React from "react"

import { useState, type ChangeEvent, type FormEvent } from "react"
import { Upload } from "lucide-react"

const COURSES = ["CICTT", "CIDTL", "CEYGP"]

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    full_name: "",
    date_of_birth: "",
    gender: "",
    contact_number: "",
    email_id: "",
    address: "",
    school_name: "",
    designation: "",
    preferred_course: "",
    reason_to_pursue: "",
  })

  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setResumeFile(e.target.files[0])
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.currentTarget.classList.add("border-primary")
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.currentTarget.classList.remove("border-primary")
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.currentTarget.classList.remove("border-primary")
    if (e.dataTransfer.files) {
      setResumeFile(e.dataTransfer.files[0])
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")

    try {
      const form = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        form.append(key, value)
      })
      if (resumeFile) {
        form.append("resume_file", resumeFile)
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/applications`, {
        method: "POST",
        body: form,
      })

      if (!response.ok) {
        throw new Error("Failed to submit application")
      }

      setMessage("Application submitted successfully!")
      setFormData({
        full_name: "",
        date_of_birth: "",
        gender: "",
        contact_number: "",
        email_id: "",
        address: "",
        school_name: "",
        designation: "",
        preferred_course: "",
        reason_to_pursue: "",
      })
      setResumeFile(null)
    } catch (error) {
      setMessage(`Error: ${error instanceof Error ? error.message : "Something went wrong"}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <div
        className="relative w-full h-64 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=400&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#54BAB9]/40 to-[#9ED2C6]/40 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center text-balance">Career Application Portal</h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-12">
        {message && (
          <div
            className={`mb-6 p-4 rounded-lg ${
              message.includes("successfully") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-2 border-[#54BAB9] p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-[#54BAB9] mb-4">Personal Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="full_name" className="block text-sm font-medium mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="full_name"
                  type="text"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-[#9ED2C6] rounded-lg focus:ring-2 focus:ring-[#54BAB9] outline-none"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="date_of_birth" className="block text-sm font-medium mb-2">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  id="date_of_birth"
                  type="date"
                  name="date_of_birth"
                  value={formData.date_of_birth}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-[#9ED2C6] rounded-lg focus:ring-2 focus:ring-[#54BAB9] outline-none"
                />
              </div>

              <div>
                <label htmlFor="gender" className="block text-sm font-medium mb-2">
                  Gender <span className="text-red-500">*</span>
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-[#9ED2C6] rounded-lg focus:ring-2 focus:ring-[#54BAB9] outline-none"
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact_number" className="block text-sm font-medium mb-2">
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact_number"
                  type="tel"
                  name="contact_number"
                  value={formData.contact_number}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-[#9ED2C6] rounded-lg focus:ring-2 focus:ring-[#54BAB9] outline-none"
                  placeholder="10-digit phone number"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="email_id" className="block text-sm font-medium mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email_id"
                  type="email"
                  name="email_id"
                  value={formData.email_id}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-[#9ED2C6] rounded-lg focus:ring-2 focus:ring-[#54BAB9] outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="address" className="block text-sm font-medium mb-2">
                  Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-[#9ED2C6] rounded-lg focus:ring-2 focus:ring-[#54BAB9] outline-none"
                  placeholder="Enter your complete address"
                  rows={2}
                />
              </div>
            </div>
          </div>

          <div className="border-2 border-[#54BAB9] p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-[#54BAB9] mb-4">Professional Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="school_name" className="block text-sm font-medium mb-2">
                  School Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="school_name"
                  type="text"
                  name="school_name"
                  value={formData.school_name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-[#9ED2C6] rounded-lg focus:ring-2 focus:ring-[#54BAB9] outline-none"
                  placeholder="Your school name"
                />
              </div>

              <div>
                <label htmlFor="designation" className="block text-sm font-medium mb-2">
                  Designation <span className="text-red-500">*</span>
                </label>
                <input
                  id="designation"
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-[#9ED2C6] rounded-lg focus:ring-2 focus:ring-[#54BAB9] outline-none"
                  placeholder="Your designation"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="preferred_course" className="block text-sm font-medium mb-2">
                  Preferred Course <span className="text-red-500">*</span>
                </label>
                <select
                  id="preferred_course"
                  name="preferred_course"
                  value={formData.preferred_course}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-[#9ED2C6] rounded-lg focus:ring-2 focus:ring-[#54BAB9] outline-none"
                >
                  <option value="">Select a course</option>
                  {COURSES.map((course) => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="reason_to_pursue" className="block text-sm font-medium mb-2">
                  Reason to Pursue <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="reason_to_pursue"
                  name="reason_to_pursue"
                  value={formData.reason_to_pursue}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-[#9ED2C6] rounded-lg focus:ring-2 focus:ring-[#54BAB9] outline-none"
                  placeholder="Why do you want to pursue this course?"
                  rows={3}
                />
              </div>
            </div>
          </div>

          <div className="border-2 border-[#54BAB9] p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-[#54BAB9] mb-4">Resume Upload</h2>

            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className="border-2 border-dashed border-[#9ED2C6] rounded-lg p-8 text-center cursor-pointer transition-colors hover:border-[#54BAB9]"
            >
              <label htmlFor="resume_file" className="cursor-pointer block">
                <Upload className="w-8 h-8 text-[#54BAB9] mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900">Drag and drop your resume here, or click to select</p>
                <p className="text-xs text-gray-600 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
              </label>
              <input
                id="resume_file"
                type="file"
                name="resume_file"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                className="hidden"
              />
            </div>

            {resumeFile && (
              <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2">
                <span className="text-green-700 text-sm">✓ {resumeFile.name}</span>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#54BAB9] text-white py-3 rounded-lg font-semibold hover:bg-[#54BAB9]/90 disabled:opacity-50 transition-colors"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </main>
  )
}
