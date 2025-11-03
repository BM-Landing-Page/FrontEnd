"use client"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CambridgeIGCSE() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Banner */}
      <div className="relative h-64 md:h-96 w-full">
        <img
          src="/images/igcsehero.jpeg"
          alt="Cambridge IGCSE"
          className="w-full h-full object-cover opacity-100"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center px-4">Cambridge IGCSE</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto border-4 border-[#54BAB9] p-8 md:p-12 bg-white rounded-2xl">
          <div className="space-y-12">
            {/* Introduction Section */}
            <section className="py-8 border-b border-[#E9DAC1]">
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Cambridge IGCSE is the world's most popular international qualification for 14 to 16 year olds. It is
                  recognized by leading universities and employers worldwide, and is an international passport to
                  progression and success. Developed over 25 years ago, it is tried, tested and trusted by schools
                  worldwide. Cambridge Secondary 2 is typically for learners aged 14 to 16 years.
                </p>
                <p className="text-gray-700 leading-relaxed">It offers learners two routes:</p>
                <ul className="space-y-2 ml-6 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#54BAB9] font-bold mr-3">•</span>
                    <span>Cambridge IGCSE</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#54BAB9] font-bold mr-3">•</span>
                    <span>Cambridge O Level.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Career Guidance Section */}
            <section className="py-8 border-b border-[#E9DAC1]">
              <h2 className="text-3xl font-bold text-[#54BAB9] mb-6">Career Guidance Conference</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Our students go through an important stage – making subject recommendations! Our subject
                  recommendation process involves the following steps. Our 4 step process will accommodate the interests
                  of both the parents and the students.
                </p>
                <div className="space-y-3 ml-4">
                  <p>
                    <span className="font-semibold text-[#54BAB9]">Step 1:</span> Students take a survey, to capture
                    their interests and aspirations.
                  </p>
                  <p>
                    <span className="font-semibold text-[#54BAB9]">Step 2:</span> Parents choose subjects from the list
                    offered
                  </p>
                  <p>
                    <span className="font-semibold text-[#54BAB9]">Step 3:</span> Teachers make a recommendation of
                    subjects for every student, considering all stake holders' recommendations.
                  </p>
                  <p>
                    <span className="font-semibold text-[#54BAB9]">Step 4:</span> Parent & Student Conference to
                    finalise their choices.
                  </p>
                </div>
              </div>
            </section>

            {/* IGCSE Curriculum Section */}
            <section className="py-8 border-b border-[#E9DAC1]">
              <h2 className="text-3xl font-bold text-[#54BAB9] mb-6">IGCSE Curriculum @ BMIS</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#E9DAC1]">
                      <th className="px-4 py-3 text-left font-semibold text-gray-800 border border-[#F7ECDE]">Group</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-800 border border-[#F7ECDE]">
                        IGCSE Curriculum Groups
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-800 border border-[#F7ECDE]">
                        Subjects Offered at BMIS
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white hover:bg-[#F7ECDE] transition-colors">
                      <td className="px-4 py-3 font-semibold text-[#54BAB9] border border-[#F7ECDE]">Group I</td>
                      <td className="px-4 py-3 border border-[#F7ECDE]">Languages</td>
                      <td className="px-4 py-3 border border-[#F7ECDE]">English, French, German, Hindi, Tamil</td>
                    </tr>
                    <tr className="bg-white hover:bg-[#F7ECDE] transition-colors">
                      <td className="px-4 py-3 font-semibold text-[#54BAB9] border border-[#F7ECDE]">Group II</td>
                      <td className="px-4 py-3 border border-[#F7ECDE]">Humanities and Social Sciences</td>
                      <td className="px-4 py-3 border border-[#F7ECDE]">
                        Environmental Management, Sociology, Economics
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-[#F7ECDE] transition-colors">
                      <td className="px-4 py-3 font-semibold text-[#54BAB9] border border-[#F7ECDE]">Group III</td>
                      <td className="px-4 py-3 border border-[#F7ECDE]">Sciences</td>
                      <td className="px-4 py-3 border border-[#F7ECDE]">Physics, Chemistry, Biology</td>
                    </tr>
                    <tr className="bg-white hover:bg-[#F7ECDE] transition-colors">
                      <td className="px-4 py-3 font-semibold text-[#54BAB9] border border-[#F7ECDE]">Group IV</td>
                      <td className="px-4 py-3 border border-[#F7ECDE]">Mathematics</td>
                      <td className="px-4 py-3 border border-[#F7ECDE]">Mathematics</td>
                    </tr>
                    <tr className="bg-white hover:bg-[#F7ECDE] transition-colors">
                      <td className="px-4 py-3 font-semibold text-[#54BAB9] border border-[#F7ECDE]">Group V</td>
                      <td className="px-4 py-3 border border-[#F7ECDE]">Creative and professional</td>
                      <td className="px-4 py-3 border border-[#F7ECDE]">Computer Science</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 space-y-3 text-gray-700 text-sm">
                <p>
                  • Global Perspectives as SLP (Student Leadership Program) – Budding Minds offers these as internal
                  subjects for all students
                </p>
                <p>• Student needs to choose 8 subjects.</p>
                <p>
                  • Cambridge ICE is the group award of the International General Certificate of Secondary Education
                  (IGCSE) and requires the study of subjects drawn from the five different IGCSE subject groups. The
                  student has to pass examinations in at least seven subjects, including two languages, and one subject
                  from each of the other subject groups.
                </p>
                <p>
                  • English, Second language (French/German/Tamil/Hindi) , Mathematics and Environmental Management are
                  compulsory IGCSE Subjects for all students.
                </p>
              </div>
            </section>

            {/* Student Leadership Programme Section */}
            <section className="py-8 border-b border-[#E9DAC1]">
              <h2 className="text-3xl font-bold text-[#54BAB9] mb-6">Student Leadership Programme</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Cambridge IGCSE Global Perspectives is a groundbreaking and stimulating course that stretches across
                  traditional subject boundaries and develops transferable skills. It is both cross-curricular and
                  skills-based and taps into the way learners of today enjoy learning, including team work,
                  presentations, projects, and working with other learners around the world. The emphasis is on
                  developing the ability to think critically about a range of global issues where there is always more
                  than one point of view.
                </p>
                <p>
                  Budding Minds offers Global Perspectives as an in-house 'STUDENT LEADERSHIP PROGRAMME' for all
                  students.
                </p>
              </div>
            </section>

            {/* AS & A Levels Section */}
            <section className="py-8 border-b border-[#E9DAC1]">
              <h2 className="text-3xl font-bold text-[#54BAB9] mb-4">AS & A Levels</h2>
              <div className="mb-6 text-gray-700 leading-relaxed">
                <p>
                  Thousands of learners worldwide gain places at leading universities every year with Cambridge
                  International AS & A Levels. The syllabuses develop a deep understanding of subjects and independent
                  thinking skills. The syllabuses prepare learners for university study, which is why universities
                  worldwide value and recognise Cambridge International AS & A Level qualifications.
                </p>
              </div>
              <h3 className="text-2xl font-semibold text-[#9ED2C6] mb-4">AS & A LEVEL Curriculum @ BMIS</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#E9DAC1]">
                      <th className="px-4 py-3 text-left font-semibold text-gray-800 border border-[#F7ECDE]">Group</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-800 border border-[#F7ECDE]">
                        AS & A Levels Curriculum Groups
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-800 border border-[#F7ECDE]">
                        Subjects Offered at BMIS
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white hover:bg-[#F7ECDE] transition-colors">
                      <td className="px-4 py-3 font-semibold text-[#54BAB9] border border-[#F7ECDE]">Group I</td>
                      <td className="px-4 py-3 border border-[#F7ECDE]">Mathematics and Sciences</td>
                      <td className="px-4 py-3 border border-[#F7ECDE]">
                        Mathematics, Physics, Chemistry, Biology, Computer Science.
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-[#F7ECDE] transition-colors">
                      <td className="px-4 py-3 font-semibold text-[#54BAB9] border border-[#F7ECDE]">Group II</td>
                      <td className="px-4 py-3 border border-[#F7ECDE]">Languages</td>
                      <td className="px-4 py-3 border border-[#F7ECDE]">AS English Language, French, Tamil</td>
                    </tr>
                    <tr className="bg-white hover:bg-[#F7ECDE] transition-colors">
                      <td className="px-4 py-3 font-semibold text-[#54BAB9] border border-[#F7ECDE]">Group III</td>
                      <td className="px-4 py-3 border border-[#F7ECDE]">Arts and Humanities</td>
                      <td className="px-4 py-3 border border-[#F7ECDE]">
                        Business, Economics, Geography, Psychology, Sociology, Accounting.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Cambridge IPQ Section */}
            <section className="py-8 border-b border-[#E9DAC1]">
              <h2 className="text-3xl font-bold text-[#54BAB9] mb-6">Cambridge International Project Qualification</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Cambridge International Project Qualification (Cambridge IPQ) is an exciting new project-based
                  qualification. Students have the opportunity to develop skills by carrying out research into a topic
                  of their choice. Taking Cambridge IPQ allows learners to demonstrate engagement with their chosen
                  topic beyond preparation for an exam, helping them to stand out from the crowd with university and job
                  applications.
                </p>

                <div>
                  <h3 className="font-semibold text-[#54BAB9] mb-3">What will students learn?</h3>
                  <p>
                    This is a skills-based qualification. Learners develop higher-order thinking skills that
                    universities and employers look for, including analysis, evaluation and synthesis. It also builds
                    their research, reflection and communication skills.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#54BAB9] mb-3">What will students do?</h3>
                  <p>
                    Learners complete a 5000 word research project on a topic of their own choice. They can choose a
                    subject to complement one of their Cambridge International AS or A Levels, or a topic that they are
                    passionate about. They devise and develop a research question, conduct research to answer this
                    question, record their progress in a research log and write a research report.
                  </p>
                </div>

                <p>BMIS Learners enthusiastically signup for IPQ projects and deep-dive into their research reports.</p>
              </div>
            </section>

            {/* Recognition Section */}
            <section className="py-8">
              <h2 className="text-3xl font-bold text-[#54BAB9] mb-6">Recognition and acceptance</h2>
              <div className="flex flex-col md:flex-row gap-6 mt-8 justify-center">
                <a
                  href="#"
                  className="px-8 py-4 bg-[#54BAB9] text-white font-semibold text-center rounded-full hover:bg-[#9ED2C6] hover:text-gray-800 transition-colors border-2 border-[#54BAB9] w-56"
                >
                  Cambridge Recognitions
                </a>
                <a
                  href="#"
                  className="px-8 py-4 bg-[#54BAB9] text-white font-semibold text-center rounded-full hover:bg-[#9ED2C6] hover:text-gray-800 transition-colors border-2 border-[#54BAB9] w-56"
                >
                  Indian Universities Guide
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="py-6 bg-white">
        <div className="flex justify-center">
          <Link href="/pedagogyandtools" className="inline-block">
            <div className="flex items-center gap-3 bg-[#54BAB9] hover:bg-[#54BAB9]/90 text-white px-6 py-3 rounded-lg shadow-md transition-colors cursor-pointer">
              <div className="text-center">
                <div className="font-semibold text-base">Pedagogy and Tools</div>
              </div>
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}