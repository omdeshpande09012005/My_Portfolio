import { useEffect, useCallback } from 'react';

interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
}

interface PlausibleConfig {
  domain: string;
}

declare global {
  interface Window {
    plausible?: (eventName: string, options?: any) => void;
    umami?: {
      track: (eventName: string, eventData?: Record<string, any>) => void;
    };
  }
}

/**
 * Analytics hook for tracking pageviews and custom events
 * Supports both Plausible and Umami analytics
 * Never blocks rendering - loads async
 */
export function useAnalytics() {
  // Initialize analytics on mount
  useEffect(() => {
    // Load Plausible (if configured)
    const loadPlausible = () => {
      const script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.setAttribute('data-domain', 'omdeshpande.dev');
      script.src = 'https://plausible.io/js/script.js';
      document.head.appendChild(script);
    };

    // Load Umami (alternative)
    const loadUmami = () => {
      const script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.src = 'https://cloud.umami.is/script.js';
      script.setAttribute('data-website-id', 'YOUR_UMAMI_ID'); // Replace with actual ID
      document.head.appendChild(script);
    };

    // Load Plausible by default
    loadPlausible();
  }, []);

  /**
   * Track custom event
   */
  const trackEvent = useCallback((event: AnalyticsEvent) => {
    // Plausible
    if (window.plausible) {
      window.plausible(event.name, {
        props: event.properties || {},
      });
    }

    // Umami
    if (window.umami) {
      window.umami.track(event.name, event.properties || {});
    }

    // Fallback: console log in development
    if (!window.plausible && !window.umami && process.env.NODE_ENV === 'development') {
      console.log('📊 Analytics Event:', event);
    }
  }, []);

  /**
   * Track outbound link click
   */
  const trackOutboundLink = useCallback((url: string, label: string) => {
    trackEvent({
      name: 'outbound_click',
      properties: {
        url,
        label,
      },
    });
  }, [trackEvent]);

  /**
   * Track internal link click
   */
  const trackInternalLink = useCallback((label: string) => {
    trackEvent({
      name: 'internal_click',
      properties: {
        label,
      },
    });
  }, [trackEvent]);

  /**
   * Track form submission
   */
  const trackFormSubmit = useCallback((formName: string) => {
    trackEvent({
      name: 'form_submit',
      properties: {
        form: formName,
      },
    });
  }, [trackEvent]);

  /**
   * Track scroll depth
   */
  const trackScrollDepth = useCallback((depth: number) => {
    trackEvent({
      name: 'scroll_depth',
      properties: {
        depth,
      },
    });
  }, [trackEvent]);

  return {
    trackEvent,
    trackOutboundLink,
    trackInternalLink,
    trackFormSubmit,
    trackScrollDepth,
  };
}
