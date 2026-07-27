import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import type { SeverityDistribution } from '@/types';

interface SeverityPieChartProps {
  data: SeverityDistribution[];
}

export function SeverityPieChart({ data }: SeverityPieChartProps) {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} dataKey="value" innerRadius={60} outerRadius={95} paddingAngle={2}>
            {data.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip contentStyle={{ backgroundColor: '#111827', border: '1px solid #1F2937', borderRadius: 12 }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
