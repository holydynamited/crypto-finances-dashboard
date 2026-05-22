import React, { useState } from 'react';
import type { UiCoin } from '../../types/types';
import { X } from "lucide-react";

type Props = {
  onClose: () => void;
  coin: UiCoin;
  onConfirm: (amount: number) => void;
};

const AddModal: React.FC<Props> = ({ onClose, coin, onConfirm }) => {
  const { image, symbol, name, price } = coin;

  const [inputValue, setInputValue] = useState<string>("");

  const currentPrice = price ?? 0;
  const numericValue = parseFloat(inputValue) || 0;
  const totalValue = numericValue * currentPrice;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === "" || /^[0-9]*\.?[0-9]*$/.test(val)) {
      setInputValue(val);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-[#1e2329] w-[380px] p-6 rounded-xl border border-gray-800 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* HEADER */}
        <div className="flex justify-between items-start mb-5">
          <div className="flex items-center gap-3">
            <img src={image} alt={name} className="w-10 h-10 rounded-full" />
            <div>
              <div className="text-white font-bold uppercase flex items-center gap-2">
                {symbol}
                <span className="text-[10px] px-1.5 py-0.5 bg-yellow-500/10 text-yellow-500 rounded font-normal">
                  Buy
                </span>
              </div>
              <div className="text-gray-500 text-xs">{name}</div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-gray-500 hover:text-white hover:bg-gray-800 transition-all cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        {/* INFO */}
        <div className="p-3 rounded-lg flex justify-between items-center text-xs">
          <span className="text-gray-400">Current Price:</span>
          <span className="text-yellow-400 font-semibold">
            ${currentPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </span>
        </div>

        {/* INPUT */}
        <div className="mt-4">
          <label className="text-[11px] text-gray-400 uppercase tracking-wider font-medium block mb-1.5">
            Amount to Add
          </label>
          <div className="relative flex items-center">
            <input
              type="text"
              inputMode="decimal"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="0.00"
              className="w-full px-3 py-2.5 bg-[#14171a] text-white text-sm rounded-lg outline-none border border-gray-800 focus:border-gray-600 transition-all"
            />
            <span className="absolute right-3 text-xs text-gray-500 font-bold uppercase select-none">
              {symbol}
            </span>
          </div>
        </div>

        {/* TOTAL */}
        <div className="mt-4 flex justify-between items-center px-1 text-xs">
          <span className="text-gray-400">Total Value:</span>
          <span className="text-white font-medium text-sm">
            ${totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-2 mt-6">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 bg-[#2b3139] text-[#eaecef] rounded-lg hover:bg-gray-700 text-xs font-medium transition-colors cursor-pointer"
          >
            Cancel
          </button>

          <button
            onClick={() => onConfirm(numericValue)}
            disabled={numericValue <= 0}
            className="flex-1 py-2.5 bg-[#FCD535] rounded-lg hover:bg-[#fcce16] text-black font-semibold text-xs transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Add Asset
          </button>
        </div>

      </div>
    </div>
  );
};

export default AddModal;