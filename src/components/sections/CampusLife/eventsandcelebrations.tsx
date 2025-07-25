import { Heart, Star, Gift, Flower, Music, Palette, Users } from "lucide-react"

export default function EventsAndCelebrations() {
  const events = [
    {
      name: "Pongal",
      description:
        "Our school transforms into a festive village with bullock cart rides, pot-breaking games, and mud-pot cooking sessions.",
      activities: ["Bullock cart rides", "Pot-breaking games", "Traditional Indian games", "Flower garland-tying"],
      color: "from-[#F7ECDE] to-[#E9DAC1]",
      icon: Flower,
    },
    {
      name: "Onam",
      description: "A burst of color and culture with vibrant Rangolis, dance circles, and traditional Kerala attire.",
      activities: ["Vibrant Rangolis (Pookolam)", "Dance circles", "Traditional Kerala attire", "Unity celebrations"],
      color: "from-[#9ED2C6] to-[#54BAB9]",
      icon: Palette,
    },
    {
      name: "Teachers' Day",
      description: "A meaningful opportunity to express heartfelt gratitude to educators who shape our lives.",
      activities: ["Decorated notice board", "Gratitude Wall", "Thank you messages", "Appreciation activities"],
      color: "from-[#E9DAC1] to-[#9ED2C6]",
      icon: Heart,
    },
    {
      name: "Grandparents' Day",
      description: "A heartwarming, student-led event dedicated to our youngest learners and their grandparents.",
      activities: ["Masquerade mask-making", "Painted handprint canvases", "Card-making", "Bonding activities"],
      color: "from-[#F7ECDE] to-[#9ED2C6]",
      icon: Users,
    },
    {
      name: "Diwali",
      description:
        "Celebrated with eco-conscious joy, emphasizing environmental responsibility and traditional values.",
      activities: ["Dance circles", "Flower Rangolis", "Firecracker-free celebration", "Traditional clothing"],
      color: "from-[#54BAB9] to-[#E9DAC1]",
      icon: Star,
    },
    {
      name: "Children's Day",
      description: "Celebrating the heart and soul of our school with fun activities and joyful moments.",
      activities: ["Songs throughout school", "Dancing between classes", "Fun vibes", "Student celebrations"],
      color: "from-[#9ED2C6] to-[#F7ECDE]",
      icon: Music,
    },
    {
      name: "Christmas",
      description:
        "The air buzzes with anticipation during Christmas season, marked by our beloved Secret Santa tradition.",
      activities: ["Secret Santa exchanges", "Handmade gifts", "Decorated Christmas tree", "Festive spirit"],
      color: "from-[#E9DAC1] to-[#54BAB9]",
      icon: Gift,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-96 overflow-hidden">
        <img
          src="/images/events.jpg"
          alt="School Celebrations"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#54BAB9]/80 to-[#9ED2C6]/60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4">Events & Celebrations</h1>
            <p className="text-xl max-w-2xl">Moments of joy, unity, and cultural richness</p>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-16">
            {events.map((event, index) => (
              <div key={index} className={`relative overflow-hidden rounded-3xl bg-gradient-to-r ${event.color} p-1`}>
                <div className="bg-white rounded-3xl p-8 md:p-12">
                  <div className={`grid gap-12 items-center`}>
                    {/* Content */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`p-4 rounded-2xl bg-gradient-to-r ${event.color}`}>
                          <event.icon className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-4xl font-bold text-[#54BAB9]">{event.name}</h2>
                      </div>

                      <p className="text-lg text-gray-700 mb-8 leading-relaxed">{event.description}</p>

                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Activities:</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {event.activities.map((activity, actIndex) => (
                            <div key={actIndex} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                              <div className="w-2 h-2 bg-[#54BAB9] rounded-full"></div>
                              <span className="text-gray-700 font-medium">{activity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="py-24 bg-gradient-to-br from-[#F7ECDE] via-[#E9DAC1] to-[#9ED2C6]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
            <h2 className="text-4xl font-bold text-[#54BAB9] mb-8">Our Celebration Philosophy</h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-[#54BAB9] rounded-full flex items-center justify-center mx-auto md:mx-0">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Community</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every celebration brings together students, teachers, and families, fostering a sense of belonging and
                  unity.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 bg-[#9ED2C6] rounded-full flex items-center justify-center mx-auto md:mx-0">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Creativity</h3>
                <p className="text-gray-600 leading-relaxed">
                  Each event encourages artistic expression, cultural appreciation, and creative thinking through
                  hands-on activities.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 bg-[#E9DAC1] rounded-full flex items-center justify-center mx-auto md:mx-0">
                  <Star className="w-8 h-8 text-[#54BAB9]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Culture</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our celebrations honor diverse traditions while teaching values of respect, gratitude, and
                  environmental consciousness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
