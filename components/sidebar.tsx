"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Mail, FileText, DollarSign, BarChart2, Users, MessageSquare, Home } from "lucide-react"

// Add TypeScript interface for navigation items
interface NavigationItem {
  name: string
  href: string
  icon: React.ElementType
}

export default function Sidebar() {
  const pathname = usePathname()

  const navigation: NavigationItem[] = [
    { name: "Home", href: "/dashboard/home", icon: Home },
    { name: "Email Automation", href: "/dashboard/email-automation", icon: Mail },
    { name: "Invoice Generator", href: "/dashboard/invoice-generator", icon: FileText },
    { name: "Expense Tracker", href: "/dashboard/expense-tracker", icon: DollarSign },
    { name: "Competitor Analysis", href: "/dashboard/competitor-analysis", icon: BarChart2 },
    { name: "Talent Stealing", href: "/dashboard/talent-stealing", icon: Users },
    { name: "Comment Analysis", href: "/dashboard/comment-analysis", icon: MessageSquare },
  ]

  return (
    <aside className="w-64 bg-black block text-white h-full fixed left-0 top-0">
      <div className="p-4 border-b border-gray-800">
        <h2 className="text-xl font-bold">Business Launchpad</h2>
      </div>
      <nav className="flex-1 pt-4 overflow-y-auto" aria-label="Sidebar Navigation">
        <ul className="space-y-1">
          {navigation.map((item) => {
            const isActive = pathname?.startsWith(item.href)
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center px-4 py-3 text-sm transition-colors duration-200 ${
                    isActive 
                      ? "bg-gray-800 text-white font-medium" 
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <item.icon className="mr-3 h-5 w-5 flex-shrink-0" aria-hidden="true" />
                  <span className="truncate">{item.name}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-800">
        <p className="text-xs text-gray-400">© {new Date().getFullYear()} Business Launchpad</p>
      </div>
    </aside>
  )
}