import { useState, useEffect, useCallback } from 'react';

export type Theme = 'light' | 'dark' | 'system';

interface UseThemeReturn {
  theme: Theme;
  effectiveTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  isDark: boolean;
}

const THEME_STORAGE_KEY = 'portfolio-theme';
const THEME_CLASS = 'dark';

/**
 * Hook for managing theme (light/dark/system)
 * Respects prefers-color-scheme media query
 * Persists preference to localStorage
 */
export function useTheme(): UseThemeReturn {
  const [theme, setThemeState] = useState<Theme>(() => {
    // Get initial theme from localStorage
    if (typeof window === 'undefined') return 'system';
    
    const stored = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
    return stored || 'system';
  });

  const [effectiveTheme, setEffectiveTheme] = useState<'light' | 'dark'>('light');

  // Update effective theme based on theme setting and system preference
  useEffect(() => {
    const updateTheme = () => {
      let newTheme: 'light' | 'dark' = 'light';

      if (theme === 'dark') {
        newTheme = 'dark';
      } else if (theme === 'light') {
        newTheme = 'light';
      } else {
        // System preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        newTheme = prefersDark ? 'dark' : 'light';
      }

      setEffectiveTheme(newTheme);

      // Update DOM
      const html = document.documentElement;
      if (newTheme === 'dark') {
        html.classList.add(THEME_CLASS);
      } else {
        html.classList.remove(THEME_CLASS);
      }
    };

    updateTheme();

    // Listen to system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => updateTheme();

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  // Set theme and persist to localStorage
  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    if (newTheme === 'system') {
      localStorage.removeItem(THEME_STORAGE_KEY);
    } else {
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    }
  }, []);

  // Toggle between light and dark
  const toggleTheme = useCallback(() => {
    setTheme(effectiveTheme === 'dark' ? 'light' : 'dark');
  }, [effectiveTheme, setTheme]);

  return {
    theme,
    effectiveTheme,
    setTheme,
    toggleTheme,
    isDark: effectiveTheme === 'dark',
  };
}
