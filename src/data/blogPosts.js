/**
 * Blog Posts Data
 * Central configuration for all blog posts
 */

// Import images from src/assets
import gameaiCover from '../assets/blog/gameai-cover.jpg';
import textshareCover from '../assets/blog/textshare-cover.jpg';
import gitexCover from '../assets/blog/gitex-cover.jpg';

export const blogPostsData = [
  {
    slug: 'gameai-pathfinder-astar-vs-qlearning',
    title: 'GameAI Pathfinder: A* vs Q-Learning Performance Analysis',
    date: '2025-11-06',
    tags: ['AI', 'Machine Learning', 'C++', 'Game Development', 'Reinforcement Learning'],
    summary: 'Comprehensive performance analysis comparing A* pathfinding algorithm with Q-Learning reinforcement learning across different map complexities and scenarios.',
    excerpt: 'Comprehensive performance analysis comparing A* pathfinding algorithm with Q-Learning reinforcement learning across different map complexities and scenarios.',
    coverImage: gameaiCover,
    author: 'Om Deshpande',
    readingTime: 15,
    type: 'project',
    repoUrl: 'https://github.com/omdeshpande09012005/GameAI-Pathfinder',
    demoUrl: ''
  },
  {
    slug: 'how-i-built-textshare',
    title: 'How I Built TextShare.xyz: From Idea to Full-Stack Product',
    date: '2025-11-07',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Vercel'],
    summary: 'A deep dive into building TextShare, a modern ephemeral content sharing platform. Learn about the architecture, tech choices, and lessons learned from concept to production.',
    excerpt: 'A deep dive into building TextShare, a modern ephemeral content sharing platform. Learn about the architecture, tech choices, and lessons learned from concept to production.',
    coverImage: textshareCover,
    author: 'Om Deshpande',
    readingTime: 12,
    type: 'project',
    repoUrl: 'https://github.com/omdeshpande09012005/textshare',
    demoUrl: 'https://textshare.xyz'
  },
  {
    slug: 'gitex-global-2025-takeaways',
    title: "GITEX Global 2025: My Experience at the World's Largest Tech Show",
    date: '2025-10-20',
    tags: ['Events', 'Technology', 'AI', 'Innovation'],
    summary: "Key insights and experiences from attending GITEX Global 2025 in Dubai. From AI innovations to startup showcases, here's what caught my attention.",
    excerpt: "Key insights and experiences from attending GITEX Global 2025 in Dubai. From AI innovations to startup showcases, here's what caught my attention.",
    coverImage: gitexCover,
    author: 'Om Deshpande',
    readingTime: 8,
    type: 'blog',
    repoUrl: '',
    demoUrl: ''
  }
];
