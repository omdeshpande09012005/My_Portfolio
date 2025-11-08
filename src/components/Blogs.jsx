import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Loader } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import usePosts from '../hooks/usePosts';

const Blogs = () => {
  const navigate = useNavigate();
  const { posts, loading } = usePosts();
  const [blogsToDisplay, setBlogsToDisplay] = useState([]);

  useEffect(() => {
    // Display first 3 posts or all available posts
    setBlogsToDisplay(posts.slice(0, 3));
  }, [posts]);

  const handleReadArticle = (slug) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <section id="blog" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Latest <span className="gradient-text">Articles</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Insights from my projects and technical explorations.
          </p>
        </motion.div>

        {/* Blog Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full"
            />
          </div>
        ) : blogsToDisplay.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-zinc-400">No blog posts found.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {blogsToDisplay.map((blog, index) => (
              <motion.div
                key={blog.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="glass rounded-lg overflow-hidden hover:border-primary-500/50 transition-all duration-300 h-full flex flex-col">
                  {/* Cover Image */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-primary-500/20 to-secondary-500/20 h-40 flex items-center justify-center">
                    {blog.coverImage ? (
                      <img
                        src={blog.coverImage}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="text-zinc-500">
                        <svg
                          className="w-12 h-12 opacity-50 mx-auto"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-4 flex flex-col">
                    <h3 className="text-base font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors line-clamp-2">
                      {blog.title}
                    </h3>

                    <p className="text-zinc-400 text-xs mb-3 flex-1 line-clamp-2">
                      {blog.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-xs text-zinc-500 mb-3 pt-3 border-t border-zinc-700">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(blog.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{blog.readingTime || 5} min</span>
                        </div>
                      </div>
                    </div>

                    {/* Read More Button */}
                    <motion.button
                      whileHover={{ gap: '8px' }}
                      onClick={() => handleReadArticle(blog.slug)}
                      className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors font-medium text-xs"
                    >
                      Read Article
                      <ArrowRight className="w-3 h-3" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogs;

