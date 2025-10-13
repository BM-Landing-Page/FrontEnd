export default function EarlyYears() {
  const colors = {
    sand: "#F7ECDE",
    tan: "#E9DAC1",
    accent: "#9ED2C6",
    brand: "#54BAB9",
    white: "#ffffff",
  }

  const imageClass = "h-40 md:h-48 w-full rounded-md border object-cover" // consistent size across all sections

  return (
    <main className="min-h-dvh w-full" style={{ backgroundColor: colors.white }}>
      {/* Hero */}
      <section className="relative">
        <div
          className="w-full"
          style={{
            backgroundImage: "url('/playful-children-learning-in-bright-classroom-hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
            <div
              className="max-w-2xl rounded-lg border p-4 md:p-6 shadow-sm"
              style={{
                backgroundColor: "rgba(255,255,255,0.9)",
                borderColor: colors.accent,
              }}
            >
              <h1
                className="text-balance text-3xl font-semibold leading-tight md:text-4xl"
                style={{ color: colors.brand }}
              >
                {"Early Years Programme – The BM Way! "}
              </h1>
              <p className="mt-2 text-pretty text-lg md:text-xl" style={{ color: "#222" }}>
                {"Rooted in Inquiry, Rising with Confidence "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-4xl px-4 py-8 md:py-10">
        {/* Center rail */}
        <div
          className="pointer-events-none absolute inset-y-0 hidden md:block"
          style={{
            left: "50%",
            width: "1px",
            transform: "translateX(-1px)",
            backgroundColor: colors.tan,
          }}
        />

        <div className="space-y-8 md:space-y-10">
          {/* Item 1: Intro */}
          <div className="relative grid items-center gap-4 md:grid-cols-2 md:gap-6">
            <span
              aria-hidden
              className="absolute left-1/2 top-4 hidden h-3 w-3 -translate-x-1/2 rounded-full md:block"
              style={{ backgroundColor: colors.brand, boxShadow: `0 0 0 4px ${colors.sand}` }}
            />
            <div className="md:pr-8">
              <img
                src="/curious-kids-exploring-inquiry-based-learning.jpg"
                alt="Children engaged in inquiry-based exploration"
                className={imageClass}
                style={{ borderColor: colors.tan }}
              />
            </div>
            <div className="md:pl-8">
              <p className="text-pretty leading-relaxed" style={{ color: "#222" }}>
                {
                  "At Budding Minds International School (BMIS), every child’s journey begins with wonder, exploration, and joy. Recognized among the best preschools in Chennai, our Early Years Programme lays the foundation for a lifetime of learning — where curiosity leads to understanding, and every question sparks discovery. "
                }
              </p>
              <p className="mt-4 text-pretty leading-relaxed" style={{ color: "#222" }}>
                {"Because the best beginnings build confident, creative learners. "}
              </p>
            </div>
          </div>

          {/* Item 2: Programme offers */}
          <div className="relative grid items-start gap-4 md:grid-cols-2 md:gap-6">
            <span
              aria-hidden
              className="absolute left-1/2 top-4 hidden h-3 w-3 -translate-x-1/2 rounded-full md:block"
              style={{ backgroundColor: colors.accent, boxShadow: `0 0 0 4px ${colors.sand}` }}
            />
            <div className="md:order-2 md:pl-8">
              <img
                src="/play-driven-learning-and-classroom-activities.jpg"
                alt="Play-driven learning environment"
                className={imageClass}
                style={{ borderColor: colors.tan }}
              />
            </div>
            <div className="md:order-1 md:pr-8">
              <p className="font-semibold" style={{ color: colors.brand }}>
                {"Our Early Years Programme offers:  "}
              </p>
              <div
                className="mt-4 rounded-lg border p-3"
                style={{ borderColor: colors.accent, backgroundColor: colors.sand }}
              >
                <p className="leading-relaxed" style={{ color: "#222" }}>
                  {"Inquiry-based, play-driven learning "}
                </p>
                <p className="leading-relaxed" style={{ color: "#222" }}>
                  {"Holistic development across cognitive, emotional, and physical domains  "}
                </p>
                <p className="leading-relaxed" style={{ color: "#222" }}>
                  {"Creative, theme-based curriculum integrating play and academics  "}
                </p>
                <p className="leading-relaxed" style={{ color: "#222" }}>
                  {"Strong communication and literacy foundation through Jolly Phonics "}
                </p>
                <p className="leading-relaxed" style={{ color: "#222" }}>
                  {"Life skills and empathy-based education  "}
                </p>
                <p className="leading-relaxed" style={{ color: "#222" }}>
                  {"Learning through multisensory activities, celebrations, field trips "}
                </p>
              </div>
            </div>
          </div>

          {/* Item 3: Discovery Den */}
          <div className="relative grid items-start gap-4 md:grid-cols-2 md:gap-6">
            <span
              aria-hidden
              className="absolute left-1/2 top-4 hidden h-3 w-3 -translate-x-1/2 rounded-full md:block"
              style={{ backgroundColor: colors.brand, boxShadow: `0 0 0 4px ${colors.sand}` }}
            />
            <div className="md:pl-8 md:order-1">
              <img
                src="/life-skills-confidence-teamwork-children.jpg"
                alt="Life skills sessions building confidence and empathy"
                className={imageClass}
                style={{ borderColor: colors.tan }}
              />
            </div>
            <div className="md:order-2 md:pr-8">
              <h2 className="text-xl font-semibold" style={{ color: colors.brand }}>
                {"Discovery Den! - Life Skills for Everyday Confidence "}
              </h2>
              <p className="mt-3 text-pretty leading-relaxed" style={{ color: "#222" }}>
                {"Our exclusive Life Skills Sessions help children to - "}
              </p>
              <div className="mt-3 space-y-2 leading-relaxed" style={{ color: "#222" }}>
                <p>{"Build confidence and self-awareness "}</p>
                <p>{"Develop empathy and social skills "}</p>
                <p>{"Communicate effectively "}</p>
                <p>{"Solve problems independently "}</p>
                <p>
                  {
                    "These sessions prepare them for life beyond school — shaping emotionally intelligent, kind, and self-assured individuals. "
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Item 4: Skills Hub */}
          <div className="relative grid items-start gap-4 md:grid-cols-2 md:gap-6">
            <span
              aria-hidden
              className="absolute left-1/2 top-4 hidden h-3 w-3 -translate-x-1/2 rounded-full md:block"
              style={{ backgroundColor: colors.accent, boxShadow: `0 0 0 4px ${colors.sand}` }}
            />
            <div className="md:order-2 md:pl-8">
              <img
                src="/multiple-intelligences-kids-activities.jpg"
                alt="Children exploring multiple intelligences"
                className={imageClass}
                style={{ borderColor: colors.tan }}
              />
            </div>
            <div className="md:order-1 md:pr-8">
              <h2 className="text-xl font-semibold" style={{ color: colors.brand }}>
                {"Skills Hub - Discovering Every Child’s Brilliance "}
              </h2>
              <p className="mt-3 text-pretty leading-relaxed" style={{ color: "#222" }}>
                {"Every child is gifted in their own way — and we make sure they know it! "}
                {
                  " Through our Skills hub, children explore and strengthen their unique talents across linguistic, logical, spatial, musical, bodily-kinesthetic, interpersonal, intrapersonal, and naturalistic intelligences. "
                }
              </p>
            </div>
          </div>

          {/* Item 5: Early Literacy + Jolly Phonics */}
          <div className="relative grid items-start gap-4 md:grid-cols-2 md:gap-6">
            <span
              aria-hidden
              className="absolute left-1/2 top-4 hidden h-3 w-3 -translate-x-1/2 rounded-full md:block"
              style={{ backgroundColor: colors.brand, boxShadow: `0 0 0 4px ${colors.sand}` }}
            />
            <div className="md:order-1 md:pl-8">
              <img
                src="/early-literacy-reading-children-jolly-phonics.jpg"
                alt="Early literacy and Jolly Phonics joyful reading"
                className={imageClass}
                style={{ borderColor: colors.tan }}
              />
            </div>
            <div className="md:order-2 md:pr-8">
              <h2 className="text-xl font-semibold" style={{ color: colors.brand }}>
                {"Early Literacy "}
              </h2>
              <p className="mt-3 text-pretty leading-relaxed" style={{ color: "#222" }}>
                {
                  "Our Kindergarten Literacy Programme helps every child become an enthusiastic reader and expressive writer. Our Programme builds independence and confidence in every learner. At BMIS, early literacy begins with joyful read-alouds, exploring different genres of fiction and non-fiction texts that develops a love for book reading at a very early stage of child’s life.  "
                }
              </p>
              <h3 className="mt-5 font-semibold" style={{ color: colors.brand }}>
                {"Jolly Phonics program – Building Strong Readers and Writers "}
              </h3>
              <p className="mt-2 text-pretty leading-relaxed" style={{ color: "#222" }}>
                {"By the end of Kindergarten, With our joyful Jolly Phonics approach, children, "}
              </p>
              <div className="mt-3 space-y-2 leading-relaxed" style={{ color: "#222" }}>
                <p>{"Learn 42 letter sounds through songs, actions & stories "}</p>
                <p>{"Spell and blend letter sounds to read fluently "}</p>
                <p>{"Read simple stories with understanding and enjoyment "}</p>
                <p>{"Write simple short stories, poems and letters with creativity and confidence. "}</p>
              </div>
              <p className="mt-3 text-pretty leading-relaxed" style={{ color: "#222" }}>
                {
                  "Learning is interactive, engaging, and highly effective for young learners. Early literacy at BMIS is not just about reading — it’s about falling in love with language. "
                }
              </p>
            </div>
          </div>

          {/* Item 6: ELPS */}
          <div className="relative grid items-start gap-4 md:grid-cols-2 md:gap-6">
            <span
              aria-hidden
              className="absolute left-1/2 top-4 hidden h-3 w-3 -translate-x-1/2 rounded-full md:block"
              style={{ backgroundColor: colors.accent, boxShadow: `0 0 0 4px ${colors.sand}` }}
            />
            <div className="md:order-2 md:pl-8">
              <img
                src="/hands-on-math-learning-elps-kids.jpg"
                alt="Hands-on numeracy with ELPS approach"
                className={imageClass}
                style={{ borderColor: colors.tan }}
              />
            </div>
            <div className="md:order-1 md:pr-8">
              <h2 className="text-xl font-semibold" style={{ color: colors.brand }}>
                {"Early Numeracy Through Experience (ELPS Approach) "}
              </h2>
              <p className="mt-3 text-pretty leading-relaxed" style={{ color: "#222" }}>
                {"Our numeracy curriculum helps children experience the joy of numbers through the E–L–P–S model: "}
              </p>
              <div className="mt-3 space-y-2 leading-relaxed" style={{ color: "#222" }}>
                <p>{"E – Experience: Hands-on learning through real-life exploration "}</p>
                <p>{"L – Language: Express ideas using mathematical vocabulary "}</p>
                <p>{"P – Pictorial: Represent understanding through visuals "}</p>
                <p>{"S – Symbol: Apply concepts with numbers "}</p>
              </div>
              <p className="mt-3 text-pretty leading-relaxed" style={{ color: "#222" }}>
                {
                  "With engaging tools like Jodo Gyan and Rangometry, children connect maths to the world around them — making numeracy natural, fun, and meaningful.  "
                }
              </p>
            </div>
          </div>

          {/* Item 7: Theme-based curriculum */}
          <div className="relative grid items-start gap-4 md:grid-cols-2 md:gap-6">
            <span
              aria-hidden
              className="absolute left-1/2 top-4 hidden h-3 w-3 -translate-x-1/2 rounded-full md:block"
              style={{ backgroundColor: colors.brand, boxShadow: `0 0 0 4px ${colors.sand}` }}
            />
            <div className="md:pl-8 md:order-1">
              <img
                src="/theme-based-learning-projects-children.jpg"
                alt="Theme-based curriculum with integrated learning"
                className={imageClass}
                style={{ borderColor: colors.tan }}
              />
            </div>
            <div className="md:order-2 md:pr-8">
              <h2 className="text-xl font-semibold" style={{ color: colors.brand }}>
                {"Early exploration of the world - Theme-Based Curriculum "}
              </h2>
              <p className="mt-3 text-pretty leading-relaxed" style={{ color: "#222" }}>
                {
                  "Theme-based approach that connects literacy, numeracy, creativity, and social learning under one central idea. Children explore meaningful themes across weeks, building real-world connections and deep understanding. This helps them think critically, communicate confidently, and express ideas creatively. "
                }
              </p>
              <p className="mt-3 text-pretty leading-relaxed" style={{ color: "#222" }}>
                {
                  "Each day at BMIS is a blend of play, exploration, and purpose — helping children grow into confident, empathetic, and resilient learners. “Children learn best when they’re joyfully engaged — that’s the BM Way!” "
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
