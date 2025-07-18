"use client";

import {
  X,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

const NAV_ITEMS = [
  { label: "Home", subItems: [] },
  { label: "About Us", subItems: ["Vision, Mission & Philosophy", "Founder's Message", "BMIS Journey", "Leadership Team"] },
  { label: "Academics", subItems: ["Curriculum Overview", "Early Years", "Primary & Middle Years", "IGCSE & Senior Programmes", "Pedagogy & Tools"] },
  { label: "Admissions", subItems: ["Admission Process"] },
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
  "Admission Process": "admissionsprocess"
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
  const [hoverTop, setHoverTop] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleSubItemClick = () => {
    setActive(null);
    onClose();
  };

  const handleMouseEnter = (label: string, index: number) => {
    setActive(label);
    const el = itemRefs.current[index];
    if (el) {
      setHoverTop(el.offsetTop);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex flex-col md:flex-row font-light select-none overflow-hidden w-full h-screen">
      {/* MOBILE VIEW */}
      <div className="md:hidden bg-[#F7ECDE] w-full h-full p-6 overflow-y-auto">
        <button
          onClick={onClose}
          aria-label="Close Menu"
          className="text-[#1E293B] hover:scale-105 transition-transform self-start mb-6"
        >
          <X size={30} />
        </button>

        <div className="flex flex-col gap-4 text-left">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="w-full">
              <div
                onClick={() => setActive(active === item.label ? null : item.label)}
                className={`cursor-pointer text-base xl:text-xl font-medium transition-all hover:underline hover:text-[#850000] ${
                  active === item.label ? "text-[#850000]" : "text-[#1E293B]"
                }`}
              >
                {item.label}
              </div>

              {active === item.label && item.subItems.length > 0 && (
                <div className="mt-2 ml-4 flex flex-col gap-2 text-sm xl:text-base font-semibold">
                  {item.subItems.map((sub) => {
                    const overrideHref = ROUTE_OVERRIDES[sub];
                    const defaultHref = `/${item.label
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
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="mt-10 flex flex-wrap justify-center gap-4 text-xs xl:text-sm items-center text-[#1E293B]">
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
      <div className="hidden md:flex w-full h-full relative">
        {/* LEFT PANEL */}
        <div className="w-1/2 bg-[#F7ECDE] flex flex-col justify-center gap-4 px-8 pt-10 overflow-y-auto items-end relative">
          <button
            onClick={onClose}
            aria-label="Close Menu"
            className="absolute top-5 left-5 text-[#1E293B] hover:scale-105 transition-transform"
          >
            <X size={30} />
          </button>

          <div className="flex flex-col gap-4 text-right md:h-[75%] w-full md:w-auto">
            {NAV_ITEMS.map((item, index) => (
              <div
                key={item.label}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                onMouseEnter={() => handleMouseEnter(item.label, index)}
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
        <div className="w-1/2 bg-white/30 backdrop-blur-md p-6 text-[#1E293B] overflow-hidden relative">
          {active && (
            <div
              className="absolute left-6 flex flex-col gap-2 text-sm xl:text-base font-semibold bg-white/50 p-4 rounded-xl"
              style={{ top: hoverTop ?? 0 }}
              onMouseLeave={() => setActive(null)}
              onMouseEnter={() => null}
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
        </div>
      </div>
    </div>
  );
}
