import Image from "next/image"

export default function PedagogyAndModules() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80 lg:h-96 w-full overflow-hidden">
        <Image src="/images/pedagogymodules.jpg" alt="Pedagogy and Modules" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Pedagogy & Modules</h1>
            <p className="text-xl md:text-2xl font-light">
              Cambridge International Certificate & Diploma in Teaching & Learning
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="text-center mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-12 max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-[#54BAB9] to-[#9ED2C6] rounded-full flex items-center justify-center mr-6">
                <span className="text-3xl text-white">🎓</span>
              </div>
              <div className="text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Cambridge PDQs</h2>
                <p className="text-lg text-gray-600">Internationally Recognized Excellence</p>
              </div>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Cambridge PDQs are internationally recognized as a mark of excellence, bringing accreditation to teachers,
              trainers, leaders, and their organizations through dynamic professional development programs.
            </p>
          </div>
        </div>

        {/* Learning Outcomes */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">What You'll Achieve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-[#54BAB9] to-[#9ED2C6] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🧠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Professional Thinking</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Develop advanced professional thinking and practice methodologies
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-[#9ED2C6] to-[#E9DAC1] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-gray-800">📈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Quality Enhancement</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Enhance the quality of teaching and learning experiences
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-[#E9DAC1] to-[#F7ECDE] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-gray-800">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Core Principles</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Master the fundamental principles of learning and teaching
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-[#F7ECDE] to-[#54BAB9] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Critical Analysis</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Develop critical reflection skills for continuous improvement
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:col-span-2 lg:col-span-2">
              <div className="w-16 h-16 bg-gradient-to-r from-[#9ED2C6] to-[#54BAB9] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">💭</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Reflective Practice</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Build comprehensive reflective practice skills for lifelong professional development
              </p>
            </div>
          </div>
        </div>

        {/* Evidence Framework */}
        <div className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Assessment Framework</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-[#54BAB9] to-[#9ED2C6] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl text-white">📚</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Learning</h3>
                <p className="text-gray-600 leading-relaxed">
                  Demonstrate acquired knowledge, skills and understanding through comprehensive portfolios
                </p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-[#9ED2C6] to-[#E9DAC1] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl text-gray-800">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Practice</h3>
                <p className="text-gray-600 leading-relaxed">
                  Apply learning through actual teaching practice and classroom implementation
                </p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-[#E9DAC1] to-[#F7ECDE] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl text-gray-800">🔄</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Reflection</h3>
                <p className="text-gray-600 leading-relaxed">
                  Analyze, synthesize and evaluate experiences for future professional growth
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-[#54BAB9] rounded-full flex items-center justify-center mr-6">
                <span className="text-2xl text-white">🌍</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Global Recognition</h3>
                <p className="text-gray-600">FHEQ Level 4 Benchmarked</p>
              </div>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Enhance your knowledge and pedagogy to teach nationally and internationally. This generic qualification
              focuses on the teaching-learning process across all disciplines and age groups.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-[#9ED2C6] rounded-full flex items-center justify-center mr-6">
                <span className="text-2xl text-gray-800">🚀</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Career Growth</h3>
                <p className="text-gray-600">Enhanced Opportunities</p>
              </div>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Open pathways to better career prospects and further education opportunities. Perfect for educators
              seeking to advance their professional standing.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#54BAB9] via-[#9ED2C6] to-[#E9DAC1] rounded-2xl shadow-2xl p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Become Cambridge Certified?</h2>
            <p className="text-xl text-white/90 mb-8">
              Join passionate educators worldwide in this transformative professional development journey
            </p>
            <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm inline-block">
              <p className="text-white font-semibold text-lg">
                🎓 Internationally Recognized • 🌟 Career Enhancement • 🔬 Research-Based
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
