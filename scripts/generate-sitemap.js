import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_URL = 'https://od.dev';
const PUBLIC_DIR = path.join(__dirname, '../public');

/**
 * Get all blog post slugs
 */
function getBlogSlugs() {
  try {
    const blogDir = path.join(__dirname, '../src/content/posts');
    if (!fs.existsSync(blogDir)) {
      console.log('Blog directory not found');
      return [];
    }

    const files = fs.readdirSync(blogDir);
    return files
      .filter(f => f.endsWith('.mdx') || f.endsWith('.md'))
      .map(f => f.replace(/\.(mdx|md)$/, ''));
  } catch (error) {
    console.warn('Error reading blog posts:', error);
    return [];
  }
}

/**
 * Get all case study slugs
 */
function getCaseStudySlugs() {
  try {
    const caseStudyDir = path.join(__dirname, '../src/content/posts');
    if (!fs.existsSync(caseStudyDir)) {
      return [];
    }

    const files = fs.readdirSync(caseStudyDir);
    return files
      .filter(f => f.endsWith('.mdx') || f.endsWith('.md'))
      .map(f => f.replace(/\.(mdx|md)$/, ''));
  } catch (error) {
    console.warn('Error reading case studies:', error);
    return [];
  }
}

/**
 * Generate sitemap
 */
function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];

  const entries = [
    // Static pages
    {
      loc: `${SITE_URL}/`,
      lastmod: today,
      changefreq: 'weekly',
      priority: 1.0,
    },
    {
      loc: `${SITE_URL}/blog`,
      lastmod: today,
      changefreq: 'weekly',
      priority: 0.9,
    },
    {
      loc: `${SITE_URL}/case-studies`,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.8,
    },
  ];

  // Blog posts
  const blogSlugs = getBlogSlugs();
  blogSlugs.forEach(slug => {
    entries.push({
      loc: `${SITE_URL}/blog/${slug}`,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.7,
    });
  });

  // Case studies
  const caseStudySlugs = getCaseStudySlugs();
  caseStudySlugs.forEach(slug => {
    entries.push({
      loc: `${SITE_URL}/case-studies/${slug}`,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.75,
    });
  });

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    entry => `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  // Write sitemap
  const sitemapPath = path.join(PUBLIC_DIR, 'sitemap.xml');
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  fs.writeFileSync(sitemapPath, xml);
  console.log(`✅ Sitemap generated: ${sitemapPath} (${entries.length} URLs)`);

  return sitemapPath;
}

/**
 * Main generation function
 */
function generateSitemapAndRobots() {
  try {
    console.log('🔄 Generating sitemap...');
    generateSitemap();
    console.log('✅ Sitemap generated successfully');
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

generateSitemapAndRobots();
