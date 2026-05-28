// ================================================================
//  ECO 4400 — Applied Economics & Consulting
//  Course Configuration — Fall 2026
//  UPDATE fields marked UPDATE before each semester
// ================================================================

const COURSE = {
  code:        "ECO 4400",
  title:       "Applied Economics & Consulting",
  semester:    "Fall 2026",                         // UPDATE
  format:      "in-person",
  credits:     4,
  baseUrl:     "https://bdepro.github.io/courses/eco4400",
  dataIntensive: true,
};

// ================================================================
//  INSTRUCTORS — UPDATE if contact info changes
// ================================================================
const INSTRUCTORS = [
  {
    name:   "Brooks Depro",
    role:   "Instructor",
    title:  "Associate Professor of Economics",
    email:  "bdepro@elon.edu",
    office: "KoBC 122",
    phone:  "919-357-2316",
    hours:  "Mon / Wed / Fri, 4:00–5:00 PM",   // UPDATE
    zoom:   "https://elon.zoom.us/my/bdepro",
  },
  {
    name:   "Devon Hawkins",
    role:   "Instructor",
    title:  "Assistant Teaching Professor of Economics",
    email:  "dhawkins5@elon.edu",
    office: "KoBC 120",
    phone:  "(336) 278-5977",
    hours:  "By appointment",
    zoom:   null,
  },
];

// ================================================================
//  KEY DATES — UPDATE each semester
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
// ================================================================
const SCHEDULE = [
  { num: 0,  chapter: null,       topic: "Orientation",                           monday: null,                wednesday: "Introduction & team formation" },
  { num: 1,  chapter: "Ch. 1",    topic: "Solving Problems with Economics",       monday: "Applied Economics", wednesday: "Consulting Labs" },
  { num: 2,  chapter: "Ch. 3",    topic: "Benefits, Costs, and Decisions",        monday: "Applied Economics", wednesday: "Consulting Labs" },
  { num: 3,  chapter: "Ch. 4",    topic: "How Much Decisions",                    monday: "Applied Economics", wednesday: "Consulting Labs" },
  { num: 4,  chapter: "Ch. 5",    topic: "Investment Decisions",                  monday: "Applied Economics", wednesday: "Consulting Labs" },
  { num: 5,  chapter: "Ch. 10",   topic: "Keeping Profit from Eroding",           monday: "Applied Economics", wednesday: "Consulting Labs" },
  { num: 6,  chapter: "Ch. 12",   topic: "More Realistic Pricing",                monday: "Applied Economics", wednesday: "Consulting Labs" },
  { break: true, label: "Fall Break" },
  { num: 7,  chapter: "Ch. 13–14", topic: "Price Discrimination",            monday: "Applied Economics", wednesday: "Consulting Labs" },
  { num: 8,  chapter: "Ch. 15",   topic: "Strategic Games",                       monday: "Applied Economics", wednesday: "Consulting Labs" },
  { num: 9,  chapter: "Ch. 16",   topic: "Bargaining",                            monday: "Applied Economics", wednesday: "Consulting Labs" },
  { num: 10, chapter: "Ch. 21",   topic: "Employee Incentives",                   monday: "Applied Economics", wednesday: "Consulting Labs" },
  { num: 11, chapter: "Ch. 22–23", topic: "Divisions & Vertical Relationships", monday: "Applied Economics", wednesday: "Consulting Labs" },
  { break: true, label: "Thanksgiving Week — No Class" },
  { num: 12, chapter: null,       topic: "Final Presentations",                   monday: "Live client presentation — Sustainable Alamance", wednesday: null },
];

// ================================================================
//  GRADING — weights must sum to 100
// ================================================================
const GRADING = {
  components: [
    { id: "labs",     label: "Consulting Team Labs",            weight: 35, dataIntensive: true  },
    { id: "research", label: "Applied Research & Case Analytics", weight: 35, dataIntensive: true  },
    { id: "econ",     label: "Applied Economics for the BSBA",  weight: 30, dataIntensive: false },
  ],
};

// ================================================================
//  PAGES — stable URLs for all section pages
// ================================================================
const PAGES = {
  home:        `${COURSE.baseUrl}/index.html`,
  syllabus:    `${COURSE.baseUrl}/syllabus.html`,
  project:     `${COURSE.baseUrl}/project.html`,
  assignments: `${COURSE.baseUrl}/assignments.html`,
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
  pages:       PAGES,
};
