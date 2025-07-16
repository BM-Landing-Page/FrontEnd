import { Card } from "@/components/ui/card";

const heroImage = "/images/school-hero.jpg";

const FoundersMessage = () => {
  return (
    <div className="min-h-screen bg-[#fffaf5] text-[#1e1e1e]">

      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px]">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Budding Minds School Campus" 
            className="w-full h-full object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-white opacity-80" />
        </div>
        <div className="relative container mx-auto px-4 text-center h-full flex flex-col justify-center">
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-4 text-[#1e1e1e]">
            From the Founder's Desk
          </h2>
          <p className="text-xl md:text-2xl text-[#444] max-w-2xl mx-auto leading-relaxed">
            A personal message about what makes Budding Minds so special
          </p>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 border border-[#f5e8d9] bg-white shadow-md rounded-xl">
              <div className="space-y-6 text-lg leading-relaxed font-body text-[#333]">
                
                {/* Warm Highlight Box */}
                <div className="bg-gradient-to-br from-[#fff0d9] to-[#fef7ed] p-6 rounded-lg border border-[#f5e8d9] italic font-medium text-[#1e1e1e]">
                  "When people ask what makes Budding Minds so special, I often pause—because it's not just one thing. It's a feeling. A rhythm. A spirit that runs through our corridors."
                </div>

                <p>
                  Perhaps it begins with the warmth that greets you the moment you step onto our campus—not just in the cozy, thoughtfully designed learning spaces, but in the genuine smiles of our staff, the gentle hum of curiosity in every classroom, and the small but powerful moments of connection that fill each day.
                </p>

                <p>
                  It could be the extraordinary experiences we quietly weave into everyday learning—those unplanned sparks of joy, discovery, and challenge that leave lasting imprints on young hearts. Or maybe it's the way our school environment adapts and grows—just like our learners do—to stay in step with a rapidly changing world.
                </p>

                {/* Teal Quote Box */}
                <div className="bg-gradient-to-br from-[#b9f6ef] to-[#d3f2ed] border-l-4 border-[#0d9488] p-6 rounded-lg">
                  <p className="font-semibold text-lg text-[#0f766e]">
                    We are not a large school, but we are deeply rooted. And we dream big.
                  </p>
                </div>

                <p>
                  As a close-knit community of students, facilitators, and parents, we build strong relationships, grounded in trust, support, and shared purpose.
                </p>

                <p>
                  At Budding Minds, we see every child. We take the time to understand them, to honour their uniqueness, and to offer them the freedom to ask questions, explore widely, and take charge of their own learning journeys. We believe true learning goes beyond academics—it's about nurturing character, confidence, and compassion.
                </p>

                <p>
                  One of the proudest moments in our recent journey has been witnessing our student council step forward—not just as event planners or voices of the student body—but as collaborators in creating a culture of belonging. Their partnership with our facilitators shows that our vision of shaping student leaders is not just a dream—it's happening, here and now.
                </p>

                <p>
                  At Budding Minds, we don't promise perfection. But we do promise a space where children can grow with courage, learn with joy, and step into the world equipped not just with knowledge, but with wisdom.
                </p>

                {/* Call-to-Action Highlight */}
                <div className="bg-gradient-to-br from-[#54BAB9] to-[#9ED2C6] p-8 rounded-xl text-center text-white shadow-md space-y-2">
                  <p className="font-semibold text-lg">
                    Come be a part of our story.
                  </p>
                  <p className="text-white/90">
                    Because once you join the Budding Minds family, you'll know—it's not just a school.
                  </p>
                  <p className="font-bold text-xl">
                    It's a place where the best kind of learning happens—the kind that stays with you for life.
                  </p>
                </div>

                {/* Signature */}
                <div className="text-right mt-12 pt-8 border-t border-[#f5e8d9]">
                  <p className="font-heading text-2xl font-bold text-[#0f766e] mb-2">
                    A V Ashok Kumar
                  </p>
                  <p className="text-[#777] text-lg">
                    Founder, Budding Minds International School
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f766e] py-8 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <span className="font-heading font-bold text-white">B</span>
            </div>
            <h5 className="font-heading font-bold text-white">
              Budding Minds International School
            </h5>
          </div>
          <p className="text-white/80">
            A place where the best kind of learning happens
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FoundersMessage;
