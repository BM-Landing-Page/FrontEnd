"use client"

import type React from "react"

import { useState } from "react"

export default function PDForm() {
  const [formData, setFormData] = useState({
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

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("PD Form submitted:", formData)
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
                    First Name
                  </label>
                  <input
                    type="text"
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
                  Date of Birth (dd-mm-yyyy)
                </label>
                <input
                  type="date"
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
                  Please provide a detailed explanation (minimum 100 words recommended)
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div style={{ display: "flex", justifyContent: "center", paddingTop: "24px" }}>
            <button
              type="submit"
              style={{
                padding: "16px 48px",
                backgroundColor: "#54BAB9",
                color: "white",
                fontSize: "1.125rem",
                fontWeight: "600",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#4a9d9c")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#54BAB9")}
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
