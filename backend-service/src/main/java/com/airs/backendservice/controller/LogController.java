package com.airs.backendservice.controller;

import com.airs.backendservice.model.Log;
import com.airs.backendservice.service.LogService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/logs")
@RequiredArgsConstructor
public class LogController {

    private final LogService logService;

    // 1) CREATE
    @PostMapping
    public ResponseEntity<Log> createLog(@Valid @RequestBody Log log) {
        Log savedLog = logService.createLog(log);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedLog);
    }

    // 2) READ ALL
    @GetMapping
    public ResponseEntity<List<Log>> getAllLogs() {
        return ResponseEntity.ok(logService.getAllLogs());
    }

    // 3) READ ONE
    @GetMapping("/{id}")
    public ResponseEntity<Log> getLogById(@PathVariable String id) {
        return ResponseEntity.ok(logService.getLogById(id));
    }

    // 4) UPDATE
    @PutMapping("/{id}")
    public ResponseEntity<Log> updateLog(@PathVariable String id, @Valid @RequestBody Log log) {
        return ResponseEntity.ok(logService.updateLog(id, log));
    }

    // 5) DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLog(@PathVariable String id) {
        logService.deleteLog(id);
        return ResponseEntity.noContent().build();
    }

    // ---- Optional enhancements ----

    @GetMapping("/severity/{severity}")
    public ResponseEntity<List<Log>> getBySeverity(@PathVariable String severity) {
        return ResponseEntity.ok(logService.getLogsBySeverity(severity));
    }

    @GetMapping("/service/{serviceName}")
    public ResponseEntity<List<Log>> getByService(@PathVariable String serviceName) {
        return ResponseEntity.ok(logService.getLogsByService(serviceName));
    }

    @GetMapping("/sorted")
    public ResponseEntity<List<Log>> getSortedByTimestamp() {
        return ResponseEntity.ok(logService.getLogsSortedByTimestamp());
    }
}
