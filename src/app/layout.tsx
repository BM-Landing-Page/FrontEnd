import type React from "react"
import type { Metadata } from "next"
import { Josefin_Sans } from "next/font/google"
import "./globals.css"
import Header from "@/components/ui/Header/Header"
import ClientLayout from "@/app/ClientLayout"

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Budding Minds International School",
  description: "Learn and grow with our comprehensive curriculum",
  icons: {
    icon: "/icon.png",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${josefin.className} antialiased`}>
        {/* <CHANGE> Header is fixed and positioned at top; does not affect layout flow */}
        <Header />
        {/* <CHANGE> ClientLayout handles all page content with proper padding below fixed header */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
