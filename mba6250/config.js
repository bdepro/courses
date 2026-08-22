// ================================================================
//  MBA 6250 — COURSE CONFIGURATION
//  Generated from: shared/config-template.js
//  Hosted at: bdepro.github.io/courses/mba6250/
// ================================================================
//  SEMESTER UPDATE CHECKLIST (search UPDATE to find each spot):
//  1. COURSE block        — semester, canvasId
//  2. INSTRUCTOR block    — officeHours each semester
//  3. SCHEDULE block      — dates and module date ranges each semester
//  4. PROBLEM_SET block   — aid (Canvas assignment ID) once built;
//                           resolve the incremental-vs-single-deliverable
//                           due-date question noted inline first
//  5. CASES block         — case titles (drafted below) and
//                           aid (Canvas assignment ID) once cases are
//                           built in Canvas
//  6. CAPSTONE block      — replaces the former Executive Memo. Format
//                           is decided (in-person written final exam,
//                           no oral component) — aid and exact exam-period
//                           date/time are placeholders until finalized.
//  That is it. index.html and syllabus.html pull from this file automatically.
// ================================================================

// ================================================================
//  COURSE
//  UPDATE: semester and canvasId each term
// ================================================================
const COURSE = {
  code:        "MBA 6250",
  title:       "Essential Economics for Strategic Management",
  semester:    "Fall 2026",                        // UPDATE each semester
  format:      "online-synchronous",
  meetingTime: "Mondays, 6:00–9:00 p.m. (Zoom)",    // UPDATE if the weekly meeting day/time changes
  credits:     3,
  baseUrl:     "https://bdepro.github.io/courses/mba6250",
  school:      "Love School of Business",
  canvasBase:  "https://elon.instructure.com",
  canvasId:    "207",                               // UPDATE each semester (Canvas course ID)
};

// ================================================================
//  INSTRUCTOR
//  UPDATE: officeHours each semester
// ================================================================
const INSTRUCTOR = {
  name:        "Brooks Depro",
  nameShort:   "Prof. Depro",
  email:       "bdepro@elon.edu",
  phone:       "919-357-2316",
  office:      "KoBC 122",
  officeHours: "By appointment via Zoom",           // UPDATE each semester
  zoomUrl:     "https://elon.zoom.us/my/bdepro",
  zoomDisplay: "elon.zoom.us/my/bdepro",
};

// ================================================================
//  SCHEDULE
//  UPDATE: all dates and module ranges each semester
//
//  Modules run Sunday–Saturday; assignments due Friday at 11:59 p.m.
//  10 modules total. A no-module Thanksgiving week falls between
//  Module 9 and Module 10 — handled in syllabus.html rendering,
//  not as a listed module here.
// ================================================================
const SCHEDULE = {

  // Key academic dates — UPDATE each semester
  dates: {
    orientationBegins:  "August 30, 2026",           // UPDATE
    classesBegin:       "September 20, 2026",         // UPDATE
    dropDeadline:       "October 19, 2026",            // UPDATE
    thanksgivingBreak:  "November 23–27, 2026",        // UPDATE
    classesEnd:         "December 4, 2026",            // UPDATE
    examsBegin:         "December 7, 2026",            // UPDATE
    examsEnd:           "December 11, 2026",           // UPDATE
    gradesDue:          "December 16, 2026",           // UPDATE
  },

  // Modules — UPDATE dates each semester; topics/chapters locked
  // unless course structure changes.
  // Modules 4 and 10 are buffer weeks (no chapter, no problem set) —
  // a mid-course synthesis/review checkpoint and a dedicated final
  // exam prep week before the course ends.
  modules: [
    { num: 1,  dates: "Sep 20–26",      due: "September 25, 11:59 p.m.", topic: "Introduction: Incentive Alignment" },
    { num: 2,  dates: "Sep 27–Oct 3",   due: "October 2, 11:59 p.m.",    topic: "Benefits, Costs, and Decisions" },
    { num: 3,  dates: "Oct 4–10",       due: "October 9, 11:59 p.m.",    topic: "Strategic Games" },
    { num: 4,  dates: "Oct 11–17",      due: "No submission — review week", topic: "Synthesis &amp; Review: Foundations Checkpoint" },
    { num: 5,  dates: "Oct 18–24",      due: "October 23, 11:59 p.m.",   topic: "The Problem of Adverse Selection" },
    { num: 6,  dates: "Oct 25–31",      due: "October 30, 11:59 p.m.",   topic: "The Problem of Moral Hazard" },
    { num: 7,  dates: "Nov 1–7",        due: "November 6, 11:59 p.m.",   topic: "Getting Employees to Work in the Firm's Best Interest" },
    { num: 8,  dates: "Nov 8–14",       due: "November 13, 11:59 p.m.",  topic: "Getting Divisions to Work in the Firm's Best Interest" },
    { num: 9,  dates: "Nov 15–21",      due: "November 20, 11:59 p.m.",  topic: "Managing Vertical Relationships" },
    { num: 10, dates: "Nov 29–Dec 4",   due: "No submission — final exam prep week", topic: "Final Exam Prep Week (Dec 7&ndash;11)" },
  ],
};

// ================================================================
//  CHAPTERS — SINGLE SOURCE OF TRUTH
//  Froeb, McCann, Ward & Shor, Managerial Economics: A Problem
//  Solving Approach, 6th edition. UPDATE each semester if chapter
//  selection changes.
//
//  8 chapters across 8 content modules; Modules 4 and 10 are
//  buffer weeks (synthesis/review, final exam prep week) with no
//  assigned chapter.
//
//  quizAid / discussionAid are Canvas assignment IDs (New Quizzes /
//  Perusall LTI) pulled from the live course (course_id 207) on
//  2026-08-13. ch1 has no quizAid — no MCQ bank yet, Perusall only.
//  The Perusall Discussion assignments in Canvas are still generically
//  named "Perusall Discussion 1"–"8", not chapter-labeled — this
//  mapping assumes they were built in module order and was confirmed
//  by the instructor, not inferred from the assignment names.
// ================================================================
const CHAPTERS = [
  { key: "ch1",  num: "Ch 1",  title: "Introduction: Incentive Alignment",                          module: 1, quizAid: "",      discussionAid: "17709" },
  { key: "ch3",  num: "Ch 3",  title: "Benefits, Costs, and Decisions",                             module: 2, quizAid: "17609", discussionAid: "17710" },
  { key: "ch15", num: "Ch 15", title: "Strategic Games",                                            module: 3, quizAid: "17610", discussionAid: "17711" },
  { key: "ch19", num: "Ch 19", title: "The Problem of Adverse Selection",                           module: 5, quizAid: "17611", discussionAid: "17712" },
  { key: "ch20", num: "Ch 20", title: "The Problem of Moral Hazard",                                module: 6, quizAid: "17612", discussionAid: "17713" },
  { key: "ch21", num: "Ch 21", title: "Getting Employees to Work in the Firm's Best Interest",      module: 7, quizAid: "17613", discussionAid: "17714" },
  { key: "ch22", num: "Ch 22", title: "Getting Divisions to Work in the Firm's Best Interest",      module: 8, quizAid: "17614", discussionAid: "17715" },
  { key: "ch23", num: "Ch 23", title: "Managing Vertical Relationships",                            module: 9, quizAid: "17615", discussionAid: "17717" },
];

// ================================================================
//  GRADING
//  Weights must sum to 100. UPDATE only if course structure changes.
// ================================================================
const GRADING = {
  dueTime: "11:59 p.m.",                            // universal due time — Friday of each module
  components: [
    { id: "cases",           label: "Case Analyses",                  weight: 35,
      note: "One structured case analysis for each of four selected modules (Modules 3, 5, 7, 9). Applies that module's economic framework to a real managerial decision." },
    { id: "finalExam",       label: "Final Exam",                      weight: 30,
      note: "In-person, closed-book synthesis exam during the university final exam period (Dec 7–11). Case-style prompts spanning the whole course." },
    { id: "problems",        label: "Problem Sets",                    weight: 15,
      note: "One problem set spanning the semester, one to two problems per chapter (8 chapters), selected for their calculation focus. Submitted with work shown; graded by hand, not auto-graded." },
    { id: "discussions",     label: "Perusall Discussions",            weight: 12,
      note: "Weekly annotation and discussion activity in Perusall, every module. Applies that module's framework to a short scenario, with a required substantive reply to a classmate." },
    { id: "quizzes",         label: "Formative Quizzes",               weight: 8,
      note: "Multiple-choice self-check quiz on 7 of 8 content modules (Module 1 has no bank — Perusall only), drawn from a curated item bank. Graded on whether the best of three attempts clears an 80% mastery threshold — full credit or zero, no partial credit between." },
  ],
};

// ================================================================
//  FEATURES
//  true = show on home page, false = hide
//  UPDATE if sections are added or removed
// ================================================================
// Cases, Problem Set, Capstone, Quizzes, and Discussions no longer have
// their own index.html cards — modules.html (the primary card) is now
// the single directory for all per-module and capstone links.
const FEATURES = {
  syllabus:      true,
  materials:     false,  // links to textbook + Perusall access info
  support:       false,
  aiPolicy:      true,
};

// ================================================================
//  TEXTBOOK — students obtain their own copy; no publisher platform
// ================================================================
const TEXTBOOK = {
  publisher:  "Cengage",   // publisher of record only — not a platform we route through
  edition:    "6th",
  title:      "Managerial Economics: A Problem Solving Approach",
  authors:    "Froeb, McCann, Ward, and Shor",
  note:       "Obtain the textbook on your own — print, rental, or e-book, any source. Perusall (used for weekly discussions) carries its own $5/term subscription fee, separate from the textbook.",
};

// ================================================================
//  PAGES
//  Stable GitHub Pages URLs — update only if files move or rename.
// ================================================================
const PAGES = {
  home:        `${COURSE.baseUrl}/index.html`,
  syllabus:    `${COURSE.baseUrl}/syllabus.html`,
  modules:     `${COURSE.baseUrl}/modules.html`,
  support:     `https://bdepro.github.io/courses/shared/support.html?return=${encodeURIComponent(COURSE.canvasBase + '/courses/' + COURSE.canvasId)}`,
  aiPolicy:    `https://bdepro.github.io/courses/shared/ai-policy.html?return=${encodeURIComponent(COURSE.canvasBase + '/courses/' + COURSE.canvasId)}`,
};

// ================================================================
//  CANVAS COURSE LINK
// ================================================================
const CANVAS_COURSE = `${COURSE.canvasBase}/courses/${COURSE.canvasId}`; // UPDATE canvasId above

// ================================================================
//  PROBLEM SET — one to two problems per chapter, curated from the textbook
//  Replaces the old per-chapter Cengage "Apply It" assignments. One
//  consolidated set (single Canvas assignment/document), but due
//  incrementally, not as a single end-of-term deliverable: each
//  chapter's problems are due with that module's other work, same
//  Friday 11:59 p.m. deadline as the quiz and Perusall discussion.
//  Chosen for spaced retrieval practice and to keep hand-grading from
//  colliding with final-exam grading at term's end.
//  See SCHEDULE.modules for exact per-module due dates.
// ================================================================
const PROBLEM_SET = {
  title: "Semester Problem Set",
  due:   "Incremental — each chapter's problems due with that module's other work (see Section 5 schedule)",
  aid:   "", // UPDATE each semester (Canvas assignment ID)
  // Only these modules have a problem-set entry — not every content module
  // cleared the calculation bar (see course-notes/mba6250/problem-set.html
  // and startup.md for the chapter-by-chapter selection log). Modules.html
  // uses this to decide which rows show the Problem Set reference.
  modules: [2, 3, 5, 6, 8],
};

// ================================================================
//  CASE ANALYSES
//  Only 4 of the 9 content modules carry a case (Modules 3, 5, 7, 9)
//  to control per-student HBP case cost/reading load on top of the
//  e-book. Anchored to the module in each conceptual pair (adverse
//  selection/moral hazard; employees/divisions) with the clearest
//  real-decision framework — the paired module gets a problem set
//  only. Students receive the case, analyze using the module's
//  framework, and submit a structured response. AI-assisted analysis
//  is permitted with proper disclosure. Titles below are confirmed real
//  HBP cases (product numbers in hbpProduct) found via a live catalog
//  search 2026-07-10 — see course-notes/mba6250/hbp-cases/ for full
//  rationale. Price/current availability still needs confirming on
//  hbsp.harvard.edu before ordering. aid (Canvas assignment ID) stays
//  blank until the Canvas assignment is built.
// ================================================================
const CASES = [
  { module: 3, title: "Pricing Games: Sony PlayStation and Microsoft Xbox",                       hbpProduct: "W88C82-PDF-ENG",                    due: "October 9",   aid: "" },
  { module: 5, title: "Building Trust at Scale: Airbnb's Fight Against Adverse Selection",         hbpProduct: "UV9193-PDF-ENG (+ UV9362-PDF-ENG, part B)", due: "October 23",  aid: "" },
  { module: 7, title: "First Financial Group: Designing Short-Term Employee Incentive Programs",   hbpProduct: "W20482-PDF-ENG",                    due: "November 6",  aid: "" },
  { module: 9, title: "Old Mutual Funeral Services: Vertical Integration and the Battle for Bereavement", hbpProduct: "W44640-PDF-ENG",             due: "November 20", aid: "" },
];

// ================================================================
//  CAPSTONE — FINAL EXAM
//  Replaces the former Executive Memo. In-person, closed-book written
//  exam during the university final exam period. Module 10
//  (Nov 29–Dec 4) is prep time, not the exam itself — the exam happens
//  during the Dec 7–11 exam period. Exact date/time goes in `due` once
//  the registrar/Canvas exam slot is confirmed.
// ================================================================
const CAPSTONE = {
  writtenExam: {
    title:  "Final Exam",
    format: "In-person, closed-book",
    due:    "During the university final exam period, December 7–11, 2026 (exact date/time TBD)",
    aid:    "", // UPDATE each semester (Canvas assignment ID)
  },
};

// ================================================================
//  URL DERIVATION — do not edit
//  Builds .url on every assignment entry from COURSE.canvasId + aid.
// ================================================================
const ASSIGNMENT_URL = aid =>
  aid ? `${COURSE.canvasBase}/courses/${COURSE.canvasId}/assignments/${aid}` : '';

CASES.forEach(item => { item.url = ASSIGNMENT_URL(item.aid); });
CAPSTONE.writtenExam.url = ASSIGNMENT_URL(CAPSTONE.writtenExam.aid);
PROBLEM_SET.url          = ASSIGNMENT_URL(PROBLEM_SET.aid);
CHAPTERS.forEach(ch => {
  ch.quizUrl       = ASSIGNMENT_URL(ch.quizAid);
  ch.discussionUrl = ASSIGNMENT_URL(ch.discussionAid);
});

// ================================================================
//  DERIVED — do not edit
// ================================================================
const CONFIG = {
  course:      COURSE,
  instructor:  INSTRUCTOR,
  schedule:    SCHEDULE,
  chapters:    CHAPTERS,
  grading:     GRADING,
  features:    FEATURES,
  textbook:    TEXTBOOK,
  pages:       PAGES,
  cases:       CASES,
  capstone:    CAPSTONE,
  problemSet:  PROBLEM_SET,
};
