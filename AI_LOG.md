# AI usage log (AI_LOG)

**English** · [Português (Brasil)](AI_LOG.pt-BR.md)

Record how the team used artificial intelligence in the project. The use of AI is allowed and encouraged, as long as it is documented: this file is a required deliverable and a script for the “AI in practice” segment of the presentation.

Project documentation must be written in **English** (this file is the main version), with a **Portuguese version** alongside (`AI_LOG.pt-BR.md`). Keep both versions in sync.

Keep this file at the **root** of the repository. Include the tools used and, for every relevant use, the main prompt, what the AI generated, what the team kept and what was corrected or rejected — and why.

Never commit API keys, passwords or other secrets. Those values go in a `.env` file (outside the repository) and in GitHub Secrets.

## Tools

- ChatGPT/Codex — AI assistant used in the project workflow.

## Log

### 24/11/2026 — NextHub application specification and implementation direction
- **Main prompt:** Generate and organize the NextHub opportunity platform according to the supplied project specification, with student and company flows, a responsive interface and API-backed demonstration data.
- **What the AI generated:** In the conversation context, the AI was asked to generate and review application code and project documentation. The current repository commit does not contain application source folders or implementation files, so source-level output cannot be attributed or marked as implemented from this repository alone.
- **What the team kept:** The maintained project documentation records the NextHub scope and intended MVP features, while the implementation status remains unverified until application files are present.
- **What the team corrected or rejected, and why:** No implementation behavior is documented here as completed unless it can be confirmed in source code or repository history. This avoids presenting conversation-only requests as verified features.

### 24/11/2026 — Navigation, interface and interaction corrections
- **Main prompt:** Correct navigation and interface details including applications and favorites, duplicate publish actions, mobile Publish placement, the student's mural entry point, avatars, filters, notifications, PDF curriculum access and role-specific starting screens.
- **What the AI generated:** These items were requests for code changes during the project conversation. The AI also revised presentation-facing structure and requested behavior when working with ZIP updates.
- **What the team kept:** The requested items remain product requirements or implementation candidates in the project context. No item is recorded as shipped unless it is visible in committed source code or repository history.
- **What the team corrected or rejected, and why:** Ambiguous or duplicate interactions were to be corrected without combining favorites and applications or hiding role-specific behavior. Because no source implementation is available in the current commit, requested fixes are not represented here as confirmed corrections.

### 24/11/2026 — Demonstration data preparation
- **Main prompt:** Expand the demonstration opportunities and candidate profiles and prepare updated project packages for VS Code.
- **What the AI generated:** The conversation reports an expansion intended to produce 20 opportunities, 8 student profiles and 14 applications. It also involved preparation and updating of ZIP packages.
- **What the team kept:** Only counts and package tasks that are supported by committed data or history should be retained as repository facts. The current repository contains documentation only and does not include the referenced JSON data or ZIP package, so the counts are not marked as verified here.
- **What the team corrected or rejected, and why:** The candidate and opportunity data is fictitious and for demonstration; no real passwords, secrets or personal data should be committed. A package or data expansion should not be described as included until the corresponding files exist in the repository.

### 24/11/2026 — Documentation review and alignment
- **Main prompt:** Complete the AI usage and project decision records in English and Portuguese while keeping both language versions aligned.
- **What the AI generated:** Suggested updates to `AI_LOG.md`, `AI_LOG.pt-BR.md`, `DECISIONS.md` and `DECISIONS.pt-BR.md`, preserving the existing bilingual structure and templates.
- **What the team kept:** The English files remain the main versions and the Portuguese files mirror the corresponding content and structure.
- **What the team corrected or rejected, and why:** Placeholder or illustrative claims may not be presented as project implementation evidence. Only recorded decisions and implementation details supported by repository files or a verifiable history are included as confirmed facts.
