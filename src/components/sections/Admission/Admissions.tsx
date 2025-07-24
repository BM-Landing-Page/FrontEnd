"use client"
import { GraduationCap, Calendar, FileText, Users, CheckCircle, AlertCircle, FileCheck, Clock } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { type: "spring", stiffness: 300, damping: 20 },
}

const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const slideInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

// Custom hook for scroll animations
function useScrollAnimation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  return { ref, isInView }
}

const Admissions = () => {
  const heroRef = useScrollAnimation()
  const eligibilityRef = useScrollAnimation()
  const processRef = useScrollAnimation()
  const docsRef = useScrollAnimation()
  const gradesRef = useScrollAnimation()
  const ctaRef = useScrollAnimation()

  const handleApplicationClick = () => {
    window.open(
      "https://buddingminds.myschoolone.com/cloud/Admission/EnquiryForm.php?ksjdkjsd=MQ==",
      "_blank",
      "noopener,noreferrer",
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <motion.section
        ref={heroRef.ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[50vh] flex items-center overflow-hidden"
      >
        {/* Background Image - Covers entire hero, centered */}
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Happy children at school with colorful fence"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-black/15"></div>
        </div>
        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Admissions – Academic Year 2025–26
            </motion.h1>
            <motion.p
              className="text-xl max-w-3xl mx-auto text-white/90 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Join our nurturing community where young minds flourish and grow through innovative learning experiences
            </motion.p>
            <motion.div
              className="inline-flex items-center px-8 py-4 font-semibold rounded-lg cursor-pointer text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#54BAB9]/25"
              style={{ backgroundColor: "#54BAB9" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(84, 186, 185, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleApplicationClick}
            >
              Start Your Application
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Eligibility Criteria */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={eligibilityRef.ref}
            initial="initial"
            animate={eligibilityRef.isInView ? "animate" : "initial"}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Eligibility Criteria</h2>
            <p className="text-xl text-gray-600">Eligible Age (as on 1st June 2025)</p>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            variants={staggerContainer}
            initial="initial"
            animate={eligibilityRef.isInView ? "animate" : "initial"}
          >
            {[
              { age: "2+", title: "Play Group", years: "2 years", bg: "#F7ECDE" },
              { age: "3+", title: "Preschool", years: "3 years", bg: "#E9DAC1" },
              { age: "4+", title: "Pre-Primary 1", years: "4 years", bg: "#F7ECDE" },
              { age: "5+", title: "Pre-Primary 2", years: "5 years", bg: "#F7ECDE" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl border border-gray-200 cursor-pointer"
                style={{ backgroundColor: item.bg }}
                variants={fadeInUp}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-center">
                  <motion.div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: "#54BAB9" }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="font-bold text-xl text-white">{item.age}</span>
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.years}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16" style={{ backgroundColor: "#F7ECDE" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={processRef.ref}
            initial="initial"
            animate={processRef.isInView ? "animate" : "initial"}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Admission Process</h2>
            <p className="text-xl text-gray-600">Academic Year 2025–26</p>
          </motion.div>
          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="initial"
            animate={processRef.isInView ? "animate" : "initial"}
          >
            {/* Step 1 */}
            <motion.div
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-200"
              variants={slideInLeft}
              whileHover={{
                boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 },
              }}
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <motion.div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#54BAB9" }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-white font-bold text-lg">1</span>
                  </motion.div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                      <FileText className="w-6 h-6 mr-2" style={{ color: "#54BAB9" }} />
                    </motion.div>
                    Submission of Enquiry Form
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <motion.li
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={processRef.isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.2 }}
                    >
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" style={{ color: "#9ED2C6" }} />
                      Parents must complete the online enquiry form with accurate details
                    </motion.li>
                    <motion.li
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={processRef.isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.3 }}
                    >
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" style={{ color: "#9ED2C6" }} />
                      Ensure the child's name and date of birth match those on the birth certificate
                    </motion.li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-200"
              variants={slideInRight}
              whileHover={{
                boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 },
              }}
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <motion.div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#54BAB9" }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-white font-bold text-lg">2</span>
                  </motion.div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                      <Calendar className="w-6 h-6 mr-2" style={{ color: "#54BAB9" }} />
                    </motion.div>
                    {"Know Your School"} Session & Student Assessment
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    {[
                      "Parents will be invited to a 'Know Your School' session, which introduces the school's vision, curriculum, and learning environment",
                      "The date will be shared via email one week in advance",
                      "Student assessments will be conducted for applicants seeking admission to PP2 and above",
                      "A non-refundable registration fee of ₹1,500/- is to be paid at this stage",
                    ].map((text, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: 20 }}
                        animate={processRef.isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                      >
                        {index === 3 ? (
                          <AlertCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" style={{ color: "#54BAB9" }} />
                        ) : (
                          <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" style={{ color: "#9ED2C6" }} />
                        )}
                        {text}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-200"
              variants={slideInLeft}
              whileHover={{
                boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 },
              }}
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <motion.div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#54BAB9" }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-white font-bold text-lg">3</span>
                  </motion.div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                      <Users className="w-6 h-6 mr-2" style={{ color: "#54BAB9" }} />
                    </motion.div>
                    Parent Interaction with the Admission Panel
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    {[
                      "A scheduled interaction will take place between both parents and the admission panel",
                      "The exact date and time will be shared via email",
                      "Attendance of both parents is mandatory",
                    ].map((text, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={processRef.isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                      >
                        {index === 2 ? (
                          <AlertCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" style={{ color: "#54BAB9" }} />
                        ) : (
                          <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" style={{ color: "#9ED2C6" }} />
                        )}
                        {text}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-200"
              variants={slideInRight}
              whileHover={{
                boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 },
              }}
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <motion.div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#54BAB9" }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-white font-bold text-lg">4</span>
                  </motion.div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                      <CheckCircle className="w-6 h-6 mr-2" style={{ color: "#54BAB9" }} />
                    </motion.div>
                    Admission Confirmation
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    {[
                      "Admission is confirmed upon payment of the admission fee on the same day",
                      "Fees once paid are non-refundable and non-transferable",
                    ].map((text, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: 20 }}
                        animate={processRef.isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                      >
                        {index === 1 ? (
                          <AlertCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" style={{ color: "#54BAB9" }} />
                        ) : (
                          <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" style={{ color: "#9ED2C6" }} />
                        )}
                        {text}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Required Documentation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={docsRef.ref}
            initial="initial"
            animate={docsRef.isInView ? "animate" : "initial"}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Required Documentation</h2>
            <p className="text-xl text-gray-600">Parents must keep the following documents ready</p>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-8"
            variants={staggerContainer}
            initial="initial"
            animate={docsRef.isInView ? "animate" : "initial"}
          >
            <motion.div
              className="p-8 rounded-xl"
              style={{ backgroundColor: "#F7ECDE" }}
              variants={slideInLeft}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 },
              }}
            >
              <h3 className="text-2xl font-semibold mb-6 flex items-center text-gray-800">
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <FileCheck className="w-6 h-6 mr-2" style={{ color: "#54BAB9" }} />
                </motion.div>
                Essential Documents
              </h3>
              <ul className="space-y-4">
                {[
                  "Child's Birth Certificate",
                  "Aadhar Card or valid proof of address",
                  "Latest academic report card / evaluation report from the previous school",
                ].map((text, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={docsRef.isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: "#9ED2C6" }} />
                    <span className="text-gray-800">{text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="p-8 rounded-xl"
              style={{ backgroundColor: "#E9DAC1" }}
              variants={slideInRight}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 },
              }}
            >
              <h3 className="text-2xl font-semibold mb-6 flex items-center text-gray-800">
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <AlertCircle className="w-6 h-6 mr-2" style={{ color: "#54BAB9" }} />
                </motion.div>
                Important Notes
              </h3>
              <ul className="space-y-4">
                {[
                  "Digital copies of all documents must be uploaded at the time of admission",
                  "Originals must be presented for verification",
                ].map((text, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    animate={docsRef.isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: "#9ED2C6" }} />
                    <span className="text-gray-800">{text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Higher Grades Information */}
      <section className="py-16" style={{ backgroundColor: "#F7ECDE" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={gradesRef.ref}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-200"
            initial="initial"
            animate={gradesRef.isInView ? "animate" : "initial"}
            variants={fadeInUp}
            whileHover={{
              boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
              transition: { duration: 0.3 },
            }}
          >
            <motion.h2 className="text-3xl font-bold mb-6 text-center text-gray-800" variants={fadeInUp}>
              Admission to Grade 9 and Above
            </motion.h2>
            <div className="prose prose-lg max-w-none">
              <motion.p className="text-center mb-6 text-gray-600" variants={fadeInUp}>
                BMIS will admit students to Grade 9 and above subject to the following conditions:
              </motion.p>
              <motion.div className="grid md:grid-cols-3 gap-6 text-center" variants={staggerContainer}>
                {[
                  {
                    icon: Clock,
                    title: "Preparedness",
                    desc: "The required level of preparedness and competencies has been met",
                  },
                  {
                    icon: Users,
                    title: "Minimum Applications",
                    desc: "A minimum of four applications have been submitted for the course",
                  },
                  {
                    icon: GraduationCap,
                    title: "Qualified Faculty",
                    desc: "Qualified resource persons are available to deliver and facilitate the course effectively",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="p-6 rounded-lg"
                    style={{ backgroundColor: "#E9DAC1" }}
                    variants={fadeInUp}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                      transition: { duration: 0.3 },
                    }}
                  >
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                      <item.icon className="w-12 h-12 mx-auto mb-4" style={{ color: "#54BAB9" }} />
                    </motion.div>
                    <h3 className="font-semibold mb-2 text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        ref={ctaRef.ref}
        className="py-16"
        style={{ backgroundColor: "#54BAB9" }}
        initial="initial"
        animate={ctaRef.isInView ? "animate" : "initial"}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-4xl font-bold text-white mb-6" variants={fadeInUp}>
            Ready to Start Your Application?
          </motion.h2>
          <motion.p className="text-xl text-white/90 mb-8" variants={fadeInUp}>
            Begin your child's journey with Budding Minds today
          </motion.p>
          <motion.div
            className="inline-flex items-center px-8 py-4 font-semibold rounded-lg cursor-pointer text-gray-800"
            style={{ backgroundColor: "#9ED2C6" }}
            variants={fadeInUp}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(158, 210, 198, 0.3)",
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleApplicationClick}
          >
            Begin Application Process
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default Admissions
