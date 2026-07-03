package com.airs.backendservice.service;
import com.airs.backendservice.exception.LogNotFoundException;
import com.airs.backendservice.model.Log;
import com.airs.backendservice.repository.LogRepository;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;

 // Lombok generates a constructor for final fields -> enables constructor injection
@Service
public class LogService {

    private final LogRepository logRepository;

    public LogService(LogRepository logRepository) {
        this.logRepository = logRepository;
    }

    public Log createLog(Log log) {
        if (log.getTimestamp() == null) {
            log.setTimestamp(Instant.now());
        }
        return logRepository.save(log);
    }

    public List<Log> getAllLogs() {
        return logRepository.findAll();
    }

    public Log getLogById(String id) {
        return logRepository.findById(id)
                .orElseThrow(() -> new LogNotFoundException(id));
    }

    public Log updateLog(String id, Log updatedLog) {
        Log existingLog = logRepository.findById(id)
                .orElseThrow(() -> new LogNotFoundException(id));

        existingLog.setServiceName(updatedLog.getServiceName());
        existingLog.setSeverity(updatedLog.getSeverity());
        existingLog.setMessage(updatedLog.getMessage());
        existingLog.setHost(updatedLog.getHost());
        if (updatedLog.getTimestamp() != null) {
            existingLog.setTimestamp(updatedLog.getTimestamp());
        }

        return logRepository.save(existingLog);
    }

    public void deleteLog(String id) {
        if (!logRepository.existsById(id)) {
            throw new LogNotFoundException(id);
        }
        logRepository.deleteById(id);
    }

    // Optional enhancements
    public List<Log> getLogsBySeverity(String severity) {
        return logRepository.findBySeverity(severity);
    }

    public List<Log> getLogsByService(String serviceName) {
        return logRepository.findByServiceName(serviceName);
    }

    public List<Log> getLogsSortedByTimestamp() {
        return logRepository.findAllByOrderByTimestampDesc();
    }
}
