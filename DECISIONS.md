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

## 23/11/2026 — Back-end stack choice (example)

- **Decision:** use Node.js with Express on the back-end.
- **Alternatives considered:** Java with Spring Boot; Python with FastAPI.
- **Rationale:** the team is already more familiar with JavaScript, and a one-week deadline favors a stack everyone can contribute to from day one.

## 23/11/2026 — Market references for the opportunity wall experience

- **Decision:** use **InfoJobs** and **Indeed** as visual and interaction references for organizing and presenting opportunities in the wall.
- **Alternatives considered:** creating a fully original experience; reproducing the layout of a single platform; combining patterns from multiple job portals.
- **Rationale:** both platforms offer clear, familiar patterns such as straightforward search, useful filters and concise cards with essential information. The project can learn from these patterns without copying the products, preserving a simple navigation flow and a distinct identity aligned with the mural's purpose.

## 23/11/2026 — Java back-end and Node.js, HTML and CSS front-end

- **Decision:** use Java for the back-end and Node.js with HTML and CSS for the front-end.
- **Alternatives considered:** Node.js with Express across the project; Java with Spring Boot across the project; Python with FastAPI for the back-end.
- **Rationale:** this combination allows the team to explore two back-end approaches with different characteristics: Java provides a mature, structured foundation, while Node.js supports the presentation layer and integration with HTML and CSS. The decision will be validated during MVP implementation and may be adjusted if technical or integration limitations arise.

## [date] — [decision title]

- **Decision:**
- **Alternatives considered:**
- **Rationale:**
