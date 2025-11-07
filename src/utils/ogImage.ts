/**
 * OG Image Utility
 * Handles OG image generation and URL construction
 */

import { seoConfig } from '../seo/seo.config';

export interface OGImageMeta {
  coverImage?: string;
  title?: string;
  type?: 'blog' | 'project' | 'case-study' | 'default';
  slug?: string;
}

/**
 * Get absolute OG image URL
 * Prioritizes coverImage, falls back to type-specific or default image
 * Always returns absolute URL
 */
export function getOgImage(meta: OGImageMeta): string {
  // If coverImage exists, use it
  if (meta.coverImage) {
    // Ensure it's absolute
    if (meta.coverImage.startsWith('http')) {
      return meta.coverImage;
    }
    // If relative, prepend siteUrl
    return `${seoConfig.siteUrl}${
      meta.coverImage.startsWith('/') ? meta.coverImage : `/${meta.coverImage}`
    }`;
  }

  // Fallback to type-specific images
  const typeImages: Record<string, string> = {
    blog: '/og/blog-default.png',
    project: '/og/project-default.png',
    'case-study': '/og/case-study-default.png',
    default: '/og/default.png',
  };

  const imagePath = typeImages[meta.type || 'default'] || typeImages.default;
  return `${seoConfig.siteUrl}${imagePath}`;
}

/**
 * Get OG image dimensions
 * Standard OG image size: 1200x630px
 */
export function getOgImageDimensions() {
  return {
    width: 1200,
    height: 630,
  };
}

/**
 * Build OG meta object for SEO component
 */
export function buildOGMeta(meta: OGImageMeta) {
  const ogImage = getOgImage(meta);
  const { width, height } = getOgImageDimensions();

  return {
    'og:image': ogImage,
    'og:image:width': String(width),
    'og:image:height': String(height),
    'og:image:type': 'image/png',
    'twitter:image': ogImage,
    'twitter:image:alt': meta.title || seoConfig.defaultTitle,
  };
}
