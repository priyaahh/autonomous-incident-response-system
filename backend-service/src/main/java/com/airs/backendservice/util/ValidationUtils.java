package com.airs.backendservice.util;

import java.time.OffsetDateTime;
import java.time.format.DateTimeParseException;

public final class ValidationUtils {
    private ValidationUtils() {
    }

    public static boolean isValidTimestamp(String value) {
        if (value == null || value.isBlank()) {
            return false;
        }

        try {
            OffsetDateTime.parse(value);
            return true;
        } catch (DateTimeParseException ex) {
            return false;
        }
    }
}
