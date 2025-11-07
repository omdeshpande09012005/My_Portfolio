/**
 * TagPill Component
 * Reusable tag/badge component for blog posts
 */

import { X } from 'lucide-react';

export const TagPill = ({
  tag,
  onRemove,
  onClick,
  isActive = false,
  variant = 'default',
  size = 'md',
}) => {
  const baseStyles =
    'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium transition-colors duration-200';

  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  const variantStyles = {
    default: isActive
      ? 'bg-primary-500 text-white hover:bg-primary-600'
      : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600',
    outline: isActive
      ? 'border border-primary-500 bg-primary-50 text-primary-700 dark:bg-primary-950 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-900'
      : 'border border-gray-300 bg-white text-gray-700 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500',
    filled: isActive
      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700'
      : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700',
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]}`;

  return (
    <button
      onClick={onClick}
      className={combinedStyles}
      title={`Filter by tag: ${tag}`}
      aria-pressed={isActive}
    >
      <span>{tag}</span>
      {onRemove && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="hover:text-opacity-75 transition-opacity"
          aria-label={`Remove ${tag} filter`}
        >
          <X size={14} />
        </button>
      )}
    </button>
  );
};

export default TagPill;
