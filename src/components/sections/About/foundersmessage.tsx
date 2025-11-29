import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const heroImage = "/images/school-hero.jpg"

const FoundersMessage = () => {
  return (
    <div className="min-h-screen bg-[#fffaf5] text-[#1e1e1e]">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px]">
        <div className="absolute inset-0">
          <img
            src={heroImage || "/placeholder.svg"}
            alt="Budding Minds School Campus"
            className="w-full h-full object-cover object-bottom contrast-110 saturate-110"
          />
          <div className="absolute inset-0 bg-white/20" />
        </div>
        <div className="relative container mx-auto px-4 text-center h-full flex flex-col items-end justify-end pb-10">
          <div className="w-full">
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-2 text-black drop-shadow-lg">
              From the Founder's Desk
            </h2>
            <p className="text-lg md:text-2xl text-black/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              A personal message about what makes Budding Minds so special
            </p>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 border border-[#f5e8d9] bg-white shadow-md rounded-xl">
              <div className="space-y-6 text-lg leading-relaxed font-body text-[#333]">
                <div className="bg-gradient-to-br from-[#fff0d9] to-[#fef7ed] p-6 rounded-lg border border-[#f5e8d9] italic font-medium text-[#1e1e1e]">
                  "When people ask what makes Budding Minds so special, I often pause—because it's never just one thing.
                  It's a feeling. A rhythm. A spirit that flows quietly yet powerfully through our corridors."
                </div>

                <p>
                  Perhaps it begins with the warmth that welcomes you the very moment you step onto our campus—not only
                  in the cozy, thoughtfully designed learning spaces, but in the genuine smiles of our staff, the gentle
                  hum of curiosity in every classroom, and the small yet meaningful moments of connection that shape
                  each day.
                </p>

                <p>
                  It may be the extraordinary experiences we weave seamlessly into everyday learning—those unplanned
                  sparks of joy, discovery, wonder, and challenge that linger in young minds long after the moment has
                  passed. Or perhaps it's the way our environment continually adapts and evolves—just as our learners
                  do—to stay in tune with a rapidly changing world.
                </p>

            

                <p>
                  As a close-knit community of students, facilitators, and parents, we grow together. We build strong
                  relationships rooted in trust, openness, and a shared purpose.
                </p>

                <p>
                  At Budding Minds, we see every child. We take the time to understand them, to honour who they are, and
                  to give them the freedom to ask, explore, imagine, and take charge of their own learning journeys. For
                  us, true learning goes far beyond academics—it is about nurturing character, confidence, empathy, and
                  resilience.
                </p>

                <p>
                  One of the moments that fills me with immense pride has been witnessing our student council come into
                  its own—not just as organisers of events or representatives of their peers, but as partners in shaping
                  a culture of belonging. Their collaboration with our facilitators is proof that our vision of
                  empowering young leaders is not just aspirational—it is alive and unfolding before our eyes.
                </p>

                <p>
                  At Budding Minds, we do not promise perfection. What we promise is a space where children can grow
                  with courage, learn with joy, and step into the world carrying not only knowledge, but wisdom and
                  heart.
                </p>

                <div className="text-right mt-12 pt-8 border-t border-[#f5e8d9]">
                  <p className="font-heading text-2xl font-bold text-[#0f766e] mb-2">A V Ashok Kumar</p>
                  <p className="text-[#777] text-lg">Founder, Budding Minds International School</p>
                </div>
              </div>
            </Card>

            {/* Navigation Button */}
            <div className="flex justify-center mt-12">
              <Link href="/ourfranchise">
                <div className="flex items-center gap-3 bg-[#54BAB9] hover:bg-[#54BAB9]/90 text-white px-8 py-4 rounded-lg shadow-md transition-colors cursor-pointer">
                  <div className="text-center">
                    <div className="font-semibold text-lg">Our Franchise</div>
                  </div>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            </div>
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
            <h5 className="font-heading font-bold text-white">Budding Minds International School</h5>
          </div>
          <p className="text-white/80">A place where meaningful learning comes to life.</p>
        </div>
      </footer>
    </div>
  )
}

export default FoundersMessage
