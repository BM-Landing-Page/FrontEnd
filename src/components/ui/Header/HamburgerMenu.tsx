"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import FullScreenNav from "@/components/ui/FullScreenNav";

export default function HamburgerMenu() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsNavOpen(true)}
        aria-label="Open Menu"
        className="p-2 rounded-full bg-[#54BAB9] text-white shadow-md hover:scale-105 transition"
      >
        <Menu size={24} />
      </button>

      {isNavOpen && <FullScreenNav onClose={() => setIsNavOpen(false)} />}
    </>
  );
}
