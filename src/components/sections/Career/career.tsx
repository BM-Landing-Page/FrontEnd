"use client"
import type React from "react"
import { useState } from "react"
import { createCareerApplication, type CareerFormData } from "@/services/api"

export default function CareerForm() {
  const [formData, setFormData] = useState<CareerFormData>({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    maritalStatus: "",
    languages: [] as string[],
    address: "",
    howKnowUs: "",
    education: "",
    experience: "",
    expertise: "",
    motivation: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const [showDatePicker, setShowDatePicker] = useState(false)
  const [showGenderDropdown, setShowGenderDropdown] = useState(false)
  const [showMaritalDropdown, setShowMaritalDropdown] = useState(false)
  const [showSourceDropdown, setShowSourceDropdown] = useState(false)

  const languageOptions = ["English", "Tamil", "Hindi", "French", "Telugu", "Malayalam", "Others"]
  const genderOptions = ["Male", "Female", "Other", "Prefer not to say"]
  const maritalOptions = ["Single", "Married", "Divorced", "Widowed"]
  const sourceOptions = ["LinkedIn", "Other Social Media", "Friend", "Known Source"]

  const handleInputChange = (field: keyof CareerFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear any previous error messages when user starts typing
    if (submitStatus.type === "error") {
      setSubmitStatus({ type: null, message: "" })
    }
  }

  const handleLanguageChange = (language: string) => {
    setFormData((prev) => ({
      ...prev,
      languages: prev.languages.includes(language)
        ? prev.languages.filter((l) => l !== language)
        : [...prev.languages, language],
    }))
  }

  const validateForm = (): string | null => {
    if (!formData.firstName.trim()) return "First name is required"
    if (!formData.gender) return "Gender is required"
    if (!formData.email.trim()) return "Email is required"
    if (!formData.dateOfBirth) return "Date of birth is required"
    if (!formData.motivation.trim()) return "Please share why you want to join Budding Minds"

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) return "Please enter a valid email address"

    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
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
      const response = await createCareerApplication(formData)

      if (response.success) {
        setSubmitStatus({
          type: "success",
          message: "Your application has been submitted successfully! We will get back to you soon.",
        })

        // Reset form after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          gender: "",
          email: "",
          phone: "",
          dateOfBirth: "",
          maritalStatus: "",
          languages: [],
          address: "",
          howKnowUs: "",
          education: "",
          experience: "",
          expertise: "",
          motivation: "",
        })

        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else {
        setSubmitStatus({
          type: "error",
          message: response.error || "Failed to submit application. Please try again.",
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const formatDate = (dateString: string) => {
    if (!dateString) return ""
    const date = new Date(dateString)
    return date.toLocaleDateString("en-GB")
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "white" }}>
      <div style={{ maxWidth: "1024px", margin: "0 auto", padding: "24px" }}>
        {/* Status Messages */}
        {submitStatus.type && (
          <div
            style={{
              padding: "16px",
              borderRadius: "8px",
              marginBottom: "24px",
              backgroundColor: submitStatus.type === "success" ? "#dcfce7" : "#fef2f2",
              border: `2px solid ${submitStatus.type === "success" ? "#16a34a" : "#dc2626"}`,
              color: submitStatus.type === "success" ? "#15803d" : "#dc2626",
            }}
          >
            <p style={{ margin: 0, fontWeight: "500" }}>{submitStatus.message}</p>
          </div>
        )}

        {/* Introduction Section */}
        <div
          style={{
            textAlign: "center",
            padding: "32px 24px",
            borderRadius: "8px",
            backgroundColor: "#F7ECDE",
            marginBottom: "32px",
          }}
        >
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: "#1f2937",
              marginBottom: "16px",
            }}
          >
            Join the BMIS Team
          </h1>
          <div
            style={{
              color: "#374151",
              lineHeight: "1.6",
              maxWidth: "768px",
              margin: "0 auto",
            }}
          >
            <p style={{ marginBottom: "16px" }}>
              At Budding Minds International School, we believe in raising leaders—not followers. We're seeking
              passionate, value-driven individuals with strong English skills who are committed to transforming
              education.
            </p>
            <p style={{ marginBottom: "16px" }}>
              Whether you're a designer, poet, researcher, scientist, activist, or athlete—if you love working with
              children and feel strongly about creating change, you'll thrive in our vibrant, energetic, and
              child-centered environment.
            </p>
            <p style={{ marginBottom: "16px" }}>
              We're looking for team members who are clear communicators, open learners, reflective thinkers, and
              naturally curious. You should inspire originality, connect learning to real-life, and be eager to grow.
              From planning lessons to coordinating smooth operations, we value individuals who are organized,
              proactive, and committed to making a difference—whether in the classroom or behind the scenes.
            </p>
            <p style={{ fontWeight: "600" }}>
              If you're self-driven and ready to be part of something meaningful, we'd love to hear from you.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Personal Information Section */}
          <div
            style={{
              border: "2px solid #54BAB9",
              borderRadius: "8px",
              marginBottom: "32px",
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                backgroundColor: "#E9DAC1",
                padding: "24px",
                borderTopLeftRadius: "6px",
                borderTopRightRadius: "6px",
              }}
            >
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#1f2937",
                  margin: "0",
                }}
              >
                Personal Information
              </h2>
            </div>
            <div style={{ padding: "24px" }}>
              {/* First Name and Last Name */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "24px",
                  marginBottom: "24px",
                }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      marginBottom: "8px",
                      color: "#374151",
                    }}
                  >
                    First Name <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "2px solid #9ED2C6",
                      borderRadius: "6px",
                      fontSize: "1rem",
                      outline: "none",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#54BAB9")}
                    onBlur={(e) => (e.target.style.borderColor = "#9ED2C6")}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      marginBottom: "8px",
                      color: "#374151",
                    }}
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "2px solid #9ED2C6",
                      borderRadius: "6px",
                      fontSize: "1rem",
                      outline: "none",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#54BAB9")}
                    onBlur={(e) => (e.target.style.borderColor = "#9ED2C6")}
                  />
                </div>
              </div>

              {/* Gender and Email */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "24px",
                  marginBottom: "24px",
                }}
              >
                <div style={{ position: "relative" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      marginBottom: "8px",
                      color: "#374151",
                    }}
                  >
                    Gender <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <div
                    onClick={() => setShowGenderDropdown(!showGenderDropdown)}
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "2px solid #9ED2C6",
                      borderRadius: "6px",
                      fontSize: "1rem",
                      cursor: "pointer",
                      backgroundColor: "white",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ color: formData.gender ? "#000" : "#9ca3af" }}>
                      {formData.gender || "Select gender"}
                    </span>
                    <span>▼</span>
                  </div>
                  {showGenderDropdown && (
                    <div
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: "0",
                        right: "0",
                        backgroundColor: "white",
                        border: "2px solid #9ED2C6",
                        borderRadius: "6px",
                        zIndex: 10,
                        marginTop: "4px",
                      }}
                    >
                      {genderOptions.map((option) => (
                        <div
                          key={option}
                          onClick={() => {
                            handleInputChange("gender", option)
                            setShowGenderDropdown(false)
                          }}
                          style={{
                            padding: "12px",
                            cursor: "pointer",
                            borderBottom: "1px solid #e5e7eb",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f3f4f6")}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      marginBottom: "8px",
                      color: "#374151",
                    }}
                  >
                    Email <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "2px solid #9ED2C6",
                      borderRadius: "6px",
                      fontSize: "1rem",
                      outline: "none",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#54BAB9")}
                    onBlur={(e) => (e.target.style.borderColor = "#9ED2C6")}
                  />
                </div>
              </div>

              {/* Phone and Date of Birth */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "24px",
                  marginBottom: "24px",
                }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      marginBottom: "8px",
                      color: "#374151",
                    }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "2px solid #9ED2C6",
                      borderRadius: "6px",
                      fontSize: "1rem",
                      outline: "none",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#54BAB9")}
                    onBlur={(e) => (e.target.style.borderColor = "#9ED2C6")}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      marginBottom: "8px",
                      color: "#374151",
                    }}
                  >
                    Date of Birth <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.dateOfBirth}
                    onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "2px solid #9ED2C6",
                      borderRadius: "6px",
                      fontSize: "1rem",
                      outline: "none",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#54BAB9")}
                    onBlur={(e) => (e.target.style.borderColor = "#9ED2C6")}
                  />
                </div>
              </div>

              {/* Marital Status */}
              <div style={{ marginBottom: "24px", position: "relative" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    marginBottom: "8px",
                    color: "#374151",
                  }}
                >
                  Marital Status
                </label>
                <div
                  onClick={() => setShowMaritalDropdown(!showMaritalDropdown)}
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "2px solid #9ED2C6",
                    borderRadius: "6px",
                    fontSize: "1rem",
                    cursor: "pointer",
                    backgroundColor: "white",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span style={{ color: formData.maritalStatus ? "#000" : "#9ca3af" }}>
                    {formData.maritalStatus || "Select marital status"}
                  </span>
                  <span>▼</span>
                </div>
                {showMaritalDropdown && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: "0",
                      right: "0",
                      backgroundColor: "white",
                      border: "2px solid #9ED2C6",
                      borderRadius: "6px",
                      zIndex: 10,
                      marginTop: "4px",
                    }}
                  >
                    {maritalOptions.map((option) => (
                      <div
                        key={option}
                        onClick={() => {
                          handleInputChange("maritalStatus", option)
                          setShowMaritalDropdown(false)
                        }}
                        style={{
                          padding: "12px",
                          cursor: "pointer",
                          borderBottom: "1px solid #e5e7eb",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f3f4f6")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Languages Known */}
              <div style={{ marginBottom: "24px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    marginBottom: "12px",
                    color: "#374151",
                  }}
                >
                  Languages Known
                </label>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "12px",
                  }}
                >
                  {languageOptions.map((language) => (
                    <label
                      key={language}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                        fontSize: "0.875rem",
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={formData.languages.includes(language)}
                        onChange={() => handleLanguageChange(language)}
                        style={{
                          marginRight: "8px",
                          accentColor: "#54BAB9",
                        }}
                      />
                      {language}
                    </label>
                  ))}
                </div>
              </div>

              {/* Address */}
              <div style={{ marginBottom: "24px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    marginBottom: "8px",
                    color: "#374151",
                  }}
                >
                  Address
                </label>
                <textarea
                  rows={3}
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "2px solid #9ED2C6",
                    borderRadius: "6px",
                    fontSize: "1rem",
                    outline: "none",
                    resize: "none",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#54BAB9")}
                  onBlur={(e) => (e.target.style.borderColor = "#9ED2C6")}
                />
              </div>

              {/* How do you know us */}
              <div style={{ position: "relative" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    marginBottom: "8px",
                    color: "#374151",
                  }}
                >
                  How do you know us?
                </label>
                <div
                  onClick={() => setShowSourceDropdown(!showSourceDropdown)}
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "2px solid #9ED2C6",
                    borderRadius: "6px",
                    fontSize: "1rem",
                    cursor: "pointer",
                    backgroundColor: "white",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span style={{ color: formData.howKnowUs ? "#000" : "#9ca3af" }}>
                    {formData.howKnowUs || "Select source"}
                  </span>
                  <span>▼</span>
                </div>
                {showSourceDropdown && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: "0",
                      right: "0",
                      backgroundColor: "white",
                      border: "2px solid #9ED2C6",
                      borderRadius: "6px",
                      zIndex: 10,
                      marginTop: "4px",
                    }}
                  >
                    {sourceOptions.map((option) => (
                      <div
                        key={option}
                        onClick={() => {
                          handleInputChange("howKnowUs", option)
                          setShowSourceDropdown(false)
                        }}
                        style={{
                          padding: "12px",
                          cursor: "pointer",
                          borderBottom: "1px solid #e5e7eb",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f3f4f6")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Professional Information Section */}
          <div
            style={{
              border: "2px solid #54BAB9",
              borderRadius: "8px",
              marginBottom: "32px",
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                backgroundColor: "#E9DAC1",
                padding: "24px",
                borderTopLeftRadius: "6px",
                borderTopRightRadius: "6px",
              }}
            >
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#1f2937",
                  margin: "0",
                }}
              >
                Professional Information
              </h2>
            </div>
            <div style={{ padding: "24px" }}>
              {/* Educational Qualification */}
              <div style={{ marginBottom: "24px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    marginBottom: "8px",
                    color: "#374151",
                  }}
                >
                  Educational Qualification
                </label>
                <textarea
                  rows={4}
                  value={formData.education}
                  onChange={(e) => handleInputChange("education", e.target.value)}
                  placeholder="Please describe your educational background..."
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "2px solid #9ED2C6",
                    borderRadius: "6px",
                    fontSize: "1rem",
                    outline: "none",
                    resize: "none",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#54BAB9")}
                  onBlur={(e) => (e.target.style.borderColor = "#9ED2C6")}
                />
              </div>

              {/* Work Experience */}
              <div style={{ marginBottom: "24px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    marginBottom: "8px",
                    color: "#374151",
                  }}
                >
                  Work Experience
                </label>
                <textarea
                  rows={4}
                  value={formData.experience}
                  onChange={(e) => handleInputChange("experience", e.target.value)}
                  placeholder="Please describe your work experience..."
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "2px solid #9ED2C6",
                    borderRadius: "6px",
                    fontSize: "1rem",
                    outline: "none",
                    resize: "none",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#54BAB9")}
                  onBlur={(e) => (e.target.style.borderColor = "#9ED2C6")}
                />
              </div>

              {/* Area of Expertise */}
              <div style={{ marginBottom: "24px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    marginBottom: "8px",
                    color: "#374151",
                  }}
                >
                  Your Area of Expertise
                </label>
                <textarea
                  rows={4}
                  value={formData.expertise}
                  onChange={(e) => handleInputChange("expertise", e.target.value)}
                  placeholder="Please describe your areas of expertise..."
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "2px solid #9ED2C6",
                    borderRadius: "6px",
                    fontSize: "1rem",
                    outline: "none",
                    resize: "none",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#54BAB9")}
                  onBlur={(e) => (e.target.style.borderColor = "#9ED2C6")}
                />
              </div>

              {/* Motivation */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    marginBottom: "8px",
                    color: "#374151",
                  }}
                >
                  Why do you want to be associated with Budding Minds? <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.motivation}
                  onChange={(e) => handleInputChange("motivation", e.target.value)}
                  placeholder="Please share your motivation for joining our team..."
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "2px solid #9ED2C6",
                    borderRadius: "6px",
                    fontSize: "1rem",
                    outline: "none",
                    resize: "none",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#54BAB9")}
                  onBlur={(e) => (e.target.style.borderColor = "#9ED2C6")}
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div style={{ display: "flex", justifyContent: "center", paddingTop: "24px" }}>
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                padding: "16px 48px",
                backgroundColor: isSubmitting ? "#9ca3af" : "#54BAB9",
                color: "white",
                fontSize: "1.125rem",
                fontWeight: "600",
                border: "none",
                borderRadius: "8px",
                cursor: isSubmitting ? "not-allowed" : "pointer",
                transition: "background-color 0.2s",
                opacity: isSubmitting ? 0.7 : 1,
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.backgroundColor = "#4a9d9c"
                }
              }}
              onMouseLeave={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.backgroundColor = "#54BAB9"
                }
              }}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
