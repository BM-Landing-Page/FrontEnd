"use client";

import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});

interface HeaderProps {
  openNav: () => void;
}

export default function Header({ openNav }: HeaderProps) {
  return (
    <header
      className="fixed top-0 left-0 w-full z-40 transition-colors shadow-sm"
      style={{
        background: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo and School Name */}
        <div className="flex items-center gap-4">
          <Image
            src="/images/logo.png"
            alt="Budding Minds Logo"
            width={70}
            height={70}
            className="rounded-full"
          />
          <span
            className={`text-2xl font-bold tracking-wide text-[#1E293B] ${playfair.className}`}
          >
            Budding Minds International School
          </span>
        </div>

        {/* Hamburger Button */}
        <div
          className="cursor-pointer p-2 hover:scale-105 transition-transform"
          onClick={openNav}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 text-[#1E293B]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}
