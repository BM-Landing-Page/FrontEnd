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

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (show && !loading && popupData) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [show, loading, popupData])

  if (!show || loading || !popupData) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[60] bg-black/60 backdrop-blur-sm p-4 sm:p-6 md:p-8">
      <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl transform transition-all duration-300 scale-100">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-gray-600 hover:text-gray-800 transition-colors duration-200 z-10 shadow-lg"
          onClick={handleClose}
          aria-label="Close popup"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Square Image holder */}
        <div className="relative w-full aspect-square">
          {popupData.image ? (
            <Image
              src={popupData.image}
              alt="Registration Banner"
              fill
              className="object-cover rounded-t-3xl"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 640px, (max-width: 1024px) 768px, 1024px"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center rounded-t-3xl">
              <span className="text-white text-xl font-semibold">No Image Available</span>
            </div>
          )}
        </div>

        {/* Register Now Button Section */}
        <div className="flex items-center justify-center bg-gray-50 px-6 py-6 rounded-b-3xl">
          <button
            onClick={() => {
              if (popupData.url) {
                window.open(popupData.url, "_blank", "noopener,noreferrer")
              }
            }}
            disabled={!popupData.url}
            className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold rounded-full transform hover:scale-105 disabled:hover:scale-100 transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
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