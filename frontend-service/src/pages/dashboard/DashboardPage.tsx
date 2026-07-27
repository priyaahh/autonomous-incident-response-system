import { AlertTriangle, Loader2, RefreshCw } from 'lucide-react';
import { DashboardPage as DashboardView } from '@/components/dashboard/DashboardPage';
import { Button } from '@/components/ui/button';
import { useDashboardData } from '@/hooks/useDashboardData';

export function DashboardPage() {
  const { isLoading, error, data } = useDashboardData();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-slate-100">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-8 text-center shadow-soft">
          <Loader2 className="mx-auto h-8 w-8 animate-spin text-blue-400" />
          <p className="mt-4 text-lg font-medium">Loading SentraX dashboard</p>
          <p className="mt-2 text-sm text-slate-400">Preparing your SOC workspace...</p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-slate-100">
        <div className="max-w-md rounded-2xl border border-red-500/20 bg-slate-900/80 p-8 text-center shadow-soft">
          <AlertTriangle className="mx-auto h-8 w-8 text-red-400" />
          <h2 className="mt-4 text-xl font-semibold">Unable to load dashboard</h2>
          <p className="mt-2 text-sm text-slate-400">The live workspace could not be reached. Please retry in a moment.</p>
          <Button className="mt-6 gap-2" onClick={() => window.location.reload()}>
            <RefreshCw className="h-4 w-4" />
            Retry
          </Button>
        </div>
      </div>
    );
  }

  return <DashboardView data={data} />;
}
