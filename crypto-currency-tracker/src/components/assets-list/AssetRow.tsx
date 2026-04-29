import React from 'react'

type Props = {
  coin:{
    id:string,
    ticker:string,
    name:string,
    price:number,
    balance:number,
    change24h:number,
    icon:string
  }
}



const AssetRow = ({ coin }:Props) => {

  const totalValue = coin.balance * coin.price;
  return (
   <div className="flex items-center justify-between py-3 px-4 hover:bg-[#2b3139] rounded-xl transition-colors cursor-pointer group  border-gray-800/50 last:border-0">
  
 
  <div className="flex items-center gap-3 w-1/3">
    <img src={coin.icon} alt={coin.ticker} className="w-8 h-8 rounded-full bg-gray-700" />
    <div className="flex flex-col">
      <span className="text-white font-semibold text-sm leading-tight">{coin.ticker}</span>
      <span className="text-gray-500 text-xs">{coin.name}</span>
    </div>
  </div>

 
  <div className="flex flex-col items-end w-1/3">
    
    <span className="text-white text-sm font-medium">
      {coin.balance.toLocaleString()} {coin.ticker}
    </span>
    
    <span className="text-gray-500 text-xs">
      ≈ ${totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
    </span>
  </div>

  <div className='flex flex-col items-end w-1/3'>
     <span className="text-white text-sm font-medium">
      ${coin.price} 
    </span>
  </div>

 
  <div className="flex flex-col items-end w-1/4">
    <span className={`text-sm font-medium ${coin.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
      {coin.change24h >= 0 ? '+' : ''}{coin.change24h}%
    </span>
    
   
    <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
       <span className="text-gray-400 text-[10px]">More</span>
       <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
         <path d="M12 16.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0-6a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0-6a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
       </svg>
    </div>
  </div>
  
</div>
  );
};

export default AssetRow;