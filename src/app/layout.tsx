import type React from "react"
import type { Metadata } from "next"
import { Josefin_Sans, JetBrains_Mono } from "next/font/google"

import "./globals.css"
import ClientLayout from "@/app/ClientLayout"

// Main UI font
const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

// Monospace font (optional)
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Budding Minds International School",
  description: "Learn and grow with our comprehensive curriculum",
  icons: {
    icon: "/icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${josefin.className} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
