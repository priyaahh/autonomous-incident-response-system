import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import type { TrendPoint } from '@/types';

interface IncidentTrendChartProps {
  data: TrendPoint[];
}

export function IncidentTrendChart({ data }: IncidentTrendChartProps) {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="incidentGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2563EB" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#2563EB" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#1F2937" vertical={false} />
          <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fill: '#94A3B8', fontSize: 12 }} />
          <YAxis tickLine={false} axisLine={false} tick={{ fill: '#94A3B8', fontSize: 12 }} />
          <Tooltip contentStyle={{ backgroundColor: '#111827', border: '1px solid #1F2937', borderRadius: 12 }} />
          <Area type="monotone" dataKey="incidents" stroke="#2563EB" fill="url(#incidentGradient)" strokeWidth={2.5} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
