/**
 * SEO Hook - useSEO
 * Manages all SEO meta tags and structured data for pages
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { seoConfig, buildPageUrl, personSchema, organizationSchema, websiteSchema, type SEOMeta } from './seo.config';

/**
 * useSEO Hook
 * Sets all necessary SEO meta tags for optimal search engine visibility
 * 
 * @param {SEOMeta} meta - Optional meta configuration to override defaults
 * @returns {void}
 * 
 * @example
 * useSEO({
 *   title: 'My Custom Title',
 *   description: 'My custom description',
 *   image: 'https://example.com/og-image.jpg',
 * });
 */
export const useSEO = (meta?: SEOMeta): void => {
  const location = useLocation();

  useEffect(() => {
    // Merge provided meta with defaults
    const finalMeta: Required<SEOMeta> = {
      title: meta?.title || seoConfig.defaultTitle,
      description: meta?.description || seoConfig.defaultDescription,
      keywords: meta?.keywords || seoConfig.defaultKeywords,
      image: meta?.image || seoConfig.defaultOGImage,
      type: meta?.type || 'website',
      url: meta?.url || buildPageUrl(location.pathname),
      author: meta?.author || seoConfig.authorName,
      publishedDate: meta?.publishedDate || '',
      modifiedDate: meta?.modifiedDate || '',
      canonical: meta?.canonical || buildPageUrl(location.pathname),
    };

    // Set document title
    document.title = finalMeta.title;

    // Helper function to set or update meta tag
    const setMetaTag = (
      nameAttr: string,
      content: string,
      property = false
    ): void => {
      let element = document.querySelector(
        property ? `meta[property="${nameAttr}"]` : `meta[name="${nameAttr}"]`
      ) as HTMLMetaElement | null;

      if (!element) {
        element = document.createElement('meta');
        property
          ? element.setAttribute('property', nameAttr)
          : element.setAttribute('name', nameAttr);
        document.head.appendChild(element);
      }

      element.content = content;
    };

    // Set basic meta tags
    setMetaTag('description', finalMeta.description);
    setMetaTag('keywords', finalMeta.keywords);
    setMetaTag('author', finalMeta.author);
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    setMetaTag('theme-color', '#f59e0b');

    // Set Open Graph tags
    setMetaTag('og:title', finalMeta.title, true);
    setMetaTag('og:description', finalMeta.description, true);
    setMetaTag('og:type', finalMeta.type, true);
    setMetaTag('og:url', finalMeta.url, true);
    setMetaTag('og:image', finalMeta.image, true);
    setMetaTag('og:image:alt', finalMeta.title, true);
    setMetaTag('og:site_name', seoConfig.siteName, true);

    // Set Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', finalMeta.title);
    setMetaTag('twitter:description', finalMeta.description);
    setMetaTag('twitter:image', finalMeta.image);
    setMetaTag('twitter:creator', seoConfig.twitterHandle);
    setMetaTag('twitter:site', seoConfig.twitterHandle);

    // Set canonical link
    let canonicalLink = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = finalMeta.canonical;

    // Set published/modified dates for articles
    if (finalMeta.type === 'article' || finalMeta.type === 'blog') {
      if (finalMeta.publishedDate) {
        setMetaTag('article:published_time', finalMeta.publishedDate, true);
      }
      if (finalMeta.modifiedDate) {
        setMetaTag('article:modified_time', finalMeta.modifiedDate, true);
      }
      setMetaTag('article:author', finalMeta.author, true);
    }

    // Set structured data (JSON-LD)
    let scriptTag = document.querySelector(
      'script[type="application/ld+json"]'
    ) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    // Build structured data based on page type
    let structuredData = {};
    if (finalMeta.type === 'article' || finalMeta.type === 'blog') {
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: finalMeta.title,
        description: finalMeta.description,
        image: finalMeta.image,
        author: {
          '@type': 'Person',
          name: finalMeta.author,
        },
        datePublished: finalMeta.publishedDate,
        dateModified: finalMeta.modifiedDate,
      };
    } else {
      // Use default structured data
      structuredData = personSchema;
    }

    scriptTag.textContent = JSON.stringify(structuredData);

    // Add additional preload links for performance
    const addPreload = (href: string, as: string): void => {
      const existing = document.querySelector(
        `link[rel="preload"][href="${href}"]`
      );
      if (!existing) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = href;
        link.as = as;
        document.head.appendChild(link);
      }
    };

    // Return cleanup function
    return () => {
      // Cleanup is optional - meta tags persist across navigations
    };
  }, [location.pathname, meta]);
};

/**
 * Hook to add Schema.org structured data (JSON-LD)
 * 
 * @param {Record<string, any>} data - Structured data object
 * @returns {void}
 */
export const useStructuredData = (data: Record<string, any>): void => {
  useEffect(() => {
    let scriptTag = document.querySelector(
      'script[type="application/ld+json"]'
    ) as HTMLScriptElement | null;

    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const structuredData = {
      '@context': 'https://schema.org',
      ...data,
    };

    scriptTag.textContent = JSON.stringify(structuredData);

    return () => {
      if (scriptTag) {
        scriptTag.remove();
      }
    };
  }, [data]);
};

export default useSEO;
