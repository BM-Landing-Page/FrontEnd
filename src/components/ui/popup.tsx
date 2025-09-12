"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { getPopup, type PopupData } from "@/services/api"

interface PopupProps {
  onClose?: () => void
}

export default function Popup({ onClose }: PopupProps) {
  const [show, setShow] = useState(true)
  const [popupData, setPopupData] = useState<PopupData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPopupData = async () => {
      try {
        const data = await getPopup()
        setPopupData(data)
      } catch (error) {
        console.error("Failed to fetch popup data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPopupData()
  }, [])

  const handleClose = () => {
    setShow(false)
    onClose?.()
  }

  if (!show || loading || !popupData) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm">
      <div className="relative w-4/5 h-4/5 max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 scale-100">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-gray-800 transition-colors duration-200 z-10 shadow-lg"
          onClick={handleClose}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image covering 4/5 of popup */}
        <div className="relative h-4/5 w-full">
          {popupData.image ? (
            <Image
              src={popupData.image || "/placeholder.svg"}
              alt="Registration Banner"
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white text-xl font-semibold">No Image Available</span>
            </div>
          )}
        </div>

        {/* Register Now Button Section - 1/5 of popup */}
        <div className="h-1/5 flex items-center justify-center bg-gray-50 px-6">
          <button
            onClick={() => {
              if (popupData.url) {
                window.open(popupData.url, "_blank")
              }
            }}
            className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
          >
            Discover More
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
