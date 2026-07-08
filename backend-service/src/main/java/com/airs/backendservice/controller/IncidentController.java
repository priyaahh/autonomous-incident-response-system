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
}