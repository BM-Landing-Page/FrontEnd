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
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/bmischool/#" },
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/buddingmindsinternationalschool/" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/budding-minds-international-school-15585419b/?originalSubdomain=in" },
  { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@BMIS" },
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
    <div className="fixed inset-0 z-[100] flex flex-row font-light select-none overflow-hidden w-full h-screen">
      {/* LEFT PANEL */}
      <div className="w-1/2 h-full bg-[#F7ECDE] flex flex-col justify-center gap-4 px-8 pt-10 relative overflow-y-auto items-end">
        <button
          onClick={onClose}
          aria-label="Close Menu"
          className="absolute top-5 left-5 text-[#1E293B] hover:scale-105 transition-transform"
        >
          <X size={30} />
        </button>

        <div className="h-[75%] flex flex-col justify-between text-right">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              ref={(el) => {
                refMap.current[item.label] = el;
              }}
              onClick={() => setActive(item.label)}
              onMouseEnter={() => setActive(item.label)}
              className={`cursor-pointer text-base xl:text-xl font-medium transition-all hover:underline hover:text-[#850000] ${
                active === item.label ? "text-[#850000]" : "text-[#1E293B]"
              }`}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-1/2 h-full bg-white/30 backdrop-blur-md p-4 text-[#1E293B] relative overflow-y-auto">
        {active && (
          <div
            className="absolute flex flex-col gap-2 text-sm xl:text-base font-semibold animate-fade-in"
            style={{ top: subTop, left: "2rem" }}
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

        {/* Social Links */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-4 text-xs xl:text-sm items-center text-[#1E293B]">
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
