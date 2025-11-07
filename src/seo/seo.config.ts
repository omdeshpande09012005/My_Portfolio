/**
 * SEO Configuration
 * Central location for all SEO-related settings and constants
 */

export const seoConfig = {
  // Site Information
  siteName: 'OD.dev — Om Deshpande',
  siteUrl: 'https://od.dev',
  authorName: 'Om Deshpande',
  authorEmail: 'om@omdeshpande.dev',
  
  // Social Media
  twitterHandle: '@om_codes',
  linkedinUrl: 'https://linkedin.com/in/omdeshpande',
  githubUrl: 'https://github.com/omdeshpande09012005',
  
  // Default SEO Tags
  defaultTitle: 'Om Deshpande — Software Engineer & Researcher',
  defaultDescription: 'B.Tech CSE @ MIT-WPU. I build fast, reliable systems — from AI/ML research and C++ game engines to Next.js products. Open to internships in 2026.',
  defaultOGImage: 'https://od.dev/og/default.png',
  
  // Keywords
  defaultKeywords: 'Om Deshpande, Full Stack Developer, React, Next.js, AI, Machine Learning, Web Development',
  
  // Contact
  contactEmail: 'om@omdeshpande.dev',
  location: 'Mumbai, India',
  
  // Page Titles (used for page-specific SEO)
  pages: {
    home: {
      title: 'Om Deshpande - Full Stack Developer & AI Enthusiast',
      description: 'Welcome to my portfolio. Explore my projects, skills, experience, and latest blog posts.',
    },
    projects: {
      title: 'Projects - Om Deshpande',
      description: 'Explore my portfolio of projects showcasing full-stack development, AI, and web technologies.',
    },
    blog: {
      title: 'Blog - Om Deshpande',
      description: 'Read my latest blog posts about web development, AI, startups, and technology insights.',
    },
    contact: {
      title: 'Contact - Om Deshpande',
      description: 'Get in touch with me. I\'m always interested in new opportunities and collaborations.',
    },
    about: {
      title: 'About - Om Deshpande',
      description: 'Learn more about my background, skills, experience, and journey as a developer.',
    },
  },
};

// Type definitions
export interface SEOMeta {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article' | 'blog' | 'profile';
  url?: string;
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
  canonical?: string;
}

// Helper function to build full page URL
export const buildPageUrl = (path: string): string => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${seoConfig.siteUrl}${cleanPath}`;
};

// Helper function to build structured data (JSON-LD)
export const buildStructuredData = (data: Record<string, any>) => {
  return {
    '@context': 'https://schema.org',
    ...data,
  };
};

// Person schema for homepage
export const personSchema = buildStructuredData({
  '@type': 'Person',
  name: seoConfig.authorName,
  email: seoConfig.authorEmail,
  url: seoConfig.siteUrl,
  sameAs: [
    seoConfig.githubUrl,
    seoConfig.linkedinUrl,
    `https://twitter.com/${seoConfig.twitterHandle.replace('@', '')}`,
  ],
  jobTitle: 'Full Stack Developer',
  knowsLanguage: ['English', 'Hindi'],
});

// Organization schema
export const organizationSchema = buildStructuredData({
  '@type': 'Organization',
  name: seoConfig.siteName,
  url: seoConfig.siteUrl,
  email: seoConfig.contactEmail,
  founder: {
    '@type': 'Person',
    name: seoConfig.authorName,
  },
  sameAs: [
    seoConfig.githubUrl,
    seoConfig.linkedinUrl,
  ],
});

// Website schema for search engines
export const websiteSchema = buildStructuredData({
  '@type': 'WebSite',
  url: seoConfig.siteUrl,
  name: seoConfig.siteName,
  description: seoConfig.defaultDescription,
  author: {
    '@type': 'Person',
    name: seoConfig.authorName,
  },
});
