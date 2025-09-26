import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { PerformanceMonitor } from './utils/performanceMonitor';

// Initialize performance monitoring
const performanceMonitor = PerformanceMonitor.getInstance();

// Performance monitoring setup
if (typeof window !== 'undefined' && 'performance' in window) {
  // Mark app initialization
  performance.mark('app-init-start');
  
  // Monitor Core Web Vitals when available
  import('web-vitals').then((webVitals) => {
    if (webVitals.onCLS) webVitals.onCLS(console.log);
    if (webVitals.onFCP) webVitals.onFCP(console.log);
    if (webVitals.onLCP) webVitals.onLCP(console.log);
    if (webVitals.onTTFB) webVitals.onTTFB(console.log);
  }).catch(() => {
    console.log('Web Vitals monitoring not available');
  });
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
