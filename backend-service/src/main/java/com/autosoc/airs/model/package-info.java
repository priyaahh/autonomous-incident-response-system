/**
 * Model Package.
 * 
 * Purpose:
 * Stores relational database Entity models, request/response Data Transfer Objects (DTOs), and core system enums.
 * 
 * Future Implementation Notes:
 * - Define Entity class Incident mapping columns (id, severity, system_host, state, generated_report).
 * - Define request DTOs like AlertRequest matching inbound Prometheus telemetry formats.
 * - Annotate classes using Lombok annotations (@Data, @Builder, @NoArgsConstructor, @AllArgsConstructor).
 */
package com.autosoc.airs.model;
