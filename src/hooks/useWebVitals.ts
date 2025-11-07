import { useEffect } from 'react';

interface WebVitalsMetrics {
  LCP?: number; // Largest Contentful Paint
  CLS?: number; // Cumulative Layout Shift
  FID?: number; // First Input Delay
  INP?: number; // Interaction to Next Paint
  FCP?: number; // First Contentful Paint
  TTFB?: number; // Time to First Byte
}

/**
 * Report Web Vitals metrics to console in development mode
 * Disabled in production for performance
 */
export function useWebVitals() {
  useEffect(() => {
    // Only run in development
    const isDev = !window.location.hostname.includes('omdeshpande.dev');
    if (!isDev) return;

    // Report LCP (Largest Contentful Paint)
    const lcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log('📊 LCP (Largest Contentful Paint):', {
          time: entry.startTime.toFixed(2) + 'ms',
          element: (entry as any).element?.tagName || 'unknown',
        });
      }
    });

    try {
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      // LCP not supported in this browser
    }

    // Report CLS (Cumulative Layout Shift)
    const clsObserver = new PerformanceObserver((list) => {
      let cls = 0;
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          cls += (entry as any).value;
        }
      }
      console.log('📊 CLS (Cumulative Layout Shift):', {
        score: cls.toFixed(4),
        status: cls <= 0.1 ? '✅ Good' : cls <= 0.25 ? '⚠️ Needs Improvement' : '❌ Poor',
      });
    });

    try {
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      // CLS not supported
    }

    // Report FID (First Input Delay)
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const fidEntry = entry as PerformanceEventTiming;
        const delay = (fidEntry.processingStart - fidEntry.startTime);
        console.log('📊 FID (First Input Delay):', {
          time: delay.toFixed(2) + 'ms',
          status: delay <= 100 ? '✅ Good' : '❌ Poor',
        });
      }
    });

    try {
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      // FID not supported
    }

    // Report INP (Interaction to Next Paint)
    const inpObserver = new PerformanceObserver((list) => {
      let worst = 0;
      for (const entry of list.getEntries()) {
        worst = Math.max(worst, (entry as any).duration);
      }
      console.log('📊 INP (Interaction to Next Paint):', {
        time: worst.toFixed(2) + 'ms',
        status: worst <= 200 ? '✅ Good' : worst <= 500 ? '⚠️ Needs Improvement' : '❌ Poor',
      });
    });

    try {
      inpObserver.observe({ entryTypes: ['event'] });
    } catch (e) {
      // INP not supported
    }

    // Report FCP (First Contentful Paint)
    const fcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log('📊 FCP (First Contentful Paint):', {
          time: entry.startTime.toFixed(2) + 'ms',
        });
      }
    });

    try {
      fcpObserver.observe({ entryTypes: ['paint'] });
    } catch (e) {
      // FCP not supported
    }

    // Report TTFB (Time to First Byte)
    const reportTTFB = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        console.log('📊 TTFB (Time to First Byte):', {
          time: navigation.responseStart.toFixed(2) + 'ms',
        });
      }
    };

    if (document.readyState === 'complete') {
      reportTTFB();
    } else {
      window.addEventListener('load', reportTTFB);
      return () => window.removeEventListener('load', reportTTFB);
    }

    return () => {
      lcpObserver.disconnect();
      clsObserver.disconnect();
      fidObserver.disconnect();
      inpObserver.disconnect();
      fcpObserver.disconnect();
    };
  }, []);
}
