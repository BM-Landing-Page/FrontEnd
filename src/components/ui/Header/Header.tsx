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
      <div className="relative">
        {/* Left and right controls row */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-2">
          {/* Logo and School Name */}
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4 flex-shrink-0 text-center sm:text-left">
            <Image src="/images/logo.png" alt="Budding Minds Logo" width={70} height={70} />
            <span className="text-sm sm:text-xl font-bold tracking-wide text-[#1E293B] leading-tight">
              <span className="block">BUDDING MINDS</span>
              <span className="block">INTERNATIONAL SCHOOL</span>
            </span>
          </div>

          {/* Hamburger Button */}
          <button
            className="cursor-pointer p-2 hover:scale-105 transition-transform flex-shrink-0"
            onClick={openNav}
            aria-label="Open navigation menu"
          >
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
          </button>
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-full max-w-md sm:max-w-lg px-4 pointer-events-auto z-10">
            <Searchbar />
          </div>
        </div>
      </div>
    </header>
  )
}
