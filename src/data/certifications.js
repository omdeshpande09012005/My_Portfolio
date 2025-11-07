/**
 * Certifications Data Module
 * Centralized export of all certifications and professional credentials
 * Organized by category for easy filtering and display
 */

import { Award, BrainCircuit, Users, BarChart3, Star, Cloud, Database, Code2, Zap, Globe } from 'lucide-react';

// Import company logos
import awsLogo from '../assets/logos/aws-logo.png';
import googleCloudLogo from '../assets/logos/googlecloud-logo.png';

// Company icons mapping for certifications
export const issuerIconMap = {
  'Amazon Web Services (AWS)': { icon: Cloud, bgColor: 'bg-orange-500/10', textColor: 'text-orange-500', logo: awsLogo },
  'Forage': { icon: Code2, bgColor: 'bg-blue-500/10', textColor: 'text-blue-500', logo: null },
  'Oracle': { icon: Database, bgColor: 'bg-red-500/10', textColor: 'text-red-500', logo: null },
  'Google': { icon: Zap, bgColor: 'bg-yellow-500/10', textColor: 'text-yellow-500', logo: googleCloudLogo },
  'HackerRank': { icon: Code2, bgColor: 'bg-green-500/10', textColor: 'text-green-500', logo: null },
  'IBM (via edX)': { icon: Cloud, bgColor: 'bg-blue-600/10', textColor: 'text-blue-600', logo: null },
  'EdYoda Digital University': { icon: Award, bgColor: 'bg-purple-500/10', textColor: 'text-purple-500', logo: null },
  'RIT (via edX)': { icon: BrainCircuit, bgColor: 'bg-indigo-500/10', textColor: 'text-indigo-500', logo: null },
  'Great Learning': { icon: Star, bgColor: 'bg-amber-500/10', textColor: 'text-amber-500', logo: null },
  'Indiana University (via edX)': { icon: BrainCircuit, bgColor: 'bg-red-600/10', textColor: 'text-red-600', logo: null },
  'SDG Academy (via edX)': { icon: Globe, bgColor: 'bg-green-600/10', textColor: 'text-green-600', logo: null },
  'UCR (via edX)': { icon: Users, bgColor: 'bg-pink-500/10', textColor: 'text-pink-500', logo: null }
};

export const certificationsData = [
  {
    id: 1,
    name: "AWS Educate Machine Learning Foundations",
    issuer: "Amazon Web Services (AWS)",
    category: "data",
    description: "Earned credential demonstrating foundational knowledge of machine learning concepts and AWS ML services.",
    skills: ["Amazon Web Services (AWS)", "Cloud Computing", "Machine Learning"],
    credentialUrl: "https://www.credly.com/badges/172da111-ef46-4fc5-a02f-f1b9fd90d1e0",
    issuedDate: "Sep 2025",
    expiresDate: null
  },
  {
    id: 2,
    name: "J.P. Morgan - Software Engineering Job Simulation",
    issuer: "Forage",
    category: "professional",
    description: "Completed a job simulation that involved working on real software engineering tasks similar to those at J.P. Morgan.",
    skills: ["Software Engineering", "Problem Solving", "Banking Technology"],
    credentialUrl: "https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_68cc094623fff83d6de5de3b_1758804840282_completion_certificate.pdf",
    issuedDate: "Sep 2025",
    expiresDate: null
  },
  {
    id: 3,
    name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    category: "data",
    description: "Certified as an AI Foundations Associate, demonstrating competency in foundational AI and machine learning concepts on Oracle Cloud Infrastructure.",
    skills: ["Artificial Intelligence (AI)", "Oracle Cloud Infrastructure", "Machine Learning"],
    credentialUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=4DCAEC1C473CC4994292CE04F620E3F1F8CAA50D1205DDD595CBF4270DB3DA16",
    issuedDate: "Sep 2025",
    expiresDate: "Sep 2027"
  },
  {
    id: 4,
    name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    category: "data",
    description: "Certified as a Generative AI Professional, demonstrating expertise in Large Language Models, OCI Generative AI Service, and advanced generative AI applications.",
    skills: ["Generative AI", "Large Language Models (LLMs)", "Oracle Cloud Infrastructure", "AI Applications"],
    credentialUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=D9BE3DD6035104B588963DE8DA7931F71D06307B74F7C6F47027ED94775839BB",
    issuedDate: "Sep 2025",
    expiresDate: "Sep 2027"
  },
  {
    id: 5,
    name: "Build Real World AI Applications with Gemini and Imagen Skill Badge",
    issuer: "Google",
    category: "data",
    description: "Earned a skill badge demonstrating practical experience building real-world AI applications using Google's Gemini and Imagen APIs.",
    skills: ["Google Gemini", "Imagen", "Generative AI", "Google Cloud Platform", "AI Applications"],
    credentialUrl: "https://www.credly.com/badges/a0eaaaa9-ab94-46a0-9cca-782b8a03ead8/public_url",
    issuedDate: "Aug 2025",
    expiresDate: null
  },
  {
    id: 6,
    name: "Prompt Design in Vertex AI",
    issuer: "Google",
    category: "data",
    description: "Completed training in prompt design using Google Cloud's Vertex AI, learning to craft effective prompts for generative AI models.",
    skills: ["Generative AI", "Prompt Engineering", "Vertex AI", "Google Cloud Platform", "AI/ML"],
    credentialUrl: "https://www.credly.com/badges/8c16b6b1-361b-4812-9903-54596e5fb087/public_url",
    issuedDate: "Aug 2025",
    expiresDate: null
  },
  {
    id: 7,
    name: "5-Star Problem Solving, C++ & SQL",
    issuer: "HackerRank",
    category: "programming",
    description: "Achieved 5-star gold badges in C++, SQL, and Problem Solving, demonstrating advanced algorithmic thinking and database proficiency.",
    skills: ["C++", "SQL", "Algorithms", "Problem Solving"],
    credentialUrl: "https://www.hackerrank.com/profile/om_deshpande1",
    issuedDate: null,
    expiresDate: null
  },
  {
    id: 8,
    name: "Data Visualization & Dashboards with Excel and Cognos",
    issuer: "IBM (via edX)",
    category: "data",
    description: "Mastered data visualization techniques and built interactive dashboards using industry-standard tools like Excel and IBM Cognos.",
    skills: ["Data Visualization", "Dashboards", "Excel", "IBM Cognos"],
    credentialUrl: "https://courses.edx.org/certificates/281522c1f8e8433cb83d0bea050e5228",
    issuedDate: "Mar 2024",
    expiresDate: null
  },
  {
    id: 9,
    name: "Python Certification",
    issuer: "EdYoda Digital University",
    category: "programming",
    description: "Completed a comprehensive Python course covering core concepts, data structures, and object-oriented programming.",
    skills: ["Python", "OOP", "Data Structures", "Algorithms"],
    credentialUrl: "https://edyodalms.s3.amazonaws.com/files/certificates/Om_Deshpande_achivement_Python_Certification_18253_Qr_code_.png",
    issuedDate: "Oct 2023",
    expiresDate: null
  },
  {
    id: 10,
    name: "Critical Thinking & Problem Solving",
    issuer: "RIT (via edX)",
    category: "communication",
    description: "Developed structured approaches to analyze complex problems and formulate effective, logical solutions.",
    skills: ["Critical Thinking", "Analytical Skills", "Decision Making"],
    credentialUrl: "https://courses.edx.org/certificates/4de80a0439c44fd58a6f77dc08833878",
    issuedDate: "Feb 2024",
    expiresDate: null
  },
  {
    id: 11,
    name: "Teamwork & Collaboration",
    issuer: "RIT (via edX)",
    category: "communication",
    description: "Learned and applied best practices for effective teamwork, communication, and conflict resolution in a professional setting.",
    skills: ["Collaboration", "Teamwork", "Communication"],
    credentialUrl: "https://courses.edx.org/certificates/2a8ddabddf4241778900235356d2a63d",
    issuedDate: "Mar 2024",
    expiresDate: null
  },
  {
    id: 12,
    name: "Excel for Beginners",
    issuer: "Great Learning",
    category: "tools",
    description: "Gained foundational skills in Microsoft Excel for data organization, calculation, and basic analysis.",
    skills: ["Microsoft Excel", "Data Entry", "Formulas"],
    credentialUrl: "https://www.mygreatlearning.com/certificate/VNVUOHFW",
    issuedDate: "May 2023",
    expiresDate: null
  },
  {
    id: 13,
    name: "Job Focussed Professional Communication",
    issuer: "EdYoda Digital University",
    category: "communication",
    description: "Enhanced professional communication skills for workplace success, focusing on clarity, conciseness, and impact.",
    skills: ["Communication", "Presentation", "Professionalism"],
    credentialUrl: "https://edyodalms.s3.amazonaws.com/files/certificates/Om_Deshpande_achivement_Job_Focussed_Professional_Communication_Certification_15271_Qr_code_.png",
    issuedDate: "Jul 2023",
    expiresDate: null
  },
  {
    id: 14,
    name: "Introduction to Personal Financial Planning",
    issuer: "Indiana University (via edX)",
    category: "professional",
    description: "Acquired foundational knowledge in financial planning, budgeting, and investment principles.",
    skills: ["Financial Literacy", "Budgeting", "Planning"],
    credentialUrl: "https://courses.edx.org/certificates/87a43deec69b4c6dba494a50bc9b87a7",
    issuedDate: "Mar 2024",
    expiresDate: null
  },
  {
    id: 15,
    name: "Measuring Sustainable Development",
    issuer: "SDG Academy (via edX)",
    category: "professional",
    description: "Learned to measure and track progress towards the Sustainable Development Goals (SDGs) using key indicators.",
    skills: ["Sustainable Development", "Data Analysis", "Metrics"],
    credentialUrl: "https://courses.edx.org/certificates/2ae2e6142b15478e84762257572da0da",
    issuedDate: "Mar 2024",
    expiresDate: null
  },
  {
    id: 16,
    name: "Introduction to Social-Emotional Learning (SEL)",
    issuer: "UCR (via edX)",
    category: "communication",
    description: "Gained an understanding of the core competencies of social-emotional learning and its impact on personal and professional growth.",
    skills: ["Emotional Intelligence", "Self-awareness", "Empathy"],
    credentialUrl: "https://courses.edx.org/certificates/acdbe12f379b4f8e9271908f62808a29",
    issuedDate: "Feb 2024",
    expiresDate: null
  }
];

export const certificationCategories = [
  { id: 'all', label: 'All', count: certificationsData.length },
  { id: 'programming', label: 'Programming', count: certificationsData.filter(c => c.category === 'programming').length },
  { id: 'data', label: 'Data & Analytics', count: certificationsData.filter(c => c.category === 'data').length },
  { id: 'tools', label: 'Tools', count: certificationsData.filter(c => c.category === 'tools').length },
  { id: 'communication', label: 'Soft Skills', count: certificationsData.filter(c => c.category === 'communication').length },
  { id: 'professional', label: 'Professional Dev.', count: certificationsData.filter(c => c.category === 'professional').length },
];

export const getCertificationsByCategory = (category) => {
  if (category === 'all') return certificationsData;
  return certificationsData.filter(cert => cert.category === category);
};

export const categoryIcons = {
  programming: Star,
  data: BarChart3,
  tools: Award,
  communication: Users,
  professional: BrainCircuit
};
