// ================================================================
//  COURSE CONFIG TEMPLATE — bdepro.github.io/courses/
//  Version: 1.0
// ================================================================
//  HOW TO USE THIS TEMPLATE
//  1. Copy this file into your course folder and rename it config.js
//  2. Fill in every field marked UPDATE
//  3. Set FEATURES flags to true/false based on what your course uses
//  4. Delete any optional blocks your course doesn't need
//  5. Search UPDATE before each semester to find what to refresh
// ================================================================

// ================================================================
//  COURSE — required for every course
//  UPDATE all fields each semester
// ================================================================
const COURSE = {
  code:        "ECO 1000",                    // UPDATE: e.g. "ECO 1000", "COR 1100"
  title:       "Principles of Economics",     // UPDATE: full course title
  semester:    "Fall 2026",                   // UPDATE: e.g. "Fall 2026"
  format:      "in-person",                   // UPDATE: "in-person", "online", "hybrid"
  credits:     4,                             // UPDATE: credit hours
  baseUrl:     "https://bdepro.github.io/courses/eco1000", // UPDATE: GitHub Pages URL for this course
};

// ================================================================
//  INSTRUCTOR — required for every course
//  UPDATE if office or contact changes
// ================================================================
const INSTRUCTOR = {
  name:        "Professor Depro",             // UPDATE
  email:       "bdepro@elon.edu",             // UPDATE
  office:      "KoBC 122",                    // UPDATE
  zoomUrl:     "https://elon.zoom.us/my/bdepro", // UPDATE
  officeHours: "",                            // UPDATE: e.g. "Mon/Wed 2–4 PM or by appointment"
};

// ================================================================
//  SCHEDULE — required for every course
//  UPDATE dates each semester
//  For weekly courses: one entry per week
//  For session-based courses: one entry per session
// ================================================================
const SCHEDULE = {
  // Key academic dates
  dates: {
    classesBegin:      "August 25, 2026",     // UPDATE
    dropAddEnds:       "September 1, 2026",   // UPDATE
    withdrawDeadline:  "October 30, 2026",    // UPDATE
    classesEnd:        "December 4, 2026",    // UPDATE
    readingDay:        "December 5, 2026",    // UPDATE (omit if not applicable)
    examsBegin:        "December 7, 2026",    // UPDATE
    examsEnd:          "December 11, 2026",   // UPDATE
  },

  // Sessions or weeks — one object per unit
  // num: display number, dates: date range string, due: primary due date
  // UPDATE each semester
  sessions: [
    { num: 0,  dates: "Aug 26–28",     due: null,                  label: "Introduction" },
    { num: 1,  dates: "Aug 31–Sep 4",  due: "Sep 5, 11:59 PM",    label: "Session 1" },
    { num: 2,  dates: "Sep 7–11",      due: "Sep 12, 11:59 PM",   label: "Session 2" },
    { num: 3,  dates: "Sep 14–18",     due: "Sep 19, 11:59 PM",   label: "Session 3" },
    { num: 4,  dates: "Sep 21–25",     due: "Sep 26, 11:59 PM",   label: "Session 4" },
    { num: 5,  dates: "Sep 28–Oct 2",  due: "Oct 3, 11:59 PM",    label: "Session 5" },
    { num: 6,  dates: "Oct 5–9",       due: "Oct 10, 11:59 PM",   label: "Session 6" },
    { num: 7,  dates: "Oct 12–13",     due: null,                  label: "Session 7" },
    { num: 8,  dates: "Oct 14–19",     due: null,                  label: "Fall Break",  break: true },
    { num: 9,  dates: "Oct 19–23",     due: "Oct 24, 11:59 PM",   label: "Session 9" },
    { num: 10, dates: "Oct 26–30",     due: "Oct 31, 11:59 PM",   label: "Session 10" },
    { num: 11, dates: "Nov 2–6",       due: "Nov 7, 11:59 PM",    label: "Session 11" },
    { num: 12, dates: "Nov 9–13",      due: "Nov 14, 11:59 PM",   label: "Session 12" },
    { num: 13, dates: "Nov 16–20",     due: "Nov 21, 11:59 PM",   label: "Session 13" },
    { num: 14, dates: "Nov 30–Dec 4",  due: "Dec 5, 11:59 PM",    label: "Session 14" },
  ],

  // Final exam details — UPDATE each semester
  finalExam: [
    { section: "8:00 AM section",   date: "Tuesday, May 19, 2026",  time: "8:30–9:40 AM" },
    { section: "12:30 PM section",  date: "Monday, May 18, 2026",   time: "1:00–2:10 PM" },
  ],
};

// ================================================================
//  PAGES — required for every course
//  Stable GitHub Pages URLs for all section pages
//  UPDATE baseUrl in COURSE block above; these build automatically
//  Add or remove entries to match your actual files
// ================================================================
const PAGES = {
  home:        `${COURSE.baseUrl}/index.html`,
  schedule:    `${COURSE.baseUrl}/schedule.html`,
  syllabus:    `${COURSE.baseUrl}/syllabus.html`,
  assignments: `${COURSE.baseUrl}/assignments.html`,
  support:     `https://bdepro.github.io/courses/shared/support.html`,   // shared
  aiPolicy:    `https://bdepro.github.io/courses/shared/ai-policy.html`, // shared
};

// ================================================================
//  GRADING — required for every course
//  Used to display grade weights on home page cards
//  Weights should sum to 100
//  UPDATE each semester if grading structure changes
// ================================================================
const GRADING = {
  components: [
    { id: "checkins",    label: "Check-Ins",           weight: 40,  pageKey: "assignments" },
    { id: "puzzles",     label: "Economic Puzzles",     weight: 25,  pageKey: "assignments" },
    { id: "badges",      label: "Achievement Badges",   weight: 35,  pageKey: "assignments" },
  ],
};

// ================================================================
//  FEATURES — required for every course
//  Set to true to show, false to hide each section
//  Drives which cards appear on the home page
// ================================================================
const FEATURES = {
  schedule:       true,   // session-by-session schedule page
  syllabus:       true,   // course syllabus page
  assignments:    true,   // graded assignments page
  checklist:      false,  // weekly checklist (online/hybrid courses)
  textbook:       false,  // publisher platform (Cengage, Pearson, etc.)
  badges:         false,  // achievement badge tracker
  puzzles:        false,  // economic puzzles
  mme:            false,  // Monday Morning Economist (Perusall)
  friday:         false,  // Friday Focus assignments
  vivaPrep:       false,  // oral exam prep guide
  narrativeGuide: false,  // narrative writing guide
  officeHours:    false,  // dedicated office hours page
  support:        true,   // campus support resources (shared)
  aiPolicy:       true,   // AI policy (shared)
};

// ================================================================
//  TEXTBOOK — optional block
//  Only needed if FEATURES.textbook = true
//  Supports any publisher platform (Cengage, Pearson, OpenStax, etc.)
//  DELETE this block if your course has no publisher text
// ================================================================
const TEXTBOOK = {
  publisher:   "Cengage",                     // UPDATE: publisher name
  platform:    "MindTap",                     // UPDATE: platform name
  edition:     "17th",                        // UPDATE: edition
  title:       "Economics: Private and Public Choice", // UPDATE
  authors:     "Gwartney et al.",             // UPDATE
  allResources: "",                           // UPDATE: master link to all resources

  // Chapter list — drives all textbook section pages
  // UPDATE each semester if chapter selection changes
  chapters: [
    { key: "ch1",  num: "Ch 1",  title: "The Economic Approach",               week: 1 },
    { key: "ch3",  num: "Ch 3",  title: "Demand, Supply, and Market Process",  week: 1 },
  ],

  // Per-chapter links — UPDATE when you register a new course
  reads:   {},  // e.g. { ch1: "https://...", ch3: "https://..." }
  videos:  {},
  badges:  {},
  puzzles: {},
  testPrep: "",
};

// ================================================================
//  MME — optional block
//  Only needed if FEATURES.mme = true
//  DELETE this block if your course doesn't use MME
// ================================================================
const MME = {
  platform:     "Perusall",                   // UPDATE: annotation platform
  platformUrl:  "",                           // UPDATE: base course URL in Perusall
  articles: [
    // { id: 1, title: "Article Title", url: "" }, // UPDATE each semester
  ],
};

// ================================================================
//  ASSIGNMENTS — optional block
//  Only needed for courses with specific named assignments
//  DELETE this block if not needed
// ================================================================
const ASSIGNMENTS = {
  items: [
    // { id: 1, title: "Assignment Title", due: "Date", url: "", weight: 20 },
  ],
};

// ================================================================
//  CANVAS — optional block
//  Only needed if you want deep links into Canvas activities
//  DELETE this block if linking to GitHub Pages pages only
// ================================================================
const CANVAS = {
  baseUrl:  "https://elon.instructure.com",
  courseId: "",                               // UPDATE each semester
};

// ================================================================
//  DERIVED VALUES — do not edit
//  These are computed automatically from the blocks above
// ================================================================
const CONFIG = {
  course:      COURSE,
  instructor:  INSTRUCTOR,
  schedule:    SCHEDULE,
  pages:       PAGES,
  grading:     GRADING,
  features:    FEATURES,
  textbook:    typeof TEXTBOOK !== 'undefined' ? TEXTBOOK : null,
  mme:         typeof MME      !== 'undefined' ? MME      : null,
  assignments: typeof ASSIGNMENTS !== 'undefined' ? ASSIGNMENTS : null,
  canvas:      typeof CANVAS   !== 'undefined' ? CANVAS   : null,
};
