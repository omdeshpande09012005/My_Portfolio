export const personalInfo = {
  // Basic Information
  name: "Om Deshpande",
  shortName: "OmDeshpande", // For branding (e.g., "Om.dev")
  title: "CS Student | AI/ML Researcher | Game Developer",
  email: "omdeshpande123456789@gmail.com",
  phone: "+91 9503248173",
  location: {
    city: "Pune",
    country: "India"
  },

  // Social Media
  social: {
    github: "https://github.com/omdeshpande09012005",
    linkedin: "https://www.linkedin.com/in/omdeshpande09",
    twitter: "https://x.com/OmDeshpande09",
    instagram: "https://instagram.com/yourhandle"
  },

  // Education
  education: {
    degree: "B. Tech in Computer Science and Engineering",
    institution: "MIT World Peace University, Pune",
    year: "2023-2027",
    gpa: "8.75/10.0 (3.5/4.0)",
    semesterGpa: "9.36/10.0 (3.74/4.0)",
    location: "Pune, India"
  },

  // Skills (update with your actual skills)
  skills: {
    programming: [
      { name: 'Python', level: 95 },
      { name: 'C', level: 90 },
      { name: 'C++', level: 85 },
      { name: 'MySQL', level: 98 },
      { name: 'JavaScript', level: 95 }
    ],
    frameworks: [
      { name: 'React.js', level: 90 },
      { name: 'TailwindCSS', level: 85 }
    ],
    databases: [
      { name: 'MySQL', level: 85 },
      { name: 'PostgreSQL', level: 80 }
    ],
    tools: [
      { name: 'AWS', level: 95 },
      { name: 'Azure', level: 98 },
      { name: 'Google Cloud', level: 85 }
    ]
  },

  // Projects (update with your actual projects)
  projects: [
    {
      title: "Online Bookstore Web Application",
      description: "Engineered a full-stack online bookstore using PHP and MySQL, featuring a secure user authentication system, comprehensive order management, and an admin dashboard for inventory control. Implemented a trigger-based review mechanism that increased user engagement by 25%.",
      technologies: ["PHP", "MySQL"],
      github: "https://github.com/omdeshpande09012005/Online_BookStore",
      demo: "ecommerce-demo.netlify.app",
      category: "fullstack"
    },
    {
      title: "Multi-Game Platform (OOPs Project)",
      description: "Created a console-based multi-game platform in C++ showcasing Object-Oriented Programming concepts. Included games like Snake, Tic-Tac-Toe, Rock-Paper-Scissors, and Number Guessing.",
      technologies: ["C++"],
      github: "github.com/yourusername/task-manager",
      demo: "taskmanager-demo.herokuapp.com",
      category: "web"
    },
    {
      title: "Research Paper - Cloud Security",
      description: "Published under International Journal of Research Publication and Reviews (IJRPR). Title: \"Security and Privacy Challenges in Multi-Tenant Cloud Environments\". Explored vulnerabilities, tenant data isolation issues, and modern security practices in cloud systems.",
      technologies: [],
      github: "",
      demo: "",
      category: "research"
    }
  ],

  // Experience (update with your actual experience)
  experience: [
    {
      title: "Production & Admin Team Member",
      company: "Squad Up Club - MIT World Peace University",
      duration: "Jan 2024-Present",
      location: "Pune",
      type: "internship",
      description: "Successfully managed and administered 5+ major LAN and online gaming tournaments, including the MIT WPU Summit, serving over 50+ participants. Configured and maintained 10+ high-performance PCs per event, achieving 99% uptime and ensuring a smooth, uninterrupted gameplay experience.",
      responsibilities: [
        "Managed and administered 5+ major LAN and online gaming tournaments",
        "Served over 50+ participants",
        "Configured and maintained 10+ high-performance PCs per event"
      ],
      technologies: ["LAN Setup", "System Optimization"]
    },
    {
      title: "Intern - PC Benchmarking & Building",
      company: "Gtek Computers",
      duration: "May-2023-Nov 2023",
      location: "Pune",
      type: "internship",
      description: "Built and configured over 20+ custom high-performance PCs for gaming and professional use, leading to an average 15% performance increase over off-the-shelf systems. Conducted rigorous software and hardware testing using Cinebench and other tools, providing detailed performance reports to clients.",
      responsibilities: [
        "Built and configured over 20+ custom high-performance PCs",
        "Conducted rigorous software and hardware testing",
        "Providing detailed performance reports to clients"
      ],
      technologies: ["PC Building", "Hardware Troubleshooting"]
    }
  ],

  // About Me
  about: {
    description: "I design and ship reliable systems. From Next.js products (TextShare) to C++ game AI (GameAI-Pathfinder), I care about engineering clarity, performance, and developer ergonomics. Currently polishing my research and infrastructure chops.",
    interests: [
      'AI & Reinforcement Learning',
      'Game Development & Physics Engines',
      'Scalable Backend Systems & DevOps',
      'AI/ML Research & Pathfinding',
      'Cloud-Native Platforms',
      'Full-Stack Development'
    ],
    values: [
      'Engineering Clarity',
      'Performance',
      'Developer Ergonomics',
      'System Optimization',
      'Research-Driven Development',
      'Scalable Design',
      'Creative Problem Solving',
      'Reproducible Results'
    ]
  },

  // Stats
  stats: [
    { number: '20+', label: 'Custom PCs Built' },
    { number: '5+', label: 'Gaming Tournaments Managed' },
    { number: '4', label: 'Certifications Earned' },
    { number: '50+', label: 'Event Participants Managed' }
  ]
};