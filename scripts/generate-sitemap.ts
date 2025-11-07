import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SITE_URL = 'https://omdeshpande.dev';
const PUBLIC_DIR = path.join(__dirname, '../public');

interface SitemapEntry {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

/**
 * Get all blog post slugs by reading the blog directory
 */
function getBlogSlugs(): string[] {
  try {
    const blogDir = path.join(__dirname, '../src/components/blog/posts');
    if (!fs.existsSync(blogDir)) {
      console.log('Blog directory not found, skipping blog posts');
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
function getCaseStudySlugs(): string[] {
  try {
    const caseStudyDir = path.join(__dirname, '../src/components/case-studies/posts');
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

  const entries: SitemapEntry[] = [
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
  console.log(`✅ Sitemap generated: ${sitemapPath}`);

  return sitemapPath;
}

/**
 * Generate robots.txt
 */
function generateRobotsTxt() {
  const robotsTxt = `# Robots.txt
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /.next/
Disallow: /node_modules/

Sitemap: ${SITE_URL}/sitemap.xml

# Specific bot rules
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /`;

  const robotsPath = path.join(PUBLIC_DIR, 'robots.txt');
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  fs.writeFileSync(robotsPath, robotsTxt);
  console.log(`✅ Robots.txt generated: ${robotsPath}`);

  return robotsPath;
}

/**
 * Main generation function
 */
export function generateSitemapAndRobots() {
  try {
    console.log('🔄 Generating sitemap and robots.txt...');
    generateSitemap();
    generateRobotsTxt();
    console.log('✅ Sitemap and robots.txt generated successfully');
  } catch (error) {
    console.error('❌ Error generating sitemap/robots.txt:', error);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateSitemapAndRobots();
}

export { generateSitemap, generateRobotsTxt };
