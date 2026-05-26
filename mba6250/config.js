// ================================================================
//  MBA6250 — COURSE CONFIGURATION
//  Hosted at: bdepro.github.io/courses/mba6250/
// ================================================================
//  SEMESTER UPDATE CHECKLIST (search UPDATE to find each spot):
//  1. COURSE block: courseId, semester, instructor details, dates
//  2. MODULES array: adjust module dates and titles if needed
//  3. CENGAGE block: all LTI IDs when you register a new Cengage course
//  4. CASES block: case titles and Moodle activity IDs
//  5. MEMO block: Moodle activity ID for the Executive Memo
//  That is it. All HTML files pull from this file automatically.
// ================================================================

const COURSE = {
  moodleBase:  "https://moodle.elon.edu",   // UPDATE if institution changes
  courseId:    "",                            // UPDATE each semester (Moodle course ID)
  semester:    "Fall 2025",                  // UPDATE each semester
  courseCode:  "MBA 6250",
  courseTitle: "Managerial Economics",
  baseUrl:     "https://bdepro.github.io/courses/mba6250", // UPDATE if repo moves

  // Instructor details — UPDATE each semester if anything changes
  instructor: {
    name:        "Brooks Depro",
    nameShort:   "Prof. Depro",
    email:       "bdepro@elon.edu",
    phone:       "919-357-2316",
    office:      "KoBC 122",
    officeHours: "By appointment via Zoom",
    zoomUrl:     "https://elon.zoom.us/my/bdepro",
    zoomDisplay: "elon.zoom.us/my/bdepro",
  },

  // UPDATE each semester — 10 modules, Thanksgiving excluded
  // Modules run Sunday–Saturday; assignments due Friday midnight
  modules: [
    { num: 1,  dates: "Sept 21–27",   due: "September 26, 11:59 p.m.",  topic: "The Economic Approach to Decisions" },
    { num: 2,  dates: "Sept 28–Oct 4", due: "October 3, 11:59 p.m.",    topic: "Benefits, Costs, and the Margin" },
    { num: 3,  dates: "Oct 5–11",      due: "October 10, 11:59 p.m.",   topic: "Extent Decisions and Optimal Quantity" },
    { num: 4,  dates: "Oct 12–18",     due: "October 17, 11:59 p.m.",   topic: "Investment Decisions and Resource Allocation" },
    { num: 5,  dates: "Oct 19–25",     due: "October 24, 11:59 p.m.",   topic: "Simple Pricing and the Demand Curve" },
    { num: 6,  dates: "Oct 26–Nov 1",  due: "October 31, 11:59 p.m.",   topic: "Economies of Scale, Scope, and Industry Structure" },
    { num: 7,  dates: "Nov 2–8",       due: "November 7, 11:59 p.m.",   topic: "Game Theory and Strategic Interaction" },
    { num: 8,  dates: "Nov 9–15",      due: "November 14, 11:59 p.m.",  topic: "Bargaining, Contracting, and Incentives" },
    { num: 9,  dates: "Nov 16–22",     due: "November 21, 11:59 p.m.",  topic: "Pricing with Market Power and Price Discrimination" },
    { num: 10, dates: "Nov 30–Dec 4",  due: "December 4, 11:59 p.m.",   topic: "Information, Risk, and Agency Problems" },
  ],

  // Key academic dates — UPDATE each semester
  dates: {
    orientationBegins:   "August 31, 2025",
    classesBegin:        "September 21, 2025",
    dropDeadline:        "October 20, 2025",
    thanksgivingBreak:   "November 23–27, 2025",
    classesEnd:          "December 4, 2025",
    examsBegin:          "December 7, 2025",
    examsEnd:            "December 11, 2025",
    gradesDue:           "December 16, 2025",
  },
};

// ================================================================
//  CHAPTER LIST — SINGLE SOURCE OF TRUTH
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
//  MOODLE COURSE LINK
// ================================================================
const MOODLE_COURSE = `${COURSE.moodleBase}/course/view.php?id=${COURSE.courseId}`; // UPDATE courseId above

// ================================================================
//  SECTION PAGE URLS
// ================================================================
const PAGES = {
  home:       `${COURSE.baseUrl}/index.html`,
  syllabus:   `${COURSE.baseUrl}/syllabus.html`,
  modules:    `${COURSE.baseUrl}/modules.html`,
  cases:      `${COURSE.baseUrl}/cases.html`,
  problems:   `${COURSE.baseUrl}/problems.html`,
  memo:       `${COURSE.baseUrl}/memo.html`,
  schedule:   `${COURSE.baseUrl}/schedule.html`,
  aiPolicy:   `https://bdepro.github.io/courses/shared/ai-policy.html`,
};

// ================================================================
//  CENGAGE / MINDTAP LINKS
//  UPDATE this entire block when you register a new Cengage course.
// ================================================================
const CENGAGE = {
  // Master link — all e-book and MindTap resources
  allResources: "", // UPDATE each semester

  // Chapter E-Book Readings
  reads: {
    ch1:  "", ch2:  "", ch3:  "", ch4:  "", ch5:  "",
    ch6:  "", ch7:  "", ch8:  "", ch11: "", ch12: "",
    ch15: "", ch16: "", ch17: "", ch18: "", ch19: "",
  },

  // Chapter Problem Sets (MindTap Apply It)
  problems: {
    ch1:  "", ch2:  "", ch3:  "", ch4:  "", ch5:  "",
    ch6:  "", ch7:  "", ch8:  "", ch11: "", ch12: "",
    ch15: "", ch16: "", ch17: "", ch18: "", ch19: "",
  },
};

// ================================================================
//  CASE ANALYSES
//  One case per module. Students receive the case, analyze using
//  the chapter's framework, and submit a structured response.
//  AI-assisted analysis is permitted with proper disclosure.
//  UPDATE moodleActivityId each semester after course copy.
// ================================================================
const CASES = [
  { module: 1,  title: "TBD — The Economic Approach",              due: "September 26",  moodleActivityId: "" },
  { module: 2,  title: "TBD — Benefits, Costs, and the Margin",    due: "October 3",     moodleActivityId: "" },
  { module: 3,  title: "TBD — Extent Decisions",                   due: "October 10",    moodleActivityId: "" },
  { module: 4,  title: "TBD — Investment Decisions",               due: "October 17",    moodleActivityId: "" },
  { module: 5,  title: "TBD — Pricing Decisions",                  due: "October 24",    moodleActivityId: "" },
  { module: 6,  title: "TBD — Industry Structure",                 due: "October 31",    moodleActivityId: "" },
  { module: 7,  title: "TBD — Strategic Games",                    due: "November 7",    moodleActivityId: "" },
  { module: 8,  title: "TBD — Bargaining and Contracts",           due: "November 14",   moodleActivityId: "" },
  { module: 9,  title: "TBD — Pricing with Market Power",          due: "November 21",   moodleActivityId: "" },
  { module: 10, title: "TBD — Information and Agency Problems",    due: "December 4",    moodleActivityId: "" },
];

// ================================================================
//  EXECUTIVE MEMO ASSIGNMENT
//  Students select a real managerial decision, analyze it using
//  course frameworks, and deliver a professional memo.
//  Due at the end of the course.
// ================================================================
const MEMO = {
  title:            "Executive Memo: Applied Managerial Analysis",
  due:              "December 4, 2025, 11:59 p.m.",
  moodleActivityId: "", // UPDATE each semester
};
