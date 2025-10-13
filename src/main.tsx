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

// Ensure external links work in sandboxed preview: try new tab, fallback to same tab
const enableIframeSafeExternalLinks = () => {
  const inIframe = window.self !== window.top;
  if (!inIframe) return;

  document.addEventListener(
    'click',
    (evt) => {
      const mouseEvt = evt as MouseEvent;
      const target = evt.target as HTMLElement | null;
      const anchor = (target && target.closest) ? (target.closest('a') as HTMLAnchorElement | null) : null;
      if (!anchor) return;

      // Only handle explicit new-tab links
      if (anchor.target === '_blank') {
        // Let modifier keys behave normally
        if (mouseEvt.ctrlKey || mouseEvt.metaKey || mouseEvt.shiftKey) return;
        evt.preventDefault();
        const opened = window.open(anchor.href, '_blank', 'noopener,noreferrer');
        if (!opened) {
          // Fallback: open in same tab
          window.location.href = anchor.href;
        }
      }
    },
    { capture: true }
  );
};

enableIframeSafeExternalLinks();

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
