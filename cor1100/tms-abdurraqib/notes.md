# TMS × Abdurraqib — Planning Notes

**Status:** brainstorming / not yet built into config.js or Canvas.
**Goal:** fill the 4 blank `CANVAS.tms[]` entries in `config.js` (sessions 3, 6, 9, 11) by
pairing a Smith/Hanley chapter with a specific, page-cited passage from Hanif Abdurraqib's
*There's Always This Year: On Basketball and Ascension*.

**Copyright note:** Hanley's chapter PDFs (Princeton UP, via JSTOR) are NOT stored in this
repo — this repo is public (GitHub Pages). Source PDFs live at:
`OneDrive - Elon University/ELON/Teaching/classes 2025-26/COR1100/0_hanley_our_great_purpose/`.
Smith's TMS text itself is public domain (1759) and can be quoted freely. Hanley's 2019
commentary should only be paraphrased or lightly quoted here, not reproduced at length.
Abdurraqib quotes below are drawn from the RARI 2025 guide (see `sources/`), cited by page
number from the print/ebook edition — short quotes only, consistent with fair use for an
internal planning document.

---

## Source material

- `sources/rari-2025-programming-guide.pdf` — Reading Across Rhode Island's 2025
  programming guide for *There's Always This Year*: discussion questions, page-cited
  passages, and classroom mini-lessons. Free publisher/state-library resource, kept here
  for local reference only — **not committed to git**, since this repo publishes to
  public GitHub Pages and this is a complete third-party document (design, photos,
  sponsor branding), not just a short quoted excerpt. Same standard as the Hanley PDFs.
- Hanley chapter PDFs — see OneDrive path above. Not duplicated here.

---

## Book structure (Abdurraqib)

Four sections mimicking basketball quarters (Pregame → Q1–Q4 → Postgame), each
subdivided by a countdown clock from 12:00 to 0:00.

## Confirmed page-cited passages (from RARI guide)

| Page | Passage (paraphrase/short quote) | Theme |
|---|---|---|
| p. 4 | place/people as "reprieve" where survival comes easy | place, community |
| p. 15 | "idolizing the people America was trying to convince me to be afraid of" | admiration, idols |
| p. 31 | tracing his own aging through LeBron, "someone who has survived eras... alongside you" | seeing self via another |
| p. 51 | "our allegiance to the unseen glory" — sacrifice, team, the unseen | self-command, duty |
| p. 65 | America "selling dreams back to its people" until exclusion and aspiration collide | wealth, envy, status |
| p. 189 | "an obsession with suffering on the path to triumph... the lie... about what success truly counts" | ambition, the myth of success |
| p. 194 | "places where people make it" vs. "places where people make it out of" | place, mobility |
| p. 224 | "I come from a place people leave" | leaving, loyalty |
| p. 250 | the "there's always next year" passage the title plays against | hope, the title itself |
| p. 316–17 | "we go on living while a past version of ourselves remains locked... It has maybe all been a dream" | aging, mortality, fragile joy |

## Three-round pairing map (final structure, 2026-06-30)

Supersedes the earlier 4-slot table. Selection rule: each TMS pairing must draw on Hanley
chapters already **completed** by the Friday the round launches, never chapters being
read that same week or later — confirmed against `config.js` SCHEDULE chapter-by-chapter
before locking each pairing (title alone wasn't reliable — see Ch. IX vs. Ch. V note
below).

| Round | Anchor | Hanley chapters completed by then | Hanley chapter paired | Abdurraqib passage | Status |
|---|---|---|---|---|---|
| **Fishbowl 1** | Fri Sep 18 (after CI1) | Intro, I–V | **Ch. IV, On Imagination** | p. 31 — tracing aging through LeBron | **Fully locked and built 2026-06-30** — title, all 4 cascade dates, HTML pages live (see Session Log below) |
| **Fishbowl 2** | Fri Oct 9 (after CI2) | VI–XII | **Ch. IX, On Worshipping Wealth** | p. 65 — selling the dream, who's kept at arm's length | Content locked, see `drafts/tms2-worshipping-wealth.md` — title, cascade dates, and HTML pages **not yet built** |
| **Fishbowl 3** | Fri Nov 6 (after CI3) | XIII–XIX | open | open | Not started. **Caution:** do not reuse the old TMS-4 due date (Wed Dec 2) — it lands in viva week and collides with the FF narrative due date, which the whole 3-round restructure was meant to avoid. A workable cascade must complete (submit → review → respond) before Thanksgiving break (Nov 23–27); see the generalized scheduling pattern in `drafts/perusall-fishbowl-process.md`. |

All 6 early chapters (Intro, I–V) read in full to lock Fishbowl 1 — title alone was not a
reliable guide (Ch. IX turned out richer than its title suggested, and Ch. IV turned out
to be a far better mechanism-level match for the LeBron passage than the original
title-only guess). Other candidates surfaced but not used for Fishbowl 1, kept as backups
if Ch. IV/p. 31 runs into a problem: Ch. II "On Caring for Others" (the literal opening
line of TMS) + p. 4; Ch. III "On Acting for Others" + p. 51 ("unseen glory"); Ch. V "On
Bettering Our Condition" + p. 189/194 (the myth of who "makes it").

## Decided: prompt format (2026-06-29)

Abdurraqib **replaces** the "connects to Hanley" branch of the TMS rubric rather than
sitting alongside it as a third required text. Hanley's chapter is that week's assigned
reading and already gets covered in class — asking students to also write about it in
the TMS response is redundant. Abdurraqib gives them a concrete, contemporary case to
push back on Smith *with*, which serves LO5 ("push back on a text, ask what it leaves
out") better than restating Hanley's gloss would.

Updated rubric line (draft): *A strong response pushes back on the Smith passage using
Abdurraqib's passage as a concrete case, or shows where Abdurraqib's account extends or
complicates Smith's. A weak response restates what either passage already said.*

Hanley stays as implicit background context — students have read it, it shaped the
week's discussion, but it's not a text they're required to cite in the TMS response
itself.

## Structural decision: 3 TMS rounds, CI-anchored (decided 2026-06-30)

Dropped from 4 TMS rounds to **3**, each anchored to the Friday immediately following a
Check-In — TMS 1 (Fri Sep 18, after CI1), TMS 2 (Fri Oct 9, after CI2), TMS 3 (Fri Nov 6,
after CI3). No TMS round tied to CI4 — ruled out merging a 4th TMS into the viva/exam
worksheet as too complicated; simpler to just not have one. This also resolves the
end-of-semester crowding problem without touching Friday Focus, the viva, or CI4 — TMS 3
lands Nov 6, well clear of Thanksgiving and viva week.

Consequence: this is a syllabus-language change (Section 6 currently says "Four times
during the semester..."), and the TMS 10%-of-grade weight needs to be decided across 3
rounds instead of 4 — not yet decided, flagged as open question below. **Not yet built
into config.js or syllabus.html — still planning-stage.**

Renumbering: what was "TMS 1" (Ch. IV/p. 31) and "TMS 2" (Ch. IX/p. 65) keep their
numbers and pairings unchanged — both already sat on Fri-after-CI dates. The old "TMS 3"
(Ch. XVI guess) and "TMS 4" (open) are replaced by a single **TMS 3**, anchored Fri Nov 6,
with Ch. XIII–XIX completed by then (wider window than either old guess) — chapter/passage
pairing not yet chosen.

## TMS grading mechanism — all 3 rounds via Perusall fishbowl (decided 2026-06-30)

All three TMS rounds (not just a TMS-1 pilot) run as Perusall fishbowl assignments.
Single submission mechanism: students submit only inside Perusall; the Canvas assignment
is just an LTI launch link into Perusall, not a separate text-entry submission. Canvas
gradebook syncs the Perusall score directly — there is no separate instructor-graded TMS
rubric outside Perusall anymore (supersedes the earlier "bonus only, instructor still
grades normally" design — the user made a deliberate call to let Perusall's score be the
actual grade).

All 3 rounds weighted equally, summing to the locked 10% TMS weight (so each round is
worth 10%/3 of the final grade).

**Open item, not yet resolved:** each round, ~5 students are "authors" (scored on
submission + rubric-received + reply-quality components) and ~5 are "reviewers" (scored
on in-text-comment + rubric-submission components) — structurally different scoring
profiles. Perusall scores both roles on the same configured 0–100 range via independent
component sets that each sum to 100%, so direct averaging across rounds is mechanically
sound. What's NOT yet decided: how author/reviewer roles rotate across the 3 rounds so no
student is disproportionately an author or a reviewer over the semester. Revisit once
roster is in hand.

## Perusall — fishbowl for TMS only (decided 2026-06-29)

**Scope guardrail:** this does NOT reopen the 2026-06-25 no-Perusall decision in
`startup.md`. The 25 Hanley chapter readings stay direct PDF links via Canvas Files,
comprehension still checked via guided notes + Puzzles. Perusall is introduced as a new,
separate tool used only for the TMS/Abdurraqib component. See
`drafts/perusall-fishbowl-tms.md` for the design.

## Fishbowl 1 — final locked spec (2026-06-30)

**Title:** *Fishbowl 1: Sympathy, Attention, and LeBron* — chosen over more administrative
("TMS 1 Peer Review") and more Smith-quote-heavy options because a named, recognizable
figure cuts through the abstraction fastest for first-year honors students seeing this
assignment type for the first time, while "Sympathy" and "Attention" still preview the
real concepts (Smith's epigraph: *"Of such mighty importance does it appear to be, in the
imaginations of men, to stand in that situation which sets them most in the view of
general sympathy and attention."*). Reusable naming formula for future rounds: **Fishbowl
[N]: [short, recognizable hook tied to the paired reading] — built from a phrase in that
round's Smith epigraph where possible, never from Hanley's or Abdurraqib's copyrighted
prose.**

**Roles:** 10-student roster, 5 authors / 5 reviewers. All 5 reviewers review all 5
author submissions (not the Perusall default of 1–2 per reviewer) — at this scale, dense
feedback matters more than reviewer workload. Anonymous posting OFF — deliberate choice,
matches this course's existing norm of direct, named argument (Screens-down Wednesdays,
vivas), and Smith's spectator framing doesn't require anonymity anyway. Role rotation
across rounds not yet decided (see open item above).

**Cascade (compressed, not spanning Fall Break):**

| Stage | Date | Who |
|---|---|---|
| Visible | Fri Sep 18 | Everyone |
| Submit | Wed Oct 7, 11:59 p.m. | Authors (5) |
| Review | Sun Oct 11, 11:59 p.m. | Reviewers (5) |
| Respond | Tue Oct 13, 11:59 p.m. | Authors (5) |
| Debrief | Mon Oct 19 (first class after Fall Break) | Everyone — name the structural echo of Smith's impartial spectator |

Chosen over spanning the break (review/respond due ~Oct 21–23) because feedback would go
cold and it nudges students toward schoolwork during break. The general principle —
compress the cascade into whatever pre-break window exists rather than spanning a break —
is captured for reuse in `drafts/perusall-fishbowl-process.md`.

**Grading:** all 3 rounds score directly from Perusall (no separate instructor rubric),
weighted equally for the 10% TMS total. See the unresolved author/reviewer role-rotation
item above before this can be called fully closed.

## Session log — 2026-06-30, HTML build for Fishbowl 1

Built and verified locally (cache-bypassed local preview server, not yet pushed at time
of this entry — see commit note below for final status):

- `config.js` — `CANVAS.tms[0]` given full title + 4 cascade dates (`introduced`, `due`,
  `reviewDue`, `respondDue`); old `tms[2]`/`tms[3]` entries (stale 4-slot placeholders)
  removed; explanatory comment block added warning against reusing the old Fishbowl-3 due
  date.
- `tms.html` — subtitle, callout (Perusall mechanism + Abdurraqib-replaces-Hanley rubric
  language), and per-round row rendering rewritten to show the full 4-stage cascade.
- `checklist/week3.html` (launch week) — copy updated to name Perusall and Fishbowl 1
  specifically; tag label changed from generic "TMS" to "Fishbowl" for consistency.
- `checklist/week6.html` (submission week) — copy clarified that Wednesday is the
  *submission* step only, not the whole assignment.
- `checklist/week7.html` (review/respond week) — **real bug fixed**, not just a copy
  update: this page previously claimed "Nothing is due this week," which became false
  once the author-response deadline (Tue Oct 13) was confirmed to land inside this week.
  Added a new check-item and fixed the due-banner text.
- **Bug caught during verification:** the same double-period bug already logged in
  `CHECKLIST-REDESIGN-DECISIONS.md` #27 recurred (`${tms1.respondDue}.` — the date string
  already ends in "p.m.," producing "p.m.."). Fixed on sight; worth a repo-wide grep for
  the same pattern (`}.`  right after a `*Due` field) before trusting any future date
  interpolation in this codebase.
- All 5 files verified via local preview server (port 3000, served from the `courses/`
  parent directory — `cor1100/` is a subpath, not the root) with zero console errors.

## Open questions

- TMS 2 (content locked) and TMS 3 (nothing locked) still need: title, full cascade
  dates, and the same HTML build pass Fishbowl 1 just got.
- Author/reviewer role rotation across the 3 rounds — not yet decided.
- Need an actual page/edition citation standard for Abdurraqib quotes in the assignment
  text (which print edition — hardcover Random House 2024 — page numbers should match).
- Confirm Perusall is actually re-provisionable in this Canvas course (deliberately
  removed 2026-06-25 per `startup.md`) before building anything inside Perusall itself —
  still the single biggest unverified assumption underlying all of this.
- The actual Abdurraqib excerpt around p. 31 needs to be scanned from the physical book
  (two phone-photo screenshots were reviewed in conversation but not saved as files —
  the user declined a full transcription for copyright reasons, see the discussion in
  this session; a proper scan still needs to be taken and assembled into the Perusall
  reading document).
