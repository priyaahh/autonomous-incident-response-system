# Incident Reports (Historical Dataset)

This directory is designated to store historical post-mortem reports and incident case files in markdown format.

---

## 🗂️ Storage Conventions

1. **File Format**: Standard markdown files using the post-mortem header schema.
2. **File Naming**: `INC-YYYY-ID-short-description.md` (e.g. `INC-2025-092-database-lockup.md`).
3. **Target Fields for Parser**:
   * **Symptoms**: The initial state of alert indicators when the incident occurred.
   * **Root Cause**: The technical trigger (such as misconfigured index, driver bug).
   * **Mitigation**: Steps taken to resolve the immediate system block.
   * **Long-Term Action**: Code or infrastructure fixes applied later.
