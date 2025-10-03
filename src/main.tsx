import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Preload critical resources
const preloadCriticalResources = () => {
  const resources = [
    { href: '/lovable-uploads/b3ac942f-a004-4e7e-a005-13fa36ac41a7.png', as: 'image' },
    { href: '/music-tutorship-logo.png', as: 'image' }
  ];
  
  resources.forEach(({ href, as }) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = as;
    link.href = href;
    document.head.appendChild(link);
  });
};

preloadCriticalResources();

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error('Root element not found');

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Lazy load web vitals monitoring (non-blocking)
if (import.meta.env.PROD) {
  setTimeout(() => {
    import('web-vitals').then((webVitals) => {
      webVitals.onCLS?.((metric) => {
        if (metric.value > 0.1) console.info('CLS:', metric.value);
      });
      webVitals.onFCP?.((metric) => {
        if (metric.value > 3000) console.info('FCP:', metric.value);
      });
      webVitals.onLCP?.((metric) => {
        if (metric.value > 3000) console.info('LCP:', metric.value);
      });
    }).catch(() => null);
  }, 3000);
}
