/**
 * JSON-LD Helper Functions
 * Create and manage structured data for different content types using Schema.org vocabulary
 * Supports: Person, Article, BlogPosting, Project, SoftwareApplication
 */

import { seoConfig, buildPageUrl } from './seo.config';

/**
 * Base interface for JSON-LD structured data
 */
export interface JSONLDData {
  '@context': 'https://schema.org';
  '@type': string;
  [key: string]: any;
}

/**
 * Person LD (Linked Data)
 * Used for homepage/profile pages
 * Includes job title, social profiles, and contact information
 *
 * @param {Object} options - Customization options
 * @param {string} [options.jobTitle] - Current job title (default: 'Student / Software Engineer')
 * @param {string} [options.name] - Person's name (default: from config)
 * @param {string[]} [options.sameAs] - Additional social profiles (default: GitHub, LinkedIn, Twitter)
 * @param {string} [options.image] - Profile image URL
 * @param {string} [options.description] - Bio or description
 * @returns {JSONLDData} Person schema object
 *
 * @example
 * const personData = personLD({
 *   jobTitle: 'Full Stack Engineer',
 *   image: 'https://example.com/avatar.jpg'
 * });
 * // Injects: name, url, sameAs, jobTitle, image, etc.
 */
export const personLD = (options?: {
  jobTitle?: string;
  name?: string;
  sameAs?: string[];
  image?: string;
  description?: string;
}): JSONLDData => {
  const {
    jobTitle = 'Student / Software Engineer',
    name = seoConfig.authorName,
    sameAs = [
      seoConfig.githubUrl,
      seoConfig.linkedinUrl,
      `https://twitter.com/${seoConfig.twitterHandle.replace('@', '')}`,
    ],
    image = seoConfig.defaultOGImage,
    description = seoConfig.defaultDescription,
  } = options || {};

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    url: seoConfig.siteUrl,
    email: seoConfig.contactEmail,
    jobTitle,
    image,
    description,
    sameAs,
    knowsLanguage: ['English', 'Hindi'],
    knowsAbout: [
      'Full Stack Development',
      'React',
      'Node.js',
      'TypeScript',
      'Python',
      'Machine Learning',
      'Web Development',
      'Cloud Computing',
    ],
    location: {
      '@type': 'Place',
      name: seoConfig.location,
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'MIT World Peace University',
    },
  };
};

/**
 * Article LD (Linked Data)
 * Used for blog posts and articles
 * Includes headline, author, dates, image, keywords, and content details
 *
 * @param {Object} frontmatter - Article frontmatter metadata
 * @param {string} frontmatter.headline - Article headline/title
 * @param {string} frontmatter.description - Article summary/excerpt
 * @param {string} frontmatter.datePublished - ISO date string (e.g., '2025-11-07')
 * @param {string} [frontmatter.dateModified] - ISO date string for last modification
 * @param {string} [frontmatter.image] - Featured image URL
 * @param {string} [frontmatter.author] - Author name (default: from config)
 * @param {string[]} [frontmatter.keywords] - Article keywords/tags
 * @param {string} [frontmatter.slug] - Article slug for URL construction
 * @param {string} [frontmatter.articleBody] - Full article content (optional)
 * @returns {JSONLDData} Article schema object
 *
 * @example
 * const articleData = articleLD({
 *   headline: 'Building a React Portfolio with Vite',
 *   description: 'A complete guide to creating a portfolio...',
 *   datePublished: '2025-11-07',
 *   dateModified: '2025-11-08',
 *   image: 'https://example.com/article-image.jpg',
 *   keywords: ['React', 'Vite', 'Portfolio', 'Web Development'],
 *   slug: 'building-react-portfolio-vite'
 * });
 */
export const articleLD = (frontmatter: {
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  author?: string;
  keywords?: string[];
  slug?: string;
  articleBody?: string;
}): JSONLDData => {
  const {
    headline,
    description,
    datePublished,
    dateModified = datePublished,
    image = seoConfig.defaultOGImage,
    author = seoConfig.authorName,
    keywords = [],
    slug = '',
    articleBody = '',
  } = frontmatter;

  // Construct URL from slug if provided
  const url = slug ? buildPageUrl(`/blog/${slug}`) : buildPageUrl('/blog');

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    description,
    image: {
      '@type': 'ImageObject',
      url: image,
      width: 1200,
      height: 630,
    },
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: author,
      url: seoConfig.siteUrl,
      sameAs: [
        seoConfig.githubUrl,
        seoConfig.linkedinUrl,
        `https://twitter.com/${seoConfig.twitterHandle.replace('@', '')}`,
      ],
    },
    publisher: {
      '@type': 'Organization',
      name: seoConfig.siteName,
      logo: {
        '@type': 'ImageObject',
        url: seoConfig.defaultOGImage,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    url,
    ...(keywords.length > 0 && { keywords: keywords.join(', ') }),
    ...(articleBody && { articleBody }),
  };
};

/**
 * Project LD (Linked Data)
 * Used for featured projects/portfolio items
 * Includes project name, description, URL, repository link, tech stack, and images
 *
 * @param {Object} project - Project data
 * @param {string} project.name - Project name
 * @param {string} project.description - Project description
 * @param {string} project.url - Live project URL
 * @param {string} [project.repoUrl] - GitHub repository URL
 * @param {string} [project.image] - Project screenshot/thumbnail URL
 * @param {string[]} [project.technologies] - Technology stack (e.g., ['React', 'Node.js'])
 * @param {string} [project.startDate] - Project start date (ISO format)
 * @param {string} [project.endDate] - Project end date (ISO format)
 * @param {string} [project.status] - Project status ('Completed', 'In Progress', etc.)
 * @param {string} [project.author] - Project author/creator name
 * @returns {JSONLDData} Project schema object
 *
 * @example
 * const projectData = projectLD({
 *   name: 'Resume Screener Pro',
 *   description: 'AI-powered resume screening platform',
 *   url: 'https://resumescreener.dev',
 *   repoUrl: 'https://github.com/omdeshpande/resume-screener-pro',
 *   image: 'https://example.com/project-screenshot.jpg',
 *   technologies: ['React', 'Node.js', 'TensorFlow', 'MongoDB'],
 *   startDate: '2025-01-01',
 *   endDate: '2025-03-15',
 *   status: 'Completed'
 * });
 */
export const projectLD = (project: {
  name: string;
  description: string;
  url: string;
  repoUrl?: string;
  image?: string;
  technologies?: string[];
  startDate?: string;
  endDate?: string;
  status?: string;
  author?: string;
}): JSONLDData => {
  const {
    name,
    description,
    url,
    repoUrl = '',
    image = seoConfig.defaultOGImage,
    technologies = [],
    startDate = '',
    endDate = '',
    status = 'Completed',
    author = seoConfig.authorName,
  } = project;

  const projectData: JSONLDData = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name,
    description,
    url,
    image,
    creator: {
      '@type': 'Person',
      name: author,
      url: seoConfig.siteUrl,
    },
    author: {
      '@type': 'Person',
      name: author,
      url: seoConfig.siteUrl,
    },
    ...(repoUrl && {
      codeRepository: repoUrl,
      programmingLanguage: technologies.length > 0 ? technologies[0] : 'JavaScript',
    }),
    ...(technologies.length > 0 && {
      keywords: technologies.join(', '),
    }),
    ...(startDate && { dateCreated: startDate }),
    ...(endDate && { datePublished: endDate }),
  };

  // Add date range if both start and end dates provided
  if (startDate && endDate) {
    projectData.temporalCoverage = `${startDate}/${endDate}`;
  }

  return projectData;
};

/**
 * Software Application LD (Linked Data)
 * Used for showcasing software applications/tools built
 * Includes app name, description, features, reviews, and download links
 *
 * @param {Object} app - Application data
 * @param {string} app.name - Application name
 * @param {string} app.description - Application description
 * @param {string} [app.url] - Application URL
 * @param {string} [app.image] - Application icon/screenshot
 * @param {string[]} [app.features] - Key features
 * @param {string} [app.version] - Current version
 * @param {string} [app.releaseDate] - Release date (ISO format)
 * @param {string} [app.author] - Creator name
 * @param {Object} [app.rating] - User ratings
 * @param {number} [app.rating.ratingValue] - Average rating (1-5)
 * @param {number} [app.rating.ratingCount] - Number of ratings
 * @returns {JSONLDData} SoftwareApplication schema object
 *
 * @example
 * const appData = softwareApplicationLD({
 *   name: 'TextShare',
 *   description: 'Secure text sharing platform',
 *   url: 'https://textshare.dev',
 *   image: 'https://example.com/textshare-icon.png',
 *   features: ['Encrypted Sharing', 'Auto Expiration', 'No Account Required'],
 *   version: '1.0.0',
 *   releaseDate: '2025-06-01',
 *   rating: { ratingValue: 4.5, ratingCount: 120 }
 * });
 */
export const softwareApplicationLD = (app: {
  name: string;
  description: string;
  url?: string;
  image?: string;
  features?: string[];
  version?: string;
  releaseDate?: string;
  author?: string;
  rating?: {
    ratingValue: number;
    ratingCount: number;
  };
}): JSONLDData => {
  const {
    name,
    description,
    url = seoConfig.siteUrl,
    image = seoConfig.defaultOGImage,
    features = [],
    version = '1.0.0',
    releaseDate = new Date().toISOString(),
    author = seoConfig.authorName,
    rating,
  } = app;

  const appData: JSONLDData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url,
    image,
    applicationCategory: 'Productivity',
    author: {
      '@type': 'Person',
      name: author,
      url: seoConfig.siteUrl,
    },
    version,
    datePublished: releaseDate,
    operatingSystem: ['Web', 'Android', 'iOS', 'Windows', 'macOS', 'Linux'],
    ...(features.length > 0 && {
      featureList: features,
    }),
    ...(rating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: rating.ratingValue,
        ratingCount: rating.ratingCount,
      },
    }),
  };

  return appData;
};

/**
 * Organization LD (Linked Data)
 * General organization schema for portfolio/personal brand
 * Includes contact info, social profiles, address, and logo
 *
 * @param {Object} options - Customization options
 * @param {string} [options.name] - Organization name
 * @param {string} [options.url] - Organization URL
 * @param {string} [options.email] - Contact email
 * @param {string} [options.phone] - Contact phone
 * @param {string} [options.logo] - Logo URL
 * @param {string[]} [options.sameAs] - Social media profiles
 * @returns {JSONLDData} Organization schema object
 *
 * @example
 * const orgData = organizationLD({
 *   name: 'Om Deshpande',
 *   email: 'om@omdeshpande.dev',
 *   logo: 'https://example.com/logo.png'
 * });
 */
export const organizationLD = (options?: {
  name?: string;
  url?: string;
  email?: string;
  phone?: string;
  logo?: string;
  sameAs?: string[];
}): JSONLDData => {
  const {
    name = seoConfig.siteName,
    url = seoConfig.siteUrl,
    email = seoConfig.contactEmail,
    phone = '',
    logo = seoConfig.defaultOGImage,
    sameAs = [
      seoConfig.githubUrl,
      seoConfig.linkedinUrl,
      `https://twitter.com/${seoConfig.twitterHandle.replace('@', '')}`,
    ],
  } = options || {};

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    logo,
    email,
    ...(phone && { telephone: phone }),
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email,
    },
    sameAs,
    location: {
      '@type': 'Place',
      name: seoConfig.location,
    },
  };
};

/**
 * Breadcrumb LD (Linked Data)
 * Used for breadcrumb navigation trails
 * Helps search engines understand site structure
 *
 * @param {Array<{name: string, url: string}>} items - Breadcrumb items
 * @returns {JSONLDData} BreadcrumbList schema object
 *
 * @example
 * const breadcrumbData = breadcrumbLD([
 *   { name: 'Home', url: 'https://omdeshpande.dev' },
 *   { name: 'Blog', url: 'https://omdeshpande.dev/blog' },
 *   { name: 'React Guide', url: 'https://omdeshpande.dev/blog/react-guide' }
 * ]);
 */
export const breadcrumbLD = (
  items: Array<{ name: string; url: string }>
): JSONLDData => {
  const listItems = items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: listItems,
  };
};

/**
 * FAQ Page LD (Linked Data)
 * Used for FAQ pages
 * Helps search engines display FAQs in search results
 *
 * @param {Array<{question: string, answer: string}>} items - FAQ items
 * @returns {JSONLDData} FAQPage schema object
 *
 * @example
 * const faqData = faqPageLD([
 *   { question: 'How do I contact you?', answer: 'You can reach me via email...' },
 *   { question: 'What services do you offer?', answer: 'I offer full stack development...' }
 * ]);
 */
export const faqPageLD = (
  items: Array<{ question: string; answer: string }>
): JSONLDData => {
  const mainEntity = items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity,
  };
};

/**
 * Inject JSON-LD script into document head
 * Creates or updates a <script type="application/ld+json"> tag
 *
 * @param {JSONLDData} data - JSON-LD structured data object
 * @param {string} [id] - Optional unique ID for the script tag
 * @returns {HTMLScriptElement} The injected script element
 *
 * @example
 * const personData = personLD();
 * injectJSONLD(personData, 'person-schema');
 * // Adds: <script type="application/ld+json" id="person-schema">...</script>
 */
export const injectJSONLD = (
  data: JSONLDData,
  id?: string
): HTMLScriptElement => {
  // Find or create script tag
  let scriptTag = id
    ? (document.querySelector(`script#${id}`) as HTMLScriptElement | null)
    : (document.querySelector(
        'script[type="application/ld+json"]'
      ) as HTMLScriptElement | null);

  if (!scriptTag) {
    scriptTag = document.createElement('script');
    scriptTag.type = 'application/ld+json';
    if (id) {
      scriptTag.id = id;
    }
    document.head.appendChild(scriptTag);
  }

  scriptTag.textContent = JSON.stringify(data);
  return scriptTag;
};

/**
 * Remove JSON-LD script from document
 * Useful for cleaning up when navigating between pages
 *
 * @param {string} [id] - Optional ID of specific script to remove
 * @returns {void}
 *
 * @example
 * removeJSONLD('person-schema'); // Remove specific schema
 * removeJSONLD(); // Remove all JSON-LD scripts
 */
export const removeJSONLD = (id?: string): void => {
  if (id) {
    const scriptTag = document.querySelector(`script#${id}`);
    if (scriptTag) {
      scriptTag.remove();
    }
  } else {
    const scripts = document.querySelectorAll('script[type="application/ld+json"]');
    scripts.forEach((script) => script.remove());
  }
};

export default {
  personLD,
  articleLD,
  projectLD,
  softwareApplicationLD,
  organizationLD,
  breadcrumbLD,
  faqPageLD,
  injectJSONLD,
  removeJSONLD,
};
