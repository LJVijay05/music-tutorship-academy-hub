import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { PerformanceMonitor } from './utils/performanceMonitor';

// Initialize performance monitoring
const performanceMonitor = PerformanceMonitor.getInstance();

// Critical resource preloading
const preloadCriticalResources = () => {
  const criticalImages = [
    '/lovable-uploads/b3ac942f-a004-4e7e-a005-13fa36ac41a7.png',
    '/music-tutorship-logo.png'
  ];
  
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

// Performance monitoring setup
if (typeof window !== 'undefined' && 'performance' in window) {
  // Mark app initialization
  performance.mark('app-init-start');
  
  // Preload critical resources immediately
  preloadCriticalResources();
  
  // Monitor Core Web Vitals when available (lazy load)
  const loadWebVitals = () => {
    import('web-vitals').then((webVitals) => {
      if (webVitals.onCLS) webVitals.onCLS((metric) => {
        if (metric.value > 0.1) console.warn('CLS issue:', metric);
      });
      if (webVitals.onFCP) webVitals.onFCP((metric) => {
        if (metric.value > 2500) console.warn('FCP issue:', metric);
      });
      if (webVitals.onLCP) webVitals.onLCP((metric) => {
        if (metric.value > 2500) console.warn('LCP issue:', metric);
      });
      if (webVitals.onTTFB) webVitals.onTTFB((metric) => {
        if (metric.value > 600) console.warn('TTFB issue:', metric);
      });
    }).catch(() => {
      console.log('Web Vitals monitoring not available');
    });
  };
  
  // Defer web vitals loading
  setTimeout(loadWebVitals, 1000);
}

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error('Root element not found');

const root = createRoot(rootElement);

// Track render performance
performanceMonitor.markInteraction('app-render');

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

performanceMonitor.measureInteraction('app-render');

// Mark app initialization complete
if (typeof window !== 'undefined' && 'performance' in window) {
  performance.mark('app-init-end');
  performance.measure('app-initialization', 'app-init-start', 'app-init-end');
}

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
  performanceMonitor.cleanup();
});
