import { BookOpen, Users, Target, Heart, Award, Star, Lightbulb, Users2, ArrowRight } from "lucide-react"
import Link from "next/link"

const About = () => {
  const coreValues = [
    {
      title: "Integrity",
      description: "Acting with honesty, fairness, responsibility, and loyalty in all our actions.",
      icon: Heart,
      color: "bg-[#54BAB9]",
    },
    {
      title: "Respect",
      description: "Treating others and our environment with kindness, care, and consideration.",
      icon: Users,
      color: "bg-[#9ED2C6]",
    },
    {
      title: "Responsibility",
      description: "Taking ownership of our actions and our learning journeys.",
      icon: Target,
      color: "bg-[#E9DAC1]",
    },
    {
      title: "Excellence",
      description:
        "Striving to be the best version of ourselves in all we do and celebrating each achievement, big or small.",
      icon: Award,
      color: "bg-[#F7ECDE]",
    },
  ]

  const offerings = [
    "Academically rigorous yet supportive, helping each child discover and develop their potential.",
    "Meaningful and future-relevant, preparing students to navigate and contribute to the world they live in.",
    "Focused on 21st-century skills like creative and critical thinking, collaboration, problem-solving, and effective communication.",
    "Rooted in global citizenship, encouraging students to be responsible, open-minded individuals in an ever-changing world.",
    "Driven by a passion for lifelong learning, cultivating curiosity and the joy of discovery every step of the way.",
  ]

  const philosophyPoints = [
    "Every individual feels seen, heard, and respected",
    "Courtesy and kindness are part of daily interactions",
    "Learning is engaging, meaningful, and motivating",
    "Students are encouraged to take risks and celebrate both effort and achievement",
    "The social, emotional, physical, and intellectual needs of each child are nurtured",
    "Cultural diversity is embraced and celebrated",
    "Communication is open, honest, and respectful",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image Banner */}
      <section
        className="relative h-[50vh] flex items-center justify-center text-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/about.jpg')`,
        }}
      >
        {/* Navigation Button at Top - positioned within hero section */}
        <div className="absolute top-4 right-4 z-30">
          <Link href="/foundersmessage">
            <div className="bg-[#54BAB9] hover:bg-[#54BAB9]/90 text-white shadow-lg px-4 py-2 rounded-md flex items-center gap-2 transition-colors cursor-pointer">
              Founder's Message
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-[#54BAB9] text-white px-6 py-2 rounded-full mb-6">
            <BookOpen className="w-5 h-5" />
            <span className="font-semibold">BUDDING MINDS INTERNATIONAL SCHOOL</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">Building Healthy Minds</h1>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Our motto "Building Healthy Minds" is more than a phrase—it is the foundation of everything we do. We
            provide a vibrant, nurturing environment where students explore, grow, and reach their full potential.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            At BMIS, we are committed to cultivating not only academic excellence but also strong values that prepare
            students for life beyond the classroom. We are not just shaping minds—we are shaping futures.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">We believe that strong character builds strong futures</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center"
              >
                <div className={`${value.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What We Offer Our Students</h2>
            <p className="text-lg text-gray-600">We are dedicated to delivering an educational experience that is:</p>
          </div>
          <div className="space-y-4">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              >
                <div className="bg-[#9ED2C6] rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed">{offering}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Philosophy</h2>
            <p className="text-lg text-gray-600">We believe that learning flourishes in an environment where:</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {philosophyPoints.map((point, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#9ED2C6] to-[#54BAB9] rounded-lg p-6 text-white shadow-lg"
              >
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 flex-shrink-0 mt-1" />
                  <p className="font-medium text-sm leading-relaxed">{point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#54BAB9] rounded-full w-12 h-12 flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Grounded in our values, BMIS is dedicated to intercultural understanding and the development of each
                child's unique talents.
              </p>
            </div>
            {/* Vision */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#9ED2C6] rounded-full w-12 h-12 flex items-center justify-center">
                  <Users2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "Budding Minds develops student leaders by providing opportunities to build 21st-century skills,
                supported by a nurturing infrastructure for holistic learning, and guided by a competent and empowered
                community."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#54BAB9] to-[#9ED2C6] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">At BMIS, we are not just shaping minds—we are shaping futures.</h2>
          <p className="text-lg opacity-90 mb-8">
            Join us in our mission to build healthy minds and create tomorrow's leaders.
          </p>

          {/* Navigation Button at Bottom */}
          <Link href="/foundersmessage">
            <div className="inline-flex items-center gap-2 bg-white text-[#54BAB9] hover:bg-gray-100 font-semibold px-8 py-3 text-lg shadow-lg rounded-md transition-colors cursor-pointer">
              Read Founder's Message
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About
