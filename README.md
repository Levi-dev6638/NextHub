# NextHub — Opportunities Board

**English** · [Português (Brasil)](README.pt-BR.md)

NextHub brings student internships, courses, freelance work, and events together in a searchable, personalized opportunities board.

## Problem and solution

Students often find opportunities scattered across social networks, group chats, and physical boards. NextHub centralizes listings and helps students find relevant options, keep a résumé and interests on their profile, save opportunities, and track applications. Companies can publish listings and manage applicants.

## MVP features

- Student and company registration, login, and logout.
- Student profile with interests, education, preferred format, and availability.
- PDF résumé upload (maximum 5 MB) and access control for applicants and the relevant company.
- Opportunity listing, text search, and type, format, subject, and area filters.
- Opportunity details, explainable recommendations, favorites, and internal or external applications.
- Company opportunity creation, editing, closing, applicant review, and application status updates.
- Responsive interface, light/dark theme, and role-specific navigation.
- Fictional local demonstration data: 20 opportunities, 10 users, and 14 applications.

The internal application flow requires a student résumé. External listings link to their published application URL. Recommendations are deterministic matches against profile interests, education, and preferred format; no external AI service is called by the application.

## Technology

- **Frontend:** React 18, Vite 6, JavaScript, and CSS.
- **Backend:** Java 25, Spring Boot 3.5, Spring Data JPA, Hibernate 6, and Bean Validation.
- **Persistence:** SQLite at `Back-end/data/nexthub.sqlite`; uploaded résumés are stored in `Back-end/uploads/`.
- **Tests and quality:** JUnit 5, Spring Boot Test, Maven, ESLint, and GitHub Actions.

## Repository layout

```text
.
├── Back-end/
│   ├── src/main/java/br/com/nexthub/
│   ├── src/main/resources/application.properties
│   ├── data/nexthub.sqlite
│   ├── uploads/
│   └── pom.xml
├── frontend/
│   ├── src/
│   ├── public/
│   └── eslint.config.js
├── .github/workflows/ci.yml
├── .env.example
├── package.json              # Backend scripts and dependencies
└── README.md
```

`frontend/` and `Back-end/` form the single active application. The fictional data in `backend/data/seed.json` is imported only on first initialization; runtime data is stored in SQLite. Back up `Back-end/data/nexthub.sqlite` before manual maintenance.

## Prerequisites and setup

- Java 25 or newer.
- Node.js 22.13 or newer and npm.
- Maven Wrapper (included).

From the repository root:

```sh
npm ci
npm --prefix frontend ci
copy .env.example .env
```

On macOS/Linux, use `cp .env.example .env` instead of `copy`. This configures the Vite API URL; the backend uses the defaults in `application.properties` and does not require a `.env` file.

## Run locally

Open two terminals from the repository root.

Terminal 1 — API (PowerShell):

```sh
cd Back-end
.\mvnw.cmd spring-boot:run
```

In Git Bash, macOS, or Linux:

```sh
cd Back-end
bash ./mvnw spring-boot:run
```

Terminal 2 — Vite frontend:

```sh
npm run dev:frontend
```

Open <http://localhost:5173>. Vite proxies `/api` requests to `http://localhost:8080`.

The backend creates or updates `Back-end/data/nexthub.sqlite` with Hibernate (`ddl-auto=update`) without deleting existing data. The allowed CORS origin can be configured with `NEXTHUB_CORS_ALLOWED_ORIGIN` (default: `http://localhost:5173`).

Demo accounts use the password `demo1234`:

- Student: `ana@nexthub.demo`
- Company: `talentos@nexthub.demo`

## API endpoints

The Java API preserves the contracts used by the frontend:

- Authentication: `POST /api/auth/register`, `/api/auth/login`, and `/api/auth/logout`; `GET /api/me`.
- Profile: `PATCH /api/profile`.
- Opportunities: `GET` and `POST /api/opportunities`; `PATCH` and `DELETE /api/opportunities/{id}`; `GET /api/company/opportunities`.
- Favorites: `GET /api/favorites` and `POST /api/favorites/{id}`.
- Applications: `GET /api/applications`, `POST /api/applications/{id}`, and `PATCH /api/applications/{id}`.
- Résumés: `POST /api/resume` and `GET /api/resume/{id}`.

## Tests and lint

```sh
npm run lint:frontend
npm run build:frontend
```

Run Java tests in a separate terminal. In PowerShell:

```sh
cd Back-end
.\mvnw.cmd test
```

In Git Bash, macOS, or Linux:

```sh
cd Back-end
bash ./mvnw test
```

The backend integration tests cover student registration and profile updates, résumé upload, applications, and company opportunity publishing. The frontend flows cover registration and login, a student application, and company publishing. To run the browser tests, install Chromium once and run:

```sh
cd frontend
npm ci
npx playwright install chromium
npm run test:e2e
```

Playwright starts the API and Vite automatically and uses a temporary SQLite database separate from the local database.

## CI

GitHub Actions runs on pull requests targeting `main` and on pushes to `main`. The workflow installs both dependency sets, lints and builds the frontend, runs backend integration tests, and exercises frontend happy paths with Playwright. The workflow is configured in `.github/workflows/ci.yml`. The latest checked run for `dev`, on commit `7be0a89`, completed successfully ([run 7](https://github.com/Levi-dev6638/NextHub/actions/runs/45915995752)).

## Persistence, security, and deployment

The main tables represent users, opportunities, applications, favorites, and résumés; recommendations are calculated dynamically from the student profile. Hibernate uses `ddl-auto=update` to create or update the SQLite schema; this is not a replacement for versioned migrations in production. The seed in `backend/data/seed.json` is imported only when the database has no users and does not overwrite existing records. Authentication uses HTTP sessions and BCrypt password hashes. Résumé uploads are limited to 5 MB and are served only to the student owner or a company with an application to its opportunity.

This setup is intended for a local academic demonstration, not a multi-instance production deployment. A public deployment needs durable shared session storage, managed persistence and file storage, HTTPS, and operational backups. No hosted deployment is currently configured.

## Team

- **Class:** TDS — mixed groups 6570, 6756, and 6863
- **Tech lead:** Levi (`Levi-dev6638`)
- **Presentation lead:** Lucas (`martinszvx`)
- **Member:** Giovana (`Giovana-Bernardes`)

## Links

- **Repository:** <https://github.com/Levi-dev6638/mural-de-oportunidades>
- **Deployment:** Not configured
