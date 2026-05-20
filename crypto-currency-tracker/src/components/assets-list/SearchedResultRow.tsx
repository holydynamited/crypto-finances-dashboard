import React from 'react'


interface SearchedCoin  {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price?: number;
  price_change_percentage24h?: number;
}


type Props = {
  coin: SearchedCoin
}


const SearchedResultRow:React.FC<Props> = ({ coin }) => {
  const { image, symbol, name, current_price, price_change_percentage24h } = coin;

  const price = current_price ?? 0;
  const change24h = price_change_percentage24h ?? 0;
  const formattedSymbol = symbol.toUpperCase();

 

  return (
   <div className="flex items-center justify-between py-3 px-4 hover:bg-[#2b3139] rounded-xl transition-colors cursor-pointer group  border-gray-800/50 last:border-0">
  
 
  <div className="flex items-center gap-3 w-1/3">
    <img src={image} alt={formattedSymbol} className="w-8 h-8 rounded-full bg-gray-700" />
    <div className="flex flex-col">
      <span className="text-white font-semibold text-sm leading-tight">{formattedSymbol}</span>
      <span className="text-gray-500 text-xs">{name}</span>
    </div>
  </div>

 

  <div className='flex flex-col items-end w-1/3'>
     <span className="text-white text-sm font-medium">
      ${price} 
    </span>
  </div>

 
  <div className="flex flex-col items-end w-1/4">
    <span className={`text-sm font-medium ${change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
      {change24h >= 0 ? '+' : ''}
      {change24h.toFixed(2)}%
    </span>
    
   
    <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
       <span className="text-gray-400 text-[10px]">More</span>
       <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
         <path d="M12 16.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0-6a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0-6a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
       </svg>
    </div>
  </div>
  
</div>
  )
}

export default SearchedResultRow
