import React from 'react'
import { useState } from 'react';
import type {UiCoin} from '../../../types/types'

type Props = {
  onClose: () => void;
  coin: UiCoin;
  
  onConfirm: (amount: number) => void;
}






const AddModal:React.FC<Props> =  ({onClose, coin,  onConfirm}) => {
  const { image, symbol, name, price } = coin;

  const [value, setValue] = useState<number>(0);

  return (
   <div
     className="fixed inset-0 bg-black/60 flex items-center justify-center"
     onClick={onClose}
   >
    <div
      className="bg-[#1e2329] w-[380px] p-6 rounded-xl"
      onClick={(e) => e.stopPropagation()}
    >

    <div className="flex items-center gap-3">
       <img src={image} alt={symbol} className="w-10 h-10 rounded-full" />
      <div>
        <div className="text-white font-bold">{symbol.toUpperCase()}</div>
        <div className="text-gray-500 text-xs">{name}</div>
      </div>
    </div>

    <div className="mt-4 text-white">
      ${price}
    </div>
  
    <input 
    onChange={(e) => setValue(Number(e.target.value))}
    placeholder="Enter amount (e.g. 100)" 
    className="mt-4 w-full p-2  bg-[#1E2329] text-white 
          placeholder-[#848E9C] 
          text-xs
          rounded-lg outline-none 
          
          
          focus:ring-1 focus:ring-[#7a7a77]
           transition-all" />

    <div className="flex gap-2 mt-4 ">
      <button 
      onClick={onClose}
      className="
      cursor-pointer
      flex-1 py-2 text-[#848E9C] border-none rounded-xs bg-[#2b3139]
      hover:bg-[#2d323a]
      ">
        Cancel
      </button>

      <button
      onClick={()=>onConfirm(value)}
      className="
      cursor-pointer
      flex-1 py-2 border-none rounded-xs bg-[#FCD535]
      hover:bg-[#fcce16]
      ">Add</button>
    </div>

  </div>
</div>
  )
}

export default AddModal
