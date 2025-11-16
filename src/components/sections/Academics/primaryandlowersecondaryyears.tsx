import Link from "next/link"
import { ArrowRight } from "lucide-react"


export default function PrimaryYears() {
  return (
    <div className="w-full bg-white px-4 md:px-8 py-8 space-y-8">
      {/* Section 1: Introduction - Image Right */}
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-[#54BAB9] mb-4">Primary Years Programme – The BM Way!</h2>
          <p className="text-lg font-semibold text-[#9ED2C6] mb-4">Rooted in Inquiry, Growing with Understanding</p>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              <strong>A Global Framework with a Local Spirit</strong>
            </p>
            <p>
              At Budding Minds International School (BMIS), the Primary Years Programme (for ages 5–11) lays the
              foundation for confident, curious, and independent learners.
            </p>
            <p>
              Through a blend of the Cambridge Primary Programme (CPP) and BMIS's inquiry-based approach, children learn
              not through rote learning, but by questioning, exploring, and discovering concepts in meaningful ways.
            </p>
            <p>
              Our curriculum offers clear, progressive learning goals in English, Mathematics, and Science, aligned with
              global standards and adapted to the local context. This structured-yet-flexible model ensures every child
              grows with confidence — from foundational years through their transition to secondary school.
            </p>
          </div>
        </div>
        <div className="flex-1 h-64 md:h-80 bg-[#F7ECDE] rounded-lg flex items-center justify-center">
          <img
            src="/images/primaryyears1.jpeg"
            alt="Primary Years Programme"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Section 2: Active Learning - Image Left */}
      <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-[#54BAB9] mb-4">
            Active Learning approach - Learning Through Inquiry & Active Engagement
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>At BMIS, learning is never passive. Our inquiry-based classrooms encourage children to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Investigate real-life challenges</li>
              <li>Collaborate through projects and discussions</li>
              <li>Reflect and connect learning to life</li>
              <li>Actively engage through flipped classroom</li>
            </ul>
            <p>
              This process nurtures critical thinking, creativity, collaboration, and self-direction — essential
              21st-century skills that prepare children for the future.
            </p>
          </div>
        </div>
        <div className="flex-1 h-64 md:h-80 bg-[#F7ECDE] rounded-lg flex items-center justify-center">
          <img
            src="/images/primaryyears2.jpeg"
            alt="Active Learning"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Section 3: Life Skills - Image Right */}
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-[#54BAB9] mb-4">Life Skills Sessions – Learning for Life</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Education at BMIS goes beyond academics. Our Life Skills Sessions help children build values, confidence,
              and social-emotional intelligence through interactive discussions and real-world scenarios.
            </p>
            <p>Every term focuses on a unique theme that empowers learners to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Understand themselves and others</li>
              <li>Develop empathy and emotional intelligence</li>
              <li>Communicate effectively</li>
              <li>Make responsible, thoughtful choices</li>
            </ul>
            <p>These sessions shape resilient, compassionate individuals—ready for school and for life.</p>
          </div>
        </div>
        <div className="flex-1 h-64 md:h-80 bg-[#F7ECDE] rounded-lg flex items-center justify-center">
          <img
            src="/images/primaryyears3.jpeg"
            alt="Life Skills"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Section 4: Literacy - Image Left */}
      <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-[#54BAB9] mb-4">Literacy - Learning Through Active Exploration</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Our Literacy Programme develops confident readers, writers, and communicators. Children engage in:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Role plays, interviews, story mapping, and reading circles</li>
              <li>Creative writing and book reviews</li>
              <li>Discussions that connect language to real-world experiences</li>
            </ul>
            <p>Through such active learning, literacy becomes fun, expressive, and purposeful.</p>
          </div>
        </div>
        <div className="flex-1 h-64 md:h-80 bg-[#F7ECDE] rounded-lg flex items-center justify-center">
          <img
            src="/images/primaryyears4.jpeg"
            alt="Literacy"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Section 5: Jolly Phonics & Jolly Grammar - NO IMAGE */}
      <div className="py-4">
        <h2 className="text-3xl font-bold text-[#54BAB9] mb-4">
          Jolly Phonics & Jolly Grammar – Fun with Reading and Writing
        </h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Our Jolly Phonics and Grammar programmes bring energy and joy into literacy learning. Children master letter
            sounds, blending, sentence construction, and punctuation through multisensory, hands-on activities—growing
            into confident readers and articulate writers.
          </p>
        </div>
      </div>

      {/* Section 6: Bookvie - NO IMAGE */}
      <div className="py-4">
        <h2 className="text-3xl font-bold text-[#54BAB9] mb-4">Bookvie – Read it. Watch it. Live it!</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            BMIS's signature literacy initiative, Bookvie, turns reading into an adventure! Students read a book, watch
            its movie adaptation, and discuss connections between the two.
          </p>
          <p>This immersive experience enhances:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Comprehension and critical analysis</li>
            <li>Text-to-screen comparison</li>
            <li>Appreciation for storytelling and creative thinking</li>
          </ul>
        </div>
      </div>

      {/* Section 7: Numeracy - Image Right */}
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-[#54BAB9] mb-4">Numeracy – The ELPS Approach</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Our Numeracy curriculum helps children develop problem-solving and reasoning skills through the ELPS model
              which extends from Early years:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <strong>E</strong> – Experience: Hands-on learning through exploration
              </li>
              <li>
                <strong>L</strong> – Language: Express mathematical ideas
              </li>
              <li>
                <strong>P</strong> – Pictorial: Visualize and represent understanding
              </li>
              <li>
                <strong>S</strong> – Symbol: Apply learning using numbers
              </li>
            </ul>
            <p>
              With engaging resources like Jodo Gyan, Rangometry, and real-world activities, mathematics at BMIS becomes
              fun, meaningful, and confidence-building.
            </p>
          </div>
        </div>
        <div className="flex-1 h-64 md:h-80 bg-[#F7ECDE] rounded-lg flex items-center justify-center">
          <img
            src="/images/primaryyears5.jpeg"
            alt="Numeracy"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Section 8: Science - Image Left */}
      <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-[#54BAB9] mb-4">
            Thematic Science Curriculum – Exploring the World Around Us
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Science at BMIS inspires curiosity, discovery, and a lifelong love for exploration. Children explore
              Physics, Chemistry, and Biology through thematic units, experiments, and real-world observations—learning
              to ask questions, test hypotheses, and think critically.
            </p>
          </div>
        </div>
        <div className="flex-1 h-64 md:h-80 bg-[#F7ECDE] rounded-lg flex items-center justify-center">
          <img
            src="/images/primaryyears6.jpeg"
            alt="Science"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Section 9: Subjects Offered - NO IMAGE */}
      <div className="py-4">
        <h2 className="text-3xl font-bold text-[#54BAB9] mb-4">Subjects Offered at BMIS</h2>
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
                <td className="border border-gray-300 px-4 py-3 font-semibold">1</td>
                <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                <td className="border border-gray-300 px-4 py-3">Tam + Hindi</td>
                <td className="border border-gray-300 px-4 py-3 text-center">-</td>
                <td className="border border-gray-300 px-4 py-3 text-center">-</td>
                <td className="border border-gray-300 px-4 py-3 text-center">-</td>
                <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
              </tr>
              <tr className="bg-[#F7ECDE]">
                <td className="border border-gray-300 px-4 py-3 font-semibold">2</td>
                <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                <td className="border border-gray-300 px-4 py-3">Tam + Hindi</td>
                <td className="border border-gray-300 px-4 py-3 text-center">-</td>
                <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
              </tr>
              <tr className="bg-white hover:bg-[#F7ECDE]">
                <td className="border border-gray-300 px-4 py-3 font-semibold">3</td>
                <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                <td className="border border-gray-300 px-4 py-3">Tam + Hindi</td>
                <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
              </tr>
              <tr className="bg-[#F7ECDE]">
                <td className="border border-gray-300 px-4 py-3 font-semibold">4,5</td>
                <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                <td className="border border-gray-300 px-4 py-3">Tam / Hindi + French</td>
                <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 10: Co-Curriculars - NO IMAGE */}
      <div className="py-4">
        <h2 className="text-3xl font-bold text-[#54BAB9] mb-4">Co-Curriculars (Specials)</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          We ensure balanced, holistic growth through a variety of creative and physical pursuits:
        </p>
        <div className="flex flex-wrap gap-3">
          {["Dance", "Music", "Art & Craft", "Karate"].map((special) => (
            <div key={special} className="px-6 py-3 bg-[#9ED2C6] text-white rounded-full font-semibold text-center">
              {special}
            </div>
          ))}
        </div>
      </div>

      {/* Section 11: Assessments - NO IMAGE */}
      <div className="py-4">
        <h2 className="text-3xl font-bold text-[#54BAB9] mb-4">Assessments for Growth and Reflection</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            At BMIS, assessments are tools for growth, feedback and learning ownership. Up to Grade 4, children
            experience continuous assessment that values progress and reflection. Our continuous formative assessments
            track skills and understanding through:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Checklists and rubrics</li>
            <li>Performance tasks and reflections</li>
            <li>Real-life projects</li>
          </ul>
          <p>
            From Grade 5 onwards, they take unit tests and exams — gradually building confidence and readiness for
            secondary education.
          </p>
        </div>
      </div>

      {/* Section 12: Advantage - NO IMAGE */}
      <div className="py-4">
        <h2 className="text-3xl font-bold text-[#54BAB9] mb-4">The BMIS Primary Years Advantage</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Our Primary Years Programme is designed to balance academic rigour with joyful exploration. It nurtures
            learners to become:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Curious and reflective thinkers</li>
            <li>Confident communicators</li>
            <li>Collaborative problem-solvers</li>
            <li>Compassionate global citizens</li>
          </ul>
          <p>
            At BMIS, learning in the primary years is lively, meaningful, and full of purpose — preparing children not
            just for the next grade, but for the world beyond.
          </p>
        </div>
      </div>

      <div className="py-6 bg-white">
        <div className="flex justify-center">
          <Link href="/igcseandsenioryears" className="inline-block">
            <div className="flex items-center gap-3 bg-[#54BAB9] hover:bg-[#54BAB9]/90 text-white px-6 py-3 rounded-lg shadow-md transition-colors cursor-pointer">
              <div className="text-center">
                <div className="font-semibold text-base">IGCSE and Senior Years</div>
              </div>
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}