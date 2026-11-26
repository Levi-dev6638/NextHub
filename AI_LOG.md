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
