import { Eye, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { IncidentItem } from '@/types';

interface IncidentsTableProps {
  incidents: IncidentItem[];
}

const severityStyles: Record<IncidentItem['severity'], string> = {
  Critical: 'bg-red-500/10 text-red-400',
  High: 'bg-amber-500/10 text-amber-400',
  Medium: 'bg-blue-500/10 text-blue-400',
  Low: 'bg-emerald-500/10 text-emerald-400',
};

const statusStyles: Record<IncidentItem['status'], string> = {
  Open: 'bg-slate-700/80 text-slate-200',
  Investigating: 'bg-blue-500/10 text-blue-400',
  Mitigated: 'bg-amber-500/10 text-amber-400',
  Resolved: 'bg-emerald-500/10 text-emerald-400',
  Escalated: 'bg-red-500/10 text-red-400',
};

export function IncidentsTable({ incidents }: IncidentsTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/40">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 px-4 py-4 sm:px-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-100">Recent Incidents</h3>
          <p className="text-sm text-slate-400">Latest investigations across the platform</p>
        </div>
        <div className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm text-slate-400">
          <Search className="h-4 w-4" />
          <input className="bg-transparent outline-none" placeholder="Search" />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-900/70 text-slate-400">
            <tr>
              <th className="px-4 py-3 font-medium sm:px-6">Incident ID</th>
              <th className="px-4 py-3 font-medium sm:px-6">Title</th>
              <th className="px-4 py-3 font-medium sm:px-6">Severity</th>
              <th className="px-4 py-3 font-medium sm:px-6">Status</th>
              <th className="px-4 py-3 font-medium sm:px-6">Assigned To</th>
              <th className="px-4 py-3 font-medium sm:px-6">Created Time</th>
              <th className="px-4 py-3 font-medium sm:px-6">Actions</th>
            </tr>
          </thead>
          <tbody>
            {incidents.map((incident) => (
              <tr key={incident.id} className="border-t border-slate-800 text-slate-300">
                <td className="px-4 py-4 font-medium text-slate-100 sm:px-6">{incident.id}</td>
                <td className="px-4 py-4 sm:px-6">{incident.title}</td>
                <td className="px-4 py-4 sm:px-6">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${severityStyles[incident.severity]}`}>
                    {incident.severity}
                  </span>
                </td>
                <td className="px-4 py-4 sm:px-6">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[incident.status]}`}>
                    {incident.status}
                  </span>
                </td>
                <td className="px-4 py-4 sm:px-6">{incident.assignedTo}</td>
                <td className="px-4 py-4 sm:px-6">{incident.createdAt}</td>
                <td className="px-4 py-4 sm:px-6">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Eye className="h-4 w-4" />
                    View
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 px-4 py-4 sm:px-6">
        <p className="text-sm text-slate-400">Showing 4 of 24 incidents</p>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">Previous</Button>
          <Button variant="outline" size="sm">Next</Button>
        </div>
      </div>
    </div>
  );
}
