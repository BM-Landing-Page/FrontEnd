"use client"

import Image from "next/image"
import Searchbar from "./Searchbar"

interface HeaderProps {
  openNav: () => void
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
      <div className="flex items-center justify-between px-4 sm:px-6 py-2">
        {/* Logo and School Name */}
        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="Budding Minds Logo"
            width={50} // Reduced from 70
            height={50} // Reduced from 70
            className="rounded-full sm:w-[60px] sm:h-[60px]" // Reduced from 90px
          />
          <span className="text-base sm:text-xl font-bold tracking-wide text-[#1E293B] font-calibri leading-tight">
            <span className="block sm:inline">Budding Minds</span>
            <span className="block sm:inline sm:ml-2">International School</span>
          </span>
        </div>

        {/* Search Bar - Centered between logo and hamburger */}
        <div className="flex-1 flex justify-center mx-4 max-w-md">
          <Searchbar />
        </div>

        {/* Hamburger Button */}
        <div className="cursor-pointer p-2 hover:scale-105 transition-transform flex-shrink-0" onClick={openNav}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 sm:w-7 sm:h-7 text-[#1E293B]"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
      </div>
    </header>
  )
}
