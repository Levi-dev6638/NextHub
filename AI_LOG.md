# AI usage log (AI_LOG)

**English** · [Português (Brasil)](AI_LOG.pt-BR.md)

Record how the team used artificial intelligence in the project. The use of AI is allowed and encouraged, as long as it is documented: this file is a required deliverable and a script for the “AI in practice” segment of the presentation.

Project documentation must be written in **English** (this file is the main version), with a **Portuguese version** alongside (`AI_LOG.pt-BR.md`). Keep both versions in sync.

Keep this file at the **root** of the repository. Include the tools used and, for every relevant use, the main prompt, what the AI generated, what the team kept and what was corrected or rejected — and why.

Never commit API keys, passwords or other secrets. Those values go in a `.env` file (outside the repository) and in GitHub Secrets.

Copy the template below whenever you need a new entry.

## Tools

- GitHub Copilot, Claude, Gemini

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

- **Main prompt:** "As a Senior Software Engineer and UI/UX Designer, organize the project's official scope and create from scratch a complete, functional and presentation-ready NextHub opportunity wall prototype for students and young professionals. Prioritize a one-week navigable flow using plain HTML/CSS/JavaScript on the frontend, Node.js with Express on the backend, Multer for PDF resumes and local JSON data. Include candidate and company profiles, complete registration and profiles, profile-match recommendations, search and filters, saved opportunities and applications, opportunity publishing, candidate management and résumé downloads. Also record what entered the scope and what was rejected or removed, including technical and strategic rationale."
- **What the AI generated:** an official consolidation of adopted decisions and rejected items; an HTML/CSS/JavaScript, Node.js/Express and JSON full-stack structure; REST API, real PDF uploads, populated fictional data and navigable screens for candidate and company roles. It also defined the NextHub name, recommendations based on interests/format/availability, responsive navigation, light/dark themes and the profile, wall, application, publishing and candidate-management flows.
- **What the team kept:** the clear scope organization, simple and stable local architecture, realistic fictional data, complete student and company flows, modern visual identity, desktop/mobile navigation and centralized settings.
- **What the team corrected or rejected, and why:** the team did not delegate the decisions to the AI. It keeps gamification and scoring out of scope, along with separate Saved tabs, a standalone mobile theme button and complex frameworks or external databases. It adopted Saved items inside Applications, moved theme and logout into Settings and kept plain HTML/CSS/JavaScript, Node.js/Express and JSON to reduce clicks, visual complexity and connection risks during the presentation.

### 24/11/2026 — JWT authentication (example)

- **Main prompt:** "Generate a JWT authentication middleware in Node.js/Express, with expired-token handling and a sample protected route."
- **What the AI generated:** a middleware and a sample route, with an outdated dependency and no validation of environment variables.
- **What the team kept:** the middleware structure and the token verification flow.
- **What the team corrected or rejected, and why:** we updated the library, moved the secret to an environment variable and added tests. The sample route was rewritten to fit our user model.
