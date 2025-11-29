"use client"

import { useState, useEffect } from "react"
import Script from "next/script"
import { FaWhatsapp } from "react-icons/fa"
import Header from "@/components/ui/Header/Header"
import FullScreenNav from "@/components/ui/FullScreenNav"
import Footer from "@/components/ui/Footer/footer"

// Floating Bubble component
function FloatingBubble({
  duration,
  size,
  left,
  top,
  animationDelay,
}: {
  duration: number
  size: number
  left: string
  top: string
  animationDelay: number
}) {
  return (
    <div
      className="absolute rounded-full bg-gradient-to-br from-[#9ED2C6]/20 to-[#54BAB9]/20 animate-bounce"
      style={{
        width: `${size}vw`, // relative to viewport width
        height: `${size}vw`,
        left,
        top,
        animationDelay: `${animationDelay}s`,
        animationDuration: `${duration}s`,
        animationIterationCount: "infinite",
        animationDirection: "alternate",
      }}
    />
  )
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [bubbles, setBubbles] = useState<
    Array<{
      id: number
      duration: number
      size: number
      left: string
      top: string
      animationDelay: number
    }>
  >([])

  // Generate bubbles once
  useEffect(() => {
    const newBubbles = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      duration: 3 + Math.random() * 4,
      size: 2 + Math.random() * 5, // 2vw–7vw
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`, // relative to main area (below header)
      animationDelay: Math.random() * 5,
    }))
    setBubbles(newBubbles)
  }, [])

  return (
    <>
      {/* Header with navigation */}
      <Header openNav={() => setIsNavOpen(true)} />

      {/* Full screen nav overlay */}
      {isNavOpen && <FullScreenNav onClose={() => setIsNavOpen(false)} />}

      {/* Main page content */}
      {/* Header is fixed, so we offset content with pt-16 */}
      <main className="pt-16 min-h-screen bg-white relative overflow-hidden">
        {/* Floating Bubbles */}
        {/* <div className="fixed inset-0 pointer-events-none z-0">
          {bubbles.map((bubble) => (
            <FloatingBubble key={bubble.id} {...bubble} />
          ))}
        </div> */}

        {/* Instead, bubbles are relative to main (below header) */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {bubbles.map((bubble) => (
            <FloatingBubble key={bubble.id} {...bubble} />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10">{children}</div>

        {/* WhatsApp Floating Button */}
        {/* <a
          href="https://wa.me/919840391815"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-7 right-4 md:bottom-9 md:right-5 z-40 bg-[#54BAB9] hover:bg-[#54BAB9] p-3 rounded-full shadow-lg transition-transform duration-200 hover:scale-110"
          aria-label="Contact us on WhatsApp"
        >
          <FaWhatsapp size={24} className="text-white" />
        </a> */}

        {/* Chatbase Script */}
        {/* <Script id="chatbase-embed" strategy="afterInteractive">
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
        </Script> */}
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}
