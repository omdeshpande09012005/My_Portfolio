/**
 * BlogIndex Component
 * Main blog listing page with pagination
 * Pulls from /content/posts/*.mdx with type: "blog"
 */

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import usePosts from '../hooks/usePosts';
import { PostCard } from '../components/blog/PostCard';
import { usePageSEO, seoConfig } from '../seo';
import { injectJSONLD, removeJSONLD } from '../seo/jsonld';

const POSTS_PER_PAGE = 10;

export const BlogIndex = () => {
  usePageSEO(
    'Blog — OD.dev',
    'Read my latest articles about web development, AI, systems design, and technology insights.'
  );

  const { posts: allPosts, loading, error } = usePosts();
  const [currentPage, setCurrentPage] = useState(1);
  const [blogPosts, setBlogPosts] = useState([]);

  // Filter for blog posts only (exclude case studies)
  useEffect(() => {
    console.log('BlogIndex: allPosts loaded:', allPosts);
    const filteredBlogPosts = allPosts.filter(post => post.type !== 'case-study');
    console.log('BlogIndex: filtered blog posts:', filteredBlogPosts);
    setBlogPosts(filteredBlogPosts);
    setCurrentPage(1);
  }, [allPosts]);

  // Inject Blog JSON-LD on mount
  useEffect(() => {
    const blogCollectionLD = {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'OD.dev Blog',
      url: `${seoConfig.siteUrl}/blog`,
      author: {
        '@type': 'Person',
        name: seoConfig.authorName,
        url: seoConfig.siteUrl,
      },
      description: 'Read my latest articles about web development, AI, systems design, and technology insights.',
    };

    injectJSONLD(blogCollectionLD, 'blog-collection-schema');

    return () => removeJSONLD('blog-collection-schema');
  }, []);

  // Calculate pagination
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  const startIdx = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = blogPosts.slice(startIdx, startIdx + POSTS_PER_PAGE);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="text-center">
          <p className="text-red-500 mb-4">Error loading blog posts</p>
          <p className="text-gray-600 dark:text-gray-400">{error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
            Blog
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            Thoughts, insights, and tutorials on web development, AI, systems design, and technology.
          </p>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-center py-12"
          >
            <div className="inline-block">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full"
              />
            </div>
            <p className="text-gray-600 dark:text-gray-400 mt-4">Loading blog posts...</p>
          </motion.div>
        )}

        {/* Posts Grid */}
        {!loading && blogPosts.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-1 gap-8 mb-12"
            >
              {paginatedPosts.map((post, idx) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + idx * 0.05 }}
                >
                  <PostCard post={post} />
                </motion.div>
              ))}
            </motion.div>

            {/* Pagination */}
            {totalPages > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center justify-center gap-4"
              >
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-500/10 border border-primary-500/30 text-primary-600 dark:text-primary-400 hover:bg-primary-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  <ChevronLeft size={20} />
                  <span className="hidden sm:inline">Previous</span>
                </button>

                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => {
                        setCurrentPage(page);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`w-10 h-10 rounded-lg font-semibold transition-all duration-200 ${
                        currentPage === page
                          ? 'bg-primary-500 text-white'
                          : 'bg-gray-200/50 dark:bg-gray-800/50 text-gray-900 dark:text-white hover:bg-gray-300/50 dark:hover:bg-gray-700/50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-500/10 border border-primary-500/30 text-primary-600 dark:text-primary-400 hover:bg-primary-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight size={20} />
                </button>
              </motion.div>
            )}

            {/* Pagination Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center mt-8 text-sm text-gray-600 dark:text-gray-400"
            >
              Showing {startIdx + 1} to {Math.min(startIdx + POSTS_PER_PAGE, blogPosts.length)} of {blogPosts.length} posts
            </motion.div>
          </>
        )}

        {/* Empty State */}
        {!loading && blogPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No blog posts yet. Check back soon!
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BlogIndex;
