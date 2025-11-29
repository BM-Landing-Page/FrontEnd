"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import Searchbar from "./Searchbar"
import FullScreenNav from "@/components/ui/FullScreenNav"

export default function Header({ className }: { className?: string }) {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full h-20 z-50 shadow-sm transition-colors ${className || ""}`}
        style={{
          background: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <div className="flex items-center justify-between h-full px-4 sm:px-6">
          {/* Logo + School Name */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0 hover:opacity-80 transition-opacity">
            <Image src="/images/logo.png" alt="Budding Minds Logo" width={55} height={55} className="object-contain" />
            <div className="text-[#1E293B] font-bold tracking-wide font-sans leading-tight">
              <span className="text-sm sm:text-lg block">Budding Minds International School</span>
            </div>
          </Link>

          {/* CENTER Search Bar */}
          <div className="hidden md:flex flex-1 justify-center mx-4 max-w-lg">
            <Searchbar />
          </div>

          <button
            className="cursor-pointer p-2 hover:scale-105 transition-transform flex-shrink-0"
            onClick={() => setIsNavOpen(true)}
            aria-label="Open Navigation Menu"
          >
            <Menu size={28} className="text-[#1E293B]" />
          </button>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden px-4 pb-2">
          <Searchbar />
        </div>
      </header>

      {/* Full Screen Navigation Overlay */}
      {isNavOpen && <FullScreenNav onClose={() => setIsNavOpen(false)} />}
    </>
  )
}
