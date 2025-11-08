/**
 * Blog Utilities
 */

import { blogPostsData } from '../data/blogPosts';

// Import MDX components dynamically
const mdxModules = import.meta.glob('/src/content/posts/*.mdx', { eager: true });

export const getAllPosts = async () => {
  try {
    const posts = blogPostsData.map(postData => {
      const mdxPath = `/src/content/posts/${postData.slug}.mdx`;
      const mdxModule = mdxModules[mdxPath];
      
      return {
        ...postData,
        updated: postData.updated || postData.date,
        Component: mdxModule?.default || null,
        content: mdxModule?.default || null
      };
    });
    
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
};

export const getPostBySlug = async (slug) => {
  try {
    const posts = await getAllPosts();
    return posts.find(post => post.slug === slug) || null;
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    return null;
  }
};

export const getPostsByTag = async (tag) => {
  try {
    const posts = await getAllPosts();
    return posts.filter(post => post.tags.includes(tag));
  } catch (error) {
    console.error(`Error filtering posts by tag ${tag}:`, error);
    return [];
  }
};

export const getAllTags = async () => {
  try {
    const posts = await getAllPosts();
    const tagsSet = new Set();
    posts.forEach(post => post.tags.forEach(tag => tagsSet.add(tag)));
    return Array.from(tagsSet).sort();
  } catch (error) {
    console.error('Error getting all tags:', error);
    return [];
  }
};

export const getRelatedPosts = async (currentSlug, limit = 3) => {
  try {
    const posts = await getAllPosts();
    const currentPost = posts.find(p => p.slug === currentSlug);
    if (!currentPost) return [];
    
    const related = posts
      .filter(post => post.slug !== currentSlug)
      .map(post => ({
        ...post,
        relevance: post.tags.filter(tag => currentPost.tags.includes(tag)).length,
      }))
      .filter(post => post.relevance > 0)
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, limit)
      .map(({ relevance, ...post }) => post);
    
    return related;
  } catch (error) {
    console.error(`Error getting related posts for ${currentSlug}:`, error);
    return [];
  }
};

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

export const extractHeadings = (content) => {
  if (!content) return [];
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings = [];
  let match;
  
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim().split('{#')[0].trim();
    const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
    headings.push({ level, text, id });
  }
  
  return headings;
};

export const formatDate = (dateString) => {
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(date);
  } catch (error) {
    return dateString;
  }
};

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
