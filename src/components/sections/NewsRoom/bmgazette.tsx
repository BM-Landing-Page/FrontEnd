"use client"

import Image from "next/image"
import { Download, Users, BookOpen, ArrowRight, Sparkles, Heart } from "lucide-react"
import { useState } from "react"

export default function BMGazette() {
  const [isHovered, setIsHovered] = useState(false)
  const [thumbnailError, setThumbnailError] = useState(false)

  // Extract file ID and create thumbnail URL
  const fileId = "1WmphLm3PmcuMdigrkzB97X8Du6ZowfPv"
  const thumbnailUrl = `https://drive.google.com/thumbnail?id=${fileId}&sz=w400-h600`
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`

  const handleDownload = () => {
    window.open(downloadUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#F7ECDE]/10 to-[#E9DAC1]/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-5 animate-spin-slow"
          style={{ backgroundColor: "#54BAB9" }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-5 animate-pulse"
          style={{ backgroundColor: "#9ED2C6" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-3 animate-spin-reverse"
          style={{ backgroundColor: "#E9DAC1" }}
        />
      </div>

      {/* Hero Section */}
      <div className="relative">
        {/* Hero Banner - reduced height from h-[80vh] to h-[60vh] */}
        <div className="relative w-full h-[60vh] overflow-hidden">
          <Image
            src="/images/bmgazatte.jpg"
            alt="BM Gazette Banner"
            fill
            className="object-cover opacity-40"
            priority
          />
          {/* Light overlay instead of dark */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/20 to-white/40" />
          {/* Additional light background for better text visibility */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />

          {/* Floating Decorative Elements */}
          <div
            className="absolute top-20 left-10 w-3 h-3 rounded-full animate-float"
            style={{ backgroundColor: "#9ED2C6" }}
          />
          <div
            className="absolute top-32 right-20 w-2 h-2 rounded-full animate-float-delayed"
            style={{ backgroundColor: "#54BAB9" }}
          />
          <div
            className="absolute bottom-40 left-1/4 w-4 h-4 rounded-full animate-bounce"
            style={{ backgroundColor: "#F7ECDE" }}
          />
          <div
            className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: "#E9DAC1" }}
          />

          {/* Hero Content - reduced text sizes and spacing */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center max-w-4xl px-4">
              <div className="mb-6">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tight text-gray-800">
                  <span className="inline-block animate-slide-down">The</span>{" "}
                  <span className="inline-block animate-slide-down-delayed bg-gradient-to-r from-[#54BAB9] to-[#9ED2C6] bg-clip-text text-transparent">
                    BM Gazette
                  </span>
                </h1>
                <div className="flex items-center justify-center gap-3 text-lg md:text-xl mb-6 animate-fade-in-up text-gray-700">
                  <Sparkles className="text-[#54BAB9]" size={20} />
                  <span>Voices • Creativity • Community</span>
                  <Sparkles className="text-[#54BAB9]" size={20} />
                </div>
              </div>

              {/* Stats Bar - reduced padding and text sizes */}
              <div className="inline-flex items-center gap-6 bg-white/80 backdrop-blur-md rounded-full px-6 py-3 border border-white/40 shadow-lg animate-slide-up">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Users size={18} className="text-[#54BAB9]" />
                  <span>Student-Led</span>
                </div>
                <div className="w-px h-5 bg-gray-300" />
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <BookOpen size={18} className="text-[#54BAB9]" />
                  <span>2 Editions</span>
                </div>
                <div className="w-px h-5 bg-gray-300" />
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Heart size={18} className="text-[#54BAB9]" />
                  <span>Community</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-500 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Main Content - reduced padding from py-20 to py-12 */}
      <div className="relative z-10 container mx-auto px-4 py-12 max-w-7xl">
        {/* Main Content Grid - reduced gap from gap-16 to gap-8 */}
        <div className="grid lg:grid-cols-5 gap-8 items-start mb-16">
          {/* Content Section */}
          <div className="lg:col-span-3 space-y-6">
            <div className="relative group">
              {/* Decorative Background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#F7ECDE] to-[#E9DAC1] rounded-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 blur-sm" />

              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/50">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#54BAB9" }}
                  >
                    <BookOpen className="text-white" size={20} />
                  </div>
                  <h2 className="text-3xl font-bold" style={{ color: "#54BAB9" }}>
                    About The Gazette
                  </h2>
                </div>

                <div className="space-y-4 text-base leading-relaxed text-gray-700">
                  <p className="text-lg">
                    The BM Gazette is a{" "}
                    <span className="font-semibold text-[#54BAB9]">vibrant student-led publication</span> that showcases
                    the voices, creativity, and perspectives of the school community.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* PDF Preview Section */}
          <div className="lg:col-span-2">
            <div className="sticky top-8">
              <div className="relative group">
                {/* Decorative Background */}
                <div className="absolute -inset-6 bg-gradient-to-br from-[#54BAB9] to-[#9ED2C6] rounded-3xl opacity-20 group-hover:opacity-30 transition-all duration-500 blur-lg" />

                <div
                  className="relative overflow-hidden shadow-2xl border-0 cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-3xl rounded-xl bg-white"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={handleDownload}
                >
                  <div className="p-0">
                    {/* PDF Thumbnail - reduced height from h-96 to h-80 */}
                    <div className="relative h-80 overflow-hidden bg-gradient-to-br from-[#E9DAC1] to-[#F7ECDE]">
                      {/* Actual PDF Thumbnail - reduced padding from p-4 to p-3 */}
                      <div className="relative w-full h-full p-3">
                        <div className="w-full h-full bg-white rounded-lg shadow-xl overflow-hidden">
                          {!thumbnailError ? (
                            <img
                              src={thumbnailUrl || "/placeholder.svg"}
                              alt="BM Gazette PDF Preview"
                              className="w-full h-full object-cover"
                              onError={() => setThumbnailError(true)}
                            />
                          ) : (
                            /* Fallback content - reduced padding and icon size */
                            <div className="w-full h-full flex items-center justify-center bg-white">
                              <div className="text-center p-6">
                                <BookOpen size={40} style={{ color: "#54BAB9" }} className="mx-auto mb-3" />
                                <h3 className="text-xl font-bold mb-2" style={{ color: "#54BAB9" }}>
                                  BM Gazette
                                </h3>
                                <p className="text-sm text-gray-600">Edition 2024-2025</p>
                                <div
                                  className="mt-3 px-3 py-1.5 rounded-full text-xs font-medium"
                                  style={{ backgroundColor: "#F7ECDE", color: "#54BAB9" }}
                                >
                                  PDF Document
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Hover Overlay - reduced icon size */}
                      <div
                        className={`absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
                      >
                        <div
                          className={`text-white text-center transform transition-transform duration-300 ${isHovered ? "scale-100" : "scale-90"}`}
                        >
                          <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                            <Download size={28} />
                          </div>
                          <p className="font-semibold text-base">Click to Download</p>
                          <p className="text-sm opacity-80">Latest Edition PDF</p>
                        </div>
                      </div>
                    </div>

                    {/* Download Button - reduced padding from p-6 to p-4, button padding from py-4 to py-3 */}
                    <div className="p-4 bg-gradient-to-r from-white to-[#F7ECDE]/30">
                      <button
                        onClick={handleDownload}
                        className="w-full text-white font-bold py-3 rounded-2xl transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 text-base group focus:outline-none focus:ring-4 focus:ring-[#54BAB9]/20"
                        style={{ backgroundColor: "#54BAB9" }}
                      >
                        <Download size={20} className="group-hover:animate-bounce" />
                        Download Latest Edition
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Community Stats - reduced padding and text sizes */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <div className="absolute -inset-8 bg-gradient-to-r from-[#9ED2C6] to-[#54BAB9] rounded-3xl opacity-20 blur-xl" />
            <div className="relative bg-gradient-to-r from-[#9ED2C6] to-[#54BAB9] p-8 rounded-3xl shadow-2xl text-white">
              <h2 className="text-3xl font-bold mb-6">Join Our Creative Community</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-black mb-2">2</div>
                  <div className="text-base opacity-90">Editions Published</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black mb-2">100+</div>
                  <div className="text-base opacity-90">Student Contributors</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black mb-2">∞</div>
                  <div className="text-base opacity-90">Creative Possibilities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-down-delayed {
          from { opacity: 0; transform: translateY(-50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(10px); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 30s linear infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite 1s;
        }
        
        .animate-slide-down {
          animation: slide-down 1s ease-out;
        }
        
        .animate-slide-down-delayed {
          animation: slide-down-delayed 1s ease-out 0.3s both;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.6s both;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out 0.9s both;
        }
        
        .animate-bounce-x {
          animation: bounce-x 2s ease-in-out infinite;
        }
        
        .opacity-3 {
          opacity: 0.03;
        }
        
        .opacity-5 {
          opacity: 0.05;
        }
      `}</style>
    </div>
  )
}
