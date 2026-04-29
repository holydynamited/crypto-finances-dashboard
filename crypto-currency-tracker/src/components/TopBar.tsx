import React from 'react'
import { Plus } from 'lucide-react'
import BanansLogo from '../assets/logo.webp'

const TopBar = () => {
  return (
    <div className='
    bg-[#0b0e119c]
    w-full h-20
    flex items-center
    justify-between
    px-10
    
    '>

      <div className='
      flex items-center
      gap-2
      
      '>

      <img className='
      max-w-10 max-h-10
      'src={BanansLogo} alt="" />

        <span className='
        text-[#FCD535]
        font-medium
        tracking-widest
        text-xl

        '>
          BANANS
        </span>

      </div>

      <div className='
      flex 
      items-center
      gap-4
      '>

        <button className='
        flex items-center 
        bg-[#FCD535]  
        px-3 py-2 rounded-lg 
        font-medium hover:bg-[#eabc26]
        transition-colors
        duration-300
        cursor-pointer
        '>
          <Plus size={20} />
          
        </button>
        
        <input 
          type="text" 
          placeholder="Search assets..."
          className="
          w-64 px-4 py-2 
          bg-[#1E2329] text-white 
          placeholder-[#848E9C] 
          rounded-lg outline-none 
          focus:ring-1 focus:ring-[#FCD535]
           transition-all"
        />


        <label className="flex items-center gap-2 text-xs text-gray-400 cursor-pointer">
        <input type="checkbox" className="rounded border-gray-700 bg-transparent" />
        Hide small assets
      </label>
      </div>
      
    </div>
  )
}

export default TopBar
