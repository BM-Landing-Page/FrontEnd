// API Base URL — Updated to use Render-hosted backend
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://backend-edhc.onrender.com"

// Common API Response Interface
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  pagination?: PaginationInfo
}

// Pagination Interface
export interface PaginationInfo {
  currentPage: number
  totalPages: number
  totalItems: number
  hasMore: boolean
}




export interface CalendarEvent {
  id?: string | number
  event_name: string
  content?: string
  event_date: string
  created_at?: string
}

/**
 * Fetch all calendar events via Next.js API route
 * Events are automatically sorted by date on the backend
 */
export async function fetchAllEvents(): Promise<CalendarEvent[]> {
  try {
    console.log("[v0] Fetching from URL:", `${API_BASE_URL}/calendar`)

    const response = await fetch(`${API_BASE_URL}/calendar`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    console.log("[v0] Response status:", response.status)

    if (!response.ok) {
      throw new Error(`Failed to fetch events: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    console.log("[v0] Events fetched successfully:", data)
    return data
  } catch (error) {
    console.error("[v0] Error fetching calendar events:", error)
    throw error
  }
}

/**
 * Create a new calendar event (protected)
 */
export async function createEvent(event: CalendarEvent): Promise<CalendarEvent> {
  try {
    const response = await fetch(`${API_BASE_URL}/calendar`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    })

    if (!response.ok) {
      throw new Error(`Failed to create event: ${response.statusText}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error creating event:", error)
    throw error
  }
}

/**
 * Update an existing calendar event (protected)
 */
export async function updateEvent(id: string | number, updates: Partial<CalendarEvent>): Promise<CalendarEvent> {
  try {
    const response = await fetch(`${API_BASE_URL}/calendar/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updates),
    })

    if (!response.ok) {
      throw new Error(`Failed to update event: ${response.statusText}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error updating event:", error)
    throw error
  }
}

/**
 * Delete a calendar event (protected)
 */
export async function deleteEvent(id: string | number): Promise<void> {
  try {
    const response = await fetch(`${API_BASE_URL}/calendar/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to delete event: ${response.statusText}`)
    }
  } catch (error) {
    console.error("Error deleting event:", error)
    throw error
  }
}


// ========================
// ✅ ALUMNI & BATCHES SECTION
// ========================

export interface Batch {
  batch_id: number
  batch_year: number
  description: string
}

export interface University {
  university_id: number
  university_name: string
  country: string
  logo_url?: string
}

export interface Alumni {
  alumni_id: number
  name: string
  testimonial: string
  batch_id: number
  current_university_id: number
  photo_url?: string
  batches?: Batch
  universities?: University
  alumni_universities?: Array<{ universities: University }>
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
}

// Fetch all batches
export const fetchAllBatches = async (): Promise<ApiResponse<Batch[]>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/batches`)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch batches",
    }
  }
}

// Fetch all alumni with batch and university data
export const fetchAllAlumni = async (): Promise<ApiResponse<Alumni[]>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/alumni`)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch alumni",
    }
  }
}

// Fetch all alumni-university links
export const fetchAlumniUniversities = async (): Promise<ApiResponse<any[]>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/universities`)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch alumni-universities",
    }
  }
}

//
// ========================
// ✅ BUS ROUTES & STOPS SECTION
// ========================
//

export interface BusRoute {
  id: string
  route_name: string
  bus_number: string
  active: boolean
  created_at: string
}

export interface BusStop {
  id: string
  name: string
  pickup: string | null
  drop: string | null
  order: number | null
  route: string
}

// Fetch all bus routes
export const fetchBusRoutes = async (): Promise<ApiResponse<BusRoute[]>> => {
  try {
    const url = `${API_BASE_URL}/bus-routes`
    console.log("[v0] Fetching bus routes from:", url)
    const response = await fetch(url)
    console.log("[v0] Bus routes response status:", response.status)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    console.log("[v0] Bus routes data received:", data)
    return { success: true, data }
  } catch (error) {
    console.error("[v0] Error fetching bus routes:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch bus routes",
    }
  }
}

// Fetch all stops for a specific route
export const fetchBusStopsByRoute = async (routeId: string): Promise<ApiResponse<BusStop[]>> => {
  try {
    const url = `${API_BASE_URL}/bus-stops/route/${routeId}`
    console.log("[v0] Fetching bus stops from:", url)
    const response = await fetch(url)
    console.log("[v0] Bus stops response status:", response.status)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    console.log("[v0] Bus stops data received:", data)
    return { success: true, data }
  } catch (error) {
    console.error(`[v0] Error fetching bus stops for route ${routeId}:`, error)
    return {
      success: false,
      error: error instanceof Error ? error.message : `Failed to fetch stops for route ${routeId}`,
    }
  }
}

// Fetch a single bus route with its stops
export const fetchBusRouteById = async (routeId: string): Promise<ApiResponse<BusRoute & { bus_stops: BusStop[] }>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/busRoutes/${routeId}`)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    console.error("Error fetching bus route:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch bus route",
    }
  }
}



// ========================
// ✅ CAREER SECTION
// ========================

export interface CareerApplication {
  id?: number
  name: string
  gender: string
  email: string
  contact_number: string
  date_of_birth: string
  marital_status: string
  address: string
  resume?: string
  position_id?: string
  submitted_at?: string
}

export interface CareerFormData {
  name: string
  gender: string
  email: string
  contact_number: string
  date_of_birth: string
  marital_status: string
  address: string
  resume?: File | null
}

// Create career application with improved error handling
export const createCareerApplication = async (
  formData: CareerFormData & { position_id: string },
): Promise<ApiResponse<any>> => {
  try {
    const formDataToSend = new FormData()
    formDataToSend.append("name", formData.name)
    formDataToSend.append("gender", formData.gender)
    formDataToSend.append("email", formData.email)
    formDataToSend.append("contact_number", formData.contact_number)
    formDataToSend.append("date_of_birth", formData.date_of_birth)
    formDataToSend.append("marital_status", formData.marital_status)
    formDataToSend.append("address", formData.address)
    formDataToSend.append("position_id", formData.position_id)

    if (formData.resume) {
      formDataToSend.append("resume", formData.resume)
    }

    const response = await fetch(`${API_BASE_URL}/career`, {
      method: "POST",
      body: formDataToSend,
    })

    if (!response.ok) {
      let errorMessage = `HTTP error! status: ${response.status}`
      
      // Clone the response so we can try multiple parsing methods
      const responseClone = response.clone()
      
      try {
        const errorData = await response.json()
        errorMessage = errorData.error || errorData.message || errorMessage
      } catch {
        // If JSON parsing fails, try to get text
        try {
          const errorText = await responseClone.text()
          if (errorText) errorMessage = errorText
        } catch {
          // Keep the default error message
        }
      }
      
      return {
        success: false,
        error: errorMessage,
      }
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
  id?: number;
  full_name: string;
  date_of_birth: string;
  gender: string;
  contact_number: string;
  email_id: string;
  address: string;
  school_name: string;
  designation: string;
  preferred_course: string;
  reason_to_pursue: string;
  resume_file: string;
  submitted_at?: string;
}

export interface PDFormData {
  fullName: string;
  dateOfBirth: string;
  gender: string;
  contactNumber: string;
  emailId: string;
  address: string;
  schoolName: string;
  designation: string;
  preferredCourse: string;
  reasonToPursue: string;
  resumeFile: File; // Now a File object
}


// ---------------- CREATE PD APPLICATION ----------------
export const createPDApplication = async (formData: PDFormData): Promise<ApiResponse<any>> => {
  try {
    const body = new FormData();
    body.append("full_name", formData.fullName);
    body.append("date_of_birth", formData.dateOfBirth);
    body.append("gender", formData.gender);
    body.append("contact_number", formData.contactNumber);
    body.append("email_id", formData.emailId);
    body.append("address", formData.address);
    body.append("school_name", formData.schoolName);
    body.append("designation", formData.designation);
    body.append("preferred_course", formData.preferredCourse);
    body.append("reason_to_pursue", formData.reasonToPursue);
    body.append("resume", formData.resumeFile); // Must match Multer field name

    const response = await fetch(`${API_BASE_URL}/applications`, {
      method: "POST",
      body, // FormData automatically sets multipart/form-data
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error("Error creating PD application:", error);
    return { success: false, error: error instanceof Error ? error.message : "Failed to submit application" };
  }
};

// ---------------- FETCH ALL PD APPLICATIONS ----------------
export const fetchPDApplications = async (): Promise<ApiResponse<PDApplication[]>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/applications`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error("Error fetching PD applications:", error);
    return { success: false, error: error instanceof Error ? error.message : "Failed to fetch applications" };
  }
};

// ---------------- UPDATE PD APPLICATION ----------------
export const updatePDApplication = async (id: number, updates: Partial<PDFormData>): Promise<ApiResponse<any>> => {
  try {
    const body = new FormData();
    for (const [key, value] of Object.entries(updates)) {
      if (value !== undefined) {
        // Map frontend keys to backend
        if (key === "fullName") body.append("full_name", value as string);
        else if (key === "dateOfBirth") body.append("date_of_birth", value as string);
        else if (key === "contactNumber") body.append("contact_number", value as string);
        else if (key === "emailId") body.append("email_id", value as string);
        else if (key === "schoolName") body.append("school_name", value as string);
        else if (key === "preferredCourse") body.append("preferred_course", value as string);
        else if (key === "reasonToPursue") body.append("reason_to_pursue", value as string);
        else if (key === "resumeFile" && value instanceof File) body.append("resume", value);
        else body.append(key, value as string);
      }
    }

    const response = await fetch(`${API_BASE_URL}/applications/${id}`, {
      method: "PUT",
      body,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error("Error updating PD application:", error);
    return { success: false, error: error instanceof Error ? error.message : "Failed to update application" };
  }
};

// ---------------- DELETE PD APPLICATION ----------------
export const deletePDApplication = async (id: number): Promise<ApiResponse<any>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/applications/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error("Error deleting PD application:", error);
    return { success: false, error: error instanceof Error ? error.message : "Failed to delete application" };
  }
};


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

export interface TeamMemberAchievement {
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
  achievements: TeamMemberAchievement[]
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

//
// ========================
// ✅ PARENTS' VOICE (Feedback)
// ========================
//

export interface ParentFeedbackItem {
  id?: number
  parent_name: string
  student_name: string
  grade: number | string
  desc: string
  created_at?: string
}

export interface ParentFeedbackForm {
  parentName: string
  studentName: string
  grade: string
  description: string
}

// Send feedback via email (Public)
export const sendParentFeedbackEmail = async (form: ParentFeedbackForm): Promise<ApiResponse<{ message: string }>> => {
  try {
    const payload = {
      parent_name: form.parentName,
      student_name: form.studentName,
      grade: form.grade,
      desc: form.description,
    }

    const res = await fetch(`${API_BASE_URL}/feedback/send-email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      throw new Error(err?.error || `HTTP error! status: ${res.status}`)
    }

    const data = await res.json().catch(() => ({ message: "Feedback sent" }))
    return { success: true, data }
  } catch (error) {
    console.error("Error sending parent feedback email:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send parent feedback",
    }
  }
}

// View feedback list (Public)
// Note: Controller getAllFeedback suggests GET /feedback returns an array.
export const fetchParentFeedback = async (): Promise<ApiResponse<ParentFeedbackItem[]>> => {
  try {
    const res = await fetch(`${API_BASE_URL}/feedback`, { cache: "no-store" })
    if (!res.ok) {
      const errText = await res.text().catch(() => "")
      throw new Error(errText || `HTTP error! status: ${res.status}`)
    }
    const data = (await res.json()) as ParentFeedbackItem[] | { data: any }
    // Normalize array shape
    const items = Array.isArray(data) ? data : ((data as any)?.data ?? [])
    return { success: true, data: items }
  } catch (error) {
    console.error("Error fetching parent feedback:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch feedback",
    }
  }
}

//
// ========================
// ✅ ACHIEVEMENTS SECTION
// ========================
//

export interface Achievement {
  id?: number
  name: string
  grade?: string
  tagline: string
  title: string
  desc: string
  created_at?: string
}

// Fetch all achievements
export const fetchAchievements = async (): Promise<ApiResponse<Achievement[]>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/achievements`)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    console.error("Error fetching achievements:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch achievements",
    }
  }
}

// Create achievement (protected)
export const createAchievement = async (
  achievementData: Omit<Achievement, "id" | "created_at">,
): Promise<ApiResponse<any>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/achievements`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(achievementData),
    })
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    console.error("Error creating achievement:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to create achievement",
    }
  }
}

// Update achievement (protected)
export const updateAchievement = async (id: number, updates: Partial<Achievement>): Promise<ApiResponse<any>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/achievements/${id}`, {
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
    console.error("Error updating achievement:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to update achievement",
    }
  }
}

// Delete achievement (protected)
export const deleteAchievement = async (id: number): Promise<ApiResponse<any>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/achievements/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    console.error("Error deleting achievement:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to delete achievement",
    }
  }
}


export interface PopupData {
  id?: number
  image?: string
  url?: string
  created_at?: string
}

// Get the current popup
export const getPopup = async (): Promise<PopupData | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/popup`)
    if (!response.ok) {
      if (response.status === 404) return null
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching popup:", error)
    return null
  }
}

// Create or update popup
export const createPopup = async (formData: FormData): Promise<PopupData | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/popup`, {
      method: "POST",
      body: formData,
    })
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error creating popup:", error)
    return null
  }
}

// Update existing popup
export const updatePopup = async (formData: FormData): Promise<PopupData | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/popup`, {
      method: "PUT",
      body: formData,
    })
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error updating popup:", error)
    return null
  }
}

// Delete popup
export const deletePopup = async (): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE_URL}/popup`, {
      method: "DELETE",
    })
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    return true
  } catch (error) {
    console.error("Error deleting popup:", error)
    return false
  }
}
