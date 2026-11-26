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

## 24/11/2026 — Official NextHub MVP scope
- **Decision:** deliver a responsive, end-to-end and demonstrable MVP within one week. Students must be able to complete a profile and upload a PDF résumé, receive recommendations, save opportunities and submit applications. Companies must be able to publish opportunities and view enrolled candidates.
- **Alternatives considered:** reducing the MVP to a static wall; adding a complete company selection process; creating a vacancy marketplace with external search and institutional integrations.
- **Rationale:** a complete flow is more valuable to the presentation than a long list of partially implemented features. The scope covers search, recommendations, basic applications and publishing without requiring external services or complex infrastructure.

## 24/11/2026 — Final MVP stack
- **Decision:** use HTML5, CSS3 and JavaScript ES6+ on the frontend, Node.js with Express on the backend, Multer for PDF résumé uploads and local JSON files for users, opportunities and applications.
- **Alternatives considered:** Java with Spring Boot on the backend; React or Vue on the frontend; external SQL/NoSQL databases.
- **Rationale:** this combination has low environment complexity and runs locally in VS Code. HTML/CSS/JavaScript is practical for collaborative development within one week, Express provides a straightforward REST API and JSON keeps the demo stable and offline.

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

**## 25/11/2026 — Separation of frontend and backend**

- **Decision:** Organize the NextHub project into two independent applications: the frontend in the `Front-end/` directory, using React 19 and Vite, and the backend in the `Back-end/` directory, using Java 17 and Spring Boot.
- **Alternatives considered:** Keeping everything within a single application; using Node.js and Express for the backend; maintaining the initial structure without separating the technologies.
- **Reasoning:** This separation allows teams to work independently on each layer, simplifies maintenance, and establishes a more organized and scalable architecture.

**## 25/11/2026 — Initializing the frontend with Vite**

- **Decision:** Use Vite to initialize and manage the React frontend application.
- **Alternatives considered:** Manually configuring the entire React structure; using other initialization tools, such as Create React App.
- **Reasoning:** Vite offers fast initialization, a development server, and simplified configuration, which facilitates the development and execution of the user interface.

**## 25/11/2026 — Java and Spring Boot-based Backend**

- **Decision:** Use Java 17 and Spring Boot to structure the backend, keeping the files directly within the `Back-end/` folder of the repository.
- **Alternatives considered:** Using Node.js with Express; nesting the Java project folder inside another `Back-end/` directory.
- **Reasoning:** Spring Boot provides an organized framework for developing APIs and simplifies the implementation of business logic. Keeping the files directly in the main backend folder avoids unnecessary directory nesting.

**## 25/11/2026 — Communication between frontend and backend**

- **Decision:** Establish communication between React and Spring Boot via an API, using JSON to send and receive data.
- **Alternatives considered:** Sharing files directly between applications; using Node.js as an intermediary; consolidating the frontend and backend into a single application.
- **Reasoning:** Communicating via a REST API with JSON keeps the applications independent, utilizes a widely adopted format, and allows each layer to evolve without depending on the internal implementation of the other.

**## 25/11/2026 — Independent application execution**

- **Decision:** Maintain independent startup commands for the frontend and backend, allowing each application to be run and tested separately during development.
- **Alternatives considered:** Running both applications through a single process; relying on the manual startup of external tools for every change.
- **Reasoning:** Independent execution facilitates error identification, testing, and parallel development by different teams.