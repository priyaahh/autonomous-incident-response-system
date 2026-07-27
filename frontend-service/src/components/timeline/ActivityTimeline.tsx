import { ArrowRightCircle } from 'lucide-react';
import type { ActivityItem } from '@/types';

interface ActivityTimelineProps {
  items: ActivityItem[];
}

export function ActivityTimeline({ items }: ActivityTimelineProps) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={item.title} className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
          <div className="flex flex-col items-center">
            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600/15 text-blue-400">
              <ArrowRightCircle className="h-4 w-4" />
            </div>
            {index < items.length - 1 ? <div className="mt-2 h-full w-px bg-slate-800" /> : null}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between gap-3">
              <p className="font-medium text-slate-100">{item.title}</p>
              <span className="text-sm text-slate-400">{item.time}</span>
            </div>
            <p className="mt-1 text-sm text-slate-400">{item.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
