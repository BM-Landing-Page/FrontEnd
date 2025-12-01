export default function CareerQuestPage() {
  return (
    <main className="w-full bg-white">
      {/* Hero Banner */}
      <div className="relative w-full h-[60vh] overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <img 
          src="/images/careerquest.jpeg" 
          alt="Career guidance banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
  
        {/* Content */}
        <div className="relative text-center text-white z-10">
          <h1 className="text-4xl font-bold">Career Quest Sessions</h1>
          <p className="text-lg mt-2">Career Learning Series</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Tagline */}
        <div className="mb-6 pb-4 border-b-2" style={{ borderColor: "#9ED2C6" }}>
          <p className="text-lg font-semibold" style={{ color: "#54BAB9" }}>
            Inspiring journeys. Real stories. Endless possibilities.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-5 mb-8">
          <p className="text-gray-700 leading-relaxed">
            As part of our comprehensive Career Guidance Program, Budding Minds International School hosts the Career
            Quest Sessions and Career Learning Series — dynamic platforms that bring the world of work and higher
            education right into our classrooms.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Through these interactive sessions, students engage directly with professionals from diverse industries —
            from doctors to fashion designers, film directors to entrepreneurs, psychologists, investment bankers, bike
            racers, and many more. Each guest shares their real-world experiences, offering students a glimpse into the
            rewards, challenges, and evolving nature of their profession.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Adding to this, college students and alumni pursuing their undergraduate and postgraduate studies join the
            sessions to share valuable insights on admission processes, college life, and essential skills needed to
            thrive in higher education.
          </p>

          <p className="text-gray-700 leading-relaxed">
            These conversations spark curiosity, broaden perspectives, and help our learners make informed choices about
            their futures.
          </p>
        </div>

        {/* Closing Statement */}
        <div className="p-4 rounded-lg" style={{ backgroundColor: "#E9DAC1" }}>
          <p className="text-gray-700 leading-relaxed font-semibold">
            At BMIS, the Career Quest and Career Learning Series aren't just about exploring careers — they're about
            inspiring aspirations and empowering students to design their own success stories.
          </p>
        </div>
      </div>
    </main>
  )
}
