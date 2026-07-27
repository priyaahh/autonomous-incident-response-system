import type { ActivityItem, HealthMetric, IncidentItem, KpiCardData, SeverityDistribution, TrendPoint } from '@/types';

export const kpiData: KpiCardData[] = [
  {
    title: 'Total Incidents',
    metric: '1,248',
    description: 'Cases handled this quarter',
    change: '+12.4%',
    trend: 'up',
    icon: 'AlertTriangle',
    tone: 'blue',
  },
  {
    title: 'Active Incidents',
    metric: '42',
    description: 'Currently under investigation',
    change: '+5.1%',
    trend: 'up',
    icon: 'Activity',
    tone: 'amber',
  },
  {
    title: 'Critical Alerts',
    metric: '8',
    description: 'Immediate mitigation required',
    change: '-2.3%',
    trend: 'down',
    icon: 'ShieldAlert',
    tone: 'red',
  },
  {
    title: 'Mean Response Time',
    metric: '4.8m',
    description: 'Average triage time',
    change: '-18.2%',
    trend: 'down',
    icon: 'Clock3',
    tone: 'green',
  },
  {
    title: 'System Availability',
    metric: '99.98%',
    description: 'Platform uptime this month',
    change: '+0.4%',
    trend: 'up',
    icon: 'Cloud',
    tone: 'slate',
  },
  {
    title: 'Investigation Success',
    metric: '93%',
    description: 'Resolved without escalation',
    change: '+3.6%',
    trend: 'up',
    icon: 'CheckCircle2',
    tone: 'green',
  },
];

export const incidentTrendData: TrendPoint[] = [
  { day: '01', incidents: 24 },
  { day: '05', incidents: 32 },
  { day: '10', incidents: 21 },
  { day: '15', incidents: 38 },
  { day: '20', incidents: 29 },
  { day: '25', incidents: 41 },
  { day: '30', incidents: 35 },
];

export const severityData: SeverityDistribution[] = [
  { name: 'Critical', value: 12, color: '#EF4444' },
  { name: 'High', value: 28, color: '#F59E0B' },
  { name: 'Medium', value: 41, color: '#2563EB' },
  { name: 'Low', value: 19, color: '#22C55E' },
];

export const recentIncidents: IncidentItem[] = [
  {
    id: 'INC-1042',
    title: 'Elevated auth failure rate',
    severity: 'Critical',
    status: 'Investigating',
    assignedTo: 'Mina Chen',
    createdAt: '08m ago',
  },
  {
    id: 'INC-1038',
    title: 'Unusual API traffic spike',
    severity: 'High',
    status: 'Open',
    assignedTo: 'Jules Rivera',
    createdAt: '24m ago',
  },
  {
    id: 'INC-1034',
    title: 'Database connection pool saturation',
    severity: 'Medium',
    status: 'Mitigated',
    assignedTo: 'Ava Patel',
    createdAt: '1h ago',
  },
  {
    id: 'INC-1029',
    title: 'Delayed notification delivery',
    severity: 'Low',
    status: 'Resolved',
    assignedTo: 'Liam Ortiz',
    createdAt: '2h ago',
  },
];

export const systemHealthData: HealthMetric[] = [
  { name: 'API Service', status: 'Healthy', latency: '42ms', lastUpdated: 'Just now' },
  { name: 'Database', status: 'Warning', latency: '118ms', lastUpdated: '2m ago' },
  { name: 'AI Service', status: 'Healthy', latency: '68ms', lastUpdated: '3m ago' },
  { name: 'Authentication', status: 'Critical', latency: '201ms', lastUpdated: '1m ago' },
  { name: 'Notification Service', status: 'Healthy', latency: '56ms', lastUpdated: '5m ago' },
];

export const activityTimeline: ActivityItem[] = [
  { title: 'Incident Created', time: '08:12', detail: 'INC-1042 raised from authentication anomalies.' },
  { title: 'Investigation Started', time: '08:24', detail: 'SOC analyst Mina Chen assigned the case.' },
  { title: 'Logs Uploaded', time: '08:41', detail: '34 new log bundles linked to the incident.' },
  { title: 'Report Generated', time: '09:03', detail: 'Initial mitigation report published to the workspace.' },
  { title: 'Incident Closed', time: '09:18', detail: 'Case resolved and documented for audit review.' },
];
