// ================================================================
//  ECO 1000 — COURSE CONFIGURATION
//  Generated from: shared/config-template.js
//  Hosted at: bdepro.github.io/courses/eco1000/
// ================================================================
//  SEMESTER UPDATE CHECKLIST (search UPDATE to find each spot):
//  1. COURSE block       — semester, canvasId
//  2. INSTRUCTOR block   — officeHours
//  3. SCHEDULE block     — session dates, sessionStarts, finalExam
//  4. CANVAS block       — courseId, all assignment URLs
//  5. TEXTBOOK block     — ebookUrl once Canvas/Cengage is registered
//  6. QUESTIONS block    — 12 application bundle questions each semester
//  That is it. All HTML files pull from this file automatically.
// ================================================================

// ================================================================
//  COURSE
//  UPDATE: semester and canvasId each term
// ================================================================
const COURSE = {
  code:        "ECO 1000",
  title:       "Principles of Economics",
  semester:    "Fall 2026",                        // UPDATE each semester
  format:      "in-person",
  credits:     4,
  baseUrl:     "https://bdepro.github.io/courses/eco1000",
  canvasBase:  "https://elon.instructure.com",
  canvasId:    "",                                 // UPDATE each semester
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
  officeHours: "",                                 // UPDATE each semester
  zoomUrl:     "https://elon.zoom.us/my/bdepro",
  zoomDisplay: "elon.zoom.us/my/bdepro",
};

// ================================================================
//  SCHEDULE
//  UPDATE: all dates and sessions each semester
//
//  Session structure:
//    num       — session number
//    dates     — display date range string
//    label     — short label for display
//    chapter   — chapter(s) covered (null for check-in/break/viva weeks)
//    checkIn   — check-in number if one occurs this session (null otherwise)
//    checkInDay — day check-in falls on (for display)
//    mmeFF     — true if Friday is MME+FF day
//    vote      — true if question bundle vote occurs this session
//    viva      — true if viva week
//    break     — true suppresses auto-highlighting
//    note      — optional display note
// ================================================================
const SCHEDULE = {

  // Key academic dates — UPDATE each semester
  dates: {
    classesBegin:      "August 25, 2026",          // UPDATE
    dropAddEnds:       "September 1, 2026",         // UPDATE
    withdrawDeadline:  "October 30, 2026",          // UPDATE
    classesEnd:        "December 4, 2026",          // UPDATE
    readingDay:        "December 5, 2026",          // UPDATE
    examsBegin:        "December 7, 2026",          // UPDATE
    examsEnd:          "December 11, 2026",         // UPDATE
  },

  // Sessions — UPDATE dates and notes each semester
  // Chapter assignments and structure are locked for fall
  sessions: [
    {
      num: 0, dates: "Aug 26–28", label: "Introduction",
      chapter: null, checkIn: null, mmeFF: false, vote: false, viva: false, break: false,
      note: "Wed/Fri only — course introduction",
    },
    {
      num: 1, dates: "Aug 31–Sep 4", label: "Session 1",
      chapter: "ch1", checkIn: null, mmeFF: false, vote: false, viva: false, break: false,
      note: "8 guideposts introduced",
    },
    {
      num: 2, dates: "Sep 7–11", label: "Session 2",
      chapter: "ch3", checkIn: null, mmeFF: false, vote: false, viva: false, break: false,
      note: null,
    },
    {
      num: 3, dates: "Sep 14–18", label: "Session 3",
      chapter: null, checkIn: 1, checkInDay: "Wed Sep 16", mmeFF: true, vote: false, viva: false, break: false,
      note: "Mon: Review Ch. 1 & 3 · Wed: Check-In #1 · Fri: MME + FF",
    },
    {
      num: 4, dates: "Sep 21–25", label: "Session 4",
      chapter: "ch4", checkIn: null, mmeFF: false, vote: false, viva: false, break: false,
      note: null,
    },
    {
      num: 5, dates: "Sep 28–Oct 2", label: "Session 5",
      chapter: "ch7", checkIn: null, mmeFF: false, vote: false, viva: false, break: false,
      note: "Wheel of Wealth links Ch. 3 & 4 to macro",
    },
    {
      num: 6, dates: "Oct 5–9", label: "Session 6",
      chapter: null, checkIn: 2, checkInDay: "Wed Oct 7", mmeFF: true, vote: false, viva: false, break: false,
      note: "Mon: Review Ch. 4 & 7 · Wed: Check-In #2 · Fri: MME + FF",
    },
    {
      num: 7, dates: "Oct 12–13", label: "Session 7",
      chapter: "ch8", checkIn: null, mmeFF: false, vote: false, viva: false, break: false,
      note: "Mon & Tue only — Fall Break begins Wed eve",
    },
    {
      num: 8, dates: "Oct 14–19", label: "Fall Break",
      chapter: null, checkIn: null, mmeFF: false, vote: false, viva: false, break: true,
      note: "No class",
    },
    {
      num: 9, dates: "Oct 19–23", label: "Session 9",
      chapter: "ch8_ch16", checkIn: null, mmeFF: false, vote: false, viva: false, break: false,
      note: "Mon: Ch. 8 cont. · Wed–Fri: Ch. 16",
    },
    {
      num: 10, dates: "Oct 26–30", label: "Session 10",
      chapter: "ch18", checkIn: null, mmeFF: false, vote: false, viva: false, break: false,
      note: null,
    },
    {
      num: 11, dates: "Nov 2–6", label: "Session 11",
      chapter: null, checkIn: 3, checkInDay: "Wed Nov 4", mmeFF: true, vote: true, viva: false, break: false,
      note: "Mon: Review Ch. 8, 16, 18 · Wed: Check-In #3 + Canvas poll opens · Fri: MME + FF + question walk-through + top 6 announced",
    },
    {
      num: 12, dates: "Nov 9–13", label: "Session 12",
      chapter: "application", checkIn: null, mmeFF: false, vote: false, viva: false, break: false,
      note: "Application block: Questions 1–3 (student-selected from top 6)",
    },
    {
      num: 13, dates: "Nov 16–20", label: "Session 13",
      chapter: "application", checkIn: null, mmeFF: false, vote: false, viva: false, break: false,
      note: "Application block: Questions 4–6 · Thanksgiving begins Fri eve",
    },
    {
      num: 14, dates: "Nov 23–27", label: "Thanksgiving Break",
      chapter: null, checkIn: null, mmeFF: false, vote: false, viva: false, break: true,
      note: "No class",
    },
    {
      num: 15, dates: "Nov 30–Dec 4", label: "Session 14 — Viva Week",
      chapter: null, checkIn: 4, checkInDay: "Fri Dec 4", mmeFF: false, vote: false, viva: true, break: false,
      note: "Mon & Wed: Viva slots · Fri: Check-In #4 (last day of class)",
    },
  ],

  // Session start dates — drive auto-highlighting in schedule.html
  // UPDATE each semester. Format: new Date(year, month (0=Jan), day)
  // Last entry = day after classes end
  sessionStarts: [
    new Date(2026,  7, 26),  // S0:  Aug 26
    new Date(2026,  7, 31),  // S1:  Aug 31
    new Date(2026,  8,  7),  // S2:  Sep 7
    new Date(2026,  8, 14),  // S3:  Sep 14  (CI #1)
    new Date(2026,  8, 21),  // S4:  Sep 21
    new Date(2026,  8, 28),  // S5:  Sep 28
    new Date(2026,  9,  5),  // S6:  Oct 5   (CI #2)
    new Date(2026,  9, 12),  // S7:  Oct 12
    new Date(2026,  9, 14),  // S8:  Oct 14  (Fall Break)
    new Date(2026,  9, 19),  // S9:  Oct 19
    new Date(2026,  9, 26),  // S10: Oct 26
    new Date(2026, 10,  2),  // S11: Nov 2   (CI #3 + vote)
    new Date(2026, 10,  9),  // S12: Nov 9   (Application block)
    new Date(2026, 10, 16),  // S13: Nov 16  (Application block)
    new Date(2026, 10, 23),  // S14: Nov 23  (Thanksgiving Break)
    new Date(2026, 10, 30),  // S15: Nov 30  (Viva week)
    new Date(2026, 11,  5),  // Final zone: Dec 5
  ],

  // Break sessions — never highlighted
  breakSessions: [8, 14],

  // Final exam — UPDATE each semester when posted
  finalExam: [
    { section: "8:00 AM section",  date: "TBA", time: "TBA" },  // UPDATE
    { section: "12:30 PM section", date: "TBA", time: "TBA" },  // UPDATE
  ],

  // Exam period makeup viva slots
  makeupViva: {
    dates: "December 7–11, 2026",
    note:  "Makeup slots for documented conflicts. Satisfies contact hour requirement.",
  },
};

// ================================================================
//  CHAPTERS
//  Two categories: core (tested on check-ins) and application (reference)
//  Standing threads on every check-in: supply & demand, 8 guideposts
// ================================================================
const CHAPTERS = {

  // Core chapters — tested on Check-Ins #1 through #3
  core: [
    { key: "ch1",  num: "Ch. 1",  title: "The Economic Approach",                         session: 1  },
    { key: "ch3",  num: "Ch. 3",  title: "Demand, Supply, and the Market Process",        session: 2  },
    { key: "ch4",  num: "Ch. 4",  title: "Demand and Supply: Applications and Extensions", session: 4  },
    { key: "ch7",  num: "Ch. 7",  title: "Taking the Nation's Economic Pulse",            session: 5  },
    { key: "ch8",  num: "Ch. 8",  title: "Economic Fluctuations, Unemployment, and Inflation", session: 7 },
    { key: "ch16", num: "Ch. 16", title: "Creating an Environment for Growth and Prosperity", session: 9 },
    { key: "ch18", num: "Ch. 18", title: "Gaining from International Trade",               session: 10 },
  ],

  // Application reference chapters — student-selected questions in S12–S13
  // These chapters are not directly tested; students use them as analytical lenses
  application: [
    { key: "ch5",  num: "Ch. 5",  title: "Difficult Cases for the Market, and the Role of Government" },
    { key: "ch6",  num: "Ch. 6",  title: "The Economics of Political Action"                          },
    { key: "ch23", num: "Ch. 23", title: "Price-Searcher Markets with Low Entry Barriers"             },
    { key: "ch26", num: "Ch. 26", title: "Earnings, Productivity, and the Job Market"                 },
    { key: "ch26st7", num: "Ch. 26 / ST 7", title: "Earnings Differences Between Men and Women"      },
    { key: "ch28", num: "Ch. 28", title: "Income Inequality and Poverty"                             },
  ],

  // Standing threads — appear on every check-in regardless of session content
  threads: [
    { key: "sd",         title: "Supply and demand analysis" },
    { key: "guideposts", title: "The 8 guideposts of economic thinking (Ch. 1)" },
  ],

  // Check-in coverage map
  checkIns: {
    1: { chapters: ["ch1", "ch3"],        label: "Ch. 1 & 3" },
    2: { chapters: ["ch4", "ch7"],        label: "Ch. 4 & 7" },
    3: { chapters: ["ch8", "ch16","ch18"], label: "Ch. 8, 16 & 18" },
    4: { chapters: ["ch18","application"], label: "Ch. 18 + Application block · S&D · Guideposts (comprehensive)" },
  },
};

// ================================================================
//  GRADING
//  Locked weights — stress-tested against 16 student and stakeholder personas
//  UPDATE only if course structure changes significantly
// ================================================================
const GRADING = {
  components: [
    { id: "checkins", label: "Check-Ins",              weight: 45, note: "4 check-ins × ~11.25% each. Final replaces lowest if higher." },
    { id: "friday",   label: "Friday Focus",           weight: 25, note: "Written narrative + 12-minute viva conversation." },
    { id: "puzzles",  label: "Economic Puzzles",       weight: 15, note: "One per session. Lowest score dropped. Late within one week at 80%." },
    { id: "mme",      label: "Monday Morning Economist", weight: 10, note: "4 articles per semester, one per check-in block. Perusall annotation — quality of comment and interaction." },
    { id: "wellness", label: "Wellness Pause",         weight:  5, note: "Attendance and brief reflective check-in. Not evaluated for content." },
  ],
};

// ================================================================
//  FEATURES
//  true = show on home page, false = hide
//  UPDATE if sections are added or removed
// ================================================================
const FEATURES = {
  schedule:    true,
  syllabus:    true,
  assignments: true,
  textbook:    true,   // e-book only — single Cengage link
  puzzles:     true,
  badges:      false,  // replaced by check-ins in fall
  mme:         true,
  friday:      true,
  wellness:    true,
  support:     true,
  aiPolicy:    true,
  checklist:   false,  // not used in face-to-face course
  officeHours: false,
};

// ================================================================
//  TEXTBOOK — e-book only, 18th edition
//  UPDATE: ebookUrl once Canvas/Cengage course is registered
//  How to get the URL:
//    1. Register course in Cengage and link to Canvas via LTI
//    2. In Canvas, create an External Tool activity for the e-book
//    3. Copy the Canvas activity URL and paste below
// ================================================================
const TEXTBOOK = {
  publisher:  "Cengage",
  platform:   "MindTap",
  edition:    "18th",
  title:      "Economics: Private and Public Choice",
  authors:    "Gwartney, Stroup, Sobel, and Macpherson",
  ebookUrl:   "",   // UPDATE: paste Canvas LTI URL once registered
};

// ================================================================
//  QUESTIONS — Application Block Bundle
//  12 questions presented to students in S11.
//  Students vote; top 6 become the S12–S13 agenda.
//  Vote: Canvas poll opens Wed Nov 4 after CI #3.
//        Walk-through and close: Fri Nov 6 in class.
//        Top 6 announced: Fri Nov 6 end of class.
//  UPDATE: questions each semester based on current events and content
// ================================================================
const QUESTIONS = {
  voteProcess: {
    pollOpens:    "Wednesday Nov 4 — after Check-In #3",
    walkThrough:  "Friday Nov 6 — in class, opening activity",
    pollCloses:   "Friday Nov 6 — end of class",
    announced:    "Friday Nov 6 — end of class",
    bundleSize:   12,
    selectedSize:  6,
  },

  // UPDATE: all 12 questions each semester
  // chapter: which application chapter(s) this question draws on
  // Each question should be answerable using the referenced chapter as an analytical lens
  bundle: [
    // Ch. 5 — Difficult Cases for the Market, Role of Government
    { id: 1,  chapter: "ch5",  question: "" },  // UPDATE
    { id: 2,  chapter: "ch5",  question: "" },  // UPDATE

    // Ch. 6 — Economics of Political Action
    { id: 3,  chapter: "ch6",  question: "" },  // UPDATE
    { id: 4,  chapter: "ch6",  question: "" },  // UPDATE

    // Ch. 23 — Price-Searcher Markets
    { id: 5,  chapter: "ch23", question: "" },  // UPDATE
    { id: 6,  chapter: "ch23", question: "" },  // UPDATE

    // Ch. 26 + Special Topic 7 — Earnings, Labor Markets, Gender Differences
    { id: 7,  chapter: "ch26", question: "" },  // UPDATE
    { id: 8,  chapter: "ch26", question: "" },  // UPDATE

    // Ch. 28 — Income Inequality and Poverty
    { id: 9,  chapter: "ch28", question: "" },  // UPDATE
    { id: 10, chapter: "ch28", question: "" },  // UPDATE

    // Cross-chapter — draws on multiple application chapters
    { id: 11, chapter: "cross", question: "" }, // UPDATE
    { id: 12, chapter: "cross", question: "" }, // UPDATE
  ],

  // Populated after vote — top 6 selected questions
  // UPDATE: after S11 Friday vote each semester
  selected: [], // e.g. [1, 4, 6, 8, 9, 11]
};

// ================================================================
//  PAGES
//  Stable GitHub Pages URLs — update only if files move or rename
// ================================================================
const PAGES = {
  home:        `${COURSE.baseUrl}/index.html`,
  schedule:    `${COURSE.baseUrl}/schedule.html`,
  syllabus:    `${COURSE.baseUrl}/syllabus.html`,
  assignments: `${COURSE.baseUrl}/assignments.html`,
  puzzles:     `${COURSE.baseUrl}/assignments.html#puzzles`,
  mme:         `${COURSE.baseUrl}/assignments.html#mme`,
  friday:      `${COURSE.baseUrl}/assignments.html#friday`,
  wellness:    `${COURSE.baseUrl}/assignments.html#wellness`,
  support:     `https://bdepro.github.io/courses/shared/support.html`,
  aiPolicy:    `https://bdepro.github.io/courses/shared/ai-policy.html`,
};

// ================================================================
//  CANVAS ASSIGNMENTS
//  UPDATE: all URLs each semester after Canvas course is set up
//  How to get URLs:
//    1. Build your Canvas assignments
//    2. Click each assignment and copy the URL from your browser
//    3. Paste here
// ================================================================
const CANVAS = {
  courseUrl: `${COURSE.canvasBase}/courses/${COURSE.canvasId}`,

  // Economic Puzzles — one per content session, UPDATE each semester
  puzzles: [
    { session: 1,  title: "Puzzle: The Economic Approach",                         url: "" }, // UPDATE
    { session: 2,  title: "Puzzle: Demand, Supply, and the Market Process",        url: "" }, // UPDATE
    { session: 4,  title: "Puzzle: Demand and Supply Applications",                url: "" }, // UPDATE
    { session: 5,  title: "Puzzle: Taking the Nation's Economic Pulse",            url: "" }, // UPDATE
    { session: 7,  title: "Puzzle: Economic Fluctuations and Unemployment",        url: "" }, // UPDATE
    { session: 9,  title: "Puzzle: Creating an Environment for Growth",            url: "" }, // UPDATE
    { session: 10, title: "Puzzle: Gaining from International Trade",              url: "" }, // UPDATE
    { session: 12, title: "Puzzle: Application Block Week 1",                      url: "" }, // UPDATE
    { session: 13, title: "Puzzle: Application Block Week 2",                      url: "" }, // UPDATE
  ],

  // Monday Morning Economist — 4 articles per semester, one per check-in block
  // Due on the Friday of each check-in week
  // UPDATE: titles and URLs each semester
  mme: [
    { id: 1, session: 3,  due: "Fri Sep 18", title: "MME 1: TBA", url: "" }, // UPDATE — Ch. 1 & 3 block
    { id: 2, session: 6,  due: "Fri Oct 9",  title: "MME 2: TBA", url: "" }, // UPDATE — Ch. 4 & 7 block
    { id: 3, session: 11, due: "Fri Nov 6",  title: "MME 3: TBA", url: "" }, // UPDATE — Ch. 8, 16, 18 block
    { id: 4, session: 13, due: "Fri Nov 20", title: "MME 4: TBA", url: "" }, // UPDATE — Application block (due before Thanksgiving)
  ],

  // Friday Focus — UPDATE each semester
  friday: [
    { id: 1, title: "Friday Focus 1: The Economic Narrative", due: "TBA", url: "" }, // UPDATE
    { id: 2, title: "Friday Focus 2: The Narrative Viva",     due: "Viva week Nov 30–Dec 4", url: "" },
  ],

  // Check-Ins — UPDATE each semester
  checkIns: [
    { id: 1, title: "Check-In #1", date: "Wed Sep 16", covers: "Ch. 1 & 3 · S&D · Guideposts", url: "" }, // UPDATE
    { id: 2, title: "Check-In #2", date: "Wed Oct 7",  covers: "Ch. 4 & 7 · S&D · Guideposts", url: "" }, // UPDATE
    { id: 3, title: "Check-In #3", date: "Wed Nov 4",  covers: "Ch. 8, 16, 18 · S&D · Guideposts", url: "" }, // UPDATE
    { id: 4, title: "Check-In #4", date: "Fri Dec 4",  covers: "Comprehensive · Ch. 18 + Application block emphasis", url: "" }, // UPDATE
  ],
};

// ================================================================
//  DERIVED — do not edit
// ================================================================
const CONFIG = {
  course:     COURSE,
  instructor: INSTRUCTOR,
  schedule:   SCHEDULE,
  chapters:   CHAPTERS,
  grading:    GRADING,
  features:   FEATURES,
  textbook:   TEXTBOOK,
  questions:  QUESTIONS,
  pages:      PAGES,
  canvas:     CANVAS,
};
