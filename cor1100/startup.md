# COR 1100 — Session Startup Guide
**The Global Experience | Fall 2026 | bdepro.github.io/courses/cor1100/**

Read this at the start of each session to pick up where we left off.
Update the checklist below as items are completed.

**At the start of each session, read in this order:**
1. This file (`startup.md`)
2. `cor1100/config.js` — full course configuration
3. The relevant ECO 1000 model file (e.g. `eco1000/index.html` when building `index.html`)

---

## Repo locations
- Course files (public GitHub Pages): `repos/courses/cor1100/`
- Shared files: `repos/courses/shared/` — ai-policy.html, brand.css, support.html
- AI assignment (private): `repos/eco-ai-policy/` — COR 1100 AI assignment to be added here
- Model course to reference: `repos/courses/eco1000/`

---

## What this course is
First-year seminar modeled on ECO 1000. Same session structure, same grading component
names and weights, same HTML framework. Key differences from ECO 1000:

- **Text:** Hanley, *Our Great Purpose* (Princeton UP) — PDFs via Perusall, no Cengage
- **Source text:** Smith, *Theory of Moral Sentiments* — 4 passages serve as the TMS component
- **No application block** — S12–S13 continue with Hanley chapters through the end
- **25 chapters** — Intro + Ch. I–XXV, Ch. XI omitted (intentionally curated)
- **8 Puzzles** — formative MC quizzes; no quiz in S7 (Mon/Tue only before Fall Break)

---

## Session and chapter map (locked)

| Session | Dates | Chapters | Event |
|---------|-------|----------|-------|
| S0 | Aug 26–28 | — | Course intro only, no reading |
| S1 | Aug 31–Sep 4 | Intro, Ch. I, II | Puzzle 1 |
| S2 | Sep 7–11 | Ch. III, IV, V | Puzzle 2 |
| S3 | Sep 14–18 | — | CI #1 Wed Sep 16 · TMS 1 launched Fri |
| S4 | Sep 21–25 | Ch. VI, VII, VIII | Puzzle 3 |
| S5 | Sep 28–Oct 2 | Ch. IX, X, XII | Puzzle 4 |
| S6 | Oct 5–9 | — | CI #2 Wed Oct 7 · TMS 2 launched Fri |
| S7 | Oct 12–13 | Ch. XIII | Perusall only — no quiz |
| S8 | Oct 14–18 | — | Fall Break |
| S9 | Oct 19–23 | Ch. XIV, XV, XVI | Puzzle 5 · TMS 3 launched Fri |
| S10 | Oct 26–30 | Ch. XVII, XVIII, XIX | Puzzle 6 |
| S11 | Nov 2–6 | — | CI #3 Wed Nov 4 · TMS 4 launched Fri |
| S12 | Nov 9–13 | Ch. XX, XXI, XXII | Puzzle 7 |
| S13 | Nov 16–20 | Ch. XXIII, XXIV, XXV | Puzzle 8 |
| S14 | Nov 23–27 | — | Thanksgiving Break |
| S15 | Nov 30–Dec 4 | — | Viva week · CI #4 Fri Dec 4 |

---

## Grading (locked — same weights as ECO 1000)

| Component | Weight | Key rule |
|-----------|--------|----------|
| Check-Ins | 50% | CI 4 always counts; replaces lowest of CI 1–3 if higher |
| Friday Focus | 25% | Narrative due Wed Dec 2 · viva during viva week · focus on Hanley/Smith |
| Puzzles | 15% | 8 quizzes, lowest dropped; late within 1 week = 80% |
| TMS | 10% | 4 TMS passages; introduced Fri of S3, S6, S9, S11 |

All readings and quizzes due Wednesday 11:59 p.m. of each session.

---

## config.js — what still needs to be filled in

- [ ] `CHAPTERS.threads` — standing analytical threads for every CI (not yet decided)
- [ ] `CHAPTERS.all[*].url` — 25 Perusall assignment URLs (after Perusall is set up)
- [ ] `CANVAS.tms[*].title` and `.url` — 4 TMS passage titles and Canvas URLs
- [ ] `CANVAS.puzzles[*].url` — 8 quiz URLs
- [ ] `CANVAS.checkIns[*].url` — 4 check-in URLs
- [ ] `CANVAS.friday[*].url` — narrative submission + Canvas Scheduler URL
- [ ] `CANVAS.viva.*` — all viva week URLs
- [ ] `PAGES.aiAssignments` — COR 1100 AI assignment URL (page not yet built)
- [ ] `TEXTBOOK.perusallUrl` — Perusall course URL once registered
- [ ] `INSTRUCTOR.officeHours` — update each semester
- [ ] `SCHEDULE.finalExam` — update both COR 1100 and ECO 1000 when Elon posts schedule

---

## HTML pages to build (none yet exist)

Build in this order, using ECO 1000 equivalents as the model:

- [x] `index.html` — course home page
- [x] `schedule.html`
- [x] `assignments.html`
- [x] `checkins.html`
- [ ] `puzzles.html`
- [ ] `tms.html`
- [ ] `friday.html`
- [ ] `chapters.html` — Hanley chapter list with Perusall links (no Cengage)
- [ ] `syllabus.html`

---

## Key differences from ECO 1000 to watch when building HTML

- Sessions use `chapters: []` array (not a single `chapter:` string key)
- No `QUESTIONS` block — no application block, no vote
- `TEXTBOOK` has `perusallUrl` not `ebookUrl`
- New `SOURCE_TEXT` block (Smith, TMS) — referenced in tms.html
- `CHAPTERS.all` replaces `CHAPTERS.core` + `CHAPTERS.application`
- Puzzle titles include full chapter titles, not just a topic phrase
- Perusall grading policy TBD — currently listed as ungraded in config
- **"MME" is never used** — all JS keys, labels, and page names use `tms` / TMS throughout (`CANVAS.tms`, `session.tmsFF`, `tmsUrl`, `tms.html`)
