import React from 'react'

const Portfolio = () => {
  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold text-white mb-6">Portfolio Analytics</h1>
      
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        
        <div className="bg-[#1e2329] p-6 rounded-xl border border-gray-800 h-[400px] flex items-center justify-center">
          <p className="text-gray-500">Pie Chart will be here</p>
        </div>

       
        <div className="lg:col-span-2 bg-[#1e2329] p-6 rounded-xl border border-gray-800 h-[400px] flex items-center justify-center">
          <p className="text-gray-500">Equity Curve Chart will be here</p>
        </div>

      </div>
    </div>
  )
}

export default Portfolio