"use client";

import { X, Instagram, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";
import { useRef, useState, useLayoutEffect } from "react";

const NAV_ITEMS = [
  { label: "Home", subItems: [] },
  { label: "About Us", subItems: ["Mission for Vision", "Our Story", "Principal’s Message", "Our Team", "Milestones"] },
  { label: "Academics", subItems: ["Curriculum", "Faculty", "Methodology", "Assessments"] },
  { label: "Admissions", subItems: ["Admission Process", "Eligibility", "Enquiry Form", "Fee Structure"] },
  { label: "Programs & Co-curricular", subItems: ["Clubs", "Sports", "Arts", "STEM"] },
  { label: "Campus Life", subItems: ["Student Life", "Facilities", "Events", "Student Council"] },
  { label: "BM PD Academy", subItems: ["Courses Offered", "Workshops", "Resources"] },
  { label: "Student Leadership", subItems: ["Student Council", "Student Profiles", "Past Councils", "Click to Read More"] },
  { label: "Parent Corner", subItems: ["Circulars", "Timetables", "Parent Resources", "Feedback"] },
  { label: "Gallery", subItems: ["Photos", "Videos", "School Events"] },
  { label: "Blog / News / Updates", subItems: ["Announcements", "Achievements", "Media Coverage"] },
  { label: "Contact Us", subItems: ["Visit Us", "Enquiry Form", "Phone & Email"] },
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
      setSubTop(refMap.current[active]!.getBoundingClientRect().top);
    }
  }, [active]);

  const handleSubItemClick = () => {
    setActive(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex font-light select-none">
      {/* LEFT PANEL */}
      <div className="relative w-1/2 h-full flex flex-col justify-center items-end pr-16 gap-6 bg-[#F7ECDE]">
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
            className={`cursor-pointer text-2xl md:text-3xl font-semibold transition-all hover:underline hover:text-[#850000] ${
              active === item.label ? "text-[#850000]" : "text-[#1E293B]"
            }`}
          >
            {item.label}
          </div>
        ))}
      </div>

      {/* RIGHT PANEL */}
      <div className="relative w-1/2 h-full backdrop-blur-md bg-white/20 text-[#1E293B]">
        {active && (
          <div
            className="absolute left-10 flex flex-col gap-4 text-xl md:text-2xl font-bold animate-fade-in"
            style={{ top: subTop }}
            onMouseEnter={() => setActive(active)}
            onMouseLeave={() => setActive(null)}
          >
            {NAV_ITEMS.find((n) => n.label === active)?.subItems.map((sub) => (
              <Link
                key={sub}
                href={
                  active === "About Us" && sub === "Mission for Vision"
                    ? "/missionforvision"
                    : `/${active.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")}/${sub
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`
                }
                className="hover:text-[#850000] transition-colors"
                onClick={handleSubItemClick}
              >
                {sub}
              </Link>
            ))}
          </div>
        )}

        {/* SOCIAL LINKS */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-6 text-sm items-center">
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
