"use client"

import { useState } from "react"
import Image from "next/image"

export default function PDCommunity() {
  const [activeTab, setActiveTab] = useState("trainers")

  const trainers = [
    { name: "Ms. Sarasa Ashok", role: "Programme Leader", image: "/images/trainers/sarasa.jpg" },
    { name: "Ms. Aaliya Sultana R", role: "PDQ coordinator & Trainer", image: "/images/trainers/aaliya.jpg" },
    { name: "Ms. Anuradha", role: "Trainer", image: "/images/trainers/anuradha.jpg" },
    { name: "Ms. Anita", role: "Trainer", image: "/images/trainers/anita.jpg" },
    { name: "Ms. Sujatha Chandran", role: "Trainer and Reviewer", image: "/images/trainers/sujatha.jpg" },
    { name: "Ms. Akhila", role: "Trainer", image: "/images/trainers/akhila.jpg" },
    { name: "Ms. Vaishali", role: "Trainer", image: "/images/trainers/vaishali.jpg" },
    { name: "Ms. Srividya", role: "Trainer", image: "/images/trainers/srividya.jpg" },
    { name: "Ms. Radha", role: "Trainer and Reviewer", image: "/images/trainers/radha.jpg" },
    { name: "Ms. Wahidha", role: "Trainer and Reviewer", image: "/images/trainers/wahidha.jpg" },
  ]

  const testimonials = [
    {
      name: "Sripriya Krishnakumar",
      role: "Academic Coordinator – Elementary – Velammal Global",
      achievement: "Distinction holder",
      testimonial:
        "Amiable + approachable + facilitating a doable outlook throughout the program layout. Please indulge yourself and enrol into this course which will make you feel good to witness the progress within you as an educator. It an investment for yourself which will assist you in branching out and will mirror you as that shady tree that envelopes many underneath it. When we can, everyone can.",
    },
    {
      name: "Uma Prakash",
      role: "",
      achievement: "Distinction Holder",
      testimonial:
        "All the trainers provided me with several opportunities that encouraged me to discover my inner potential.",
    },
    {
      name: "Sandhya Sekhar",
      role: "Tutor",
      achievement: "Distinction holder",
      testimonial: "Experienced the joy of continual learning, Trainers and Mentors helped me to realize my potential.",
    },
    {
      name: "Padmalakshmi k",
      role: "",
      achievement: "Distinction holder",
      testimonial:
        "Had an open forum to approach and communicate. Our trainers and mentors provided guidance throughout.",
    },
    {
      name: "Muthulakshmi Srinivasan",
      role: "",
      achievement: "Distinction holder",
      testimonial:
        "We got a holistic learning and guidance from our mentors and trainers. We were made to think out of the box. This helped me to become a refined teacher.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80 lg:h-96 w-full overflow-hidden">
        <Image src="/placeholder.svg?height=400&width=1200" alt="PD Community" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">PD Community</h1>
            <p className="text-xl md:text-2xl font-light">
              Meet our expert trainers and hear inspiring success stories
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-2 flex">
            <button
              onClick={() => setActiveTab("trainers")}
              className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                activeTab === "trainers"
                  ? "bg-gradient-to-r from-[#54BAB9] to-[#9ED2C6] text-white shadow-lg transform scale-105"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Our Expert Trainers
            </button>
            <button
              onClick={() => setActiveTab("candidates")}
              className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                activeTab === "candidates"
                  ? "bg-gradient-to-r from-[#54BAB9] to-[#9ED2C6] text-white shadow-lg transform scale-105"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Success Stories
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "trainers" && (
          <div>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">PDQ Team - Our Expert Trainers</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet our Cambridge-certified professionals who bring years of experience and expertise to guide your
                learning journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {trainers.map((trainer, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-[#54BAB9] to-[#9ED2C6] rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={trainer.image || "/placeholder.svg"}
                      alt={trainer.name}
                      width={80}
                      height={80}
                      className="rounded-full object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-3 text-lg">{trainer.name}</h3>
                  <div className="bg-gradient-to-r from-[#E9DAC1] to-[#F7ECDE] rounded-lg px-4 py-2">
                    <p className="text-gray-700 text-sm font-medium">{trainer.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "candidates" && (
          <div>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Success Stories - Candidates Voice</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from our distinguished graduates who have achieved excellence in their professional development
                journey
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#9ED2C6]/20 to-[#54BAB9]/20 rounded-full -translate-y-16 translate-x-16"></div>

                  <div className="relative">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="font-bold text-xl text-gray-800 mb-1">{testimonial.name}</h3>
                        {testimonial.role && <p className="text-gray-600 text-sm mb-3">{testimonial.role}</p>}
                        <span className="inline-block bg-gradient-to-r from-[#54BAB9] to-[#9ED2C6] text-white text-xs px-3 py-1 rounded-full font-medium">
                          🏆 {testimonial.achievement}
                        </span>
                      </div>
                      <div className="text-4xl text-[#9ED2C6] ml-4">💬</div>
                    </div>

                    <blockquote className="text-gray-700 leading-relaxed italic text-lg relative">
                      <span className="text-4xl text-[#54BAB9] absolute -top-2 -left-2">"</span>
                      <span className="relative z-10">{testimonial.testimonial}</span>
                      <span className="text-4xl text-[#54BAB9] absolute -bottom-4 -right-2">"</span>
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
