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
First-year seminar modeled on ECO 1000. Same weekly structure, same grading component
names and weights, same HTML framework. Key differences from ECO 1000:

- **Text:** Hanley, *Our Great Purpose* (Princeton UP) — direct PDF links via Canvas Files, no Perusall, no Cengage
- **Source text:** Smith, *Theory of Moral Sentiments* — 4 passages serve as the TMS component
- **No application block** — W12–W13 continue with Hanley chapters through the end
- **25 chapters** — Intro + Ch. I–XXV, Ch. XI omitted (intentionally curated)
- **8 Puzzles** — formative MC quizzes; W7 (Ch. XIII, Mon/Tue only before Fall Break) has no quiz of its own — its content is tested in Puzzle 5 together with W9

**Terminology note (updated 2026-06-24):** the syllabus and `config.js` (`label: "Week N"`) use **Week** (W0–W15), not "Session" (S0–S15). This file previously used "Session" throughout — numbering is unchanged, only the label changed. The JS array is still internally named `SCHEDULE.sessions` and individual chapter entries still carry a `session:` key (e.g. `session: 1`); that internal field name is unaffected by the student-facing label change.

---

## Week and chapter map (locked)

| Week | Dates | Chapters | Event |
|---------|-------|----------|-------|
| W0 | Aug 26–28 | — | Course intro only, no reading |
| W1 | Aug 31–Sep 4 | Intro, Ch. I, II | Puzzle 1 |
| W2 | Sep 7–11 | Ch. III, IV, V | Puzzle 2 |
| W3 | Sep 14–18 | — | CI #1 Wed Sep 16 · TMS 1 launched Fri |
| W4 | Sep 21–25 | Ch. VI, VII, VIII | Puzzle 3 |
| W5 | Sep 28–Oct 2 | Ch. IX, X, XII | Puzzle 4 |
| W6 | Oct 5–9 | — | CI #2 Wed Oct 7 · TMS 2 launched Fri |
| W7 | Oct 12–13 | Ch. XIII | PDF reading only — no separate quiz; tested in Puzzle 5 with W9 |
| W8 | Oct 14–18 | — | Fall Break |
| W9 | Oct 19–23 | Ch. XIV, XV, XVI | Puzzle 5 (covers Ch. XIII–XVI, incl. W7) · TMS 3 launched Fri |
| W10 | Oct 26–30 | Ch. XVII, XVIII, XIX | Puzzle 6 |
| W11 | Nov 2–6 | — | CI #3 Wed Nov 4 · TMS 4 launched Fri |
| W12 | Nov 9–13 | Ch. XX, XXI, XXII | Puzzle 7 |
| W13 | Nov 16–20 | Ch. XXIII, XXIV, XXV | Puzzle 8 |
| W14 | Nov 23–27 | — | Thanksgiving Break |
| W15 | Nov 30–Dec 4 | — | Viva week · CI #4 Fri Dec 4 |

---

## Grading (locked — same weights as ECO 1000)

| Component | Weight | Key rule |
|-----------|--------|----------|
| Check-Ins | 50% | CI 4 always counts; replaces lowest of CI 1–3 if higher |
| Friday Focus | 25% | Narrative due Wed Dec 2 · viva during viva week · focus on Hanley/Smith |
| Puzzles | 15% | 8 quizzes, lowest dropped; late within 1 week = 80% |
| TMS | 10% | 4 TMS passages; introduced Fri of W3, W6, W9, W11 |

All readings and quizzes due Wednesday 11:59 p.m. of each week.

---

## config.js — what still needs to be filled in

- [ ] `CHAPTERS.threads` — standing analytical threads for every CI (not yet decided)
- [ ] `CHAPTERS.all[*].fileId` — 24 Canvas Files file IDs, once that term's chapter PDFs are uploaded
- [ ] `CANVAS.tms[*].title` and `.url` — 4 TMS passage titles and Canvas URLs
- [ ] `CANVAS.puzzles[*].url` — 8 quiz URLs
- [ ] `CANVAS.checkIns[*].url` — 4 check-in URLs
- [ ] `CANVAS.friday[*].url` — narrative submission + Canvas Scheduler URL
- [ ] `CANVAS.viva.*` — all viva week URLs
- [ ] `PAGES.aiAssignments` — COR 1100 AI assignment URL (page not yet built)
- [ ] `INSTRUCTOR.officeHours` — update each semester
- [ ] `SCHEDULE.finalExam` — update both COR 1100 and ECO 1000 when Elon posts schedule

---

## HTML pages to build (none yet exist)

Build in this order, using ECO 1000 equivalents as the model:

- [x] `index.html` — course home page
- [x] `schedule.html`
- [x] `assignments.html`
- [x] `checkins.html`
- [x] `puzzles.html`
- [x] `tms.html`
- [x] `friday.html`
- [x] `chapters.html` — Hanley chapter list with direct PDF links (no Cengage, no Perusall)
- [x] `syllabus.html`

---

## Key differences from ECO 1000 to watch when building HTML

- Each week (config key `session`) uses a `chapters: []` array (not a single `chapter:` string key)
- No `QUESTIONS` block — no application block, no vote
- `TEXTBOOK` has no platform/ebook URL field — chapters are individual PDFs (see `CHAPTERS.all[*].fileId`), not a single textbook platform link
- New `SOURCE_TEXT` block (Smith, TMS) — referenced in tms.html
- `CHAPTERS.all` replaces `CHAPTERS.core` + `CHAPTERS.application`; each entry's `.url` is built from `fileId` via `FILE_URL()`, a Canvas Files link — not `ASSIGNMENT_URL()` like puzzles/TMS
- Puzzle titles include full chapter titles, not just a topic phrase
- Readings are ungraded (ungraded.id: "readings") — comprehension is checked via guided notes + the week's Puzzle instead of a Perusall annotation requirement
- **"MME" is never used** — all JS keys, labels, and page names use `tms` / TMS throughout (`CANVAS.tms`, `session.tmsFF`, `tmsUrl`, `tms.html`)
- **No Perusall** (decided 2026-06-25) — readings are direct PDF links via Canvas Files, not an annotation-tool LTI assignment
- **Guided notes submission architecture** (decided 2026-06-25): `chapters.html` now shows 3 pills per chapter row — Guided Notes, Open Chapter (PDF), Submit Notes — plus the submit button is duplicated on each guided-notes HTML page itself, right before the footer. See `GUIDED_NOTES` in `config.js` for the 8-document grouping (NOT one per chapter — several documents span multiple chapters, e.g. w07-09 covers Ch. XIII-XVI). Grading mechanic mirrors ECO 1000's proven 0-points-possible add-only bonus (see project memory "ECO 1000 Guided Notes Bonus Policy"): 2 pts on time, 1.6 pts late. Submit pill + "Covers Ch. X, Y, Z" note appear ONLY on the last chapter of each block (`item.notesCoversLabel` in `config.js`), not on every chapter in the span — avoids implying students must submit per chapter.
- **Both syllabi document the Guided Notes bonus** (2026-06-25) — ECO 1000 already had it (Puzzles section); added the matching blurb to COR 1100's Puzzles section.
- **All Canvas IDs filled in (2026-06-25):** `COURSE.canvasId` confirmed "920". All 25 `CHAPTERS.all[*].fileId` filled from the `hanley-chapters` Canvas Files folder (folder id 23058) via `GET /api/v1/folders/23058/files`. All 8 `GUIDED_NOTES[*].aid` filled in as 9067-9074 (sequential, W1→W13 order). Files are flagged `hidden: true` in Canvas — expected for link-only distribution, but worth a one-time student-view sanity check that the links actually load.

---

## Session log

### 2026-06-25 — Guided notes reconciled with mcq-bank Ch. 22 correction

After the mcq-bank repo built Ch. 22's MCQ bank + instructor manual (it had been mistakenly treated as skipped) and fixed Ch. 23's instructor manual to correctly credit Ch. 22 with introducing the absolute/relative perfection distinction, the COR 1100 guided notes were audited and reconciled to match:

- **Confirmed clean, no changes:** W1–W5, W7–09, W10's content, Puzzles 1–4, Puzzle 5 — none touch the affected chapters.
- **Fixed:** `w10-guided-notes.html` footer's stale "next lecture" line claimed Ch. XXII wasn't assigned — corrected to list Ch. XX, XXI, XXII.
- **Rebuilt:** `w12-guided-notes-draft.md` + `.html` — previously only covered Ch. 20–21 as a 2-chapter week (flagged "NEEDS UPDATE"). Added a full Part III for Ch. 22 (cues, Matrix 3, new Key Terms, new Pitfalls rows) and expanded the week to the standard 3-chapter shape: 3 Learning Targets, 12 Key Terms, 6 Pitfalls rows. New name used: Solveig. Verbatim-audited against `mcq-bank/cor1100/ch22-on-perfection/perfection-and-social-harmony/formative.md`.
- **Corrected:** `w13-guided-notes-draft.md` + `.html` previously presented the absolute/relative perfection distinction as if Ch. 23 introduced it. Fixed Learning Target 1, the two perfection rows in Key Terms, the Part I connection-note, Part I's Apply cue, Matrix 1's caption (draft only), and a Common Pitfalls row to correctly credit Ch. 22 as the distinction's origin, with Ch. 23 applying it to wisdom specifically.

No further guided-notes follow-up pending. Course-site chapter/week mapping in `config.js` was already correct from the prior correction session.

### 2026-06-25 — Name pronunciation/origin glossary added to all guided notes

This is a global-experience class with students from varied backgrounds, and the third-person scenario names used across the guided notes (drawn from `mcq-gen`'s diverse name pool, per-week, never repeating the immediately preceding week's names) may be unfamiliar. Added a "Names in This Week's Notes" table to the end of every week's guided notes (draft `.md` and `.html`), listing each name's plain-phonetic pronunciation and the country/region it's common in. Per-week (not cumulative) — each week only lists its own names.

Full corpus audited directly against each file's Core Content and Reflect & Apply sections (not just the "Verbatim Audit Record" notes, which undercounted names in a couple of files — W01's "Caleb" and W07-09's "Imara"/"Tamsin" were missed by the audit notes but caught here):

- W01: Aditi (India), Soren (Denmark, Norway), Caleb (United States)
- W02: Briony (England), Kemal (Turkey), Niamh (Ireland), Anton (Germany, Russia, Scandinavia)
- W04: Zara (UK, Middle East, South Asia), Bilal (Arabic-speaking world), Constance (England, France), Edvard (Norway, Sweden)
- W05: Petra (Germany, Czech Republic), Rohan (India), Ilse (Germany, Netherlands), Saoirse (Ireland)
- W07-09: Mireille (France), Imara (East Africa), Tamsin (England), Bram (Netherlands, Belgium)
- W10: Linnea (Sweden), Roshan (Iran, India, Pakistan), Selma (Sweden, Bosnia, Turkey), Nikos (Greece)
- W12: Adaora (Nigeria), Eero (Finland), Casimir (Poland), Solveig (Norway)
- W13: Vesna (Croatia, Serbia, Slovenia), Zinnia (US, UK, India), Anouk (France, Netherlands), Dashiell (United States)

New section sits between Reflect & Apply and the Footer in each document, styled as a standard `.section-block` (no new CSS needed).
