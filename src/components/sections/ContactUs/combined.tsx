"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Bus, Clock } from "lucide-react"

const busRoutes = {
  "Route 1": {
    name: "Nemilicheri",
    stops: [
      { sno: 1, stop: "Right Pharmacy near Swarna sudharshan Mahal", pickup: "7.35", drop: "4.55" },
      { sno: 2, stop: "Ganesh supermarket - Nanmangalam", pickup: "7.40", drop: "4.45" },
      { sno: 3, stop: "Nandavanam arch", pickup: "7.43", drop: "4.27" },
      { sno: 4, stop: "Muthuswamy Nagar- Kannamma Nagar", pickup: "7.50", drop: "4.35" },
      { sno: 5, stop: "Bhavani Stores", pickup: "7.55", drop: "4.22" },
      { sno: 6, stop: "AGS Colony", pickup: "7.58", drop: "4.17" },
      { sno: 7, stop: "Postal Nagar", pickup: "8.00", drop: "4.15" },
      { sno: 8, stop: "Sky park residency", pickup: "8.05", drop: "4.02" },
      { sno: 9, stop: "Sony Center", pickup: "8.10", drop: "3.55" },
      { sno: 10, stop: "GRT", pickup: "8.15", drop: "3.52" },
    ],
  },
  "Route 2": {
    name: "KGEYES",
    stops: [
      { sno: 1, stop: "KGEYES", pickup: "7.45", drop: "4.15" },
      { sno: 2, stop: "Pillayar Koil", pickup: "7.47", drop: "4.14" },
      { sno: 3, stop: "GLN Residency", pickup: "7.50", drop: "4.12" },
      { sno: 4, stop: "Vaishnava Clg road", pickup: "7.54", drop: "4.10" },
      { sno: 5, stop: "GGN School park", pickup: "7.56", drop: "4.08" },
      { sno: 6, stop: "Bharathipuram", pickup: "8.01", drop: "4.06" },
      { sno: 7, stop: "Maruti Medicals", pickup: "8.02", drop: "4.04" },
      { sno: 8, stop: "Purushothamanan Nagar", pickup: "8.04", drop: "4.02" },
      { sno: 9, stop: "BBR Community Hall", pickup: "8.07", drop: "4.00" },
    ],
  },
  "Route 3": {
    name: "Police booth, Radha Nagar",
    stops: [
      { sno: 1, stop: "Kurinji Nagar", pickup: "7.50", drop: "4.25" },
      { sno: 2, stop: "Selvam Mahal", pickup: "7.55", drop: "4.20" },
      { sno: 3, stop: "Tirumal stores", pickup: "7.57", drop: "4.15" },
      { sno: 4, stop: "Police booth", pickup: "8.00", drop: "4.08" },
      { sno: 5, stop: "Transport road junction", pickup: "8.05", drop: "4.05" },
      { sno: 6, stop: "Kumaran Kundram", pickup: "8.08", drop: "3.57" },
      { sno: 7, stop: "Seva sadan school", pickup: "8.23", drop: "3.40" },
    ],
  },
  "Route 4": {
    name: "Hasthinapuram",
    stops: [
      { sno: 1, stop: "8th cross street Jayendran Nagar", pickup: "7.50", drop: "4.25" },
      { sno: 2, stop: "Ponni amman koil", pickup: "7.55", drop: "4.20" },
      { sno: 3, stop: "Vinobhaji Nagar", pickup: "7.57", drop: "4.15" },
      { sno: 4, stop: "Hasthinapuram bus stand", pickup: "8.01", drop: "4.10" },
      { sno: 5, stop: "Casual Moves", pickup: "8.04", drop: "4.05" },
      { sno: 6, stop: "Nehru Nagar bus stop", pickup: "8.05", drop: "4.02" },
      { sno: 7, stop: "chitilapakkam police station", pickup: "8.07", drop: "4.00" },
      { sno: 8, stop: "Varadaraja theatre", pickup: "8.09", drop: "3.58" },
      { sno: 9, stop: "Sanatorium fly over", pickup: "8.11", drop: "3.55" },
      { sno: 10, stop: "Marutham Heritage", pickup: "8.35", drop: "3.30" },
    ],
  },
  "Route 5": {
    name: "Olympia",
    stops: [
      { sno: 1, stop: "VRB Mahal, Balaji Nagar", pickup: "7.30", drop: "4.25" },
      { sno: 2, stop: "Mantri", pickup: "7.45", drop: "4.00" },
      { sno: 3, stop: "Chambers Colony", pickup: "7.50", drop: "3.55" },
      { sno: 4, stop: "Olympia", pickup: "7.55", drop: "4.05" },
      { sno: 5, stop: "Opp. To Lalitha Jewellery", pickup: "8.00", drop: "3.50" },
    ],
  },
  "Route 6": {
    name: "Pallavapuram Municipal",
    stops: [
      { sno: 1, stop: "Mani medicals", pickup: "7.40", drop: "4.20" },
      { sno: 2, stop: "Vitalium Dental Lab", pickup: "7.45", drop: "4.16" },
      { sno: 3, stop: "Pallavapuram Municipality", pickup: "7.48", drop: "4.15" },
      { sno: 4, stop: "Hot chips - Chromepet", pickup: "7.55", drop: "4.04" },
      { sno: 5, stop: "Al madina restaurant - Krishna Nagar", pickup: "8.05", drop: "4.02" },
      { sno: 6, stop: "LIC Insurance Office - Tambaram", pickup: "8.10", drop: "3.55" },
      { sno: 7, stop: "Vidhya theatre _Tambaram", pickup: "8.11", drop: "3.50" },
      { sno: 8, stop: "Green Pharmacy - Mudichur", pickup: "8.18", drop: "3.47" },
      { sno: 9, stop: "Nattarasan Hotel -Mudichur", pickup: "8.23", drop: "3.44" },
    ],
  },
  "Route 7": {
    name: "Chitlapakkam",
    stops: [
      { sno: 1, stop: "MDLB Colony Ramaswamy Street", pickup: "7.40", drop: "4.20" },
      { sno: 2, stop: "Venkatraman Nagar", pickup: "7.45", drop: "4.14" },
      { sno: 3, stop: "Gandhi street", pickup: "7.47", drop: "4.12" },
      { sno: 4, stop: "Gangai Amman koil", pickup: "7.50", drop: "4.10" },
      { sno: 5, stop: "Sanatorium fly over", pickup: "7.55", drop: "4.05" },
      { sno: 6, stop: "Aavin Parlour", pickup: "8.00", drop: "3.58" },
    ],
  },
  "Route 8": {
    name: "Camp Road",
    stops: [
      { sno: 1, stop: "Indian Bank", pickup: "10:48", drop: "4.25" },
      { sno: 2, stop: "ICICI Bank", pickup: "7.50", drop: "4.20" },
      { sno: 3, stop: "Pamban swamigal salai", pickup: "12:28", drop: "4.18" },
      { sno: 4, stop: "Prime super market", pickup: "13:12", drop: "4.15" },
      { sno: 5, stop: "KVB ATM - Raja kilpakkam", pickup: "13:55", drop: "4.12" },
      { sno: 6, stop: "Jains Apartment - KV School", pickup: "00:57", drop: "4.10" },
      { sno: 7, stop: "Viveks , Camp road", pickup: "03:07", drop: "4.05" },
      { sno: 8, stop: "shankara school", pickup: "8.16", drop: "4.02" },
      { sno: 9, stop: "Arokiya Bakery", pickup: "8.18", drop: "4.00" },
      { sno: 10, stop: "MCC flyover entrance", pickup: "8.20", drop: "3.50" },
      { sno: 11, stop: "Madana puram", pickup: "8.32", drop: "3.40" },
    ],
  },
  "Route 9": {
    name: "Pallavaram",
    stops: [
      { sno: 1, stop: "Mantri serene 200 ft Road", pickup: "7.40", drop: "3.55" },
      { sno: 2, stop: "Alliance Galeria", pickup: "7.45", drop: "4.00" },
      { sno: 3, stop: "Pallava garden", pickup: "7.52", drop: "4.15" },
      { sno: 4, stop: "KEH Flat", pickup: "8.02", drop: "4.17" },
      { sno: 5, stop: "Jains green acres", pickup: "8.07", drop: "4.22" },
      { sno: 6, stop: "Dosa Plaza", pickup: "8.10", drop: "4.25" },
      { sno: 7, stop: "MIT Bus Stop", pickup: "8.20", drop: "4.35" },
      { sno: 8, stop: "Bujji & Pappji Juice mart Tambaram", pickup: "8.27", drop: "3.47" },
    ],
  },
  "Route 10": {
    name: "Pozhichalur",
    stops: [
      { sno: 1, stop: "Pozhichalur GasCompany -Hot chips", pickup: "7.40", drop: "4.40" },
      { sno: 2, stop: "B.P. Jains Hospital", pickup: "7.45", drop: "4.25" },
      { sno: 3, stop: "Blooming dale", pickup: "7.50", drop: "4.20" },
      { sno: 4, stop: "Saraswathipuram", pickup: "7.58", drop: "4.10" },
      { sno: 5, stop: "Jains alpine meadows", pickup: "8.07", drop: "4.05" },
      { sno: 6, stop: "Casa grand bloom", pickup: "8.15", drop: "3.55" },
      { sno: 7, stop: "Palm riveria- Tirumudivakkam", pickup: "8.25", drop: "3.45" },
    ],
  },
  "Route 11": {
    name: "Perungalathur",
    stops: [
      { sno: 1, stop: "Indira Gandhi statue", pickup: "7.45", drop: "4.08" },
      { sno: 2, stop: "Arunsivas Badmiton Acadamy old Perungalathur", pickup: "7.50", drop: "4.03" },
      { sno: 3, stop: "Sudharshan Apartments", pickup: "7.55", drop: "3.58" },
      { sno: 4, stop: "Thilagavathy Enclave Kurinji Nagar,Old Perupengalathur", pickup: "7.57", drop: "3.56" },
      { sno: 5, stop: "Alayam Prakriti Enclave Kurinji Nagar Old Perungalathur", pickup: "7.58", drop: "3.55" },
      { sno: 6, stop: "Kurinji Nagar old Perungalathur", pickup: "8.00", drop: "3.50" },
      { sno: 7, stop: "Sivan Koil (Near Padmavathy Kalyana Mandabam)", pickup: "8.05", drop: "3.45" },
      { sno: 8, stop: "Ponni amman koil New perungalathur", pickup: "8.10", drop: "3.40" },
    ],
  },
  "Route 12": {
    name: "Mudichur Road",
    stops: [
      { sno: 1, stop: "Thirumalai Steels", pickup: "7.42", drop: "4.17" },
      { sno: 2, stop: "Nuts and spices", pickup: "7.50", drop: "4.14" },
      { sno: 3, stop: "Invicon", pickup: "7.58", drop: "4.12" },
      { sno: 4, stop: "Ruby Nakshathra", pickup: "8.00", drop: "4.10" },
      { sno: 5, stop: "Mahalakshmi Super market", pickup: "8.05", drop: "4.05" },
      { sno: 6, stop: "Marutham Prestige Apartment", pickup: "8.10", drop: "4.02" },
      { sno: 7, stop: "Aaraon Nest , Next to Marutham Prestige", pickup: "8.13", drop: "4.00" },
      { sno: 8, stop: "ARS Medicals", pickup: "8.14", drop: "3.50" },
      { sno: 9, stop: "Poorvika Mobiles Showroom", pickup: "8.15", drop: "3.40" },
      { sno: 10, stop: "VOC park", pickup: "8.15", drop: "3.40" },
      { sno: 11, stop: "Parvathy Nagar Bus stop", pickup: "8.25", drop: "3.33" },
      { sno: 12, stop: "Attai company Police booth", pickup: "8.33", drop: "3.31" },
      { sno: 13, stop: "Kishanlal Avenue", pickup: "8.35", drop: "3.30" },
    ],
  },
  "Route 13": {
    name: "Guduvanchery",
    stops: [
      { sno: 1, stop: "Sumangali Textiles", pickup: "7.30", drop: "4.20" },
      { sno: 2, stop: "Guduvanchery - Govt High School", pickup: "7.40", drop: "4.10" },
      { sno: 3, stop: "Urapakkam Bus stand", pickup: "7.50", drop: "4.05" },
      { sno: 4, stop: "Bhavani Palace/ Otteri", pickup: "8.00", drop: "4.00" },
      { sno: 5, stop: "Mannivakam Extension", pickup: "8.10", drop: "13:12" },
      { sno: 6, stop: "Mannivakkam - Green Trends", pickup: "03:07", drop: "11:31" },
      { sno: 7, stop: "Ruby Royal towers opp.side", pickup: "03:36", drop: "11:16" },
      { sno: 8, stop: "Natesan school", pickup: "04:04", drop: "11:31" },
      { sno: 9, stop: "KAG Tiles (near Ruby towers)", pickup: "8.20", drop: "11:02" },
      { sno: 10, stop: "Singaravelan Nagar Arch", pickup: "06:57", drop: "08:38" },
    ],
  },
  "Route 14": {
    name: "Sembakkam",
    stops: [
      { sno: 1, stop: "Sembakkam Bus Stand - Jolen Hospital", pickup: "7.40", drop: "4.40" },
      { sno: 2, stop: "Sindhu Hospital", pickup: "7.50", drop: "4.30" },
      { sno: 3, stop: "Reddy's sport ground", pickup: "13:12", drop: "4.20" },
      { sno: 4, stop: "TVS Emerald", pickup: "03:36", drop: "4.00" },
      { sno: 5, stop: "Park 63", pickup: "06:00", drop: "3.55" },
      { sno: 6, stop: "Attai company", pickup: "08:24", drop: "3.32" },
      { sno: 7, stop: "KVB ATM Manimangalam", pickup: "08:52", drop: "3.31" },
    ],
  },
  "Route 15": {
    name: "Kadaperi, CTO Colony",
    stops: [
      { sno: 1, stop: "Sun Star Hostel", pickup: "10:48", drop: "05:16" },
      { sno: 2, stop: "LML Prakirthi", pickup: "7.50", drop: "03:21" },
      { sno: 3, stop: "CTO Colony Policebooth", pickup: "13:12", drop: "01:55" },
      { sno: 4, stop: "Crayons play school", pickup: "13:40", drop: "01:40" },
      { sno: 5, stop: "CTO Colony", pickup: "01:12", drop: "01:12" },
      { sno: 6, stop: "Casa grand ferns", pickup: "02:52", drop: "13:55" },
      { sno: 7, stop: "IMA", pickup: "04:19", drop: "12:00" },
      { sno: 8, stop: "Bharathi Nagar", pickup: "8.20", drop: "3.47" },
    ],
  },
  "Route 16": {
    name: "Santhoshpuram",
    stops: [
      { sno: 1, stop: "Annandha valli Party hall", pickup: "7.40", drop: "4.27" },
      { sno: 2, stop: "Pallikarnai - Mapleton Apartments", pickup: "7.50", drop: "4.17" },
      { sno: 3, stop: "Santhoshpuram Bus stand", pickup: "8.00", drop: "4.07" },
      { sno: 4, stop: "Santhoshpuram -Church", pickup: "00:28", drop: "4.05" },
      { sno: 5, stop: "PTC Quarters", pickup: "8.30", drop: "07:12" },
    ],
  },
  "Route 17": {
    name: "Padapai",
    stops: [
      { sno: 1, stop: "Padappai KVB ATM", pickup: "01:12", drop: "4.10" },
      { sno: 2, stop: "Periyar Nagar, Padappai", pickup: "8.10", drop: "4.05" },
      { sno: 3, stop: "Hasan Nagar, Padappai", pickup: "8.15", drop: "3.55" },
      { sno: 4, stop: "Karasangal", pickup: "8.25", drop: "3.45" },
      { sno: 5, stop: "Marutham Breeze", pickup: "8.35", drop: "3.35" },
      { sno: 6, stop: "Garden city", pickup: "8.40", drop: "3.30" },
    ],
  },
}

export default function CombinedPage() {
  const [activeSection, setActiveSection] = useState("contact")
  const [activeRoute, setActiveRoute] = useState("Route 1")

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-96 bg-gradient-to-r from-[#54BAB9] to-[#9ED2C6] flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Budding Minds International School</h1>
          <p className="text-xl mb-8">Nurturing Young Minds for a Bright Future</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setActiveSection("contact")}
              className={`px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeSection === "contact"
                  ? "bg-white text-[#54BAB9] shadow-lg"
                  : "border-2 border-white text-white hover:bg-white hover:text-[#54BAB9] bg-transparent"
              }`}
            >
              <div className="flex items-center gap-2">
                <Phone size={20} />
                Contact Us
              </div>
            </button>
            <button
              onClick={() => setActiveSection("bus")}
              className={`px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeSection === "bus"
                  ? "bg-white text-[#54BAB9] shadow-lg"
                  : "border-2 border-white text-white hover:bg-white hover:text-[#54BAB9] bg-transparent"
              }`}
            >
              <div className="flex items-center gap-2">
                <Bus size={20} />
                Bus Routes
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4">
        {activeSection === "contact" && (
          <div className="py-12">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Main School Contact */}
              <div className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-white rounded-lg overflow-hidden">
                <div className="text-center rounded-t-lg py-6" style={{ backgroundColor: "#9ED2C6" }}>
                  <h2 className="text-2xl text-white font-bold">Budding Minds International School</h2>
                </div>
                <div className="p-8 space-y-6" style={{ backgroundColor: "#F7ECDE" }}>
                  <div className="flex items-start gap-3">
                    <MapPin className="text-[#54BAB9] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-800">Address:</p>
                      <p className="text-gray-700">Sri Annamachari Street, M S Subbalakshmi Nagar</p>
                      <p className="text-gray-700">Manimangalam, Chennai, Tamil Nadu 601301</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-[#54BAB9]" size={20} />
                    <div>
                      <p className="font-semibold text-gray-800">Email:</p>
                      <a href="mailto:bmis@buddingminds.net" className="text-[#54BAB9] hover:underline">
                        bmis@buddingminds.net
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-[#54BAB9]" size={20} />
                    <div>
                      <p className="font-semibold text-gray-800">Mobile:</p>
                      <a href="tel:+919840391815" className="text-[#54BAB9] hover:underline">
                        +91-98403 91815
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Play School Contact */}
              <div className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-white rounded-lg overflow-hidden">
                <div className="text-center rounded-t-lg py-6" style={{ backgroundColor: "#9ED2C6" }}>
                  <h2 className="text-2xl text-white font-bold">International Play School</h2>
                  <p className="text-white text-sm">Bashyam Nagar – Franchise</p>
                </div>
                <div className="p-8 space-y-6" style={{ backgroundColor: "#F7ECDE" }}>
                  <div className="flex items-start gap-3">
                    <MapPin className="text-[#54BAB9] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-800">Address:</p>
                      <p className="text-gray-700">No: 5, 1st Street, Bashyam nagar</p>
                      <p className="text-gray-700">(Near Kumaran kundram) Chromepet, Chennai - 44</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-[#54BAB9]" size={20} />
                    <div>
                      <p className="font-semibold text-gray-800">Email:</p>
                      <a href="mailto:bud_bashyamnagar@buddingminds.net" className="text-[#54BAB9] hover:underline">
                        bud_bashyamnagar@buddingminds.net
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-[#54BAB9]" size={20} />
                    <div>
                      <p className="font-semibold text-gray-800">Mobile:</p>
                      <div className="space-y-1">
                        <a href="tel:+919940447800" className="text-[#54BAB9] hover:underline block">
                          +91-9940447800
                        </a>
                        <a href="tel:04465620404" className="text-[#54BAB9] hover:underline block">
                          044-65620404
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Categories */}
            <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
              <div className="text-center shadow-xl border-0 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white rounded-lg">
                <div className="p-8">
                  <div
                    className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#E9DAC1" }}
                  >
                    <Phone className="text-[#54BAB9]" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">General Contacts</h3>
                  <div className="space-y-2 text-sm">
                    <a href="tel:+919840391815" className="text-[#54BAB9] hover:underline block">
                      +91-98403 91815
                    </a>
                    <a href="tel:+919677111510" className="text-[#54BAB9] hover:underline block">
                      +91-96771 11510
                    </a>
                    <a href="tel:+918754043602" className="text-[#54BAB9] hover:underline block">
                      +91-87540 43602
                    </a>
                    <a href="tel:+918754043603" className="text-[#54BAB9] hover:underline block">
                      +91-87540 43603
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-center shadow-xl border-0 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white rounded-lg">
                <div className="p-8">
                  <div
                    className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#E9DAC1" }}
                  >
                    <Mail className="text-[#54BAB9]" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Admissions</h3>
                  <p className="text-sm text-gray-600 mb-2">Admissions Manager</p>
                  <p className="text-sm font-semibold text-gray-800 mb-2">Mrs. Savitha Srinivasan</p>
                  <a href="tel:+919840391815" className="text-[#54BAB9] hover:underline block text-sm mb-1">
                    +91-98403 91815
                  </a>
                  <a href="mailto:admissions@buddingminds.net" className="text-[#54BAB9] hover:underline text-sm">
                    admissions@buddingminds.net
                  </a>
                </div>
              </div>

              <div className="text-center shadow-xl border-0 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white rounded-lg">
                <div className="p-8">
                  <div
                    className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#E9DAC1" }}
                  >
                    <Bus className="text-[#54BAB9]" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Transport</h3>
                  <a href="tel:+919840761722" className="text-[#54BAB9] hover:underline block text-sm mb-2">
                    +91-98407 61722
                  </a>
                  <a href="mailto:transport@buddingminds.net" className="text-[#54BAB9] hover:underline text-sm mb-3">
                    transport@buddingminds.net
                  </a>
                  <button
                    onClick={() => setActiveSection("bus")}
                    className="inline-block px-4 py-2 text-sm text-white rounded-lg hover:opacity-90 transition-opacity transform hover:scale-105"
                    style={{ backgroundColor: "#54BAB9" }}
                  >
                    View Bus Routes
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === "bus" && (
          <div className="py-8">
            {/* Bus Routes Section */}
            <div className="w-full">
              <div className="bg-white rounded-xl shadow-lg p-4 mb-8">
                <div className="grid grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-2 h-auto p-2 bg-gray-50 rounded-lg">
                  {Object.keys(busRoutes).map((route) => (
                    <button
                      key={route}
                      onClick={() => setActiveRoute(route)}
                      className={`${
                        activeRoute === route
                          ? "bg-[#54BAB9] text-white"
                          : "bg-white text-gray-700 hover:bg-[#9ED2C6] hover:text-white"
                      } transition-all duration-200 text-sm py-3 px-3 rounded-md shadow-sm font-medium`}
                    >
                      {route}
                    </button>
                  ))}
                </div>
              </div>

              {Object.entries(busRoutes).map(([routeKey, routeData]) => (
                <div key={routeKey} className={`${activeRoute === routeKey ? "block" : "hidden"}`}>
                  <div className="shadow-2xl border-0 bg-white rounded-xl overflow-hidden">
                    <div className="text-center py-6" style={{ backgroundColor: "#9ED2C6" }}>
                      <h2 className="text-3xl text-white flex items-center justify-center gap-3 font-bold">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                          <MapPin size={28} className="text-[#54BAB9]" />
                        </div>
                        {routeKey} - {routeData.name}
                      </h2>
                    </div>
                    <div className="p-0">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead style={{ backgroundColor: "#F7ECDE" }}>
                            <tr>
                              <th className="px-6 py-4 text-left font-bold text-gray-800 text-lg">S.No</th>
                              <th className="px-6 py-4 text-left font-bold text-gray-800 text-lg">Stop Point</th>
                              <th className="px-6 py-4 text-center font-bold text-gray-800 text-lg">
                                <div className="flex items-center justify-center gap-2">
                                  <Clock size={20} />
                                  Pick up time
                                </div>
                              </th>
                              <th className="px-6 py-4 text-center font-bold text-gray-800 text-lg">
                                <div className="flex items-center justify-center gap-2">
                                  <Clock size={20} />
                                  Drop time
                                </div>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {routeData.stops.map((stop, index) => (
                              <tr
                                key={index}
                                className={`hover:bg-gray-50 transition-colors duration-200 ${
                                  index % 2 === 0 ? "bg-white" : "bg-gray-25"
                                }`}
                              >
                                <td className="px-6 py-4 text-center">
                                  <div
                                    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                                    style={{ backgroundColor: "#54BAB9" }}
                                  >
                                    {stop.sno}
                                  </div>
                                </td>
                                <td className="px-6 py-4 text-gray-800 font-medium">{stop.stop}</td>
                                <td className="px-6 py-4 text-center">
                                  <span
                                    className="px-3 py-1 rounded-full text-sm font-semibold text-white"
                                    style={{ backgroundColor: "#9ED2C6" }}
                                  >
                                    {stop.pickup}
                                  </span>
                                </td>
                                <td className="px-6 py-4 text-center">
                                  <span
                                    className="px-3 py-1 rounded-full text-sm font-semibold text-white"
                                    style={{ backgroundColor: "#54BAB9" }}
                                  >
                                    {stop.drop}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Transport Contact Info */}
            <div className="mt-12 shadow-xl border-0 bg-white rounded-xl">
              <div className="p-8 text-center">
                <div
                  className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#E9DAC1" }}
                >
                  <Phone size={32} className="text-[#54BAB9]" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Transport Contact</h3>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <a
                    href="tel:+919840761722"
                    className="flex items-center gap-3 text-[#54BAB9] hover:text-[#9ED2C6] transition-colors duration-200 text-lg font-semibold"
                  >
                    <Phone size={24} />
                    +91-98407 61722
                  </a>
                  <a
                    href="mailto:transport@buddingminds.net"
                    className="flex items-center gap-3 text-[#54BAB9] hover:text-[#9ED2C6] transition-colors duration-200 text-lg font-semibold"
                  >
                    <Mail size={24} />
                    transport@buddingminds.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
