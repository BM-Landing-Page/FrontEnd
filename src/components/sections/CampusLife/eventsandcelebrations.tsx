import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function EventsAndCelebrations() {
  const events = [
    {
      name: "Pongal",
      description:
        "Our school transforms into a festive village with bullock cart rides, pot-breaking games, and mud-pot cooking sessions.",
      image: "/pongal-celebration-with-colorful-rangoli-and-tradi.jpg",
    },
    {
      name: "Onam",
      description: "A burst of color and culture with vibrant Rangolis, dance circles, and traditional Kerala attire.",
      image: "/onam-celebration-with-pookolam-flower-rangoli-and-.jpg",
    },
    {
      name: "Teachers' Day",
      description: "A meaningful opportunity to express heartfelt gratitude to educators who shape our lives.",
      image: "/teachers-day-celebration-with-students-and-teacher.jpg",
    },
    {
      name: "Grandparents' Day",
      description: "A heartwarming, student-led event dedicated to our youngest learners and their grandparents.",
      image: "/grandparents-day-with-children-and-grandparents-do.jpg",
    },
    {
      name: "Diwali",
      description:
        "Celebrated with eco-conscious joy, emphasizing environmental responsibility and traditional values.",
      image: "/diwali-celebration-with-flower-rangoli-and-traditi.jpg",
    },
    {
      name: "Children's Day",
      description: "Celebrating the heart and soul of our school with fun activities and joyful moments.",
      image: "/childrens-day-celebration-with-happy-kids-playing-.jpg",
    },
    {
      name: "Christmas",
      description:
        "The air buzzes with anticipation during Christmas season, marked by our beloved Secret Santa tradition.",
      image: "/christmas-celebration-with-decorated-tree-and-fest.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-96 overflow-hidden">
        <img src="/images/events.JPG" alt="School Celebrations" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4">Events & Celebrations</h1>
            <p className="text-xl max-w-2xl">Moments of joy, unity, and cultural richness</p>
          </div>
        </div>
      </div>

      {/* Instagram Link Section */}
      <div className="py-8 bg-gradient-to-r from-[#F7ECDE] to-[#9ED2C6]">
        <div className="flex justify-center">
          <Link
            href="https://www.instagram.com/buddingminds_events?igsh=MWs0b3hhYzZlaGY2NQ%3D%3D&utm_source=qr"
            className="inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-3 bg-white hover:bg-gray-50 text-[#54BAB9] px-8 py-4 rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105 border border-[#54BAB9]/20">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.987 11.987 6.62 0 11.987-5.367 11.987-11.987C24.003 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.132-1.551-.684-.94-.684-2.126 0-3.066.684-.94 1.835-1.551 3.132-1.551s2.448.611 3.132 1.551c.684.94.684 2.126 0 3.066-.684.94-1.835 1.551-3.132 1.551z" />
                </svg>
                <div className="text-center">
                  <div className="font-bold text-lg">Follow Our Events on Instagram</div>
                  <div className="text-sm text-gray-600">@buddingminds_events</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </div>

      {/* Events Grid - Image Card Layout */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-2 border-[#9ED2C6]/30 hover:border-[#54BAB9]"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-xl font-bold text-[#54BAB9] mb-2">{event.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="py-12 bg-gradient-to-br from-[#F7ECDE] via-[#E9DAC1] to-[#9ED2C6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-[#54BAB9] mb-8 text-center">Our Celebration Philosophy</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-[#54BAB9] rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800">Community</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Every celebration brings together students, teachers, and families, fostering a sense of belonging and
                  unity.
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-[#9ED2C6] rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800">Creativity</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Each event encourages artistic expression, cultural appreciation, and creative thinking through
                  hands-on activities.
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-[#E9DAC1] rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-[#54BAB9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800">Culture</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Our celebrations honor diverse traditions while teaching values of respect, gratitude, and
                  environmental consciousness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div className="py-12 bg-white">
        <div className="flex justify-center">
          <Link href="/beyondbooks" className="inline-block">
            <div className="flex items-center gap-3 bg-[#54BAB9] hover:bg-[#54BAB9]/90 text-white px-8 py-4 rounded-lg shadow-md transition-colors cursor-pointer">
              <div className="text-center">
                <div className="font-semibold text-lg">Beyond Books</div>
              </div>
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
