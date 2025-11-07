import { useEffect, useState } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { motion } from 'framer-motion';

/**
 * Scroll Progress Bar Component
 * Shows progress through page as user scrolls
 * Respects reduced motion preference
 * No layout shift - fixed positioning
 */
export function ScrollProgressBar({
  showOnSmall = false,
  color = 'rgb(168, 85, 247)', // primary-500
  height = 3,
}) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      
      setProgress(scrolled);
      
      // Only show on larger screens or if explicitly enabled
      const shouldShow = showOnSmall || window.innerWidth >= 768;
      setIsVisible(scrolled > 0 && shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showOnSmall]);

  // If reduced motion is preferred, use instant updates instead of animation
  if (prefersReducedMotion) {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: `${height}px`,
          width: `${progress}%`,
          backgroundColor: color,
          zIndex: 9999,
          transition: 'width 0.1s linear',
          pointerEvents: 'none',
          willChange: 'width',
        }}
        aria-hidden="true"
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: `${height}px`,
        width: `${progress}%`,
        backgroundColor: color,
        zIndex: 9999,
        pointerEvents: 'none',
        willChange: 'width',
      }}
      aria-hidden="true"
    />
  );
}
