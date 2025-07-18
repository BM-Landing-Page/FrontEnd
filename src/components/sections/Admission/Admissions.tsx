import { GraduationCap, Calendar, FileText, Users, CheckCircle, AlertCircle, FileCheck, Clock } from "lucide-react";

const Admissions = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, #F7ECDE 0%, #E9DAC1 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#1a1a1a' }}>
            Admissions – Academic Year 2025–26
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#666666' }}>
            Join our nurturing community where young minds flourish and grow
          </p>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1a1a1a' }}>Eligibility Criteria</h2>
            <p className="text-xl" style={{ color: '#666666' }}>Eligible Age (as on 1st June 2025)</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="p-6 rounded-xl border" style={{ backgroundColor: '#F7ECDE', borderColor: '#E9DAC1' }}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#54BAB9' }}>
                  <span className="font-bold text-xl text-white">2+</span>
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#1a1a1a' }}>Play Group</h3>
                <p style={{ color: '#666666' }}>2 years</p>
              </div>
            </div>

            <div className="p-6 rounded-xl border" style={{ backgroundColor: '#9ED2C6', borderColor: '#54BAB9' }}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#54BAB9' }}>
                  <span className="font-bold text-xl text-white">3+</span>
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#1a1a1a' }}>Preschool</h3>
                <p style={{ color: '#666666' }}>3 years</p>
              </div>
            </div>

            <div className="p-6 rounded-xl border" style={{ backgroundColor: '#E9DAC1', borderColor: '#F7ECDE' }}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#54BAB9' }}>
                  <span className="font-bold text-xl text-white">4+</span>
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#1a1a1a' }}>PP1 (formerly LKG)</h3>
                <p style={{ color: '#666666' }}>4 years</p>
              </div>
            </div>

            <div className="p-6 rounded-xl border" style={{ backgroundColor: '#F7ECDE', borderColor: '#E9DAC1' }}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#54BAB9' }}>
                  <span className="font-bold text-xl text-white">5+</span>
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#1a1a1a' }}>PP2 (formerly UKG)</h3>
                <p style={{ color: '#666666' }}>5 years</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16" style={{ backgroundColor: '#F7ECDE' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1a1a1a' }}>Admission Process</h2>
            <p className="text-xl" style={{ color: '#666666' }}>Academic Year 2025–26</p>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border" style={{ borderColor: '#E9DAC1' }}>
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#54BAB9' }}>
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center" style={{ color: '#1a1a1a' }}>
                    <FileText className="w-6 h-6 mr-2" style={{ color: '#54BAB9' }} />
                    Submission of Enquiry Form
                  </h3>
                  <ul className="space-y-2" style={{ color: '#666666' }}>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" style={{ color: '#54BAB9' }} />
                      Parents must complete the online enquiry form with accurate details
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" style={{ color: '#54BAB9' }} />
                      Ensure the child's name and date of birth match those on the birth certificate
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border" style={{ borderColor: '#E9DAC1' }}>
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#54BAB9' }}>
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center" style={{ color: '#1a1a1a' }}>
                    <Calendar className="w-6 h-6 mr-2" style={{ color: '#54BAB9' }} />
                    'Know Your School' Session & Student Assessment
                  </h3>
                  <ul className="space-y-2" style={{ color: '#666666' }}>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" style={{ color: '#54BAB9' }} />
                      Parents will be invited to a 'Know Your School' session, which introduces the school's vision, curriculum, and learning environment
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" style={{ color: '#54BAB9' }} />
                      The date will be shared via email one week in advance
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" style={{ color: '#54BAB9' }} />
                      Student assessments will be conducted for applicants seeking admission to PP2 and above
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" style={{ color: '#54BAB9' }} />
                      A non-refundable registration fee of ₹1,500/- is to be paid at this stage
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border" style={{ borderColor: '#E9DAC1' }}>
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#54BAB9' }}>
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center" style={{ color: '#1a1a1a' }}>
                    <Users className="w-6 h-6 mr-2" style={{ color: '#54BAB9' }} />
                    Parent Interaction with the Admission Panel
                  </h3>
                  <ul className="space-y-2" style={{ color: '#666666' }}>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" style={{ color: '#54BAB9' }} />
                      A scheduled interaction will take place between both parents and the admission panel
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" style={{ color: '#54BAB9' }} />
                      The exact date and time will be shared via email
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" style={{ color: '#54BAB9' }} />
                      Attendance of both parents is mandatory
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border" style={{ borderColor: '#E9DAC1' }}>
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#54BAB9' }}>
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center" style={{ color: '#1a1a1a' }}>
                    <CheckCircle className="w-6 h-6 mr-2" style={{ color: '#54BAB9' }} />
                    Admission Confirmation
                  </h3>
                  <ul className="space-y-2" style={{ color: '#666666' }}>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" style={{ color: '#54BAB9' }} />
                      Admission is confirmed upon payment of the admission fee on the same day
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" style={{ color: '#54BAB9' }} />
                      Fees once paid are non-refundable and non-transferable
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documentation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1a1a1a' }}>Required Documentation</h2>
            <p className="text-xl" style={{ color: '#666666' }}>Parents must keep the following documents ready</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#F7ECDE' }}>
              <h3 className="text-2xl font-semibold mb-6 flex items-center" style={{ color: '#1a1a1a' }}>
                <FileCheck className="w-6 h-6 mr-2" style={{ color: '#54BAB9' }} />
                Essential Documents
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: '#54BAB9' }} />
                  <span style={{ color: '#1a1a1a' }}>Child's Birth Certificate</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: '#54BAB9' }} />
                  <span style={{ color: '#1a1a1a' }}>Aadhar Card or valid proof of address</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: '#54BAB9' }} />
                  <span style={{ color: '#1a1a1a' }}>Latest academic report card / evaluation report from the previous school</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-xl" style={{ backgroundColor: '#9ED2C6' }}>
              <h3 className="text-2xl font-semibold mb-6 flex items-center" style={{ color: '#1a1a1a' }}>
                <AlertCircle className="w-6 h-6 mr-2" style={{ color: '#54BAB9' }} />
                Important Notes
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: '#54BAB9' }} />
                  <span style={{ color: '#1a1a1a' }}>Digital copies of all documents must be uploaded at the time of admission</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: '#54BAB9' }} />
                  <span style={{ color: '#1a1a1a' }}>Originals must be presented for verification</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Higher Grades Information */}
      <section className="py-16" style={{ backgroundColor: '#E9DAC1' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: '#1a1a1a' }}>Admission to Grade 9 and Above</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-center mb-6" style={{ color: '#666666' }}>
                BMIS will admit students to Grade 9 and above subject to the following conditions:
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-6 rounded-lg" style={{ backgroundColor: '#F7ECDE' }}>
                  <Clock className="w-12 h-12 mx-auto mb-4" style={{ color: '#54BAB9' }} />
                  <h3 className="font-semibold mb-2" style={{ color: '#1a1a1a' }}>Preparedness</h3>
                  <p className="text-sm" style={{ color: '#666666' }}>The required level of preparedness and competencies has been met</p>
                </div>
                <div className="p-6 rounded-lg" style={{ backgroundColor: '#F7ECDE' }}>
                  <Users className="w-12 h-12 mx-auto mb-4" style={{ color: '#54BAB9' }} />
                  <h3 className="font-semibold mb-2" style={{ color: '#1a1a1a' }}>Minimum Applications</h3>
                  <p className="text-sm" style={{ color: '#666666' }}>A minimum of four applications have been submitted for the course</p>
                </div>
                <div className="p-6 rounded-lg" style={{ backgroundColor: '#F7ECDE' }}>
                  <GraduationCap className="w-12 h-12 mx-auto mb-4" style={{ color: '#54BAB9' }} />
                  <h3 className="font-semibold mb-2" style={{ color: '#1a1a1a' }}>Qualified Faculty</h3>
                  <p className="text-sm" style={{ color: '#666666' }}>Qualified resource persons are available to deliver and facilitate the course effectively</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{ backgroundColor: '#54BAB9' }}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Application?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Begin your child's journey with Budding Minds today
          </p>
          <div className="inline-flex items-center px-8 py-4 font-semibold rounded-lg cursor-pointer transition-colors text-white border-2 border-white hover:bg-white hover:text-gray-800">
            Begin Application Process
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <GraduationCap className="h-8 w-8 mr-3" style={{ color: '#54BAB9' }} />
              <h4 className="text-2xl font-bold" style={{ color: '#1a1a1a' }}>Budding Minds</h4>
            </div>
            <p style={{ color: '#666666' }}>
              Nurturing young minds for a brighter tomorrow
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Admissions;