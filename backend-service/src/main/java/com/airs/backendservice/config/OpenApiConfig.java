package com.airs.backendservice.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI openAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Autonomous Incident Response System API")
                        .version("1.0.0")
                        .description("Sprint 2 backend infrastructure for incident processing and API standardization."));
    }
}
