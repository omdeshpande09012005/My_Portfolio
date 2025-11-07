import { Code, Layers, Cloud, Cpu } from 'lucide-react';

/**
 * Stats Data Module
 * Centralized export of all stats used across Hero, About, and other sections
 * Includes icons and data for consistent display throughout the portfolio
 */

// Stats displayed in Hero section (with animated icons)
export const heroStats = [
  { icon: Code, value: '9+', label: 'Projects' },
  { icon: Cpu, value: '5+', label: 'Languages' },
  { icon: Layers, value: '10+', label: 'PCs Built' }
];

// Stats displayed in About section (with icons)
export const aboutStats = [
  { number: '9+', label: 'Projects Built', icon: Layers },
  { number: '6', label: 'Skill Categories', icon: Code },
  { number: '16', label: 'Certifications', icon: Cloud },
  { number: '28+', label: 'Technical Skills', icon: Cpu }
];

// General portfolio stats (text-based, used for general display)
export const portfolioStats = [
  { number: '20+', label: 'Custom PCs Built' },
  { number: '5+', label: 'Gaming Tournaments Managed' },
  { number: '16', label: 'Certifications Earned' },
  { number: '50+', label: 'Event Participants Managed' }
];

export const getStatsByContext = (context) => {
  switch(context) {
    case 'hero':
      return heroStats;
    case 'about':
      return aboutStats;
    case 'general':
      return portfolioStats;
    default:
      return aboutStats;
  }
};
