// Comprehensive keyword mapping for BMIS search functionality
export const searchKeywordGroups: Record<string, string[]> = {
  "/": ["home", "homepage", "main page", "index", "landing page", "welcome"],
  "/myschoolone": ["my school one", "myschoolone", "portal", "student portal", "parent portal", "login"],
  "/ourteam": [
    "leadership",
    "leadership team",
    "faculty",
    "teachers",
    "staff",
    "mentors",
    "educators",
    "our team",
    "school team",
    "admin team",
    "management",
    "principal",
    "vice principal",
  ],
  "/missionforvision": [
    "vision",
    "mission",
    "philosophy",
    "values",
    "vision mission",
    "our vision",
    "our mission",
    "core values",
    "beliefs",
    "principles",
  ],
  "/foundersmessage": [
    "founder",
    "founder's message",
    "founders message",
    "message from founder",
    "from the founder",
    "founder note",
    "director message",
  ],
  "/bmisjourney": [
    "journey",
    "bmis journey",
    "our journey",
    "school journey",
    "history",
    "timeline",
    "establishment",
    "inception",
    "story",
  ],
  "/curriculum": [
    "curriculum",
    "syllabus",
    "curriculum overview",
    "academics",
    "education plan",
    "course structure",
    "academic structure",
    "subjects",
    "courses",
  ],
  "/earlyyears": [
    "early years",
    "preschool",
    "nursery",
    "kindergarten",
    "montessori",
    "kg",
    "pre-k",
    "toddler",
    "playgroup",
  ],
  "/primaryandmiddleyears": [
    "primary",
    "middle",
    "primary years",
    "middle years",
    "grade 1",
    "grade 2",
    "grade 3",
    "grade 4",
    "grade 5",
    "grade 6",
    "grade 7",
    "grade 8",
    "elementary",
    "junior school",
  ],
  "/igcseandsenioryears": [
    "igcse",
    "senior programmes",
    "senior programs",
    "high school",
    "secondary",
    "grade 9",
    "grade 10",
    "grade 11",
    "grade 12",
    "senior years",
    "cambridge",
    "international curriculum",
  ],
  "/pedagogytools": [
    "pedagogy",
    "teaching methods",
    "tools",
    "pedagogy tools",
    "teaching aids",
    "instructional methods",
    "learning tools",
    "educational technology",
    "teaching techniques",
  ],
  "/admissions": [
    "admissions",
    "admission",
    "join school",
    "how to apply",
    "register",
    "enrol",
    "enrollment",
    "getting in",
    "new admission",
    "apply now",
  ],
  "/admissionsprocess": [
    "admission process",
    "how to apply",
    "steps to join",
    "application process",
    "procedure",
    "admission procedure",
    "enrollment process",
    "application steps",
  ],
  "https://buddingminds.myschoolone.com/cloud/Admission/EnquiryForm.php?ksjdkjsd=MQ==": [
    "register now",
    "apply online",
    "admission form",
    "enquiry form",
    "online application",
    "registration form",
    "apply here",
  ],
  "/adayatbm": [
    "a day at bmis",
    "day in school",
    "daily routine",
    "timetable",
    "schedule",
    "school day",
    "typical day",
    "daily schedule",
    "school routine",
  ],
  "/eventsandcelebration": [
    "events",
    "celebrations",
    "festivals",
    "functions",
    "annual day",
    "sports day",
    "student events",
    "event calendar",
    "school events",
    "cultural events",
  ],
  "/gallery": [
    "gallery",
    "photos",
    "images",
    "pictures",
    "photo gallery",
    "albums",
    "event photos",
    "school photos",
    "memories",
  ],
  "/beyondbooks": [
    "beyond books",
    "extracurricular",
    "sports",
    "clubs",
    "activities",
    "art",
    "music",
    "drama",
    "dance",
    "yoga",
    "co-curricular",
    "after school",
  ],
  "/studentprofile": [
    "student profiles",
    "student stories",
    "our students",
    "student portfolio",
    "profile",
    "student showcase",
    "student highlights",
  ],
  "/leadershipprojects": [
    "leadership projects",
    "student leadership",
    "projects",
    "student initiatives",
    "bmis projects",
    "community projects",
    "social projects",
  ],
  "/slcoverview": [
    "slc",
    "student leadership council",
    "student council",
    "slc overview",
    "student council structure",
    "student government",
    "student representatives",
  ],
  "/calendar": [
    "calendar",
    "school calendar",
    "holidays",
    "important dates",
    "term dates",
    "academic calendar",
    "schedule",
    "yearly calendar",
  ],
  "/schoolupdate": [
    "school updates",
    "news",
    "latest news",
    "announcements",
    "updates",
    "school news",
    "recent updates",
  ],
  "/studentachievement": [
    "student achievements",
    "awards",
    "merit",
    "achievement",
    "recognition",
    "toppers",
    "prize winners",
    "accomplishments",
    "success stories",
  ],
  "/studentvoice": [
    "thought pieces",
    "student voice",
    "opinions",
    "student blog",
    "perspectives",
    "articles",
    "student writing",
    "reflections",
  ],
  "/bmgazette": [
    "bm gazette",
    "newsletter",
    "magazine",
    "school magazine",
    "publication",
    "gazette",
    "school newsletter",
  ],
  "/alumni": [
    "alumni",
    "graduates",
    "old students",
    "ex-students",
    "past students",
    "former students",
    "alumni network",
  ],
  "/abouttheacademy": [
    "about the academy",
    "pd academy",
    "professional development",
    "teacher training",
    "academy overview",
  ],
  "/pedagogyandmodule": [
    "pedagogy modules",
    "training modules",
    "pd modules",
    "professional development modules",
    "teacher training programs",
  ],
  "/pdcommunity": ["pd community", "professional development community", "teacher community", "educator network"],
  "/pdform": ["apply pd", "pd application", "professional development application", "teacher training application"],
  "/career": [
    "career",
    "careers",
    "jobs",
    "work with us",
    "open positions",
    "recruitment",
    "employment",
    "job opportunities",
    "vacancies",
  ],
  "/contactus": [
    "contact",
    "contact us",
    "location",
    "reach us",
    "get in touch",
    "phone",
    "email",
    "address",
    "directions",
    "find us",
  ],
}

// Function to create reverse mapping (keyword -> route)
export function createSearchMap(): Record<string, string> {
  const searchMap: Record<string, string> = {}

  Object.entries(searchKeywordGroups).forEach(([route, keywords]) => {
    keywords.forEach((keyword) => {
      searchMap[keyword.toLowerCase()] = route
    })
  })

  return searchMap
}

// Function to get route from search term
export function getRouteFromKeyword(searchTerm: string): string | null {
  const searchMap = createSearchMap()
  const normalizedTerm = searchTerm.trim().toLowerCase()
  return searchMap[normalizedTerm] || null
}

// Function to get all available search terms
export function getAllSearchKeywords(): string[] {
  const allKeywords: string[] = []
  Object.values(searchKeywordGroups).forEach((keywords) => {
    allKeywords.push(...keywords)
  })
  return allKeywords
}

// Function to search for partial matches
export function findPartialMatches(input: string, limit = 6): Array<{ keyword: string; route: string }> {
  if (!input.trim()) return []

  const normalizedInput = input.toLowerCase().trim()
  const matches: Array<{ keyword: string; route: string }> = []

  Object.entries(searchKeywordGroups).forEach(([route, keywords]) => {
    keywords.forEach((keyword) => {
      if (keyword.toLowerCase().includes(normalizedInput)) {
        matches.push({ keyword, route })
      }
    })
  })

  return matches.slice(0, limit)
}
