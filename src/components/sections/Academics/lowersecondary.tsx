"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function LowerSecondary() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const carouselImages = [
    {
      src: "/lower-secondary-classroom-learning.jpg",
      alt: "Lower Secondary Classroom",
    },
    {
      src: "/students-engaged-in-learning-activities.jpg",
      alt: "Student Learning Activities",
    },
    {
      src: "/classroom-collaboration-and-teamwork.jpg",
      alt: "Student Collaboration",
    },
    {
      src: "/school-campus-and-facilities.jpg",
      alt: "School Campus",
    },
  ]

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="min-h-screen bg-white text-[#1e1e1e] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto p-8 md:p-12 border border-[#f5e8d9] bg-white shadow-md rounded-xl space-y-8">
          <div className="space-y-8">
            {/* Section 1: Cambridge Secondary */}
            <div className="py-4">
              <h2 className="text-3xl font-bold text-[#54BAB9] mb-4">Cambridge Secondary programme</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Cambridge Lower Secondary programme provides excellent preparation for Cambridge IGCSE (Grade 9 and
                  10). Cambridge Lower Secondary is typically for learners aged 11 to 14 years. It gives schools a solid
                  framework for developing skills and understanding in English, English as a second language,
                  Mathematics and Science. It has been fully adopted at BMIS and gives our students excellent
                  preparation for High school.
                </p>
              </div>
            </div>

            {/* Section 2: External Benchmark */}
            <div className="py-4">
              <h2 className="text-3xl font-bold text-[#54BAB9] mb-4">External Benchmark</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Cambridge Secondary 1 includes two testing options: Cambridge Secondary 1 Progression Tests and
                  Cambridge Secondary 1 Checkpoint. These assessments provide an international benchmark of student
                  achievement, helping teachers to identify learners' strengths and weaknesses and give advice on
                  progression routes.
                </p>
              </div>
            </div>

            {/* Section 3: Global Perspective Projects */}
            <div className="py-4">
              <h2 className="text-3xl font-bold text-[#54BAB9] mb-4">Global Perspective Projects</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Our students begin to get involved into Vision-focused skill building and problem solving
                  opportunities right from lower Secondary Classes. Students are guided to identify social/civic issues
                  around them, identify and understand the problem scenario, suggest possible solutions and brain storm
                  on effective practices to sustain the changes.
                </p>
              </div>
            </div>

            {/* Section 4: Subjects Offered */}
            <div className="py-4">
              <h2 className="text-3xl font-bold text-[#54BAB9] mb-4">Subjects offered</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#E9DAC1]">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">Grade</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">Eng</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">Math</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">EVS</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">Lang</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">GS</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">ICT</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">
                        Robotics
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">PE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white hover:bg-[#F7ECDE]">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">6,7,8</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                      <td className="border border-gray-300 px-4 py-3">Tam / Hindi / French / German</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 5: Clubs & Specials */}
            <div className="py-4">
              <h2 className="text-3xl font-bold text-[#54BAB9] mb-6">Clubs & Specials - Gr. 6 to 8</h2>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[#9ED2C6] mb-4">Specials Offered:</h3>
                <div className="flex flex-wrap gap-3">
                  {["Karate", "Silambam", "Theatre", "Western dance", "Western Music", "Cookery"].map((special) => (
                    <div
                      key={special}
                      className="px-6 py-3 bg-[#9ED2C6] text-white rounded-full font-semibold text-center"
                    >
                      {special}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#9ED2C6] mb-4">Clubs Offered:</h3>
                <div className="flex flex-wrap gap-3">
                  {["Debate", "Quiz", "Quanta", "Creative", "Archery", "Air-rifle shooting"].map((club) => (
                    <div
                      key={club}
                      className="px-6 py-3 bg-[#54BAB9] text-white rounded-full font-semibold text-center"
                    >
                      {club}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-[#f5e8d9]">
              <h2 className="text-3xl font-bold text-[#54BAB9] mb-8 text-center">Lower Secondary Gallery</h2>
              <div className="relative flex items-center justify-center gap-4">
                {/* Previous Button */}
                <button
                  onClick={handlePrevious}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#54BAB9] text-white hover:bg-[#3a9a99] transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>

                {/* Image Container */}
                <div className="flex-1 h-80 bg-[#F7ECDE] rounded-lg overflow-hidden flex items-center justify-center max-w-2xl">
                  <img
                    src={carouselImages[currentIndex].src || "/placeholder.svg"}
                    alt={carouselImages[currentIndex].alt}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#54BAB9] text-white hover:bg-[#3a9a99] transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? "bg-[#54BAB9]" : "bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
