// Import experience logos
import squadUpLogo from '../assets/logos/squad-up-logo.png';
import gtekLogo from '../assets/logos/gtek-logo.png';

/**
 * Experience Data Module
 * Centralized export of all professional experience and internships
 * Each entry includes achievements, duration, location, and company info
 */

export const experienceData = [
  {
    title: "GameAI-Pathfinder (Research)",
    company: "Personal Project",
    logo: squadUpLogo,
    duration: "2025",
    location: "Remote",
    type: "Research",
    achievements: [
      "Built a reproducible C++ RL vs A* framework",
      "N=20 eval runs with hypothesis testing (Shapiro–Wilk, paired t-test)",
      "Auto-generated LaTeX tables + plots for statistical analysis"
    ],
  },
  {
    title: "TextShare (Product)",
    company: "Personal Project",
    logo: gtekLogo,
    duration: "2025",
    location: "Remote",
    type: "Full-Stack",
    achievements: [
      "Full-stack Next.js app with Prisma/Postgres",
      "Short links, QR, pastes, file sharing with rate limiting + expiry",
      "Clean API and zero-friction UX"
    ],
  },
  {
    title: "FormBridge Cloud (In Progress)",
    company: "Personal Project",
    logo: squadUpLogo,
    duration: "2025",
    location: "Remote",
    type: "Backend",
    achievements: [
      "Serverless form backend (AWS Lambda + DynamoDB + SES)",
      "AI insights, webhooks, and dashboard",
      "Production-ready form handling"
    ],
  }
];

export const getExperienceByCompany = (companyName) => {
  return experienceData.find(exp => exp.company === companyName);
};
