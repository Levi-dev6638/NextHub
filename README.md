# NextHub — Opportunities Board

**English** · [Português (Brasil)](README.pt-BR.md)

I built NextHub to bring internships, courses, freelance work, and events together in a searchable, personalized opportunities board for students.

## Problem and solution

I saw students finding opportunities scattered across social networks, group chats, and physical boards. I centralized those listings in NextHub so students can find relevant options, keep a résumé and interests on their profile, save opportunities, and track applications. I also built a flow for companies to publish listings and manage applicants.

## MVP features

- I implemented student and company registration, login, and logout.
- I created student profiles with courses, interests, education, preferred format, and availability.
- I added PDF résumé uploads (up to 5 MB) and restricted access to the applicant and the relevant company.
- I implemented opportunity listings, text search, and filters by type, format, subject, and area.
- I added opportunity details, explainable recommendations, favorites, and internal or external applications.
- I let companies create, edit, and close opportunities, review applicants, and update application statuses. Companies can open a résumé from the candidate profile and change the status alongside the profile action; students can withdraw their applications.
- I configured application-based notifications to become read when opened; the unread indicator appears only while unread items remain in the current browser.
- I built a responsive interface with a light/dark theme, role-specific navigation, and a fixed mobile navigation bar that accounts for device safe areas. I kept favorite-grid columns consistent with fewer items, added a sliding tab indicator, and made opportunity details a centered, internally scrollable modal.
- I prepared fictional local demonstration data: 20 opportunities, 10 users, and 14 applications.

I require a résumé for internal applications and send students to the published application URL for external listings. I calculate recommendations deterministically from profile interests, education, and preferred format; the application does not call an external AI service.

## Technology

- **Frontend:** I chose React 18, Vite 6, JavaScript, and CSS.
- **Backend:** I chose Java 25, Spring Boot 3.5, Spring Data JPA, Hibernate 6, and Bean Validation.
- **Persistence:** I use SQLite at `Back-end/data/nexthub.sqlite` and store uploaded résumés in `Back-end/uploads/`.
- **Tests and quality:** I use JUnit 5, Spring Boot Test, Maven, ESLint, and GitHub Actions.

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

I organized `frontend/` and `Back-end/` as the single active application. I import fictional data from `backend/data/seed.json` only on first initialization and keep runtime data in SQLite. I back up `Back-end/data/nexthub.sqlite` before manual maintenance.

## Prerequisites and setup

- Java 25 or newer.
- Node.js 22.13 or newer and npm.
- Maven Wrapper (included).

To set up the project, I run these commands from the repository root:

```sh
npm ci
npm --prefix frontend ci
copy .env.example .env
```

On macOS/Linux, use `cp .env.example .env` instead of `copy`. This configures the Vite API URL; the backend uses the defaults in `application.properties` and does not require a `.env` file.

## Run locally

To run NextHub, I open two terminals from the repository root.

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

Then I open <http://localhost:5173>; Vite proxies my `/api` requests to `http://localhost:8080`.

I configured the backend to create or update `Back-end/data/nexthub.sqlite` with Hibernate (`ddl-auto=update`) without deleting existing data. I can set the allowed CORS origin with `NEXTHUB_CORS_ALLOWED_ORIGIN` (default: `http://localhost:5173`).

For demonstrations, I use these fictional accounts, both with the password `demo1234`:

- Student: `ana@nexthub.demo`
- Company: `talentos@nexthub.demo`

## API endpoints

In the Java API, I preserved the contracts used by the frontend:

- Authentication: `POST /api/auth/register`, `/api/auth/login`, and `/api/auth/logout`; `GET /api/me`.
- Profile: `PATCH /api/profile`.
- Opportunities: `GET` and `POST /api/opportunities`; `PATCH` and `DELETE /api/opportunities/{id}`; `GET /api/company/opportunities`.
- Favorites: `GET /api/favorites` and `POST /api/favorites/{id}`.
- Applications: `GET /api/applications`, `POST /api/applications/{id}`, `PATCH /api/applications/{id}`, and `DELETE /api/applications/{id}` for the owning student to withdraw an application.
- Résumés: `POST /api/resume` and `GET /api/resume/{id}`.

## Tests and lint

```sh
npm run lint:frontend
npm run build:frontend
```

To validate the API, I run Java tests in a separate terminal. In PowerShell:

```sh
cd Back-end
.\mvnw.cmd test
```

In Git Bash, macOS, or Linux:

```sh
cd Back-end
bash ./mvnw test
```

With the backend integration tests, I verify registration, profile updates including course persistence, résumé upload, application submission and withdrawal, and company opportunity publishing. With the 14 frontend browser tests, I verify registration and login, student applications, company publishing, notification read state, candidate profile and résumé access, card interactions, tabs, dialogs, and mobile navigation while scrolling. To run the browser tests, I install Chromium once and run:

```sh
cd frontend
npm ci
npx playwright install chromium
npm run test:e2e
```

I configured Playwright to start the API and Vite automatically and to use a temporary SQLite database separate from my local database.

## CI

I configured GitHub Actions to run on pull requests targeting `main` and on pushes to `main`. The workflow installs both dependency sets, lints and builds the frontend, runs backend integration tests, and exercises frontend happy paths with Playwright. I keep this configuration in `.github/workflows/ci.yml`. The latest run I checked for `dev`, on commit `7be0a89`, completed successfully ([run 7](https://github.com/Levi-dev6638/NextHub/actions/runs/45915995752)).

## Persistence, security, and deployment

I modeled the main tables for users, opportunities, applications, favorites, and résumés; I calculate recommendations dynamically from the student profile. I use Hibernate's `ddl-auto=update` to create or update the SQLite schema, but I know this does not replace versioned migrations in production. I import `backend/data/seed.json` only when the database has no users and never overwrite existing records. I protect authentication with HTTP sessions and BCrypt password hashes. I limit résumé uploads to 5 MB and serve them only to the student owner or a company with an application to its opportunity.

I prepared this setup for a local academic demonstration, not a multi-instance production deployment. Before a public deployment, I would need durable shared session storage, managed persistence and file storage, HTTPS, and operational backups. I have not configured a hosted deployment.

## Team

- **My class:** TDS — mixed groups 6570, 6756, and 6863
- **Tech lead:** Levi (`Levi-dev6638`)
- **Me, presentation lead:** Lucas (`martinszvx`)
- **My teammate:** Giovana (`Giovana-Bernardes`)

## Links

- **Repository:** <https://github.com/Levi-dev6638/mural-de-oportunidades>
- **Deployment:** Not configured
