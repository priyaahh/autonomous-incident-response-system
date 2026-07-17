package com.airs.backendservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;

@Document(collection = "incidents")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Incident {

    @Id
    private String id;

    // Basic Incident Details
    private String title;
    private String description;
    private String severity;

    // Incident Workflow
    private String status;
    private String priority;
    private String category;
    private String assignedTeam;

    // Resolution Information
    private LocalDateTime resolvedAt;
    private String resolutionSummary;

    // Related Log IDs
    private List<String> relatedLogs;
}