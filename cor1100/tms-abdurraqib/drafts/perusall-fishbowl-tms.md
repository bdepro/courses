# Perusall fishbowl for TMS — design draft

**SUPERSEDED in part — see `notes.md`.** This draft was written when the plan was "pilot
on one round, instructor still grades normally, Perusall only feeds an optional bonus."
That grading model was deliberately overridden 2026-06-30: all 3 rounds now run as
fishbowl, scored directly from Perusall (no separate instructor rubric). The round count
also dropped from 4 to 3. The mechanics, role-design, and scheduling-principle content
below is still accurate and useful — only the "pilot + bonus-only" framing in the Grading
section is out of date. See `notes.md`'s "TMS grading mechanism" and "Fishbowl 1 — final
locked spec" sections for the current state, and `perusall-fishbowl-process.md` for the
generalized version of the scheduling/role-design reasoning.

**Scope guardrail:** this introduces Perusall as a new, separate tool used only for the
TMS/Abdurraqib assignments. It does NOT reopen the 2026-06-25 "no Perusall" decision
in `startup.md` — the 25 Hanley chapter readings stay direct PDF links, comprehension
still checked via guided notes + Puzzles. Nothing here touches `chapters.html` or the
`GUIDED_NOTES` architecture.

## What a Perusall fishbowl assignment actually is

Confirmed directly from Perusall's own support articles (`fishbowl.pdf` and
`fiashbowl scoring.pdf`, read 2026-06-30 — not stored in this repo, Perusall's own
screenshots/copyright, kept as local reference only):

**Setup (from the creation article):**
1. Assignments tab → Add Assignment → Fishbowl Review Assignment.
2. Under **Basics**: name it, set deadlines for each stage in chronological order, and
   select which students are **"assigned to upload materials"** (the authors). Everyone
   else is a reviewer by default. Authors are NOT required to review anyone.
3. Under **Rubric**: pick an existing rubric, build a new one, or choose qualitative-only
   (no rubric). You can toggle **"Do not ask reviewers to provide overall feedback"** —
   even with that on, reviewers must still leave in-text comments.
4. Under **Options**: instructions, visibility date, who's included (if not "entire
   class," the upload-group students must be included in that selection), and an
   **anonymous posting** toggle.
5. Under **Scoring**: pick a scoring template (reusable) or build a custom one.

**Scoring (from the scoring-templates article):** Fishbowl has its own scoring-component
set, split by role, each set required to sum to ≥100% (set a component to 0% to exclude
it):

- **Author components:** Submission (on-time upload), Rubric scores received (credit
  scaled to the average rubric score reviewers gave them), Authors responding to in-text
  comments (credit for replying to a configurable minimum number of high-quality
  reviewer comments).
- **Reviewer components:** Submitting in-text comments (credit for leaving comments
  across their assigned submissions, with a configurable quality/quantity threshold),
  Submitting rubric (credit for completing the rubric on each assigned submission).
- A pass/fail **threshold score for credit** is optional.
- Important: editing a scoring template **immediately recalculates every assignment**
  using it — don't reuse one template across the live TMS pilot and an unrelated test
  assignment.

Source: [How do I create a fishbowl review assignment? – Perusall](https://support.perusall.com/hc/en-us/articles/28650749630231-How-do-I-create-a-fishbowl-review-assignment)

## Why this fits TMS specifically (and not the chapter readings)

The TMS rubric already asks students to "push back" on Smith — to argue, not just
summarize. A fishbowl round gives that pushback an actual audience and a second round of
revision, which a one-shot Canvas text-entry submission doesn't.

There's also a direct conceptual hook worth using in the assignment framing: Smith's
sympathy and the impartial spectator are about imagining yourself into someone else's
position and judging their conduct from outside it. A fishbowl round literally puts one
half of the class in the role of impartial spectator over their classmates' TMS
responses — reviewing, judging propriety, giving feedback as an outside observer. Naming
that explicitly in the assignment instructions ("you are about to do, structurally, what
Smith says we do naturally") is free thematic reinforcement, not just a clever framing
trick — it's actually accurate to the mechanic.

## Proposed design — pilot on ONE TMS round, not all four

Don't roll this out across all 4 TMS assignments in year one. Pilot it on a single round,
see how it goes, decide whether to extend it. **TMS 2 (Week 6)** is the best candidate:
students already have a baseline from TMS 1 (so they know what an unreviewed response
looks like), and feedback from this round can improve TMS 3 and TMS 4 later in the
semester. TMS 4 (the last one, Week 11→15) is a weaker pilot choice — there's no later
round for feedback to improve.

### Mechanics, designed for an actual 10-student roster

A class of 10 changes the design in a few real ways the generic version above didn't
account for:

- **Group split:** 5 authors / 5 reviewers. With only 5 documents total, there's no
  reason to ration them — assign **all 5 reviewers to review all 5 author submissions**
  (Perusall supports configuring reviewers-per-submission; set it to 5, not the default
  1–2). At this scale that's a light read (5 short TMS responses), and it produces dense
  feedback — every author gets 5 independent reads instead of 1–2 — which matters more
  pedagogically than reviewer workload at N=10.
- **Role asymmetry across the semester:** this design means the 5 "author" students
  experience peer review on TMS 2 and the other 5 don't (they're reviewers, not
  reviewed). If the pilot succeeds and gets extended to TMS 4, swap the groups — this
  semester's reviewers become TMS 4's authors. Don't try to give both roles to everyone
  within the single TMS 2 round; that doubles the deadline cascade for a first pilot.
- **Anonymity:** recommend **leaving anonymous posting OFF**. In a 10-person seminar
  that already runs on Screens-down Wednesdays, vivas, and direct in-person argument,
  anonymous peer critique cuts against the course's existing norm of owning your
  disagreements out loud. Smith's impartial-spectator framing doesn't require anonymity
  either — the spectator imagines themselves in another's position, not that they don't
  know who the other person is. Worth revisiting if reviewers seem to be pulling punches
  with named feedback once you see the actual comments.

### Stages and deadlines (mapped onto the existing TMS 2 schedule)

TMS 2 is introduced Fri Oct 9, due Wed Nov 4 (session 11) per `config.js` — that's an
unusually long window (the TMS due date is tied to the *next* check-in week, not the
following week), which gives this pilot room to run its full cascade without colliding
with other deadlines:

1. **Submission deadline:** existing TMS 2 due date. The 5 designated authors write and
   upload their TMS 2 response (pushing back on Smith Ch. IX using Abdurraqib p. 65)
   directly into the Perusall fishbowl assignment. The other 5 students do NOT write a
   TMS 2 response this round — see grading note below on what they do instead.
2. **Review deadline:** ~1 week later. All 5 reviewers read and annotate all 5
   submissions, plus complete the rubric on each.
3. **Author response deadline:** a few days after that. The 5 authors reply to a minimum
   number of high-quality reviewer comments (configurable in the scoring template —
   start with 2).
4. **Class session after the cascade closes:** spend a few minutes naming the structural
   echo — reviewers just did, literally, what Smith says we do naturally (imagine
   ourselves into another's position and judge their conduct from outside it).

### Grading — don't touch the locked 10% TMS weight

The TMS component's weight and rubric (10% of grade, 4 passages) is locked per
`config.js`. Now that the actual scoring mechanics are confirmed, here's the concrete
problem to solve: **Perusall's fishbowl scoring is built to produce its own score**
(author components + reviewer components), and that score is designed to sync back to
Canvas as a gradebook column. If that column becomes the literal TMS 2 grade for the 5
authors, you'd be letting an average of 5 peer rubric scores (students, not the
instructor) determine 10%-weighted credit — a different grading model than every other
TMS round, applied to only half the class. Avoid that. Two clean options:

- **Recommended: route the Perusall score into the existing Guided Notes bonus pattern**
  (see project memory "ECO 1000 Guided Notes Bonus Policy" — add-only, 0-points-possible
  Canvas trick, can never lower a score). Configure the Perusall assignment's Canvas
  sync as a 0-points-possible assignment, and manually translate it into a small bonus
  added to TMS 2 — same mechanic already proven and familiar to students from the
  chapter Guided Notes. The instructor still grades the actual TMS 2 response (the
  push-back-on-Smith rubric) the normal way, for both the 5 authors and the 5 non-author
  students (who'd write a normal, non-reviewed TMS 2 response in Canvas as usual).
- **Alternative:** treat the whole fishbowl cycle as ungraded engagement, like the
  chapter readings — no bonus, just feedback. Simpler to set up, but there's less reason
  for the author-response stage to actually get done.

Recommend the bonus pattern. It also resolves the asymmetry problem above: every student
still does a normal, instructor-graded TMS 2 response; the 5 "authors" additionally get
peer feedback and a shot at a small bonus for engaging with it.

### Peer rubric design (deliberately simple)

This is a peer rubric, not the instructor's grading rubric — keep it short enough that 5
reviewers can apply it consistently to 5 documents without instructor calibration time.
Two criteria, both yes/no-ish rather than fine-grained point scales:

1. **Does the response identify an actual disagreement or gap between Smith and
   Abdurraqib, or does it mainly restate both?** (This is the same distinction already
   drafted in `tms2-worshipping-wealth.md` between a strong and weak response.)
2. **Which standing thread does this response engage, if any — sympathy, self-command,
   or the impartial spectator?** Open-ended tag, not scored. This doubles as data
   collection: `CHAPTERS.threads` in `config.js` is currently `// TBD`, and reviewer
   tagging across the pilot is a cheap way to see which threads actually show up in
   student writing before locking that list in.

## Other Perusall features worth considering (not just fishbowl)

If the pilot goes well, a lighter-weight complementary use: assign the actual Abdurraqib
excerpt (just the 1–2 pages around p. 65, fair-use length, kept inside Perusall/Canvas —
not the public course site) as a standard social-annotation document *before* students
write their individual response. That lets the class collaboratively surface different
readings of the passage in the margins first, then write individually. This is a smaller
lift than fishbowl and could be tried on a TMS round where fishbowl isn't used, for
comparison.

## Resolved by this pass

- ~~Decide review group size~~ → all 5 reviewers review all 5 submissions; class size is
  10, confirmed.
- ~~Decide whether the thread-tagging question feeds `CHAPTERS.threads`~~ → yes, folded
  into the peer rubric design above.

## Open questions still outstanding

- **Confirm Perusall is actually provisioned/licensed for this course in Canvas** —
  `startup.md` says it was deliberately removed (2026-06-25); need to check whether
  re-adding it, even scoped to one assignment, requires a new LTI install request through
  Elon's Canvas admin. This is the next concrete thing to check before building anything
  in Perusall itself.
- Decide the minimum number of high-quality reviewer-comment replies required of authors
  (scoring template "Authors responding to in-text comments" component) — drafted above
  as 2, not yet tested against how much text a TMS response actually generates in
  comments.
- Decide the actual point value of the bonus this maps to, consistent with the existing
  Guided Notes bonus (+2 pts, late within one week at 80%).
