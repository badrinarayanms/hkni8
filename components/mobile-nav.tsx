"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import { Menu, X, Mail, FileText, DollarSign, BarChart2, Users, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { supabase } from "@/lib/supabase"

interface NavigationItem {
  name: string
  href: string
  icon: React.ElementType
}

export default function MobileNav() {
  const [name, setName] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const id = '3d23b961-2fdb-4db1-945e-cd8fa30d2bf3'

  const params = useParams();
  const { businessname } = params;

  useEffect(() => {
    const fetchBusinessData = async () => {
      try {
        const { data: businessData, error: businessError } = await supabase
          .from("businesses")
          .select("name")
          .eq("id", id)
          .single();
        
        if (businessError) throw businessError;
        if (businessData) setName(businessData.name);
      } catch (err) {
        console.error("Error fetching business data:", err);
        setError("Failed to fetch business data");
      }
    };

    fetchBusinessData();
  }, [id]);


  

  const pathname = usePathname()
  const [open, setOpen] = useState<boolean>(false)

  const navigation: NavigationItem[] = [
    { name: "Home", href: "/dashboard", icon: Home },
    { name: "Email Automation", href: "/dashboard/email-automation", icon: Mail },
    { name: "Invoice Generator", href: "/dashboard/invoice-generator", icon: FileText },
    { name: "Expense Tracker", href: "/dashboard/expense-tracker", icon: DollarSign },
    { name: "Competitor Analysis", href: "/dashboard/competitor-analysis", icon: BarChart2 },
    { name: "Talent Search", href: "/dashboard/talent-search", icon: Users },
  ]

  const handleViewMySite = () => {
    window.open(`/${name}`, "_blank")
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A] text-white p-3 flex justify-between items-center">
      <h1 className="text-lg font-bold">Business Launchpad</h1>

      <nav className="hidden lg:flex lg:items-center lg:justify-center lg:flex-1 lg:space-x-6">
        <ul className="flex space-x-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className={`flex items-center text-sm transition-colors ${pathname.startsWith(item.href) ? "text-white" : "text-gray-300 hover:text-white"}`}>
                <item.icon className="mr-2 h-5 w-5" />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Button onClick={handleViewMySite} className="hidden lg:inline-flex bg-white text-black hover:bg-gray-200">
        View My Site
      </Button>

      <div className="lg:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[250px] p-0 bg-black text-white border-r border-gray-800">
            <div className="p-4 border-b border-gray-800 flex items-center justify-between">
              <h2 className="text-xl font-bold">Business Launchpad</h2>
              <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800" onClick={() => setOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="flex-1 pt-4">
              <ul className="space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className={`flex items-center px-4 py-3 text-sm transition-colors ${pathname.startsWith(item.href) ? "bg-gray-800 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white"}`} onClick={() => setOpen(false)}>
                      <item.icon className="mr-3 h-5 w-5" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="p-4 border-t border-gray-800 text-xs text-gray-400">© {new Date().getFullYear()} Business Launchpad</div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
