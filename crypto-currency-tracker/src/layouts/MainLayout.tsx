import React from 'react'
import TopBar from '../components/top-bar/TopBar'
import Sidebar from '../components/sidebar/Sidebar';
import type { ReactNode } from 'react'


type Props = {

children : ReactNode ;
}


const MainLayout = ({children}:Props) => {
  return (
<div className="h-screen w-full flex flex-col bg-[#11181e] overflow-hidden">
      
      
      <div className="relative z-30"> 
        <TopBar/>
      </div>
      
      
      <div className='flex-1 flex flex-row overflow-hidden'>
        
        
        <aside className="relative z-20 shadow-2xl flex-shrink-0">
          <Sidebar/>
        </aside>

        
        <main className='flex-1 overflow-y-auto px-6 custom-scrollbar'>
         
          <div className="max-w-[1400px] mx-auto">
            {children}
          </div>
        </main>
        
      </div>
    </div>
  )
}

export default MainLayout
