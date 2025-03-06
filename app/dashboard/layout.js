import MobileNav from '@/components/mobile-nav'
import Sidebar from '@/components/sidebar'
import React from 'react'

const layout = ({children}) => {
  return (
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
  )
}

export default layout