import Image from "next/image"

export default function AboutTheAcademy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80 lg:h-96 w-full overflow-hidden">
        <Image
          src="/placeholder.svg?height=400&width=1200"
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Introduction Section */}
        <div className="text-center mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">About the Academy</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              At Budding Minds International School, we believe that excellence in education begins with empowered
              educators and insightful research.
            </p>
            <div className="bg-gradient-to-r from-[#54BAB9] to-[#9ED2C6] text-white rounded-xl p-6">
              <p className="text-lg font-medium">🏆 Proud to be recognised as one of the Hodder Research Schools</p>
            </div>
          </div>
        </div>

        {/* Vision Mission Values - Simplified */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#54BAB9] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be a catalyst for innovation in education through transformative teacher training and cutting-edge
              research.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#9ED2C6] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To build a thriving learning community dedicated to improving education through evidence-based strategies.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#E9DAC1] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">⭐</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Values</h3>
            <p className="text-gray-600 leading-relaxed">
              Excellence, Innovation, Collaboration, Integrity, Lifelong Learning, and Inclusivity.
            </p>
          </div>
        </div>

        {/* What We Offer - Simplified */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">What We Offer</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#54BAB9] rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🎓</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Cambridge PDQs</h3>
              </div>
              <p className="text-gray-600 text-lg mb-6">
                Accredited centre for Cambridge International Certificate and Diploma in Teaching & Learning
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-[#9ED2C6] rounded-full mr-3"></span>
                  Research-informed training
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-[#9ED2C6] rounded-full mr-3"></span>
                  International certification
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-[#9ED2C6] rounded-full mr-3"></span>
                  Mentoring support
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#E9DAC1] rounded-lg flex items-center justify-center mr-4">
                  <span className="text-gray-800 text-xl">📚</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Workshops & Research</h3>
              </div>
              <p className="text-gray-600 text-lg mb-6">
                Comprehensive training programs and cutting-edge educational research
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-[#54BAB9] rounded-full mr-3"></span>
                  Differentiated instruction
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-[#54BAB9] rounded-full mr-3"></span>
                  Assessment strategies
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-[#54BAB9] rounded-full mr-3"></span>
                  Research collaboration
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-[#54BAB9] to-[#9ED2C6] rounded-2xl shadow-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-8">Ready to Join Our Community?</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-2xl mb-3">📧</div>
              <p className="font-semibold">Email</p>
              <p className="text-sm opacity-90">pdq_cidtl@buddingminds.net</p>
            </div>
            <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-2xl mb-3">📞</div>
              <p className="font-semibold">Phone</p>
              <p className="text-sm opacity-90">+91-98403 91815</p>
            </div>
            <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-2xl mb-3">📍</div>
              <p className="font-semibold">Location</p>
              <p className="text-sm opacity-90">Chennai</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
