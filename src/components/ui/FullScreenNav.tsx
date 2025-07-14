"use client";

import {
  X,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import { useRef, useState, useLayoutEffect } from "react";

const NAV_ITEMS = [
  {
    label: "About Us",
    subItems: [
      "Vision, Mission & Philosophy",
      "Principal’s Message",
      "BMIS Journey",
      "Leadership Team",
    ],
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
  {
    label: "Admissions",
    subItems: [
      "Admission Process",
      "Age Eligibility & FAQs",
      "Fee Structure",
    ],
  },
  {
    label: "Programs",
    subItems: [
      "Enrichment Activities",
      "Clubs & Workshops",
      "Certificate Courses",
    ],
  },
  {
    label: "Campus Life",
    subItems: [
      "A Day at BMIS",
      "Events & Celebrations",
      "Student Voice",
    ],
  },
  {
    label: "Student Leadership",
    subItems: [
      "SLC Overview",
      "Student Profiles",
      "Leadership Projects",
    ],
  },
  {
    label: "IGNITE",
    subItems: [],
  },
  {
    label: "BM PD Academy",
    subItems: [
      "About the Academy",
      "Vision & Outcomes",
      "Pedagogy & Modules",
      "Candidate Voice",
      "Gallery / Media",
      "FAQs or Myths Busted",
    ],
  },
  {
    label: "Parent Hub",
    subItems: [
      "Communication Tools",
      "Calendar & Downloads",
      "Parent Testimonials",
    ],
  },
  {
    label: "Gallery",
    subItems: [
      "Curated Albums",
      "Media Highlights",
    ],
  },
  {
    label: "Newsroom",
    subItems: [
      "School Updates",
      "Student Achievements",
      "Thought Pieces",
      "BM Gazette",
    ],
  },
  {
    label: "Contact Us",
    subItems: [
      "Location & Details",
      "Socials",
    ],
  },
  {
    label: "Extras",
    subItems: [
      "Alumni Stories",
      "Faculty Spotlights",
      "Student Projects",
      "School Policies",
    ],
  },
];

const SOCIAL_LINKS = [
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/buddingminds" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/buddingminds" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/buddingminds" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/school/buddingminds" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com/@buddingminds" },
];

interface FullScreenNavProps {
  onClose: () => void;
}

export default function FullScreenNav({ onClose }: FullScreenNavProps) {
  const [active, setActive] = useState<string | null>(null);
  const [subTop, setSubTop] = useState(0);
  const refMap = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useLayoutEffect(() => {
    if (active && refMap.current[active]) {
      const rect = refMap.current[active]!.getBoundingClientRect();
      setSubTop(rect.top);
    }
  }, [active]);

  const handleSubItemClick = () => {
    setActive(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex flex-col md:flex-row font-light select-none">
      {/* LEFT PANEL */}
      <div className="relative md:w-1/2 w-full h-full flex flex-col justify-center items-end md:pr-16 px-6 gap-5 bg-[#F7ECDE]">
        <button
          onClick={onClose}
          aria-label="Close Menu"
          className="absolute top-5 left-5 text-[#1E293B] hover:scale-105 transition-transform"
        >
          <X size={30} />
        </button>

        {NAV_ITEMS.map((item) => (
          <div
            key={item.label}
            ref={(el) => {
              refMap.current[item.label] = el;
            }}
            onMouseEnter={() => setActive(item.label)}
            className={`cursor-pointer text-xl md:text-3xl font-semibold transition-all hover:underline hover:text-[#850000] ${
              active === item.label ? "text-[#850000]" : "text-[#1E293B]"
            }`}
          >
            {item.label}
          </div>
        ))}
      </div>

      {/* RIGHT PANEL — SubItems */}
      <div className="relative md:w-1/2 w-full h-full backdrop-blur-md bg-white/20 text-[#1E293B]">
        {active && (
          <div
            className="absolute left-6 md:left-10 flex flex-col gap-3 text-lg md:text-2xl font-bold animate-fade-in"
            style={{ top: subTop }}
            onMouseEnter={() => setActive(active)}
            onMouseLeave={() => setActive(null)}
          >
            {NAV_ITEMS.find((n) => n.label === active)?.subItems.map((sub) => (
              <Link
                key={sub}
                href={`/${active.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")}/${sub
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="hover:text-[#850000] transition-colors"
                onClick={handleSubItemClick}
              >
                {sub}
              </Link>
            ))}
          </div>
        )}

        {/* SOCIAL LINKS */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 text-sm items-center">
          {SOCIAL_LINKS.map(({ name, icon: Icon, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-white opacity-80 hover:opacity-100 transition"
            >
              <Icon size={16} className="stroke-1" />
              <span className="hidden sm:inline-block">{name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
