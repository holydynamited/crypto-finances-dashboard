import React from 'react'
import { useState, useEffect} from 'react';
import {useQuery} from "@tanstack/react-query"
import { fetchPrices, fetchPrice } from '../api/cryptoApi';
import type {Asset} from '../data/data';
import {Plus,Search,ChevronLeft} from "lucide-react"
import type {UiCoin} from '../types/types'
import AssetRow from '../components/assets-list/AssetRow';
import AddModal from '../components/add-modal/A/AddModal';

import { assetsConfig} from '../data/data';






const AssetsList = () => {


  const [myAssets, setMyAssets] = useState<Asset[]>(() => {
  const saved = localStorage.getItem("portfolio");

  return saved ? JSON.parse(saved) : assetsConfig;
});

useEffect(() => {
  localStorage.setItem("portfolio", JSON.stringify(myAssets));
}, [myAssets]);


  const [query, setQuery] = useState<string>('');
  const [searchedTarget, setSearchedTarget] = useState<string>('');

  const [selectedCoin, setSelectedCoin] = useState<UiCoin|null>(null);




  const [openModal, setOpenModal] = useState<boolean>(false);




  //single coin search

  const {data:searchedCoin, isFetching:isSearching,}= useQuery({
    queryKey: ["search-single-coin", searchedTarget],
    queryFn: () => fetchPrice(searchedTarget),
    enabled: searchedTarget.length > 0,
    staleTime: 1000 * 30
  })






  const coinIds = myAssets.map((coin)=>coin.id);
  
  //all assets updating

  const {data:marketData, isLoading, error}=useQuery({
      queryKey:["market-data", coinIds],
      queryFn:()=>fetchPrices(coinIds),
      refetchInterval: 10000,
  })

  

  
    const handleAddAsset = (coin:UiCoin, amount:number) => {
      setMyAssets(prev => {
        const existingAsset = prev.find(a => a.id === coin.id);
        if (existingAsset) {
          return prev.map(a =>
            a.id === coin.id ? { ...a, balance: a.balance + amount } : a
          );
        }

        // if asset doesn't exist, add it
        const newAsset: Asset = {
          id: coin.id,
          name: coin.name,
          ticker: coin.symbol,
          icon: coin.image,
          balance: amount,
          price: coin.price ?? 0,
        };

        return [...prev, newAsset];
      });
    };

  if (isLoading) return <div>...</div>;
  if (error) return <div>Error</div>;

  //

  const assets: UiCoin[] = myAssets.map(asset => ({
    id: asset.id,
    symbol: asset.ticker,
    name: asset.name,
    image: asset.icon,
    balance: asset.balance,
    price: marketData?.[asset.id]?.usd || asset.price || 0,
    change24h: marketData?.[asset.id]?.usd_24h_change || 0,
    inPortfolio: true
  }));

    const isLooking = !!searchedTarget;

    
    

    
    

    


  const handleBack = () => {
     setQuery('');
     setSearchedTarget('');
  };

  const onAdd = () =>{
    if (!normalizedResult) return;
    setSelectedCoin(normalizedResult);

    setOpenModal(!openModal);
  }

  const onClose = ()=>{
    setOpenModal(false);
  }

  const inPortfolio = myAssets.find(asset=>asset.id===searchedTarget);


  const normalizedResult: UiCoin | null = inPortfolio
  ? {
      id: inPortfolio.id,
      symbol: inPortfolio.ticker,
      name: inPortfolio.name,
      image: inPortfolio.icon,
      price: marketData?.[searchedTarget]?.usd ?? 0,
      change24h: marketData?.[searchedTarget]?.usd_24h_change ?? 0,
      inPortfolio: true,
      balance: inPortfolio.balance,
    }
  : searchedCoin
  ? {
      id: searchedCoin.id,
      symbol: searchedCoin.symbol,
      name: searchedCoin.name,
      image: searchedCoin.image,
      price: searchedCoin.current_price ?? 0,
      change24h: searchedCoin.price_change_percentage_24h ?? 0,
      inPortfolio: false,
    }
  : null;

  

  



  return (
    
      <div className="mt-6 flex flex-col bg-[#1e2329] rounded-xl border border-gray-800 p-6">
  
  
  <div className="flex justify-between items-center mb-6">
    {isLooking?(<h3 className="text-xl font-bold text-white">Search</h3>):
    (<h3 className="text-xl font-bold text-white">My Assets</h3>)}
    
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
          value={query}
          onChange={(e)=>setQuery(e.target.value)}

        />

        {
        isLooking &&(
          <button
          onClick={handleBack}
          className='
          flex items-center 
          bg-transparent 
          px-2 py-2 rounded-lg 
          font-medium hover:bg-[#626262]
          transition-colors
          duration-300
          cursor-pointer
        
        '>
          <ChevronLeft className="text-gray-400" size={20} />
            
          </button>
        )
        }

         <button 
        onClick={()=>setSearchedTarget(query.toLowerCase().trim())}
        className='
        flex items-center 
        bg-transparent 
        px-2 py-2 rounded-lg 
        font-medium hover:bg-[#626262]
        transition-colors
        duration-300
        cursor-pointer
        
        '>
          <Search className={isSearching ? "text-yellow-500 animate-pulse" : "text-gray-400"} size={20} />
          
        </button>


    {isLooking&&(<button
        onClick={onAdd}
        
      
        className='
        flex items-center 
        bg-transparent 
        px-2 py-2 rounded-lg 
        font-medium hover:bg-[#626262]
        transition-colors
        duration-300
        cursor-pointer
        '>
          
          <Plus 
          
          className="text-gray-400" size={20} />
          
        </button>
    )
}
      
      
      
    </div>
  </div>

 
    <div className="flex items-center px-4 pb-2 text-gray-500 text-[11px] font-medium uppercase tracking-widest">
      { !isLooking && (
        <>
          <div className="w-[35%] text-left">Coin</div>
          <div className="w-[40%] text-right pr-4">Amount</div>
          <div className="w-[25%] text-right">Price</div>
          <div className="w-[20%] text-right">Today's PnL</div>
        </>
      )
      }
    </div>

  
  <div className="max-h-[500px] overflow-y-auto
     [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-track]:rounded-xl
  [&::-webkit-scrollbar-thumb]:rounded-xl
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
    {
    isLooking ? (
    isSearching ? (
      <div className='text-gray-500 text-xs'>Loading...</div>
    ) : normalizedResult ? (
      <AssetRow coin={normalizedResult} isLooking = {isLooking} />
    ) : (
      <div className='text-gray-500 text-xs'>No results</div>
    )
    ) : 
    (
    assets.map(a => <AssetRow key={a.id} coin={a} />)
    )
  }

</div>
{
  openModal&&selectedCoin&&(
    <AddModal onClose={onClose}
    coin = {selectedCoin}
    
    onConfirm={(amount)=>{
      handleAddAsset(selectedCoin, amount);
      onClose();
      
      setSelectedCoin(null);
    }}/>
  )
}
</div>




);
}


export default AssetsList
