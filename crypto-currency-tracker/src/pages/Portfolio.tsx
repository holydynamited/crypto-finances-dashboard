
import DonutChart from '../components/pie-chart/DonutChart'
import PortfolioCurve from '../components/curve/CurveChart'
const Portfolio = () => {
  return (
    <div className="py-6">
      
      
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        
        <div className="bg-[#1e2329] p-6 rounded-xl border border-gray-800 h-[400px] flex items-center justify-center">
         <DonutChart/>
        </div>

       
        <div className="lg:col-span-2 bg-[#1e2329] p-6 rounded-xl border border-gray-800 h-[400px] flex items-center justify-center">
          <PortfolioCurve/>
        </div>

      </div>
    </div>
  )
}

export default Portfolio