# AI usage log (AI_LOG)

**English** · [Português (Brasil)](AI_LOG.pt-BR.md)

Record how the team used artificial intelligence in the project. The use of AI is allowed and encouraged, as long as it is documented: this file is a required deliverable and a script for the “AI in practice” segment of the presentation.

Project documentation must be written in **English** (this file is the main version), with a **Portuguese version** alongside (`AI_LOG.pt-BR.md`). Keep both versions in sync.

Keep this file at the **root** of the repository. Include the tools used and, for every relevant use, the main prompt, what the AI generated, what the team kept and what was corrected or rejected — and why.

Never commit API keys, passwords or other secrets. Those values go in a `.env` file (outside the repository) and in GitHub Secrets.

## Tools

- GitHub Copilot in VS Code — used for the current audit and implementation work.
- Earlier team-maintained entries also list ChatGPT/Codex, Claude, and Gemini; those historical uses are recorded by the team but cannot be independently verified from this repository.

## Log

### 24/11/2026 — Project scope organization and initial NextHub prototype

- **Main prompt:** "As a Senior Software Engineer and UI/UX Designer, organize the project's official scope and create from scratch a complete, presentation-ready NextHub opportunity wall prototype for students and young professionals. Prioritize a navigable one-week flow using plain HTML/CSS/JavaScript on the frontend, Node.js with Express on the backend, Multer for PDF résumés and local JSON data. Include candidate and company profiles, profile-match recommendations, search and filters, saved opportunities and applications, opportunity publishing, candidate management and résumé downloads."
- **What the AI generated:** a proposed scope consolidation and an implementation-oriented full-stack structure based on HTML/CSS/JavaScript, Node.js/Express and local JSON data. The AI also organized the NextHub identity, role-specific flows and the responsive interface and theme direction.
- **What the team kept:** the project scope and the simple, local architecture remained the documented basis of the NextHub proposal.
- **What the team corrected or rejected, and why:** implementation details should be claimed only when represented by source code or a verifiable repository history. The project scope explicitly excludes gamification, separate Saved tabs, a permanent mobile theme button and complex external infrastructure.

### 24/11/2026 — Navigation, interface and interaction corrections
- **Main prompt:** Correct navigation and interface details including applications and favorites, duplicate publish actions, mobile Publish placement, the student's wall entry point, avatars, filters, notifications, PDF résumé access and role-specific starting screens.
- **What the AI generated:** these items were requests for code changes during the project conversation. ZIP preparation and presentation-facing updates were also requested.
- **What the team kept:** at the time, the requested interactions were treated as requirements or implementation candidates. The 25 November audit later checked the active source and recorded which flows were present.
- **What the team corrected or rejected, and why:** favorites and applications remain distinct, as do role-specific flows. This historical entry is not a statement about the current implementation.

### 24/11/2026 — Demonstration data preparation
- **Main prompt:** Expand the demonstration opportunities and candidate profiles and prepare updated project packages for VS Code.
- **What the AI generated:** the conversation reports an intended expansion to 20 opportunities, 8 student profiles and 14 applications, and preparation of ZIP packages.
- **What the team kept:** the active demo data was later checked during the local audit: it contains 20 opportunities, 10 users, and 14 applications. The user count includes company accounts, so it is not evidence of 8 student profiles. ZIP preparation is not claimed as a current deliverable.
- **What the team corrected or rejected, and why:** candidate and opportunity data is fictional and used for demonstration. No real passwords, secrets or personal data should be committed.

### 24/11/2026 — Documentation review and alignment
- **Main prompt:** Complete the AI usage and project decision records in English and Portuguese while keeping both language versions aligned.
- **What the AI generated:** bilingual updates to `AI_LOG.md`, `AI_LOG.pt-BR.md`, `DECISIONS.md` and `DECISIONS.pt-BR.md`, preserving the existing root-level documentation structure.
- **What the team kept:** the English files remain the main versions and the Portuguese files mirror the corresponding content.
- **What the team corrected or rejected, and why:** placeholders and illustrative claims must not be presented as implementation evidence. Only repository-supported decisions and implementation details are included as confirmed facts.

### 25/11/2026 — Frontend project setup

- **Main prompt:** Initialize a frontend project for the NextHub interface and organize the frontend folder for development.
- **What the AI generated:** the repository history shows a Vite and React project setup under `Front-end/`, including `package.json`, the Vite configuration, the React entry point and the initial application component. At the time of that scaffold commit, `App.jsx` was the generated Vite starter interface, not a NextHub feature screen; the unused scaffold was later removed locally.
- **What the team kept:** the React/Vite scaffold was initially committed. The active NextHub interface is in `frontend/`; the competing scaffold was removed after the documented architecture decision.
- **What the team corrected or rejected, and why:** the generated starter content was not documented as a NextHub implementation. Only confirmed project scaffolding is recorded; feature screens, filters, favorites and recommendations require corresponding source code before they may be marked complete.

### 25/11/2026 — Backend project setup

- **Main prompt:** Initialize a Java backend project for the NextHub API.
- **What the AI generated:** repository history confirms a Spring Boot 4.2 project under `Back-end/`, using Java 17 and Maven. The committed scaffold contained the Spring application entry point and starter validation and web dependencies, but no NextHub REST endpoint implementation; the unused scaffold was later removed locally.
- **What the team kept:** the Spring Boot structure was initially committed as a scaffold. It was later identified as a competing, unimplemented backend and removed locally with the user's authorization.
- **What the team corrected or rejected, and why:** the Spring scaffold did not contain NextHub API or persistence flows at that point. The Node/Express implementation was the active API at the time of the 25 November audit; that architecture was superseded by the Java migration recorded on 26 November.

### 25/11/2026 — Local audit and NextHub implementation finalization

- **Main prompt:** The user supplied a detailed project audit request asking for architecture consolidation, functional fixes, security review, real automated tests, a matching CI workflow, bilingual documentation, and verification. The user explicitly instructed that nothing be sent to GitHub.
- **AI/tool used:** GitHub Copilot in VS Code, with local PowerShell, Node.js/npm, Git, and `npm audit` for repository inspection and verification.
- **What the AI generated or changed:** confirmed that `frontend/` and `backend/` contain the active React/Vite and Express application, while `Front-end/` and `Back-end/` contain the competing starter projects; added integration tests using isolated temporary storage; hardened profile, opportunity, session, and PDF handling; upgraded Multer; added frontend linting; made recommendations visible and added company opportunity editing; corrected opportunity card descriptions and hours; and aligned CI and documentation to the active application.
- **What was kept in this implementation:** existing demonstration JSON data and the active NextHub user flows. The user authorized local removal of the duplicate starter directories. Test data is created outside the repository and removed after test runs. A local browser walkthrough verified the company editing form and student recommendation explanations without submitting changes.
- **What was corrected or rejected, and why:** the earlier Java and React starter trees were not treated as the functional product. No GitHub push, pull request, merge, or other remote change was made. No claim is made that a remote GitHub Actions run is green; it was not checked.
- **Verification recorded for this work:** all 8 backend integration tests passed, frontend lint and production build passed, both `npm audit` checks reported zero known vulnerabilities, and a local browser walkthrough verified the company editing form and student recommendation explanations. A local HTTP smoke check served the frontend (200) while rejecting an anonymous private API request (401). No remote GitHub Actions run was checked.

### 26/11/2026 — Migration to the Java API and SQLite

- **Main prompt:** Replace the active Node/Express and JSON backend with Java/Spring Boot, Hibernate/JPA and SQLite, keep the React/Vite frontend integrated, preserve the existing user flows, and document and verify the migration.
- **What the AI generated or changed:** added the Spring Boot API, JPA entities and repositories, demo-data seeding, session-based login with BCrypt password hashes, REST endpoints, and local SQLite persistence; removed the competing Express API and unused React starter; updated the frontend proxy, root scripts, CI, and bilingual project documentation. It also corrected the Maven Wrapper distribution URL and documented PowerShell versus Git Bash commands.
- **What the team kept:** the active React/Vite interface and the fictional demo accounts and opportunities, with SQLite as runtime persistence. The seed JSON is read only when the database has no users.
- **What the team corrected or rejected, and why:** the prior Node/Express architecture decision was explicitly superseded; it is retained only as historical context. The untracked user's local account-data file is not part of this migration and must not be committed. No push or remote workflow run is claimed.
- **Verification:** the Java backend test passed (1 test, 0 failures), as did frontend lint and production build. Local login and opportunity retrieval were smoke-tested against the running API. The GitHub Actions workflow has not been run remotely.

### 26/11/2026 — Visual adjustments and “View résumé” buttons

- **Main prompt:** The user asked to document the style adjustments they made and requested buttons for viewing candidate résumés.
- **What the AI generated or changed:** during implementation, the candidate area temporarily gained “View résumé” buttons and a PDF viewer. The user later reverted those code changes.
- **What the team kept:** the request and UI decision are recorded to guide a future implementation.
- **What was corrected or rejected, and why:** this entry does not claim that the buttons or viewer are available in the current code, because the related changes were undone.

### 26/11/2026 — Frontend and backend happy-path tests

- **Main prompt:** The user asked for automated frontend and backend tests that cover the happy paths.
- **What the AI generated or changed:** added Playwright browser flows for student registration and re-login, résumé upload and application, and company opportunity publishing; added MockMvc API flows for student registration, profile update, résumé upload and application, plus company login, publishing and read-back. The tests use isolated SQLite files, can run locally, and are included in CI. The CORS origin is configurable so test servers can use isolated ports.
- **What the team kept:** the tests exercise the real React/Vite frontend and Spring Boot API against SQLite. The user’s existing local JSON changes were left untouched.
- **What was corrected or rejected, and why:** no remote CI execution is claimed. The profile page currently sends a `courses` field that the API rejects; this was found while examining the UI flow and was not changed as part of this test-focused request.
- **Verification:** all 3 Playwright flows and all 3 Java tests passed; frontend lint and production build passed. The remote GitHub Actions workflow was not run.

### 27/11/2026 — Profile, notifications, application withdrawal, and mobile fixes

- **Main prompt:** The user asked to run the local application, diagnose profile-save errors, make viewed notifications disappear, fix application withdrawal, and address mobile layout and navigation issues.
- **AI/tools used:** GitHub Copilot in VS Code, PowerShell, Java 25, Maven Wrapper, npm, and Playwright.
- **What the AI generated or changed:** added profile-course validation and SQLite persistence; added an owner-checked `DELETE /api/applications/{id}` endpoint; tracked notification read state per user in browser `localStorage` and made the unread dot conditional; allowed long résumé filenames to wrap in the profile panel; and adjusted the fixed mobile navigation bar for scrolling and device safe areas.
- **What the team kept:** the profile, application, notification, and mobile navigation fixes. The local JDK 25 and frontend/API servers were used for verification only and are not repository deliverables.
- **What was corrected or rejected, and why:** exploratory changes to the résumé viewer and candidate-card layout were reverted at the user's request; they are not part of the final code changes. The card spacing was restored rather than retaining the proposed right inset.
- **Verification:** all 3 Java backend tests passed; all 7 Playwright browser tests passed; the frontend production build passed. No remote GitHub Actions run or GitHub changes were made. Notification read state is local to each browser and is not synchronized across devices.

### 27/11/2026 — Opportunity actions and interface animations

- **Main prompt:** The user asked to reorganize opportunity actions, adjust the close button, and add animations to the project.
- **What the AI generated or changed:** left only “View” in the company opportunity list and moved “Edit” and “Close opportunity” into the details; removed the close X's background and border while keeping its hover in the primary color; added subtle animations for cards, pages, navigation, buttons, modals, and feedback messages, including modal and message exits.
- **What the team kept:** the updated action flow, restrained visual effects, and support for the system's reduced-motion preference.
- **What was corrected or rejected, and why:** the initial red, square close-button proposal was adjusted to the user's direction: only the X, with a primary-color hover and lift/scale motion.
- **Verification:** frontend lint, production build, and `git diff --check` passed. Browser tests were not run for this change; the backend test server requires Java 25, while the available environment had Java 21.
