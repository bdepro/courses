// ================================================================
//  ECO 1000 — COURSE CONFIGURATION
//  Generated from: shared/config-template.js
//  Hosted at: bdepro.github.io/courses/eco1000/
// ================================================================
//  SEMESTER UPDATE CHECKLIST (search UPDATE to find each spot):
//  1. Update COURSE block — semester, baseUrl if folder changes
//  2. Update INSTRUCTOR block — office hours each semester
//  3. Update SCHEDULE block — all dates and sessions
//  4. Update GRADING block — if grade structure changes
//  5. Update FEATURES block — if sections are added or removed
// ================================================================

// ================================================================
//  COURSE
//  UPDATE: semester each term
// ================================================================
const COURSE = {
  code:        "ECO 1000",
  title:       "Principles of Economics",
  semester:    "Fall 2026",                   // UPDATE each semester
  format:      "in-person",
  credits:     4,
  baseUrl:     "https://bdepro.github.io/courses/eco1000",
};

// ================================================================
//  INSTRUCTOR
//  UPDATE: officeHours each semester
// ================================================================
const INSTRUCTOR = {
  name:        "Professor Depro",
  email:       "bdepro@elon.edu",
  office:      "KoBC 122",
  zoomUrl:     "https://elon.zoom.us/my/bdepro",
  officeHours: "",                            // UPDATE each semester
};

// ================================================================
//  SCHEDULE
//  UPDATE: all dates and sessions each semester
// ================================================================
const SCHEDULE = {
  dates: {
    classesBegin:      "August 25, 2026",     // UPDATE
    dropAddEnds:       "September 1, 2026",   // UPDATE
    withdrawDeadline:  "October 30, 2026",    // UPDATE
    classesEnd:        "December 4, 2026",    // UPDATE
    readingDay:        "December 5, 2026",    // UPDATE
    examsBegin:        "December 7, 2026",    // UPDATE
    examsEnd:          "December 11, 2026",   // UPDATE
  },

  // UPDATE each semester — dates and due dates only; topics live in schedule.html
  sessions: [
    { num: 0,  dates: "Aug 26–28",     due: null,               label: "Introduction",  break: false },
    { num: 1,  dates: "Aug 31–Sep 4",  due: null,               label: "Session 1",     break: false },
    { num: 2,  dates: "Sep 7–11",      due: null,               label: "Session 2",     break: false },
    { num: 3,  dates: "Sep 14–18",     due: null,               label: "Session 3",     break: false },
    { num: 4,  dates: "Sep 21–25",     due: null,               label: "Session 4",     break: false },
    { num: 5,  dates: "Sep 28–Oct 2",  due: null,               label: "Session 5",     break: false },
    { num: 6,  dates: "Oct 5–9",       due: null,               label: "Session 6",     break: false },
    { num: 7,  dates: "Oct 12–13",     due: null,               label: "Session 7",     break: false },
    { num: 8,  dates: "Oct 14–19",     due: null,               label: "Fall Break",    break: true  },
    { num: 9,  dates: "Oct 19–23",     due: null,               label: "Session 9",     break: false },
    { num: 10, dates: "Oct 26–30",     due: null,               label: "Session 10",    break: false },
    { num: 11, dates: "Nov 2–6",       due: null,               label: "Session 11",    break: false },
    { num: 12, dates: "Nov 9–13",      due: null,               label: "Session 12",    break: false },
    { num: 13, dates: "Nov 16–20",     due: null,               label: "Session 13",    break: false },
    { num: 14, dates: "Nov 30–Dec 4",  due: null,               label: "Session 14",    break: false },
  ],

  // UPDATE each semester when exam schedule is posted
  finalExam: [
    { section: "8:00 AM section",  date: "TBA", time: "TBA" },
    { section: "12:30 PM section", date: "TBA", time: "TBA" },
  ],
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
  support:     `https://bdepro.github.io/courses/shared/support.html`,
  aiPolicy:    `https://bdepro.github.io/courses/shared/ai-policy.html`,
};

// ================================================================
//  GRADING
//  UPDATE if grade structure changes
// ================================================================
const GRADING = {
  components: [
    { id: "checkins", label: "Check-Ins",         weight: 40, pageKey: "assignments" },
    { id: "puzzles",  label: "Economic Puzzles",   weight: 25, pageKey: "assignments" },
    { id: "badges",   label: "Achievement Badges", weight: 35, pageKey: "assignments" },
  ],
};

// ================================================================
//  FEATURES
//  true = show on home page, false = hide
//  UPDATE if you add or remove sections
// ================================================================
const FEATURES = {
  schedule:    true,   // session-by-session schedule
  syllabus:    true,   // course syllabus
  assignments: true,   // graded assignments
  support:     true,   // campus support (shared page)
  aiPolicy:    true,   // AI policy (shared page)
  checklist:   false,  // weekly checklist (not used in this course)
  textbook:    false,  // no publisher platform
  badges:      false,  // badges tracked via Moodle/Canvas, not a separate page
  puzzles:     false,  // puzzles tracked via Moodle/Canvas, not a separate page
  mme:         false,  // Monday Morning Economist not active
  friday:      false,  // Friday Focus not active
  officeHours: false,  // no dedicated office hours page
};

// ================================================================
//  DERIVED — do not edit
// ================================================================
const CONFIG = {
  course:     COURSE,
  instructor: INSTRUCTOR,
  schedule:   SCHEDULE,
  pages:      PAGES,
  grading:    GRADING,
  features:   FEATURES,
};
