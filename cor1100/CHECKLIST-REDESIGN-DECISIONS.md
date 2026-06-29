# COR 1100 Checklist Redesign — Decision Log

Follow-on to ECO 1000's checklist redesign
(`../eco1000/CHECKLIST-REDESIGN-DECISIONS.md`), which that log's "Open items"
section flagged as not yet started. Same goal: replace the single-page
accordion `schedule.html` with a `checklist.html` index + one page per week,
sharing ECO 1000's now-proven template (header, story band, due banner,
check-items with checkbox/title/description/tag/link). COR 1100 keeps its
own content — Hanley/Smith readings, Check-Ins, Puzzles, Theory of Moral
Sentiments (TMS), Friday Focus/viva, Guided Notes — none of ECO 1000's
specific task types (Cengage e-book, MME, Economic Puzzles) port over.
Only the page shape ports.

## Audit — current COR 1100 structure vs. ECO 1000's new pattern

**Already matches / already fixed independently:**
- Guided Notes bonus policy already mirrors ECO 1000's design (optional,
  add-only, same late-credit math) — no change needed.
- "Friday Focus" is already the only name used in student-facing text for
  the Eli-equivalent flow. There is in fact no Eli Review platform in COR
  1100 at all — viva sign-up runs through the native Canvas Scheduler, not
  Eli — so the "never name Eli" rule from ECO 1000 decision #12 has nothing
  to apply to here. Confirmed by grep: zero matches for "Eli" anywhere in
  the COR 1100 folder.
- `chapters.html` is already a promoted, ungated home-page card
  (`FEATURES.chapters: true`), same end state ECO 1000 reached for its
  e-book chapters page.

**Gaps — same shape as ECO 1000's pre-redesign state:**
1. `schedule.html` is the same old single-page accordion ECO 1000 deleted —
   same CSS architecture (`.session-card`, `.session-toggle` accordion,
   `.module-banner`, ten-ish tag colors), same job-mixing problem (due dates
   + Mon/Wed/Fri in-class plan on one page). No `checklist.html` or
   `checklist/week*.html` exist yet.
2. `assignments.html` duplicates `syllabus.html` Section 6 exactly the way
   ECO 1000's did (same weight bar, same per-category prose, same grading
   table) — confirmed by reading both. Its four gated sub-pages
   (`checkins.html`, `puzzles.html`, `tms.html`, `friday.html`) are **not**
   redundant, same reasoning as ECO 1000 decision #20: each has a
   full-semester list view the week-by-week checklist won't show all at
   once, and `friday.html` has the actual assignment prompt. Their
   `ALL_CARDS` entries in `index.html` already exist fully authored, gated
   behind `FEATURES.checkins/puzzles/tms/friday: false` — this is a flag
   flip, not a rebuild, exactly like ECO 1000's fix.
3. No `office-hours.html` and `FEATURES.officeHours: false` — same gap ECO
   1000 had (decision #11). `INSTRUCTOR.officeHours` already holds a real
   string (in-person Mon/Wed + Zoom Tue/Thu), so this is buildable now.
4. `PAGES.canvasHome` does not exist in `config.js` at all (confirmed by
   grep — ECO 1000 has it, COR 1100 doesn't). Every back-link in COR 1100
   currently points to `PAGES.home` (bare GitHub Pages, no Canvas chrome) or
   `PAGES.assignments`, never to the real Canvas course page. This is a
   bigger gap than ECO 1000's item #17 — COR 1100 needs the convention
   *introduced*, not just one page corrected.
5. No `checklist/final-exam.html` equivalent — the three-population
   worksheet/CI4/viva logic currently lives entirely inside `schedule.html`'s
   viva-week accordion body and the always-rendered "final exam period"
   flow cards, same as ECO 1000's old `schedule.html` before decision #15.

## COR 1100's actual weekly task shape (for the per-week template)

No Cengage, no MME, no Economic Puzzles. Real task types, mapped from
`config.js`:
- **Reading** — one Hanley chapter PDF per `CHAPTERS.all` entry (`ch.url`),
  3 chapters per typical content week.
- **Guided Notes** — optional, bonus-only, one doc per `GUIDED_NOTES` entry
  spanning multiple chapters (`guidedNotesUrl` on first chapter,
  `notesSubmitUrl` on last) — same optional/bonus check-item shape as ECO
  1000's `ch4-notes` item.
- **Puzzle** — one per content week via `CANVAS.puzzles`, due date from
  `formatPuzzleDue()`. No puzzle in Week 7 (Ch. XIII tested in Puzzle 5 with
  Week 9 instead).
- **Check-In** — in-class, pen-and-paper, no Canvas link at all (unlike ECO
  1000's MME, which does link). Just a check-item with no `.check-link`.
- **TMS passage** — `CANVAS.tms`, introduced Friday of a check-in week, due
  the following Wednesday. Same role as ECO 1000's MME but a different
  cadence (4 passages total, not introduced every check-in week — only 3 of
  the 4 check-in/viva weeks introduce one).
- **Friday Focus** — `CANVAS.friday`, written narrative (due Wed Dec 2) +
  viva conversation (sign-up via native Canvas Scheduler, two links: viva
  week or exam period, same appointment group).
- **Viva week worksheet** (non-viva-day) — same "not in the chair today?"
  pattern as ECO 1000 decision #16, pulls from `CANVAS.viva.worksheetUrl` /
  `worksheetSubmitUrl`.
- **Final exam period** — three populations identical in shape to ECO
  1000's `final-exam.html`, sourced from `SCHEDULE.finalExamPeriod` and
  `CANVAS.viva.examWorksheetUrl` / `examWorksheetSubmitUrl`.

Session shape differs from ECO 1000 in two structural ways worth flagging
before building:
- Week 0 is Wed/Fri only (no Monday), same as ECO 1000's intro week.
- Week 7 is Mon/Tue only (no Wednesday, no Friday) — Fall Break starts
  Wednesday that week. This is a COR-1100-specific shape with no ECO 1000
  analog; the week-7 page needs its own due-banner logic (nothing due that
  week, no puzzle, reading tested later).

## Small fixes — built and verified

User chose to do the small, independent fixes first and tackle the
checklist build as a separate pass. All four verified live via
cache-bypassed fetch against the local preview server (not a full
preview-navigate-screenshot cycle, since these are logic/data-binding
changes, not visual ones).

22. **Added `PAGES.canvasHome`** to `config.js` (gap #4). Repointed the
    back-links on every top-level page — `schedule.html`, `syllabus.html`,
    `chapters.html` — from `PAGES.home` to `PAGES.canvasHome`. Verified all
    three resolve to `PAGES.canvasHome` via fetch + isolated eval against
    the live server.

23. **Deleted `assignments.html`; promoted its four sub-pages to home-page
    cards** (gap #2), exact same move as ECO 1000 decision #20. Flipped
    `FEATURES.checkins/puzzles/tms/friday` to `true`, removed the
    `assignments` entry from `FEATURES`/`PAGES`/`ALL_CARDS`, deleted the
    file, repointed `checkins.html`/`puzzles.html`/`tms.html`/`friday.html`
    back-links to `PAGES.canvasHome`. One reference `assignments.html`
    didn't have in ECO 1000: `schedule.html`'s course glossary linked
    "Friday Focus details" to `PAGES.assignments` — repointed to
    `PAGES.friday` (the actual page with that content) before deleting,
    rather than leaving a dead link. Verified zero remaining references to
    `assignments.html` or `PAGES.assignments` repo-wide (excluding this log
    and `startup.md`'s historical build checklist) before deleting, same
    audit discipline as ECO 1000 decision #10.

24. **Built `office-hours.html` from scratch** (gap #3), same call as ECO
    1000 decision #11 — minimal, factual-only (hours, KoBC 122, Zoom link,
    email, phone), pulling straight from `INSTRUCTOR.*` fields that already
    held real Fall 2026 values. Added `PAGES.officeHours`, flipped
    `FEATURES.officeHours` to `true`. **Difference from ECO 1000:** ECO
    1000's version lives as a footer card inside `checklist.html` (back-link
    points to `PAGES.checklist`). COR 1100 has no `checklist.html` yet, so
    this version is a home-page card instead (back-link points to
    `PAGES.canvasHome`) — flagged below to revisit once the checklist build
    lands.

## The big build — checklist.html + 14 week pages + final-exam.html

Built in one pass: `checklist.html` index, `checklist/week0.html` through
`week13.html`, `week15.html`, and `checklist/final-exam.html` — 16 files
total, using the identical shared template (header, story band, due
banner, check-items) verified in ECO 1000, filled entirely with COR
1100's own tasks. `schedule.html` deleted afterward; `index.html`'s
primary card repointed from `PAGES.schedule` to `PAGES.checklist`,
`FEATURES.schedule` and `PAGES.schedule` removed from `config.js` —
same end state as ECO 1000 decision #10.

25. **TMS overlay weeks.** TMS passages don't only launch/come due on
    check-in weeks the way ECO 1000's MME did — TMS 3 is introduced in
    Week 9 and due in Week 13, both ordinary content weeks. Built both
    pages as normal content-week templates (3 chapters, guided notes,
    puzzle) with one extra check-item folded in for the TMS launch (Week
    9) or TMS due (Week 13), rather than forcing them into the check-in
    template shape. Confirmed the full TMS session/dueSession mapping
    against `config.js` before writing any week page: introduced Friday
    of weeks 3, 6, 9, 11; due Wednesday of weeks 6, 11, 13, 15.

26. **Week 7 has no puzzle of its own.** Mon/Tue only before Fall Break;
    Ch. XIII is tested later in Puzzle 5 together with Week 9's chapters.
    Week 7's page has a single read item and an explicit note that there's
    no puzzle this week — Puzzle 5 lives on Week 9's page instead, with a
    check-item description naming both weeks' chapters.

27. **Double-period bug recurred immediately**, same root cause flagged in
    ECO 1000's log: `CANVAS.tms[].due` already ends in "p.m." and four
    week pages (3, 6, 9, 11) appended a literal `.` after it in the
    TMS-launch description. Caught via a cache-bypassed fetch + live DOM
    check on week9 (`tmsDesc` read "...p.m.." in the rendered text), then
    grepped all of `checklist/` for the same `${...due}.` pattern and
    fixed all four instances. Re-verified via fetch that no file contains
    the literal string "p.m.." anywhere.

28. **Verification approach**: cache-bypassed fetch + isolated eval against
    the local preview server for all logic/data-binding checks (config
    values, all 16 files returning 200, no leftover ECO 1000 terminology
    via a keyword sweep, due-date/tag text on the three TMS-overlay weeks
    and the final-exam page). The `preview_screenshot` tool itself timed
    out repeatedly in this session for tooling reasons unrelated to the
    page (no console errors, `document.title` and DOM queries worked
    fine) — a true visual screenshot was not obtained this session. Risk
    is low since the CSS is byte-identical to ECO 1000's already
    visually-verified template, but this should be confirmed with a real
    screenshot in a future session before calling the visual layer done.

## Open items

- **Get a real screenshot of `checklist.html` and at least one week page**
  once the preview tool is working again — not done this session due to a
  tooling timeout, not a known code issue.
- ~~Office Hours card placement~~ — resolved. ECO 1000 never put it on the
  home page at all; it only lives as `checklist.html`'s footer card
  (`FEATURES.officeHours` isn't used as a card gate there). Removed the
  duplicate card from COR 1100's `index.html` — `checklist.html` already
  had the matching footer card built in from the original build. Verified
  live: home page no longer lists it, `checklist.html`'s office card
  still resolves to `office-hours.html`.
- **TMS assignment IDs (`aid`) are still empty** in `config.js` for all
  four passages — links correctly render as inactive/hidden rather than
  broken, but will need filling in once those Canvas assignments exist.
- **`CANVAS.tms[].title` fields are still empty** for all four passages —
  pages fall back to "Theory of Moral Sentiments — Passage N" until real
  titles are set.
