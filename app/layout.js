 
import { Inter } from "next/font/google"
import "./globals.css"
import Sidebar from "@/components/sidebar"
import MobileNav from "@/components/mobile-nav"
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({ subsets: ["latin"] })

export const metadata  = {
  title: "Business Launchpad",
  description: "Launch and manage your business with powerful tools",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <div>
        {children}
        </div>
      </body>
    </html>
    </ClerkProvider>
  )
}



import './globals.css'