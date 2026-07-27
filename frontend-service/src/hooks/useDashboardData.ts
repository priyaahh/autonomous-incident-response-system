import { useEffect, useMemo, useState } from 'react';
import type { ActivityItem, HealthMetric, IncidentItem, KpiCardData, SeverityDistribution, TrendPoint } from '@/types';
import { activityTimeline, incidentTrendData, kpiData, recentIncidents, severityData, systemHealthData } from '@/services/mockData';

interface DashboardData {
  kpis: KpiCardData[];
  trend: TrendPoint[];
  severity: SeverityDistribution[];
  incidents: IncidentItem[];
  health: HealthMetric[];
  activity: ActivityItem[];
}

export function useDashboardData() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        setData({
          kpis: kpiData,
          trend: incidentTrendData,
          severity: severityData,
          incidents: recentIncidents,
          health: systemHealthData,
          activity: activityTimeline,
        });
        setIsLoading(false);
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Unable to load dashboard data');
        setIsLoading(false);
      }
    }, 900);

    return () => window.clearTimeout(timer);
  }, []);

  return useMemo(() => ({ isLoading, error, data }), [data, error, isLoading]);
}
