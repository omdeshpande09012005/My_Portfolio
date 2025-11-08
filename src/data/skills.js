// Import skill logos
import cppLogo from '../assets/logos/c++-logo.png';
import pythonLogo from '../assets/logos/python-logo.png';
import javascriptLogo from '../assets/logos/javascript-logo.png';
import phpLogo from '../assets/logos/php-logo.png';
import cLogo from '../assets/logos/c-logo.png';
import reactLogo from '../assets/logos/react.js-logo.png';
import nodeLogo from '../assets/logos/node.js-logo.png';
import tailwindLogo from '../assets/logos/tailwindcss-logo.png';
import htmlLogo from '../assets/logos/html5-logo.png';
import cssLogo from '../assets/logos/css3-logo.png';
import mysqlLogo from '../assets/logos/mysql-logo.png';
import postgresqlLogo from '../assets/logos/postgresql-logo.png';
import awsLogo from '../assets/logos/aws-logo.png';
import azureLogo from '../assets/logos/azure-logo.png';
import googleCloudLogo from '../assets/logos/googlecloud-logo.png';
import gitLogo from '../assets/logos/git-logo.png';
import githubLogo from '../assets/logos/github-logo.png';
import vscodeLogo from '../assets/logos/vscode-logo.png';
import cursoraiLogo from '../assets/logos/cursorai-logo.png';

/**
 * Skills Data Module
 * Centralized export of all technical and soft skills
 * Organized by category for easy filtering and display
 */

export const technicalSkillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: 'C++17', proficiency: 'Advanced', iconText: 'C++', logo: cppLogo },
      { name: 'Python', proficiency: 'Proficient', iconText: 'PY', logo: pythonLogo },
      { name: 'TypeScript', proficiency: 'Proficient', iconText: 'TS', logo: javascriptLogo },
      { name: 'JavaScript', proficiency: 'Proficient', iconText: 'JS', logo: javascriptLogo },
      { name: 'PHP', proficiency: 'Intermediate', iconText: 'PHP', logo: phpLogo },
      { name: 'C', proficiency: 'Intermediate', iconText: 'C', logo: cLogo },
    ]
  },
  {
    category: "Web & Frameworks",
    skills: [
      { name: 'Next.js (App Router)', proficiency: 'Proficient', iconText: 'N', logo: reactLogo },
      { name: 'React.js', proficiency: 'Proficient', iconText: 'R', logo: reactLogo },
      { name: 'Node.js', proficiency: 'Intermediate', iconText: 'N', logo: nodeLogo },
      { name: 'Tailwind CSS', proficiency: 'Advanced', iconText: 'T', logo: tailwindLogo },
      { name: 'HTML5', proficiency: 'Advanced', iconText: 'H5', logo: htmlLogo },
      { name: 'CSS3', proficiency: 'Advanced', iconText: 'C3', logo: cssLogo },
      { name: 'SFML', proficiency: 'Intermediate', iconText: 'SF', logo: null },
    ]
  },
  {
    category: "Data & Databases",
    skills: [
      { name: 'PostgreSQL', proficiency: 'Proficient', iconText: 'SQL', logo: postgresqlLogo },
      { name: 'MySQL', proficiency: 'Advanced', iconText: 'SQL', logo: mysqlLogo },
      { name: 'Prisma', proficiency: 'Proficient', iconText: 'P', logo: null },
      { name: 'Supabase', proficiency: 'Intermediate', iconText: 'SB', logo: null },
    ]
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: 'AWS', proficiency: 'Intermediate', iconText: 'AWS', logo: awsLogo },
      { name: 'Azure', proficiency: 'Intermediate', iconText: 'AZ', logo: azureLogo },
      { name: 'Google Cloud', proficiency: 'Intermediate', iconText: 'GC', logo: googleCloudLogo },
      { name: 'GitHub Actions', proficiency: 'Proficient', iconText: 'GH', logo: githubLogo },
      { name: 'CI/CD Pipeline', proficiency: 'Proficient', iconText: 'CI', logo: null },
      { name: 'Docker', proficiency: 'Intermediate', iconText: 'D', logo: null },
      { name: 'Kubernetes', proficiency: 'Intermediate', iconText: 'K8s', logo: null },
      { name: 'Grafana', proficiency: 'Intermediate', iconText: 'GF', logo: null },
      { name: 'Prometheus', proficiency: 'Intermediate', iconText: 'PM', logo: null },
      { name: 'Vercel', proficiency: 'Advanced', iconText: 'V', logo: null },
    ]
  },
  {
    category: "Tools & Development",
    skills: [
      { name: 'Git', proficiency: 'Proficient', iconText: 'G', logo: gitLogo },
      { name: 'GitHub', proficiency: 'Proficient', iconText: 'GH', logo: githubLogo },
      { name: 'VS Code', proficiency: 'Advanced', iconText: 'VS', logo: vscodeLogo },
      { name: 'CursorAI', proficiency: 'Advanced', iconText: 'AI', logo: cursoraiLogo },
    ]
  },
  {
    category: "AI/ML",
    skills: [
      { name: 'scikit-learn', proficiency: 'Proficient', iconText: 'ML', logo: pythonLogo },
      { name: 'Model Evals', proficiency: 'Proficient', iconText: 'E', logo: pythonLogo },
      { name: 'Stats Testing', proficiency: 'Advanced', iconText: 'S', logo: pythonLogo },
    ]
  },
  {
    category: "Mobile & Cross-Platform",
    skills: [
      { name: 'Flutter', proficiency: 'Intermediate', iconText: 'FL', logo: null },
      { name: 'Dart', proficiency: 'Intermediate', iconText: 'D', logo: null },
      { name: 'Swift', proficiency: 'Beginner', iconText: 'S', logo: null },
    ]
  },
  {
    category: "Build & Configuration",
    skills: [
      { name: 'CMake', proficiency: 'Intermediate', iconText: 'CM', logo: null },
      { name: 'Makefile', proficiency: 'Intermediate', iconText: 'MK', logo: null },
    ]
  },
];

export const softSkillsData = [
  'Problem Solving',
  'System Optimization',
  'Technical Communication',
  'Team Collaboration',
  'Agile Development',
  'Adaptability',
  'Attention to Detail',
];

export const getSkillsByCategory = (categoryName) => {
  return technicalSkillsData.find(cat => cat.category === categoryName);
};
