# Project decisions

**English** · [Português (Brasil)](DECISIONS.pt-BR.md)

This log records the decisions that define the current NextHub MVP. Entries are grouped by topic; later decisions supersede earlier choices where noted.

## 23 November 2026 — Opportunity-board references

- **Decision:** use InfoJobs and Indeed as references for familiar search, filtering, and opportunity-card patterns, without reproducing either product.
- **Alternatives considered:** create every interaction from scratch or copy one portal's layout.
- **Rationale:** recognizable patterns make the board easier to understand while leaving room for NextHub's own identity and scope.

## 24 November 2026 — MVP scope

- **Decision:** prioritize a demonstrable student and company flow: profiles, opportunities, search, explainable recommendations, favorites, applications, and résumé access.
- **Alternatives considered:** a static listings page or a full recruitment and selection platform.
- **Rationale:** an end-to-end local product better demonstrates the problem while avoiding unneeded integrations and a full hiring workflow.

## 25 November 2026 — Official application architecture (superseded 26 November)

- **Decision at that time:** `frontend/` (React 18 and Vite) and `backend/` (Node.js and Express) were the active application. The earlier Java/Spring and React/Vite scaffolds in `Back-end/` and `Front-end/` were considered superseded and removed from the working project.
- **Alternatives considered:** keep both application trees or make the Java/Spring scaffold the official backend.
- **Rationale at that time:** the Node/Express implementation contained the authentication, opportunity, profile, application, favorite, and résumé flows, plus the demonstration data. Keeping the Java/Vite starters would leave competing, non-integrated applications and a CI workflow testing the wrong source.

## 25 November 2026 — Local JSON persistence

- **Decision at that time:** retain the existing JSON demonstration and runtime data in `backend/data/`, and store uploaded PDFs in the ignored `backend/uploads/` directory.
- **Alternatives considered:** introduce a SQL database or an external data service.
- **Rationale at that time:** the committed local data made the academic demo repeatable and available offline; introducing a database was considered outside the demonstration needs. Backups were required before manual data maintenance.

## 25 November 2026 — Session authentication and résumé boundaries

- **Decision at that time:** keep bcrypt-hashed passwords and role-checked Express sessions; restrict résumé access to the student owner and companies with applications to their own opportunities.
- **Alternatives considered:** storing plaintext credentials, exposing uploads as static files, or introducing an external identity provider.
- **Rationale:** this fits a local MVP and prevents direct public access to résumés. Production deployment still needs durable shared session storage and managed file storage.

## 24 November 2026 — Explainable recommendations

- **Decision:** calculate recommendations deterministically from the student's interests, education, and preferred format, and show a short explanation for each match.
- **Alternatives considered:** random ordering, keyword-only recommendations, or an opaque external AI ranking service.
- **Rationale:** the result is predictable and can be explained during the presentation without external APIs or service costs.

## 24 November 2026 — Saved opportunities and application navigation

- **Decision:** show favorites as a tab within the student's Applications area rather than as a separate navigation destination.
- **Alternatives considered:** separate Saved and Applications areas or hide favorites from application tracking.
- **Rationale:** this keeps saved and submitted opportunities together while maintaining separate views.

## 24 November 2026 — Responsive navigation and theme

- **Decision:** keep role-specific navigation, a desktop sidebar, a mobile bottom bar, and light/dark theme controls in Settings.
- **Alternatives considered:** one identical navigation for both roles or a permanent theme control in the mobile bar.
- **Rationale:** role-specific actions reduce clutter; the mobile bar remains focused on navigation.

## 24 November 2026 — Out-of-scope features

- **Decision:** do not add gamification, rankings, automatic web scraping, external institutional integrations, or a full company selection process to this MVP.
- **Alternatives considered:** expand the product beyond the one-week demonstrable flow.
- **Rationale:** those features add complexity without being necessary to validate the opportunity-board concept.

## 26 November 2026 — Java and SQLite backend migration

- **Decision:** replace the Node/Express API with the official Java/Spring Boot API, use Spring Data JPA/Hibernate for persistence, and SQLite as the local persistent database.
- **Alternatives considered:** keeping Node as a competing API or retaining data only in JSON files.
- **Rationale:** match the requested architecture, centralize persistence in SQLite, and maintain a single REST API responsible for the NextHub flows. This supersedes the 25 November backend and persistence decisions.
