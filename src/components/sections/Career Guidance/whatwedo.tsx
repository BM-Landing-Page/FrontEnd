"use client"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CareerGuidancePage() {
  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          background-color: #ffffff;
        }
        .hero-section {
          position: relative;
          height: 350px;
          background: linear-gradient(135deg, #54BAB9 0%, #9ED2C6 100%);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-image {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.85;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(84, 186, 185, 0.7) 0%, rgba(158, 210, 198, 0.7) 100%);
        }
        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          color: white;
          padding: 2rem;
          max-width: 800px;
        }
        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 0.3rem;
          letter-spacing: -1px;
          line-height: 1.2;
        }
        .hero-subtitle {
          font-size: 1.3rem;
          font-weight: 300;
          opacity: 0.95;
          letter-spacing: 0.5px;
        }
        .intro-section {
          padding: 1.5rem 4rem;
          background-color: #ffffff;
          /* removed border-bottom line */
        }
        .intro-text {
          font-size: 1rem;
          line-height: 1.6;
          color: #333;
          margin-bottom: 0.6rem;
          max-width: 1400px;
          margin-left: auto;
          margin-right: auto;
        }
        .intro-text:last-child {
          margin-bottom: 0;
        }
        .intro-highlight {
          color: #54BAB9;
          font-weight: 700;
        }
        /* Updated grid to single column layout */
        .sections-container {
          padding: 1.5rem 4rem;
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        .section-item {
          display: flex;
          flex-direction: column;
          border-radius: 12px;
          overflow: hidden;
          background: #ffffff;
          border: 1px solid #E9DAC1;
          transition: all 0.3s ease;
        }
        .section-item:hover {
          box-shadow: 0 8px 24px rgba(84, 186, 185, 0.12);
          transform: translateY(-2px);
        }
        /* Removed grid-column span and kept consistent flex-direction */
        .section-item:first-child {
          flex-direction: column;
        }
        .section-item:first-child .section-visual {
          width: 100%;
          height: auto;
          min-height: 180px;
        }
        .section-item:first-child .section-content {
          width: 100%;
        }
        .section-visual {
          background: linear-gradient(135deg, #54BAB9 0%, #9ED2C6 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 2.5rem;
          font-weight: 300;
          text-align: center;
          padding: 1.5rem;
          min-height: 180px;
          order: 2;
        }
        .section-content {
          padding: 1.5rem;
          order: 1;
          display: flex;
          flex-direction: column;
        }
        .section-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #54BAB9;
          margin-bottom: 0.4rem;
          line-height: 1.3;
        }
        .section-title strong {
          display: block;
          color: #333;
          font-size: 1rem;
          margin-top: 0.3rem;
          font-weight: 600;
        }
        .section-text {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #555;
          margin-bottom: 0.6rem;
        }
        .section-text:last-of-type {
          margin-bottom: 0;
        }
        .section-accent {
          display: inline;
          color: #54BAB9;
          font-weight: 600;
        }
        .partners-list {
          margin-top: 0.8rem;
          padding-top: 0.8rem;
          border-top: 2px solid #9ED2C6;
        }
        .partner-item {
          padding: 0.3rem 0;
          color: #666;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .partner-item::before {
          content: '→';
          color: #9ED2C6;
          font-weight: 700;
          flex-shrink: 0;
        }
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          .hero-subtitle {
            font-size: 1.1rem;
          }
          .hero-section {
            height: 300px;
          }
          .sections-container {
            grid-template-columns: 1fr;
            padding: 1rem;
            gap: 1rem;
          }
          .section-item:first-child {
            flex-direction: column;
          }
          .section-item:first-child .section-visual {
            width: 100%;
          }
          .section-item:first-child .section-content {
            width: 100%;
          }
          .intro-section {
            padding: 1rem;
          }
          .section-content {
            padding: 1rem;
          }
          .section-title {
            font-size: 1.2rem;
          }
          .section-title strong {
            font-size: 0.95rem;
          }
        }
      `}</style>
      {/* Hero Section */}
      <section className="hero-section">
        <img src="/students-in-classroom-learning-career-guidance.jpg" alt="Career Guidance" className="hero-image" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Futures</h1>
          <p className="hero-subtitle">Career Guidance Program @ BMIS</p>
        </div>
      </section>
      {/* Introduction Section */}
      <section className="intro-section">
        <p className="intro-text">
          <span className="intro-highlight">Discover your passion. Design your future.</span>
        </p>
        <p className="intro-text">
          At Budding Minds International School, we believe that every learner deserves the chance to dream big — and
          the right guidance to get there. Our Career Guidance Program equips students with the self-awareness,
          exposure, and experience needed to make confident, informed choices about their academic and professional
          journeys.
        </p>
        <p className="intro-text">
          From exploring personal strengths to gaining real-world insights, we help our students navigate the path to
          their future — one meaningful step at a time. At Budding Minds, career guidance isn't a one-time event — it's
          a journey of discovery. We help our learners see beyond the present, dream fearlessly, and step forward with
          direction and confidence.
        </p>
      </section>
      {/* Content Sections */}
      <section className="sections-container">
        {/* Psychometric Assessments */}
        <div className="section-item">
          <div className="section-content">
            <h2 className="section-title">
              Psychometric Assessments
              <strong>Understand yourself. Uncover your potential.</strong>
            </h2>
            <p className="section-text">
              The first step to choosing the right career is understanding who you are. Our psychometric assessments
              offer valuable insights into each student's abilities, interests, and personality traits. These tools help
              students identify their skills, values, and motivations, revealing career paths that align with their
              strengths and passions.
            </p>
            <p className="section-text">
              Each assessment is followed by one-on-one discussions with our career counsellor — helping students
              translate insights into action and build a roadmap for their future success.
            </p>
          </div>
        </div>
        {/* Career Fairs */}
        <div className="section-item">
          <div className="section-content">
            <h2 className="section-title">
              Career Fairs
              <strong>Explore possibilities. Connect with the world.</strong>
            </h2>
            <p className="section-text">
              We bring the world of opportunities to our students through Career Fairs organized in partnership with
              reputed organizations and universities, both within India and abroad. These events provide students with
              the chance to interact directly with industry professionals, education consultants, and global university
              representatives.
            </p>
            <p className="section-text">
              Along with our current partner <span className="section-accent">Cialfo</span>, our past collaborations
              with <span className="section-accent">Manya</span> and{" "}
              <span className="section-accent">IDP Education</span> have given students a front-row view of emerging
              careers, university pathways, and the evolving professional landscape — inspiring them to think big and
              plan strategically.
            </p>
          </div>
        </div>
        {/* Internship Opportunities */}
        <div className="section-item">
          <div className="section-content">
            <h2 className="section-title">
              Internship Opportunities
              <strong>Experience the world of work before stepping into it.</strong>
            </h2>
            <p className="section-text">
              For our Grade 12 students, learning extends beyond the classroom through structured internship
              opportunities. These experiences allow students to gain first-hand exposure to workplace dynamics, apply
              their learning in practical settings, and develop critical 21st-century skills like collaboration,
              leadership, and adaptability.
            </p>
            <p className="section-text">
              Students participate in in-school internships or work with our valued partner organizations, including:
            </p>
            <div className="partners-list">
              <div className="partner-item">Prathikshaa Learning Centre</div>
              <div className="partner-item">BMIS In-house Internships</div>
              <div className="partner-item">OTOMATIKS Robotics Academy</div>
              <div className="partner-item">IYPAN Educational Centre (ISML)</div>
            </div>
            <p className="section-text" style={{ marginTop: "0.6rem" }}>
              Each internship helps students discover where their true interests lie — turning curiosity into clarity
              and potential into purpose.
            </p>
          </div>
        </div>
      </section>
      <div className="py-6 bg-white">
        <div className="flex justify-center">
          <Link href="/cialfo" className="inline-block">
            <div className="flex items-center gap-3 bg-[#54BAB9] hover:bg-[#54BAB9]/90 text-white px-6 py-3 rounded-lg shadow-md transition-colors cursor-pointer">
              <div className="text-center">
                <div className="font-semibold text-base">CIALFO</div>
              </div>
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
