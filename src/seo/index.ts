/**
 * SEO Module Exports
 * Central export for all SEO utilities, hooks, and components
 */

export { default as SEO, SEOWrapper, usePageSEO } from './SEO';
export { useSEO, useStructuredData } from './useSEO';
export {
  seoConfig,
  buildPageUrl,
  buildStructuredData,
  personSchema,
  organizationSchema,
  websiteSchema,
  type SEOMeta,
} from './seo.config';
export {
  personLD,
  articleLD,
  projectLD,
  softwareApplicationLD,
  organizationLD,
  breadcrumbLD,
  faqPageLD,
  injectJSONLD,
  removeJSONLD,
  type JSONLDData,
} from './jsonld';
