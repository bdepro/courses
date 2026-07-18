// ================================================================
//  MBA 6250 — COURSE CONFIGURATION
//  Generated from: shared/config-template.js
//  Hosted at: bdepro.github.io/courses/mba6250/
// ================================================================
//  SEMESTER UPDATE CHECKLIST (search UPDATE to find each spot):
//  1. COURSE block        — semester, canvasId
//  2. INSTRUCTOR block    — officeHours each semester
//  3. SCHEDULE block      — dates and module date ranges each semester
//  4. CENGAGE block       — allResources + all reads/problems LTI links
//                           when you register a new Cengage course
//  5. CASES block         — case titles (drafted below) and
//                           aid (Canvas assignment ID) once cases are
//                           built in Canvas
//  6. CAPSTONE block      — replaces the former Executive Memo. Format
//                           not yet decided — title/due/aid are
//                           placeholders until finalized.
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
  format:      "online",
  credits:     3,
  baseUrl:     "https://bdepro.github.io/courses/mba6250",
  school:      "Love School of Business",
  canvasBase:  "https://elon.instructure.com",
  canvasId:    "",                                 // UPDATE each semester (Canvas course ID)
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
  // a mid-course synthesis/review checkpoint and a dedicated capstone
  // work week before the course ends.
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
    { num: 10, dates: "Nov 29–Dec 4",   due: "December 4, 11:59 p.m.",   topic: "Capstone Work Week — format TBD" },
  ],
};

// ================================================================
//  CHAPTERS — SINGLE SOURCE OF TRUTH
//  Froeb, McCann, Ward & Shor, Managerial Economics: A Problem
//  Solving Approach (Cengage), 6th edition. Keys must match keys
//  in CENGAGE. UPDATE each semester if chapter selection changes.
//
//  8 chapters across 8 content modules; Modules 4 and 10 are
//  buffer weeks (synthesis/review, capstone work week) with no
//  assigned chapter.
// ================================================================
const CHAPTERS = [
  { key: "ch1",  num: "Ch 1",  title: "Introduction: Incentive Alignment",                          module: 1 },
  { key: "ch3",  num: "Ch 3",  title: "Benefits, Costs, and Decisions",                             module: 2 },
  { key: "ch15", num: "Ch 15", title: "Strategic Games",                                            module: 3 },
  { key: "ch19", num: "Ch 19", title: "The Problem of Adverse Selection",                           module: 5 },
  { key: "ch20", num: "Ch 20", title: "The Problem of Moral Hazard",                                module: 6 },
  { key: "ch21", num: "Ch 21", title: "Getting Employees to Work in the Firm's Best Interest",      module: 7 },
  { key: "ch22", num: "Ch 22", title: "Getting Divisions to Work in the Firm's Best Interest",      module: 8 },
  { key: "ch23", num: "Ch 23", title: "Managing Vertical Relationships",                            module: 9 },
];

// ================================================================
//  GRADING
//  Weights must sum to 100. UPDATE only if course structure changes.
// ================================================================
const GRADING = {
  dueTime: "11:59 p.m.",                            // universal due time — Friday of each module
  components: [
    { id: "cases",       label: "Case Analyses",              weight: 40,
      note: "One structured case analysis for each of four selected modules (Modules 3, 5, 7, 9). Applies that module's economic framework to a real managerial decision." },
    { id: "problems",    label: "Problem Sets",                weight: 30,
      note: "One quantitative problem set per chapter (8 total) via the Cengage e-book platform." },
    { id: "capstone",    label: "Capstone Assignment (TBD)",   weight: 20,
      note: "Format not yet finalized — replaces the former Executive Memo. Placeholder weight retained until decided." },
    { id: "participation", label: "Participation",             weight: 10,
      note: "Discussion-board engagement in Canvas, one prompt per module." },
  ],
};

// ================================================================
//  FEATURES
//  true = show on home page, false = hide
//  UPDATE if sections are added or removed
// ================================================================
const FEATURES = {
  syllabus:      true,
  cases:         true,   // links out to Canvas case-analysis activities
  problems:      true,   // links out to Cengage e-book problem sets
  capstone:      true,   // links out to Canvas capstone assignment (format TBD)
  materials:     true,   // links out to Cengage e-book resources
  support:       true,
  aiPolicy:      true,
};

// ================================================================
//  TEXTBOOK — e-book only via Cengage
//  UPDATE: ebookUrl once Canvas/Cengage course is registered
// ================================================================
const TEXTBOOK = {
  publisher:  "Cengage",
  platform:   "E-Book",
  edition:    "6th",
  title:      "Managerial Economics: A Problem Solving Approach",
  authors:    "Froeb, McCann, Ward, and Shor",
  ebookUrl:   "",   // UPDATE: paste Canvas LTI URL once registered
  note:       "Available as an e-book only, linked through Canvas. No print copy is required.",
};

// ================================================================
//  PAGES
//  Stable GitHub Pages URLs — update only if files move or rename.
//  MBA 6250 keeps its weekly content in Canvas; there are no separate
//  GitHub Pages content pages beyond syllabus.html (unlike ECO 1000's
//  checklist/puzzles pages). Cards on index.html link straight to
//  Canvas and Cengage instead.
// ================================================================
const PAGES = {
  home:        `${COURSE.baseUrl}/index.html`,
  syllabus:    `${COURSE.baseUrl}/syllabus.html`,
  support:     `https://bdepro.github.io/courses/shared/support.html`,
  aiPolicy:    `https://bdepro.github.io/courses/shared/ai-policy.html`,
};

// ================================================================
//  CANVAS COURSE LINK
// ================================================================
const CANVAS_COURSE = `${COURSE.canvasBase}/courses/${COURSE.canvasId}`; // UPDATE canvasId above

// ================================================================
//  CENGAGE LINKS
//  UPDATE this entire block when you register a new Cengage course.
// ================================================================
const CENGAGE = {
  // Master link — all e-book resources
  allResources: "", // UPDATE each semester

  // Chapter E-Book Readings — keyed by CHAPTERS[].key
  reads: {
    ch1: "", ch3: "", ch15: "", ch19: "", ch20: "", ch21: "", ch22: "", ch23: "",
  },

  // Chapter Problem Sets (Cengage Apply It) — keyed by CHAPTERS[].key
  problems: {
    ch1: "", ch3: "", ch15: "", ch19: "", ch20: "", ch21: "", ch22: "", ch23: "",
  },
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
//  CAPSTONE ASSIGNMENT — FORMAT TBD
//  Replaces the former Executive Memo. Final deliverable format has
//  not been decided. Placeholder title/due/aid until finalized;
//  weight (20%, see GRADING) is reserved in the meantime.
// ================================================================
const CAPSTONE = {
  title:            "Capstone Assignment — Format TBD",
  due:              "December 4, 2026, 11:59 p.m.",   // UPDATE once format is decided
  aid:              "", // UPDATE each semester (Canvas assignment ID)
};

// ================================================================
//  URL DERIVATION — do not edit
//  Builds .url on every assignment entry from COURSE.canvasId + aid.
// ================================================================
const ASSIGNMENT_URL = aid =>
  aid ? `${COURSE.canvasBase}/courses/${COURSE.canvasId}/assignments/${aid}` : '';

CASES.forEach(item => { item.url = ASSIGNMENT_URL(item.aid); });
CAPSTONE.url = ASSIGNMENT_URL(CAPSTONE.aid);

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
  cengage:     CENGAGE,
  cases:       CASES,
  capstone:    CAPSTONE,
};
