"use client"
import { useState } from "react"
import { Globe, Calendar, Palette, Trophy } from "lucide-react"

export default function StudentProfile() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const departments = [
    {
      name: "Outreach and Inclusion",
      icon: <Globe className="w-6 h-6" />,
      color: "#54BAB9",
      description:
        "The Outreach and Inclusion Department leads service-learning and outreach initiatives, connecting students with local and global communities.",
      leaders: [
        {
          name: "Prakriti P",
          role: "Head of Outreach and Inclusion",
          shortDesc:
            "Passionate, empathetic leader with deep experience from serving as last year's Assistant Head and ASPL.",
          fullDesc:
            "Prakriti, the Head of Outreach and Inclusion, is a passionate, empathetic, and committed leader who brings both heart and strength to the Student Leadership Cabinet. Having served as last year's Assistant Head of Outreach and Inclusion and the ASPL, she comes with deep experience and a clear vision for impact. She has been an active contributor to almost every major school event, from planning to execution, and has independently organized several outreach initiatives with remarkable success. Hardworking and dependable, she leads with empathy and purpose. Prakriti is committed to making the school a more inclusive environment where everyone is heard.",
        },
        {
          name: "Vishal Ramesh",
          role: "Head of Outreach and Inclusion",
          shortDesc:
            "A/V Manager and former Deputy Student Leader known for turning vision into action with consistent event planning.",
          fullDesc:
            "Vishal Ramesh, Head of Outreach and Inclusion, A/V Manager, former Deputy Student Leader and Student Council Member, brings experience and intuition to leadership as well as bringing student ideas to reality. Known for his ability to turn vision into action, he has consistently handled the planning, logistics, and groundwork behind school events — ensuring ideas don't just stay on paper, but actually happen.",
        },
        {
          name: "Geeth N",
          role: "Assistant Head of Outreach and Inclusion",
          shortDesc:
            "Vibrant leader with extroverted nature, former Deputy of Events and Head of Communications bringing energy and innovation.",
          fullDesc:
            "Geeth Naresh Kumar, currently serving as the Assistant Head of Outreach and Inclusion, is a vibrant and committed student leader known for her extroverted nature and strong sense of initiative. A former Deputy of Events and Engagement and Head of Communications in the Student Council, Geeth has consistently brought energy and innovation to every role she's taken on. Geeth's inclusive mindset, leadership experience, and ability to connect with peers make her a driving force in building a more engaged and welcoming school community.",
        },
      ],
    },
    {
      name: "Events and Engagement",
      icon: <Calendar className="w-6 h-6" />,
      color: "#9ED2C6",
      description:
        "The Events & Engagement Department plans and executes vibrant school events that boost school spirit.",
      leaders: [
        {
          name: "Varun Niilesh",
          role: "Head of Events and Engagement (SPL)",
          shortDesc:
            "Dynamic SPL with friendly nature, former Assistant Head known for organizing major school events and inspiring peers.",
          fullDesc:
            "Varun Niilesh, currently serving as the SPL and Head of Events and Engagement, is a passionate and dynamic leader known for his friendly and approachable nature. As the former Assistant Head of Events and Engagement, he played a key role in organizing several major school events. His dedication, vision, and ability to connect with others make him a standout figure in student leadership, inspiring peers and driving meaningful school engagement.",
        },
        {
          name: "B. Priyadharishini",
          role: "Head of Events and Engagement",
          shortDesc:
            "Committed leader with deep love for nature, experienced in planning events for younger graders with creative spirit.",
          fullDesc:
            "B. Priyadharishini, currently serving as the Head of Events and Engagement, is a committed and enthusiastic leader with a deep love for nature and community involvement. In previous years, she actively took part in planning and organizing school events for younger graders, gaining valuable experience in teamwork and coordination. Her creative spirit, leadership, and passion for student engagement make her a valued presence in the school leadership landscape.",
        },
        {
          name: "Sahas P",
          role: "Assistant Head of Events and Engagement",
          shortDesc:
            "Active community member and gold medalist runner, organized first assembly and contributed to BMUN and Project Day.",
          fullDesc:
            "Sahas has been an active part of the school community — organizing the very first assembly of the academic year, contributing to BMUN and Project Day, and participating in multiple MUNs. A gold medalist in running and a member of the school throwball team, Sahas brings both discipline and energy. As the Assistant Head of Events and Management, Sahas is committed to making every event well-executed, inclusive, and memorable.",
        },
        {
          name: "Rupinder Kaur",
          role: "Assistant Head of Events and Engagement",
          shortDesc:
            "Steady behind-the-scenes leader with calm, practical mindset and strong teamwork skills keeping events organized.",
          fullDesc:
            "Rupinder Kaur is the current Assistant Head of Events and Engagement, known for her steady dedication and behind the scenes impact on school events. Whether it's coordinating with teams or helping bring ideas to life, she's someone who gets things done without needing the spotlight. With a calm, practical mindset and a strong sense of teamwork, Rupinder plays a key role in keeping events organized and students involved. Her approachable nature and quiet leadership continue to shape a positive and collaborative school environment.",
        },
        {
          name: "Srinithi Balaji",
          role: "Assistant Head of Events and Engagement",
          shortDesc:
            "Creative leader with strong attention to detail, brings energy and structure to projects ensuring smooth execution.",
          fullDesc:
            "Srinithi Balaji currently serves as the Assistant Head of Events and Engagement, playing a key role in organising and executing a wide range of school functions and activities. Known for her creativity, strong leadership skills, and attention to detail, she brings both energy and structure to every project she undertakes. Whether it's coordinating large-scale events, managing logistics, or supporting her team, Srinithi ensures every occasion runs smoothly and memorably. With a passion for planning and a collaborative spirit, she is committed to creating meaningful experiences for the school community.",
        },
      ],
    },
    {
      name: "Creative Expressions",
      icon: <Palette className="w-6 h-6" />,
      color: "#E9DAC1",
      description:
        "The Creative Expressions Department promotes artistic talent through writing, art, music, and design.",
      leaders: [
        {
          name: "Shreeyaa VR",
          role: "Head of Creative Expression",
          shortDesc:
            "Confident leader and exceptional writer-artist, designed BM Gazette Edition 2 with depth and originality.",
          fullDesc:
            "Shreeyaa VR, the Head of Creative Expressions, brings creativity, passion, and vision to the team. Having served as last year's Assistant Head, she has grown into a confident leader who continues to inspire with her ideas and artistry. She played a key role in designing BM Gazette: Edition 2, contributing not just visually but through her powerful writing. An exceptional writer and talented artist, Shreeyaa's work reflects depth, originality, and expression. Her ability to blend words and visuals seamlessly makes her an invaluable asset to the team, and she continues to lead with imagination, and dedication.",
        },
        {
          name: "Varishta Sharravanan",
          role: "Assistant Head of Creative Expression",
          shortDesc:
            "Creative spirit with strong initiative, active contributor bringing fresh ideas and passion for arts and community building.",
          fullDesc:
            "Varishta Sharravanan, currently serving as the Assistant Head of Creative Expressions, is known for her creative spirit and strong sense of initiative. An active contributor to various school projects and events, she brings fresh ideas and dedication to every role she takes on. Her passion for writing, the arts, and community building makes her a dependable leader who aims to inspire her peers and add vibrancy to the school's creative landscape.",
        },
        {
          name: "Riyaa SN",
          role: "Assistant Head of Creative Expression",
          shortDesc:
            "Vibrant leader with innovative thinking, passionate about dance, fashion, and design pursuing art-based career.",
          fullDesc:
            "Riyaa serves as the Assistant Head of Creative Expressions, bringing a vibrant mix of imagination, dedication, and heart to every initiative. Known for her innovative thinking and strong communication skills, she thrives on turning ideas into reality and creating spaces where everyone feels seen and included. With a deep passion for the arts, including dance, fashion, and design, Riyaa is currently pursuing an art-based career that blends creativity with purpose in everything she does. Her ability to lead with empathy and inspiration makes her a driving force behind many of the school's most expressive and impactful projects.",
        },
      ],
    },
    {
      name: "Sports and Wellness",
      icon: <Trophy className="w-6 h-6" />,
      color: "#F7ECDE",
      description: "The Sports and Wellness Department organizes school sporting events, leagues, and Sports Day.",
      leaders: [
        {
          name: "Rahul V",
          role: "Head of Sports and Wellness",
          shortDesc:
            "Dynamic athlete with multiple state-level gold medals and seasoned MUN delegate promoting health and wellness.",
          fullDesc:
            "Rahul Venkateswaran, currently serving as the Head of Sports and Wellness, is a dynamic and well-rounded student leader known for his passion, discipline, and drive. A decorated athlete, he has won multiple state-level gold medals in shot put and discus throw, silver medals in the 100m and 200m sprints, and district-level bronze medals in both badminton and chess. He has actively participated in numerous marathons and has also won many state-level sports events across disciplines, including badminton and chess. A true fitness enthusiast, Rahul is a dedicated gym-goer who strongly believes in promoting health and wellness among his peers. Beyond sports, Rahul is also a seasoned debater and delegate, having participated in over seven Model United Nations (MUN) conferences, where he has earned multiple awards for his impactful speaking, diplomacy, and leadership. His ability to balance academics, athletics, and extracurriculars makes him a standout student leader who inspires others to pursue excellence in all areas of life.",
        },
        {
          name: "Anjana E",
          role: "Assistant Head of Sports and Wellness (ASPL)",
          shortDesc:
            "Dedicated ASPL focused on promoting sports and wellness initiatives throughout the school community.",
          fullDesc:
            "Anjana E serves as the Assistant Head of Sports and Wellness and ASPL, bringing dedication and commitment to promoting sports and wellness initiatives throughout the school community. Her leadership and focus on student well-being make her an essential part of the Sports and Wellness department.",
        },
      ],
    },
  ]

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#54BAB9] via-[#9ED2C6] to-[#E9DAC1]"
          style={{
            backgroundImage: `url('/placeholder.svg?height=800&width=1200')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
          }}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Student Leadership Cabinet
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Meet Our Dedicated Leaders Making a Real Impact
            </p>
            <div className="bg-white/20 text-white border border-white/30 rounded-full text-lg px-6 py-2 inline-block">
              2025-2026 Profiles
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              At BMIS, we are dedicated to fostering the next generation leaders. This year, we are excited to begin the
              process for the student leadership cabinet selection process designed to make a real impact on our school
              community. Previously, student leaders were chosen through a council member nomination and election
              system. We have moved on to a department-based leadership cabinet focusing on:
            </p>
          </div>
        </div>
      </section>

      {/* Department Profiles */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F7ECDE]/40 via-[#E9DAC1]/30 to-[#9ED2C6]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-[#54BAB9]/20 via-transparent to-[#F7ECDE]/30 animate-pulse"></div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#54BAB9]/10 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-[#E9DAC1]/15 rounded-full blur-lg animate-pulse"></div>
        <div
          className="absolute bottom-20 left-1/4 w-40 h-40 bg-[#9ED2C6]/10 rounded-full blur-2xl animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-40 right-1/3 w-28 h-28 bg-[#F7ECDE]/20 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {departments.map((dept, deptIndex) => (
              <div
                key={deptIndex}
                className="bg-white rounded-lg shadow-lg border-t-4 p-6 hover:shadow-xl transition-all duration-300"
                style={{ borderTopColor: dept.color }}
              >
                <div className="flex items-center mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white mr-3"
                    style={{ backgroundColor: dept.color }}
                  >
                    {dept.icon}
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">{dept.name}</h2>
                </div>

                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{dept.description}</p>

                <div>
                  <h4 className="text-base font-semibold text-gray-800 mb-4">Leadership Team</h4>
                  <div className="space-y-3">
                    {dept.leaders.map((leader, leaderIndex) => {
                      const cardId = `${deptIndex}-${leaderIndex}`
                      const isExpanded = expandedCard === cardId
                      const isHovered = hoveredCard === cardId

                      return (
                        <div key={leaderIndex} className="relative">
                          <div
                            className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer border border-gray-200 hover:border-gray-300 hover:shadow-sm"
                            onClick={() => toggleCard(cardId)}
                            onMouseEnter={() => setHoveredCard(cardId)}
                            onMouseLeave={() => setHoveredCard(null)}
                          >
                            <div className="w-14 h-14 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden border-2 border-gray-200">
                              <img
                                src={`/placeholder.svg?height=56&width=56&query=student+portrait+${leader.name.replace(" ", "+")}`}
                                alt={leader.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <p className="font-semibold text-gray-800 text-sm">{leader.name}</p>
                              <p className="text-xs text-gray-600">{leader.role}</p>
                            </div>
                          </div>

                          {/* Hover Tooltip */}
                          {isHovered && (
                            <div className="absolute left-16 top-0 z-50 bg-white p-3 rounded-lg shadow-lg border border-gray-200 max-w-xs transform -translate-y-2 pointer-events-none">
                              <div className="absolute left-0 top-3 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-white transform -translate-x-1"></div>
                              <p className="text-xs text-gray-700 leading-relaxed">{leader.shortDesc}</p>
                            </div>
                          )}

                          {/* Expanded Content */}
                          {isExpanded && (
                            <div className="mt-2 p-3 bg-gray-50 rounded-md border border-gray-100">
                              <p className="text-gray-600 text-xs leading-relaxed">{leader.fullDesc}</p>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
