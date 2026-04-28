import React from 'react'
import SidebarItem from './SidebarItem'
import {House, BriefcaseBusiness} from 'lucide-react'

const items = [
  {label:"Assets", path:"/assets", icon:<House/>},
  {label:"Portfolio", path:"/portfolio", icon:<BriefcaseBusiness/>},
]



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
