"""
Module: app.chains.state
Purpose: Declares the shared state schema for the AIRS LangGraph execution.

Responsibilities:
1. Defines the data fields passed dynamically between agents.
2. Tracks node transitions, errors, and accumulated evidence.
3. Provides typed variables for JSON serialization.

Future Implementation Notes:
- Extend to use Pydantic models for run-time state validation.
- Implement state delta logging to audit agent modifications at each step of the graph.
"""

from typing import TypedDict, List, Dict, Any

class AirsState(TypedDict):
    """
    Shared state schema for the Autonomous Incident Response System graph execution.
    """
    
    # Incident Identifiers
    incident_id: str
    
    # Raw alert input from Spring Boot backend
    alert_details: Dict[str, Any]
    
    # Evidence collected by LogAnalystAgent
    log_anomalies: List[Dict[str, Any]]
    
    # Knowledge bases retrieved by KnowledgeRetrieverAgent
    runbooks_retrieved: List[Dict[str, Any]]
    historical_cases: List[Dict[str, Any]]
    
    # RCA output from RootCauseAgent
    root_cause_diagnosis: Dict[str, Any]
    
    # Risk assessment metrics from RiskAssessorAgent
    severity_assessment: Dict[str, Any]
    
    # Final output report assembled by ReportGeneratorAgent
    incident_report_md: str
    
    # Technical execution state
    execution_errors: List[str]
    active_agent: str
    steps_taken: List[str]
