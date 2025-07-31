// src/lib/api.ts
// ✅ API Base URL — Updated to use Render-hosted backend
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://backend-edhc.onrender.com"

// ✅ Common API Response Interface
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  pagination?: PaginationInfo
}

// ✅ Pagination Interface
export interface PaginationInfo {
  currentPage: number
  totalPages: number
  totalItems: number
  hasMore: boolean
}

//
// ========================
// ✅ CAREER SECTION
// ========================
//

export interface CareerApplication {
  id?: number
  first_name: string
  last_name?: string
  gender: string
  email: string
  phone?: string
  date_of_birth: string
  marital_status?: string
  languages_known?: string[]
  address?: string
  how_did_you_know_us?: string
  educational_qualification?: string
  work_experience?: string
  area_of_expertise?: string
  reason_to_associate: string
  submitted_at?: string
}

export interface CareerFormData {
  firstName: string
  lastName: string
  gender: string
  email: string
  phone: string
  dateOfBirth: string
  maritalStatus: string
  languages: string[]
  address: string
  howKnowUs: string
  education: string
  experience: string
  expertise: string
  motivation: string
}

// Create career application
export const createCareerApplication = async (formData: CareerFormData): Promise<ApiResponse<any>> => {
  try {
    // Map frontend field names to backend expected field names
    const applicationData: Omit<CareerApplication, "id" | "submitted_at"> = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      gender: formData.gender,
      email: formData.email,
      phone: formData.phone,
      date_of_birth: formData.dateOfBirth,
      marital_status: formData.maritalStatus,
      languages_known: formData.languages,
      address: formData.address,
      how_did_you_know_us: formData.howKnowUs,
      educational_qualification: formData.education,
      work_experience: formData.experience,
      area_of_expertise: formData.expertise,
      reason_to_associate: formData.motivation,
    }

    const response = await fetch(`${API_BASE_URL}/career`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(applicationData),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    console.error("Error creating career application:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to submit career application",
    }
  }
}

// Fetch all career applications (protected)
export const fetchCareerApplications = async (): Promise<ApiResponse<CareerApplication[]>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/career`)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    console.error("Error fetching career applications:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch career applications",
    }
  }
}

// Update career application (protected)
export const updateCareerApplication = async (
  id: number,
  updates: Partial<CareerApplication>,
): Promise<ApiResponse<any>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/career/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updates),
    })
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    console.error("Error updating career application:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to update career application",
    }
  }
}

// Delete career application (protected)
export const deleteCareerApplication = async (id: number): Promise<ApiResponse<any>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/career/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    console.error("Error deleting career application:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to delete career application",
    }
  }
}

//
// ========================
// ✅ PD APPLICATION SECTION
// ========================
//

export interface PDApplication {
  id?: number
  first_name: string
  last_name: string
  date_of_birth: string
  educational_qualification?: string
  institution_name?: string
  designation?: string
  address?: string
  email: string
  mobile?: string
  reason: string
  submitted_at?: string
}

export interface PDFormData {
  firstName: string
  lastName: string
  dateOfBirth: string
  educationalQualification: string
  institutionName: string
  designation: string
  address: string
  email: string
  mobile: string
  reason: string
}

// Create PD application
export const createPDApplication = async (formData: PDFormData): Promise<ApiResponse<any>> => {
  try {
    // Map frontend field names to backend expected field names
    const applicationData: Omit<PDApplication, "id" | "submitted_at"> = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      date_of_birth: formData.dateOfBirth,
      educational_qualification: formData.educationalQualification,
      institution_name: formData.institutionName,
      designation: formData.designation,
      address: formData.address,
      email: formData.email,
      mobile: formData.mobile,
      reason: formData.reason,
    }

    const response = await fetch(`${API_BASE_URL}/applications`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(applicationData),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    console.error("Error creating PD application:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to submit PD application",
    }
  }
}

// Fetch all PD applications (protected)
export const fetchPDApplications = async (): Promise<ApiResponse<PDApplication[]>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/applications`)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    console.error("Error fetching PD applications:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch PD applications",
    }
  }
}

// Update PD application (protected)
export const updatePDApplication = async (id: number, updates: Partial<PDApplication>): Promise<ApiResponse<any>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/applications/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updates),
    })
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    console.error("Error updating PD application:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to update PD application",
    }
  }
}

// Delete PD application (protected)
export const deletePDApplication = async (id: number): Promise<ApiResponse<any>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/applications/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    console.error("Error deleting PD application:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to delete PD application",
    }
  }
}

//
// ========================
// ✅ BLOG SECTION
// ========================
//

export interface Blog {
  id: number
  title: string
  content: string
  author: string
  thumbnail: string
  feature: boolean
  created_at: string
}

// Fetch all blogs
export const fetchBlogs = async (): Promise<ApiResponse<Blog[]>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/blog`)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    console.error("Error fetching blogs:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch blogs",
    }
  }
}

// Fetch blog by ID
export const fetchBlogById = async (id: number): Promise<ApiResponse<Blog>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/blog/${id}`)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    console.error("Error fetching blog:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch blog",
    }
  }
}

// Create blog (protected)
export const createBlog = async (formData: FormData): Promise<ApiResponse<any>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/blog`, {
      method: "POST",
      body: formData,
    })
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    console.error("Error creating blog:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to create blog",
    }
  }
}

// Update blog (protected)
export const updateBlog = async (id: number, formData: FormData): Promise<ApiResponse<any>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/blog/${id}`, {
      method: "PUT",
      body: formData,
    })
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    console.error("Error updating blog:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to update blog",
    }
  }
}

// Delete blog (protected)
export const deleteBlog = async (id: number): Promise<ApiResponse<any>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/blog/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    console.error("Error deleting blog:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to delete blog",
    }
  }
}

//
// ========================
// ✅ TEAM MEMBERS SECTION
// ========================
//

export interface Achievement {
  id: number
  description: string
  created_at: string
}

export interface TeamMember {
  id: number
  name: string
  description: string
  image_url: string
  years_experience: number
  education_background: string
  role: string
  department: string
  linkedin_url: string
  joined_month: number
  joined_year: number
  priority: number
  achievements: Achievement[]
}

// Fetch all team members
export const fetchTeamMembers = async (): Promise<ApiResponse<TeamMember[]>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/team`)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    console.error("Error fetching team members:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch team members",
    }
  }
}

// Fetch team member by ID
export const fetchTeamMemberById = async (id: number): Promise<ApiResponse<TeamMember>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/team/${id}`)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    console.error("Error fetching team member:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch team member",
    }
  }
}

// Fetch team members by department
export const fetchTeamMembersByDepartment = async (department: string): Promise<ApiResponse<TeamMember[]>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/team?department=${encodeURIComponent(department)}`)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    console.error("Error fetching team members by department:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch team members by department",
    }
  }
}

//
// ========================
// ✅ GALLERY SECTION
// ========================
//

export interface GalleryItem {
  id: number
  description: string
  year: string
  category: string
  image_url: string
  created_at: string
}

// Fetch gallery items with pagination support
export const fetchGalleryItems = async (page = 1, limit = 6): Promise<ApiResponse<GalleryItem[]>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/data?page=${page}&limit=${limit}`)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    const data = await response.json()
    // If your backend doesn't support pagination yet, we'll simulate it
    if (Array.isArray(data)) {
      const startIndex = (page - 1) * limit
      const endIndex = startIndex + limit
      const paginatedData = data.slice(startIndex, endIndex)
      const pagination: PaginationInfo = {
        currentPage: page,
        totalPages: Math.ceil(data.length / limit),
        totalItems: data.length,
        hasMore: endIndex < data.length,
      }
      return {
        success: true,
        data: paginatedData,
        pagination,
      }
    }
    // If backend returns paginated response
    return { success: true, data: data.items || data, pagination: data.pagination }
  } catch (error) {
    console.error("Error fetching gallery items:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch gallery items",
    }
  }
}

// Fetch all gallery items (original function for backward compatibility)
export const fetchAllGalleryItems = async (): Promise<ApiResponse<GalleryItem[]>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/data`)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    console.error("Error fetching gallery items:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch gallery items",
    }
  }
}

// Create gallery item (protected)
export const createGalleryItem = async (formData: FormData): Promise<ApiResponse<any>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/data`, {
      method: "POST",
      body: formData,
    })
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    console.error("Error creating gallery item:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to create gallery item",
    }
  }
}

// Update gallery item (protected)
export const updateGalleryItem = async (id: number, updates: Partial<GalleryItem>): Promise<ApiResponse<any>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/data/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updates),
    })
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    console.error("Error updating gallery item:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to update gallery item",
    }
  }
}

// Delete gallery item (protected)
export const deleteGalleryItem = async (id: number): Promise<ApiResponse<any>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/data/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    console.error("Error deleting gallery item:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to delete gallery item",
    }
  }
}
