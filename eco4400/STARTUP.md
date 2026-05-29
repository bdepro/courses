# ECO 4400 — Applied Economics & Consulting
## Course Site — Session Notes & Status

**Last updated:** 2026-05-28 (session 2)  
**Repo:** `repos/courses/eco4400/`  
**Live URL (when deployed):** `https://bdepro.github.io/courses/eco4400/`

---

## Files Built

| File | Status | Notes |
|---|---|---|
| `config.js` | ✅ Done | Course metadata, both instructors, schedule array, grade weights, page URLs |
| `index.html` | ✅ Done | Hub page — header slimmed (no instructor cards); primary card → schedule; Sustainable Alamance card has both pills; stat cards removed |
| `syllabus.html` | ✅ Done | 10-section syllabus, M/W schedule table, SLO table, policies |
| `project.html` | ✅ Done | Sustainable Alamance — phases, tools, deliverables table |
| `assignments.html` | ✅ Done | Three category blocks with individual assignment cards |

---

## Design Decisions Made

- **Style system:** Follows ECO 1000 (`eco1000-cengage/`) exactly — same CSS tokens, card system, typography, Roboto font, crimson/gold palette.
- **Header:** Compact — course-code, h1, header-meta, designation pills only. Instructor cards removed from header (info lives in syllabus).
- **Designation pills:** Both **Data Intensive** and **Community Engaged** use `--teal` (#527b82). Pills appear in the header and on the Sustainable Alamance grid card.
- **Primary card:** Links to `syllabus.html` ("How is the semester organized?") — calendar icon, schedule framing. Sustainable Alamance is a grid card, not the primary.
- **Instructor cards:** Parallel fields — Office / Email / Phone / Hours / Zoom — in both cards. Hawkins Zoom is `TBD` (placeholder).
- **No skeleton notes, no review guides, no exams** — upper-division course, none of those page types exist here.
- **M/W schedule:** Schedule table uses Monday / Wednesday columns (not the session-based format in ECO 1000).
- **Footer:** Course name + semester only. No email links.

---

## What's Left (Priority Order)

1. **`syllabus.html`** — review content, apply same header/pill pattern as index
2. **`project.html`** — review content, add CE pill where appropriate
3. **`assignments.html`** — review content, add due dates when known
4. **Shared pages** — confirm `shared/ai-policy.html` and `shared/support.html` are current
5. **GitHub Pages deploy** — verify `bdepro.github.io/courses/eco4400/` resolves correctly
6. **`config.js` UPDATE items** — fill in actual section meeting times, Hawkins Zoom, Canvas course ID, drop/add dates once known

---

## Key Contacts

| | |
|---|---|
| Brooks Depro | bdepro@elon.edu · KoBC 122 · 919-357-2316 |
| Devon Hawkins | dhawkins5@elon.edu · KoBC 120 · (336) 278-5977 |

---

## Course Designations

- **Data Intensive** — SLOs 2, 3, 4, 5 (SLO 2 is anchor)
- **Community Engaged** — Sustainable Alamance project is the CE component

---

## Notes for Next Session

- **Start with `syllabus.html`** — header needs to match the updated index (compact: no instructor cards, pills only). Instructor cards from the old index header should move into the syllabus header or a dedicated section there.
- The draft HTML syllabus (`Downloads/(HTML-for-Canvas)_Draft Syllabus ECO 4400...html`) was the primary content source
- The older docx (`Consulting ECO 4400 (Depro Fall 26) LMS.edited.docx`) has a slightly different chapter order — the HTML draft takes precedence
- Hawkins office hours format ("By appointment") is intentional — no fixed schedule
