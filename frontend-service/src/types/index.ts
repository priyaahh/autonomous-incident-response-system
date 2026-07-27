export interface KpiCardData {
  title: string;
  metric: string;
  description: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  icon: string;
  tone: 'blue' | 'green' | 'amber' | 'red' | 'slate';
}

export interface IncidentItem {
  id: string;
  title: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  status: 'Open' | 'Investigating' | 'Mitigated' | 'Resolved' | 'Escalated';
  assignedTo: string;
  createdAt: string;
}

export interface TrendPoint {
  day: string;
  incidents: number;
}

export interface SeverityDistribution {
  name: string;
  value: number;
  color: string;
}

export interface HealthMetric {
  name: string;
  status: 'Healthy' | 'Warning' | 'Critical';
  latency: string;
  lastUpdated: string;
}

export interface ActivityItem {
  title: string;
  time: string;
  detail: string;
}
