package com.airs.backendservice.exception;
public class LogNotFoundException extends RuntimeException {
    public LogNotFoundException(String id) {
        super("Log not found with id: " + id);
    }
}