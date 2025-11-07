/**
 * Post Detail Component
 * Renders a single blog post with MDX content, ToC, and navigation
 */

import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Share2, Copy, Check } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import usePosts from '../hooks/usePosts';
import TableOfContents from '../components/blog/TableOfContents';
import TagPill from '../components/blog/TagPill';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { formatDate, extractHeadings, getRelatedPosts } from '../utils/blogUtils.jsx';
import { CodeBlock, Callout, MDXImage } from '../components/mdx';
import { useSEO, buildPageUrl, articleLD, injectJSONLD, removeJSONLD } from '../seo';

export const Post = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { posts, getPost, getRelated, loading: postsLoading } = usePosts();
  
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  // Get post navigation
  const currentPostIndex = posts.findIndex(p => p.slug === slug);
  const previousPost = currentPostIndex > 0 ? posts[currentPostIndex - 1] : null;
  const nextPost = currentPostIndex < posts.length - 1 ? posts[currentPostIndex + 1] : null;

  // Extract headings from post content
  const headings = useMemo(() => {
    return post ? extractHeadings(post.content) : [];
  }, [post]);

  // Set SEO at top level (hooks must be called at component body level)
  useSEO(
    post ? {
      title: post.title,
      description: post.excerpt,
      image: post.coverImage || '',
      type: 'article',
      url: buildPageUrl(`/blog/${post.slug}`),
      publishedDate: new Date(post.date).toISOString(),
      canonical: buildPageUrl(`/blog/${post.slug}`),
    } : undefined
  );

  // Inject Article schema when post is loaded
  useEffect(() => {
    if (post) {
      const articleData = articleLD({
        headline: post.title,
        description: post.excerpt,
        datePublished: new Date(post.date).toISOString(),
        dateModified: post.dateModified ? new Date(post.dateModified).toISOString() : new Date(post.date).toISOString(),
        image: post.coverImage || '',
        keywords: post.tags || [],
        slug: post.slug,
      });

      injectJSONLD(articleData, 'article-schema');

      return () => {
        removeJSONLD('article-schema');
      };
    }
  }, [post]);

  // Load post and related posts - wait for posts to be loaded first
  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      
      // If posts are still loading, wait a bit and try to find in posts array first
      if (postsLoading || posts.length === 0) {
        // Try direct fetch as fallback
        const loadedPost = await getPost(slug);
        if (loadedPost) {
          setPost(loadedPost);
          const related = await getRelated(slug, 3);
          setRelatedPosts(related);
        }
      } else {
        // Posts are loaded, find directly
        const foundPost = posts.find(p => p.slug === slug);
        if (foundPost) {
          setPost(foundPost);
          const related = await getRelated(slug, 3);
          setRelatedPosts(related);
        }
      }
      
      setLoading(false);
    };

    if (slug) {
      loadPost();
    }
  }, [slug, getPost, getRelated, posts, postsLoading]);

  // Replace heading IDs in content
  const processedContent = useMemo(() => {
    if (!post?.content) return '';
    let content = post.content;
    headings.forEach(heading => {
      const regex = new RegExp(`(^|\\n)(#{${heading.level}})\\s+${heading.text}($|\\n)`, 'm');
      content = content.replace(
        regex,
        `$1$2 ${heading.text} {#${heading.id}}$3`
      );
    });
    return content;
  }, [post, headings]);

  const handleShare = async () => {
    const url = `${window.location.origin}/blog/${slug}`;
    if (navigator.share) {
      navigator.share({
        title: post?.title,
        text: post?.excerpt,
        url,
      });
    } else {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 flex items-center justify-center">
        <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>
          <p className="text-gray-600 dark:text-gray-400">Loading post...</p>
        </motion.div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Post not found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Sorry, the blog post you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-semibold transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate('/#blog')}
        className="mb-8 inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-semibold transition-colors"
      >
        <ArrowLeft size={18} />
        Back to Home
      </motion.button>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {post.title}
          </h1>

          {/* Metadata */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600 dark:text-gray-400 mb-6">
            <div className="flex items-center gap-2">
              <img
                src="https://avatars.githubusercontent.com/u/YOUR_ID"
                alt={post.author}
                className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700"
              />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{post.author}</p>
                <p className="text-sm">{formatDate(post.date)}</p>
              </div>
            </div>
            <span className="text-sm">•</span>
            <span className="text-sm">{post.readingTime} min read</span>
            <button
              onClick={handleShare}
              className="ml-auto inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              title="Share post"
            >
              {copied ? (
                <>
                  <Check size={16} className="text-green-500" />
                  Copied!
                </>
              ) : (
                <>
                  <Share2 size={16} />
                  Share
                </>
              )}
            </button>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <TagPill key={tag} tag={tag} variant="outline" size="md" />
              ))}
            </div>
          )}
        </motion.div>

        {/* Cover Image */}
        {post.coverImage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800"
          >
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-auto max-h-96 object-cover"
            />
          </motion.div>
        )}

        {/* Content Layout with ToC */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 prose dark:prose-invert max-w-none"
          >
            {/* Render markdown content using component */}
            {post.content ? (
              <MarkdownRenderer content={post.content} />
            ) : (
              <p className="text-gray-600 dark:text-gray-400">Unable to render post content</p>
            )}
          </motion.div>

          {/* Table of Contents Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <TableOfContents headings={headings} />
          </motion.div>
        </div>

        {/* Post Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-200 dark:border-gray-800 pt-8"
        >
          {previousPost ? (
            <button
              onClick={() => navigate(`/blog/${previousPost.slug}`)}
              className="group text-left hover:bg-gray-100 dark:hover:bg-gray-800 p-4 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 group-hover:text-primary-500 mb-2">
                <ArrowLeft size={16} />
                Previous Post
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors">
                {previousPost.title}
              </h4>
            </button>
          ) : (
            <div />
          )}

          {nextPost ? (
            <button
              onClick={() => navigate(`/blog/${nextPost.slug}`)}
              className="group text-right hover:bg-gray-100 dark:hover:bg-gray-800 p-4 rounded-lg transition-colors"
            >
              <div className="flex items-center justify-end gap-2 text-sm text-gray-600 dark:text-gray-400 group-hover:text-primary-500 mb-2">
                Next Post
                <ArrowRight size={16} />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors">
                {nextPost.title}
              </h4>
            </button>
          ) : (
            <div />
          )}
        </motion.div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 border-t border-gray-200 dark:border-gray-800 pt-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost, idx) => (
                <motion.button
                  key={relatedPost.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => navigate(`/blog/${relatedPost.slug}`)}
                  className="group text-left hover:bg-gray-100 dark:hover:bg-gray-800 p-4 rounded-lg transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </article>
  );
};

export default Post;
