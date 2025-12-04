"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

interface Position {
  id: string
  name: string
  description: string
}

export default function JobListingPage() {
  const [positions, setPositions] = useState<Position[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchPositions()
  }, [])

  const fetchPositions = async () => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "https://backend-edhc.onrender.com"
      const response = await fetch(`${apiUrl}/positions`)

      if (!response.ok) {
        throw new Error("Failed to fetch positions")
      }

      const data = await response.json()
      setPositions(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
      console.error("Error fetching positions:", err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#E9DAC1] to-white flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-[#54BAB9] border-r-transparent"></div>
          <p className="mt-4 text-[#54BAB9] font-medium">Loading positions...</p>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#E9DAC1] to-white">
      {/* Hero Banner */}
      <div className="relative w-full h-64 md:h-80 mb-8 overflow-hidden">
        <Image src="/job-listings.jpg" alt="Join Our Team" fill className="object-cover" priority />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-4 w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-black text-center">Join Our Team</h1>
            <p className="text-black/90 mt-2 text-center">Explore exciting career opportunities</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-12 px-4">
        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8 text-red-700">
            Error loading positions: {error}
          </div>
        )}

        {/* Positions Grid */}
        {positions.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No positions available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {positions.map((position) => (
              <div
                key={position.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-100"
              >
                <div className="p-6">
                  {/* Position Title */}
                  <h2 className="text-xl font-bold text-gray-800 mb-3">{position.name}</h2>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3">{position.description}</p>

                  {/* Apply Button */}
                  <Link
                    href={`/career`}
                    className="block w-full bg-[#54BAB9] hover:bg-[#4a9b9a] text-white font-semibold py-2 px-4 rounded-lg text-center transition-colors"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
