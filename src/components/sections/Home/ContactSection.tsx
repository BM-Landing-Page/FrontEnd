"use client"

import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react"

export default function ContactSection() {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: "Sri Annamachari Street, M S Subbalakshmi Nagar Manimangalam, TamilNadu - 601301",
      color: "#54BAB9",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-98403 91815",
      color: "#9ED2C6",
    },
    {
      icon: Mail,
      label: "Email",
      value: "bmis@buddingminds.net",
      color: "#54BAB9",
    },
    {
      icon: Clock,
      label: "Office Hours",
      value: "Mon-Fri: 8:00 AM - 4:00 PM",
      color: "#9ED2C6",
    },
  ]

  return (
    <section className="w-full">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#E9DAC1] via-[#F7ECDE] to-[#E9DAC1] p-8">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#9ED2C6]/20 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#54BAB9]/20 rounded-full translate-y-12 -translate-x-12"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Visit Budding Minds</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We'd love to welcome you to our campus. Contact us for admissions, questions, or to schedule a visit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>

              {/* Contact Details Grid */}
              <div className="grid gap-4 mb-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <div
                      key={index}
                      className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="p-2 rounded-lg" style={{ backgroundColor: `${info.color}20` }}>
                          <IconComponent className="w-5 h-5" style={{ color: info.color }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">{info.label}</p>
                          <p className="text-sm text-gray-600 break-words">{info.value}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Instagram Contact */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: "#9ED2C620" }}>
                    <Instagram className="w-5 h-5" style={{ color: "#9ED2C6" }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">Follow Us</p>
                    <p className="text-sm text-gray-600">@buddingminds_school</p>
                    <button className="mt-2 text-xs font-medium text-[#9ED2C6] hover:text-[#54BAB9] transition-colors">
                      Message us on Instagram
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Large Location Section */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Location</h3>

              {/* Large Map */}
              <div className="relative rounded-xl overflow-hidden mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8817225979697!2d80.04982377519597!3d12.915322716109431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f40d74a48f9f%3A0x9ea4fc2bd20689d5!2sBudding%20Minds%20International%20School!5e0!3m2!1sen!2sin!4v1753324389206!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-72 rounded-xl"
                />
              </div>

              {/* Location Details */}
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#54BAB9] mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">School Address</p>
                    <p className="text-sm text-gray-600">
                      Sri Annamachari Street
                      <br />M S Subbalakshmi Nagar Manimangalam
                      <br />
                      TamilNadu - 601301
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-[#9ED2C6]" />
                  <div>
                    <p className="font-medium text-gray-900">Visiting Hours</p>
                    <p className="text-sm text-gray-600">Monday - Friday: 8:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
