# Maintenance Guidelines

Update Cadence
- Minor updates monthly (tuning, bug fixes)
- Quarterly content refresh (levels, visuals)

Config-Driven Difficulty
- Keep `config.ts` with tile distributions and pressure ramps per mode
- Add new levels by extending config arrays; avoid hard-coding

Performance Budgets
- Enforce JS/CSS/SVG size limits; reject PRs that exceed without justification

Dependencies
- Minimize external libraries; keep versions pinned; audit quarterly

Analytics & Metrics
- Review engagement: plays per session, completion rate, CTA CTR; iterate on UI

Security & Privacy
- No PII collection; only anonymous engagement events; comply with site privacy policy

Issue Management
- Triage weekly; label `bug`, `perf`, `a11y`, `enhancement`; prioritize by user impact

Release Process
- See `VersionControl.md`; tag releases; update `CHANGELOG.md`