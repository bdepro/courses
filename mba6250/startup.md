# MBA 6250 — Session Startup Notes

## What exists (as of May 26, 2026)

Three files are complete and committed:

| File | Status |
|------|--------|
| `config.js` | ✅ Complete — single source of truth for all pages |
| `index.html` | ✅ Complete — graduate-level homepage |
| `syllabus.html` | ✅ Complete — full two-column syllabus |

---

## Design decisions (do not relitigate)

**Typography:** Playfair Display (headings) + Inter (body). Deliberately more executive than ECO 1000's Roboto-only treatment.

**Colors:** Same Elon crimson `#73000a` / gold `#b59a57` brand, but darker header gradient (`#3a0005 → #73000a`) and more restrained card surfaces. No playful colors.

**Assessment structure (locked):**
- Case Analyses — 40% (10 cases, one per module, ~400–600 words + quant work)
- Problem Sets — 30% (MindTap, one per module, graded automatically)
- Executive Memo — 20% (capstone, due Dec 4, prompt released in Module 5)
- Participation — 10% (Moodle discussion boards)

**Grade scale:** A=93+, A−=90, B+=87, B=83, B−=80 (MBA minimum pass), C+=77, C=73, F=below 73.

**Textbook:** Froeb, McCann, Ward & Shor, *Managerial Economics: A Problem Solving Approach*, Cengage, 5th ed. (MindTap).

**AI policy:** Permitted with written disclosure at end of submission. AI especially encouraged for case analysis. Undisclosed use = honor violation.

**Module due dates:** Friday at 11:59 p.m. each week (not noon, unlike ECO 1000 which uses 12:00 p.m.).

---

## 10-module structure

| # | Dates | Topic | Chapters |
|---|-------|-------|----------|
| 1 | Sept 21–27 | The Economic Approach to Decisions | Ch 1, 2 |
| 2 | Sept 28–Oct 4 | Benefits, Costs, and the Margin | Ch 3 |
| 3 | Oct 5–11 | Extent Decisions and Optimal Quantity | Ch 4 |
| 4 | Oct 12–18 | Investment Decisions and Resource Allocation | Ch 5 |
| 5 | Oct 19–25 | Simple Pricing and the Demand Curve | Ch 6 |
| 6 | Oct 26–Nov 1 | Economies of Scale, Scope, and Industry Structure | Ch 7, 8 |
| 7 | Nov 2–8 | Game Theory and Strategic Interaction | Ch 15 |
| 8 | Nov 9–15 | Bargaining, Contracting, and Incentives | Ch 16, 19 |
| 9 | Nov 16–22 | Pricing with Market Power and Price Discrimination | Ch 11, 12 |
| — | Nov 23–27 | **Thanksgiving Break — No Classes** | — |
| 10 | Nov 30–Dec 4 | Information, Risk, and Agency Problems | Ch 17, 18 |

---

## Next session: build these pages in order

### 1. `modules.html` — highest priority
A hub page with 10 module cards. Each card shows:
- Module number + topic
- Date range + due date
- Links to: (a) MindTap problem set, (b) case analysis submission in Moodle, (c) Cengage e-book chapter
- Status indicator (locked / current / completed) — driven by today's date vs. module dates

Pattern to follow: `eco1000-cengage/checklists.html` — but leaner, no step-by-step hand-holding.

### 2. `cases.html` — second priority
A page listing all 10 case analyses with:
- Case title (TBD — see below)
- Module and due date
- Link to Moodle submission activity
- Brief description of the analytical framework required

### 3. `problems.html` — third priority
MindTap problem set hub. Mirrors cases.html structure. Links to Cengage LTI activities (all currently blank in config.js — fill in after Moodle course is registered).

### 4. `memo.html` — fourth priority
Executive Memo assignment page:
- Full prompt + rubric
- Cengage/Moodle submission link
- Guidance on applying multiple frameworks to one decision
- Note: prompt released in Module 5 (Oct 19)

### 5. `schedule.html` — fifth priority
Full calendar view with Elon MBA academic dates overlaid on module schedule.

---

## Content decisions pending

### Case titles (10 needed — all currently "TBD" in config.js)
Each case should:
- Involve a real or realistic firm decision
- Map clearly to the module's chapter framework
- Be discussable in 400–600 words
- Work well with AI-assisted analysis

Suggested approach for next session: draft 10 case scenarios, one per module, drawing from Froeb textbook cases and real-world examples. Run through the humanizer before finalizing.

### Cengage MindTap LTI IDs
All blank in `config.js`. Cannot fill until the Moodle course is registered for Fall 2025. When ready, update the `CENGAGE` block — all pages pull from there automatically.

### Moodle course ID
Also blank. Update `COURSE.courseId` in `config.js` after course setup.

---

## Architecture notes

All pages follow the same pattern as `eco1000-cengage`:
- `<script src="config.js"></script>` at the top
- All dynamic content rendered by JavaScript reading from `COURSE`, `CHAPTERS`, `CENGAGE`, `CASES`, `MEMO`
- `PAGES` object holds all stable GitHub Pages URLs
- No build step — pure HTML/CSS/JS, served via GitHub Pages

To add a new page: create the HTML file, add its URL to `PAGES` in `config.js`, and link to it from `index.html` (add a card) or `modules.html`.

---

## MBA calendar reference (Fall 2025)

- Orientation: Aug 31 – Sept 17
- Classes begin: **Sept 21**
- Drop deadline (W): **Oct 20**
- Registration opens (Winter/Spring): Nov 5
- Thanksgiving break: **Nov 23–27**
- Classes end: **Dec 4**
- Exams: **Dec 7–11**
- Grades due: Dec 16 by noon
