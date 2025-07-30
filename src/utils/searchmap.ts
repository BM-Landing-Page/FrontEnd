import { getRouteFromKeyword, findPartialMatches, searchKeywordGroups } from "./searchkeywords"

// Search suggestions with categories for better UX
export interface SearchSuggestion {
  term: string
  route: string
  category: string
  displayName: string
}

// Route to display name mapping
const routeDisplayNames: Record<string, { displayName: string; category: string }> = {
  "/": { displayName: "Home", category: "Navigation" },
  "/myschoolone": { displayName: "My School One Portal", category: "Portal" },
  "/ourteam": { displayName: "Leadership Team", category: "About BMIS" },
  "/missionforvision": { displayName: "Vision, Mission & Philosophy", category: "About BMIS" },
  "/foundersmessage": { displayName: "Founder's Message", category: "About BMIS" },
  "/bmisjourney": { displayName: "BMIS Journey", category: "About BMIS" },
  "/curriculum": { displayName: "Curriculum Overview", category: "Academics" },
  "/earlyyears": { displayName: "Early Years", category: "Academics" },
  "/primaryandmiddleyears": { displayName: "Primary & Middle Years", category: "Academics" },
  "/igcseandsenioryears": { displayName: "IGCSE & Senior Programmes", category: "Academics" },
  "/pedagogytools": { displayName: "Pedagogy & Tools", category: "Academics" },
  "/admissions": { displayName: "Admissions", category: "Admissions" },
  "/admissionsprocess": { displayName: "Admission Process", category: "Admissions" },
  "https://buddingminds.myschoolone.com/cloud/Admission/EnquiryForm.php?ksjdkjsd=MQ==": {
    displayName: "Register Now",
    category: "Admissions",
  },
  "/adayatbm": { displayName: "A Day at BMIS", category: "Campus Life" },
  "/eventsandcelebration": { displayName: "Events & Celebrations", category: "Campus Life" },
  "/gallery": { displayName: "Gallery", category: "Campus Life" },
  "/beyondbooks": { displayName: "Beyond Books", category: "Campus Life" },
  "/studentprofile": { displayName: "Student Profiles", category: "Student Leadership" },
  "/leadershipprojects": { displayName: "Leadership Projects", category: "Student Leadership" },
  "/slcoverview": { displayName: "SLC Overview", category: "Student Leadership" },
  "/calendar": { displayName: "School Calendar", category: "About BMIS" },
  "/schoolupdate": { displayName: "School Updates", category: "Newsroom" },
  "/studentachievement": { displayName: "Student Achievements", category: "Newsroom" },
  "/studentvoice": { displayName: "Thought Pieces", category: "Newsroom" },
  "/bmgazette": { displayName: "BM Gazette", category: "Newsroom" },
  "/alumni": { displayName: "Alumni", category: "About BMIS" },
  "/abouttheacademy": { displayName: "About the Academy", category: "BM PD Academy" },
  "/pedagogyandmodule": { displayName: "Pedagogy & Modules", category: "BM PD Academy" },
  "/pdcommunity": { displayName: "PD Community", category: "BM PD Academy" },
  "/pdform": { displayName: "Apply Now", category: "BM PD Academy" },
  "/career": { displayName: "Career Opportunities", category: "Other" },
  "/contactus": { displayName: "Contact Us", category: "Other" },
}

// Function to get route from search term (using the keyword mapping)
export function getRouteFromSearch(searchTerm: string): string | null {
  return getRouteFromKeyword(searchTerm)
}

// Function to get search suggestions based on input
export function getSearchSuggestions(input: string, limit = 6): SearchSuggestion[] {
  if (!input.trim()) return []

  const partialMatches = findPartialMatches(input, limit * 2) // Get more matches to filter
  const suggestions: SearchSuggestion[] = []
  const seenRoutes = new Set<string>()

  partialMatches.forEach((match) => {
    if (!seenRoutes.has(match.route) && suggestions.length < limit) {
      const routeInfo = routeDisplayNames[match.route]
      if (routeInfo) {
        suggestions.push({
          term: match.keyword,
          route: match.route,
          category: routeInfo.category,
          displayName: routeInfo.displayName,
        })
        seenRoutes.add(match.route)
      }
    }
  })

  return suggestions
}

// Function to get all available search terms
export function getAvailableSearchTerms(): string[] {
  const allKeywords: string[] = []
  Object.values(searchKeywordGroups).forEach((keywords) => {
    allKeywords.push(...keywords)
  })
  return allKeywords
}

// Export the search keyword groups for external use if needed
export { searchKeywordGroups } from "./searchkeywords"
