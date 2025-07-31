"use client"
import type React from "react"
import { useState } from "react"
import { createPDApplication, type PDFormData } from "@/services/api"

export default function PDForm() {
  const [formData, setFormData] = useState<PDFormData>({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    educationalQualification: "",
    institutionName: "",
    designation: "",
    address: "",
    email: "",
    mobile: "",
    reason: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const [showEducationDropdown, setShowEducationDropdown] = useState(false)

  const educationOptions = [
    "High School",
    "Bachelor's Degree",
    "Master's Degree",
    "PhD",
    "Diploma",
    "Certificate Course",
    "Other",
  ]

  const handleInputChange = (field: keyof PDFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear any previous error messages when user starts typing
    if (submitStatus.type === "error") {
      setSubmitStatus({ type: null, message: "" })
    }
  }

  const validateForm = (): string | null => {
    if (!formData.firstName.trim()) return "First name is required"
    if (!formData.lastName.trim()) return "Last name is required"
    if (!formData.dateOfBirth) return "Date of birth is required"
    if (!formData.email.trim()) return "Email is required"
    if (!formData.reason.trim()) return "Please provide your reason for pursuing CICTL/CIDTL"

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) return "Please enter a valid email address"

    // Reason length validation (minimum 50 characters for meaningful response)
    if (formData.reason.trim().length < 50) {
      return "Please provide a more detailed explanation (minimum 50 characters)"
    }

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
      const response = await createPDApplication(formData)

      if (response.success) {
        setSubmitStatus({
          type: "success",
          message:
            "Your PD application has been submitted successfully! We will review your application and get back to you soon.",
        })

        // Reset form after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          dateOfBirth: "",
          educationalQualification: "",
          institutionName: "",
          designation: "",
          address: "",
          email: "",
          mobile: "",
          reason: "",
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

  const formatDateForDisplay = (dateString: string) => {
    if (!dateString) return ""
    const date = new Date(dateString)
    const day = date.getDate().toString().padStart(2, "0")
    const month = (date.getMonth() + 1).toString().padStart(2, "0")
    const year = date.getFullYear()
    return `${day}-${month}-${year}`
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

        {/* Header Section */}
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
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "#1f2937",
              marginBottom: "16px",
            }}
          >
            Professional Development Form
          </h1>
          <p
            style={{
              color: "#374151",
              fontSize: "1.125rem",
              lineHeight: "1.6",
              maxWidth: "768px",
              margin: "0 auto",
            }}
          >
            Complete this form to apply for CICTL/CIDTL professional development programs. Please provide accurate
            information to help us process your application effectively.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Main Form Section */}
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
                Application Details
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
                    Last Name <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
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

              {/* Date of Birth */}
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
                {formData.dateOfBirth && (
                  <div
                    style={{
                      marginTop: "4px",
                      fontSize: "0.875rem",
                      color: "#6b7280",
                    }}
                  >
                    Formatted: {formatDateForDisplay(formData.dateOfBirth)}
                  </div>
                )}
              </div>

              {/* Educational Qualification */}
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
                  Educational Qualification
                </label>
                <div style={{ display: "flex", gap: "12px" }}>
                  <input
                    type="text"
                    value={formData.educationalQualification}
                    onChange={(e) => handleInputChange("educationalQualification", e.target.value)}
                    placeholder="Enter your qualification or select from dropdown"
                    style={{
                      flex: "1",
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
                  <div style={{ position: "relative" }}>
                    <button
                      type="button"
                      onClick={() => setShowEducationDropdown(!showEducationDropdown)}
                      style={{
                        padding: "12px 16px",
                        border: "2px solid #9ED2C6",
                        borderRadius: "6px",
                        backgroundColor: "white",
                        cursor: "pointer",
                        fontSize: "1rem",
                      }}
                    >
                      ▼
                    </button>
                    {showEducationDropdown && (
                      <div
                        style={{
                          position: "absolute",
                          top: "100%",
                          right: "0",
                          backgroundColor: "white",
                          border: "2px solid #9ED2C6",
                          borderRadius: "6px",
                          zIndex: 10,
                          marginTop: "4px",
                          minWidth: "200px",
                        }}
                      >
                        {educationOptions.map((option) => (
                          <div
                            key={option}
                            onClick={() => {
                              handleInputChange("educationalQualification", option)
                              setShowEducationDropdown(false)
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

              {/* Institution Name and Designation */}
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
                    Name of the Institution where you are presently employed
                  </label>
                  <input
                    type="text"
                    value={formData.institutionName}
                    onChange={(e) => handleInputChange("institutionName", e.target.value)}
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
                    Your Designation
                  </label>
                  <input
                    type="text"
                    value={formData.designation}
                    onChange={(e) => handleInputChange("designation", e.target.value)}
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
                  rows={4}
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  placeholder="Enter your complete address..."
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

              {/* Email and Mobile */}
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
                    Mobile
                  </label>
                  <input
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => handleInputChange("mobile", e.target.value)}
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

              {/* Reason to pursue CICTL/CIDTL */}
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
                  Reason to pursue CICTL/CIDTL? <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <textarea
                  rows={6}
                  required
                  value={formData.reason}
                  onChange={(e) => handleInputChange("reason", e.target.value)}
                  placeholder="Please explain your motivation and reasons for pursuing CICTL/CIDTL certification. Include your career goals, how this certification aligns with your professional development, and what you hope to achieve..."
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
                <div
                  style={{
                    marginTop: "4px",
                    fontSize: "0.75rem",
                    color: "#6b7280",
                  }}
                >
                  Please provide a detailed explanation (minimum 50 characters required)
                  {formData.reason && (
                    <span style={{ marginLeft: "8px", color: formData.reason.length >= 50 ? "#16a34a" : "#dc2626" }}>
                      ({formData.reason.length} characters)
                    </span>
                  )}
                </div>
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
