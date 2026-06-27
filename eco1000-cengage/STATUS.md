# ECO 1000 Cengage — Status

**Course:** ECO 1000, Principles of Economics — Summer Session II 2026 (July 6–24)
**Platform:** Moodle LMS + Cengage MindTap (e-book, videos, quizzes, homework via LTI) + Perusall (MME) + Google Sheet (viva sign-up)
**Last audit/launch pass:** 2026-06-27, commit `8e00837`, pushed to `origin/main`
**Launch status:** Ready to deploy to students. No known blockers.

## What this site is

A lightweight navigation/scaffolding layer around Cengage MindTap content — no
custom guided notes here (unlike the fall ECO 1000 / COR 1100 sites). Pages:
`index, syllabus, cengage, mme, friday, puzzles, badges, checklists,
office-hours`, plus `checklist/week1-3.html`. Two pages (`narrative-guide.html`,
`viva-prep-guide.html`) are intentionally NOT local — they're served from
`courses/shared/` via `?from=eco1000-cengage`, since both ECO 1000 variants
share that content.

## 2026-06-27 launch-readiness audit

Conducted as a 4-persona review (Master Teaching & Learning Expert, Web
Designer/UX Expert, efficiency-minded student, Moodle/Cengage-unfamiliar
student) plus a manual structural pass. Every agent finding was verified
against the actual code before action — two flagged "blockers" turned out to
be false positives (missing element ID, MME dead-end) and were dismissed
after verification.

**Fixed:**
- Deadline visibility: `checklists.html` week cards now show everything due
  that week (not just chapter due dates); `week1.html` flags the Week 3 viva
  early so it's never a first-time surprise in Week 3.
- Viva rubric (Strong/Adequate/Developing point values) finalized with
  concrete survey dates (opens July 6, closes July 8, results by July 9) —
  **action item: the instructor must actually launch that Moodle survey by
  July 6.**
- Added an office-hours invitation to the narrative card in `friday.html` as
  a pre-viva feedback touchpoint (no new grading work).
- Cengage/MindTap activation now has its own deadline (July 8) distinct from
  the Week 1 content due date (July 11).
- `index.html` explains MindTap's Learn It / Study It / Apply It sections
  before resource cards reference them.
- `mme.html` explains what Perusall is on first mention.
- `friday.html` viva intro reframes the format for first-time oral-exam takers.
- Disabled submit/sign-up buttons get a visible "coming soon" label and
  `aria-disabled` instead of silently fading out.
- **Office hours are by email request only** — `office-hours.html` and the
  `friday.html` pre-submission note both now say the instructor opens Zoom
  after an email, rather than sitting in the room waiting. This was an
  explicit instructor policy decision, not an audit finding.
- Removed stale local `narrative-guide.html`/`viva-prep-guide.html` copies
  that duplicated the maintained `shared/` versions.

**Verified working as-is (no action needed):**
- MME (`config.js` MME block): despite a stale comment suggesting it's
  pending a Perusall switch, `enabled: true` + populated `moodleActivityId`
  values mean all three article links are live today. The unused
  `perusallBase` field and stale comment are cosmetic only.
- All Cengage LTI links — instructor-verified directly.

## Open / deferred

Nothing outstanding from the 2026-06-27 audit. Future maintenance notes:
- If MME ever needs a real Perusall base URL wiring change, check
  `config.js` MME block and `mme.html`'s card-rendering script first.
- The `--teal` CSS variable is referenced in `index.html` but never defined
  in that file's `:root` (pre-existing, not fixed — worked around locally in
  the new `.platform-note` style with a literal hex instead of compounding
  it). Worth a real fix if anyone touches that file's theming again.
