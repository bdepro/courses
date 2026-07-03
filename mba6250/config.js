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
//  6. MEMO block          — aid (Canvas assignment ID) once the memo
//                           assignment is built in Canvas
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
  school:      "Martha and Spencer Love School of Business",
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
  modules: [
    { num: 1,  dates: "Sep 20–26",      due: "September 25, 11:59 p.m.", topic: "The Economic Approach to Decisions" },
    { num: 2,  dates: "Sep 27–Oct 3",   due: "October 2, 11:59 p.m.",    topic: "Benefits, Costs, and the Margin" },
    { num: 3,  dates: "Oct 4–10",       due: "October 9, 11:59 p.m.",    topic: "Extent Decisions and Optimal Quantity" },
    { num: 4,  dates: "Oct 11–17",      due: "October 16, 11:59 p.m.",   topic: "Investment Decisions and Resource Allocation" },
    { num: 5,  dates: "Oct 18–24",      due: "October 23, 11:59 p.m.",   topic: "Simple Pricing and the Demand Curve" },
    { num: 6,  dates: "Oct 25–31",      due: "October 30, 11:59 p.m.",   topic: "Economies of Scale, Scope, and Industry Structure" },
    { num: 7,  dates: "Nov 1–7",        due: "November 6, 11:59 p.m.",   topic: "Game Theory and Strategic Interaction" },
    { num: 8,  dates: "Nov 8–14",       due: "November 13, 11:59 p.m.",  topic: "Bargaining, Contracting, and Incentives" },
    { num: 9,  dates: "Nov 15–21",      due: "November 20, 11:59 p.m.",  topic: "Pricing with Market Power and Price Discrimination" },
    { num: 10, dates: "Nov 29–Dec 4",   due: "December 4, 11:59 p.m.",   topic: "Information, Risk, and Agency Problems" },
  ],
};

// ================================================================
//  CHAPTERS — SINGLE SOURCE OF TRUTH
//  Froeb, McCann, Ward & Shor, Managerial Economics: A Problem
//  Solving Approach (Cengage). Keys must match keys in CENGAGE.
//  UPDATE each semester if chapter selection changes.
// ================================================================
const CHAPTERS = [
  // Module 1 — The Economic Approach
  { key: "ch1",  num: "Ch 1",  title: "Introduction",                                    module: 1 },
  { key: "ch2",  num: "Ch 2",  title: "The One Lesson of Business",                      module: 1 },

  // Module 2 — Benefits, Costs, and the Margin
  { key: "ch3",  num: "Ch 3",  title: "Benefits, Costs, and Decisions",                  module: 2 },

  // Module 3 — Extent Decisions
  { key: "ch4",  num: "Ch 4",  title: "Extent (How Much) Decisions",                     module: 3 },

  // Module 4 — Investment Decisions
  { key: "ch5",  num: "Ch 5",  title: "Investment Decisions: Look Ahead and Reason Back", module: 4 },

  // Module 5 — Simple Pricing
  { key: "ch6",  num: "Ch 6",  title: "Simple Pricing",                                  module: 5 },

  // Module 6 — Industry Structure
  { key: "ch7",  num: "Ch 7",  title: "Economies of Scale and Scope",                    module: 6 },
  { key: "ch8",  num: "Ch 8",  title: "Understanding Markets and Industry Structure",     module: 6 },

  // Module 7 — Game Theory
  { key: "ch15", num: "Ch 15", title: "Strategic Games",                                  module: 7 },

  // Module 8 — Bargaining and Contracting
  { key: "ch16", num: "Ch 16", title: "Bargaining",                                      module: 8 },
  { key: "ch19", num: "Ch 19", title: "The Problem of Adverse Selection",                 module: 8 },

  // Module 9 — Pricing with Market Power
  { key: "ch11", num: "Ch 11", title: "Bundling and Intrafirm Pricing",                  module: 9 },
  { key: "ch12", num: "Ch 12", title: "More Pricing Strategies",                         module: 9 },

  // Module 10 — Information and Agency
  { key: "ch17", num: "Ch 17", title: "Moral Hazard",                                    module: 10 },
  { key: "ch18", num: "Ch 18", title: "Agency and Performance Pay",                      module: 10 },
];

// ================================================================
//  GRADING
//  Weights must sum to 100. UPDATE only if course structure changes.
// ================================================================
const GRADING = {
  dueTime: "11:59 p.m.",                            // universal due time — Friday of each module
  components: [
    { id: "cases",       label: "Case Analyses",              weight: 40,
      note: "One structured case analysis per module. Applies the module's economic framework to a real managerial decision." },
    { id: "problems",    label: "Problem Sets",                weight: 30,
      note: "One quantitative problem set per module via the Cengage e-book platform." },
    { id: "memo",        label: "Executive Memo",              weight: 20,
      note: "Capstone deliverable due at the end of the course." },
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
  memo:          true,   // links out to Canvas memo assignment
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
  edition:    "5th",
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
    ch1:  "", ch2:  "", ch3:  "", ch4:  "", ch5:  "",
    ch6:  "", ch7:  "", ch8:  "", ch11: "", ch12: "",
    ch15: "", ch16: "", ch17: "", ch18: "", ch19: "",
  },

  // Chapter Problem Sets (Cengage Apply It) — keyed by CHAPTERS[].key
  problems: {
    ch1:  "", ch2:  "", ch3:  "", ch4:  "", ch5:  "",
    ch6:  "", ch7:  "", ch8:  "", ch11: "", ch12: "",
    ch15: "", ch16: "", ch17: "", ch18: "", ch19: "",
  },
};

// ================================================================
//  CASE ANALYSES
//  One case per module. Students receive the case, analyze using
//  the module's framework, and submit a structured response.
//  AI-assisted analysis is permitted with proper disclosure.
//  Titles below are drafted to match each module's framework —
//  UPDATE once real case materials are selected. aid (Canvas
//  assignment ID) stays blank until the Canvas assignment is built.
// ================================================================
const CASES = [
  { module: 1,  title: "The One Lesson in Practice: A Make-or-Buy Decision",            due: "September 25", aid: "" },
  { module: 2,  title: "Weighing the Marginal Costs of a New Product Line",             due: "October 2",    aid: "" },
  { module: 3,  title: "How Much to Produce: Scaling a Manufacturing Run",              due: "October 9",    aid: "" },
  { module: 4,  title: "Look Ahead, Reason Back: Evaluating a Capital Investment",      due: "October 16",   aid: "" },
  { module: 5,  title: "Setting the Price: Demand Analysis for a New Service",          due: "October 23",   aid: "" },
  { module: 6,  title: "Scale, Scope, and Structure in a Consolidating Industry",       due: "October 30",   aid: "" },
  { module: 7,  title: "A Pricing Standoff: Strategic Games Between Rivals",            due: "November 6",   aid: "" },
  { module: 8,  title: "Negotiating Under Asymmetric Information",                      due: "November 13",  aid: "" },
  { module: 9,  title: "Bundling and Price Discrimination in Subscription Services",    due: "November 20",  aid: "" },
  { module: 10, title: "Designing Incentives to Curb Moral Hazard",                     due: "December 4",   aid: "" },
];

// ================================================================
//  EXECUTIVE MEMO ASSIGNMENT
//  Students select a real managerial decision, analyze it using
//  course frameworks, and deliver a professional memo.
//  Due at the end of the course.
// ================================================================
const MEMO = {
  title:            "Executive Memo: Applied Managerial Analysis",
  due:              "December 4, 2026, 11:59 p.m.",   // UPDATE each semester
  aid:              "", // UPDATE each semester (Canvas assignment ID)
};

// ================================================================
//  URL DERIVATION — do not edit
//  Builds .url on every assignment entry from COURSE.canvasId + aid.
// ================================================================
const ASSIGNMENT_URL = aid =>
  aid ? `${COURSE.canvasBase}/courses/${COURSE.canvasId}/assignments/${aid}` : '';

CASES.forEach(item => { item.url = ASSIGNMENT_URL(item.aid); });
MEMO.url = ASSIGNMENT_URL(MEMO.aid);

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
  memo:        MEMO,
};
