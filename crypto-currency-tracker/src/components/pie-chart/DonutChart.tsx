import { Pie, PieChart, Cell, ResponsiveContainer,  Tooltip, Legend } from 'recharts';
import CustomToolTip from './CustomToolTip';

const data = [
  { name: 'Group A', value: 400, fill: '#FCD535' },
  { name: 'Group B', value: 300, fill: '#4B7BF5' },
  { name: 'Group C', value: 300, fill: '#0ECB81' },
  { name: 'Group D', value: 200, fill: '#929292' },
];

export default function DonutChart({ isAnimationActive = true }: { isAnimationActive?: boolean }) {
  return (
    <div style={{ width: '100%', maxWidth: '500px', height: '300px', outline: 'none' , position: 'relative', overflow: 'hidden'}}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart 
          tabIndex={-1} 
          style={{ outline: 'none' }}
        >
            
        <Tooltip 
        content={<CustomToolTip />} 
        isAnimationActive={false}   
        />


        <Legend 
            verticalAlign="bottom" 
            align="center" 
            iconType="circle"
            wrapperStyle={{ paddingTop: '20px' }}
          />

          <Pie
            data={data}
            stroke="none" 
            
           
            

            
            dataKey="value"
            innerRadius="62%"
            outerRadius="90%"
            cornerRadius="60%"
            paddingAngle={6}
           
            isAnimationActive={isAnimationActive}
            animationDuration={800} 
            animationBegin={0}
            style={{ outline: 'none' }}
    
          >
            
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.fill}
                style={{ outline: "none"  }}
                
                className="origin-center transition-transform duration-200 hover:scale-105  outline-none cursor-pointer"
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}