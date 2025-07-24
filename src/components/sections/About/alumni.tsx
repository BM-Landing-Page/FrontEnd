"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Users, MapPin, Calendar, Quote } from "lucide-react"
import Image from "next/image"

const alumniVoices = {
  2024: [
    {
      name: "Sushil Raaja U",
      course: "B.Tech CSE",
      university: "IIIT Hyderabad",
      testimonial:
        "The 15 years that I spent at BMIS was undoubtedly the best part of my life. I am blessed to have got the best set of teachers and the best set of friends ever! Thanks to BMIS for shaping my future in a promising way. My alma mater gives me the assurance that I am set not just for a career, but life as well.",
    },
    {
      name: "Varshith V",
      course: "BSC – Dual degree",
      university: "Woxsen University – Hyderabad",
      testimonial:
        "Budding minds has opened various doors for me not only in academics, but with respect to various extra-curricular activities as well. If it was not for BMIS, I wouldn't be able to pick the mike so freely and speak my heart out confidently, in any arena. In this journey I made ever lasting bonds with teachers and class mates and juniors. The learning curriculum was super-engaging and interesting which made me enjoy every class, including the well-intended reprimands and criticisms from my teachers, which will be etched in my heart for ever. Separating from BMIS is heart-wrenching – will remember this journey forever!",
    },
    {
      name: "Shashaank Vaidyanathan",
      course: "B.Tech IT",
      university: "Chennai Institute of Technology",
      testimonial:
        "I am delighted to share my experience at BMIS. I was blessed to have a team of such supportive teachers who pushed me to excel in both academics and extra curriculars. My personal favourite – the Specials offered at BMIS was very diverse and allowed me to balance my interests and hobbies along with my curricular requirements. Special mention should go to the Sports Days and Kidsfest, which have pushed the boundaries and enhanced my life – skills.",
    },
    {
      name: "Deetya Vineeth",
      course: "B.Tech Mechatronics",
      university: "SRM Katangalathur",
      testimonial:
        "Involvement in extra-curricular activities like Sports, Athletics, Specials and kidsfest helped me discover more about myself & instilled passion for multi-faceted interests in me. Educational trips were not only helpful to make me more independent, but also brought me closer to my friends. Teachers' unwavering support and friendliness made my academic journey easier and more memorable.",
    },
    {
      name: "Akilesh A",
      course: "B.Tech in Electrical & Computer Engineering",
      university: "Shiv Nadar University (Delhi NCR)",
      testimonial:
        "I have been a part of Budding Minds for the past 15 years. It's been a long journey and I have grown with this school. Each and every moment here has taught me something new in my life. The opportunity and the experiences here are too vast to be enumerated. The exposure given by our school has always helped me at different situations, and hopefully will continue being of utmost significance in the future years to come.",
    },
  ],
  2023: [
    {
      name: "Deepiga Shri S",
      course: "B.Sc. Psychology",
      university: "Women's Christian College (WCC)",
      testimonial:
        "My educational journey at Budding Minds has been extremely empowering and enriching. The multifaceted pedagogy made learning an enjoyable and rich experience. The practice of escalating learning beyond classrooms by providing extracurricular and leadership opportunities, made me explore different skills such as debating, research and public speaking. BMIS emphasizes on student's voice, ideas and abilities and establishes a partnership between the teachers and students which makes learning inclusive for all of us. Right from the beginning, we were taught to uphold our core values across various social settings which is why I am able to thrive and adapt to crisis and challenges around me. Every Student is enlightened with a 'Spark Moment' that gives direction to their goals and ambitions. Educational Trips at school paved way for my journey of self-discovery and rationalise my subject choices. My teachers have played a crucial role in addressing my academic challenges and in leveraging my soft skills, which is why I have been able to push my boundaries and unleash my maximum potential.",
    },
  ],
  2022: [
    {
      name: "Srilakshmi Balaji",
      course: "B.Sc. Psychology",
      university: "Indian Institute of Psychology and Research, Bangalore",
      testimonial:
        "Budding minds has laid by the foundation for many skills and knowledge areas that has been proven beneficial for my college experience. This includes, my leadership qualities, my ability to plan and organise events, being able to think forward in time and plan out my future career life. Budding Minds has taught me the importance of research and that helps not only in college but on a general basis to make sure of the legitimacy of each and every work I do. As a proud student from Budding minds, I have always been encouraged to be a problem solver, and the skill sets required to be one has already been established in me ever since my childhood, thanks to BMIS 🫶",
    },
    {
      name: "Sanjanya A S",
      course: "B.Tech CSE AIML",
      university: "SRM Institute of Science and Technology (Katangalathur)",
      testimonial:
        "My academic journey in the Computer Science with AIML course at SRM University has been significantly shaped by the invaluable experiences I gained at Budding Minds. From the outset, my school was more than just an educational institution; it provided a nurturing environment that shaped my approach to learning and problem-solving. Budding Minds' emphasis on hands-on learning profoundly enhanced my critical thinking and problem-solving skills, proving indispensable in tackling the complexities of AI at the university level. Engaging in practical activities and real-world simulations equipped me with a solid grasp of artificial intelligence and machine learning concepts. The supportive educators at Budding Minds played a pivotal role in guiding and motivating me, fostering confidence and determination within me. The strong sense of camaraderie among peers not only fueled my academic growth but also shaped my character. As I navigate my academic pursuits at SRM, I carry with me the invaluable lessons and values instilled in me at Budding Minds. The emphasis on resilience, curiosity, and continual learning continues to propel my studies at the university. In essence, my time at Budding Minds laid a sturdy foundation for my academic journey, enriching my comprehension and shaping my learning approach. I am grateful for the enduring impact of my alma mater, which continues to steer me toward academic success at SRM University.",
    },
  ],
}

const universities = {
  2024: [
    "University of Arizona",
    "Deakin University, Australia",
    "Shiv Nadar University – Delhi",
    "Flame University",
    "NMIMS Mumbai",
    "Christ University",
    "Indian Institute of Psychology & Research (IIPR)",
    "Krea University",
    "Woxsen University",
    "IIIT Hyderabad",
    "IIT Gandhinagar",
    "Vellore Institute of Technology",
    "SRM",
    "Sri Ramachandra College Engineering and Technology",
    "Chennai Institute of Technology",
    "Sathyabama University",
  ],
  2023: [
    "York University, England",
    "Indian Institute of Psychology & Research (IIPR)",
    "Women's Christian College",
    "Bannari Amman Institute of Technology",
    "Chennai Institute of Technology",
  ],
  2022: [
    "Shiv Nadar University – Delhi",
    "Christ University",
    "Jain University Bangalore",
    "Hindustan Institute of Technology and Science",
    "Manipal University",
    "Amrita Vishwa Vidyapeetham",
    "Indian Institute of Psychology & Research (IIPR)",
    "Vellore Institute of Technology",
    "SRM",
    "Chandigarh University",
  ],
}

export default function Alumni() {
  const [activeMainTab, setActiveMainTab] = useState<"voices" | "universities">("voices")
  const [activeBatch, setActiveBatch] = useState<"2024" | "2023" | "2022">("2022")
  const batches = ["2022", "2023", "2024"] as const

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden bg-gray-100">
        <div className="absolute inset-0">
          <Image
            src="/images/alumni.jpg"
            alt="Alumni Hero Banner"
            fill
            className="object-cover object-top opacity-40"
            style={{ objectPosition: "50% 20%" }}
          />
        </div>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
              style={{ backgroundColor: "#54BAB9" }}
            >
              <GraduationCap className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-5xl font-bold text-gray-800 mb-4">Alumni Voices</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Celebrating the achievements and journeys of our remarkable graduates
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="sticky top-0 z-20 bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8 py-4">
            {[
              { key: "voices", label: "Alumni Voices", icon: Users },
              { key: "universities", label: "Universities", icon: MapPin },
            ].map(({ key, label, icon: Icon }) => (
              <motion.button
                key={key}
                onClick={() => setActiveMainTab(key as "voices" | "universities")}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeMainTab === key ? "text-white shadow-lg" : "text-gray-600 hover:text-gray-800"
                }`}
                style={{
                  backgroundColor: activeMainTab === key ? "#54BAB9" : "transparent",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Batch Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center space-x-4 mb-8">
          {batches.map((batch) => (
            <motion.button
              key={batch}
              onClick={() => setActiveBatch(batch)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeBatch === batch ? "text-white shadow-lg" : "text-gray-600 hover:text-gray-800"
              }`}
              style={{
                backgroundColor: activeBatch === batch ? "#9ED2C6" : "#F7ECDE",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-4 h-4" />
              <span>Class of {batch}</span>
            </motion.button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeMainTab === "voices" ? (
            <motion.div
              key="voices"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid gap-8 md:gap-12">
                {alumniVoices[activeBatch]?.map((alumni, index) => (
                  <motion.div
                    key={`${alumni.name}-${index}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                      <CardContent className="p-8" style={{ backgroundColor: index % 2 === 0 ? "#F7ECDE" : "#E9DAC1" }}>
                        <div className="flex flex-col lg:flex-row gap-6">
                          <div className="lg:w-1/3">
                            <div className="flex items-center space-x-3 mb-4">
                              <div
                                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                                style={{ backgroundColor: "#54BAB9" }}
                              >
                                {alumni.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </div>
                              <div>
                                <h3 className="text-xl font-bold text-gray-800">{alumni.name}</h3>
                                <div
                                  className="inline-block px-3 py-1 rounded-full text-sm font-medium mt-1"
                                  style={{ backgroundColor: "#9ED2C6", color: "white" }}
                                >
                                  Class of {activeBatch}
                                </div>
                              </div>
                            </div>
                            <div className="space-y-2 text-sm text-gray-600">
                              <div className="flex items-center space-x-2">
                                <GraduationCap className="w-4 h-4" />
                                <span>{alumni.course}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <MapPin className="w-4 h-4" />
                                <span>{alumni.university}</span>
                              </div>
                            </div>
                          </div>
                          <div className="lg:w-2/3">
                            <div className="relative">
                              <Quote className="absolute -top-2 -left-2 w-8 h-8 text-gray-300" />
                              <p className="text-gray-700 leading-relaxed pl-6 italic">{alumni.testimonial}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="universities"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="shadow-lg border-0">
                <CardContent className="p-8" style={{ backgroundColor: "#F7ECDE" }}>
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Universities - Class of {activeBatch}</h2>
                    <p className="text-gray-600">Our graduates have been accepted to these prestigious institutions</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {universities[activeBatch]?.map((university, index) => (
                      <motion.div
                        key={`${university}-${index}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05, duration: 0.4 }}
                        className="p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-white border-l-4"
                        style={{ borderLeftColor: "#54BAB9" }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                            style={{ backgroundColor: "#9ED2C6" }}
                          >
                            {index + 1}
                          </div>
                          <span className="text-gray-800 font-medium">{university}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <div
                      className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-white font-semibold"
                      style={{ backgroundColor: "#54BAB9" }}
                    >
                      <GraduationCap className="w-5 h-5" />
                      <span>{universities[activeBatch]?.length} Universities</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Stats */}
      <div className="py-16" style={{ backgroundColor: "#E9DAC1" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: "50+", label: "Alumni Worldwide", icon: Users },
              { number: "30+", label: "Universities", icon: MapPin },
              { number: "3", label: "Graduating Batches", icon: Calendar },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="text-center"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white"
                  style={{ backgroundColor: "#54BAB9" }}
                >
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
