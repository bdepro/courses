// ================================================================
//  ECO1000_Cengage — COURSE CONFIGURATION
//  Hosted at: bdepro.github.io/courses/ECO1000_Cengage/
// ================================================================
//  SEMESTER UPDATE CHECKLIST (search UPDATE to find each spot):
//  1. Update COURSE block (semester, courseId, dates)
//  2. Update CHAPTERS array — add/remove/reorder chapters here only
//  3. Update CENGAGE block if new course registered with Cengage
//  4. Update MME block when Perusall is ready (set enabled: true)
//  5. Update PAGES block if section pages move
// ================================================================

const COURSE = {
  moodleBase:  "https://moodle.elon.edu",   // UPDATE if institution changes
  courseId:    "",                           // UPDATE each semester (Moodle course ID)
  semester:    "Summer Session II 2026",    // UPDATE each semester
  courseCode:  "ECO 1000",
  courseTitle: "Principles of Economics",
  instructor:  "",                           // UPDATE: e.g. "Dr. Smith"
  baseUrl:     "https://bdepro.github.io/courses/eco1000-cengage", // UPDATE if repo moves

  // UPDATE each semester
  weeks: [
    { num: 1, dates: "July 6–11",  due: "July 11, 12:00 PM" },
    { num: 2, dates: "July 12–18", due: "July 18, 12:00 PM" },
    { num: 3, dates: "July 19–24", due: "July 24, 12:00 PM" },
  ],

  // Key academic dates — UPDATE each semester
  dates: {
    classesBegin:  "July 6, 2026",
    dropAddEnds:   "July 7, 2026",
    withdrawDeadline: "July 17, 2026",
    classesEnd:    "July 24, 2026",
  },
};

// ================================================================
//  CHAPTER LIST — SINGLE SOURCE OF TRUTH
//  Add, remove, or reorder chapters here.
//  badges.html, puzzles.html, and cengage.html all pull from this.
//  Keys must match keys in CENGAGE.videos, CENGAGE.badges, CENGAGE.puzzles.
//  UPDATE each semester if chapter selection changes.
// ================================================================
const CHAPTERS = [
  // Week 1 — How Markets Work
  { key: "ch1",  num: "Ch 1",  title: "The Economic Approach",                      week: 1 },
  { key: "ch3",  num: "Ch 3",  title: "Demand, Supply, and the Market Process",     week: 1 },
  { key: "ch4",  num: "Ch 4",  title: "Demand and Supply: Applications and Extensions", week: 1 },

  // Week 2 — How Economies Perform and Grow
  { key: "ch7",  num: "Ch 7",  title: "Taking the Nation's Economic Pulse",         week: 2 },
  { key: "ch8",  num: "Ch 8",  title: "Economic Fluctuations, Unemployment, and Inflation", week: 2 },
  { key: "ch16", num: "Ch 16", title: "Creating an Environment for Growth and Prosperity", week: 2 },

  // Week 3 — Why Outcomes Differ and What Policy Can Do
  { key: "ch6",  num: "Ch 6",  title: "The Economics of Political Action",          week: 3 },
  { key: "ch26", num: "Ch 26", title: "Earnings, Productivity, and the Job Market", week: 3 },
  { key: "ch28", num: "Ch 28", title: "Income Inequality and Poverty",              week: 3 },
];

// ================================================================
//  MOODLE COURSE LINK
//  Students click this to get to Moodle activities.
//  UPDATE courseId above and this URL updates automatically.
// ================================================================
const MOODLE_COURSE = `${COURSE.moodleBase}/course/view.php?id=78855`; // UPDATE each semester

// ================================================================
//  SECTION PAGE URLS
//  These are stable GitHub Pages URLs — no Moodle IDs needed.
//  UPDATE only if you rename or move files.
// ================================================================
const PAGES = {
  home:        `${COURSE.baseUrl}/index.html`,
  syllabus:    `${COURSE.baseUrl}/syllabus.html`,
  checklists:  `${COURSE.baseUrl}/checklists.html`,
  cengage:     `${COURSE.baseUrl}/cengage.html`,
  mme:         `${COURSE.baseUrl}/mme.html`,
  puzzles:     `${COURSE.baseUrl}/puzzles.html`,
  badges:      `${COURSE.baseUrl}/badges.html`,
  friday:      `${COURSE.baseUrl}/friday.html`,
  officeHours:    `${COURSE.baseUrl}/office-hours.html`,
  vivaPrep:       `${COURSE.baseUrl}/viva-prep-guide.html`,
  narrativeGuide: `${COURSE.baseUrl}/narrative-guide.html`,
};

// ================================================================
//  CENGAGE / MINDTAP LINKS
//  UPDATE this entire block when you register a new Cengage course.
//  The base key (lti2/235858/...) changes each time.
//  Copy new URLs directly from Moodle's LTI activity after setup.
// ================================================================
const CENGAGE = {

  // Master link — all e-book and MindTap resources
  allResources: "https://moodle.elon.edu/mod/lti/view.php?id=3110897",

  // Chapter E-Book Reading (Learn It → Read)
  reads: {
    ch1:  "https://moodle.elon.edu/mod/lti/view.php?id=3110860",
    ch3:  "https://moodle.elon.edu/mod/lti/view.php?id=3110864",
    ch4:  "https://moodle.elon.edu/mod/lti/view.php?id=3110894",
    ch6:  "https://moodle.elon.edu/mod/lti/view.php?id=3110869",
    ch7:  "https://moodle.elon.edu/mod/lti/view.php?id=3110873",
    ch8:  "https://moodle.elon.edu/mod/lti/view.php?id=3110877",
    ch16: "https://moodle.elon.edu/mod/lti/view.php?id=3110890",
    ch26: "https://moodle.elon.edu/mod/lti/view.php?id=3110881",
    ch28: "https://moodle.elon.edu/mod/lti/view.php?id=3110886",
  },

  // Chapter Lecture Videos (Learn It → Video)
  // UPDATE all URLs when you register a new Cengage course
  videos: {
    ch1:  "https://moodle.elon.edu/mod/lti/view.php?id=3110861",
    ch3:  "https://moodle.elon.edu/mod/lti/view.php?id=3110865",
    ch4:  "https://moodle.elon.edu/mod/lti/view.php?id=3110895",
    ch6:  "https://moodle.elon.edu/mod/lti/view.php?id=3110870",
    ch7:  "https://moodle.elon.edu/mod/lti/view.php?id=3110874",
    ch8:  "https://moodle.elon.edu/mod/lti/view.php?id=3110878",
    ch16: "https://moodle.elon.edu/mod/lti/view.php?id=3110891",
    ch26: "https://moodle.elon.edu/mod/lti/view.php?id=3110882",
    ch28: "https://moodle.elon.edu/mod/lti/view.php?id=3110887",
  },

  // Achievement Badges (Badge It) — Chapter Quiz in Apply It section
  // UPDATE all URLs when you register a new Cengage course
  badges: {
    ch1:  "https://moodle.elon.edu/mod/lti/view.php?id=3110859",
    ch3:  "https://moodle.elon.edu/mod/lti/view.php?id=3110863",
    ch4:  "https://moodle.elon.edu/mod/lti/view.php?id=3110893",
    ch6:  "https://moodle.elon.edu/mod/lti/view.php?id=3110868",
    ch7:  "https://moodle.elon.edu/mod/lti/view.php?id=3110872",
    ch8:  "https://moodle.elon.edu/mod/lti/view.php?id=3110876",
    ch16: "https://moodle.elon.edu/mod/lti/view.php?id=3110889",
    ch26: "https://moodle.elon.edu/mod/lti/view.php?id=3110880",
    ch28: "https://moodle.elon.edu/mod/lti/view.php?id=3110885",
  },

  // Economic Puzzles — Chapter Homework in Study It section
  // UPDATE all URLs when you register a new Cengage course
  puzzles: {
    ch1:  "https://moodle.elon.edu/mod/lti/view.php?id=3110858",
    ch3:  "https://moodle.elon.edu/mod/lti/view.php?id=3110862",
    ch4:  "https://moodle.elon.edu/mod/lti/view.php?id=3110892",
    ch6:  "https://moodle.elon.edu/mod/lti/view.php?id=3110867",
    ch7:  "https://moodle.elon.edu/mod/lti/view.php?id=3110871",
    ch8:  "https://moodle.elon.edu/mod/lti/view.php?id=3110875",
    ch16: "https://moodle.elon.edu/mod/lti/view.php?id=3110888",
    ch26: "https://moodle.elon.edu/mod/lti/view.php?id=3110879",
    ch28: "https://moodle.elon.edu/mod/lti/view.php?id=3110884",
  },

  // A+ Test Prep
  testPrep: "https://moodle.elon.edu/mod/lti/view.php?id=3110857",
};

// ================================================================
//  MONDAY MORNING ECONOMIST (MME)
//  Currently deferred — switching from Hypothesis to Perusall.
//  When ready: set enabled: true and fill in perusallBase URL.
//  Then add individual article URLs in the articles array.
// ================================================================
const MME = {
  enabled: false,   // UPDATE to true when Perusall is ready
  perusallBase: "", // UPDATE: e.g. "https://perusall.com/courses/your-course-id"
  articles: [
    { id: 1, title: "The Millionaire's Speeding Fine Explained With Economics",   url: "" }, // UPDATE
    { id: 2, title: "The Real Price of Being Home Alone",                          url: "" }, // UPDATE
    { id: 3, title: 'The Economic Logic Behind the "No Tax on Tips" Policy',      url: "" }, // UPDATE
    { id: 4, title: "Salary Transparency Laws and Asymmetric Information",         url: "" }, // UPDATE
  ],
};

// ================================================================
//  FRIDAY FOCUS ASSIGNMENTS
//  Moodle assignment submission links — UPDATE courseId above
//  and these IDs after each course copy.
// ================================================================
const FRIDAY = {
  vivaSignupUrl: "", // UPDATE: paste Google Sheet URL when ready
  assignments: [
    { id: 1, title: "Friday Focus #1: The Economic Narrative", due: "July 18, 12:00 p.m.", moodleActivityId: "" }, // UPDATE each semester
    { id: 2, title: "Friday Focus #2: The Narrative Viva",     due: "July 19-24",          moodleActivityId: "" }, // UPDATE each semester
  ],
};
