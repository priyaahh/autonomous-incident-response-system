package com.airs.backendservice.repository;

import com.airs.backendservice.model.Incident;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IncidentRepository extends MongoRepository<Incident, String> {

    // Find incidents by status
    List<Incident> findByStatus(String status);

    // Find incidents by priority
    List<Incident> findByPriority(String priority);

    // Find incidents by category
    List<Incident> findByCategory(String category);

    // Find incidents by assigned team
    List<Incident> findByAssignedTeam(String assignedTeam);

    // Find incidents by severity
    List<Incident> findBySeverity(String severity);

}