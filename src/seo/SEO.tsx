/**
 * SEO Component
 * Wraps page content and handles all SEO requirements
 */

import React, { ReactNode, useEffect } from 'react';
import { useSEO } from './useSEO';
import type { SEOMeta } from './seo.config';
import { injectJSONLD, removeJSONLD, type JSONLDData } from './jsonld';

interface SEOProps {
  /** Optional meta configuration to override defaults */
  meta?: SEOMeta;
  /** Child components to render */
  children: ReactNode;
  /** Optional className for wrapper */
  className?: string;
  /** Optional JSON-LD structured data to inject */
  jsonld?: JSONLDData;
  /** Optional ID for the JSON-LD script tag (allows multiple schemas) */
  jsonldId?: string;
}

/**
 * SEO Component
 * Manages SEO for pages by setting meta tags, Open Graph, Twitter Cards, and structured data
 * 
 * @param {SEOProps} props - Component props
 * @returns {JSX.Element}
 * 
 * @example
 * // Home page with Person schema
 * import { personLD } from './seo/jsonld';
 * 
 * const personData = personLD({ jobTitle: 'Full Stack Engineer' });
 * <SEO meta={{ title: 'Home', description: 'Welcome' }} jsonld={personData}>
 *   <HomePage />
 * </SEO>
 * 
 * @example
 * // Blog post with Article schema
 * import { articleLD } from './seo/jsonld';
 * 
 * const articleData = articleLD({
 *   headline: 'My Blog Post',
 *   description: 'An interesting read',
 *   datePublished: '2025-11-07',
 *   slug: 'my-blog-post'
 * });
 * <SEO 
 *   meta={{
 *     title: 'My Blog Post',
 *     description: 'An interesting blog post',
 *     type: 'article',
 *     publishedDate: '2025-11-07',
 *   }}
 *   jsonld={articleData}
 *   jsonldId="article-schema"
 * >
 *   <Post />
 * </SEO>
 * 
 * @example
 * // Project page with Project schema
 * import { projectLD } from './seo/jsonld';
 * 
 * const projectData = projectLD({
 *   name: 'My Project',
 *   description: 'Project description',
 *   url: 'https://example.com',
 *   repoUrl: 'https://github.com/user/project',
 *   technologies: ['React', 'Node.js']
 * });
 * <SEO 
 *   meta={{ title: 'My Project' }}
 *   jsonld={projectData}
 *   jsonldId="project-schema"
 * >
 *   <Project />
 * </SEO>
 */
export const SEO: React.FC<SEOProps> = ({
  meta,
  children,
  className = '',
  jsonld,
  jsonldId,
}) => {
  // Call the useSEO hook to update meta tags
  useSEO(meta);

  // Handle JSON-LD injection
  useEffect(() => {
    if (jsonld) {
      injectJSONLD(jsonld, jsonldId);
    }

    // Cleanup: remove JSON-LD when component unmounts or jsonld changes
    return () => {
      if (jsonldId) {
        removeJSONLD(jsonldId);
      }
    };
  }, [jsonld, jsonldId]);

  // Return children wrapped in optional container
  return (
    <div className={className}>
      {children}
    </div>
  );
};

/**
 * SEO Wrapper Component (functional wrapper)
 * Alternative to SEO component for pages that want to use it as a layout wrapper
 * 
 * @param {SEOProps} props - Component props
 * @returns {JSX.Element}
 */
export const SEOWrapper: React.FC<SEOProps> = ({ meta, children, className }) => {
  return <SEO meta={meta} className={className}>{children}</SEO>;
};

/**
 * usePageSEO Hook
 * Simplified hook for setting page-level SEO without a component wrapper
 * 
 * @param {string} title - Page title
 * @param {string} description - Page description
 * @param {Partial<SEOMeta>} additionalMeta - Additional meta properties
 * @returns {void}
 * 
 * @example
 * usePageSEO(
 *   'My Page',
 *   'My page description',
 *   { type: 'article' }
 * );
 */
export const usePageSEO = (
  title: string,
  description: string,
  additionalMeta?: Partial<SEOMeta>
): void => {
  useSEO({
    title,
    description,
    ...additionalMeta,
  });
};

export default SEO;
