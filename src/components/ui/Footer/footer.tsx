import { MapPin, Mail, Phone, Facebook, Instagram, Linkedin, ExternalLink } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: "#54BAB9" }}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full" style={{ backgroundColor: "#F7ECDE" }}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full" style={{ backgroundColor: "#E9DAC1" }}></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full" style={{ backgroundColor: "#9ED2C6" }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">BUDDING MINDS INTERNATIONAL SCHOOL</h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: "#F7ECDE" }}></div>
          <p className="mt-4 text-lg text-white/90">Nurturing Excellence • Inspiring Innovation</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-8 mb-12">
          {/* Contact Information */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-6 text-white flex items-center">
                <MapPin className="w-5 h-5 mr-2" style={{ color: "#F7ECDE" }} />
                Get In Touch
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: "#E9DAC1" }} />
                  <div className="text-white/90">
                    <p className="font-medium">Sri Annamachari Street</p>
                    <p>M S Subbalakshmi Nagar</p>
                    <p>Manimangalam, TamilNadu - 601301</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" style={{ color: "#E9DAC1" }} />
                  <a
                    href="mailto:bmis@buddingminds.net"
                    className="text-white/90 hover:text-white transition-colors font-medium"
                  >
                    bmis@buddingminds.net
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5" style={{ color: "#E9DAC1" }} />
                  <a href="tel:+919840391815" className="text-white/90 hover:text-white transition-colors font-medium">
                    +91-98403 91815
                  </a>
                </div>
              </div>
            </div>

            {/* Cambridge Assessment */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center space-x-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#F7ECDE" }}
                >
                  <img
                    src="/placeholder.svg?height=40&width=40&text=Cambridge"
                    alt="Cambridge Assessment"
                    className="w-10 h-10"
                  />
                </div>
                <div>
                  <p className="text-white font-semibold text-lg">Cambridge Assessment</p>
                  <p className="text-white/80">International Education</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="lg:col-span-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 h-full">
              <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
                <MapPin className="w-5 h-5 mr-2" style={{ color: "#F7ECDE" }} />
                Find Our Campus
              </h3>
              <div className="rounded-xl overflow-hidden shadow-lg h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8817225979697!2d80.04982377519597!3d12.915322716109431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f40d74a48f9f%3A0x9ea4fc2bd20689d5!2sBudding%20Minds%20International%20School!5e0!3m2!1sen!2sin!4v1753324389206!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Quick Links & Social */}
          <div className="lg:col-span-2 space-y-6">
            {/* Parent Voice */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-4 text-white" style={{ color: "#F7ECDE" }}>
                Parent Voice
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Your voice matters! We actively involve parents in shaping our educational journey and welcome your
                valuable feedback.
              </p>
            </div>

            {/* Social Media */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-4 text-white" style={{ color: "#F7ECDE" }}>
                Connect With Us
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://www.facebook.com/buddingmindsinternationalschool/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 rounded-xl transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: "#E9DAC1" }}
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>

                <a
                  href="https://www.instagram.com/bm_anokha_25/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 rounded-xl transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: "#E9DAC1" }}
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>

                <a
                  href="https://www.instagram.com/buddingmindspdq/?igsh=MTl4eHRiNWhxc2M3NQ%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 rounded-xl transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: "#E9DAC1" }}
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>

                <a
                  href="https://www.linkedin.com/in/budding-minds-international-school-15585419b/?originalSubdomain=in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 rounded-xl transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: "#E9DAC1" }}
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
              </div>

              {/* Additional Instagram Links */}
              <div className="mt-4 space-y-2">
                <a
                  href="https://www.instagram.com/bmischool/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-white/10 transition-colors text-white/90 hover:text-white text-sm"
                >
                  <span>Main Instagram</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-white/90 text-sm">© 2024 Budding Minds International School. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
