import MobileNav from '@/components/mobile-nav'
import Sidebar from '@/components/sidebar'
import React from 'react'

const layout = ({children}) => {
    
  return (
    <div className="min-h-screen w-full bg-[#020617] text-white">
      {/* Mobile navigation - visible only on mobile */}
      
        <MobileNav />
      
      
      <div className="flex mt-24 w-full justify-center items-center h-full" style={{marginTop:40}}>           
              {children}
           
      </div>
      
    </div>
  )
}

export default layout