import { Bell, ChevronDown, Moon, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

export function Topbar() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 bg-slate-950/80 px-6 py-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-slate-300">
          <Search className="h-4 w-4" />
        </div>
        <label className="flex min-w-[240px] items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm text-slate-400 md:min-w-[360px]">
          <Search className="h-4 w-4" />
          <input
            className="w-full bg-transparent outline-none placeholder:text-slate-500"
            placeholder="Search incidents, services, reports"
          />
        </label>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm" className="rounded-full p-2.5">
          <Bell className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" className="rounded-full p-2.5">
          <Moon className="h-4 w-4" />
        </Button>
        <div className="hidden items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2 md:flex">
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
          <span className="text-sm text-slate-300">Northwind Workspace</span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-left">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600/15 text-sm font-semibold text-blue-400">JC</div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-slate-100">Jules Carter</p>
                <p className="text-xs text-slate-400">Admin</p>
              </div>
              <ChevronDown className="h-4 w-4 text-slate-400" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
