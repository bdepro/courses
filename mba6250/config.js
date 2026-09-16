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
//  Modules run Sunday–Saturday; assignments due the following Sunday
//  at 11:59 p.m. (the night before the next Monday's class). Changed
//  from Friday to Sunday 2026-09-15, at the instructor's request, to
//  give students the full weekend.
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
  // Module 10 is a buffer week (no chapter, no problem set) — a
  // dedicated final exam prep week before the course ends. Module 4
  // has no textbook chapter either, but it is not a buffer week: it
  // carries the IMPLAN_PROJECT regional economic impact analysis
  // instead of a chapter reading.
  modules: [
    { num: 1,  dates: "Sep 20–26",      due: "September 27, 11:59 p.m.", topic: "Introduction: Incentive Alignment",
      note: "Asynchronous because of travel commitments. Optional Zoom meet-and-greet Wed, Sep 23, 7:00 p.m." },
    { num: 2,  dates: "Sep 27–Oct 3",   due: "October 4, 11:59 p.m.",    topic: "Benefits, Costs, and Decisions" },
    { num: 3,  dates: "Oct 4–10",       due: "October 11, 11:59 p.m.",    topic: "Strategic Games" },
    { num: 4,  dates: "Oct 11–17",      due: "No submission, practice week", topic: "IMPLAN Cloud Training" },
    { num: 5,  dates: "Oct 18–24",      due: "October 25, 11:59 p.m.",   topic: "The Problem of Adverse Selection" },
    { num: 6,  dates: "Oct 25–31",      due: "November 1, 11:59 p.m.",   topic: "The Problem of Moral Hazard" },
    { num: 7,  dates: "Nov 1–7",        due: "November 8, 11:59 p.m.",   topic: "Getting Employees to Work in the Firm's Best Interest" },
    { num: 8,  dates: "Nov 8–14",       due: "November 15, 11:59 p.m.",  topic: "Getting Divisions to Work in the Firm's Best Interest" },
    { num: 9,  dates: "Nov 15–21",      due: "December 2, 11:59 p.m.",  topic: "Managing Vertical Relationships" },
    { num: 10, dates: "Nov 29–Dec 4",   due: "No submission, final exam prep week", topic: "Final Exam Prep Week (Dec 7&ndash;11)" },
  ],
};

// ================================================================
//  CHAPTERS — SINGLE SOURCE OF TRUTH
//  Froeb, McCann, Ward & Shor, Managerial Economics: A Problem
//  Solving Approach, 6th edition. UPDATE each semester if chapter
//  selection changes.
//
//  8 chapters across 8 content modules; Modules 4 and 10 have no
//  assigned chapter. Module 4 carries the IMPLAN_PROJECT instead;
//  Module 10 is the final exam prep buffer week.
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
  dueTime: "11:59 p.m.",                            // universal due time, Sunday following each module's window
  components: [
    { id: "cases",           label: "Case Analyses",                  weight: 35,
      note: "One structured case analysis for each of four selected modules (Modules 3, 5, 7, 9). Applies that module's economic framework to a real managerial decision." },
    { id: "finalExam",       label: "Final Exam",                      weight: 30,
      note: "In-person, closed-book synthesis exam, December 7, 7:00–9:00 p.m. Case-style prompts spanning the whole course, plus the Module 4 IMPLAN Cloud regional economic impact analysis as one of the exam prompts (Module 4 itself carries no separate grade — practice-only week)." },
    { id: "problems",        label: "Problem Sets",                    weight: 15,
      note: "One problem set spanning the semester, eight problems across five chapters (Ch 3, 15, 19, 20, 22), selected for their calculation focus. Single due date (Dec 2, during Module 10 prep week), recommended pacing matches the weekly module schedule. Submitted with work shown; graded by hand, not auto-graded." },
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
  note:       "Obtain the textbook on your own: print, rental, or e-book, any source. Perusall (used for weekly discussions) carries its own $5/term subscription fee, separate from the textbook.",
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
//  consolidated set — single Canvas assignment, single due date (not
//  5 separate per-module assignments). The handout (Canvas Page)
//  recommends working through each chapter's problems the same week
//  as that module's other work, but Canvas only enforces one final
//  deadline: same as Module 9's due date (the last content module
//  before the buffer week). Decided 2026-09-15; shifted from Friday
//  to Sunday 2026-09-15, then moved to Wed, Dec 2 2026-09-15 at the
//  instructor's request. That date now falls during Module 10 prep
//  week, not before it as originally designed — worth a second look
//  if that timing collides with final-exam-adjacent grading.
// ================================================================
const PROBLEM_SET = {
  title: "Semester Problem Set",
  due:      "December 2, 2026, 11:59 p.m.",
  dueShort: "Dec 2", // compact form for modules.html row labels — UPDATE alongside `due` each semester
  aid:   "35875", // UPDATE each semester (Canvas assignment ID)
  // Only these modules have a problem-set entry — not every content module
  // cleared the calculation bar (see course-notes/mba6250/problem-set.html
  // and startup.md for the chapter-by-chapter selection log). Modules.html
  // uses this to decide which rows show the Problem Set reference.
  modules: [2, 3, 5, 6, 8],
};

// ================================================================
//  IMPLAN PROJECT — Module 4's regional economic impact analysis
//  Runs in IMPLAN Cloud under the instructor's academic (Classroom)
//  license, so there is no separate student cost, unlike the HBP
//  coursepack. Decided 2026-09-15: Module 4 is a practice-only week —
//  students learn the tool but submit nothing and are not graded that
//  week. The actual analysis is completed during the Dec 7 written
//  final exam, as one of that exam's prompts (see GRADING.components
//  "finalExam"). No separate Canvas assignment/aid — folded into the
//  Final Exam grade, not a standalone line.
// ================================================================
const IMPLAN_PROJECT = {
  module: 4,
  title:  "Regional Economic Impact Analysis (IMPLAN Cloud)",
  note:   "Practice week only. No submission. This analysis is completed as part of the Final Exam (December 7).",
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
//  rationale. aid (Canvas assignment ID) stays blank until the Canvas
//  assignment is built. All four are sold together as one HBP
//  coursepack — see COURSEPACK below — rather than purchased
//  individually.
// ================================================================
const CASES = [
  { module: 3, title: "Pricing Games: Sony PlayStation and Microsoft Xbox",                       hbpProduct: "W88C82-PDF-ENG",                    due: "October 11",   aid: "35892" },
  { module: 5, title: "Building Trust at Scale: Airbnb's Fight Against Adverse Selection",         hbpProduct: "UV9193-PDF-ENG (+ UV9362-PDF-ENG, part B)", due: "October 25",  aid: "35893" },
  { module: 7, title: "First Financial Group: Designing Short-Term Employee Incentive Programs",   hbpProduct: "W20482-PDF-ENG",                    due: "November 8",  aid: "35894" },
  { module: 9, title: "Old Mutual Funeral Services: Vertical Integration and the Battle for Bereavement", hbpProduct: "W44640-PDF-ENG",             due: "December 2", aid: "35895" },
];

// ================================================================
//  COURSEPACK — HBP case bundle
//  UPDATE: url/price each semester if HBP reissues the coursepack
//  under a new import link.
// ================================================================
const COURSEPACK = {
  title: "HBP Case Coursepack (required)",
  price: "$20.40",
  url:   "https://hbsp.harvard.edu/import/1431067",
  note:  "Bundles all four Harvard Business Publishing cases used in this course (Modules 3, 5, 7, 9) into a single purchase.",
};

// ================================================================
//  CAPSTONE — FINAL EXAM
//  Replaces the former Executive Memo. In-person, closed-book written
//  exam during the university final exam period. Module 10
//  (Nov 29–Dec 4) is prep time, not the exam itself — the exam is
//  Dec 7, 7:00–9:00 p.m., confirmed 2026-09-15.
// ================================================================
const CAPSTONE = {
  writtenExam: {
    title:  "Final Exam",
    format: "In-person, closed-book",
    due:    "December 7, 2026, 7:00–9:00 p.m.",
    note:   "Case-style prompts spanning the whole course, including the Module 4 IMPLAN Cloud regional economic impact analysis.",
    aid:    "35879", // UPDATE each semester (Canvas assignment ID)
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
  coursepack:  COURSEPACK,
  capstone:    CAPSTONE,
  problemSet:  PROBLEM_SET,
  implanProject: IMPLAN_PROJECT,
};
