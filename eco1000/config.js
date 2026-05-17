// ================================================================
//  ECO 1000 — COURSE CONFIGURATION
//  Generated from: shared/config-template.js
//  Hosted at: bdepro.github.io/courses/eco1000/
// ================================================================
//  SEMESTER UPDATE CHECKLIST (search UPDATE to find each spot):
//  1. COURSE block         — semester, canvasId
//  2. INSTRUCTOR block     — officeHours
//  3. SCHEDULE block       — session dates, sessionStarts, finalExam,
//                            finalExamPeriod section and schedule times
//  4. CANVAS block         — courseId, all assignment URLs,
//                            viva sign-up URL, worksheet URLs
//  5. TEXTBOOK block       — ebookUrl once Canvas/Cengage is registered
//  6. QUESTIONS block      — 12 application bundle questions each semester
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
  canvasId:    "1397",                             // UPDATE each semester
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
//    num         — session number
//    dates       — display date range string
//    label       — short label for display
//    chapter     — chapter(s) covered (null for check-in/break/viva weeks)
//    checkIn     — check-in number if one occurs this session (null otherwise)
//    checkInDay  — day check-in falls on (for display)
//    mmeFF       — true if Friday is MME launch + FF progress day
//    vote        — true if question bundle vote occurs this session
//    viva        — true if viva week
//    break       — true suppresses auto-highlighting
//    breakType   — 'fall' or 'thanksgiving' — drives card rendering
//                  without relying on label string matching
//    note        — optional internal note (not student-facing)
//
//  Due date logic (locked — do not change without updating schedule.html):
//    All puzzles and readings due Monday at 11:59 a.m. of each session.
//    MME introduced Friday of check-in week, due Monday at 11:59 a.m.
//    before the NEXT check-in session.
//    Friday Focus written narrative due Monday Nov 30 at 11:59 a.m.
//    CI 4 always counts. Replaces lowest of CI 1-3 if higher.
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
      num: 0, dates: "Aug 26-28", label: "Introduction",
      chapter: null, checkIn: null, mmeFF: false, vote: false, viva: false,
      break: false, breakType: null,
      note: "Wed/Fri only — course introduction",
    },
    {
      num: 1, dates: "Aug 31-Sep 4", label: "Session 1",
      chapter: "ch1", checkIn: null, mmeFF: false, vote: false, viva: false,
      break: false, breakType: null,
      note: "8 guideposts introduced",
    },
    {
      num: 2, dates: "Sep 7-11", label: "Session 2",
      chapter: "ch3", checkIn: null, mmeFF: false, vote: false, viva: false,
      break: false, breakType: null,
      note: null,
    },
    {
      num: 3, dates: "Sep 14-18", label: "Session 3",
      chapter: null, checkIn: 1, checkInDay: "Wed Sep 16",
      mmeFF: true, vote: false, viva: false, break: false, breakType: null,
      note: "Mon: Review Ch. 1 & 3 / Wed: Check-In #1 / Fri: MME launch + FF progress",
    },
    {
      num: 4, dates: "Sep 21-25", label: "Session 4",
      chapter: "ch4", checkIn: null, mmeFF: false, vote: false, viva: false,
      break: false, breakType: null,
      note: null,
    },
    {
      num: 5, dates: "Sep 28-Oct 2", label: "Session 5",
      chapter: "ch7", checkIn: null, mmeFF: false, vote: false, viva: false,
      break: false, breakType: null,
      note: "Wheel of Wealth links Ch. 3 & 4 to macro",
    },
    {
      num: 6, dates: "Oct 5-9", label: "Session 6",
      chapter: null, checkIn: 2, checkInDay: "Wed Oct 7",
      mmeFF: true, vote: false, viva: false, break: false, breakType: null,
      note: "Mon: Review Ch. 4 & 7 / Wed: Check-In #2 / Fri: MME launch + FF progress",
    },
    {
      num: 7, dates: "Oct 12-13", label: "Session 7",
      chapter: "ch8", checkIn: null, mmeFF: false, vote: false, viva: false,
      break: false, breakType: null,
      note: "Mon & Tue only — Fall Break begins Wed",
    },
    {
      num: 8, dates: "Oct 14-18", label: "Fall Break",
      chapter: null, checkIn: null, mmeFF: false, vote: false, viva: false,
      break: true, breakType: "fall",              // CHANGED: breakType added
      note: "No class",
    },
    {
      num: 9, dates: "Oct 19-23", label: "Session 9",
      chapter: "ch8_ch16", checkIn: null, mmeFF: false, vote: false, viva: false,
      break: false, breakType: null,
      note: "Mon: Ch. 8 cont. / Wed-Fri: Ch. 16",
    },
    {
      num: 10, dates: "Oct 26-30", label: "Session 10",
      chapter: "ch18", checkIn: null, mmeFF: false, vote: false, viva: false,
      break: false, breakType: null,
      note: null,
    },
    {
      num: 11, dates: "Nov 2-6", label: "Session 11",
      chapter: null, checkIn: 3, checkInDay: "Wed Nov 4",
      mmeFF: true, vote: true, viva: false, break: false, breakType: null,
      note: "Mon: Review Ch. 8, 16, 18 / Wed: Check-In #3 + Canvas poll opens / Fri: MME launch + FF progress + question walk-through + top 6 announced",
    },
    {
      num: 12, dates: "Nov 9-13", label: "Session 12",
      chapter: "application", checkIn: null, mmeFF: false, vote: false, viva: false,
      break: false, breakType: null,
      note: "Application block: Questions 1-3 (student-selected from top 6)",
    },
    {
      num: 13, dates: "Nov 16-20", label: "Session 13",
      chapter: "application", checkIn: null, mmeFF: false, vote: false, viva: false,
      break: false, breakType: null,
      note: "Application block: Questions 4-6 / Thanksgiving begins Fri eve",
    },
    {
      num: 14, dates: "Nov 23-27", label: "Thanksgiving Break",
      chapter: null, checkIn: null, mmeFF: false, vote: false, viva: false,
      break: true, breakType: "thanksgiving",      // CHANGED: breakType added
      note: "No class",
    },
    {
      num: 15, dates: "Nov 30-Dec 4", label: "Viva Week",
      chapter: null, checkIn: 4, checkInDay: "Fri Dec 4",
      mmeFF: false, vote: false, viva: true, break: false, breakType: null,
      note: "Mon & Wed: Viva slots / Fri: Check-In #4 (last day of class)",
    },
  ],

  // Session start dates — drive auto-highlighting in schedule.html
  // UPDATE each semester. Format: new Date(year, month (0=Jan), day)
  // Last entry = day after classes end
  sessionStarts: [
    new Date(2026,  4, 16),  // S0:  Aug 26
    new Date(2026,  8, 31),  // S1:  Aug 31
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

  // Break sessions by index — never highlighted
  breakSessions: [8, 14],

  // Final exam period — UPDATE each semester when posted
  // CI 4 may be taken on the last day of class (Fri Dec 4) OR
  // during the final exam period below. Student's choice.
  finalExam: [
    { section: "8:00 a.m. section",  date: "TBA", time: "TBA" },  // UPDATE
    { section: "12:30 p.m. section", date: "TBA", time: "TBA" },  // UPDATE
  ],

  // ── CHANGED: expanded from makeupViva to finalExamPeriod ──────
  // Final exam period covers three student populations:
  //   Population 1 — viva done in viva week, CI 4 done on Fri Dec 4.
  //                  Must complete online worksheet during exam block.
  //   Population 2 — viva done in viva week, CI 4 deferred.
  //                  Takes CI 4 during exam block.
  //   Population 3 — viva deferred. Completes viva + CI 4 during exam block.
  // Viva sign-up and worksheet links live in CANVAS block below.
  finalExamPeriod: {
    dates:          "December 7-11, 2026",          // UPDATE each semester
    vivaSignupUrl:  "",                              // UPDATE: Canvas Scheduler URL
    // Population 1 worksheet — completed online within the 3-hour exam block
    worksheetNote:  "Complete the online worksheet within your scheduled exam block. You may do it from anywhere.",
    // Equity note — displayed near the viva sign-up pill
    signupEquityNote: "No computer access? Contact Prof. Depro and he will assign your slot.",
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
    { key: "ch1",  num: "Ch. 1",  title: "The Economic Approach",                          session: 1  },
    { key: "ch3",  num: "Ch. 3",  title: "Demand, Supply, and the Market Process",         session: 2  },
    { key: "ch4",  num: "Ch. 4",  title: "Demand and Supply: Applications and Extensions", session: 4  },
    { key: "ch7",  num: "Ch. 7",  title: "Taking the Nation's Economic Pulse",             session: 5  },
    { key: "ch8",  num: "Ch. 8",  title: "Economic Fluctuations, Unemployment, and Inflation", session: 7 },
    { key: "ch16", num: "Ch. 16", title: "Creating an Environment for Growth and Prosperity", session: 9 },
    { key: "ch18", num: "Ch. 18", title: "Gaining from International Trade",                session: 10 },
  ],

  // Application reference chapters — student-selected questions in S12-S13
  // Not directly tested; students use them as analytical lenses
  application: [
    { key: "ch5",     num: "Ch. 5",        title: "Difficult Cases for the Market, and the Role of Government" },
    { key: "ch6",     num: "Ch. 6",        title: "The Economics of Political Action"                          },
    { key: "ch23",    num: "Ch. 23",       title: "Price-Searcher Markets with Low Entry Barriers"             },
    { key: "ch26",    num: "Ch. 26",       title: "Earnings, Productivity, and the Job Market"                 },
    { key: "ch28",    num: "Ch. 28",       title: "Income Inequality and Poverty"                              },
  ],

  // Standing threads — appear on every check-in regardless of session content
  threads: [
    { key: "sd",         title: "Supply and demand analysis" },
    { key: "guideposts", title: "The 8 guideposts of economic thinking (Ch. 1)" },
  ],

  // Check-in coverage map
  checkIns: {
    1: { chapters: ["ch1", "ch3"],              label: "Ch. 1 & 3" },
    2: { chapters: ["ch4", "ch7"],              label: "Ch. 4 & 7" },
    3: { chapters: ["ch8", "ch16", "ch18"],     label: "Ch. 8, 16 & 18" },
    4: { chapters: ["ch18", "application"],     label: "Ch. 18 + Application block / S&D / Guideposts (comprehensive)" },
  },
};

// ================================================================
//  GRADING
//  Locked weights — persona-reviewed
//  Due date policy (locked):
//    All work due Monday at 11:59 a.m. of each session.
//    CI 4 always counts. Replaces lowest of CI 1-3 if higher.
//  UPDATE only if course structure changes significantly.
// ================================================================
const GRADING = {
  dueTime: "11:59 a.m.",                           // universal due time — Monday of each session
  components: [
    { id: "checkins", label: "Check-Ins",              weight: 50,
      note: "4 check-ins. CI 4 always counts. Replaces lowest of CI 1-3 if higher. Each CI includes S&D and 8 guideposts." },
    { id: "friday",   label: "Friday Focus",           weight: 25,
      note: "Written narrative due Mon Nov 30 at 11:59 a.m. Viva conversation during viva week." },
    { id: "puzzles",  label: "Economic Puzzles",       weight: 15,
      note: "One per content session. Lowest score dropped. Late within one week at 80%." },
    { id: "mme",      label: "Monday Morning Economist", weight: 10,
      note: "4 articles per semester, one per check-in block. Introduced Friday of check-in week. Due Monday at 11:59 a.m. before the next check-in." },
  ],
  ungraded: [
    { id: "wellness", label: "Wellness Pause",
      note: "Attendance and brief reflective check-in each class. Not graded — participation expected." },
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
  assignments: true,   // overview page — routes to dedicated assignment pages
  textbook:    true,   // e-book only — single Cengage link
  checkins:    false,  // accessed via assignments.html
  puzzles:     false,  // accessed via assignments.html
  badges:      false,  // replaced by check-ins in fall
  mme:         false,  // accessed via assignments.html
  friday:      false,  // accessed via assignments.html
  wellness:    false,  // ungraded — practice only, no card needed
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
//  Students vote; top 6 become the S12-S13 agenda.
//  Vote: Canvas poll opens Wed Nov 4 after CI #3.
//        Walk-through and close: Fri Nov 6 in class.
//        Top 6 announced: Fri Nov 6 end of class.
//  UPDATE: questions each semester based on current events and content
// ================================================================
const QUESTIONS = {
  voteProcess: {
    pollOpens:    "Wednesday Nov 4, after Check-In #3",
    walkThrough:  "Friday Nov 6, in class, opening activity",
    pollCloses:   "Friday Nov 6, end of class",
    announced:    "Friday Nov 6, end of class",
    bundleSize:   12,
    selectedSize:  6,
  },

  // UPDATE: all 12 questions each semester
  // chapter: which application chapter(s) this question draws on
  bundle: [
    // Ch. 5 — Difficult Cases for the Market, Role of Government
    { id: 1,  chapter: "ch5",   question: "" },  // UPDATE
    { id: 2,  chapter: "ch5",   question: "" },  // UPDATE

    // Ch. 6 — Economics of Political Action
    { id: 3,  chapter: "ch6",   question: "" },  // UPDATE
    { id: 4,  chapter: "ch6",   question: "" },  // UPDATE

    // Ch. 23 — Price-Searcher Markets
    { id: 5,  chapter: "ch23",  question: "" },  // UPDATE
    { id: 6,  chapter: "ch23",  question: "" },  // UPDATE

    // Ch. 26 — Earnings, Labor Markets
    { id: 7,  chapter: "ch26",  question: "" },  // UPDATE
    { id: 8,  chapter: "ch26",  question: "" },  // UPDATE

    // Ch. 28 — Income Inequality and Poverty
    { id: 9,  chapter: "ch28",  question: "" },  // UPDATE
    { id: 10, chapter: "ch28",  question: "" },  // UPDATE

    // Cross-chapter — draws on multiple application chapters
    { id: 11, chapter: "cross", question: "" },  // UPDATE
    { id: 12, chapter: "cross", question: "" },  // UPDATE
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
  checkins:    `${COURSE.baseUrl}/checkins.html`,
  puzzles:     `${COURSE.baseUrl}/puzzles.html`,
  mme:         `${COURSE.baseUrl}/mme.html`,
  friday:      `${COURSE.baseUrl}/friday.html`,
  support:     `https://bdepro.github.io/courses/shared/support.html`,
  aiPolicy:    `https://bdepro.github.io/courses/shared/ai-policy.html`,
};

// ================================================================
//  CANVAS ASSIGNMENTS
//  UPDATE: all URLs each semester after Canvas course is set up
//
//  Canvas Page naming convention for session materials:
//    s[num]-mon  — Monday skeleton (e.g. s1-mon, s3-mon)
//    s[num]-wed  — Wednesday print handout (e.g. s1-wed)
//    s[num]-fri  — Friday skeleton (e.g. s1-fri)
//    s[num]-review — Check-in week Monday review guide
//    s[num]-worksheet — Viva week review worksheet (Mon + Wed)
//
//  Canvas Page URLs follow the pattern:
//    https://elon.instructure.com/courses/COURSEID/pages/PAGE-SLUG
//  The schedule page builds these URLs from COURSE.canvasId + the slug.
//
//  How to get assignment URLs:
//    1. Build your Canvas assignments
//    2. Click each assignment and copy the URL from your browser
//    3. Paste here
// ================================================================
const CANVAS = {
  courseUrl: `${COURSE.canvasBase}/courses/${COURSE.canvasId}`,

  // ── CHANGED: added pageBase helper for Canvas Pages ──────────
  // Used by schedule.html to build Canvas Page URLs from slugs
  pageBase: `${COURSE.canvasBase}/courses/${COURSE.canvasId}/pages`,

  // Economic Puzzles — one per content session, UPDATE each semester
  puzzles: [
    { session: 1,  title: "Puzzle: The Economic Approach",                         url: "https://elon.instructure.com/courses/1397/assignments/2459" },
    { session: 2,  title: "Puzzle: Demand, Supply, and the Market Process",        url: "https://elon.instructure.com/courses/1397/assignments/2460" },
    { session: 4,  title: "Puzzle: Demand and Supply Applications",                url: "https://elon.instructure.com/courses/1397/assignments/2461" },
    { session: 5,  title: "Puzzle: Taking the Nation's Economic Pulse",            url: "https://elon.instructure.com/courses/1397/assignments/2462" },
    { session: 7,  title: "Puzzle: Economic Fluctuations and Unemployment",        url: "https://elon.instructure.com/courses/1397/assignments/2463" },
    { session: 9,  title: "Puzzle: Creating an Environment for Growth",            url: "https://elon.instructure.com/courses/1397/assignments/2464" },
    { session: 10, title: "Puzzle: Gaining from International Trade",              url: "https://elon.instructure.com/courses/1397/assignments/2465" },
    { session: 12, title: "Puzzle: Application Block Week 1",                      url: "https://elon.instructure.com/courses/1397/assignments/2466" },
    { session: 13, title: "Puzzle: Application Block Week 2",                      url: "https://elon.instructure.com/courses/1397/assignments/2467" },
  ],

  // ── CHANGED: MME due dates corrected to Monday of next check-in ──
  // MME introduced Friday of check-in week.
  // Due Monday at 11:59 a.m. before the NEXT check-in session.
  mme: [
    { id: 1, session: 3,  introduced: "Fri Sep 18", due: "Mon Oct 5, 11:59 a.m.",  title: "MME 1: TBA", url: "" }, // UPDATE
    { id: 2, session: 6,  introduced: "Fri Oct 9",  due: "Mon Nov 2, 11:59 a.m.",  title: "MME 2: TBA", url: "" }, // UPDATE
    { id: 3, session: 11, introduced: "Fri Nov 6",  due: "Mon Nov 30, 11:59 a.m.", title: "MME 3: TBA", url: "" }, // UPDATE
    { id: 4, session: 11, introduced: "Fri Nov 6",  due: "Mon Nov 30, 11:59 a.m.", title: "MME 4: TBA", url: "" }, // UPDATE — introduced same day as MME 3 to avoid Thanksgiving crunch
  ],

  // ── CHANGED: FF1 due date locked, FF2 clarified ──────────────
  // FF1: written narrative — due Mon Nov 30 at 11:59 a.m. (before viva)
  // FF2: viva conversation — scheduled during viva week via Canvas Scheduler
  friday: [
    { id: 1, title: "Friday Focus: The Economic Narrative",
      due: "Mon Nov 30, 11:59 a.m.", url: "" },                    // UPDATE: Canvas assignment URL
    { id: 2, title: "Friday Focus: The Narrative Viva",
      due: "Viva week Nov 30-Dec 4 (by appointment)", url: "" },   // UPDATE: Canvas Scheduler URL
  ],

  // Check-Ins — UPDATE each semester
  checkIns: [
    { id: 1, title: "Check-In #1", date: "Wed Sep 16",
      covers: "Ch. 1 & 3 / S&D / Guideposts", url: "" },           // UPDATE
    { id: 2, title: "Check-In #2", date: "Wed Oct 7",
      covers: "Ch. 4 & 7 / S&D / Guideposts", url: "" },           // UPDATE
    { id: 3, title: "Check-In #3", date: "Wed Nov 4",
      covers: "Ch. 8, 16, 18 / S&D / Guideposts", url: "" },       // UPDATE
    { id: 4, title: "Check-In #4", date: "Fri Dec 4 or exam period",
      covers: "Comprehensive / Ch. 18 + Application block / S&D / Guideposts", url: "" }, // UPDATE
  ],

  // ── NEW: viva week resources ──────────────────────────────────
  // UPDATE: URLs after Canvas Scheduler and assignments are set up
  viva: {
    // Canvas Scheduler appointment group — viva week slots (Mon/Wed Nov 30, Dec 2)
    vivaWeekSignupUrl:   "",   // UPDATE: Canvas Calendar appointment group URL
    // Canvas Scheduler appointment group — final exam period slots (Dec 7-11)
    examPeriodSignupUrl: "",   // UPDATE: Canvas Calendar appointment group URL
    // Viva week review worksheet — Mon and Wed of viva week
    worksheetUrl:        "",   // UPDATE: Canvas Page URL (s15-worksheet)
    // Viva week worksheet submission — for contact hour record
    worksheetSubmitUrl:  "",   // UPDATE: Canvas Assignment URL
    // Final exam period worksheet — Population 1 students
    examWorksheetUrl:    "",   // UPDATE: Canvas Page URL
    examWorksheetSubmitUrl: "", // UPDATE: Canvas Assignment URL
    // Friday Focus written narrative submission
    ffSubmitUrl:         "",   // UPDATE: Canvas Assignment URL (same as friday[0].url above)
  },
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
