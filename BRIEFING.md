# Theme briefing: Opportunities board

**English** · [Português (Brasil)](BRIEFING.pt-BR.md)

**Hack with AI: Coding with Intelligence**  
Senac na Prática · Technical Program in Systems Development  
Area: campus life and community  
Immersion from 23 to 29 November · presentations on 30 November and 1 December

This briefing is the starting point for **your** theme. Read it carefully, cut an MVP that fits in one week, and record your decisions. You will turn this problem into a real product, with a front end and a back end, an organized repository, and documented use of AI. This is a collaborative immersion: the panel evaluates what the team built, decided, and learned.

## Theme and context

**Opportunities board** — An aggregator of internships, courses, and events, with personalized recommendations.

Internships, short courses, workshops, talks, and field events show up in scattered places: a poster on a board, a note in a group chat, a link someone forwarded too late. By the time the student notices, the deadline has passed. What is missing is not just another feed: it is a place where these opportunities from campus life and the surrounding community can be found, filtered, and brought closer to each person's interests.

You will build an aggregator that feels like a living board, where recommendations help the student see what actually fits — not an endless generic list.

## Audience and personas

- **A student looking for an internship, course, or event:** wants to filter, understand the essentials, and save what matters.
- **Someone who posts an opportunity:** an instructor, a partner company, a student group, or the team itself, publishing a clear record (title, type, deadline, link).
- **A student still exploring the field:** benefits from recommendations they can understand, not from a black box.

## Goal

Ship an MVP that gathers internships, courses, and events, supports search and filters, stores an interest profile, and recommends items from that profile — with AI helping to organize and personalize.

## Minimum requirements (MVP)

The scope below is realistic for one week. Lock it on the first day and record in `DECISIONS.md` what is in, what is out, and why. A complete, demonstrable flow is better than a long list left half-done.

1. Register an opportunity with a type (internship, course, or event), title, description, dates or deadline, and a link or contact.
2. List, search, and filter by type, deadline, or topic.
3. Open a detail page with the essential information.
4. The student enters interests (topics, format, approximate availability).
5. The system recommends opportunities from that profile, in a visible place in the interface.
6. Save or favorite an opportunity to follow later.

## Where AI comes in

The use of AI is allowed and encouraged — in the product and in the process — and it must appear in `AI_LOG.md`. Some concrete starting points for this theme:

- Recommend items based on the profile, making it visible why that item appeared.
- Generate a short summary of long descriptions.
- Suggest topic tags from the opportunity text.
- Help the person posting complete an incomplete listing (deadline, type, audience).

Do not publish, without your review, an AI-generated text or automatic decision as if it were already the final version.

## Optional extras

Only after the MVP is standing. These are ideas, not obligations:

- A calendar view of the week's events.
- A notice when a saved opportunity is close to its deadline.
- A mark for “I already applied” or “not interested”.
- A small starter set (sample data) so the demo does not depend on dozens of live registrations.

## Out of scope

To protect the deadline and the focus of the product:

- A company's full selection process (résumé, tests, official application tracking).
- Automatically collecting openings from the whole internet.
- A guarantee of an internship or a seat in a course.
- An official Senac employability portal.

## Questions to guide the team

Use these questions on the first day, when you define the MVP, and again before the demo:

- Where does the first set of opportunities in the demo come from — a manual sample set is enough and honest?
- How do you explain a recommendation, instead of only showing a “for you” block?
- What happens to events and openings whose deadline has already passed?
- How is the interest profile edited when the person changes their mind?
- What minimum information does an opportunity need in order to appear on the board?

## Deliverables and how the panel evaluates

This is a one-week **collaborative immersion**, with teams of 3 or 4 TDS students. The panel evaluates **your** work, on your own project — formative feedback, not a comparison with other teams.

**What must be in the repository** (at the root), in **English** (the main version) and in **Portuguese** (`.pt-BR`), with a language link at the top of each file:

- `README.md` and `README.pt-BR.md`
- `DECISIONS.md` and `DECISIONS.pt-BR.md`
- `AI_LOG.md` and `AI_LOG.pt-BR.md`

The application must have a **front end and a back end**. The back end may be **Java**, **Python**, or **Node.js** (alone or combined, as long as they are integrated). A front end is required (web, desktop, or mobile). Justify the stack in `DECISIONS.md`. Also required: a Conventional Commits history, work through reviewed Pull Requests, a protected `main` branch, and a green **GitHub Actions** pipeline (build, lint, and tests) on PRs and on `main`. Do not commit secrets. On the first day, add the instructor as a collaborator: **adrianoanschau@gmail.com**.

**Code freeze** is on Sunday, **29 November, at 23:59**. Presentations are **15 minutes + 5 minutes of questions**, on 30 November and 1 December, at Senac Canoas, Room 103. Rehearse the demo and the required outline (problem and solution, live demo, workflow, decisions, AI in practice, and CI/CD).

Evaluation is split equally between **two panels**:

- **Technical panel (50%):** code quality and architecture; Git, Conventional Commits, and PRs; CI/CD; command of the code in the Q&A.
- **Innovation and Impact panel (50%):** originality; impact (the real problem and for whom); user experience; clarity of the pitch; creative use of AI.

Anyone on the team may be asked about any part of the project. Use AI thoughtfully, record what it generated and what you corrected, and own the code you present.

Good work — and may the week be intense, collaborative, and well documented.

