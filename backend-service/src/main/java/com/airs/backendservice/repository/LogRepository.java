package com.airs.backendservice.repository;
import com.airs.backendservice.model.Log;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LogRepository extends MongoRepository<Log, String> {

    // Optional enhancement #1: search by severity
    List<Log> findBySeverity(String severity);

    // Optional enhancement #2: search by service
    List<Log> findByServiceName(String serviceName);

    // Optional enhancement #3: sort by timestamp, newest first
    List<Log> findAllByOrderByTimestampDesc();
}