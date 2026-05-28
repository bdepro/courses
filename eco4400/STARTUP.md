# ECO 4400 — Applied Economics & Consulting
## Course Site — Session Notes & Status

**Last updated:** 2026-05-28  
**Repo:** `repos/courses/eco4400/`  
**Live URL (when deployed):** `https://bdepro.github.io/courses/eco4400/`

---

## Files Built

| File | Status | Notes |
|---|---|---|
| `config.js` | ✅ Done | Course metadata, both instructors, schedule array, grade weights, page URLs |
| `index.html` | ✅ Done | Hub page — reviewed and tweaked in session |
| `syllabus.html` | ✅ Done | 10-section syllabus, M/W schedule table, SLO table, policies |
| `project.html` | ✅ Done | Sustainable Alamance — phases, tools, deliverables table |
| `assignments.html` | ✅ Done | Three category blocks with individual assignment cards |

---

## Design Decisions Made

- **Style system:** Follows ECO 1000 (`eco1000-cengage/`) exactly — same CSS tokens, card system, typography, Roboto font, crimson/gold palette.
- **Header:** Matches ECO 1000 header pixel-for-pixel (`course-code` 0.72rem/500 weight, `h1` weight 500, `header-meta` 0.88rem/300 weight). Two instructor cards added below the header-meta line.
- **Designation pills:** Both **Data Intensive** and **Community Engaged** use `--teal` (#527b82). Pills appear in the header and on the Sustainable Alamance primary card.
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

- Start with syllabus.html — same header/pill tweaks applied to index need to carry over
- The draft HTML syllabus (`Downloads/(HTML-for-Canvas)_Draft Syllabus ECO 4400...html`) was the primary content source
- The older docx (`Consulting ECO 4400 (Depro Fall 26) LMS.edited.docx`) has a slightly different chapter order — the HTML draft takes precedence
- Hawkins office hours format ("By appointment") is intentional — no fixed schedule
