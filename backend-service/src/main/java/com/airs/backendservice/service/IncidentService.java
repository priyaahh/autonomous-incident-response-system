package com.airs.backendservice.service;

import com.airs.backendservice.model.Incident;
import com.airs.backendservice.repository.IncidentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IncidentService {

    @Autowired
    private IncidentRepository incidentRepository;

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

            return incidentRepository.save(incident);
        }

        return null;
    }

    // Delete Incident
    public void deleteIncident(String id) {
        incidentRepository.deleteById(id);
    }
}