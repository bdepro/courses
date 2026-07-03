// ================================================================
//  ECO 4400 — COURSE CONFIGURATION
//  Generated from: shared/config-template.js
//  Hosted at: bdepro.github.io/courses/eco4400/
// ================================================================
//  SEMESTER UPDATE CHECKLIST (search UPDATE to find each spot):
//  1. COURSE block       — semester
//  2. INSTRUCTORS block  — office hours, contact info
//  3. DATES block        — all key dates
//  4. SCHEDULE block      — chapter/topic sequence if it changes
//  That is it. index.html pulls from this file automatically.
// ================================================================

// ================================================================
//  COURSE
//  UPDATE: semester each term
// ================================================================
const COURSE = {
  code:          "ECO 4400",
  title:         "Applied Economics & Consulting",
  semester:      "Fall 2026",                        // UPDATE each semester
  format:        "in-person",
  credits:       4,
  baseUrl:       "https://bdepro.github.io/courses/eco4400",
  school:        "Love School of Business",
  dataIntensive: true,
  communityEngaged: true,
};

// ================================================================
//  INSTRUCTORS — two instructors teach this course
//  UPDATE: office hours and contact info each semester
// ================================================================
const INSTRUCTORS = [
  {
    name:   "Brooks Depro",
    nameShort: "Prof. Depro",
    role:   "Instructor",
    title:  "Associate Professor of Economics",
    email:  "bdepro@elon.edu",
    office: "KoBC 122",
    phone:  "919-357-2316",
    hours:  "Mon / Wed / Fri, 4:00–5:00 PM",   // UPDATE
    zoomUrl: "https://elon.zoom.us/my/bdepro",
    zoomDisplay: "elon.zoom.us/my/bdepro",
  },
  {
    name:   "Devon Hawkins",
    nameShort: "Prof. Hawkins",
    role:   "Instructor",
    title:  "Assistant Teaching Professor of Economics",
    email:  "dhawkins5@elon.edu",
    office: "KoBC 120",
    phone:  "(336) 278-5977",
    hours:  "TBD",   // UPDATE — TBD until Fall 2026 hours are set
    zoomUrl: null,     // UPDATE — TBD until Fall 2026 Zoom link is confirmed
    zoomDisplay: null,
  },
];

// ================================================================
//  TEXTBOOK — required text, UPDATE if edition changes
// ================================================================
const TEXTBOOK = {
  authors:   "Froeb, Luke M., Brian T. McCann, Michael R. Ward, and Mike Shor",
  title:     "Managerial Economics: A Problem-Solving Approach",
  edition:   "6th",
  publisher: "Cengage Learning",
  year:      2023,
  note:      "Available as an e-book only, linked through Canvas. No print copy is required.",
};

// ================================================================
//  DATES — key academic dates, UPDATE each semester
// ================================================================
const DATES = {
  classesBegin:      "August 26, 2026",   // UPDATE
  dropAddEnds:       "September 1, 2026", // UPDATE
  ronfDeadline:      "September 16, 2026",// UPDATE (Religious Observance Notification Form)
  fallBreak:         "After Week 6",
  withdrawDeadline:  "October 30, 2026",  // UPDATE
  thanksgiving:      "After Week 11",
  finalPresentation: "Week 12",
  classesEnd:        "December 4, 2026",  // UPDATE
};

// ================================================================
//  SCHEDULE — UPDATE chapter sequence if it changes
//  break: true marks no-class rows
//  chapterUrl / quizUrl: UPDATE with Cengage e-book chapter link and Canvas quiz
//  link once available each semester — null renders as "Coming Soon" on
//  the Applied Economics materials page (econ.html)
// ================================================================
const SCHEDULE = [
  { num: 0,  chapter: null,       topic: "Orientation",                           monday: null,                wednesday: "Introduction & team formation" },
  { num: 1,  chapter: "Ch. 1",    topic: "Solving Problems with Economics",       monday: "Applied Economics", wednesday: "Consulting Labs", chapterUrl: null, quizUrl: null },
  { num: 2,  chapter: "Ch. 3",    topic: "Benefits, Costs, and Decisions",        monday: "Applied Economics", wednesday: "Consulting Labs", chapterUrl: null, quizUrl: null },
  { num: 3,  chapter: "Ch. 4",    topic: "How Much Decisions",                    monday: "Applied Economics", wednesday: "Consulting Labs", chapterUrl: null, quizUrl: null },
  { num: 4,  chapter: "Ch. 5",    topic: "Investment Decisions",                  monday: "Applied Economics", wednesday: "Consulting Labs", chapterUrl: null, quizUrl: null },
  { num: 5,  chapter: "Ch. 10",   topic: "Keeping Profit from Eroding",           monday: "Applied Economics", wednesday: "Consulting Labs", chapterUrl: null, quizUrl: null },
  { num: 6,  chapter: "Ch. 12",   topic: "More Realistic Pricing",                monday: "Applied Economics", wednesday: "Consulting Labs", chapterUrl: null, quizUrl: null },
  { break: true, label: "Fall Break" },
  { num: 7,  chapter: "Ch. 13–14", topic: "Price Discrimination",            monday: "Applied Economics", wednesday: "Consulting Labs", chapterUrl: null, quizUrl: null },
  { num: 8,  chapter: "Ch. 15",   topic: "Strategic Games",                       monday: "Applied Economics", wednesday: "Consulting Labs", chapterUrl: null, quizUrl: null },
  { num: 9,  chapter: "Ch. 16",   topic: "Bargaining",                            monday: "Applied Economics", wednesday: "Consulting Labs", chapterUrl: null, quizUrl: null },
  { num: 10, chapter: "Ch. 21",   topic: "Employee Incentives",                   monday: "Applied Economics", wednesday: "Consulting Labs", chapterUrl: null, quizUrl: null },
  { num: 11, chapter: "Ch. 22–23", topic: "Divisions & Vertical Relationships", monday: "Applied Economics", wednesday: "Consulting Labs", chapterUrl: null, quizUrl: null },
  { break: true, label: "Thanksgiving Week — No Class" },
  { num: 12, chapter: null,       topic: "Final Presentations",                   monday: "Live client presentation — Sustainable Alamance", wednesday: null },
];

// ================================================================
//  GRADING — weights must sum to 100
// ================================================================
const GRADING = {
  components: [
    { id: "labs",     label: "Consulting Team Labs",             weight: 35, dataIntensive: true  },
    { id: "research", label: "Applied Research & Case Analytics", weight: 35, dataIntensive: true  },
    { id: "econ",     label: "Applied Economics for the BSBA",   weight: 30, dataIntensive: false },
  ],
};

// ================================================================
//  FEATURES
//  true = show on home page, false = hide
//  UPDATE if sections are added or removed
// ================================================================
const FEATURES = {
  syllabus:    true,
  labs:        true,
  research:    true,
  econ:        true,
  support:     true,
  aiPolicy:    true,
};

// ================================================================
//  PAGES — stable URLs for all section pages
// ================================================================
const PAGES = {
  home:        `${COURSE.baseUrl}/index.html`,
  syllabus:    `${COURSE.baseUrl}/syllabus.html`,
  labs:        `${COURSE.baseUrl}/labs.html`,
  research:    `${COURSE.baseUrl}/research.html`,
  econ:        `${COURSE.baseUrl}/econ.html`,
  support:     "https://bdepro.github.io/courses/shared/support.html",
  aiPolicy:    "https://bdepro.github.io/courses/shared/ai-policy.html",
};

// ================================================================
//  DERIVED — do not edit
// ================================================================
const CONFIG = {
  course:      COURSE,
  instructors: INSTRUCTORS,
  dates:       DATES,
  schedule:    SCHEDULE,
  grading:     GRADING,
  features:    FEATURES,
  pages:       PAGES,
};
