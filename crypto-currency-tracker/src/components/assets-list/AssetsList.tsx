import React from 'react'
import AssetRow from './AssetRow';
import { assets } from '../../data/data';



const AssetsList = () => {
  return (
    
      <div className="mt-6 flex flex-col bg-[#1e2329] rounded-xl border border-gray-800 p-6">
  
  
  <div className="flex justify-between items-center mb-6">
    <h3 className="text-xl font-bold text-white">My Assets</h3>
    
    <div className="flex items-center gap-4">
      
      
      
      
    </div>
  </div>

 
    <div className="flex items-center px-4 pb-2 text-gray-500 text-[11px] font-medium uppercase tracking-widest">
      <div className="w-[35%] text-left">Coin</div>
      <div className="w-[20%] text-right pr-4">Amount</div>
      <div className="w-[25%] text-right">Price</div>
      <div className="w-[20%] text-right">Today's PnL</div>
    </div>

  
  <div className="mt-2">
     {assets.map((coin) => (
      <AssetRow key={coin.id} coin={coin} />
    ))}
  </div>
</div>
  );
}

export default AssetsList


