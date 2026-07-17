package com.airs.backendservice.controller;

import com.airs.backendservice.service.DashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/dashboard")
public class DashboardController {

    @Autowired
    private DashboardService dashboardService;

    // Dashboard Summary
    @GetMapping("/summary")
    public Map<String, Object> getDashboardSummary() {
        return dashboardService.getDashboardSummary();
    }

    // Incident Trends
    @GetMapping("/trends")
    public Map<String, Long> getIncidentTrends() {
        return dashboardService.getIncidentTrends();
    }

}