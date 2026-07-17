package com.airs.backendservice.service;

import com.airs.backendservice.model.Incident;
import com.airs.backendservice.model.Log;
import com.airs.backendservice.repository.IncidentRepository;
import com.airs.backendservice.repository.LogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class DashboardService {

    @Autowired
    private IncidentRepository incidentRepository;

    @Autowired
    private LogRepository logRepository;

    public Map<String, Object> getDashboardSummary() {

        Map<String, Object> summary = new HashMap<>();

        List<Incident> incidents = incidentRepository.findAll();
        List<Log> logs = logRepository.findAll();

        long openCount = incidents.stream()
                .filter(i -> "OPEN".equalsIgnoreCase(i.getStatus()))
                .count();

        long closedCount = incidents.stream()
                .filter(i -> "CLOSED".equalsIgnoreCase(i.getStatus()))
                .count();

        long criticalCount = incidents.stream()
                .filter(i -> "CRITICAL".equalsIgnoreCase(i.getSeverity()))
                .count();

        summary.put("totalLogs", logs.size());
        summary.put("totalIncidents", incidents.size());
        summary.put("open", openCount);
        summary.put("closed", closedCount);
        summary.put("critical", criticalCount);

        return summary;
    }
    // Dashboard Trends
    public Map<String, Long> getIncidentTrends() {

      List<Incident> incidents = incidentRepository.findAll();

      Map<String, Long> trends = new HashMap<>();

      for (Incident incident : incidents) {

          String status = incident.getStatus();

          trends.put(status,
                  trends.getOrDefault(status, 0L) + 1);
      }

    return trends;
    }
}