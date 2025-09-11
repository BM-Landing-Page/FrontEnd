"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function Popup() {
  const [show, setShow] = useState(false)

  // Show popup after short delay
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  if (!show) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm">
      <div className="relative w-4/5 h-4/5 max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 scale-100">



        {/* Close Button */}
        <button
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-colors duration-200 z-10"
          onClick={() => setShow(false)}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="bg-white/98 backdrop-blur-sm rounded-3xl m-3 px-16 py-20 text-center space-y-10">
          {/* School Logo */}
          <div className="flex justify-center">
            <div className="relative w-28 h-28 rounded-full overflow-hidden shadow-xl ring-4 ring-[#54BAB9]/30">
              <Image
                src="/school-logo.png"
                alt="School Logo"
                width={112}
                height={112}
                className="object-cover"
              />
            </div>
          </div>

          {/* School Name */}
          <div>
            <h2 className="text-4xl font-bold text-[#54BAB9] mb-4">
              Your School Name
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#54BAB9] to-[#9ED2C6] rounded-full mx-auto"></div>
          </div>

          {/* Admissions Message */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#54BAB9] to-[#9ED2C6] text-white rounded-full text-lg font-medium shadow-lg">
              <span className="w-3 h-3 bg-white rounded-full mr-4 animate-pulse"></span>
              Admissions Open
            </div>
            <p className="text-[#54BAB9] text-2xl leading-relaxed font-medium max-w-2xl mx-auto">
              🎓 Secure your child's future with quality education.<br />
              <span className="text-xl text-[#9ED2C6] font-normal">Limited seats available!</span>
            </p>
          </div>

          {/* Apply Button */}
          <div className="pt-6">
            <a
              href="#"
              className="inline-flex items-center justify-center px-16 py-5 bg-gradient-to-r from-[#54BAB9] to-[#9ED2C6] text-white font-bold rounded-full hover:from-[#54BAB9]/90 hover:to-[#9ED2C6]/90 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl text-xl"
            >
              Apply Now
              <svg className="w-6 h-6 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Additional Info */}
          <p className="text-base text-[#9ED2C6] mt-8 font-medium">
            Call us: +1 (555) 123-4567 | Email: admissions@yourschool.edu
          </p>
        </div>
      </div>
    </div>
  )
}