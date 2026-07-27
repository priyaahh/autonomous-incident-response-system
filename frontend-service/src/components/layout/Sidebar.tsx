import { BarChart3, ClipboardList, FileText, LayoutGrid, LogOut, SearchCheck, Settings, ShieldCheck, Sparkles } from 'lucide-react';

const navItems = [
  { label: 'Dashboard', icon: LayoutGrid, active: true },
  { label: 'Incidents', icon: ShieldCheck },
  { label: 'Logs', icon: ClipboardList },
  { label: 'Investigations', icon: SearchCheck },
  { label: 'Reports', icon: FileText },
  { label: 'Analytics', icon: BarChart3 },
  { label: 'Settings', icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="flex h-full w-72 flex-col border-r border-slate-800 bg-slate-950/80 px-5 py-6">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600/15 text-blue-400">
          <Sparkles className="h-5 w-5" />
        </div>
        <div>
          <p className="text-lg font-semibold text-slate-100">SentraX</p>
          <p className="text-sm text-slate-400">Enterprise SOC</p>
        </div>
      </div>

      <nav className="mt-8 space-y-1.5">
        {navItems.map(({ label, icon: Icon, active }) => (
          <button
            key={label}
            className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${active ? 'bg-blue-600/15 text-blue-400' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'}`}
          >
            <Icon className="h-4 w-4" />
            {label}
          </button>
        ))}
      </nav>

      <div className="mt-auto rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-sm font-semibold text-slate-200">JC</div>
          <div>
            <p className="text-sm font-medium text-slate-100">Jules Carter</p>
            <p className="text-xs text-slate-400">SOC Lead</p>
          </div>
        </div>
        <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-300 hover:bg-slate-800">
          <LogOut className="h-4 w-4" />
          Sign out
        </button>
      </div>
    </aside>
  );
}
