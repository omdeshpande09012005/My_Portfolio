/**
 * Projects Data Module
 * Centralized export of all projects used across the portfolio
 * Each project object contains complete metadata, description, technologies, and learnings
 */

export const projectsData = [
  {
    id: 1,
    title: "Online Bookstore Web App",
    category: "web",
    description: "A full-stack e-commerce platform for an online bookstore, featuring user authentication, order management, and an admin dashboard.",
    details: "This project was a deep dive into full-stack development, creating a complete online shopping experience. It includes a secure login system, a dynamic product catalog, a shopping cart, and a comprehensive admin panel for managing inventory and orders.",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    learnings: [
      "Mastered server-side logic and database interactions with PHP and MySQL.",
      "Implemented secure user authentication and session management.",
      "Learned the importance of database design for scalability and performance."
    ],
    links: {
      github: "github.com/omdeshpande09012005/Online_BookStore",
      demo: null
    },
    caseStudySlug: null
  },
  {
    id: 2,
    title: "Multi-Game Platform",
    category: "desktop",
    description: "A console-based multi-game application developed in C++ to showcase core Object-Oriented Programming principles.",
    details: "This project was a practical application of OOP concepts learned in my coursework. It features a menu-driven system allowing users to choose from classic games like Snake, Tic-Tac-Toe, and more. The focus was on creating a modular, extensible architecture using classes, inheritance, and polymorphism.",
    technologies: ["C++", "OOP"],
    learnings: [
      "Solidified understanding of core OOP principles in a practical application.",
      "Learned how to manage program flow and state for multiple game modules.",
      "Gained experience in creating engaging console-based user interfaces."
    ],
    links: {
      github: null,
      demo: null
    },
    caseStudySlug: null
  },
  {
    id: 3,
    title: "Cloud Security Research Paper",
    category: "research",
    description: "Published research exploring the security and privacy challenges inherent in multi-tenant cloud computing environments.",
    details: "This research paper, published in the International Journal of Research Publication and Reviews (IJRPR), investigates critical vulnerabilities in multi-tenant cloud systems. It covers topics like tenant data isolation, side-channel attacks, and modern security best practices to mitigate these risks.",
    technologies: ["Cloud Computing", "Cybersecurity", "Academic Research"],
    learnings: [
      "Gained a deep understanding of cloud architecture and its security vulnerabilities.",
      "Developed strong academic research and technical writing skills.",
      "Explored modern security practices used by major cloud providers."
    ],
    links: {
      paper: "https://ijrpr.com/uploads/V6ISSUE5/IJRPR45654.pdf"
    },
    caseStudySlug: null
  },
  {
    id: 4,
    title: "TextShare",
    category: "web",
    description: "A zero-friction sharing platform for pastes, files, short links, QR codes, and bio pages.",
    details: "TextShare reduces friction for common tasks—share text, files, URLs, QR codes, and bio links—without sign-up. Built with Next.js 15, Prisma, and PostgreSQL, focused on speed, stability, and clean UX.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind", "CI/CD"],
    learnings: [
      "Built a production-ready SaaS product with rate limiting and expiry controls.",
      "Implemented serverless-friendly design for free-tier sustainability.",
      "Learned the importance of guardrails and UX simplicity."
    ],
    links: {
      demo: "textshare.xyz",
      github: "github.com/omdeshpande09012005/textshare"
    },
    caseStudySlug: "textshare-architecture"
  },
  {
    id: 5,
    title: "GameAI-Pathfinder",
    category: "research",
    description: "C++ framework comparing A* vs Q-Learning on grid maps with statistical evaluation.",
    details: "A reproducible C++17 framework implementing A* and tabular Q-Learning, with PowerShell runners and Python analysis generating CSVs, plots, and LaTeX tables to quantify when Q-Learning approaches A*.",
    technologies: ["C++", "Python", "Reinforcement Learning", "A*", "Q-Learning", "Stats"],
    learnings: [
      "Designed rigorous experimental methodology with N=20 eval runs.",
      "Applied hypothesis testing (Shapiro–Wilk, paired t-test) for statistical rigor.",
      "Learned that A* remains practically superior on static known maps."
    ],
    links: {
      github: "github.com/omdeshpande09012005/GameAI-Pathfinder"
    },
    caseStudySlug: "gameai-pathfinder-study"
  },
  {
    id: 6,
    title: "CampusX",
    category: "mobile",
    description: "A student campus community platform for peer-to-peer connections and campus events.",
    details: "Built with Flutter and Dart, CampusX is a mobile-first platform connecting students on campus. Features include event discovery, peer connections, real-time messaging, and campus community feeds.",
    technologies: ["Dart", "Flutter", "Firebase", "REST API"],
    learnings: [
      "Mastered mobile app development with Flutter for cross-platform deployment.",
      "Implemented real-time features with Firebase backend.",
      "Learned how to build engaging social features for community engagement."
    ],
    links: {
      github: "github.com/omdeshpande09012005/CampusX"
    },
    caseStudySlug: null
  },
  {
    id: 7,
    title: "CI-CD Pipeline Project",
    category: "devops",
    description: "Complete CI/CD automation pipeline integrating GitHub and Jenkins for continuous integration and deployment.",
    details: "A production-ready CI/CD setup demonstrating automated testing, building, and deployment workflows. Implements GitHub webhooks with Jenkins orchestration for seamless code integration and deployment.",
    technologies: ["Python", "Jenkins", "GitHub", "Docker", "DevOps"],
    learnings: [
      "Designed and implemented complete CI/CD pipelines from scratch.",
      "Integrated GitHub webhooks for automated triggering.",
      "Learned deployment strategies and automation best practices."
    ],
    links: {
      github: "github.com/omdeshpande09012005/CI-CD_project"
    },
    caseStudySlug: null
  },
  {
    id: 8,
    title: "FormBridge",
    category: "backend",
    description: "Backend-as-a-service platform for form handling, submission management, and data collection.",
    details: "A serverless form backend built on AWS infrastructure. FormBridge provides form creation, validation, submission handling, and data export capabilities without requiring backend development expertise.",
    technologies: ["AWS", "Lambda", "DynamoDB", "API Gateway", "Shell"],
    learnings: [
      "Built serverless architectures on AWS infrastructure.",
      "Designed scalable form processing systems.",
      "Implemented secure data handling and submission workflows."
    ],
    links: {
      github: "github.com/omdeshpande09012005/formbridge",
      demo: "omdeshpande09012005.github.io/formbridge/"
    },
    caseStudySlug: null
  },
  {
    id: 9,
    title: "Slime Escape",
    category: "game",
    description: "Physics-based puzzle platformer game built with C++ and SFML with challenging level design.",
    details: "A desktop game featuring innovative physics-based mechanics, challenging puzzles, and engaging platformer gameplay. Built with SFML for graphics and physics simulation using custom C++ implementations.",
    technologies: ["C++", "SFML", "Physics", "Game Development"],
    learnings: [
      "Implemented complex physics engine for game mechanics.",
      "Designed engaging level progression and difficulty curves.",
      "Learned optimization techniques for real-time rendering."
    ],
    links: {
      github: "github.com/omdeshpande09012005/Slime-Escape"
    },
    caseStudySlug: null
  }
];

export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Apps' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'desktop', label: 'Desktop Apps' },
  { id: 'game', label: 'Games' },
  { id: 'backend', label: 'Backend' },
  { id: 'devops', label: 'DevOps' },
  { id: 'research', label: 'Research' }
];

export const getProjectsByCategory = (category) => {
  if (category === 'all') return projectsData;
  return projectsData.filter(p => p.category === category);
};
