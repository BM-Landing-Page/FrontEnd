"use client"

import { useState, useEffect } from "react"
import { fetchAllGalleryItems } from "@/services/api"

export interface GalleryItem {
  id: number
  description: string
  year: string
  category: string
  image_url: string
  created_at: string
}

export default function Home() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([])
  const [activeTab, setActiveTab] = useState("Kidsfest")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const categories = [
    { label: "Early Years", value: "Kidsfest" },
    { label: "Sports", value: "Sports Synod" },
    { label: "Campus Life", value: "Field Trips / Edu Trips" },
    { label: "Events and Celebrations", value: "Festive Celebrations (Diwali, Christmas, Pongal, etc.)" },
    { label: "Beyond Books", value: "Club Activities / House Events" },
    { label: "Awards and Recogonitions", value: "Inter-school Competitions" },
  ]

  useEffect(() => {
    const loadGallery = async () => {
      try {
        setLoading(true)
        const response = await fetchAllGalleryItems()
        if (response.success && response.data) {
          setGalleryItems(response.data)
        } else {
          setError(response.error || "Failed to load gallery")
        }
      } catch (err) {
        setError("Failed to load gallery items")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    loadGallery()
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedItem(null)
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [])

  const filteredItems = galleryItems.filter((item) => item.category === activeTab)

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="w-full h-64 sm:h-80 md:h-96 bg-gradient-to-r from-[#54BAB9] to-[#9ED2C6] overflow-hidden">
        <img src="/school-gallery-hero-banner.jpg" alt="Gallery Banner" className="w-full h-full object-cover" />
      </div>

      {/* Tab Switcher */}
      <div className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          {/* Mobile Dropdown */}
          <div className="sm:hidden relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full bg-white text-gray-900 px-4 py-3 rounded-lg border border-gray-300 text-left font-medium flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span>{categories.find((c) => c.value === activeTab)?.label || "Select Category"}</span>
              <svg className={`h-5 w-5 transition-transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-50 overflow-hidden">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => {
                      setActiveTab(category.value)
                      setIsDropdownOpen(false)
                    }}
                    className={`w-full px-4 py-3 text-left transition-colors ${
                      activeTab === category.value
                        ? "bg-teal-500 text-white font-medium"
                        : "text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Tabs */}
          <div className="hidden sm:flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveTab(category.value)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 whitespace-nowrap text-sm ${
                  activeTab === category.value
                    ? "bg-teal-500 text-white shadow-md"
                    : "bg-gray-100 text-gray-900 border border-gray-300 hover:border-teal-500 hover:bg-gray-50"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-400 mb-4" />
              <p className="text-gray-600">Loading gallery...</p>
            </div>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <p className="text-lg text-red-600 mb-2">Error loading gallery</p>
              <p className="text-gray-600">{error}</p>
            </div>
          </div>
        ) : filteredItems.length === 0 ? (
          <div className="flex items-center justify-center py-20">
            <p className="text-lg text-gray-600">No images found in this category</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} onClick={() => setSelectedItem(item)} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
                  <div className="aspect-video relative bg-gray-200">
                    <img
                      src={item.image_url || "/placeholder.svg"}
                      alt={item.description}
                      className="w-full h-full object-cover group-hover:brightness-90 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal - Image Only */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={() => setSelectedItem(null)}
        >
          <div className="relative w-full max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedItem.image_url || "/placeholder.svg"}
              alt={selectedItem.description}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </main>
  )
}
