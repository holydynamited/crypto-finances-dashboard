


interface TooltipPayloadItem {
  name: string;
  value: number;
  fill: string;
  payload: {
    name: string;
    value: number;
  };
}

interface CustomToolTipProps {
  active?: boolean;
  payload?: TooltipPayloadItem[];
}

const CustomToolTip = ({ active, payload }: CustomToolTipProps) => {
  
  if (!active || !payload || payload.length === 0) {
    return null;
  }

  const { name, value, fill } = payload[0];

  return (
    <div className="bg-[#1e2329] border border-gray-700 p-3 rounded-lg shadow-2xl backdrop-blur-md bg-opacity-95 min-w-[120px]  transition-all duration-200 ease-out pointer-events: none">
      <div className="flex items-center gap-2 mb-2">
        
        <div 
          className="w-2 h-2 rounded-full" 
          style={{ backgroundColor: fill }} 
        />
        <span className="text-gray-400 text-xs font-bold uppercase tracking-tighter">
          {name}
        </span>
      </div>
      
      <div className="flex items-baseline gap-1">
        <span className="text-white text-base font-bold">
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
          }).format(value)}
        </span>
      </div>
    </div>
  );
};

export default CustomToolTip;