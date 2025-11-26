"use client"

import { useState, useEffect } from "react"
import { Phone, Mail, MapPin, Bus, Clock, Loader } from 'lucide-react'
import { fetchBusRoutes, fetchBusStopsByRoute, BusRoute, BusStop } from "@/services/api"

export default function CombinedPage() {
  const [activeSection, setActiveSection] = useState("contact")
  const [activeRoute, setActiveRoute] = useState<string | null>(null)
  const [routes, setRoutes] = useState<BusRoute[]>([])
  const [stopsByRoute, setStopsByRoute] = useState<Record<string, BusStop[]>>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch all bus routes on component mount
  useEffect(() => {
    const loadRoutes = async () => {
      try {
        setLoading(true)
        const response = await fetchBusRoutes()
        if (response.success && response.data) {
          // Sort routes by bus_number in ascending order
          const sortedRoutes = [...response.data].sort((a, b) => {
            const numA = parseInt(a.bus_number) || 0
            const numB = parseInt(b.bus_number) || 0
            return numA - numB
          })
          setRoutes(sortedRoutes)
          // Set the first route as active
          if (sortedRoutes.length > 0) {
            setActiveRoute(sortedRoutes[0].id)
          }
        } else {
          setError(response.error || "Failed to fetch routes")
        }
      } catch (err) {
        setError("An unexpected error occurred")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    loadRoutes()
  }, [])

  // Fetch stops when active route changes
  useEffect(() => {
    const loadStops = async () => {
      if (!activeRoute) return

      if (stopsByRoute[activeRoute]) {
        // Already cached, skip
        return
      }

      try {
        const response = await fetchBusStopsByRoute(activeRoute)
        if (response.success && response.data) {
          // Sort stops by order number in ascending order
          const sortedStops = [...response.data].sort((a, b) => {
            const orderA = a.order || 0
            const orderB = b.order || 0
            return orderA - orderB
          })
          setStopsByRoute((prev) => ({
            ...prev,
            [activeRoute]: sortedStops,
          }))
        }
      } catch (err) {
        console.error("Error loading stops:", err)
      }
    }

    loadStops()
  }, [activeRoute, stopsByRoute])

  // Helper function to format time with AM/PM
  const formatTime = (time: string | null | undefined) => {
    if (!time || time === "—") return "—"
    
    // If time already has AM/PM, return as is
    if (time.toUpperCase().includes("AM") || time.toUpperCase().includes("PM")) {
      return time
    }
    
    // Parse time (assuming format like "7:30" or "07:30")
    const timeParts = time.split(":")
    if (timeParts.length !== 2) return time
    
    const hours = parseInt(timeParts[0])
    const minutes = parseInt(timeParts[1])
    
    if (isNaN(hours) || isNaN(minutes)) return time
    
    const period = hours >= 12 ? "PM" : "AM"
    const displayHours = hours % 12 || 12
    return `${displayHours}:${minutes.toString().padStart(2, "0")} ${period}`
  }

  const currentStops = activeRoute ? stopsByRoute[activeRoute] || [] : []
  const currentRoute = activeRoute ? routes.find((r) => r.id === activeRoute) : null

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
                  <h2 className="text-2xl text-white font-bold">Budding Minds International School - Main Campus</h2>
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
                  <h2 className="text-2xl text-white font-bold">Budding Minds International Play School - Franchise</h2>
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
                      <a href="mailto:bmis@buddingminds.net" className="text-[#54BAB9] hover:underline">
                        bmis@buddingminds.net
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
                  <p className="text-sm font-semibold text-gray-800 mb-2">Ms. Savitha Srinivasan</p>
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
                  <p className="text-sm text-gray-600 mb-2">Transport Manager</p>
                  <p className="text-sm font-semibold text-gray-800 mb-2">Ms. Hemasudha</p>
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
              {loading ? (
                <div className="flex items-center justify-center py-16">
                  <Loader className="animate-spin text-[#54BAB9]" size={40} />
                  <span className="ml-3 text-lg text-gray-600">Loading bus routes...</span>
                </div>
              ) : error ? (
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                  <p className="text-red-800 font-semibold">Error: {error}</p>
                </div>
              ) : (
                <>
                  <div className="bg-white rounded-xl shadow-lg p-4 mb-8">
                    <div className="grid grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-2 h-auto p-2 bg-gray-50 rounded-lg">
                      {routes.map((route) => (
                        <button
                          key={route.id}
                          onClick={() => setActiveRoute(route.id)}
                          className={`${
                            activeRoute === route.id
                              ? "bg-[#54BAB9] text-white"
                              : "bg-white text-gray-700 hover:bg-[#9ED2C6] hover:text-white"
                          } transition-all duration-200 text-sm py-3 px-3 rounded-md shadow-sm font-medium`}
                          title={route.route_name}
                        >
                          Route {route.bus_number}
                        </button>
                      ))}
                    </div>
                  </div>

                  {currentRoute && currentStops.length > 0 ? (
                    <div className="shadow-2xl border-0 bg-white rounded-xl overflow-hidden">
                      <div className="text-center py-6" style={{ backgroundColor: "#9ED2C6" }}>
                        <h2 className="text-3xl text-white flex items-center justify-center gap-3 font-bold">
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                            <MapPin size={28} className="text-[#54BAB9]" />
                          </div>
                          {currentRoute.route_name}
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
                              {currentStops.map((stop, index) => (
                                <tr
                                  key={stop.id}
                                  className={`hover:bg-gray-50 transition-colors duration-200 ${
                                    index % 2 === 0 ? "bg-white" : "bg-gray-25"
                                  }`}
                                >
                                  <td className="px-6 py-4 text-center">
                                    <div
                                      className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                                      style={{ backgroundColor: "#54BAB9" }}
                                    >
                                      {stop.order || index + 1}
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 text-gray-800 font-medium">{stop.name}</td>
                                  <td className="px-6 py-4 text-center">
                                    <span
                                      className="px-3 py-1 rounded-full text-sm font-semibold text-white"
                                      style={{ backgroundColor: "#9ED2C6" }}
                                    >
                                      {formatTime(stop.pickup)}
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 text-center">
                                    <span
                                      className="px-3 py-1 rounded-full text-sm font-semibold text-white"
                                      style={{ backgroundColor: "#54BAB9" }}
                                    >
                                      {formatTime(stop.drop)}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </>
              )}

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
          </div>
        )}
      </div>
    </div>
  )
}