import Image from "next/image"
import Link from "next/link"

export default function AboutTheAcademyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-64 md:h-80 lg:h-96 w-full overflow-hidden">
        <Image
          src="/images/abouttheacademy.jpg"
          alt="Budding Minds Professional Development Academy"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Professional Development & Research Academy
            </h1>
            <p className="text-xl md:text-2xl font-light">Where passionate educators meet purpose-driven research</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Introduction Section */}
        <div className="text-center mb-4">
          <div className="bg-white rounded-xl shadow-md p-5 max-w-4xl mx-auto">
            <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">About the Academy</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              At Budding Minds International School, we believe that excellence in education begins with empowered
              educators and insightful research.
            </p>
            <div className="bg-gradient-to-r from-[#54BAB9] to-[#9ED2C6] text-white rounded-lg p-2">
              <p className="text-sm font-medium">🏆 Proud to be recognised as one of the Hodder Research Schools</p>
            </div>
          </div>
        </div>

        {/* Vision Mission Values - Simplified */}
        <div className="grid lg:grid-cols-3 gap-3 mb-6">
          <div className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition-shadow duration-300">
            <div className="w-10 h-10 bg-[#54BAB9] rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-lg">🎯</span>
            </div>
            <h3 className="text-base font-bold mb-2 text-gray-800">Our Vision</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              To be a catalyst for innovation in education through transformative teacher training and cutting-edge
              research.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition-shadow duration-300">
            <div className="w-10 h-10 bg-[#9ED2C6] rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-lg">🚀</span>
            </div>
            <h3 className="text-base font-bold mb-2 text-gray-800">Our Mission</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              To build a thriving learning community dedicated to improving education through evidence-based strategies.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition-shadow duration-300">
            <div className="w-10 h-10 bg-[#E9DAC1] rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-lg">⭐</span>
            </div>
            <h3 className="text-base font-bold mb-2 text-gray-800">Our Values</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Excellence, Innovation, Collaboration, Integrity, Lifelong Learning, and Inclusivity.
            </p>
          </div>
        </div>

        {/* What We Offer - Simplified */}
        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-bold text-center text-gray-800 mb-4">What We Offer</h2>
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-[#54BAB9] rounded-lg flex items-center justify-center mr-2">
                  <span className="text-white text-sm">🎓</span>
                </div>
                <h3 className="text-base font-bold text-gray-800">Cambridge PDQs</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Accredited centre for Cambridge International Certificate and Diploma in Teaching & Learning
              </p>
              <div className="space-y-1">
                <div className="flex items-center text-gray-600 text-sm">
                  <span className="w-1.5 h-1.5 bg-[#9ED2C6] rounded-full mr-2"></span>
                  Research-informed training
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <span className="w-1.5 h-1.5 bg-[#9ED2C6] rounded-full mr-2"></span>
                  International certification
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <span className="w-1.5 h-1.5 bg-[#9ED2C6] rounded-full mr-2"></span>
                  Mentoring support
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-[#E9DAC1] rounded-lg flex items-center justify-center mr-2">
                  <span className="text-gray-800 text-sm">📚</span>
                </div>
                <h3 className="text-base font-bold text-gray-800">Workshops & Research</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Comprehensive training programs and cutting-edge educational research
              </p>
              <div className="space-y-1">
                <div className="flex items-center text-gray-600 text-sm">
                  <span className="w-1.5 h-1.5 bg-[#54BAB9] rounded-full mr-2"></span>
                  Differentiated instruction
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <span className="w-1.5 h-1.5 bg-[#54BAB9] rounded-full mr-2"></span>
                  Assessment strategies
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <span className="w-1.5 h-1.5 bg-[#54BAB9] rounded-full mr-2"></span>
                  Research collaboration
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section - Reorganized */}
        <div className="bg-gradient-to-r from-[#54BAB9] to-[#9ED2C6] rounded-lg shadow-md p-4 text-white mb-6">
          <div className="text-center mb-3">
            <h3 className="text-lg font-bold mb-1">Ready to Join Our Community?</h3>
            <p className="text-sm opacity-90">Get in touch with us to start your professional development journey</p>
          </div>

          {/* Contact Information */}
          <div className="mb-3">
            <h4 className="text-sm font-semibold text-center mb-2">Contact Information</h4>
            <div className="grid md:grid-cols-3 gap-2 max-w-4xl mx-auto">
              <div className="bg-white/20 rounded-lg p-2 backdrop-blur-sm text-center">
                <div className="text-lg mb-0.5">📧</div>
                <p className="font-semibold text-sm mb-0.5">Email</p>
                <p className="text-xs opacity-90 break-all">pdq_cidtl@buddingminds.net</p>
              </div>
              <div className="bg-white/20 rounded-lg p-2 backdrop-blur-sm text-center">
                <div className="text-lg mb-0.5">📞</div>
                <p className="font-semibold text-sm mb-0.5">Phone</p>
                <p className="text-xs opacity-90">+91-98403 91815</p>
              </div>
              <div className="bg-white/20 rounded-lg p-2 backdrop-blur-sm text-center">
                <div className="text-lg mb-0.5">📍</div>
                <p className="font-semibold text-sm mb-0.5">Location</p>
                <p className="text-xs opacity-90">Chennai, India</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center">
            <h4 className="text-sm font-semibold mb-1">Follow Us</h4>
            <div className="flex justify-center">
              <div className="bg-white/20 rounded-lg p-2 backdrop-blur-sm">
                <div className="flex items-center justify-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M7.5 2.25h9A5.25 5.25 0 0121.75 7.5v9a5.25 5.25 0 01-5.25 5.25h-9A5.25 5.25 0 012.25 16.5v-9A5.25 5.25 0 017.5 2.25zm10.688 2.563a.75.75 0 10-1.06 1.06.75.75 0 001.06-1.06zM12 7.875a4.125 4.125 0 100 8.25 4.125 4.125 0 000-8.25zM8.625 12a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-sm">Instagram</p>
                    <a
                      href="https://www.instagram.com/buddingmindspdq/?igsh=MTl4eHRiNWhxc2M3NQ%3D%3D&utm_source=qr#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs opacity-90 hover:underline hover:opacity-100 transition-opacity"
                    >
                      @buddingmindspdq
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Button - Centered */}
        <div className="py-2 bg-white">
          <div className="flex justify-center">
            <Link href="/pedagogyandmodule" className="inline-block">
              <div className="flex items-center gap-2 bg-[#54BAB9] hover:bg-[#54BAB9]/90 text-white px-4 py-2 rounded-lg shadow-md transition-colors cursor-pointer">
                <div className="text-center">
                  <div className="font-semibold text-sm">Pedagogy and Modules</div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-4 h-4"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
