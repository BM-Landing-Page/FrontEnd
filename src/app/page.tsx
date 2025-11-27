"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { FaWhatsapp } from "react-icons/fa";
import HeroBanner from "@/components/sections/Home/HeroBanner";
import USPs from "@/components/sections/Home/USPs";
import CurriculumLinksSection from "@/components/sections/Home/CurriculumLinksSection";
import VideosShowcase from "@/components/sections/Home/VideosShowcaseSection";
import Popup from "@/components/ui/popup";

// Floating Bubble component
function FloatingBubble({ delay, duration, size, left, animationDelay }: any) {
  return (
    <div
      className="absolute rounded-full bg-gradient-to-br from-[#9ED2C6]/20 to-[#54BAB9]/20 animate-bounce"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left,
        bottom: "-50px",
        animationDelay: `${animationDelay}s`,
        animationDuration: `${duration}s`,
        animationIterationCount: "infinite",
        animationDirection: "alternate",
      }}
    />
  );
}

export default function HomePage() {
  const [bubbles, setBubbles] = useState<any[]>([]);

  useEffect(() => {
    const newBubbles = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 4,
      size: 20 + Math.random() * 40,
      left: `${Math.random() * 100}%`,
      animationDelay: Math.random() * 5,
    }));
    setBubbles(newBubbles);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const chatBubble = document.getElementById("chatbase-bubble");
      if (chatBubble) {
        chatBubble.style.bottom = "90px";
        chatBubble.style.right = "20px";
        chatBubble.style.zIndex = "50";
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main className="relative min-h-screen bg-white overflow-hidden">
        {/* Floating Bubbles */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {bubbles.map((bubble) => (
            <FloatingBubble key={bubble.id} {...bubble} />
          ))}
        </div>

        {/* Page Sections */}
        <div className="relative z-10">
          <HeroBanner />
          <USPs />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
            <CurriculumLinksSection />
            <VideosShowcase />
          </div>
        </div>

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/919840391815"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-10 right-4 md:bottom-16 md:right-5 z-40 bg-[#54BAB9] hover:bg-[#54BAB9] p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 transform"
          aria-label="Contact us on WhatsApp"
        >
          <FaWhatsapp size={24} className="text-white" />
        </a>

        {/* Chatbase Script */}
        <Script id="chatbase-embed" strategy="afterInteractive">
          {`
            (function(){
              if(!window.chatbase||window.chatbase("getState")!=="initialized"){
                window.chatbase=(...arguments)=>{
                  if(!window.chatbase.q){window.chatbase.q=[]}
                  window.chatbase.q.push(arguments)
                };
                window.chatbase=new Proxy(window.chatbase,{
                  get(target,prop){
                    if(prop==="q"){return target.q}
                    return(...args)=>target(prop,...args)
                  }
                })
              }
              const onLoad=function(){
                const script=document.createElement("script");
                script.src="https://www.chatbase.co/embed.min.js";
                script.id="wD_OAIHDFcqe9v2oO9GTH";
                script.domain="www.chatbase.co";
                document.body.appendChild(script)
              };
              if(document.readyState==="complete"){onLoad()}
              else{window.addEventListener("load",onLoad)}
            })();
          `}
        </Script>

        {/* Popup */}
        <Popup />
      </main>
    </>
  );
}
