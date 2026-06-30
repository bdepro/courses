# Designing a Perusall Fishbowl assignment — generalized process

Extracted from the COR 1100 / TMS-Abdurraqib build (2026-06-29 to 2026-06-30) for reuse
beyond this course. Where a step references COR 1100 specifics, the general principle is
stated first and the specific instance is given only as an example.

## 1. Confirm the mechanics before designing anything

Don't design around assumed product behavior. Pull the platform's own current
documentation and read it in full before making scheduling or scoring decisions —
assumptions about how a peer-review tool splits roles, scores, or handles deadlines are
exactly the kind of thing that's wrong often enough to be expensive. In this build,
reading Perusall's actual fishbowl-creation and scoring-template articles changed two
decisions that had been made from secondhand description alone (which role submits vs.
reviews, and how the two roles' scores combine onto one scale).

Core fishbowl mechanics, confirmed from source (not from memory or secondhand summary):
- Splits the class into two groups: **authors** (submit a document, not required to
  review anyone) and **reviewers** (annotate + rubric-score assigned submissions).
- Runs on **cascading deadlines** — submit, then review, then author-responds-to-reviewer
  — not one deadline for everything.
- **Scoring is role-specific but scale-compatible.** Author components (on-time
  submission, average rubric score received, quality of replies to reviewers) and
  reviewer components (in-text comment quality/quantity, rubric completion) are each
  configured to sum to 100% independently, then mapped onto the same overall score range
  — meaning a student's score is comparable whether they were an author or a reviewer
  that round, even though what's being measured differs. This matters if you intend to
  average scores across multiple rounds with role rotation.
- Editing a scoring template **immediately recalculates every assignment using it** —
  don't share a template between a live assignment and an unrelated test/draft.

## 2. Pick the content pairing by reading the actual source material, not titles

Chapter or unit titles are not reliable proxies for argument content. In this build, a
title-only guess for one chapter undersold how rich it actually was, and a different
title-only guess missed a far better mechanism-level match that was only visible after
reading the chapter in full. Read every candidate source chapter/unit before locking a
pairing, even when time-pressured — a wrong pairing chosen from a title is expensive to
discover later, after a reading document has already been built around it.

When pairing two source texts (e.g., a primary theoretical text + a contemporary
narrative excerpt), look for **mechanism-level matches**, not just **thematic overlap**.
A chapter that thematically touches a topic is a weaker pairing than a chapter that
describes the actual cognitive/social mechanism the second text's passage enacts. Thematic
overlap is good enough as a fallback; mechanism-level match is the standout.

## 3. Decide what the second text replaces in the existing rubric, don't just add it

If there's an existing response rubric built around Text A + a connecting text B, and
you're introducing Text C as a new connecting option, decide explicitly whether C
*replaces* B's role in the rubric or sits *alongside* it as a third required element.
Adding a third required text to a short response assignment usually overloads it.
Replacing the connecting-text role (especially if B is already covered elsewhere, e.g. in
class discussion) keeps the cognitive load the same while making the assignment more
concrete.

## 4. Design role assignment and anonymity for your actual class size

Perusall's defaults (e.g., 1–2 reviewers per submission) are calibrated for larger
classes. At small N (this build used 10 students, 5/5 split), consider having every
reviewer review every submission — denser feedback, and the workload is still light when
the documents themselves are short. Decide anonymity deliberately, not by default: weigh
it against the course's existing norms around named, accountable argument versus candid
critique. Don't assume one direction is universally correct.

If running the same fishbowl format across multiple rounds in a semester, decide a role
*rotation* plan up front — who's an author when, who's a reviewer when — so the
work (and the kind of credit each role earns) is roughly balanced across students over
the semester, not concentrated in one group.

## 5. Build the cascade dates against the actual academic calendar, not in the abstract

Lay the real calendar next to the cascade before picking dates. The single most common
failure mode found in this build was proposing a deadline that *seemed* reasonably spaced
(e.g., "review one week after submission") without checking whether that week contained a
break, a different assignment's due date, or the end of the term. Concretely:

- **Don't span a break with an active feedback loop.** Compress the cascade into
  whatever contiguous pre-break window exists, even if it's tighter than your default
  spacing, rather than letting review-then-respond straddle a break — feedback goes cold,
  and it nudges students toward doing schoolwork during time off. A short compressed
  window (review in 2–4 days) is usually fine for short documents at small N.
  - Exception: if the deadline gap is genuinely light-touch (e.g., "reply to 1–2
    comments" rather than "write a new submission"), it's more acceptable to let that
    specific stage span a break — weigh stage *weight*, not just calendar position.
- **Don't reuse an old deadline pattern without re-checking what it now collides with.**
  If a previous version of the assignment had a due date that worked, and you're now
  changing the assignment's anchor point (e.g., re-timing the whole unit), re-derive the
  cascade fresh against the calendar rather than copying the old offset forward — the old
  due date may now land in a different, newly-problematic week (this build nearly
  inherited an old due date that had drifted into viva week and a competing
  narrative-assignment deadline, purely by copy-forward).
- **Recompress, don't redesign, when a constraint changes.** When the round count or
  anchor points changed mid-design in this build, the two already-locked rounds needed no
  rework — only the newly affected slot did. Keep each round's cascade independent enough
  that a structural change to the overall count or scheduling rule doesn't force you to
  redesign everything.

## 6. Pilot before scaling, but decide deliberately when you don't

The natural instinct is to pilot a new assignment format on a single round before rolling
it out everywhere. That's the safer default. If you decide instead to roll it out to
every round from the start (as happened in this build, after weighing it explicitly), do
so as a conscious choice with the tradeoffs named out loud — don't let "we were going to
pilot this" silently become "we built it everywhere" without anyone deciding that.

## 7. Separate "what's decided" from "what's built" from "what's live," and say so explicitly

Three different states, easy to blur together under time pressure:
- **Decided** — a choice has been made and recorded, but no file reflects it yet.
- **Built** — files have been written/edited to reflect the decision, verified locally.
- **Live** — the built version has actually been pushed/deployed somewhere real users
  will see it.

Keep a running log that's explicit about which state each piece is in, and don't say
something is "done" when it's only decided or only built. Get explicit confirmation
before moving from built to live for anything that's a public or shared deployment —
verifying locally and shipping are different actions with different stakes.

## 8. Verify visually, not just by reading the diff

For anything rendered (an HTML page, a generated PDF, a UI), a local preview pass with a
real browser-driven check (screenshot + console error check, not just re-reading the
source) catches things a code review won't — e.g., a string-interpolation bug where a
date field that already ends in punctuation gets a second period appended by the
surrounding template literal. This exact bug pattern recurred in this build despite being
previously caught and logged — worth a deliberate repo-wide check for the same pattern
(a field known to end in punctuation, immediately followed by more punctuation in the
template) rather than assuming "we fixed this once" means it won't recur elsewhere.

## Open question for a future generalized skill

This process assumes a human is making each content/scheduling/grading decision and the
assistant is executing + verifying. A future "fishbowl skill" should probably keep that
shape — surfacing the calendar collisions, mechanism-vs-theme distinction, and
decided/built/live tracking automatically — rather than trying to auto-decide content
pairings or schedule dates, since those depend on course-specific judgment a skill
shouldn't make unilaterally.
