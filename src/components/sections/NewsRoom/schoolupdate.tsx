import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Calendar, Building2, Plane, Users, Sparkles, ArrowRight } from "lucide-react"

export default function SchoolUpdate() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#F7ECDE]/20 to-[#E9DAC1]/30">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-[#54BAB9]/10 to-[#9ED2C6]/10 blur-xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 rounded-full bg-gradient-to-l from-[#E9DAC1]/20 to-[#F7ECDE]/20 blur-2xl"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 rounded-full bg-gradient-to-t from-[#9ED2C6]/15 to-[#54BAB9]/15 blur-xl"></div>
      </div>

      {/* Hero Banner */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/schoolupdate.jpg"
            alt="School Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#54BAB9]/80 via-[#9ED2C6]/70 to-[#54BAB9]/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div className="text-white">
            <h1 className="text-6xl md:text-8xl font-black mb-6 drop-shadow-lg">School Updates</h1>
            <p className="text-2xl md:text-3xl font-semibold mb-8 drop-shadow-md max-w-4xl mx-auto">
              Budding Minds is back with exciting updates for the 2025-26 academic year
            </p>
            <div className="flex justify-center">
              <div className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold shadow-lg">
                <Sparkles className="h-6 w-6" />
                <span className="text-xl">Latest News & Updates</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-7xl relative">
        {/* Hero Update - Large Featured Card */}
        <div className="mb-12">
          <Card className="border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-[#54BAB9] to-[#9ED2C6] text-white transform hover:scale-[1.02] transition-all duration-500">
            <div className="relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

              <CardContent className="p-12 relative z-10">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm">
                        <Plane className="h-8 w-8" />
                      </div>
                      <div>
                        <h2 className="text-4xl font-bold">European Adventure</h2>
                        <p className="text-xl opacity-90">Germany 2026</p>
                      </div>
                    </div>

                    <p className="text-lg leading-relaxed mb-6 opacity-95">
                      Following the unforgettable trips to France, the school community is set to embark on another
                      European adventure. An international educational visit to Germany is to be rolled out to the
                      student community!
                    </p>

                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                        <Calendar className="h-5 w-5" />
                        <span>2025-26 Academic Year</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                        <MapPin className="h-5 w-5" />
                        <span>Germany</span>
                      </div>
                    </div>

                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <p className="font-semibold flex items-center gap-2">
                        <span className="text-2xl">📢</span>
                        Travellers, keep your ears open for more updates!
                      </p>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="relative inline-block">
                      <div className="w-48 h-48 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <div className="text-6xl">🇩🇪</div>
                      </div>
                      <div className="absolute -bottom-4 -right-4 bg-[#F7ECDE] text-[#54BAB9] px-4 py-2 rounded-full font-bold shadow-lg">
                        Coming 2026!
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Infrastructure Update - Creative Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Infrastructure Card */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-[#F7ECDE] to-[#E9DAC1] overflow-hidden h-full">
              <CardHeader className="pb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-[#54BAB9] text-white">
                      <Building2 className="h-8 w-8" />
                    </div>
                    <div>
                      <CardTitle className="text-3xl text-[#54BAB9]">Infrastructure Expansion</CardTitle>
                      <CardDescription className="text-lg text-gray-600">New High School Block</CardDescription>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-[#54BAB9]">July 26th</div>
                    <div className="text-sm text-gray-600">Grand Opening</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  As the Budding Minds community expands, so does our infrastructure! We are thrilled to unveil our new
                  high school block, designed to enhance student experiences.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/70 p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
                    <div className="text-4xl mb-4">🎭</div>
                    <h4 className="text-xl font-bold text-[#54BAB9] mb-3">State-of-the-Art Amphitheater</h4>
                    <p className="text-gray-600">Perfect for performances, presentations, and community gatherings</p>
                  </div>

                  <div className="bg-gradient-to-br from-[#9ED2C6] to-[#54BAB9] p-6 rounded-2xl shadow-lg text-white transform hover:scale-105 transition-all duration-300">
                    <div className="text-4xl mb-4">⚽</div>
                    <h4 className="text-xl font-bold mb-3">Rooftop Sports Turf</h4>
                    <p className="opacity-90">Dynamic space crafted to inspire our growing student community</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Side Stats Card */}
          <div className="space-y-6">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-[#9ED2C6] to-[#54BAB9] text-white">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <div className="text-3xl font-bold mb-2">Growing</div>
                <div className="text-lg opacity-90">Community</div>
                <div className="mt-4 text-sm opacity-80">Expanding to serve more students</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">🏗️</div>
                <div className="text-2xl font-bold text-[#54BAB9] mb-2">Modern Facilities</div>
                <div className="text-gray-600">Built for the future of education</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16">
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-[#F7ECDE] via-white to-[#E9DAC1] overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#54BAB9] via-[#9ED2C6] to-[#54BAB9]"></div>

              <h3 className="text-4xl font-bold mb-6 text-[#54BAB9]">Growing Together, Building Tomorrow</h3>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
                These exciting developments reflect our commitment to providing world-class education and experiences
                that prepare our students for global success.
              </p>

              <div className="flex justify-center items-center gap-3 text-[#54BAB9] font-semibold text-lg">
                <span>Stay tuned for more updates</span>
                <ArrowRight className="h-6 w-6 animate-pulse" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
