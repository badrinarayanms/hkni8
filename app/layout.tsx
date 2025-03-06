import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Sidebar from "@/components/sidebar"
import MobileNav from "@/components/mobile-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Business Launchpad",
  description: "Launch and manage your business with powerful tools",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col md:flex-row h-screen bg-white">
          {/* Sidebar - hidden on mobile */}
          <div className="hidden md:block">
            <Sidebar />
          </div>

          {/* Mobile navigation - visible only on mobile */}
          <div className="md:hidden">
            <MobileNav />
          </div>

          <main className="flex-1 overflow-y-auto p-4 md:p-6 pt-16 md:pt-6">{children}</main>
        </div>
      </body>
    </html>
  )
}



import './globals.css'