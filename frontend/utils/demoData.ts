export const demoLearningPaths = [
  {
    _id: "demo-learning-emergency-triage",
    title: "Emergency Triage Essentials",
    description:
      "Practice rapid assessment, red-flag recognition, and first-line stabilization decisions for common emergency presentations.",
    category: "Emergency Medicine",
    badge: { name: "Triage Ready" },
    steps: [
      { type: "quiz", title: "Identify red flags" },
      { type: "quiz", title: "Prioritize initial stabilization" },
      { type: "quiz", title: "Choose escalation criteria" },
    ],
    progress: null,
    isDemo: true,
  },
  {
    _id: "demo-learning-cardiology-rounds",
    title: "Cardiology Ward Rounds",
    description:
      "Build confidence with chest-pain differentials, ECG interpretation basics, and follow-up planning for cardiac patients.",
    category: "Cardiology",
    badge: { name: "Cardio Rounds" },
    steps: [
      { type: "quiz", title: "Read the clinical scenario" },
      { type: "quiz", title: "Interpret key ECG clues" },
      { type: "quiz", title: "Plan safe follow-up" },
    ],
    progress: null,
    isDemo: true,
  },
];

export const demoJobs = [
  {
    _id: "demo-job-clinical-research-intern",
    title: "Clinical Research Intern",
    company: "MedInternia Research Network",
    location: "Remote / Delhi, India",
    status: "Open",
    type: "internship",
    specialization: ["internal-medicine", "cardiology"],
    salary: "Stipend available",
    applicationDeadline: new Date(Date.now() + 1000 * 60 * 60 * 24 * 21).toISOString(),
    createdAt: new Date().toISOString(),
    matchPercentage: 92,
    isDemo: true,
  },
  {
    _id: "demo-job-pediatrics-fellowship",
    title: "Pediatrics Case Review Fellow",
    company: "Sunrise Teaching Hospital",
    location: "Bengaluru, India",
    status: "Open",
    type: "fellowship",
    specialization: ["pediatrics"],
    salary: "Competitive stipend",
    applicationDeadline: new Date(Date.now() + 1000 * 60 * 60 * 24 * 35).toISOString(),
    createdAt: new Date().toISOString(),
    matchPercentage: 84,
    isDemo: true,
  },
];

export const demoFlashcards = [
  {
    _id: "demo-flashcard-mi-triad",
    question: "What initial findings raise concern for acute coronary syndrome?",
    answer:
      "Crushing chest pain, diaphoresis, ECG ST changes, and elevated cardiac biomarkers should prompt urgent ACS evaluation.",
    tags: ["Cardiology", "Emergency"],
    interval: 1,
    repetitions: 0,
    nextReview: new Date().toISOString(),
    isDemo: true,
  },
  {
    _id: "demo-flashcard-asthma-stepup",
    question: "When should asthma therapy be stepped up in an outpatient review?",
    answer:
      "Step up when symptoms remain uncontrolled, reliever use increases, nighttime symptoms persist, or exacerbation risk is high.",
    tags: ["Pulmonology", "Outpatient"],
    interval: 3,
    repetitions: 1,
    nextReview: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3).toISOString(),
    isDemo: true,
  },
];

export const demoResearchPapers = [
  {
    _id: "demo-paper-ai-cardiology",
    title: "AI-Assisted ECG Screening in Busy Outpatient Clinics",
    description:
      "A starter reading item summarizing how decision-support models can help flag high-risk ECG patterns for clinician review.",
    field: "Cardiology",
    difficulty: "beginner",
    fileUrl: "https://example.com/ai-assisted-ecg-screening.pdf",
    comments: [],
    createdAt: new Date().toISOString(),
    isDemo: true,
  },
  {
    _id: "demo-paper-antibiotic-stewardship",
    title: "Antibiotic Stewardship Rounds for Medical Interns",
    description:
      "A practical overview of culture review, de-escalation decisions, and documentation habits during inpatient stewardship rounds.",
    field: "Internal Medicine",
    difficulty: "intermediate",
    fileUrl: "https://example.com/antibiotic-stewardship-rounds.pdf",
    comments: [],
    createdAt: new Date().toISOString(),
    isDemo: true,
  },
];
