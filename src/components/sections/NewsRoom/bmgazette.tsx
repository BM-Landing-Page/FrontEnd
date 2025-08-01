"use client"

import Image from "next/image"
import { Download, Users, Calendar, BookOpen, Star, ArrowRight, Sparkles, Heart } from "lucide-react"
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
        {/* Hero Banner */}
        <div className="relative w-full h-[80vh] overflow-hidden">
          <Image src="/images/bmgazatte.jpg" alt="BM Gazette Banner" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60" />

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

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-5xl px-4">
              <div className="mb-8">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tight">
                  <span className="inline-block animate-slide-down">The</span>{" "}
                  <span className="inline-block animate-slide-down-delayed bg-gradient-to-r from-[#9ED2C6] to-[#54BAB9] bg-clip-text text-transparent">
                    BM Gazette
                  </span>
                </h1>
                <div className="flex items-center justify-center gap-4 text-xl md:text-2xl mb-8 animate-fade-in-up">
                  <Sparkles className="text-[#9ED2C6]" />
                  <span>Voices • Creativity • Community</span>
                  <Sparkles className="text-[#9ED2C6]" />
                </div>
              </div>

              {/* Stats Bar */}
              <div className="inline-flex items-center gap-8 bg-white/10 backdrop-blur-md rounded-full px-8 py-4 border border-white/20 animate-slide-up">
                <div className="flex items-center gap-2 text-sm md:text-base">
                  <Users size={20} className="text-[#9ED2C6]" />
                  <span>Student-Led</span>
                </div>
                <div className="w-px h-6 bg-white/30" />
                <div className="flex items-center gap-2 text-sm md:text-base">
                  <BookOpen size={20} className="text-[#9ED2C6]" />
                  <span>2 Editions</span>
                </div>
                <div className="w-px h-6 bg-white/30" />
                <div className="flex items-center gap-2 text-sm md:text-base">
                  <Heart size={20} className="text-[#9ED2C6]" />
                  <span>Community</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 max-w-7xl">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-16 items-start mb-24">
          {/* Content Section */}
          <div className="lg:col-span-3 space-y-8">
            <div className="relative group">
              {/* Decorative Background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#F7ECDE] to-[#E9DAC1] rounded-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 blur-sm" />

              <div className="relative bg-white/80 backdrop-blur-sm p-12 rounded-3xl shadow-2xl border border-white/50">
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#54BAB9" }}
                  >
                    <BookOpen className="text-white" size={24} />
                  </div>
                  <h2 className="text-4xl font-bold" style={{ color: "#54BAB9" }}>
                    About The Gazette
                  </h2>
                </div>

                <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                  <p className="text-xl">
                    The BM Gazette is a{" "}
                    <span className="font-semibold text-[#54BAB9]">vibrant student-led publication</span> that showcases
                    the voices, creativity, and perspectives of the school community.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl" style={{ backgroundColor: "#F7ECDE" }}>
                      <Calendar className="text-[#54BAB9] mb-3" size={24} />
                      <h4 className="font-semibold text-[#54BAB9] mb-2">First Edition</h4>
                      <p className="text-gray-600">
                        Academic Year 2023–2024 marked the beginning of this exciting initiative.
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl" style={{ backgroundColor: "#E9DAC1" }}>
                      <Star className="text-[#54BAB9] mb-3" size={24} />
                      <h4 className="font-semibold text-[#54BAB9] mb-2">Second Edition</h4>
                      <p className="text-gray-600">
                        Academic Year 2024–2025 continues our journey of creative expression.
                      </p>
                    </div>
                  </div>
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
                    {/* PDF Thumbnail */}
                    <div className="relative h-96 overflow-hidden bg-gradient-to-br from-[#E9DAC1] to-[#F7ECDE]">
                      {/* Actual PDF Thumbnail */}
                      <div className="relative w-full h-full p-4">
                        <div className="w-full h-full bg-white rounded-lg shadow-xl overflow-hidden">
                          {!thumbnailError ? (
                            <img
                              src={thumbnailUrl || "/placeholder.svg"}
                              alt="BM Gazette PDF Preview"
                              className="w-full h-full object-cover"
                              onError={() => setThumbnailError(true)}
                            />
                          ) : (
                            /* Fallback content */
                            <div className="w-full h-full flex items-center justify-center bg-white">
                              <div className="text-center p-8">
                                <BookOpen size={48} style={{ color: "#54BAB9" }} className="mx-auto mb-4" />
                                <h3 className="text-2xl font-bold mb-2" style={{ color: "#54BAB9" }}>
                                  BM Gazette
                                </h3>
                                <p className="text-gray-600">Edition 2024-2025</p>
                                <div
                                  className="mt-4 px-4 py-2 rounded-full text-sm font-medium"
                                  style={{ backgroundColor: "#F7ECDE", color: "#54BAB9" }}
                                >
                                  PDF Document
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Hover Overlay */}
                      <div
                        className={`absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
                      >
                        <div
                          className={`text-white text-center transform transition-transform duration-300 ${isHovered ? "scale-100" : "scale-90"}`}
                        >
                          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                            <Download size={32} />
                          </div>
                          <p className="font-semibold text-lg">Click to Download</p>
                          <p className="text-sm opacity-80">Latest Edition PDF</p>
                        </div>
                      </div>
                    </div>

                    {/* Download Button */}
                    <div className="p-6 bg-gradient-to-r from-white to-[#F7ECDE]/30">
                      <button
                        onClick={handleDownload}
                        className="w-full text-white font-bold py-4 rounded-2xl transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center gap-3 text-lg group focus:outline-none focus:ring-4 focus:ring-[#54BAB9]/20"
                        style={{ backgroundColor: "#54BAB9" }}
                      >
                        <Download size={24} className="group-hover:animate-bounce" />
                        Download Latest Edition
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Community Stats */}
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <div className="absolute -inset-8 bg-gradient-to-r from-[#9ED2C6] to-[#54BAB9] rounded-3xl opacity-20 blur-xl" />
            <div className="relative bg-gradient-to-r from-[#9ED2C6] to-[#54BAB9] p-12 rounded-3xl shadow-2xl text-white">
              <h2 className="text-4xl font-bold mb-8">Join Our Creative Community</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-black mb-3">2</div>
                  <div className="text-lg opacity-90">Editions Published</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-black mb-3">100+</div>
                  <div className="text-lg opacity-90">Student Contributors</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-black mb-3">∞</div>
                  <div className="text-lg opacity-90">Creative Possibilities</div>
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
