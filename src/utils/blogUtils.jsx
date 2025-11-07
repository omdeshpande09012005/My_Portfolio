/**
 * Blog Utilities - MDX Post Loading and Management
 * Handles loading, parsing, and filtering MDX posts from the content directory
 */

import React from 'react';/**
 * Parse YAML frontmatter from MDX content
 * Browser-compatible alternative to gray-matter
 * 
 * @param {string} content - Raw MDX content with frontmatter
 * @returns {Object} { data: Object, content: string }
 */
const parseFrontmatter = (content) => {
  const lines = content.split('\n');
  
  if (lines[0] !== '---') {
    return { data: {}, content };
  }
  
  let frontmatterEnd = -1;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i] === '---') {
      frontmatterEnd = i;
      break;
    }
  }
  
  if (frontmatterEnd === -1) {
    return { data: {}, content };
  }
  
  const frontmatterLines = lines.slice(1, frontmatterEnd);
  const bodyContent = lines.slice(frontmatterEnd + 1).join('\n');
  
  // Parse YAML frontmatter
  const data = {};
  for (const line of frontmatterLines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;
    
    const key = line.substring(0, colonIndex).trim();
    let value = line.substring(colonIndex + 1).trim();
    
    // Skip empty values
    if (!value) {
      data[key] = '';
      continue;
    }
    
    // Remove quotes if present (handle both single and double quotes)
    if ((value.startsWith('"') && value.endsWith('"')) || 
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    
    // Parse arrays (e.g., ["tag1", "tag2"] or [tag1, tag2])
    if (value.startsWith('[') && value.endsWith(']')) {
      try {
        // Replace smart quotes with regular quotes for JSON parsing
        let jsonStr = value.replace(/"|"/g, '"').replace(/'/g, '"');
        value = JSON.parse(jsonStr);
      } catch (e) {
        // If JSON parsing fails, try manual parsing
        const arrayContent = value.slice(1, -1); // Remove [ and ]
        value = arrayContent.split(',').map(item => item.trim().replace(/^["']|["']$/g, ''));
      }
    } 
    // Parse dates (handle YYYY-MM-DD format)
    else if (/^\d{4}-\d{2}-\d{2}/.test(value)) {
      // Keep as ISO string for dates
      const dateMatch = value.match(/(\d{4}-\d{2}-\d{2})/);
      if (dateMatch) {
        value = new Date(dateMatch[0]).toISOString();
      }
    }
    // Parse booleans
    else if (value === 'true') {
      value = true;
    }
    else if (value === 'false') {
      value = false;
    }
    // Parse numbers (but not if it looks like a date)
    else if (!isNaN(value) && value !== '' && !/\d{4}-\d{2}-\d{2}/.test(value)) {
      value = Number(value);
    }
    
    data[key] = value;
  }
  
  return { data, content: bodyContent };
};

/**
 * Represents a blog post with metadata and content
 * @typedef {Object} BlogPost
 * @property {string} slug - URL-friendly post identifier
 * @property {string} title - Post title
 * @property {string} date - Publication date (ISO format)
 * @property {string[]} tags - Array of post tags
 * @property {string} excerpt - Short post description
 * @property {string} coverImage - Path to cover image
 * @property {number} readingTime - Estimated reading time in minutes
 * @property {string} [content] - MDX content body
 * @property {string} [author] - Post author name
 */

/**
 * Load all MDX posts from the content/posts directory
 * Uses Vite's import.meta.glob to dynamically load files as raw text
 * 
 * @async
 * @returns {Promise<BlogPost[]>} Array of all blog posts sorted by date (newest first)
 * @throws {Error} If posts cannot be loaded or parsed
 */
export const getAllPosts = async () => {
  try {
    // Import raw MDX files for parsing metadata
    const postModulesRaw = import.meta.glob('/src/content/posts/*.mdx', { query: '?raw', import: 'default' });
    
    const posts = [];
    
    for (const [path, getContent] of Object.entries(postModulesRaw)) {
      // Extract slug from file path (e.g., '/src/content/posts/my-post.mdx' -> 'my-post')
      const slug = path.split('/').pop().replace('.mdx', '');
      
      // Get the raw MDX content
      const rawContent = await getContent();
      
      // Parse frontmatter from MDX content using browser-compatible parser
      const { data, content: mdxContent } = parseFrontmatter(rawContent);
      
      // Validate title - ensure it's not empty
      const title = (data.title && data.title.trim()) ? data.title.trim() : 'Untitled';
      
      // Calculate reading time (average 200 words per minute)
      const wordCount = mdxContent.split(/\s+/).length;
      const readingTime = Math.ceil(wordCount / 200);
      
      posts.push({
        slug,
        title: title,
        date: data.date || new Date().toISOString(),
        tags: Array.isArray(data.tags) ? data.tags : [],
        excerpt: (data.summary || data.excerpt || '').trim(),
        summary: (data.summary || data.excerpt || '').trim(),
        coverImage: data.coverImage || '/images/default-cover.jpg',
        readingTime: data.readingTime || readingTime,
        author: data.author || 'Om Deshpande',
        type: data.type || 'blog',
        content: mdxContent,
      });
    }
    
    // Sort by date (newest first)
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
};

/**
 * Get a single post by slug
 * 
 * @async
 * @param {string} slug - The post slug (filename without .mdx)
 * @returns {Promise<BlogPost|null>} The blog post or null if not found
 */
export const getPostBySlug = async (slug) => {
  try {
    const posts = await getAllPosts();
    return posts.find(post => post.slug === slug) || null;
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    return null;
  }
};

/**
 * Get posts filtered by tag
 * 
 * @async
 * @param {string} tag - The tag to filter by
 * @returns {Promise<BlogPost[]>} Array of posts with the specified tag
 */
export const getPostsByTag = async (tag) => {
  try {
    const posts = await getAllPosts();
    return posts.filter(post => post.tags.includes(tag));
  } catch (error) {
    console.error(`Error filtering posts by tag ${tag}:`, error);
    return [];
  }
};

/**
 * Get all unique tags from all posts
 * 
 * @async
 * @returns {Promise<string[]>} Array of unique tags, sorted alphabetically
 */
export const getAllTags = async () => {
  try {
    const posts = await getAllPosts();
    const tags = new Set();
    posts.forEach(post => {
      post.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  } catch (error) {
    console.error('Error getting all tags:', error);
    return [];
  }
};

/**
 * Get related posts based on tags
 * Finds posts that share tags with the given post
 * 
 * @async
 * @param {string} currentSlug - The current post's slug
 * @param {number} limit - Maximum number of related posts to return
 * @returns {Promise<BlogPost[]>} Array of related posts
 */
export const getRelatedPosts = async (currentSlug, limit = 3) => {
  try {
    const posts = await getAllPosts();
    const currentPost = posts.find(p => p.slug === currentSlug);
    
    if (!currentPost) return [];
    
    const related = posts
      .filter(post => post.slug !== currentSlug)
      .map(post => ({
        ...post,
        // Calculate relevance score based on shared tags
        relevance: post.tags.filter(tag => currentPost.tags.includes(tag)).length,
      }))
      .filter(post => post.relevance > 0)
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, limit)
      .map(({ relevance, ...post }) => post); // Remove relevance score from output
    
    return related;
  } catch (error) {
    console.error(`Error getting related posts for ${currentSlug}:`, error);
    return [];
  }
};

/**
 * Search posts by title or excerpt
 * 
 * @async
 * @param {string} query - Search query
 * @returns {Promise<BlogPost[]>} Array of matching posts
 */
export const searchPosts = async (query) => {
  try {
    const posts = await getAllPosts();
    const lowerQuery = query.toLowerCase();
    
    return posts.filter(post =>
      post.title.toLowerCase().includes(lowerQuery) ||
      post.excerpt.toLowerCase().includes(lowerQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
  } catch (error) {
    console.error('Error searching posts:', error);
    return [];
  }
};

/**
 * Extract headings (H2 and H3) from MDX content for Table of Contents
 * 
 * @param {string} content - MDX content to parse
 * @returns {Array<{level: number, text: string, id: string}>} Array of headings
 */
export const extractHeadings = (content) => {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings = [];
  let match;
  
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length; // Number of # symbols
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');
    
    headings.push({ level, text, id });
  }
  
  return headings;
};

/**
 * Format date string to readable format
 * 
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date (e.g., "Nov 7, 2025")
 */
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
};

/**
 * Get pagination data for blog list
 * 
 * @async
 * @param {number} page - Current page number (1-indexed)
 * @param {number} postsPerPage - Number of posts per page
 * @returns {Promise<{posts: BlogPost[], totalPages: number, currentPage: number}>}
 */
export const getPaginatedPosts = async (page = 1, postsPerPage = 5) => {
  try {
    const allPosts = await getAllPosts();
    const totalPages = Math.ceil(allPosts.length / postsPerPage);
    const startIndex = (page - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    
    return {
      posts: allPosts.slice(startIndex, endIndex),
      totalPages,
      currentPage: page,
    };
  } catch (error) {
    console.error('Error getting paginated posts:', error);
    return { posts: [], totalPages: 0, currentPage: 1 };
  }
};
