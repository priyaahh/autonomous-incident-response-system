import { Activity, ArrowRight, BarChart3, FileText, PlusCircle, Upload, Zap } from 'lucide-react';
import { MetricCard } from '@/components/cards/MetricCard';
import { IncidentTrendChart } from '@/components/charts/IncidentTrendChart';
import { SeverityPieChart } from '@/components/charts/SeverityPieChart';
import { Sidebar } from '@/components/layout/Sidebar';
import { Topbar } from '@/components/layout/Topbar';
import { IncidentsTable } from '@/components/table/IncidentsTable';
import { ActivityTimeline } from '@/components/timeline/ActivityTimeline';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { activityTimeline, incidentTrendData, kpiData, recentIncidents, severityData, systemHealthData } from '@/services/mockData';
import type { HealthMetric } from '@/types';

const quickActions = [
  { label: 'Create Incident', icon: PlusCircle },
  { label: 'Upload Logs', icon: Upload },
  { label: 'Generate Report', icon: FileText },
  { label: 'View Analytics', icon: BarChart3 },
];

function HealthStatusBadge({ status }: { status: HealthMetric['status'] }) {
  const styles = {
    Healthy: 'bg-emerald-500/10 text-emerald-400',
    Warning: 'bg-amber-500/10 text-amber-400',
    Critical: 'bg-red-500/10 text-red-400',
  };

  return <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${styles[status]}`}>{status}</span>;
}

interface DashboardViewProps {
  data?: {
    kpis: typeof kpiData;
    trend: typeof incidentTrendData;
    severity: typeof severityData;
    incidents: typeof recentIncidents;
    health: typeof systemHealthData;
    activity: typeof activityTimeline;
  };
}

export function DashboardPage({ data: dashboardData }: DashboardViewProps) {
  const kpis = dashboardData?.kpis ?? kpiData;
  const trend = dashboardData?.trend ?? incidentTrendData;
  const severity = dashboardData?.severity ?? severityData;
  const incidents = dashboardData?.incidents ?? recentIncidents;
  const health = dashboardData?.health ?? systemHealthData;
  const activity = dashboardData?.activity ?? activityTimeline;

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar />
        <main className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">Operations Center</p>
              <h1 className="mt-2 text-3xl font-semibold text-slate-50">Security Operations Dashboard</h1>
            </div>
            <Button className="gap-2">
              <Zap className="h-4 w-4" />
              Run Live Investigation
            </Button>
          </div>

          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {kpis.map((item) => (
              <MetricCard key={item.title} item={item} />
            ))}
          </section>

          <section className="mt-6 grid gap-6 xl:grid-cols-[1.6fr_0.85fr]">
            <Card className="overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Incident Trend</CardTitle>
                  <p className="mt-1 text-sm text-slate-400">Signals across the last 30 days</p>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-blue-600/10 px-3 py-1 text-sm text-blue-400">
                  <Activity className="h-4 w-4" />
                  Live
                </div>
              </CardHeader>
              <CardContent>
                <IncidentTrendChart data={trend} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Severity Distribution</CardTitle>
                <p className="mt-1 text-sm text-slate-400">Current portfolio split</p>
              </CardHeader>
              <CardContent>
                <SeverityPieChart data={severity} />
                <div className="mt-2 space-y-2">
                  {severity.map((segment) => (
                    <div key={segment.name} className="flex items-center justify-between text-sm text-slate-300">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: segment.color }} />
                        {segment.name}
                      </div>
                      <span>{segment.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mt-6 grid gap-6 xl:grid-cols-[1.9fr_1fr]">
            <IncidentsTable incidents={incidents} />
            <Card>
              <CardHeader>
                <CardTitle>System Health</CardTitle>
                <p className="mt-1 text-sm text-slate-400">Service availability and response performance</p>
              </CardHeader>
              <CardContent className="space-y-3">
                {health.map((service) => (
                  <div key={service.name} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                    <div>
                      <p className="font-medium text-slate-100">{service.name}</p>
                      <p className="mt-1 text-sm text-slate-400">Latency {service.latency}</p>
                    </div>
                    <div className="text-right">
                      <HealthStatusBadge status={service.status} />
                      <p className="mt-2 text-xs text-slate-400">Updated {service.lastUpdated}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </section>

          <section className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <p className="mt-1 text-sm text-slate-400">Operational events and workflow updates</p>
              </CardHeader>
              <CardContent>
                <ActivityTimeline items={activity} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <p className="mt-1 text-sm text-slate-400">Accelerate response workflows</p>
              </CardHeader>
              <CardContent className="space-y-3">
                {quickActions.map(({ label, icon: Icon }) => (
                  <Button key={label} variant="outline" className="flex w-full items-center justify-between rounded-2xl border-slate-800 bg-slate-900/70 px-4 py-4 text-left">
                    <span className="flex items-center gap-3">
                      <Icon className="h-4 w-4 text-blue-400" />
                      {label}
                    </span>
                    <ArrowRight className="h-4 w-4 text-slate-400" />
                  </Button>
                ))}
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    </div>
  );
}
