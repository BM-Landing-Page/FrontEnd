"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { getRouteFromSearch, getSearchSuggestions, type SearchSuggestion } from "../../../utils/searchmap"
import { Search, X } from "lucide-react"

export default function Searchbar() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isExpanded, setIsExpanded] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const router = useRouter()
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Handle click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false)
        setIsExpanded(false)
        setSelectedIndex(-1)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSearch = (searchValue?: string) => {
    const termToSearch = searchValue || searchTerm

    if (!termToSearch.trim()) {
      return
    }

    const route = getRouteFromSearch(termToSearch)

    if (route) {
      if (route.startsWith("http")) {
        window.open(route, "_blank")
      } else {
        router.push(route)
      }
      setSearchTerm("")
      setIsExpanded(false)
      setShowSuggestions(false)
      setSelectedIndex(-1)
    } else {
      alert("No matching page found. Try searching for 'admissions', 'academics', 'contact', 'gallery', etc.")
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)

    if (value.trim()) {
      const newSuggestions = getSearchSuggestions(value, 6)
      setSuggestions(newSuggestions)
      setShowSuggestions(true)
      setSelectedIndex(-1)
    } else {
      setShowSuggestions(false)
      setSuggestions([])
      setSelectedIndex(-1)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions || suggestions.length === 0) {
      if (e.key === "Enter") {
        e.preventDefault()
        handleSearch()
      }
      return
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setSelectedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : prev))
        break
      case "ArrowUp":
        e.preventDefault()
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1))
        break
      case "Enter":
        e.preventDefault()
        if (selectedIndex >= 0) {
          handleSuggestionClick(suggestions[selectedIndex])
        } else {
          handleSearch()
        }
        break
      case "Escape":
        setShowSuggestions(false)
        setSelectedIndex(-1)
        inputRef.current?.blur()
        break
    }
  }

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    if (suggestion.route.startsWith("http")) {
      window.open(suggestion.route, "_blank")
    } else {
      router.push(suggestion.route)
    }
    setSearchTerm("")
    setShowSuggestions(false)
    setIsExpanded(false)
    setSelectedIndex(-1)
  }

  const handleClear = () => {
    setSearchTerm("")
    setShowSuggestions(false)
    setIsExpanded(false)
    setSuggestions([])
    setSelectedIndex(-1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSearch()
  }

  return (
    <div className="relative flex items-center" ref={searchRef}>
      {/* Desktop Search Bar */}
      <div className="hidden md:flex items-center">
        <form onSubmit={handleSubmit} className="relative">
          <div className="relative flex items-center">
            <input
              ref={inputRef}
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onFocus={() => {
                if (searchTerm.trim()) {
                  setShowSuggestions(true)
                }
              }}
              placeholder="Search pages..."
              className="w-64 px-4 py-2 pr-10 text-sm border border-gray-300 rounded-full 
                       bg-white/90 backdrop-blur-sm shadow-sm
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                       placeholder-gray-500 text-gray-700
                       transition-all duration-200"
            />
            <button
              type="submit"
              className="absolute right-1 top-1/2 transform -translate-y-1/2
                       p-1.5 text-gray-500 hover:text-blue-600 
                       hover:bg-blue-50 rounded-full transition-colors duration-200"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>

          {/* Desktop Suggestions Dropdown */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
              {suggestions.map((suggestion, index) => (
                <div
                  key={`${suggestion.route}-${index}`}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className={`px-4 py-3 cursor-pointer border-b border-gray-100 last:border-b-0 hover:bg-blue-50 transition-colors ${
                    index === selectedIndex ? "bg-blue-50" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900 text-sm">{suggestion.displayName}</div>
                      <div className="text-xs text-gray-500 mt-1">{suggestion.category}</div>
                    </div>
                    <Search className="w-3 h-3 text-gray-400" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </form>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden">
        {!isExpanded ? (
          <button
            onClick={() => setIsExpanded(true)}
            className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 
                     rounded-full transition-colors duration-200"
          >
            <Search className="w-5 h-5" />
          </button>
        ) : (
          <div className="absolute right-0 top-full mt-2 w-80 z-50">
            <form onSubmit={handleSubmit} className="relative">
              <div className="relative flex items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={searchTerm}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Search pages..."
                  autoFocus
                  className="w-full px-4 py-3 pr-20 text-sm border border-gray-300 rounded-lg
                           bg-white shadow-lg
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                           placeholder-gray-500 text-gray-700"
                />
                <div className="absolute right-1 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                  <button
                    type="submit"
                    className="p-1.5 text-gray-500 hover:text-blue-600 
                             hover:bg-blue-50 rounded-full transition-colors duration-200"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleClear}
                    className="p-1.5 text-gray-500 hover:text-red-600 
                             hover:bg-red-50 rounded-full transition-colors duration-200"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Mobile Suggestions Dropdown */}
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-64 overflow-y-auto">
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={`${suggestion.route}-${index}`}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className={`px-4 py-3 cursor-pointer border-b border-gray-100 last:border-b-0 hover:bg-blue-50 transition-colors ${
                        index === selectedIndex ? "bg-blue-50" : ""
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900 text-sm">{suggestion.displayName}</div>
                          <div className="text-xs text-gray-500 mt-1">{suggestion.category}</div>
                        </div>
                        <Search className="w-3 h-3 text-gray-400" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </form>
          </div>
        )}
      </div>

      {/* Mobile overlay to close search when clicking outside */}
      {isExpanded && <div className="fixed inset-0 z-40 md:hidden" onClick={handleClear} />}
    </div>
  )
}
