# AI usage log (AI_LOG)

**English** · [Português (Brasil)](AI_LOG.pt-BR.md)

Record how the team used artificial intelligence in the project. The use of AI is allowed and encouraged, as long as it is documented: this file is a required deliverable and a script for the “AI in practice” segment of the presentation.

Project documentation must be written in **English** (this file is the main version), with a **Portuguese version** alongside (`AI_LOG.pt-BR.md`). Keep both versions in sync.

Keep this file at the **root** of the repository. Include the tools used and, for every relevant use, the main prompt, what the AI generated, what the team kept and what was corrected or rejected — and why.

Never commit API keys, passwords or other secrets. Those values go in a `.env` file (outside the repository) and in GitHub Secrets.

## Tools

- GitHub Copilot — AI assistant integrated into the project workflow.
- ChatGPT/Codex — AI assistant used in the project workflow.
- Claude
- Gemini

## Entry template

```markdown
### [date] — [task or section]
- **Main prompt:**
- **What the AI generated:**
- **What the team kept:**
- **What the team corrected or rejected, and why:**
```

## Log

### 24/11/2026 — Project scope organization and initial NextHub prototype

- **Main prompt:** "As a Senior Software Engineer and UI/UX Designer, organize the project's official scope and create from scratch a complete, presentation-ready NextHub opportunity wall prototype for students and young professionals. Prioritize a navigable one-week flow using plain HTML/CSS/JavaScript on the frontend, Node.js with Express on the backend, Multer for PDF résumés and local JSON data. Include candidate and company profiles, profile-match recommendations, search and filters, saved opportunities and applications, opportunity publishing, candidate management and résumé downloads."
- **What the AI generated:** a proposed scope consolidation and an implementation-oriented full-stack structure based on HTML/CSS/JavaScript, Node.js/Express and local JSON data. The AI also organized the NextHub identity, role-specific flows and the responsive interface and theme direction.
- **What the team kept:** the project scope and the simple, local architecture remained the documented basis of the NextHub proposal.
- **What the team corrected or rejected, and why:** implementation details should be claimed only when represented by source code or a verifiable repository history. The project scope explicitly excludes gamification, separate Saved tabs, a permanent mobile theme button and complex external infrastructure.

### 24/11/2026 — Navigation, interface and interaction corrections
- **Main prompt:** Correct navigation and interface details including applications and favorites, duplicate publish actions, mobile Publish placement, the student's wall entry point, avatars, filters, notifications, PDF résumé access and role-specific starting screens.
- **What the AI generated:** these items were requests for code changes during the project conversation. ZIP preparation and presentation-facing updates were also requested.
- **What the team kept:** requested interactions remain product requirements or implementation candidates; no item is recorded as shipped unless visible in committed source code or repository history.
- **What the team corrected or rejected, and why:** ambiguous or duplicate interactions were to be corrected without combining favorites and applications or hiding role-specific behavior. Requested fixes are not represented as confirmed corrections until their source implementation is verifiable.

### 24/11/2026 — Demonstration data preparation
- **Main prompt:** Expand the demonstration opportunities and candidate profiles and prepare updated project packages for VS Code.
- **What the AI generated:** the conversation reports an intended expansion to 20 opportunities, 8 student profiles and 14 applications, and preparation of ZIP packages.
- **What the team kept:** only counts and package tasks supported by committed data or repository history should be retained as repository facts. These counts are not marked as verified until the referenced data files are present.
- **What the team corrected or rejected, and why:** candidate and opportunity data is fictional and used for demonstration. No real passwords, secrets or personal data should be committed.

### 24/11/2026 — Documentation review and alignment
- **Main prompt:** Complete the AI usage and project decision records in English and Portuguese while keeping both language versions aligned.
- **What the AI generated:** bilingual updates to `AI_LOG.md`, `AI_LOG.pt-BR.md`, `DECISIONS.md` and `DECISIONS.pt-BR.md`, preserving the existing root-level documentation structure.
- **What the team kept:** the English files remain the main versions and the Portuguese files mirror the corresponding content.
- **What the team corrected or rejected, and why:** placeholders and illustrative claims must not be presented as implementation evidence. Only repository-supported decisions and implementation details are included as confirmed facts.
