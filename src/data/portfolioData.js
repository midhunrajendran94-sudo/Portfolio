export const profile = {
  name: "Midhun Rajendran",
  logo: "MR",
  title: "Aspiring QA Engineer | Software Testing & Automation",
  location: "Kottayam, Kerala, India",
  email: "midhunrajendran94@gmail.com",
  phone: "+91 6282597605",
  phoneHref: "+916282597605",
  linkedin: "https://www.linkedin.com/in/midhun-rajendran-05a2483a1",
  // Paste a full GitHub profile URL to show GitHub. Leave "" to keep it hidden.
  github: "",
  photo: "/images/profile.jpg",
  resume: "/resume/Midhun_Rajendran_Resume.pdf",
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "training", label: "Training" },
  { id: "contact", label: "Contact" },
];

export const hero = {
  greeting: "Hello, I'm",
  intro:
    "I am a Computer Science and Engineering graduate with an interest in software quality, testing and automation. I enjoy exploring technologies, solving problems and continuously improving my technical skills.",
  tagline:
    "Building reliable software through quality engineering, continuous learning and automation.",
  cards: [
    { id: "grad", label: "Computer Science Graduate", icon: "graduation" },
    { id: "testing", label: "Software Testing", icon: "shield" },
    { id: "automation", label: "Automation Learning", icon: "workflow" },
    { id: "place", label: "Kottayam, Kerala", icon: "pin" },
  ],
};

export const about = {
  paragraphs: [
    "I am Midhun Rajendran, a Computer Science and Engineering graduate with a strong interest in software testing, quality assurance and automation.",
    "I have a foundation in programming, web technologies and database management, along with academic project experience in AI-based applications and web development.",
    "I am currently expanding my knowledge of manual testing, automation testing, Playwright, TypeScript and API testing. I enjoy exploring new technologies, solving problems and continuously improving my technical skills.",
    "My goal is to build a career in software quality assurance and contribute to developing reliable, high-quality software applications.",
  ],
  objective:
    "To begin my professional career in Software Testing and Quality Assurance, apply my technical knowledge, strengthen my automation testing skills and contribute to building reliable, high-quality software applications.",
  strengths: [
    { id: "analytical", title: "Analytical Thinking", icon: "focus" },
    { id: "problem", title: "Problem Solving", icon: "puzzle" },
    { id: "detail", title: "Attention to Detail", icon: "crosshair" },
    { id: "adapt", title: "Adaptability", icon: "repeat" },
    { id: "learn", title: "Continuous Learning", icon: "book" },
  ],
  interests: [
    "Manual Testing",
    "Automation Testing",
    "Software Quality Assurance",
    "API Testing",
    "Playwright Automation",
  ],
};

export const education = [
  {
    id: "btech",
    level: "Bachelor of Technology",
    program: "Computer Science and Engineering",
    school: "College of Engineering Kidangoor, Kottayam, Kerala",
    period: "October 2022 – June 2026",
    resultLabel: "CGPA",
    result: "6.81",
    icon: "graduation",
  },
  {
    id: "hse",
    level: "Higher Secondary Education",
    program: "Science",
    school: "S M V N S H S S Kallara, Vaikom, Kerala",
    period: "June 2020 – March 2022",
    resultLabel: "Percentage",
    result: "96.75%",
    icon: "school",
  },
  {
    id: "sslc",
    level: "Secondary Education",
    program: "10th",
    school: "S M V N S S H S S Kallara, Kottayam, Kerala",
    period: "March 2020",
    resultLabel: "Achievement",
    result: "Full A+",
    icon: "award",
  },
];

export const skillGroups = [
  {
    id: "testing",
    title: "Software Testing & QA",
    span: "span-4",
    tone: "feature",
    icon: "shield",
    items: [
      "Manual Testing",
      "Automation Testing (Playwright)",
      "API Testing",
      "Test Case Design & Execution",
      "Defect & Bug Life Cycle",
      "Regression & Smoke Testing",
    ],
  },
  {
    id: "languages",
    title: "Programming Languages",
    span: "span-2",
    tone: "feature",
    icon: "code",
    items: ["Java", "C", "TypeScript"],
  },
  {
    id: "web",
    title: "Web Technologies",
    span: "span-2",
    tone: "compact",
    icon: "globe",
    items: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "database",
    title: "Database & Analytics",
    span: "span-2",
    tone: "compact",
    icon: "database",
    items: ["MySQL", "Data Analytics"],
  },
  {
    id: "tools",
    title: "Tools & Productivity",
    span: "span-2",
    tone: "compact",
    icon: "layers",
    items: ["Visual Studio Code", "Git & GitHub", "Microsoft Excel", "Google Sheets", "Canva"],
  },
];

export const learning = [
  { id: "playwright", name: "Advanced Playwright E2E Architecture", icon: "bot" },
  { id: "cicd", name: "CI/CD Test Automation Pipelines", icon: "workflow" },
  { id: "api-automation", name: "REST API Automated Assertions", icon: "cable" },
  { id: "typescript", name: "TypeScript Test Framework Design", icon: "braces" },
  { id: "performance", name: "Performance & Load Verification", icon: "chart" },
];

export const projects = [
  {
    id: "qa-suite",
    title: "E-Commerce Web & API Automation Test Suite",
    category: "QA & Test Automation Showcase",
    description:
      "Designed and implemented an automated end-to-end testing suite for web and REST API workflows. Implemented Page Object Model (POM), data-driven testing, cross-browser test suites, boundary validations, and automated HTML test execution reports.",
    technologies: [
      "Playwright",
      "TypeScript",
      "Manual Testing",
      "API Testing",
      "Test Case Design",
      "Bug Reports",
      "CI/CD Workflows",
    ],
    visual: "suite",
    repo: "",
    demo: "",
  },
  {
    id: "alzheimers",
    title: "Alzheimer's Prediction Using AI and MRI",
    category: "College Main Project",
    description:
      "Developed an AI-based Alzheimer's prediction system using MRI brain scans and deep learning techniques for automated classification of Normal, Mild Cognitive Impairment (MCI) and Alzheimer's stages.",
    technologies: [
      "Python",
      "Artificial Intelligence",
      "Machine Learning",
      "OCR",
      "Flutter",
      "Firebase / MySQL",
    ],
    visual: "scan",
    // Leave blank to hide the button. Use a full https URL when you have one.
    repo: "",
    demo: "",
  },
  {
    id: "voting",
    title: "Online Voting Platform",
    category: "College Mini Project",
    description:
      "Developed a secure web-based college election platform with voter authentication, role-based administrator access, real-time vote counting and result generation.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    visual: "ballot",
    repo: "",
    demo: "",
  },
];

export const training = [
  {
    id: "azure",
    title: "AI-901: Microsoft Azure AI Fundamentals",
    provider: "Microsoft",
    year: "2026",
    icon: "cloud",
  },
  {
    id: "nxtwave",
    title: "AI for Students: Build Your Own Generative AI Model Workshop",
    provider: "NxtWave",
    year: "2026",
    icon: "spark",
  },
  {
    id: "suffix",
    title: "Data Science Internship",
    provider: "Suffix E Solutions / Scope India",
    year: "2025",
    icon: "chart",
  },
  {
    id: "react",
    title: "ReactJS Workshop",
    provider: "One Team",
    year: "2025",
    icon: "code",
  },
  {
    id: "python",
    title: "Data Science with Python Workshop",
    provider: "Techmaghi & IIT Hyderabad",
    year: "2024",
    icon: "cpu",
  },
];

export const languages = [
  { id: "en", lang: "en", mark: "En", name: "English", level: "Fluent" },
  { id: "ml", lang: "ml", mark: "മ", name: "Malayalam", level: "Native" },
  { id: "hi", lang: "hi", mark: "हि", name: "Hindi", level: "Basic" },
  { id: "ta", lang: "ta", mark: "த", name: "Tamil", level: "Basic" },
];
