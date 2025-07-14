// components/ui/Header.tsx
"use client";

import Image from "next/image";

interface HeaderProps {
  openNav: () => void;
}

export default function Header({ openNav }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 w-full z-40 backdrop-blur-md bg-white/30 text-[#1E293B] shadow-sm transition-colors">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo and School Name */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Budding Minds Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="text-lg font-bold tracking-wide">Budding Minds International School</span>
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
            className="w-6 h-6"
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
