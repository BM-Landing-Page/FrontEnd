const API_BASE_URL = "http://localhost:5000"

export interface TeamMember {
  id: number
  name: string
  description: string
  image: string
  years_experience: number
  education_background: string
  role: string
  department: string
  linkedin_url: string
  achievement1: string
  achievement2: string
  achievement3: string
  achievement4: string
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
}

// Fetch all team members
export const fetchTeamMembers = async (): Promise<ApiResponse<TeamMember[]>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/team`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    return {
      success: true,
      data: data,
    }
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
    const response = await fetch(`${API_BASE_URL}/team/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    return {
      success: true,
      data: data,
    }
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
    const response = await fetch(`${API_BASE_URL}/team?department=${encodeURIComponent(department)}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    return {
      success: true,
      data: data,
    }
  } catch (error) {
    console.error("Error fetching team members by department:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch team members by department",
    }
  }
}
