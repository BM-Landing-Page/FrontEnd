import Link from "next/link"

import { GraduationCap, Users, BookOpen, Award, Globe, TrendingUp, Target, Star, ArrowRight } from "lucide-react"

export default function IGCSEAndSeniorYears() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner - Image Only */}
      <section className="relative h-[75vh] overflow-hidden">
        <img
          src="/images/igcse.jpg"
          alt="Cambridge IGCSE at BMIS - Students in modern academic environment"
          className="w-full h-full object-top object-cover"
        />
      </section>
      <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
        {/* Section 1: Introduction - Enhanced with stats */}
        <section className="relative">
          <div className="rounded-2xl p-3 md:p-4 relative overflow-hidden" style={{ backgroundColor: "#F7ECDE" }}>
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
              <BookOpen className="w-full h-full" />
            </div>
            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="text-center space-y-2">
                <div className="inline-flex items-center px-3 py-2 bg-white rounded-full shadow-sm">
                  <Star className="w-4 h-4 mr-2 text-yellow-500" />
                  <span className="font-semibold text-gray-800 text-xs">Global Academic Excellence</span>
                </div>
                <h1 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight mb-1">
                  Cambridge IGCSE & A-Levels
                </h1>
                <p className="text-sm md:text-base text-gray-700 max-w-2xl mx-auto">
                  Rigorous international qualifications recognized worldwide, preparing students for university and
                  beyond
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 py-4 mt-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900">95%</div>
                  <p className="text-xs text-gray-600">Pass Rate</p>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900">50+</div>
                  <p className="text-xs text-gray-600">Subjects</p>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900">180+</div>
                  <p className="text-xs text-gray-600">Countries</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 2: Career Guidance Conference - Enhanced with better visual flow */}
        <section className="space-y-6">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-teal-50 rounded-full">
              <Target className="w-5 h-5 mr-2 text-teal-600" />
              <span className="font-semibold text-gray-800 text-sm">Personalized Guidance</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Career Guidance Conference</h2>
            <p className="text-base text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Our students go through a meaningful subject selection process during the IGCSE stage. This is supported
              by our structured 4-step Career Guidance process that balances student interests with parent input and
              teacher expertise.
            </p>
          </div>
          <div className="relative">
            {/* Connection lines for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent transform -translate-y-1/2"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="group relative">
                <div
                  className="rounded-2xl p-5 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden"
                  style={{ backgroundColor: "#F7ECDE" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <div className="relative z-10">
                    <div
                      className="w-14 h-14 mx-auto mb-3 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg transform transition-transform group-hover:rotate-12"
                      style={{ backgroundColor: "#54BAB9" }}
                    >
                      1
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 text-sm">Student Survey</h3>
                    <p className="text-gray-700 text-xs">
                      Captures individual interests, strengths, and career aspirations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative">
                <div
                  className="rounded-2xl p-5 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden"
                  style={{ backgroundColor: "#E9DAC1" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <div className="relative z-10">
                    <div
                      className="w-14 h-14 mx-auto mb-3 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg transform transition-transform group-hover:rotate-12"
                      style={{ backgroundColor: "#54BAB9" }}
                    >
                      2
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 text-sm">Parent Preferences</h3>
                    <p className="text-gray-700 text-xs">Parents select preferred subjects from the list offered.</p>
                  </div>
                </div>
              </div>
              <div className="group relative">
                <div
                  className="rounded-2xl p-5 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden"
                  style={{ backgroundColor: "#9ED2C6" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <div className="relative z-10">
                    <div
                      className="w-14 h-14 mx-auto mb-3 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg transform transition-transform group-hover:rotate-12"
                      style={{ backgroundColor: "#54BAB9" }}
                    >
                      3
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 text-sm">Teacher Recommendations</h3>
                    <p className="text-gray-700 text-xs">
                      Teachers suggest suitable subjects, considering all stakeholders.
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative">
                <div
                  className="rounded-2xl p-5 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden"
                  style={{ backgroundColor: "#54BAB9" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <div className="relative z-10">
                    <div
                      className="w-14 h-14 mx-auto mb-3 rounded-full flex items-center justify-center font-bold text-lg shadow-lg transform transition-transform group-hover:rotate-12 bg-white"
                      style={{ color: "#54BAB9" }}
                    >
                      4
                    </div>
                    <h3 className="font-bold text-white mb-2 text-sm">Parent & Student Conference</h3>
                    <p className="text-white opacity-90 text-xs">
                      A final collaborative meeting to confirm subject choices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 3: IGCSE Curriculum - Enhanced table design */}
        <section className="relative">
          <div className="rounded-3xl p-6 md:p-8 relative overflow-hidden" style={{ backgroundColor: "#E9DAC1" }}>
            <div className="absolute top-0 left-0 w-96 h-96 opacity-5">
              <BookOpen className="w-full h-full transform -rotate-12" />
            </div>
            <div className="relative z-10 space-y-6">
              <div className="text-center space-y-3">
                <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-sm">
                  <BookOpen className="w-5 h-5 mr-2 text-teal-600" />
                  <span className="font-semibold text-gray-800 text-sm">Comprehensive Curriculum</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">IGCSE Curriculum at BMIS</h2>
                <p className="text-base text-gray-700 leading-relaxed max-w-4xl mx-auto">
                  Students choose from a balanced range of subjects spanning five core groups defined by Cambridge.
                  Minimum 5 subjects required (excluding Global Perspectives).
                </p>
              </div>
              <div className="overflow-x-auto">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr style={{ background: "linear-gradient(135deg, #54BAB9 0%, #9ED2C6 100%)" }}>
                        <th className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">
                          Group
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">
                          Subject Group
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">
                          Subjects Offered
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          group: "Group I",
                          category: "Languages",
                          subjects: "English, French, Hindi, Tamil, German",
                        },
                        {
                          group: "Group II",
                          category: "Humanities & Social Sciences",
                          subjects: "Environmental Management, Sociology, Economics",
                        },
                        {
                          group: "Group III",
                          category: "Sciences",
                          subjects: "Physics, Chemistry, Biology",
                        },
                        {
                          group: "Group IV",
                          category: "Mathematics",
                          subjects: "Mathematics",
                        },
                        {
                          group: "Group V",
                          category: "Creative & Professional",
                          subjects: "Computer Science",
                        },
                      ].map((row, index) => (
                        <tr
                          key={index}
                          className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-blue-50 transition-colors duration-200`}
                        >
                          <td className="px-4 py-3 text-xs font-bold text-gray-900">{row.group}</td>
                          <td className="px-4 py-3 text-xs font-semibold text-gray-700">{row.category}</td>
                          <td className="px-4 py-3 text-xs text-gray-700">{row.subjects}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 4: Cambridge ICE Award - Enhanced with better visual hierarchy */}
        <section className="relative">
          <div className="rounded-3xl p-6 md:p-8 relative overflow-hidden" style={{ backgroundColor: "#9ED2C6" }}>
            <div className="absolute bottom-0 right-0 w-80 h-80 opacity-5">
              <Award className="w-full h-full" />
            </div>
            <div className="relative z-10 space-y-6">
              <div className="text-center space-y-3">
                <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-sm">
                  <Award className="w-5 h-5 mr-2 text-yellow-600" />
                  <span className="font-semibold text-gray-800 text-sm">Prestigious Recognition</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Cambridge ICE Award</h2>
              </div>
              <div className="max-w-5xl mx-auto">
                <div className="bg-white rounded-2xl p-6 shadow-xl mb-4">
                  <p className="text-base text-gray-700 leading-relaxed text-center mb-4">
                    The Cambridge International Certificate of Education (ICE) is a prestigious group award for students
                    who undertake a broad curriculum. To qualify, a student must pass at least seven IGCSE subjects,
                    including:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center p-3 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl">
                      <div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: "#54BAB9" }}></div>
                      <span className="font-semibold text-gray-900 text-sm">Two languages</span>
                    </div>
                    <div className="flex items-center p-3 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl">
                      <div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: "#54BAB9" }}></div>
                      <span className="font-semibold text-gray-900 text-sm">
                        One subject from each of the five groups
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-2xl border-4" style={{ borderColor: "#54BAB9" }}>
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Compulsory Subjects</h3>
                    <p className="text-gray-600 text-xs">Required for all BMIS IGCSE students</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-3">
                    <div
                      className="text-center p-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-200"
                      style={{ backgroundColor: "#F7ECDE" }}
                    >
                      <div
                        className="w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "#54BAB9" }}
                      >
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <div className="font-bold text-gray-900 text-sm">English</div>
                    </div>
                    <div
                      className="text-center p-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-200"
                      style={{ backgroundColor: "#F7ECDE" }}
                    >
                      <div
                        className="w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "#54BAB9" }}
                      >
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div className="font-bold text-gray-900 text-sm">Second Language</div>
                      <div className="text-xs text-gray-600 mt-1">(French / Hindi / Tamil)</div>
                    </div>
                    <div
                      className="text-center p-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-200"
                      style={{ backgroundColor: "#F7ECDE" }}
                    >
                      <div
                        className="w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "#54BAB9" }}
                      >
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div className="font-bold text-gray-900 text-sm">Mathematics</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 5: Global Perspectives - Enhanced with visual elements */}
        <section className="relative">
          <div className="rounded-3xl p-6 md:p-8 relative overflow-hidden" style={{ backgroundColor: "#F7ECDE" }}>
            <div className="absolute top-0 left-0 w-72 h-72 opacity-5">
              <Users className="w-full h-full" />
            </div>
            <div className="relative z-10 max-w-5xl mx-auto">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-sm">
                  <Globe className="w-5 h-5 mr-2 text-green-600" />
                  <span className="font-semibold text-gray-800 text-sm">Global Leadership</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Global Perspectives
                  <span className="block text-lg md:text-xl font-light text-gray-600 mt-2">
                    Student Leadership Programme
                  </span>
                </h2>
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <div className="space-y-4">
                    <p className="text-base text-gray-700 leading-relaxed">
                      Cambridge IGCSE Global Perspectives is a modern, skills-based course that extends beyond
                      traditional subjects. It develops critical thinking, communication, research, and collaboration
                      skills.
                    </p>
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                    <p className="text-base text-gray-700 leading-relaxed">
                      At BMIS, this course is integrated as part of the Student Leadership Programme (SLP) and taken by
                      all students internally. Students engage with global issues, develop projects, and learn to
                      evaluate multiple viewpoints — equipping them for the challenges of a connected world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 6: Cambridge Advanced */}
        <section className="relative">
          <div className="rounded-3xl p-6 md:p-8 relative overflow-hidden" style={{ backgroundColor: "#54BAB9" }}>
            <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
              <GraduationCap className="w-full h-full text-white" />
            </div>
            <div className="relative z-10 space-y-6">
              <div className="text-center space-y-3">
                <div className="inline-flex items-center px-6 py-3 bg-white bg-opacity-20 rounded-full backdrop-blur-sm">
                  <TrendingUp className="w-5 h-5 mr-2 text-white" />
                  <span className="font-semibold text-white text-sm">Advanced Studies</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">Cambridge Advanced – AS & A Levels</h2>
                <p className="text-base text-white opacity-90 leading-relaxed max-w-4xl mx-auto">
                  Thousands of students worldwide progress to top universities every year with Cambridge International
                  AS and A Levels. These qualifications encourage in-depth subject mastery and independent thinking.
                </p>
              </div>
              <div className="overflow-x-auto">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr style={{ background: "linear-gradient(135deg, #9ED2C6 0%, #54BAB9 100%)" }}>
                        <th className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">
                          Group
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">
                          Curriculum Group
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">
                          Subjects Offered
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          group: "Group I",
                          category: "Mathematics & Sciences",
                          subjects: "Mathematics, Physics, Chemistry, Biology, Computer Science",
                        },
                        {
                          group: "Group II",
                          category: "Languages",
                          subjects: "AS English Language, French, Tamil",
                        },
                        {
                          group: "Group III",
                          category: "Arts & Humanities",
                          subjects: "Business, Economics, Geography, Psychology, Sociology, Accounting",
                        },
                      ].map((row, index) => (
                        <tr
                          key={index}
                          className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-blue-50 transition-colors duration-200`}
                        >
                          <td className="px-4 py-3 text-xs font-bold text-gray-900">{row.group}</td>
                          <td className="px-4 py-3 text-xs font-semibold text-gray-700">{row.category}</td>
                          <td className="px-4 py-3 text-xs text-gray-700">{row.subjects}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 7: Cambridge IPQ */}
        <section className="relative">
          <div className="rounded-3xl p-6 md:p-8 relative overflow-hidden" style={{ backgroundColor: "#E9DAC1" }}>
            <div className="relative z-10 space-y-6">
              <div className="text-center space-y-3">
                <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-sm">
                  <Target className="w-5 h-5 mr-2 text-purple-600" />
                  <span className="font-semibold text-gray-800 text-sm">Independent Research</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Cambridge International Project Qualification
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <div
                    className="w-12 h-12 mb-3 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#54BAB9" }}
                  >
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">What Students Learn:</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    The IPQ is a skills-based qualification that helps students develop high-level academic and research
                    skills including evaluation, analysis, synthesis, and effective communication.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <div
                    className="w-12 h-12 mb-3 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#54BAB9" }}
                  >
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">What Students Do:</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    Learners independently choose a topic they are passionate about, devise a research question, conduct
                    in-depth research, maintain a research log, and submit a 5000-word academic project.
                  </p>
                </div>
              </div>
              <div
                className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 shadow-xl border-l-8"
                style={{ borderColor: "#54BAB9" }}
              >
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-6 h-6 text-yellow-500" />
                </div>
                <p className="text-gray-800 font-medium italic text-base text-center leading-relaxed">
                  "BMIS students eagerly engage in the IPQ, demonstrating depth of knowledge, personal initiative, and
                  academic curiosity that sets them apart on the global stage."
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Section 8: Senior Programmes - NEW SECTION */}
        <section className="relative">
          <div className="rounded-3xl p-6 md:p-8 relative overflow-hidden" style={{ backgroundColor: "#F7ECDE" }}>
            <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
              <Users className="w-full h-full" />
            </div>
            <div className="relative z-10 space-y-6">
              <div className="text-center space-y-3">
                <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-sm">
                  <Star className="w-5 h-5 mr-2 text-purple-600" />
                  <span className="font-semibold text-gray-800 text-sm">Enrichment Programs</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Senior Programmes</h2>
                <h3 className="text-base md:text-lg font-light text-gray-600">Grades 9 - 12</h3>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="grid md:grid-cols-3 gap-4">
                  <div
                    className="text-center p-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-200"
                    style={{ backgroundColor: "#9ED2C6" }}
                  >
                    <div
                      className="w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#54BAB9" }}
                    >
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="font-bold text-gray-900 text-sm">Western Dance</div>
                    <p className="text-gray-600 mt-1 text-xs">Contemporary and classical dance forms</p>
                  </div>
                  <div
                    className="text-center p-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-200"
                    style={{ backgroundColor: "#E9DAC1" }}
                  >
                    <div
                      className="w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#54BAB9" }}
                    >
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div className="font-bold text-gray-900 text-sm">Western Music</div>
                    <p className="text-gray-600 mt-1 text-xs">Instrumental and vocal music training</p>
                  </div>
                  <div
                    className="text-center p-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-200"
                    style={{ backgroundColor: "#F7ECDE" }}
                  >
                    <div
                      className="w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#54BAB9" }}
                    >
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div className="font-bold text-gray-900 text-sm">Silambam</div>
                    <p className="text-gray-600 mt-1 text-xs">Traditional Tamil martial art form</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: Certificate Programs - NEW SECTION */}
        <section className="relative">
          <div className="rounded-3xl p-6 md:p-8 relative overflow-hidden" style={{ backgroundColor: "#9ED2C6" }}>
            <div className="absolute bottom-0 left-0 w-80 h-80 opacity-5">
              <Award className="w-full h-full" />
            </div>
            <div className="relative z-10 space-y-6">
              <div className="text-center space-y-3">
                <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-sm">
                  <Award className="w-5 h-5 mr-2 text-orange-600" />
                  <span className="font-semibold text-gray-800 text-sm">Specialized Learning</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Certificate Programs</h2>
                <p className="text-base text-gray-700 leading-relaxed max-w-4xl mx-auto">
                  Specialized certificate programs designed to enhance skills and provide focused learning opportunities
                  across different grade levels.
                </p>
              </div>

              {/* Grades 9-10 Programs */}
              <div className="bg-white rounded-2xl p-6 shadow-xl mb-4">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Certificate Programs for Grades 9-10</h3>
                  <p className="text-gray-600 text-xs">Foundation level specialized programs</p>
                </div>
                <div className="grid md:grid-cols-3 gap-3">
                  <div
                    className="text-center p-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-200"
                    style={{ backgroundColor: "#F7ECDE" }}
                  >
                    <div
                      className="w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#54BAB9" }}
                    >
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div className="font-bold text-gray-900 text-sm">Media Studies</div>
                    <p className="text-gray-600 mt-1 text-xs">Digital media and communication skills</p>
                  </div>
                  <div
                    className="text-center p-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-200"
                    style={{ backgroundColor: "#E9DAC1" }}
                  >
                    <div
                      className="w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#54BAB9" }}
                    >
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div className="font-bold text-gray-900 text-sm">Arts & Design</div>
                    <p className="text-gray-600 mt-1 text-xs">Creative expression and design thinking</p>
                  </div>
                  <div
                    className="text-center p-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-200"
                    style={{ backgroundColor: "#9ED2C6" }}
                  >
                    <div
                      className="w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#54BAB9" }}
                    >
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="font-bold text-gray-900 text-sm">Food & Nutrition</div>
                    <p className="text-gray-600 mt-1 text-xs">Healthy living and culinary skills</p>
                  </div>
                </div>
              </div>

              {/* Grades 11-12 Programs */}
              <div className="bg-white rounded-2xl p-6 shadow-xl border-4" style={{ borderColor: "#54BAB9" }}>
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Certificate Programs for Grades 11-12</h3>
                  <p className="text-gray-600 text-xs">Advanced level specialized programs</p>
                </div>
                <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  <div
                    className="text-center p-5 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-200"
                    style={{ backgroundColor: "#F7ECDE" }}
                  >
                    <div
                      className="w-14 h-14 mx-auto mb-3 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#54BAB9" }}
                    >
                      <Star className="w-7 h-7 text-white" />
                    </div>
                    <div className="font-bold text-gray-900 text-sm">Arts & Design</div>
                    <p className="text-gray-600 mt-2 text-xs">Advanced creative portfolio development</p>
                  </div>
                  <div
                    className="text-center p-5 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-200"
                    style={{ backgroundColor: "#E9DAC1" }}
                  >
                    <div
                      className="w-14 h-14 mx-auto mb-3 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#54BAB9" }}
                    >
                      <Target className="w-7 h-7 text-white" />
                    </div>
                    <div className="font-bold text-gray-900 text-sm">Design & Technology</div>
                    <p className="text-gray-600 mt-2 text-xs">Innovation and technical design skills</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 10: Global Recognition - Enhanced CTA section */}
        <section className="relative">
          <div className="rounded-3xl p-6 md:p-8 relative overflow-hidden" style={{ backgroundColor: "#9ED2C6" }}>
            <div className="absolute bottom-0 left-0 w-80 h-80 opacity-5">
              <Globe className="w-full h-full" />
            </div>
            <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-sm">
                  <Award className="w-5 h-5 mr-2 text-blue-600" />
                  <span className="font-semibold text-gray-800 text-sm">Worldwide Recognition</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Global Recognition</h2>
                <p className="text-base text-gray-700 leading-relaxed max-w-4xl mx-auto">
                  Cambridge qualifications are accepted and valued by leading universities and employers around the
                  world. Whether students are applying to Indian institutions or universities abroad, their Cambridge
                  education is a testament to their academic strength and global readiness.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="https://www.cambridgeinternational.org/programmes-and-qualifications/recognition-and-acceptance/#:~:text=We%20provide%20extra%20guidance%20on%20university%20recognition%20of,us%20with%20formal%20written%20acceptance%20of%20Cambridge%20qualifications"
                    className="group inline-flex items-center px-6 py-3 text-white font-bold rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl text-xs"
                    style={{ background: "linear-gradient(135deg, #54BAB9 0%, #9ED2C6 100%)" }}
                  >
                    <Globe className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    Cambridge Recognition Worldwide →
                  </Link>
                  <Link
                    href="https://www.cambridgeinternational.org/programmes-and-qualifications/recognition-and-acceptance/country/india/"
                    className="group inline-flex items-center px-6 py-3 bg-white font-bold rounded-2xl shadow-xl border-3 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl text-xs"
                    style={{ color: "#54BAB9", borderColor: "#54BAB9" }}
                  >
                    <TrendingUp className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    Recognition by Indian Universities →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="flex justify-center mt-4">
          <Link href="/pedagogytools">
            <div
              className="flex items-center gap-3 text-white px-6 py-3 rounded-lg shadow-md transition-all cursor-pointer hover:opacity-90"
              style={{ backgroundColor: "#54BAB9" }}
            >
              <div className="text-center">
                <div className="font-semibold text-base">Pedagogy Tools</div>
              </div>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
