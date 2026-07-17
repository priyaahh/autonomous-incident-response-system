package com.airs.backendservice.controller;

import com.airs.backendservice.model.Incident;
import com.airs.backendservice.service.IncidentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/incidents")
public class IncidentController {

    @Autowired
    private IncidentService incidentService;

    // =========================
    // CRUD APIs
    // =========================

    // Create Incident
    @PostMapping
    public Incident createIncident(@RequestBody Incident incident) {
        return incidentService.createIncident(incident);
    }

    // Get All Incidents
    @GetMapping
    public List<Incident> getAllIncidents() {
        return incidentService.getAllIncidents();
    }

    // Get Incident by ID
    @GetMapping("/{id}")
    public Optional<Incident> getIncidentById(@PathVariable String id) {
        return incidentService.getIncidentById(id);
    }

    // Update Incident
    @PutMapping("/{id}")
    public Incident updateIncident(@PathVariable String id,
                                   @RequestBody Incident incident) {
        return incidentService.updateIncident(id, incident);
    }

    // Delete Incident
    @DeleteMapping("/{id}")
    public void deleteIncident(@PathVariable String id) {
        incidentService.deleteIncident(id);
    }

    // =========================
    // INCIDENT WORKFLOW APIs
    // =========================

    // Get Open Incidents
    @GetMapping("/open")
    public List<Incident> getOpenIncidents() {
        return incidentService.getOpenIncidents();
    }

    // Get Closed Incidents
    @GetMapping("/closed")
    public List<Incident> getClosedIncidents() {
        return incidentService.getClosedIncidents();
    }

    // Search by Priority
    @GetMapping("/priority/{priority}")
    public List<Incident> getIncidentsByPriority(@PathVariable String priority) {
        return incidentService.getIncidentsByPriority(priority);
    }

    // Search by Category
    @GetMapping("/category/{category}")
    public List<Incident> getIncidentsByCategory(@PathVariable String category) {
        return incidentService.getIncidentsByCategory(category);
    }

    // Search by Assigned Team
    @GetMapping("/team/{team}")
    public List<Incident> getIncidentsByAssignedTeam(@PathVariable String team) {
        return incidentService.getIncidentsByAssignedTeam(team);
    }

    // Search by Severity
    @GetMapping("/severity/{severity}")
    public List<Incident> getIncidentsBySeverity(@PathVariable String severity) {
        return incidentService.getIncidentsBySeverity(severity);
    }

    // Update Incident Status
    @PatchMapping("/{id}/status")
    public Incident updateIncidentStatus(@PathVariable String id,
                                         @RequestParam String status) {
        return incidentService.updateIncidentStatus(id, status);
    }

    // Assign Team
    @PatchMapping("/{id}/assign")
    public Incident assignIncidentTeam(@PathVariable String id,
                                       @RequestParam String team) {
        return incidentService.assignIncidentTeam(id, team);
    }
}