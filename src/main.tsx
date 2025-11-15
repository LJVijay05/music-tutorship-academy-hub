import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { openExternal } from '@/utils/openExternal';

// Preload critical resources
const preloadCriticalResources = () => {
  const resources = [
    { href: '/lovable-uploads/b3ac942f-a004-4e7e-a005-13fa36ac41a7.png', as: 'image' },
    { href: '/music-tutorship-logo.png', as: 'image' }
  ];
  
  resources.forEach(({ href, as }) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = as as HTMLLinkElement['as'];
    link.href = href;
    document.head.appendChild(link);
  });
};

// Add performance hints for external origins
const addPerformanceHints = () => {
  const hints = [
    { rel: 'preconnect', href: 'https://cxoddcrspugepmjaphdb.supabase.co', crossOrigin: '' },
    { rel: 'dns-prefetch', href: 'https://cxoddcrspugepmjaphdb.supabase.co' }
  ];

  hints.forEach(({ rel, href, crossOrigin }) => {
    const link = document.createElement('link');
    link.rel = rel;
    link.href = href;
    if (crossOrigin !== undefined) link.crossOrigin = crossOrigin;
    document.head.appendChild(link);
  });
};

preloadCriticalResources();
addPerformanceHints();

// Ensure external links work in sandboxed preview: try new tab, fallback to same tab
const enableIframeSafeExternalLinks = () => {
  const inIframe = window.self !== window.top;
  if (!inIframe) return;

  // Ensure all target=_blank links have proper rel for security
  const secureRel = (a: HTMLAnchorElement) => {
    if (a.target === '_blank') {
      const rel = (a.getAttribute('rel') || '').toLowerCase();
      const needed = ['noopener', 'noreferrer'];
      const parts = new Set(rel.split(/\s+/).filter(Boolean));
      needed.forEach((t) => parts.add(t));
      a.setAttribute('rel', Array.from(parts).join(' '));
    }
  };

  // Initial pass
  document.querySelectorAll('a[target="_blank"]').forEach((el) => secureRel(el as HTMLAnchorElement));

  // Observe future anchors
  const mo = new MutationObserver((mutations) => {
    for (const m of mutations) {
      m.addedNodes.forEach((node) => {
        if (node instanceof HTMLAnchorElement) secureRel(node);
        if (node instanceof HTMLElement) node.querySelectorAll('a[target="_blank"]').forEach((a) => secureRel(a as HTMLAnchorElement));
      });
    }
  });
  mo.observe(document.documentElement, { childList: true, subtree: true });

  // Handle clicks in sandboxed preview
  document.addEventListener(
    'click',
    (evt) => {
      const mouseEvt = evt as MouseEvent;
      const target = evt.target as HTMLElement | null;
      const anchor = (target && (target.closest?.('a') as HTMLAnchorElement | null)) || null;
      if (!anchor) return;

      // Only handle explicit new-tab links
      if (anchor.target === '_blank') {
        // Let modifier keys behave normally
        if (mouseEvt.ctrlKey || mouseEvt.metaKey || mouseEvt.shiftKey || mouseEvt.altKey) return;
        if (anchor.hasAttribute('download')) return;
        evt.preventDefault();
        secureRel(anchor);
        // Use robust helper to cope with blocked popups inside iframe
        openExternal(anchor.href, '_blank');
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
