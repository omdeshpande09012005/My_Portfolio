/**
 * usePosts Hook
 * React hook for managing blog posts data with caching
 */

import { useState, useEffect, useCallback } from 'react';
import {
  getAllPosts,
  getPostBySlug,
  getPostsByTag,
  getAllTags,
  getRelatedPosts,
  searchPosts as searchPostsUtil,
} from '../utils/blogUtils.jsx';

/**
 * Custom hook for managing blog posts
 * Provides methods to fetch, filter, and search posts with built-in caching
 * 
 * @returns {Object} Blog data and methods
 * @property {BlogPost[]} posts - All blog posts
 * @property {string[]} tags - All unique tags
 * @property {boolean} loading - Loading state
 * @property {Error|null} error - Error state
 * @property {Function} getPost - Get a single post by slug
 * @property {Function} getPostsByTagName - Get posts filtered by tag
 * @property {Function} getRelated - Get related posts for a given post
 * @property {Function} searchPosts - Search posts by query
 */
export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cache, setCache] = useState({});

  // Load all posts and tags on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [allPosts, allTags] = await Promise.all([
          getAllPosts(),
          getAllTags(),
        ]);
        setPosts(allPosts);
        setTags(allTags);
        setCache({ allPosts, allTags });
      } catch (err) {
        console.error('Error loading posts:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const getPost = useCallback(
    async (slug) => {
      try {
        return await getPostBySlug(slug);
      } catch (err) {
        console.error(`Error getting post ${slug}:`, err);
        return null;
      }
    },
    []
  );

  const getPostsByTagName = useCallback(
    async (tag) => {
      try {
        return await getPostsByTag(tag);
      } catch (err) {
        console.error(`Error getting posts for tag ${tag}:`, err);
        return [];
      }
    },
    []
  );

  const getRelated = useCallback(
    async (slug, limit = 3) => {
      try {
        return await getRelatedPosts(slug, limit);
      } catch (err) {
        console.error(`Error getting related posts for ${slug}:`, err);
        return [];
      }
    },
    []
  );

  const searchPosts = useCallback(
    async (query) => {
      try {
        return await searchPostsUtil(query);
      } catch (err) {
        console.error('Error searching posts:', err);
        return [];
      }
    },
    []
  );

  return {
    posts,
    tags,
    loading,
    error,
    getPost,
    getPostsByTagName,
    getRelated,
    searchPosts,
  };
};

export default usePosts;
