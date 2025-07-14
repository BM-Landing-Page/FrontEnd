"use client";

import React, { useState, useEffect } from "react";
import { Circle, Search } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
const images = [
  { url: "/images/Herobannerbg.jpg", alt: "Hero Background 1" },
  { url: "/images/Herobannerbg1.jpg", alt: "Hero Background 2" },
  { url: "/images/Herobannerbg2.jpg", alt: "Hero Background 3" },
];

export default function HeroBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#F7ECDE] text-white font-sans">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img.url}
              alt={img.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Slogan */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20 text-center px-6">
        <p className="text-xl font-light tracking-wider">BE THE START OF</p>
        <h2 className="text-5xl md:text-6xl font-extrabold mt-1">SOMETHING</h2>
      </div>

      {/* Bottom Left Caption */}
      <div className="absolute bottom-4 left-6 z-20 text-sm md:text-base text-white space-y-1">
        <div className="flex items-center gap-3">
          <Search size={14} />
          <span className="font-semibold">PARENTS | STUDENTS | STAFF</span>
        </div>
        <p className="text-xs md:text-sm">#BeTheStartOfSomething</p>
      </div>

      {/* Bottom Right Dots */}
      <div className="absolute bottom-4 right-6 z-20 flex items-center space-x-2">
        {images.map((_, i) => (
          <Circle
            key={i}
            size={10}
            fill={i === currentIndex ? "#fff" : "transparent"}
            stroke="#fff"
            className="cursor-pointer"
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#54BAB9] hover:bg-[#459a99] p-3 rounded-full shadow-lg"
      >
        <FaWhatsapp size={24} className="text-white" />
      </a>
    </div>
  );
}
