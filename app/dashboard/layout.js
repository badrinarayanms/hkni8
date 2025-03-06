import MobileNav from '@/components/mobile-nav'
import Sidebar from '@/components/sidebar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Mobile navigation - visible only on mobile */}
      <div className="lg:hidden">
        <MobileNav />
      </div>

      <div className="flex">
        {/* Sidebar - hidden on mobile */}
        <div className="hidden lg:block fixed left-0 top-0 h-screen">
          <Sidebar />
        </div>

        {/* Main content */}
        <main className="flex-1 w-full lg:pl-64">
          <div className="p-4 md:p-6 mt-16 lg:mt-0">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export default layout