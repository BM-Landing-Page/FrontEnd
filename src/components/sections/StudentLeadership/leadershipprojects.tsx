import Image from "next/image"
import { BookOpen, Heart, Users, Globe } from "lucide-react"

export default function LeadershipProjects() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative py-20 px-4 text-center overflow-hidden" style={{ minHeight: "60vh" }}>
        <Image
          src="/images/leadership-hero.png"
          alt="Students collaborating on leadership projects"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">Leadership Projects</h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Showcasing student-led initiatives that foster creativity, community engagement, and meaningful impact
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-20">
        {/* BM Gazette Section */}
        <section className="space-y-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <BookOpen className="w-8 h-8" style={{ color: "#54BAB9" }} />
              <h2 className="text-4xl font-bold text-gray-800">The BM Gazette</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A vibrant student-led publication showcasing voices, creativity, and perspectives of our school community
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* First Edition */}
            <div className="p-8 rounded-2xl shadow-lg" style={{ backgroundColor: "#F7ECDE" }}>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">First Edition</h3>
                <p className="text-gray-600 font-medium">Academic Year 2023–2024</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 mt-1" style={{ color: "#54BAB9" }} />
                  <div>
                    <p className="font-semibold text-gray-800">Chief Editors</p>
                    <p className="text-gray-700">Shalini and Akshara</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-gray-700 leading-relaxed">
                    The debut edition focused solely on school life, capturing memorable events, student activities, and
                    the spirit of the campus.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Though it was a first attempt, the edition was met with enthusiasm and appreciation, laying a strong
                    foundation for what was to come.
                  </p>
                </div>
              </div>
            </div>

            {/* Second Edition */}
            <div className="p-8 rounded-2xl shadow-lg" style={{ backgroundColor: "#E9DAC1" }}>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Second Edition</h3>
                <p className="text-gray-600 font-medium">Academic Year 2024–2025</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 mt-1" style={{ color: "#54BAB9" }} />
                  <div>
                    <p className="font-semibold text-gray-800">Chief Editor</p>
                    <p className="text-gray-700">Hamritha</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-gray-700 leading-relaxed">
                    This edition took a bold step forward by expanding its scope beyond the school walls, featuring
                    articles on global and social topics.
                  </p>

                  <div className="space-y-2">
                    <p className="font-semibold text-gray-800">Topics Covered:</p>
                    <div className="flex flex-wrap gap-2">
                      {["Money Management", "Sustainability", "Fashion", "Movies", "Music"].map((topic) => (
                        <span
                          key={topic}
                          className="px-3 py-1 rounded-full text-sm font-medium text-white"
                          style={{ backgroundColor: "#54BAB9" }}
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="font-semibold text-gray-800">New Features:</p>
                    <ul className="text-gray-700 space-y-1">
                      <li>• First Tamil article included</li>
                      <li>• Dedicated sections for teachers, annas, and akkas</li>
                      <li>• Platform for diverse voices and experiences</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl text-center" style={{ backgroundColor: "#9ED2C6" }}>
            <p className="text-lg text-gray-800 leading-relaxed max-w-4xl mx-auto">
              The BM Gazette has evolved into more than just a school newsletter; it has become a space for diverse
              voices, meaningful conversations, and creative expression, reflecting the dynamic and inclusive spirit of
              the school.
            </p>
          </div>
        </section>

        {/* Donation Drive Section */}
        <section className="space-y-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <Heart className="w-8 h-8" style={{ color: "#54BAB9" }} />
              <h2 className="text-4xl font-bold text-gray-800">Donation Drive for Avvai Illam</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Part of Random Acts of Kindness Week - Supporting underprivileged children through community action
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Initiative Overview */}
            <div className="lg:col-span-2 p-8 rounded-2xl shadow-lg" style={{ backgroundColor: "#F7ECDE" }}>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">The Initiative</h3>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Organized by the Outreach and Inclusion Department of the Student Leadership Cabinet 2024-2025, this
                  donation drive aimed to support children at Avvai Illam, a local home for underprivileged girls.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The drive focused on extending compassion beyond the school walls and fostering a spirit of giving
                  within the student community. Students from across grades came together to donate generously.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The initiative was not just about collecting items—it was about building a connection. Students took
                  time to understand the needs of the children and responded with empathy and thoughtfulness.
                </p>
              </div>
            </div>

            {/* Impact Stats */}
            <div className="p-8 rounded-2xl shadow-lg" style={{ backgroundColor: "#9ED2C6" }}>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Community Impact</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <Globe className="w-12 h-12 mx-auto mb-2" style={{ color: "#54BAB9" }} />
                  <p className="font-semibold text-gray-800">School-wide</p>
                  <p className="text-gray-700">Participation</p>
                </div>
                <div className="text-center">
                  <Heart className="w-12 h-12 mx-auto mb-2" style={{ color: "#54BAB9" }} />
                  <p className="font-semibold text-gray-800">Meaningful</p>
                  <p className="text-gray-700">Connections</p>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 mx-auto mb-2" style={{ color: "#54BAB9" }} />
                  <p className="font-semibold text-gray-800">Community</p>
                  <p className="text-gray-700">Building</p>
                </div>
              </div>
            </div>
          </div>

          {/* Items Collected */}
          <div className="p-8 rounded-2xl shadow-lg" style={{ backgroundColor: "#E9DAC1" }}>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Items Collected</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#54BAB9" }}
                >
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Educational Supplies</h4>
                <p className="text-gray-700 text-sm">
                  Notebooks, pens, pencils, and art materials to support their education
                </p>
              </div>

              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#54BAB9" }}
                >
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Hygiene Items</h4>
                <p className="text-gray-700 text-sm">
                  Soaps, sanitary napkins, toothpaste, and towels to ensure personal hygiene
                </p>
              </div>

              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#54BAB9" }}
                >
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Food Items</h4>
                <p className="text-gray-700 text-sm">
                  Non-perishable items like rice, pulses, and snacks for daily nourishment
                </p>
              </div>
            </div>
          </div>

          {/* Success Message */}
          <div className="p-8 rounded-2xl text-center" style={{ backgroundColor: "#54BAB9" }}>
            <p className="text-lg text-white leading-relaxed max-w-4xl mx-auto">
              The success of the donation drive reflected the school community's commitment to outreach and inclusion.
              It was a meaningful step toward making kindness actionable, ensuring that students experienced firsthand
              the joy of giving and the importance of supporting those in need.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
