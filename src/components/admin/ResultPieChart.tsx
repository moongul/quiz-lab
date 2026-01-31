"use client";

import { 
  PieChart, 
  Pie, 
  Cell, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from "recharts";

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

type ResultData = {
  name: string;
  value: number;
  type: string;
};

export default function ResultPieChart({ data }: { data: ResultData[] }) {
  if (!data || data.length === 0) return <div className="text-center text-gray-400 text-xs py-8">No data</div>;
  
  const total = data.reduce((sum, item) => sum + item.value, 0);
  if (total === 0) return <div className="text-center text-gray-400 text-xs py-8">No participants yet</div>;

  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={70}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip 
          formatter={(value: number) => [`${value}명`, 'Count']}
          contentStyle={{ borderRadius: '8px', border: 'none', fontSize: '12px' }}
        />
        <Legend 
          layout="vertical" 
          verticalAlign="middle" 
          align="right"
          wrapperStyle={{ fontSize: '10px' }} 
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
