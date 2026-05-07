import { AreaChart, Area, XAxis, YAxis, CartesianGrid,  ResponsiveContainer} from 'recharts';


const pnlData = [
  { date: '01.05', balance: 2800 },
  { date: '02.05', balance: 3200 },
  { date: '03.05', balance: 6100 }, // Тот самый скачок на +3к
  { date: '04.05', balance: 5800 },
  { date: '05.05', balance: 7200 },
  { date: '06.05', balance: 8500 },
];

export default function PortfolioCurve() {
  return (
    <div style={{ width: '100%', height: '300px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={pnlData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            
            <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FCD535" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#FCD535" stopOpacity={0}/>
            </linearGradient>
          </defs>
          
          <CartesianGrid 
            strokeDasharray="3 3" 
            vertical={false} 
            stroke="#232a33" 
          />
          
          <XAxis 
            dataKey="date" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#848e9c', fontSize: 12 }}
            dy={10}
          />
          
          <YAxis hide={true} domain={['dataMin - 500', 'dataMax + 500']} />
          
          
          
          <Area
            type="monotone" 
            dataKey="balance"
            stroke="#FCD535"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorBalance)" 
            animationDuration={1500}
            activeDot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}