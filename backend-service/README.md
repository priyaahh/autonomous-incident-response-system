# Backend Service

This module contains the infrastructure-ready Spring Boot backend for the Autonomous Incident Response System (AIRS).

## Overview

The backend service is intentionally scaffolded without business logic, CRUD endpoints, or entity classes so teammates can add modules such as logging, incidents, and follow-up workflows in a clean and maintainable way.

## Structure

```text
backend-service/
├── src/main/java/com/airs/backendservice/
│   ├── config/
│   ├── controller/
│   ├── service/
│   ├── repository/
│   ├── model/
│   └── exception/
├── src/main/resources/application.properties
└── pom.xml
```

## Technologies

- Java 17
- Spring Boot 3.3.x
- Maven
- Spring Web
- Spring Data MongoDB
- Spring Validation
- Lombok
- Spring Boot DevTools

## Prerequisites

- Java 17 or newer
- Maven 3.9+
- MongoDB connection string available via the MONGODB_URI environment variable

## Setup

1. Set the MongoDB URI:
   ```powershell
   $env:MONGODB_URI="mongodb://localhost:27017/airs"
   ```
2. Build the project:
   ```bash
   mvn clean package
   ```
3. Run the project:
   ```bash
   mvn spring-boot:run
   ```

## MongoDB Atlas

If you are using MongoDB Atlas, set the environment variable to your Atlas connection string before running the application.

## Notes

- The application starts on port 8080.
- The project uses global CORS and a shared exception handler as infrastructure defaults.
