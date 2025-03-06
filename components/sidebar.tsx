"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Mail, FileText, DollarSign, BarChart2, Users, MessageSquare, Home } from "lucide-react"

export default function Sidebar() {
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/dashboard/home", icon: Home },
    { name: "Email Automation", href: "/dashboard/email-automation", icon: Mail },
    { name: "Invoice Generator", href: "/dashboard/invoice-generator", icon: FileText },
    { name: "Expense Tracker", href: "/dashboard/expense-tracker", icon: DollarSign },
    { name: "Competitor Analysis", href: "/dashboard/competitor-analysis", icon: BarChart2 },
    { name: "Talent Stealing", href: "/dashboard/talent-stealing", icon: Users },
    { name: "Comment Analysis", href: "/dashboard/comment-analysis", icon: MessageSquare },
  ]

  return (
    <div className="w-64 bg-black text-white h-full flex flex-col">
      <div className="p-4 border-b border-gray-800">
        <h2 className="text-xl font-bold">Business Launchpad</h2>
      </div>
      <nav className="flex-1 pt-4 overflow-y-auto">
        <ul className="space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center px-4 py-3 text-sm ${
                    isActive ? "bg-gray-800 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                  <span className="truncate">{item.name}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-800">
        <p className="text-xs text-gray-400">© 2024 Business Launchpad</p>
      </div>
    </div>
  )
}

