"use client"
import { X, Instagram, Facebook, Linkedin, Youtube } from "lucide-react"
import type React from "react"
import Link from "next/link"
import { useRef, useState } from "react"

const NAV_ITEMS = [
  { label: "Home", subItems: [] },
  { label: "My School One", subItems: [] },
  {
    label: "About BMIS",
    subItems: ["Vision, Mission & Philosophy", "Founder's Message", "BMIS Journey", "Leadership Team","Calendar", "Alumni"],
  },
  {
    label: "Academics",
    subItems: [
      "Curriculum Overview",
      "Early Years",
      "Primary & Middle Years",
      "IGCSE & Senior Programmes",
      "Pedagogy & Tools",
    ],
  },
  { label: "Admissions", subItems: ["Admission Process", "Register Now"] },
  {
    label: "Campus Life",
    subItems: ["A Day at BMIS", "Events & Celebrations","Beyond Books", "Gallery" ],
  },
  { label: "Student Leadership", subItems: ["SLC Overview", "Student Profiles", "Leadership Projects"] },
  {
    label: "BM PD Academy",
    subItems: [
      "About the Academy",
      "Pedagogy & Modules",
      "PD Community",
      "Apply Now",
    ],
  },
  { label: "Newsroom", subItems: ["School Updates", "Student Achievements", "Thought Pieces", "BM Gazette"] },
  { label: "Career", subItems: [] },
  { label: "Contact Us", subItems: [] },
]

const ROUTE_OVERRIDES: Record<string, string> = {
  Home: "/",
  "Curriculum Overview": "curriculum",
  "Leadership Team": "ourteam",
  "BMIS Journey": "bmisjourney",
  "Early Years": "/earlyyears",
  "Primary & Middle Years": "/primaryandmiddleyears",
  "IGCSE & Senior Programmes": "/igcseandsenioryears",
  "Pedagogy & Tools": "/pedagogytools",
  "Vision, Mission & Philosophy": "/missionforvision",
  "SLC Overview": "/slcoverview",
  "A Day at BMIS": "/adayatbm",
  "Events & Celebrations": "/eventsandcelebration",
  "School Updates": "/schoolupdate",
  "Student Achievements": "/studentachievement",
  "Thought Pieces": "/studentvoice",
  "Beyond Books": "/beyondbooks",
  "Student Profiles": "/studentprofile",
  "Leadership Projects": "/leadershipprojects",
  "Alumni": "/alumni",
  "Founder's Message": "/foundersmessage",
  "Register Now": "https://buddingminds.myschoolone.com/cloud/Admission/EnquiryForm.php?ksjdkjsd=MQ==",
  "Admission Process": "/admissionsprocess",
  "Calendar": "/calendar",
  Gallery: "/gallery",
  Career: "/career",
  "Apply Now": "pdform",
  "About the Academy": "/abouttheacademy",
  "Pedagogy & Modules": "/pedagogyandmodule",
  "BM Gazette": "/bmgazette",
  "PD Community": "/pdcommunity",
  "Contact Us": "contactus",
}

const SOCIAL_LINKS = [
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/bmischool/#" },
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/buddingmindsinternationalschool/" },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/budding-minds-international-school-15585419b",
  },
  { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@BMIS" },
]

interface FullScreenNavProps {
  onClose: () => void
}

// Helper function to check if URL is external
const isExternalUrl = (url: string): boolean => {
  return url.startsWith("http://") || url.startsWith("https://")
}

export default function FullScreenNav({ onClose }: FullScreenNavProps) {
  const [active, setActive] = useState<string | null>(null)
  const [hoverTop, setHoverTop] = useState<number | null>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  const handleSubItemClick = (href: string) => {
    setActive(null)
    onClose()

    // Check if it's an external URL and open in new tab
    if (isExternalUrl(href)) {
      window.open(href, "_blank", "noopener,noreferrer")
    }
  }

  const handleMouseEnter = (label: string, index: number) => {
    // Only set active if the item has sub-items
    const item = NAV_ITEMS.find((nav) => nav.label === label)
    if (item && item.subItems.length > 0) {
      setActive(label)
      const el = itemRefs.current[index]
      const container = containerRef.current
      if (el && container) {
        const elRect = el.getBoundingClientRect()
        const containerRect = container.getBoundingClientRect()
        setHoverTop(elRect.top - containerRect.top)
      }
    }
  }

  const handleNavigation = (item: (typeof NAV_ITEMS)[0]) => {
    if (item.subItems.length === 0) {
      onClose()
      if (item.label === "My School One") {
        window.open("https://myschoolone.com/buddingminds", "_blank", "noopener,noreferrer")
      } else {
        const route = ROUTE_OVERRIDES[item.label] || `/${item.label.toLowerCase().replace(/\s+/g, "-")}`

        // Check if it's an external URL and open in new tab
        if (isExternalUrl(route)) {
          window.open(route, "_blank", "noopener,noreferrer")
        } else {
          window.location.href = route
        }
      }
    } else {
      setActive(active === item.label ? null : item.label)
    }
  }

  // Handle desktop navigation with consistent behavior
  const handleDesktopNavigation = (item: (typeof NAV_ITEMS)[0], e: React.MouseEvent) => {
    e.preventDefault()
    handleNavigation(item)
  }

  return (
    <div className="fixed inset-0 z-[100] flex flex-col lg:flex-row font-light select-none w-full h-screen">
      {/* MOBILE AND TABLET VIEW */}
      <div className="lg:hidden bg-[#F7ECDE] w-full h-full p-4 sm:p-6 overflow-y-auto">
        <button
          onClick={onClose}
          aria-label="Close Menu"
          className="text-[#1E293B] hover:scale-105 transition-transform self-start mb-6"
        >
          <X size={24} className="sm:w-7 sm:h-7" />
        </button>
        <div className="flex flex-col gap-3 sm:gap-4 text-left justify-center min-h-[75vh]">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="w-full">
              <div
                onClick={() => handleNavigation(item)}
                className={`cursor-pointer text-base sm:text-lg font-medium transition-all hover:underline hover:text-[#850000] ${
                  active === item.label ? "text-[#850000]" : "text-[#1E293B]"
                }`}
              >
                {item.label}
              </div>
              {active === item.label && item.subItems.length > 0 && (
                <div className="mt-2 ml-3 sm:ml-4 flex flex-col gap-1.5 sm:gap-2 text-sm font-semibold">
                  {item.subItems.map((sub) => {
                    const overrideHref = ROUTE_OVERRIDES[sub]
                    const defaultHref = `/${item.label.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")}/${sub
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`
                    const finalHref = overrideHref || defaultHref

                    // For external URLs, use regular div with onClick instead of Link
                    if (isExternalUrl(finalHref)) {
                      return (
                        <div
                          key={sub}
                          onClick={() => handleSubItemClick(finalHref)}
                          className="hover:text-[#850000] transition-colors cursor-pointer"
                        >
                          {sub}
                        </div>
                      )
                    }

                    return (
                      <Link
                        key={sub}
                        href={finalHref}
                        className="hover:text-[#850000] transition-colors"
                        onClick={() => handleSubItemClick(finalHref)}
                      >
                        {sub}
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Social Links (Mobile) */}
        <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-3 sm:gap-4 text-xs items-center text-[#1E293B]">
          {SOCIAL_LINKS.map(({ name, icon: Icon, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 opacity-80 hover:opacity-100 transition"
            >
              <Icon size={16} />
              <span className="hidden sm:inline-block">{name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* DESKTOP VIEW */}
      <div className="hidden lg:flex w-full h-full relative">
        {/* LEFT PANEL */}
        <div ref={containerRef} className="w-1/2 bg-[#F7ECDE] px-6 xl:px-8 flex flex-col h-full relative">
          <button
            onClick={onClose}
            aria-label="Close Menu"
            className="absolute top-5 left-5 text-[#1E293B] hover:scale-105 transition-transform z-10"
          >
            <X size={30} />
          </button>
          <div className="flex-1 flex flex-col justify-center items-end text-right gap-3 xl:gap-4">
            {NAV_ITEMS.map((item, index) => {
              const isLink = item.subItems.length === 0
              const sharedClass = `cursor-pointer text-[clamp(0.9rem,1.5vw,1.2rem)] font-medium transition-all hover:underline hover:text-[#850000] ${
                active === item.label ? "text-[#850000]" : "text-[#1E293B]"
              }`
              return (
                <div
                  key={item.label}
                  ref={(el) => {
                    itemRefs.current[index] = el
                  }}
                  onMouseEnter={() => handleMouseEnter(item.label, index)}
                >
                  {isLink ? (
                    <div onClick={(e) => handleDesktopNavigation(item, e)} className={sharedClass}>
                      {item.label}
                    </div>
                  ) : (
                    <div className={sharedClass}>{item.label}</div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div
          className="w-1/2 bg-white/30 backdrop-blur-md p-6 xl:p-8 text-[#1E293B] relative"
          onMouseEnter={() => {
            // Keep the active state when hovering over the right panel
          }}
        >
          {active && hoverTop !== null && (
            <div
              className="absolute left-6 xl:left-8 flex flex-col gap-2 text-sm xl:text-base font-semibold bg-white/50 p-4 xl:p-5 rounded-xl shadow-lg backdrop-blur-sm min-w-[200px] xl:min-w-[250px]"
              style={{
                top:
                  hoverTop !== null && containerRef.current
                    ? Math.min(
                        hoverTop,
                        containerRef.current.offsetHeight -
                          (NAV_ITEMS.find((n) => n.label === active)?.subItems.length ?? 0) * 36 -
                          32,
                      )
                    : 0,
              }}
              onMouseEnter={() => {
                // Keep submenu open when hovering over it
              }}
              onMouseLeave={() => {
                // Only close when leaving the submenu
                setActive(null)
                setHoverTop(null)
              }}
            >
              {NAV_ITEMS.find((n) => n.label === active)?.subItems.map((sub) => {
                const overrideHref = ROUTE_OVERRIDES[sub]
                const defaultHref = `/${active.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")}/${sub
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`
                const finalHref = overrideHref || defaultHref

                // For external URLs, use regular div with onClick instead of Link
                if (isExternalUrl(finalHref)) {
                  return (
                    <div
                      key={sub}
                      onClick={() => handleSubItemClick(finalHref)}
                      className="hover:text-[#850000] transition-colors py-1 cursor-pointer"
                    >
                      {sub}
                    </div>
                  )
                }

                return (
                  <Link
                    key={sub}
                    href={finalHref}
                    className="hover:text-[#850000] transition-colors py-1"
                    onClick={() => handleSubItemClick(finalHref)}
                  >
                    {sub}
                  </Link>
                )
              })}
            </div>
          )}
          {/* Social Icons - Center aligned with labels */}
          <div className="absolute bottom-6 w-full flex justify-center z-50">
            <div className="flex gap-6 items-center text-[#1E293B] opacity-80 hover:opacity-100 transition">
              {SOCIAL_LINKS.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#850000]"
                >
                  <Icon size={18} />
                  <span className="text-sm font-medium">{name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
