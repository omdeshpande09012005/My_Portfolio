/**
 * Table of Contents Component
 * Displays headings from MDX post with scroll linking
 */

import { useEffect, useState } from 'react';

export const TableOfContents = ({ headings }) => {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    // Set up intersection observer to track active heading
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -66%' }
    );

    // Observe all headings
    headings?.forEach(heading => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (!headings || headings.length === 0) {
    return null;
  }

  // Filter to only H2 and shallow H3
  const filteredHeadings = headings.filter(h => h.level <= 3);

  return (
    <aside className="sticky top-24 hidden lg:block">
      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-800">
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
          On this page
        </h4>
        <nav className="space-y-2">
          {filteredHeadings.map(heading => (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              className={`block text-sm transition-colors duration-200 ${
                heading.level === 3 ? 'ml-4' : ''
              } ${
                activeId === heading.id
                  ? 'text-primary-500 font-semibold'
                  : 'text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400'
              }`}
            >
              {heading.text}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default TableOfContents;
