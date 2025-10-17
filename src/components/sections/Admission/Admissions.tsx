"use client"
import { Calendar, FileText, Users, CheckCircle, AlertCircle, FileCheck } from "lucide-react"
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
      "https://myschoolone.com/Web/Admission/ApplicationFormV2.php?iid=MTM=&ksjdkjsd=MQ==",
      "_blank",
      "noopener,noreferrer",
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#FAFAF8] to-white">
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
            src="/images/admission-hero-banner.jpg"
            alt="Happy children at school with colorful fence"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/15 to-black/20"></div>
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
              className="text-5xl md:text-6xl font-serif font-bold mb-2 text-white tracking-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Admissions
            </motion.h1>
            <motion.p
              className="text-base md:text-lg max-w-3xl mx-auto text-white/95 mb-6 font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Join our nurturing community where young minds flourish and grow through innovative learning experiences
            </motion.p>
            <motion.div
              className="inline-flex items-center px-8 py-3 font-semibold rounded-lg cursor-pointer text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: "#54BAB9" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05, boxShadow: "0 15px 35px rgba(84, 186, 185, 0.25)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleApplicationClick}
            >
              Start Your Application
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Eligibility Criteria */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={eligibilityRef.ref}
            initial="initial"
            animate={eligibilityRef.isInView ? "animate" : "initial"}
            variants={fadeInUp}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-1 text-gray-900">Eligibility Criteria</h2>
            <p className="text-xs md:text-sm text-gray-800 font-normal">
              Eligible Age (as on 1st June of the Academic Year)
            </p>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mb-8"
            variants={staggerContainer}
            initial="initial"
            animate={eligibilityRef.isInView ? "animate" : "initial"}
          >
            {[
              { age: "1.9+", title: "Play Group", years: "1.9 years", bg: "#FAFAF8" },
              { age: "2.6+", title: "Preschool", years: "2.6 years", bg: "#F5F3F0" },
              { age: "3.6+", title: "Pre-Primary 1", years: "3.6 years", bg: "#FAFAF8" },
              { age: "4.6+", title: "Pre-Primary 2", years: "4.6 years", bg: "#F5F3F0" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-4 rounded-xl border border-gray-200 cursor-pointer transition-all duration-300"
                style={{ backgroundColor: item.bg }}
                variants={fadeInUp}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 12px 30px rgba(84, 186, 185, 0.12)",
                  borderColor: "#54BAB9",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-center">
                  <motion.div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2"
                    style={{ backgroundColor: "#54BAB9" }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="font-bold text-sm text-white">{item.age}</span>
                  </motion.div>
                  <h3 className="text-sm font-semibold mb-0.5 text-gray-900">{item.title}</h3>
                  <p className="text-xs text-gray-800 font-normal">{item.years}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-12" style={{ backgroundColor: "#FAFAF8" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={processRef.ref}
            initial="initial"
            animate={processRef.isInView ? "animate" : "initial"}
            variants={fadeInUp}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2 text-gray-900">Admission Process</h2>
          </motion.div>
          <motion.div
            className="space-y-5"
            variants={staggerContainer}
            initial="initial"
            animate={processRef.isInView ? "animate" : "initial"}
          >
            {/* Step 1 */}
            <motion.div
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 transition-all duration-300"
              variants={slideInLeft}
              whileHover={{
                boxShadow: "0 16px 40px rgba(84, 186, 185, 0.1)",
                borderColor: "#54BAB9",
                transition: { duration: 0.3 },
              }}
            >
              <div className="flex items-start space-x-5">
                <div className="flex-shrink-0">
                  <motion.div
                    className="w-11 h-11 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#54BAB9" }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-white font-bold text-sm">1</span>
                  </motion.div>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold mb-3 flex items-center text-gray-900">
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                      <FileText className="w-5 h-5 mr-2" style={{ color: "#54BAB9" }} />
                    </motion.div>
                    Submission of Application Form
                  </h3>
                  <ul className="space-y-2">
                    <motion.li
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={processRef.isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.2 }}
                    >
                      <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" style={{ color: "#9ED2C6" }} />
                      <span className="text-sm text-gray-800 font-normal">
                        Parents must complete the online Application form with accurate details
                      </span>
                    </motion.li>
                    <motion.li
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={processRef.isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.3 }}
                    >
                      <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" style={{ color: "#9ED2C6" }} />
                      <span className="text-sm text-gray-800 font-normal">
                        Ensure the child's name and date of birth match those on the birth certificate
                      </span>
                    </motion.li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 transition-all duration-300"
              variants={slideInRight}
              whileHover={{
                boxShadow: "0 16px 40px rgba(84, 186, 185, 0.1)",
                borderColor: "#54BAB9",
                transition: { duration: 0.3 },
              }}
            >
              <div className="flex items-start space-x-5">
                <div className="flex-shrink-0">
                  <motion.div
                    className="w-11 h-11 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#54BAB9" }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-white font-bold text-sm">2</span>
                  </motion.div>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold mb-3 flex items-center text-gray-900">
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                      <Calendar className="w-5 h-5 mr-2" style={{ color: "#54BAB9" }} />
                    </motion.div>
                    {"Know Your School"} Session & Student Assessment
                  </h3>
                  <ul className="space-y-2">
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
                          <AlertCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" style={{ color: "#54BAB9" }} />
                        ) : (
                          <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" style={{ color: "#9ED2C6" }} />
                        )}
                        <span className="text-sm text-gray-800 font-normal">{text}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 transition-all duration-300"
              variants={slideInLeft}
              whileHover={{
                boxShadow: "0 16px 40px rgba(84, 186, 185, 0.1)",
                borderColor: "#54BAB9",
                transition: { duration: 0.3 },
              }}
            >
              <div className="flex items-start space-x-5">
                <div className="flex-shrink-0">
                  <motion.div
                    className="w-11 h-11 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#54BAB9" }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-white font-bold text-sm">3</span>
                  </motion.div>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold mb-3 flex items-center text-gray-900">
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                      <Users className="w-5 h-5 mr-2" style={{ color: "#54BAB9" }} />
                    </motion.div>
                    Parent Interaction with the Admission Panel
                  </h3>
                  <ul className="space-y-2">
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
                          <AlertCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" style={{ color: "#54BAB9" }} />
                        ) : (
                          <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" style={{ color: "#9ED2C6" }} />
                        )}
                        <span className="text-sm text-gray-800 font-normal">{text}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 transition-all duration-300"
              variants={slideInRight}
              whileHover={{
                boxShadow: "0 16px 40px rgba(84, 186, 185, 0.1)",
                borderColor: "#54BAB9",
                transition: { duration: 0.3 },
              }}
            >
              <div className="flex items-start space-x-5">
                <div className="flex-shrink-0">
                  <motion.div
                    className="w-11 h-11 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#54BAB9" }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-white font-bold text-sm">4</span>
                  </motion.div>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold mb-3 flex items-center text-gray-900">
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                      <CheckCircle className="w-5 h-5 mr-2" style={{ color: "#54BAB9" }} />
                    </motion.div>
                    Admission Confirmation
                  </h3>
                  <ul className="space-y-2">
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
                          <AlertCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" style={{ color: "#54BAB9" }} />
                        ) : (
                          <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" style={{ color: "#9ED2C6" }} />
                        )}
                        <span className="text-sm text-gray-800 font-normal">{text}</span>
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
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={docsRef.ref}
            initial="initial"
            animate={docsRef.isInView ? "animate" : "initial"}
            variants={fadeInUp}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2 text-gray-900">Required Documentation</h2>
            <p className="text-sm md:text-base text-gray-800 font-normal">
              Parents must keep the following documents ready
            </p>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-2 gap-6 mb-8"
            variants={staggerContainer}
            initial="initial"
            animate={docsRef.isInView ? "animate" : "initial"}
          >
            <motion.div
              className="p-6 rounded-xl border border-gray-200 transition-all duration-300"
              style={{ backgroundColor: "#FAFAF8" }}
              variants={slideInLeft}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 12px 30px rgba(84, 186, 185, 0.12)",
                borderColor: "#54BAB9",
                transition: { duration: 0.3 },
              }}
            >
              <h3 className="text-base font-semibold mb-4 flex items-center text-gray-900">
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <FileCheck className="w-5 h-5 mr-2" style={{ color: "#54BAB9" }} />
                </motion.div>
                Essential Documents
              </h3>
              <ul className="space-y-3">
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
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" style={{ color: "#9ED2C6" }} />
                    <span className="text-sm text-gray-800 font-normal">{text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="p-6 rounded-xl border border-gray-200 transition-all duration-300"
              style={{ backgroundColor: "#F5F3F0" }}
              variants={slideInRight}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 12px 30px rgba(84, 186, 185, 0.12)",
                borderColor: "#54BAB9",
                transition: { duration: 0.3 },
              }}
            >
              <h3 className="text-base font-semibold mb-4 flex items-center text-gray-900">
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <AlertCircle className="w-5 h-5 mr-2" style={{ color: "#54BAB9" }} />
                </motion.div>
                Important Notes
              </h3>
              <ul className="space-y-3">
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
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" style={{ color: "#9ED2C6" }} />
                    <span className="text-sm text-gray-800 font-normal">{text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        ref={ctaRef.ref}
        className="py-12"
        style={{ backgroundColor: "#54BAB9" }}
        initial="initial"
        animate={ctaRef.isInView ? "animate" : "initial"}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3" variants={fadeInUp}>
            Ready to Start Your Application?
          </motion.h2>
          <motion.p className="text-base text-white font-normal mb-6" variants={fadeInUp}>
            Begin your child's journey with Budding Minds today
          </motion.p>
          <motion.div
            className="inline-flex items-center px-8 py-3 font-semibold rounded-lg cursor-pointer text-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{ backgroundColor: "#9ED2C6" }}
            variants={fadeInUp}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 35px rgba(158, 210, 198, 0.35)",
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
