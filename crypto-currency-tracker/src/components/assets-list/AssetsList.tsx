import React from 'react'
import {Plus} from "lucide-react"
import AssetRow from './AssetRow';
import { assets } from '../../data/data';



const AssetsList = () => {
  return (
    
      <div className="mt-6 flex flex-col bg-[#1e2329] rounded-xl border border-gray-800 p-6">
  
  
  <div className="flex justify-between items-center mb-6">
    <h3 className="text-xl font-bold text-white">My Assets</h3>
    
    <div className="flex items-center gap-4">
     
        
        <input 
          type="text" 
          placeholder="Search assets..."
          className="
          w-64 px-4 py-2 
          bg-[#1E2329] text-white 
          placeholder-[#848E9C] 
          text-xs
          rounded-lg outline-none 
          focus:ring-1 focus:ring-[#7a7a77]
           transition-all"
        />

         <button className='
        flex items-center 
        bg-transparent 
        px-2 py-2 rounded-lg 
        font-medium hover:bg-[#626262]
        transition-colors
        duration-300
        cursor-pointer
        '>
          <Plus className="text-gray-400" size={20} />
          
        </button>

       
      
      
      
    </div>
  </div>

 
    <div className="flex items-center px-4 pb-2 text-gray-500 text-[11px] font-medium uppercase tracking-widest">
      <div className="w-[35%] text-left">Coin</div>
      <div className="w-[20%] text-right pr-4">Amount</div>
      <div className="w-[25%] text-right">Price</div>
      <div className="w-[20%] text-right">Today's PnL</div>
    </div>

  
  <div className="max-h-[500px] overflow-y-auto
     [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-track]:rounded-xl
  [&::-webkit-scrollbar-thumb]:rounded-xl
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
     {assets.map((coin) => (
      <AssetRow key={coin.id} coin={coin} />
    ))}
  </div>
</div>
  );
}

export default AssetsList


