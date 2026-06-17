/**
 * Config Package.
 * 
 * Purpose:
 * Stores configuration classes for Spring Boot components, CORS security, database dialect mapping,
 * async tasks scheduling, and external REST template client instantiations.
 * 
 * Future Implementation Notes:
 * - Configure WebSecurityConfigurerAdapter/SecurityFilterChain bean.
 * - Establish CorsConfigurationSource allowing React development server traffic (localhost:5173).
 * - Declare RestTemplate or WebClient beans to interface with the FastAPI ai-service.
 */
package com.autosoc.airs.config;
