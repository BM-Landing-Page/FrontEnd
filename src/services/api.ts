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
