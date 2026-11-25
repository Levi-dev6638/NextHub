# Project decisions

**English** · [Português (Brasil)](DECISIONS.pt-BR.md)

Record the team's important decisions here. Each entry should be short and state what was decided, the alternatives considered and the reason for the choice.

Project documentation must be written in **English** (this file is the main version), with a **Portuguese version** alongside (`DECISIONS.pt-BR.md`). Keep both versions in sync.

Keep this file at the **root** of the repository. Add a new entry for every relevant decision (stack, architecture, MVP scope, what was left out, paths you tried and abandoned, etc.). This file is a script for the decisions segment of the presentation.

Copy the template below whenever you need a new entry.

## Template

```markdown
## [date] — [decision title]
- **Decision:**
- **Alternatives considered:**
- **Rationale:**
```

## 23/11/2026 — Market references for the opportunity wall experience

- **Decision:** use **InfoJobs** and **Indeed** as visual and interaction references for organizing and presenting opportunities in the wall.
- **Alternatives considered:** creating a fully original experience; reproducing the layout of a single platform; combining patterns from multiple job portals.
- **Rationale:** both platforms offer clear, familiar patterns such as straightforward search, useful filters and concise cards with essential information. The project can learn from these patterns without copying the products, preserving a simple navigation flow and a distinct identity aligned with the mural's purpose.

## 24/11/2026 — Official NextHub MVP scope
- **Decision:** deliver a responsive, end-to-end and demonstrable MVP within one week. Students must be able to complete a profile and upload a PDF résumé, receive recommendations, save opportunities and submit applications. Companies must be able to publish opportunities and view enrolled candidates.
- **Alternatives considered:** reducing the MVP to a static wall; adding a complete company selection process; creating a vacancy marketplace with external search and institutional integrations.
- **Rationale:** a complete flow is more valuable to the presentation than a long list of partially implemented features. The scope covers search, recommendations, basic applications and publishing without requiring external services or complex infrastructure.

## 24/11/2026 — Planned MVP stack
- **Decision:** plan the MVP with a React/Vite frontend and a Java/Spring Boot backend, subject to the implementation that is actually committed.
- **Alternatives considered:** plain HTML/CSS/JavaScript with Node.js and Express; external SQL/NoSQL databases.
- **Rationale:** the repository's committed foundation uses React 19 with Vite for the frontend and Java 17 with Spring Boot for the backend. This record describes the documented plan and must not imply that API or feature implementation was completed before source evidence existed.

## 25/11/2026 — Frontend and backend project scaffolding
- **Decision:** initialize the frontend in `Front-end/` with React and Vite, and the backend in `Back-end/` with Java 17 and Spring Boot.
- **Alternatives considered:** implementing frontend and backend in a single Node.js project; keeping the project in documentation-only structure; using a database-backed backend initially.
- **Rationale:** the committed setup provides separate development areas and working build configuration. The frontend currently contains the Vite starter application, and the backend contains the Spring application entry point and base dependencies; neither should be described as a complete NextHub implementation yet.

## 25/11/2026 — Repository implementation verification status
- **Decision:** do not mark requested or conversation-only features as implemented until their source code or verifiable commit exists in the repository.
- **Alternatives considered:** presenting ZIP updates or conversation reports as completed; documenting every requested behavior as shipped.
- **Rationale:** current verified evidence includes project scaffolding and an initial React starter and Spring application. Opportunity, candidate, application, favorites and PDF flows must be confirmed in source before being added as completed features.

## 24/11/2026 — Visual identity and role-based navigation
- **Decision:** adopt the NextHub name, a light interface with an accessible dark theme, dark blue as the main color and category badges: orange for Internship, pink for Event, green for Freelancer and purple for Course. Desktop uses a fixed Sidebar and mobile uses a Bottom Navigation Bar.
- **Alternatives considered:** a generic identity without branding; identical navigation for candidates and companies; a standalone theme button in small-screen navigation.
- **Rationale:** a distinct identity improves presentation recognition, and category colors accelerate reading. Role-specific navigation makes each profile more focused, while the Bottom Bar provides an app-like mobile experience.

## 24/11/2026 — Explainable recommendations on the wall
- **Decision:** calculate recommendations by comparing candidate interests, format and availability with opportunity data. Matches appear below the search field and include a short reason, such as “matches your interest in Technology and Remote”.
- **Alternatives considered:** random listings; opaque AI ranking; recommendations based only on keywords.
- **Rationale:** this simple matching is deterministic, easy to explain during the presentation and sufficient to demonstrate personalization without a black box or an external API cost.

## 24/11/2026 — Unified Saved and Applications areas
- **Decision:** remove a separate Saved tab and display saved opportunities in a discrete section inside the student's Applications area.
- **Alternatives considered:** independent Saved and Applications tabs; showing only completed applications.
- **Rationale:** the unification reduces one navigation click and keeps followed opportunities in one place. The visual separation remains subtle to avoid interface clutter.

## 24/11/2026 — Centralized settings
- **Decision:** place the Light/Dark theme toggle and logout in one Settings screen on desktop and mobile.
- **Alternatives considered:** a standalone theme button in the header or mobile navbar; separate actions across different screens.
- **Rationale:** centralizing global actions reduces visual noise, preserves mobile navigation space and creates a consistent experience across both roles.

## 24/11/2026 — Academic profile and résumé
- **Decision:** include basic details, interests, format, availability, detailed courses and real PDF résumé upload. Show a completion bar calculated from completed fields and the submitted résumé.
- **Alternatives considered:** limiting profiles to name and interests; storing a fictional résumé; using points, levels or rankings.
- **Rationale:** these data support matching and allow companies to evaluate candidates. The completion bar guides profile completion without turning the product into a gamified system.

## 24/11/2026 — Local demo data and reset
- **Decision:** keep at least 12 realistic opportunities in JSON and provide a simple Python script to repopulate the data before the presentation.
- **Alternatives considered:** manual registration during the demo; a local SQL database; an external cloud database.
- **Rationale:** preloaded data prevents empty screens and allows a predictable demonstration. Local files are easy to reset, version and run offline.

## 24/11/2026 — Rejected MVP items
- **Decision:** exclude points, gamification and ranking; complete company selection workflows; automatic internet scraping; complex external databases; a permanent theme button in mobile navigation; and separate Saved tabs.
- **Alternatives considered:** implementing all extras during the week; retaining only a partial selection of them.
- **Rationale:** these items would increase implementation time, technical complexity or visual clutter without being essential to validate the central problem. The team prioritizes a professional, direct and stable flow.
