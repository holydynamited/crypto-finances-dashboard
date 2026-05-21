import React from "react";
import type { UiCoin } from "../../types/types";

type Props = {
  coin: UiCoin;
  isLooking?: boolean;
};

const AssetRow: React.FC<Props> = ({ coin, isLooking }) => {
  const {
    image,
    symbol,
    name,
    balance,
    price,
    change24h,
    inPortfolio,
  } = coin;

  const totalValue =
    inPortfolio && balance ? balance * price : 0;

  const isPositive = change24h >= 0;

  return (
    <div className="flex items-center justify-between py-3 px-4 hover:bg-[#2b3139] rounded-xl transition-colors cursor-pointer group border-gray-800/50">

     
      <div className="flex items-center gap-3 w-1/3">
        <img
          src={image}
          alt={symbol}
          className="w-8 h-8 rounded-full bg-gray-700"
        />

        <div className="flex flex-col">
          
          <span className="text-white font-semibold text-sm">
            
            {symbol.toUpperCase()}
          </span>
          <span className="text-gray-500 text-xs">
             
            {name} 
            
          </span>
        </div>
      </div>


      <div className=" flex items-center justify-between w-1/3">
        {inPortfolio && isLooking &&(
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
              In portfolio
          </span>
          )}
      </div>

    
      <div className="flex flex-col items-end w-1/3">
        {inPortfolio && (
          <>

            <span className="text-white text-sm font-medium">
             
              {balance} {symbol} 
            </span>

            <span className="text-gray-500 text-xs">
              ≈ $
              {totalValue.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </>
          
        )
      }
      </div>

      
      <div className="flex flex-col items-end w-1/3">
        <span className="text-white text-sm font-medium">
          ${price}
        </span>
      </div>

    
      <div className="flex flex-col items-end w-1/4">
        <span
          className={`text-sm font-medium ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {isPositive ? "+" : ""}
          {change24h.toFixed(2)}%
        </span>
      </div>
    </div>
  );
};

export default AssetRow;