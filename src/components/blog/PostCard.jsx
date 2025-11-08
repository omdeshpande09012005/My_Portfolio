/**
 * PostCard Component
 * Card component for displaying blog post previews
 */

import { Link } from 'lucide-react';
import { Calendar, Clock, Tag } from 'lucide-react';
import TagPill from './TagPill';
import { formatDate } from '../../utils/blogUtils.jsx';

export const PostCard = ({ post, onTagClick }) => {
  const { slug, title, excerpt, date, readingTime, tags, coverImage } = post;

  return (
    <article
      className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-300 hover:shadow-lg dark:hover:shadow-2xl hover:shadow-primary-500/20 hover:-translate-y-1"
    >
      {/* Cover Image */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary-500/20 to-accent-500/20" style={{ height: '400px' }}>
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4 h-full">
        {/* Title */}
        <a
          href={`/blog/${slug}`}
          className="group/title hover:text-primary-500 transition-colors duration-200"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2 group-hover/title:text-primary-500">
            {title}
          </h3>
        </a>

        {/* Excerpt */}
        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 flex-grow">
          {excerpt}
        </p>

        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <Calendar size={16} className="flex-shrink-0" />
            <time dateTime={date}>
              {formatDate(date)}
            </time>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} className="flex-shrink-0" />
            <span>{readingTime} min read</span>
          </div>
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-200 dark:border-gray-700">
            {tags.map(tag => (
              <TagPill
                key={tag}
                tag={tag}
                onClick={() => onTagClick && onTagClick(tag)}
                variant="outline"
                size="sm"
              />
            ))}
          </div>
        )}

        {/* Read More Link */}
        <a
          href={`/blog/${slug}`}
          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-sm font-semibold transition-colors duration-200 flex items-center gap-2 mt-2 group/link"
        >
          Read Article
          <Link size={16} className="transition-transform group-hover/link:translate-x-1" />
        </a>
      </div>
    </article>
  );
};

export default PostCard;
