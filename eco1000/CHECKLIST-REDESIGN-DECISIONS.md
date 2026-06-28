# Checklist Redesign — Decision Log

Tracking decisions for replacing `schedule.html`'s accordion schedule with a
`checklist.html` index page + one page per week, modeled on the
`eco1000-cengage` course's `checklists.html` / `checklist/week*.html` pattern.
ECO 1000 fall is the pilot; COR 1100 follows once this is proven out.

## Why this change

The current `schedule.html` is a single dense accordion page mixing two jobs:
(1) what's due and when, and (2) the in-class Mon/Wed/Fri meeting plan
(skeleton notes, print-before-Wednesday warnings). It also uses ~10 distinct
tag colors (checkin/viva/app/break/mme/vote/due/screensdown/action/current),
which reads as busy next to the Cengage course's checklist, which runs on
essentially two colors (crimson, gold) plus neutrals.

## Locked decisions

1. **Structure: index + per-week pages**, not a single page.
   `checklist.html` becomes a landing/index page linking to a separate file
   per week (`checklist/week0.html` ... `checklist/week15.html`), mirroring
   the literal Cengage file structure rather than keeping everything on one
   scrollable page. Bigger build than Cengage's 3-week version (ECO 1000 fall
   has 16 sessions across content/check-in/application/viva/intro types) but
   matches the original direction once the one-page alternative was compared
   against it.

2. **Index visuals match Cengage's `checklists.html` exactly** — same
   crimson (#73000a) / gold (#b59a57, #d4b97a, #7a5c1e) palette, same card
   anatomy (left accent stripe + body), same typography scale. This directly
   addresses the "Cengage looks cleaner, fewer colors" feedback that started
   this redesign.

3. **Break weeks (Fall Break, Thanksgiving) stay visible** as plain divider
   rows in the list, rather than being omitted the way Cengage's 3-week
   version simply has no breaks to model.

4. **Current week gets a teal highlight** (background + border, same teal
   #527b82 already used for "current" in the old `schedule.html`), not a
   third tag color — reuses an existing accent rather than introducing a new
   one.

5. **Footer card = Office Hours**, matching Cengage's footer card exactly.
   **Action required:** `FEATURES.officeHours` is currently `false` in
   `config.js` for the fall course (commented "not used in face-to-face
   course" — same comment pattern as `FEATURES.checklist: false`). Need to
   flip this flag and confirm `office-hours.html` (built for the Cengage
   course) actually works for ECO 1000 fall before wiring this for real.

6. **Index cards are bare navigation — no due-line, no working-on line.**
   Considered three densities (full due+working-on text, due-line only, bare
   nav) and chose bare: title, chapter badge, dates only. The destination
   week page owns all status/due information. This also sidesteps a real bug
   class: an earlier draft put a clickable due-item link inside the
   card-as-link, which is a nested-anchor problem and is suspected to be why
   the host's link-interception broke the mockup's layout. With cards as
   pure navigation (one link target each), that risk goes away entirely.

7. **(Superseded by #6, kept for the per-week pages)** If a week page needs
   to distinguish "this week's new work" from "what's actually due
   Wednesday," do it as two separate lines: a neutral working-on line (no
   date pressure, e.g. "read Ch. 4 · puzzle assigned, due next week") versus
   a due line that only appears when something has a real deadline that
   week (e.g. "Due: Week 4 puzzle · Wed Sep 30"). Due dates must be computed
   from existing config.js logic (`puzzleDueDate()`, `CANVAS.mme` filtered by
   `dueSession`, `CANVAS.checkIns`) — never hand-typed, since ECO 1000's
   puzzle-due-date offset (puzzle for week N due week N+1, with a break-week
   shift rule) is exactly the kind of thing that's easy to get wrong by hand.
   Caught a real error this way: a mockup labeled an item "Puzzle 4 due Wed"
   when the data has no sequential puzzle numbering (puzzles are identified
   by session/week number, e.g. "Week 4 puzzle") and the actual due date was
   Wed Sep 30, not just "Wed."

8. **One shared template for every week type — content, check-in,
   application, and viva all use the identical CSS and check-item structure**
   from `checklist/week4.html` (header, story-band, due-banner, a labeled
   block of check-items with checkbox + title + description + tag + link).
   The original assumption was that check-in/application/viva weeks would
   need a structurally different page shape, since an exam day or a viva
   slot isn't a reading assignment. That assumption was wrong: the check-item
   shape is generic enough to represent any single action (read a chapter,
   take an exam, attend an appointment) just by varying the title, tag text,
   and whether a link exists. No new tag colors were added — exam/MME/Eli
   items all reuse the existing `tag-submit` (crimson) or `tag-puzzle`/
   `tag-read` (gold) classes. Built and verified live: `week4.html` (content),
   `week6.html` (check-in, the busiest real week — puzzle, MME, two Eli
   tasks, and the exam all land the same week), `week12.html` and
   `week13.html` (application, including the Thanksgiving break-shifted
   puzzle due date), and `week15.html` (viva).

9. **All student-facing prose runs through the BD voice guide and structural
   AI-tells checklist before being marked done**
   (`repos/voice/BD-Voice.md`, `repos/voice/references/structural-ai-tells.md`).
   Caught and fixed on the first pass: connector em-dashes (the original
   week4 draft had four in a handful of short paragraphs), a colon-list of
   three parallel items, a "what X and what Y" double relative clause, and a
   negative-parallelism tail ("can only help, never hurt"). Applied
   proactively while drafting week6/12/13/15, not just as an after-the-fact
   cleanup pass.

## Bugs caught during build (for awareness, not action)

- **Double-period bug**: `formatPuzzleDue()` and `CANVAS.mme[].due` already
  end in "p.m." (the abbreviation's own period). Appending a template-literal
  period after them for sentence-ending punctuation produces "p.m.." Hit
  this independently in week4, week12, week13, and week15 — worth remembering
  for any future week page: never add a literal `.` immediately after one of
  these computed due-date strings.
- **Preview-tool caching**: the sandboxed preview proxy served a stale copy
  of `config.js` across several server restarts and cache-busted fetches
  while building this feature. Confirmed via direct disk `grep` that the
  actual files were correct; not a real product bug, just a quirk of this
  tool. If a future session sees config.js changes "not showing up" in
  preview, check disk first before assuming the edit failed.

## Build complete

10. **`schedule.html` deleted; full replacement, not a parallel page.**
    Resolves open item from earlier in this log. Every reference was found
    and repointed first: `index.html`'s home card (`scheduleCard` →
    `checklistCard`, now linking to `checklist.html`), `config.js`
    (`FEATURES.schedule` removed, `FEATURES.checklist` flipped to `true`,
    `PAGES.schedule` removed, stale comments mentioning `schedule.html`
    updated). Confirmed zero remaining references repo-wide before deleting
    the file.

11. **Office Hours page built from scratch** (`office-hours.html` did not
    exist for the fall course — only `INSTRUCTOR.officeHours` as a plain
    schedule string). Asked the user how to handle this rather than porting
    the Cengage course's version, since that page describes a Zoom-only,
    email-before-joining policy that doesn't match the fall course's
    in-person + Zoom setup. Built a minimal, factual-only page (hours,
    KoBC 122, Zoom link, email/phone) with no invented sign-up policy. Added
    `PAGES.officeHours` to config.js, which didn't exist before.

12. **Never name the "Eli" platform in student-facing text.** All Friday
    Focus / Economic Narrative steps refer only to "Friday Focus" and the
    specific step name (Draft, Revision Plan, Revision, Peer Review) —
    never "Eli" or "Eli Review." Underlying links still point to
    elireview.com; only the visible label changed. `CANVAS.eli` as a
    config.js variable name is internal and not visible to students, so it
    was left as is.

13. **All 14 week pages built** (0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13,
    15) plus the real `checklist.html` index, using the single shared
    template proven out earlier in this log. Every due date, link, and
    chapter reference is computed from `config.js` — nothing hand-typed.
    Cross-checking `puzzleDueDate()` against actual week date ranges while
    building caught three pages (week5, week9, week10, week11) where a
    puzzle from the previous content session is due *that* week, not "next
    week" as initially assumed — confirms why deriving from config rather
    than eyeballing dates matters.

14. **Voice and structural-AI-tells check applied to every new page during
    drafting**, not after. Caught one real miss on the final sweep: a
    colon-list of three parallel items in week11's story band ("covers three
    chapters at once: business cycles, growth, and trade"), fixed to a plain
    sentence. A second real bug surfaced by the same grep sweep: the
    double-period bug (see below) had silently reappeared in week4's due
    banner despite being fixed earlier in this log — worth treating as a
    pattern that needs a final grep pass even after individual fixes, since
    it can resurface across edits.

15. **Final Exam Period gets its own page.** The old `schedule.html` handled
    this entirely inside the always-visible Module 4 banner's decision-rows
    table (three populations: worksheet-only, Check-In #4 only, or viva +
    Check-In #4). That logic was dropped when the index was rebuilt, since
    it only got a brief mention inside week15 (Viva Week). Built
    `checklist/final-exam.html` using the same shared template — three
    check-items, one per population, descriptions and links pulled from
    `SCHEDULE.finalExamPeriod` and `CANVAS.viva` (`examWorksheetUrl`,
    `examWorksheetSubmitUrl`, `examPeriodSignupUrl`), not hand-typed. Added
    to the index as a 15th card after a "Final Exam Period" divider (reusing
    the break-row style for the divider, since it isn't a class week but
    also isn't a "no class" break). Note: this card never gets the
    teal "Current" highlight, since `SCHEDULE.finalExamPeriod` only has
    display-string dates (`"Wed Dec 9, 2026"`), not a parseable `Date`
    object like `SCHEDULE.sessionStarts` — would need a config.js change to
    support auto-highlighting this entry, not attempted here.

16. **Viva Week's non-viva-day worksheet item was also missing.** Same root
    cause as #15 — the old `schedule.html` covered "not in the viva chair
    today? work through the CI 4 review worksheet" inside the viva-week
    Mon/Wed day-sections, and that detail didn't make it into `week15.html`
    when first built. Added a `viva-worksheet` check-item between the viva
    sign-up item and the Check-In #4 item, pulling from
    `CANVAS.viva.worksheetUrl` / `worksheetSubmitUrl` (distinct fields from
    the final-exam-period worksheet URLs in #15 — easy to confuse since both
    are called "worksheet" but apply to different weeks and different
    student populations). Verified correct via a cache-bypassed fetch
    directly against the live server, since the preview browser tab was
    serving a stale cached copy of week15.html itself this time (the same
    sandbox quirk as the config.js caching noted earlier, just on an HTML
    file instead of a script).

## Audit against the deleted schedule.html (final pass)

Before considering the rebuild done, recovered the last committed version
of `schedule.html` via `git show HEAD:./schedule.html` (the repo root is the
`courses` monorepo, not the `eco1000` folder, so the path is relative to
that) and systematically checked its content against the new checklist
pages. Two real gaps found and fixed (#15, #16 above). Three more items
considered and deliberately left out:

- **Mon/Wed/Fri in-class skeleton-note links** (Monday skeleton, Wednesday
  print-before-class handout + "screens-down" reminder, Friday skeleton —
  built from `canvasPageUrl(`s${session.num}-mon/-wed/-fri`)`). These are a
  genuinely different thing from Guided Notes (`ch4.guidedNotesUrl`), which
  *is* in the checklist — skeleton notes are the live in-class material,
  Guided Notes is the self-study companion document. Decided **not** to add
  these: the checklist's job has settled into "what to read, work on, and
  submit," and a day-of-class itinerary is a different kind of item that
  would push every content week back toward the density this whole redesign
  was trying to get away from. No reported student confusion finding the
  right Canvas page justified adding it back. If that changes, the data
  needed is already in `config.js`'s `canvasPageUrl()` helper pattern from
  the old file — it just isn't wired into any current page.
- **Viva sign-up deadline reminder** (old page had a dedicated alert before
  Thanksgiving break: "sign up by Fri Nov 20"). **Decided not to add.**
  Students can still sign up via the links already on `week15.html` and
  `final-exam.html`; the explicit Nov 20 nudge is gone.
- **Shared-calendar clarification** ("pick one — Viva Week or the Exam
  Period, not both — Canvas only allows one slot total"). **Decided not to
  add.** Double-booking confusion risk is unaddressed; worth revisiting if
  it actually causes problems once students are using the real site.
- **Course glossary** (top-of-page "How this course works — key terms":
  Check-In, Puzzle, MME, Friday Focus, Viva definitions). Not raised as a
  question to the user and not added — flagging here in case it's wanted
  later, since it's informational rather than action-oriented and doesn't
  obviously belong on a weekly checklist either.

## Post-launch tweaks (after first real Canvas review)

After reviewing the live site in Canvas, four issues came back. Addressed
one at a time, each verified live before moving to the next.

17. **`checklist.html`'s back-link was the one inconsistent one.**
    Every other top-level page (`assignments.html` before deletion,
    `chapters.html`, and the old `schedule.html`) pointed its back-link to
    `PAGES.canvasHome` — the real Canvas course page, full Canvas chrome —
    rather than `PAGES.home` (the bare GitHub Pages `index.html`, no Canvas
    chrome). `checklist.html` was the only page using the wrong one,
    breaking the "still feels like Canvas" experience when navigating back
    from deep in the checklist. Fixed to match the established convention.
    The 15 week pages and `office-hours.html` already correctly pointed to
    `PAGES.checklist` (one level up), so no other back-link changes were
    needed.

18. **E-book Cengage link "double hop" — investigated, no fix applied.**
    User tried the most likely Canvas-side lever ("Load This Tool in a New
    Tab" on the External Tool assignment) and didn't like the resulting
    behavior either. Decided to leave as-is. This was never a static-site
    code issue — the link only points to a Canvas assignment URL; everything
    after that click is Canvas/LTI launch behavior outside what editing
    `config.js` or the HTML can control.

19. **Friday Focus pills now show weekday + time, matching Puzzle/MME.**
    `CANVAS.eli[]` only ever had a terse `dueShort` field ("Sep 16", no
    weekday, no time), while `CANVAS.puzzles` (via `formatPuzzleDue()`) and
    `CANVAS.mme[].due` both render full strings ("Wed, Sep 30, 11:59 p.m.").
    Added a `due` field to all 9 `eli` entries in config.js, hand-typed in
    the same format as `CANVAS.mme[].due` (not computed — Friday Focus due
    dates are one-off, not formula-derived like puzzles). Weekdays were
    cross-checked against the existing `checkInDay` anchors already in
    config.js (e.g. id 1 due "Sep 16" confirmed Wednesday via
    `SCHEDULE.sessions[3].checkInDay === "Wed Sep 16"`), not guessed.
    Updated the 8 consuming lines across `week3.html`, `week6.html`, and
    `week11.html` from `.dueShort` to `.due`. Kept `dueShort` in config.js
    rather than removing it, in case it's useful elsewhere later.

20. **`assignments.html` deleted; `checkins.html`, `puzzles.html`,
    `mme.html`, `friday.html` promoted to their own home-page cards.**
    Investigated before deciding: `syllabus.html` Section 6 already
    duplicates `assignments.html`'s weight breakdown and per-category prose,
    so the page itself was genuinely redundant. But the four pages it gated
    are **not** redundant — `checkins`/`puzzles`/`mme` each have a
    full-semester list view (every instance, every link, in one place) that
    the week-by-week checklist never shows all at once, and `friday.html`
    has the actual assignment prompt and viva expectations, which exist
    nowhere else, including the checklist (which only ever links to
    "submit," never explains what to write). Their `ALL_CARDS` entries in
    `index.html` already existed fully authored, just gated behind disabled
    `FEATURES` flags with the comment "accessed via assignments.html" — this
    was a flag flip, not a rebuild. Flipped `checkins`/`puzzles`/`mme`/
    `friday` to `true`, removed the `assignments` entry from `ALL_CARDS` and
    from `FEATURES`/`PAGES`, deleted the file, and repointed all four pages'
    back-links from `PAGES.assignments` to `PAGES.canvasHome` (same
    top-level-page convention as #17).

21. **Primary checklist card separated from the header.** A real screenshot
    of the live page (not a recreation) confirmed the hypothesis: the
    crimson header and the crimson "How will your learning be organized?"
    card sat back-to-back with only a 4px gold border between them, reading
    as one continuous block — which is why it was easy to scroll past
    without registering it as a separate, clickable thing. Considered two
    fixes: (A) keep the card's deliberate crimson "most important" treatment
    but add visible separation, or (B) fold it into the white card grid as a
    badged featured card, matching the user's original instinct. Recommended
    A: the checklist is opened every week, unlike the one-time references
    (Syllabus, E-Book Chapters, Help, AI Policy) it would sit alongside in
    the grid under option B, so collapsing it into "first among equals"
    would erase the one signal that currently tells a new student what to
    prioritize. The visual hierarchy mainly needs to win the first few
    visits, before weekly habit takes over. Implemented as a **page-scoped**
    CSS override inside `eco1000/index.html`'s own `<style>` block
    (`margin-top` + stronger `box-shadow` on `.card.primary`), not a change
    to the shared `brand.css` — that file is used by other courses
    (COR 1100, the Cengage course) and this fix was only requested for
    ECO 1000's home page.

## Open items

- The three "decided not to add" items from the schedule.html audit above
  could be revisited if real student confusion shows up around viva
  sign-up deadlines or double-booking.
- Whether the primary-card fix (item 21) actually solves the visibility
  problem in practice — confirm after the next live Canvas review.
- COR 1100's equivalent redesign (mentioned as the eventual follow-on in
  this log's opening) has not been started.
