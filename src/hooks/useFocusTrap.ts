import { useEffect, useRef } from 'react';

/**
 * Hook to manage focus trap (keeps focus within an element)
 * Useful for modals and dialogs
 */
export function useFocusTrap(isOpen = true) {
  const containerRef = useRef<HTMLDivElement>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen || !containerRef.current) return;

    // Store the element that had focus before the trap was activated
    previousActiveElementRef.current = document.activeElement as HTMLElement;

    // Find all focusable elements
    const focusableElements = containerRef.current.querySelectorAll(
      'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    // Focus first element
    if (firstElement) {
      firstElement.focus();
    }

    // Handle Tab key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    // Handle Escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        // Dispatch custom event that parent can listen to
        containerRef.current?.dispatchEvent(new CustomEvent('escape-pressed'));
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keydown', handleEscape);

      // Restore focus to previous element
      if (previousActiveElementRef.current?.focus) {
        previousActiveElementRef.current.focus();
      }
    };
  }, [isOpen]);

  return containerRef;
}

/**
 * Hook to handle ESC key press
 */
export function useEscapeKey(callback: () => void) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        callback();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [callback]);
}

/**
 * Custom event handler for escape pressed in focus trap
 */
export function useDialogEscapeKey(
  containerRef: React.RefObject<HTMLDivElement>,
  onEscape: () => void
) {
  useEffect(() => {
    const handleEscape = (e: Event) => {
      if (e instanceof CustomEvent && e.type === 'escape-pressed') {
        onEscape();
      }
    };

    const element = containerRef.current;
    if (element) {
      element.addEventListener('escape-pressed', handleEscape);
      return () => element.removeEventListener('escape-pressed', handleEscape);
    }
  }, [onEscape]);
}
