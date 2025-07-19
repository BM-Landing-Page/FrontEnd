"use client"

export default function Curriculum() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner Section - Half Page */}
      <section className="relative h-96 md:h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero-curriculum-banner.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            Cambridge
            <span className="block" style={{ color: "#54BAB9" }}>
              Curriculum
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 leading-relaxed max-w-3xl mx-auto opacity-95">
            Preparing tomorrow's leaders through world-class education from ages 5 to 19
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-6 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
              style={{ backgroundColor: "#54BAB9", color: "white" }}
            >
              Explore Our Journey
            </button>
            <button className="px-6 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg border-2 border-white text-white hover:bg-white hover:text-gray-800">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Cambridge at a Glance */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Floating Bubbles - Only Light Beige and Soft Cream */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute w-20 h-20 rounded-full opacity-10 animate-bounce"
            style={{
              backgroundColor: "#F7ECDE",
              top: "15%",
              left: "10%",
              animationDelay: "2s",
              animationDuration: "8s",
            }}
          ></div>
          <div
            className="absolute w-16 h-16 rounded-full opacity-12 animate-bounce"
            style={{
              backgroundColor: "#E9DAC1",
              bottom: "20%",
              right: "15%",
              animationDelay: "1s",
              animationDuration: "7s",
            }}
          ></div>
          <div
            className="absolute w-14 h-14 rounded-full opacity-10 animate-bounce"
            style={{
              backgroundColor: "#F7ECDE",
              top: "60%",
              right: "25%",
              animationDelay: "3s",
              animationDuration: "9s",
            }}
          ></div>
          <div
            className="absolute w-12 h-12 rounded-full opacity-8 animate-bounce"
            style={{
              backgroundColor: "#F7ECDE",
              top: "5%",
              right: "5%",
              animationDelay: "4s",
              animationDuration: "11s",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#54BAB9" }}>
              Cambridge at a Glance
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The world's most trusted international education programme
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="text-4xl font-bold mb-2" style={{ color: "#54BAB9" }}>
                160+
              </div>
              <p className="text-gray-600 font-medium">Countries Worldwide</p>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="text-4xl font-bold mb-2" style={{ color: "#54BAB9" }}>
                10,000+
              </div>
              <p className="text-gray-600 font-medium">Schools Globally</p>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="text-4xl font-bold mb-2" style={{ color: "#54BAB9" }}>
                5-19
              </div>
              <p className="text-gray-600 font-medium">Age Range</p>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="text-4xl font-bold mb-2" style={{ color: "#54BAB9" }}>
                150+
              </div>
              <p className="text-gray-600 font-medium">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Journey Timeline */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{
          background: `linear-gradient(180deg, white 0%, #F7ECDE 100%)`,
        }}
      >
        {/* Light Bubbles for Learning Journey */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute w-18 h-18 rounded-full opacity-8 animate-bounce"
            style={{
              backgroundColor: "#E9DAC1",
              top: "25%",
              left: "80%",
              animationDelay: "1.5s",
              animationDuration: "8s",
            }}
          ></div>
          <div
            className="absolute w-22 h-22 rounded-full opacity-10 animate-bounce"
            style={{
              backgroundColor: "#F7ECDE",
              bottom: "30%",
              left: "15%",
              animationDelay: "0.5s",
              animationDuration: "9s",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#54BAB9" }}>
              Your Learning Journey
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Four seamless stages designed to unlock every student's potential
            </p>
          </div>

          {/* Timeline - Desktop Horizontal */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-4 gap-8">
              {/* Stage 1 */}
              <div className="text-center">
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-2xl shadow-lg animate-pulse"
                  style={{ backgroundColor: "#54BAB9", animationDuration: "3s" }}
                >
                  1
                </div>
                <div
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  style={{ borderLeft: "4px solid #9ED2C6" }}
                >
                  <h3 className="text-xl font-bold mb-3" style={{ color: "#54BAB9" }}>
                    Primary
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">Ages 5-11</p>
                  <p className="text-gray-700">Foundation learning with creativity and curiosity</p>
                </div>
              </div>

              {/* Stage 2 */}
              <div className="text-center">
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-2xl shadow-lg animate-pulse"
                  style={{ backgroundColor: "#54BAB9", animationDuration: "3s", animationDelay: "0.5s" }}
                >
                  2
                </div>
                <div
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  style={{ borderLeft: "4px solid #9ED2C6" }}
                >
                  <h3 className="text-xl font-bold mb-3" style={{ color: "#54BAB9" }}>
                    Lower Secondary
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">Ages 11-14</p>
                  <p className="text-gray-700">Building critical thinking and subject expertise</p>
                </div>
              </div>

              {/* Stage 3 */}
              <div className="text-center">
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-2xl shadow-lg animate-pulse"
                  style={{ backgroundColor: "#54BAB9", animationDuration: "3s", animationDelay: "1s" }}
                >
                  3
                </div>
                <div
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  style={{ borderLeft: "4px solid #9ED2C6" }}
                >
                  <h3 className="text-xl font-bold mb-3" style={{ color: "#54BAB9" }}>
                    Upper Secondary
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">Ages 14-16</p>
                  <p className="text-gray-700">IGCSE qualifications and specialized learning</p>
                </div>
              </div>

              {/* Stage 4 */}
              <div className="text-center">
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-2xl shadow-lg animate-pulse"
                  style={{ backgroundColor: "#54BAB9", animationDuration: "3s", animationDelay: "1.5s" }}
                >
                  4
                </div>
                <div
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  style={{ borderLeft: "4px solid #9ED2C6" }}
                >
                  <h3 className="text-xl font-bold mb-3" style={{ color: "#54BAB9" }}>
                    Advanced
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">Ages 16-19</p>
                  <p className="text-gray-700">A-Level preparation for university success</p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline - Mobile Vertical */}
          <div className="lg:hidden space-y-8">
            {[
              {
                num: 1,
                title: "Primary",
                age: "Ages 5-11",
                desc: "Foundation learning with creativity and curiosity",
              },
              {
                num: 2,
                title: "Lower Secondary",
                age: "Ages 11-14",
                desc: "Building critical thinking and subject expertise",
              },
              {
                num: 3,
                title: "Upper Secondary",
                age: "Ages 14-16",
                desc: "IGCSE qualifications and specialized learning",
              },
              {
                num: 4,
                title: "Advanced",
                age: "Ages 16-19",
                desc: "A-Level preparation for university success",
              },
            ].map((stage, index) => (
              <div key={stage.num} className="flex items-start space-x-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg flex-shrink-0 animate-pulse"
                  style={{
                    backgroundColor: "#54BAB9",
                    animationDuration: "3s",
                    animationDelay: `${index * 0.5}s`,
                  }}
                >
                  {stage.num}
                </div>
                <div
                  className="flex-1 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ borderLeft: "4px solid #9ED2C6" }}
                >
                  <h3 className="text-xl font-bold mb-2" style={{ color: "#54BAB9" }}>
                    {stage.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{stage.age}</p>
                  <p className="text-gray-700">{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Cambridge */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Light Floating Bubbles Only */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute w-24 h-24 rounded-full opacity-8 animate-bounce"
            style={{
              backgroundColor: "#F7ECDE",
              top: "10%",
              right: "10%",
              animationDelay: "2s",
              animationDuration: "10s",
            }}
          ></div>
          <div
            className="absolute w-16 h-16 rounded-full opacity-12 animate-bounce"
            style={{
              backgroundColor: "#E9DAC1",
              bottom: "15%",
              left: "20%",
              animationDelay: "1s",
              animationDuration: "8s",
            }}
          ></div>
          <div
            className="absolute w-20 h-20 rounded-full opacity-10 animate-bounce"
            style={{
              backgroundColor: "#F7ECDE",
              top: "50%",
              left: "70%",
              animationDelay: "3s",
              animationDuration: "9s",
            }}
          ></div>
          <div
            className="absolute w-14 h-14 rounded-full opacity-10 animate-bounce"
            style={{
              backgroundColor: "#E9DAC1",
              top: "5%",
              left: "5%",
              animationDelay: "2.8s",
              animationDuration: "7.8s",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#54BAB9" }}>
              Why Choose Cambridge?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover the advantages that make Cambridge the world's preferred curriculum
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div
                className="w-16 h-16 rounded-full mb-6 flex items-center justify-center"
                style={{ backgroundColor: "#9ED2C6" }}
              >
                <svg
                  className="w-8 h-8"
                  style={{ color: "#54BAB9" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: "#54BAB9" }}>
                Global Recognition
              </h3>
              <p className="text-gray-700">
                Accepted by top universities worldwide, opening doors to international opportunities and career paths.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div
                className="w-16 h-16 rounded-full mb-6 flex items-center justify-center"
                style={{ backgroundColor: "#9ED2C6" }}
              >
                <svg
                  className="w-8 h-8"
                  style={{ color: "#54BAB9" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: "#54BAB9" }}>
                Critical Thinking
              </h3>
              <p className="text-gray-700">
                Develops analytical skills and independent thinking, preparing students for complex real-world
                challenges.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div
                className="w-16 h-16 rounded-full mb-6 flex items-center justify-center"
                style={{ backgroundColor: "#9ED2C6" }}
              >
                <svg
                  className="w-8 h-8"
                  style={{ color: "#54BAB9" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: "#54BAB9" }}>
                Flexible Learning
              </h3>
              <p className="text-gray-700">
                Adaptable curriculum that accommodates different learning styles and individual student needs.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div
                className="w-16 h-16 rounded-full mb-6 flex items-center justify-center"
                style={{ backgroundColor: "#9ED2C6" }}
              >
                <svg
                  className="w-8 h-8"
                  style={{ color: "#54BAB9" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: "#54BAB9" }}>
                Proven Excellence
              </h3>
              <p className="text-gray-700">
                Over 150 years of educational innovation and continuous improvement in teaching methodologies.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div
                className="w-16 h-16 rounded-full mb-6 flex items-center justify-center"
                style={{ backgroundColor: "#9ED2C6" }}
              >
                <svg
                  className="w-8 h-8"
                  style={{ color: "#54BAB9" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: "#54BAB9" }}>
                Character Building
              </h3>
              <p className="text-gray-700">
                Emphasizes values, ethics, and personal development alongside academic achievement.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div
                className="w-16 h-16 rounded-full mb-6 flex items-center justify-center"
                style={{ backgroundColor: "#9ED2C6" }}
              >
                <svg
                  className="w-8 h-8"
                  style={{ color: "#54BAB9" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: "#54BAB9" }}>
                Quality Assurance
              </h3>
              <p className="text-gray-700">
                Rigorous assessment standards and continuous monitoring ensure consistent educational quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Lighter Background */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Light background pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `linear-gradient(135deg, #F7ECDE 0%, #E9DAC1 50%, #9ED2C6 100%)`,
          }}
        ></div>

        {/* Light Floating elements only */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute w-22 h-22 rounded-full opacity-10 animate-bounce"
            style={{
              backgroundColor: "#F7ECDE",
              top: "20%",
              left: "15%",
              animationDelay: "1s",
              animationDuration: "8s",
            }}
          ></div>
          <div
            className="absolute w-18 h-18 rounded-full opacity-12 animate-bounce"
            style={{
              backgroundColor: "#E9DAC1",
              bottom: "25%",
              right: "20%",
              animationDelay: "2.5s",
              animationDuration: "9s",
            }}
          ></div>
          <div
            className="absolute w-16 h-16 rounded-full opacity-9 animate-bounce"
            style={{
              backgroundColor: "#F7ECDE",
              top: "10%",
              right: "8%",
              animationDelay: "3.2s",
              animationDuration: "8.2s",
            }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#54BAB9" }}>
            Ready to Begin the Journey?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Join thousands of students worldwide who are already experiencing the Cambridge advantage at Budding Minds
            International School.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
              style={{ backgroundColor: "#54BAB9", color: "white" }}
            >
              Schedule a Visit
            </button>
            <button
              className="px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg border-2"
              style={{ borderColor: "#54BAB9", color: "#54BAB9" }}
            >
              Apply Now
            </button>
          </div>
        </div>

        {/* CSS Animation */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
        `}</style>
      </section>
    </main>
  )
}
