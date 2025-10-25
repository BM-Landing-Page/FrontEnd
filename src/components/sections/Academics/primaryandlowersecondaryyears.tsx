"use client"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import type React from "react"

export default function BMISPrimaryYears() {
  const heroImage = "/diverse-students-learning-together.jpg"

  const subjects = [
    { name: "English", grades: [1, 2, 3, "4,5"] },
    { name: "Mathematics", grades: [1, 2, 3, "4,5"] },
    { name: "EVS", grades: [1, 2, 3, "4,5"] },
    { name: "Language", grades: [1, 2, 3, "4,5"] },
    { name: "GS", grades: ["-", "-", 3, "4,5"] },
    { name: "ICT", grades: ["-", "-", 3, "4,5"] },
    { name: "Robotics", grades: ["-", "-", 3, "4,5"] },
    { name: "PE", grades: [1, 2, 3, "4,5"] },
  ]

  const activities = [{ name: "Dance" }, { name: "Music" }, { name: "Art & Craft" }, { name: "Karate" }]

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement
    target.src = "/diverse-students-learning.png"
  }

  return (
    <main className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-96 md:h-[500px] overflow-hidden bg-gradient-to-b from-[#E9DAC1] to-white">
        <div className="relative w-full h-full">
          <img
            src={heroImage || "/placeholder.svg"}
            alt="BMIS Primary Years Programme"
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 text-white text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">Primary Years Programme – The BM Way!</h1>
          <p className="text-lg md:text-2xl font-light text-balance">Rooted in Inquiry, Growing with Understanding</p>
        </div>
      </section>

      {/* Section 1: Introduction */}
      <section className="py-4 md:py-6 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#54BAB9] mb-3 text-center">
            A Global Framework with a Local Spirit
          </h2>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
            <div className="flex-1 space-y-3 text-gray-700 leading-relaxed">
              <p>
                At Budding Minds International School (BMIS), the Primary Years Programme (for ages 5–11) lays the
                foundation for confident, curious, and independent learners.
              </p>
              <p>
                Through a blend of the Cambridge Primary Programme (CPP) and BMIS's inquiry-based approach, children
                learn not through rote learning, but by questioning, exploring, and discovering concepts in meaningful
                ways.
              </p>
              <p>
                Our curriculum offers clear, progressive learning goals in English, Mathematics, and Science, aligned
                with global standards and adapted to the local context. This structured-yet-flexible model ensures every
                child grows with confidence — from foundational years through their transition to secondary school.
              </p>
            </div>
            <div className="flex-1 h-56 bg-gray-200 rounded-lg overflow-hidden shadow-md">
              <img
                src="/global-framework-education.jpg"
                alt="Global Framework with Local Spirit"
                className="w-full h-full object-cover"
                onError={handleImageError}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Active Learning */}
      <section className="py-4 md:py-6 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#54BAB9] mb-1 text-center">Active Learning Approach</h2>
          <p className="text-base md:text-lg font-semibold text-[#9ED2C6] text-center mb-4">
            Learning Through Inquiry & Active Engagement
          </p>
          <div className="flex flex-col md:flex-row-reverse gap-4 md:gap-6 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4 text-center md:text-left">
                At BMIS, learning is never passive. Our inquiry-based classrooms encourage children to:
              </p>
              <ul className="space-y-2 max-w-2xl mb-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#54BAB9] font-bold mt-1">•</span>
                  <span className="text-gray-700">Investigate real-life challenges</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#54BAB9] font-bold mt-1">•</span>
                  <span className="text-gray-700">Collaborate through projects and discussions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#54BAB9] font-bold mt-1">•</span>
                  <span className="text-gray-700">Reflect and connect learning to life</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#54BAB9] font-bold mt-1">•</span>
                  <span className="text-gray-700">Actively engage through flipped classroom</span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-center md:text-left">
                This process nurtures critical thinking, creativity, collaboration, and self-direction — essential
                21st-century skills that prepare children for the future.
              </p>
            </div>
            <div className="flex-1 h-56 bg-gray-200 rounded-lg overflow-hidden shadow-md">
              <img
                src="/active-learning-inquiry-classroom.jpg"
                alt="Active Learning Approach"
                className="w-full h-full object-cover"
                onError={handleImageError}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Life Skills */}
      <section className="py-4 md:py-6 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#54BAB9] mb-1 text-center">Life Skills Sessions</h2>
          <p className="text-base md:text-lg font-semibold text-[#9ED2C6] text-center mb-4">Learning for Life</p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed mb-4 text-center md:text-left">
                Education at BMIS goes beyond academics. Our Life Skills Sessions help children build values,
                confidence, and social-emotional intelligence through interactive discussions and real-world scenarios.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-center md:text-left">
                Every term focuses on a unique theme that empowers learners to:
              </p>
              <ul className="space-y-2 max-w-2xl mb-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#54BAB9] font-bold mt-1">•</span>
                  <span className="text-gray-700">Understand themselves and others</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#54BAB9] font-bold mt-1">•</span>
                  <span className="text-gray-700">Develop empathy and emotional intelligence</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#54BAB9] font-bold mt-1">•</span>
                  <span className="text-gray-700">Communicate effectively</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#54BAB9] font-bold mt-1">•</span>
                  <span className="text-gray-700">Make responsible, thoughtful choices</span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-center md:text-left">
                These sessions shape resilient, compassionate individuals—ready for school and for life.
              </p>
            </div>
            <div className="flex-1 h-56 bg-gray-200 rounded-lg overflow-hidden shadow-md">
              <img
                src="/life-skills-emotional-intelligence.jpg"
                alt="Life Skills Sessions"
                className="w-full h-full object-cover"
                onError={handleImageError}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Literacy */}
      <section className="py-4 md:py-6 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#54BAB9] mb-1 text-center">Literacy</h2>
          <p className="text-base md:text-lg font-semibold text-[#9ED2C6] text-center mb-4">
            Learning Through Active Exploration
          </p>
          <div className="flex flex-col md:flex-row-reverse gap-4 md:gap-6 items-start mb-6">
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed mb-3 text-center md:text-left">
                Our Literacy Programme develops confident readers, writers, and communicators. Children engage in:
              </p>
              <ul className="space-y-2 max-w-2xl mb-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#54BAB9] font-bold mt-1">•</span>
                  <span className="text-gray-700">Role plays, interviews, story mapping, and reading circles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#54BAB9] font-bold mt-1">•</span>
                  <span className="text-gray-700">Creative writing and book reviews</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#54BAB9] font-bold mt-1">•</span>
                  <span className="text-gray-700">Discussions that connect language to real-world experiences</span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-center md:text-left">
                Through such active learning, literacy becomes fun, expressive, and purposeful.
              </p>
            </div>
            <div className="flex-1 h-56 bg-gray-200 rounded-lg overflow-hidden shadow-md">
              <img
                src="/literacy-reading-writing.jpg"
                alt="Literacy Programme"
                className="w-full h-full object-cover"
                onError={handleImageError}
              />
            </div>
          </div>

          {/* Jolly Phonics & Grammar Subsection */}
          <div className="pt-3">
            <h3 className="text-2xl md:text-3xl font-bold text-[#54BAB9] mb-1 text-center">
              Jolly Phonics & Jolly Grammar
            </h3>
            <p className="text-base font-semibold text-[#9ED2C6] text-center mb-3">Fun with Reading and Writing</p>
            <p className="text-gray-700 leading-relaxed text-center">
              Our Jolly Phonics and Grammar programmes bring energy and joy into literacy learning. Children master
              letter sounds, blending, sentence construction, and punctuation through multisensory, hands-on
              activities—growing into confident readers and articulate writers.
            </p>
          </div>

          {/* Bookvie Subsection */}
          <div className="pt-3">
            <h3 className="text-2xl md:text-3xl font-bold text-[#54BAB9] mb-1 text-center">Bookvie</h3>
            <p className="text-base font-semibold text-[#9ED2C6] text-center mb-3">Read it. Watch it. Live it!</p>
            <p className="text-gray-700 leading-relaxed text-center mb-3">
              BMIS's signature literacy initiative, Bookvie, turns reading into an adventure! Students read a book,
              watch its movie adaptation, and discuss connections between the two.
            </p>
            <p className="text-base font-semibold text-[#54BAB9] text-center mb-2">
              This immersive experience enhances:
            </p>
            <ul className="space-y-2 max-w-2xl mx-auto">
              <li className="flex items-start gap-3">
                <span className="text-[#54BAB9] font-bold mt-1">•</span>
                <span className="text-gray-700">Comprehension and critical analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#54BAB9] font-bold mt-1">•</span>
                <span className="text-gray-700">Text-to-screen comparison</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#54BAB9] font-bold mt-1">•</span>
                <span className="text-gray-700">Appreciation for storytelling and creative thinking</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 5: Numeracy */}
      <section className="py-4 md:py-6 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#54BAB9] mb-1 text-center">Numeracy</h2>
          <p className="text-base md:text-lg font-semibold text-[#9ED2C6] text-center mb-4">The ELPS Approach</p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed mb-4 text-center md:text-left">
                Our Numeracy curriculum helps children develop problem-solving and reasoning skills through the ELPS
                model which extends from Early years:
              </p>
              <div className="space-y-2 max-w-2xl mb-4">
                <div className="flex items-start gap-4">
                  <span className="text-[#54BAB9] font-bold text-lg">E</span>
                  <div>
                    <p className="font-semibold text-gray-800">Experience:</p>
                    <p className="text-gray-700">Hands-on learning through exploration</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#54BAB9] font-bold text-lg">L</span>
                  <div>
                    <p className="font-semibold text-gray-800">Language:</p>
                    <p className="text-gray-700">Express mathematical ideas</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#54BAB9] font-bold text-lg">P</span>
                  <div>
                    <p className="font-semibold text-gray-800">Pictorial:</p>
                    <p className="text-gray-700">Visualize and represent understanding</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#54BAB9] font-bold text-lg">S</span>
                  <div>
                    <p className="font-semibold text-gray-800">Symbol:</p>
                    <p className="text-gray-700">Apply learning using numbers</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-center md:text-left">
                With engaging resources like Jodo Gyan, Rangometry, and real-world activities, mathematics at BMIS
                becomes fun, meaningful, and confidence-building.
              </p>
            </div>
            <div className="flex-1 h-56 bg-gray-200 rounded-lg overflow-hidden shadow-md">
              <img
                src="/numeracy-mathematics-learning.jpg"
                alt="Numeracy ELPS Approach"
                className="w-full h-full object-cover"
                onError={handleImageError}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Science */}
      <section className="py-4 md:py-6 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#54BAB9] mb-1 text-center">
            Thematic Science Curriculum
          </h2>
          <p className="text-base md:text-lg font-semibold text-[#9ED2C6] text-center mb-4">
            Exploring the World Around Us
          </p>
          <div className="flex flex-col md:flex-row-reverse gap-4 md:gap-6 items-center">
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed text-center md:text-left">
                Science at BMIS inspires curiosity, discovery, and a lifelong love for exploration. Children explore
                Physics, Chemistry, and Biology through thematic units, experiments, and real-world
                observations—learning to ask questions, test hypotheses, and think critically.
              </p>
            </div>
            <div className="flex-1 h-56 bg-gray-200 rounded-lg overflow-hidden shadow-md">
              <img
                src="/science-experiments-discovery.jpg"
                alt="Thematic Science Curriculum"
                className="w-full h-full object-cover"
                onError={handleImageError}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Subjects Table */}
      <section className="py-4 md:py-6 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#54BAB9] mb-6 text-center">Subjects Offered at BMIS</h2>

          <div className="hidden md:block overflow-x-auto rounded-lg shadow">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-[#54BAB9] to-[#9ED2C6]">
                  <th className="px-8 py-4 text-left text-white text-sm font-bold">Grade</th>
                  {subjects.map((subject) => (
                    <th key={subject.name} className="px-6 py-4 text-center text-white text-sm font-bold">
                      {subject.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, "4,5"].map((grade, idx) => (
                  <tr key={grade} className={idx % 2 === 0 ? "bg-[#F7ECDE]" : "bg-white"}>
                    <td className="px-8 py-4 text-sm font-semibold text-[#54BAB9] border-b border-[#E9DAC1]">
                      {grade}
                    </td>
                    {subjects.map((subject) => (
                      <td key={`${grade}-${subject.name}`} className="px-6 py-4 text-center border-b border-[#E9DAC1]">
                        {subject.grades[idx] !== "-" ? (
                          <div className="flex items-center justify-center">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#54BAB9] to-[#9ED2C6] flex items-center justify-center shadow-md">
                              <span className="text-white text-xs font-bold">✓</span>
                            </div>
                          </div>
                        ) : (
                          <span className="text-gray-300 text-lg">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile card view */}
          <div className="md:hidden space-y-4">
            {[1, 2, 3, "4,5"].map((grade) => (
              <div key={grade} className="bg-white rounded-lg shadow p-4 border-l-4 border-[#54BAB9]">
                <h3 className="text-lg font-bold text-[#54BAB9] mb-4 text-center">Grade {grade}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {subjects.map((subject) => {
                    const gradeIdx = [1, 2, 3, "4,5"].indexOf(grade)
                    const isOffered = subject.grades[gradeIdx] !== "-"
                    return (
                      <div key={subject.name} className="text-center">
                        <p className="text-sm font-semibold text-gray-700 mb-2">{subject.name}</p>
                        {isOffered ? (
                          <div className="flex justify-center">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#54BAB9] to-[#9ED2C6] flex items-center justify-center shadow-md">
                              <span className="text-white text-xs font-bold">✓</span>
                            </div>
                          </div>
                        ) : (
                          <span className="text-gray-300 text-lg">—</span>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Co-Curriculars */}
      <section className="py-4 md:py-6 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#54BAB9] mb-4 text-center">Co-Curriculars (Specials)</h2>
          <div className="flex flex-col items-center">
            <p className="text-gray-700 text-center leading-relaxed mb-4">
              We ensure balanced, holistic growth through a variety of creative and physical pursuits:
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {activities.map((activity) => (
                <div
                  key={activity.name}
                  className="px-4 py-2 bg-[#54BAB9] text-white rounded-full text-sm font-semibold shadow-md hover:bg-[#9ED2C6] transition-colors"
                >
                  {activity.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Assessments */}
      <section className="py-4 md:py-6 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#54BAB9] mb-4 text-center">
            Assessments for Growth and Reflection
          </h2>
          <div className="flex flex-col md:flex-row-reverse gap-4 md:gap-6 items-center">
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed mb-3 text-center md:text-left">
                At BMIS, assessments are tools for growth, feedback and learning ownership. Up to Grade 4, children
                experience continuous assessment that values progress and reflection. Our continuous formative
                assessments track skills and understanding through:
              </p>
              <ul className="space-y-2 max-w-2xl mb-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#54BAB9] font-bold mt-1">•</span>
                  <span className="text-gray-700">Checklists and rubrics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#54BAB9] font-bold mt-1">•</span>
                  <span className="text-gray-700">Performance tasks and reflections</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#54BAB9] font-bold mt-1">•</span>
                  <span className="text-gray-700">Real-life projects</span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-center md:text-left">
                From Grade 5 onwards, they take unit tests and exams — gradually building confidence and readiness for
                secondary education.
              </p>
            </div>
            <div className="flex-1 h-56 bg-gray-200 rounded-lg overflow-hidden shadow-md">
              <img
                src="/assessment-growth-reflection.jpg"
                alt="Assessments for Growth"
                className="w-full h-full object-cover"
                onError={handleImageError}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: BMIS Advantage */}
      <section className="py-4 md:py-6 px-6 md:px-8 bg-gradient-to-r from-[#54BAB9] to-[#9ED2C6]">
        <div className="max-w-5xl mx-auto text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">The BMIS Primary Years Advantage</h2>
          <p className="text-base leading-relaxed mb-3 text-center">
            Our Primary Years Programme is designed to balance academic rigour with joyful exploration. It nurtures
            learners to become:
          </p>
          <ul className="space-y-2 max-w-2xl mx-auto mb-3">
            <li className="flex items-start gap-3">
              <span className="font-bold mt-1">•</span>
              <span>Curious and reflective thinkers</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold mt-1">•</span>
              <span>Confident communicators</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold mt-1">•</span>
              <span>Collaborative problem-solvers</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold mt-1">•</span>
              <span>Compassionate global citizens</span>
            </li>
          </ul>
          <p className="text-base leading-relaxed text-center">
            At BMIS, learning in the primary years is lively, meaningful, and full of purpose — preparing children not
            just for the next grade, but for the world beyond.
          </p>
        </div>
      </section>
      <div className="py-4 bg-white">
        <div className="flex justify-center">
          <Link href="/igcseandsenioryears" className="inline-block">
            <div className="flex items-center gap-2 bg-[#54BAB9] hover:bg-[#54BAB9]/90 text-white px-5 py-2 rounded-lg shadow-md transition-colors cursor-pointer text-sm">
              <div className="text-center">
                <div className="font-semibold">IGCSE and Senior Programs</div>
              </div>
              <ArrowRight className="w-3 h-3" />
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}
