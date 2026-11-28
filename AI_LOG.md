# AI usage log (AI_LOG)

**English** · [Português (Brasil)](AI_LOG.pt-BR.md)

I use this log to record how I used artificial intelligence in the project. AI use is allowed and encouraged as long as I document it here; this file is also a required deliverable and a script for the “AI in practice” segment of my presentation.

I write the main project documentation in **English** and keep a **Portuguese version** alongside it in `AI_LOG.pt-BR.md`. I keep both versions in sync.

I keep this file at the **root** of the repository. For each relevant use, I record the tools, my main prompt, what the AI generated, what I kept, and what I corrected or rejected — and why.

I never commit API keys, passwords, or other secrets. I keep those values in a `.env` file outside the repository or in GitHub Secrets.

## Tools

- I used GitHub Copilot in VS Code for the current audit and implementation work.
- Earlier entries also list ChatGPT/Codex, Claude, and Gemini. I retained those historical records, but I cannot verify those uses independently from this repository.

## Log

### 24/11/2026 — Project scope organization and initial NextHub prototype

- **Main prompt:** "As a Senior Software Engineer and UI/UX Designer, organize the project's official scope and create from scratch a complete, presentation-ready NextHub opportunity wall prototype for students and young professionals. Prioritize a navigable one-week flow using plain HTML/CSS/JavaScript on the frontend, Node.js with Express on the backend, Multer for PDF résumés and local JSON data. Include candidate and company profiles, profile-match recommendations, search and filters, saved opportunities and applications, opportunity publishing, candidate management and résumé downloads."
- **What I got from the AI:** a proposed scope consolidation and an implementation-oriented full-stack structure based on HTML/CSS/JavaScript, Node.js/Express, and local JSON data. The AI also organized the NextHub identity, role-specific flows, responsive interface, and theme direction.
- **What I kept:** I kept the project scope and simple local architecture as the documented basis of the NextHub proposal.
- **What I corrected or rejected, and why:** I only claim implementation details that appear in source code or verifiable repository history. I kept gamification, separate Saved tabs, a permanent mobile theme button, and complex external infrastructure out of scope.

### 24/11/2026 — Navigation, interface and interaction corrections
- **Main prompt:** Correct navigation and interface details including applications and favorites, duplicate publish actions, mobile Publish placement, the student's wall entry point, avatars, filters, notifications, PDF résumé access and role-specific starting screens.
- **What I asked the AI for:** these items were requests for code changes during my project conversation. I also requested ZIP preparation and presentation-facing updates.
- **What I kept:** at the time, I treated the requested interactions as requirements or implementation candidates. In my 25 November audit, I checked the active source and recorded which flows were present.
- **What I corrected or rejected, and why:** I kept favorites and applications distinct, as well as role-specific flows. This historical entry does not describe the current implementation by itself.

### 24/11/2026 — Demonstration data preparation
- **Main prompt:** I asked to expand the demonstration opportunities and candidate profiles and prepare updated project packages for VS Code.
- **What I got from the AI:** I discussed an intended expansion to 20 opportunities, 8 student profiles, and 14 applications, along with ZIP packages.
- **What I kept:** I later checked the active demo data during my local audit: it contains 20 opportunities, 10 users, and 14 applications. Because that user count includes companies, I do not claim it proves there are 8 student profiles. I also do not claim ZIP preparation as a current deliverable.
- **What I corrected or rejected, and why:** I treat candidate and opportunity data as fictional demo data and do not commit real passwords, secrets, or personal data. I do not describe an expansion as delivered unless the corresponding files exist in the repository.

### 24/11/2026 — Documentation review and alignment
- **Main prompt:** I asked to complete the AI usage and project decision records in English and Portuguese and keep both language versions aligned.
- **What I got from the AI:** bilingual updates to `AI_LOG.md`, `AI_LOG.pt-BR.md`, `DECISIONS.md`, and `DECISIONS.pt-BR.md`, preserving my existing root-level documentation structure.
- **What I kept:** I use the English files as the main versions and keep the Portuguese files aligned with them.
- **What I corrected or rejected, and why:** I do not present placeholders or illustrative claims as implementation evidence. I include only repository-supported decisions and implementation details as confirmed facts.

### 25/11/2026 — Frontend project setup

- **Main prompt:** I asked to initialize a frontend project for NextHub and organize its folder for development.
- **What I got from the AI:** repository history shows that I initially set up Vite and React under `Front-end/`, including `package.json`, the Vite configuration, the React entry point, and the initial application component. In that scaffold commit, `App.jsx` was still the Vite starter, not a NextHub feature screen; I later removed the unused scaffold locally.
- **What I kept:** I initially committed the React/Vite scaffold. The active NextHub interface is now in `frontend/`; I removed the competing scaffold after making the architecture decision.
- **What I corrected or rejected, and why:** I did not document the generated starter content as a NextHub implementation. I record only confirmed scaffolding; I require corresponding source code before claiming feature screens, filters, favorites, or recommendations.

### 25/11/2026 — Backend project setup

- **Main prompt:** I asked to initialize a Java backend project for the NextHub API.
- **What I got from the AI:** repository history confirms that I set up a Spring Boot 4.2 project under `Back-end/`, using Java 17 and Maven. The scaffold I committed had a Spring application entry point and starter validation and web dependencies, but no NextHub REST endpoints; I later removed it locally.
- **What I kept:** I initially committed the Spring Boot structure as a scaffold. After I identified it as a competing, unimplemented backend, I removed it locally with authorization.
- **What I corrected or rejected, and why:** the Spring scaffold did not contain NextHub API or persistence flows at that point. My Node/Express implementation was the active API during my 25 November audit; I superseded that architecture with the Java migration recorded on 26 November.

### 25/11/2026 — Local audit and NextHub implementation finalization

- **Main prompt:** I supplied a detailed project audit request asking for architecture consolidation, functional fixes, a security review, real automated tests, a matching CI workflow, bilingual documentation, and verification. I explicitly instructed that nothing be sent to GitHub.
- **AI/tool used:** GitHub Copilot in VS Code, with local PowerShell, Node.js/npm, Git, and `npm audit` for repository inspection and verification.
- **What I had the AI generate or change:** I confirmed that `frontend/` and `backend/` contained the active React/Vite and Express application, while `Front-end/` and `Back-end/` were competing starter projects. I added integration tests using isolated temporary storage, hardened profile, opportunity, session, and PDF handling, upgraded Multer, added frontend linting, made recommendations visible, added company opportunity editing, corrected opportunity-card descriptions and hours, and aligned CI and documentation to the active application.
- **What I kept:** I kept the existing demonstration JSON data and NextHub user flows. I authorized local removal of the duplicate starter directories. My tests create data outside the repository and remove it after running. I also used a local browser walkthrough to verify company editing and student recommendation explanations without submitting changes.
- **What I corrected or rejected, and why:** I did not treat the earlier Java and React starter trees as the functional product. I made no GitHub push, pull request, merge, or other remote change, and I did not claim a remote GitHub Actions run was green because I had not checked it.
- **How I verified it:** all 8 backend integration tests passed; frontend lint and production build passed; both `npm audit` checks reported zero known vulnerabilities; and my local browser walkthrough verified the company editing form and student recommendation explanations. A local HTTP smoke check served the frontend (200) and rejected an anonymous private API request (401). I did not check a remote GitHub Actions run.

### 26/11/2026 — Migration to the Java API and SQLite

- **Main prompt:** I asked to replace the active Node/Express and JSON backend with Java/Spring Boot, Hibernate/JPA, and SQLite; keep React/Vite integrated; preserve existing user flows; and document and verify the migration.
- **What I had the AI generate or change:** I added the Spring Boot API, JPA entities and repositories, demo-data seeding, session login with BCrypt hashes, REST endpoints, and local SQLite persistence. I removed the competing Express API and unused React starter; updated the frontend proxy, root scripts, CI, and bilingual documentation; corrected the Maven Wrapper distribution URL; and documented PowerShell and Git Bash commands.
- **What I kept:** I kept the active React/Vite interface and fictional demo accounts and opportunities, using SQLite for runtime persistence. I configured the seed JSON to be read only when the database has no users.
- **What I corrected or rejected, and why:** I superseded the earlier Node/Express architecture decision and kept it only as historical context. I excluded the untracked local account-data file from this migration. I made no push and do not claim a remote workflow run.
- **How I verified it:** the Java backend test passed (1 test, 0 failures), as did frontend lint and production build. I smoke-tested local login and opportunity retrieval against the running API. I did not run GitHub Actions remotely.

### 26/11/2026 — Visual adjustments and “View résumé” buttons

- **Main prompt:** I asked to document my style adjustments and requested buttons for viewing candidate résumés.
- **What I had the AI generate or change:** during implementation, I temporarily added “View résumé” buttons and a PDF viewer to the candidate area. I later reverted those code changes.
- **What I kept:** I recorded the request and UI decision to guide a future implementation.
- **What I corrected or rejected, and why:** I did not claim the buttons or viewer were available in the code at that time because I had undone the related changes.

### 26/11/2026 — Frontend and backend happy-path tests

- **Main prompt:** I asked for automated frontend and backend tests covering the happy paths.
- **What I had the AI generate or change:** I added Playwright browser flows for student registration and re-login, résumé upload and application, and company opportunity publishing. I added MockMvc API flows for student registration, profile updates, résumé upload and application, plus company login, publishing, and read-back. My tests use isolated SQLite files and are included in CI. I made the CORS origin configurable so test servers can use isolated ports.
- **What I kept:** I kept tests that exercise the real React/Vite frontend and Spring Boot API against SQLite. I left my existing local JSON changes untouched.
- **What I corrected or rejected, and why:** I do not claim a remote CI execution. I found that the profile page sent a `courses` field rejected by the API, but I left it unchanged because this request focused on tests.
- **How I verified it:** all 3 Playwright flows and all 3 Java tests passed; frontend lint and production build passed. I did not run the remote GitHub Actions workflow.

### 27/11/2026 — Profile, notifications, application withdrawal, and mobile fixes

- **Main prompt:** I asked to run the local application, diagnose profile-save errors, make viewed notifications disappear, fix application withdrawal, and address mobile layout and navigation issues.
- **AI/tools used:** GitHub Copilot in VS Code, PowerShell, Java 25, Maven Wrapper, npm, and Playwright.
- **What I had the AI generate or change:** I added profile-course validation and SQLite persistence, an owner-checked `DELETE /api/applications/{id}` endpoint, and browser `localStorage` tracking for notification read state so the unread dot appears conditionally. I also allowed long résumé filenames to wrap and adjusted the fixed mobile navigation for scrolling and device safe areas.
- **What I kept:** I kept the profile, application, notification, and mobile navigation fixes. I used the local JDK 25 and frontend/API servers only for verification; they are not repository deliverables.
- **What I corrected or rejected, and why:** at my request, I reverted exploratory résumé-viewer and candidate-card layout changes, so they are not part of the final changes in that entry. I restored card spacing instead of keeping the proposed right inset.
- **How I verified it:** all 3 Java backend tests and all 7 Playwright browser tests passed; the frontend production build passed. I made no GitHub changes and did not run GitHub Actions remotely. Notification read state remains local to each browser and is not synchronized across devices.

### 27/11/2026 — Opportunity actions and interface animations

- **Main prompt:** I asked to reorganize opportunity actions, adjust the close button, and add animations to the project.
- **What I had the AI generate or change:** I left only “View” in the company opportunity list and moved “Edit” and “Close opportunity” into the details. I restored the close X's discreet background and border treatment while keeping its primary-color hover, and added subtle animations for cards, pages, navigation, buttons, modals, and feedback messages, including modal and message exits.
- **What I kept:** I kept the updated action flow, restrained visual effects, and support for the system's reduced-motion preference.
- **What I corrected or rejected, and why:** I rejected the initial red square close button and kept only the X with a primary-color hover and lift/scale motion.
- **How I verified it:** frontend lint, production build, and `git diff --check` passed. I did not run browser tests during that step because the test server required Java 25 and the available runtime was Java 21.

### 27/11/2026 — Card, dialog, tab, and candidate-review refinements

- **Main prompt:** I asked to align sparse card grids, center and scroll the opportunity details modal, animate the tab indicator, and reorganize candidate review actions.
- **AI/tools used:** GitHub Copilot in VS Code, React, CSS, PowerShell, and Playwright.
- **What I had the AI generate or change:** I kept favorite-card columns aligned with few results, added a sliding blue tab indicator, rendered dialogs through a portal in `document.body`, constrained their height to the viewport, enabled internal scrolling, and adjusted overlay coverage on small screens. I made candidate profile and status controls the same size, aligned the status to the right, and moved “View résumé” into the candidate profile dialog. I also refined card shadows, card entry/hover, page-entry motion, temporary notification highlighting, and toast stacking, while preserving reduced-motion support.
- **What I kept:** I kept the layout fixes and profile-to-résumé navigation while preserving the existing modal colors and behavior.
- **What I corrected or rejected, and why:** I removed “View résumé” from the candidate row to reduce visible actions; the résumé remains available through “View profile.” I preserved the opportunity modal's horizontal size and overall design.
- **How I verified it:** frontend lint, production build, and `git diff --check` passed; all 14 E2E tests passed after my final refinements. I did not push to GitHub or run remote Actions.
