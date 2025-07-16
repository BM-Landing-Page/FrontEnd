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
  { label: "About Us", subItems: ["Vision, Mission & Philosophy", "Founder's Message", "BMIS Journey", "Leadership Team"] },
  { label: "Academics", subItems: ["Curriculum Overview", "Early Years", "Primary & Middle Years", "IGCSE & Senior Programmes", "Pedagogy & Tools"] },
  { label: "Admissions", subItems: ["Admission Process", "Age Eligibility & FAQs", "Fee Structure"] },
  { label: "Programs", subItems: ["Enrichment Activities", "Clubs & Workshops", "Certificate Courses"] },
  { label: "Campus Life", subItems: ["A Day at BMIS", "Events & Celebrations", "Student Voice"] },
  { label: "Student Leadership", subItems: ["SLC Overview", "Student Profiles", "Leadership Projects"] },
  { label: "IGNITE", subItems: [] },
  { label: "BM PD Academy", subItems: ["About the Academy", "Vision & Outcomes", "Pedagogy & Modules", "Candidate Voice", "Gallery / Media", "FAQs or Myths Busted"] },
  { label: "Parent Hub", subItems: ["Communication Tools", "Calendar & Downloads", "Parent Testimonials"] },
  { label: "Gallery", subItems: ["Curated Albums", "Media Highlights"] },
  { label: "Newsroom", subItems: ["School Updates", "Student Achievements", "Thought Pieces", "BM Gazette"] },
  { label: "Contact Us", subItems: ["Location & Details", "Socials"] },
];

const ROUTE_OVERRIDES: Record<string, string> = {
  "Vision, Mission & Philosophy": "/missionforvision",
  "Founder's Message": "/foundersmessage",
};

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
    <div className="fixed inset-0 z-[100] flex flex-col lg:flex-row font-light select-none overflow-y-auto lg:overflow-hidden">
      {/* LEFT PANEL */}
      <div className="relative lg:w-1/2 w-full h-auto lg:h-full flex flex-col justify-start items-start lg:items-end lg:pr-12 px-6 pt-10 gap-4 bg-[#F7ECDE] min-h-screen">
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
            onClick={() => setActive(item.label)}
            onMouseEnter={() => setActive(item.label)}
            className={`cursor-pointer text-base lg:text-xl font-medium transition-all hover:underline hover:text-[#850000] ${
              active === item.label ? "text-[#850000]" : "text-[#1E293B]"
            }`}
          >
            {item.label}
          </div>
        ))}
      </div>

      {/* RIGHT PANEL */}
      <div className="relative lg:w-1/2 w-full h-full bg-white text-[#1E293B] p-6 lg:p-0 lg:backdrop-blur-md lg:bg-white/20 min-h-screen">
        {active && (
          <div
            className="lg:absolute flex flex-col gap-2 text-sm lg:text-lg font-semibold animate-fade-in max-h-[75vh] overflow-y-auto pr-4"
            style={
              typeof window !== "undefined" && window.innerWidth >= 1024
                ? { top: subTop, left: "2.5rem" }
                : {}
            }
            onMouseEnter={() => setActive(active)}
            onMouseLeave={() => setActive(null)}
          >
            {NAV_ITEMS.find((n) => n.label === active)?.subItems.map((sub) => {
              const overrideHref = ROUTE_OVERRIDES[sub];
              const defaultHref = `/${active
                .toLowerCase()
                .replace(/ & /g, "-")
                .replace(/\s+/g, "-")}/${sub
                .toLowerCase()
                .replace(/\s+/g, "-")}`;
              return (
                <Link
                  key={sub}
                  href={overrideHref || defaultHref}
                  className="hover:text-[#850000] transition-colors"
                  onClick={handleSubItemClick}
                >
                  {sub}
                </Link>
              );
            })}
          </div>
        )}

        {/* SOCIAL LINKS */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-4 text-xs lg:text-sm items-center text-[#1E293B]">
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
    </div>
  );
}
