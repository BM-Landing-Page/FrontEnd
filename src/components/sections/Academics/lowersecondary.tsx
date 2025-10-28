export default function LowerSecondary() {
  return (
    <div className="w-full bg-white px-4 md:px-8 py-8 space-y-8">
      {/* Section 1: Cambridge Secondary - Image Right */}
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-[#54BAB9] mb-4">Cambridge Secondary programme</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Cambridge Lower Secondary programme provides excellent preparation for Cambridge IGCSE (Grade 9 and 10).
              Cambridge Lower Secondary is typically for learners aged 11 to 14 years. It gives schools a solid
              framework for developing skills and understanding in English, English as a second language, Mathematics
              and Science. It has been fully adopted at BMIS and gives our students excellent preparation for High
              school.
            </p>
          </div>
        </div>
        <div className="flex-1 h-64 md:h-80 bg-[#F7ECDE] rounded-lg flex items-center justify-center">
          <img
            src="/cambridge-secondary-programme.jpg"
            alt="Cambridge Secondary"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Section 2: External Benchmark - Image Left */}
      <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-[#54BAB9] mb-4">External Benchmark</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Cambridge Secondary 1 includes two testing options: Cambridge Secondary 1 Progression Tests and Cambridge
              Secondary 1 Checkpoint. These assessments provide an international benchmark of student achievement,
              helping teachers to identify learners' strengths and weaknesses and give advice on progression routes.
            </p>
          </div>
        </div>
        <div className="flex-1 h-64 md:h-80 bg-[#F7ECDE] rounded-lg flex items-center justify-center">
          <img
            src="/external-benchmark-assessment-testing.jpg"
            alt="External Benchmark"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Section 3: Global Perspective Projects - Image Right */}
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-[#54BAB9] mb-4">Global Perspective Projects</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Our students begin to get involved into Vision-focused skill building and problem solving opportunities
              right from lower Secondary Classes. Students are guided to identify social/civic issues around them,
              identify and understand the problem scenario, suggest possible solutions and brain storm on effective
              practices to sustain the changes.
            </p>
          </div>
        </div>
        <div className="flex-1 h-64 md:h-80 bg-[#F7ECDE] rounded-lg flex items-center justify-center">
          <img
            src="/global-perspective-projects-problem-solving.jpg"
            alt="Global Perspective"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Section 4: Subjects Offered - NO IMAGE */}
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
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">Robotics</th>
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

      {/* Section 5: Clubs & Specials - NO IMAGE */}
      <div className="py-4">
        <h2 className="text-3xl font-bold text-[#54BAB9] mb-6">Clubs & Specials - Gr. 6 to 8</h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-[#9ED2C6] mb-4">Specials Offered:</h3>
          <div className="flex flex-wrap gap-3">
            {["Karate", "Silambam", "Theatre", "Western dance", "Western Music", "Cookery"].map((special) => (
              <div key={special} className="px-6 py-3 bg-[#9ED2C6] text-white rounded-full font-semibold text-center">
                {special}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#9ED2C6] mb-4">Clubs Offered:</h3>
          <div className="flex flex-wrap gap-3">
            {["Debate", "Quiz", "Quanta", "Creative", "Archery", "Air-rifle shooting"].map((club) => (
              <div key={club} className="px-6 py-3 bg-[#54BAB9] text-white rounded-full font-semibold text-center">
                {club}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
