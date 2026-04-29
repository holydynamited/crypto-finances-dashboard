import React from 'react'

import SidebarItem from './SidebarItem'


import { items } from '../../data/data'


const Sidebar = () => {
  return (
    <div className='w-64 h-screen bg-[#0b0e119c] '>
      

        <div className=' block p-2 '>
            <nav className='space-y-2'>

                {items.map((item)=>(
                  <SidebarItem key={item.path} item={item}/>
                ))}

               
            </nav>
        </div>
     
    </div>
  )
}

export default Sidebar
