package com.airs.backendservice.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import jakarta.validation.constraints.NotBlank;

import java.time.Instant;

@Document(collection = "logs")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Log {

    @Id
    private String id;

    @NotBlank(message = "serviceName is required")
    private String serviceName;

    @NotBlank(message = "severity is required")
    private String severity;

    @NotBlank(message = "message is required")
    private String message;

    // Using Instant instead of String for timestamp — see note below
    private Instant timestamp;

    @NotBlank(message = "host is required")
    private String host;
}