import { Activity, AlertTriangle, ArrowDownRight, ArrowUpRight, CheckCircle2, Clock3, Cloud, ShieldAlert, type LucideIcon } from 'lucide-react';
import type { KpiCardData } from '@/types';

interface MetricCardProps {
  item: KpiCardData;
}

const toneStyles: Record<KpiCardData['tone'], string> = {
  blue: 'border-blue-500/20 bg-blue-500/10 text-blue-400',
  green: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-400',
  amber: 'border-amber-500/20 bg-amber-500/10 text-amber-400',
  red: 'border-red-500/20 bg-red-500/10 text-red-400',
  slate: 'border-slate-500/20 bg-slate-500/10 text-slate-400',
};

const iconMap: Record<string, LucideIcon> = {
  AlertTriangle,
  Activity,
  ShieldAlert,
  Clock3,
  Cloud,
  CheckCircle2,
};

export function MetricCard({ item }: MetricCardProps) {
  const Icon = iconMap[item.icon];
  const isPositive = item.trend === 'up';
  const isNegative = item.trend === 'down';

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-soft">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-400">{item.title}</p>
          <p className="mt-3 text-3xl font-semibold text-slate-50">{item.metric}</p>
        </div>
        <div className={`rounded-xl border p-2.5 ${toneStyles[item.tone]}`}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <div className="mt-5 flex items-center justify-between text-sm">
        <div className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 ${isPositive ? 'bg-emerald-500/10 text-emerald-400' : isNegative ? 'bg-red-500/10 text-red-400' : 'bg-slate-600/30 text-slate-300'}`}>
          {isPositive ? <ArrowUpRight className="h-4 w-4" /> : isNegative ? <ArrowDownRight className="h-4 w-4" /> : null}
          <span>{item.change}</span>
        </div>
        <p className="max-w-[60%] text-right text-slate-400">{item.description}</p>
      </div>
    </div>
  );
}
