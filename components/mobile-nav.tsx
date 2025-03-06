"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Mail, FileText, DollarSign, BarChart2, Users, MessageSquare, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface NavigationItem {
  name: string
  href: string
  icon: React.ElementType
}

export default function MobileNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState<boolean>(false)

  const navigation: NavigationItem[] = [
    { name: "Home", href: "/dashboard/home", icon: Home },
    { name: "Email Automation", href: "/dashboard/email-automation", icon: Mail },
    { name: "Invoice Generator", href: "/dashboard/invoice-generator", icon: FileText },
    { name: "Expense Tracker", href: "/dashboard/expense-tracker", icon: DollarSign },
    { name: "Competitor Analysis", href: "/dashboard/competitor-analysis", icon: BarChart2 },
    { name: "Talent Stealing", href: "/dashboard/talent-stealing", icon: Users },
    { name: "Comment Analysis", href: "/dashboard/comment-analysis", icon: MessageSquare },
  ]

  const handleNavigationClick = () => {
    setOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white p-3 flex justify-between items-center">
      <h1 className="text-lg font-bold">Business Launchpad</h1>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:bg-gray-800"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent 
          side="left" 
          className="w-[250px] p-0 bg-black text-white border-r border-gray-800"
        >
          <div className="p-4 border-b border-gray-800">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Business Launchpad</h2>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-gray-800"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <nav className="flex-1 pt-4" aria-label="Main navigation">
            <ul className="space-y-1">
              {navigation.map((item) => {
                const isActive = pathname.startsWith(item.href)
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`flex items-center px-4 py-3 text-sm transition-colors ${
                        isActive 
                          ? "bg-gray-800 text-white" 
                          : "text-gray-300 hover:bg-gray-800 hover:text-white"
                      }`}
                      onClick={handleNavigationClick}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <item.icon className="mr-3 h-5 w-5" aria-hidden="true" />
                      {item.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
          <div className="p-4 border-t border-gray-800">
            <p className="text-xs text-gray-400">© {new Date().getFullYear()} Business Launchpad</p>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}