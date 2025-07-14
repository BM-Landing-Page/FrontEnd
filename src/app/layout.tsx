// app/layout.tsx or your layout file
"use client";

import { useState } from "react";
import Header from "@/components/ui/Header/Header";
import FullScreenNav from "@/components/ui/FullScreenNav";
import "./globals.css"; // if you use global styles

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <html lang="en">
      <body>
        <Header openNav={() => setIsNavOpen(true)} />

        {/* Full screen nav OVERLAY */}
        {isNavOpen && <FullScreenNav onClose={() => setIsNavOpen(false)} />}

        {/* Actual page content below the header */}
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
