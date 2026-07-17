package com.airs.backendservice.service;

import com.airs.backendservice.model.Incident;
import com.airs.backendservice.repository.IncidentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class IncidentService {

    @Autowired
    private IncidentRepository incidentRepository;

    // =========================
    // CRUD OPERATIONS
    // =========================

    // Create Incident
    public Incident createIncident(Incident incident) {
        return incidentRepository.save(incident);
    }

    // Get all Incidents
    public List<Incident> getAllIncidents() {
        return incidentRepository.findAll();
    }

    // Get Incident by ID
    public Optional<Incident> getIncidentById(String id) {
        return incidentRepository.findById(id);
    }

    // Update Incident
    public Incident updateIncident(String id, Incident updatedIncident) {

        Optional<Incident> existingIncident = incidentRepository.findById(id);

        if (existingIncident.isPresent()) {

            Incident incident = existingIncident.get();

            incident.setTitle(updatedIncident.getTitle());
            incident.setDescription(updatedIncident.getDescription());
            incident.setSeverity(updatedIncident.getSeverity());
            incident.setStatus(updatedIncident.getStatus());

            incident.setPriority(updatedIncident.getPriority());
            incident.setCategory(updatedIncident.getCategory());
            incident.setAssignedTeam(updatedIncident.getAssignedTeam());
            incident.setRelatedLogs(updatedIncident.getRelatedLogs());
            incident.setResolutionSummary(updatedIncident.getResolutionSummary());
            incident.setResolvedAt(updatedIncident.getResolvedAt());

            return incidentRepository.save(incident);
        }

        return null;
    }

    // Delete Incident
    public void deleteIncident(String id) {
        incidentRepository.deleteById(id);
    }

    // =========================
    // INCIDENT WORKFLOW
    // =========================

    // Get Open Incidents
    public List<Incident> getOpenIncidents() {
        return incidentRepository.findByStatus("OPEN");
    }

    // Get Closed Incidents
    public List<Incident> getClosedIncidents() {
        return incidentRepository.findByStatus("CLOSED");
    }

    // Search by Priority
    public List<Incident> getIncidentsByPriority(String priority) {
        return incidentRepository.findByPriority(priority);
    }

    // Search by Category
    public List<Incident> getIncidentsByCategory(String category) {
        return incidentRepository.findByCategory(category);
    }

    // Search by Team
    public List<Incident> getIncidentsByAssignedTeam(String team) {
        return incidentRepository.findByAssignedTeam(team);
    }

    // Search by Severity
    public List<Incident> getIncidentsBySeverity(String severity) {
        return incidentRepository.findBySeverity(severity);
    }

    // Update Incident Status
    public Incident updateIncidentStatus(String id, String status) {

        Optional<Incident> optionalIncident = incidentRepository.findById(id);

        if (optionalIncident.isPresent()) {

            Incident incident = optionalIncident.get();

            incident.setStatus(status);

            if ("CLOSED".equalsIgnoreCase(status)) {
                incident.setResolvedAt(LocalDateTime.now());
            }

            return incidentRepository.save(incident);
        }

        return null;
    }

    // Assign Team
    public Incident assignIncidentTeam(String id, String team) {

        Optional<Incident> optionalIncident = incidentRepository.findById(id);

        if (optionalIncident.isPresent()) {

            Incident incident = optionalIncident.get();

            incident.setAssignedTeam(team);

            return incidentRepository.save(incident);
        }

        return null;
    }
}