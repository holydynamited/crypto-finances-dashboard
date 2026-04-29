import React from 'react'

import type { SidebarItems } from '../../data/data'

type Props = {
  item : SidebarItems
}





const SidebarItem:React.FC<Props> = ({item }:Props) => {
  const Icon = item.icon;
  
  return (
    
    
               <div className='
               flex gap-3
               items-center
               text-[#848E9C]
               hover:text-[#FCD535]
               text-sm
               p-4 w-full rounded
               hover:bg-[#1E2329]
               border-l-4 border-transparent
               hover:border-l-[#FCD535]
               cursor-pointer
               transition-colors duration-300
               '>{<Icon/>}
                <span>{item.label}</span>
               </div>
  )
}

export default SidebarItem
