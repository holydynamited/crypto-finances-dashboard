import React from 'react'
import TopBar from '../components/TopBar'
import Sidebar from '../components/sidebar/Sidebar';
import type { ReactNode } from 'react'


type Props = {

children : ReactNode ;
}


const DashboardLayout = ({children}:Props) => {
  return (

    <div className="h-screen w-screen flex flex-col bg-[#11181eb0] overflow-hidden">
      <div className="relative z-30 overflow-hidden"> 
        <TopBar/>
      </div>
     
     
      
         <div className='flex-1 flex flex-row overflow-hidden gap-6 '>
          
            <aside className="relative z-20 shadow-2xl overflow-hidden">
          <Sidebar/>
        </aside>
         <main className='flex-1 mr-6  '>
                {children}
            </main>
           
            
        </div>

       
    </div>
  )
}

export default DashboardLayout
