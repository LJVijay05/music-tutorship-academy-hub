import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { openExternal } from '@/utils/openExternal';
import { initializeSentry } from '@/utils/sentry';

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

// Clean up Lovable preview token that can interfere with HashRouter
const cleanupLovableToken = () => {
  const url = new URL(window.location.href);
  
  if (url.searchParams.has('__lovable_token')) {
    // Clean the URL and reload immediately - no session storage needed
    const hash = url.hash || '#/';
    const cleanUrl = url.pathname + hash;
    console.info('[New Tab] Removing Lovable token from URL');
    window.location.replace(cleanUrl);
    return true; // Will reload, so don't execute rest
  }
  
  return false;
};

const normalizeHash = () => {
  const { hash } = window.location;
  if (!hash) return;
  
  let next = hash;
  // Normalize leading double slashes and duplicate slashes
  next = next.replace(/^#\/{2,}/, '#/');
  next = next.replace(/\/{2,}/g, '/');
  // Normalize '#/.' to '#/'
  next = next.replace(/^#\/\.$/, '#/');
  
  if (next !== hash) {
    console.info('[New Tab] Normalizing hash from', hash, 'to', next);
    window.location.replace(next);
  }
};

// Wrap everything in error handling
try {
  // Clean up Lovable token FIRST (must run before everything else)
  if (!cleanupLovableToken()) {
    console.info('[New Tab] Initializing app...');
    
    // Initialize error tracking
    initializeSentry();

    preloadCriticalResources();
    addPerformanceHints();

    // Normalize malformed hash routes on load and on change
    normalizeHash();
    window.addEventListener('hashchange', normalizeHash);

    // Ensure external links work everywhere: add security attributes and handle sandboxed contexts
    const enableIframeSafeExternalLinks = () => {
      const inIframe = window.self !== window.top;

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

      // Initial pass - ALWAYS run this
      document.querySelectorAll('a[target="_blank"]').forEach((el) => secureRel(el as HTMLAnchorElement));

      // Observe future anchors - ALWAYS run this
      const mo = new MutationObserver((mutations) => {
        for (const m of mutations) {
          m.addedNodes.forEach((node) => {
            if (node instanceof HTMLAnchorElement) secureRel(node);
            if (node instanceof HTMLElement) node.querySelectorAll('a[target="_blank"]').forEach((a) => secureRel(a as HTMLAnchorElement));
          });
        }
      });
      mo.observe(document.documentElement, { childList: true, subtree: true });

      // Handle clicks - ONLY in iframe context with special fallback
      if (inIframe) {
        document.addEventListener(
          'click',
          (evt) => {
            const mouseEvt = evt as MouseEvent;
            const target = evt.target as HTMLElement | null;
            const anchor = (target && (target.closest?.('a') as HTMLAnchorElement | null)) || null;
            if (!anchor) return;

            if (anchor.target === '_blank') {
              if (mouseEvt.ctrlKey || mouseEvt.metaKey || mouseEvt.shiftKey || mouseEvt.altKey) return;
              if (anchor.hasAttribute('download')) return;
              evt.preventDefault();
              secureRel(anchor);
              openExternal(anchor.href, '_blank');
            }
          },
          { capture: true }
        );
      }
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
    
    console.info('[New Tab] React mounted successfully');

    // Hide loading screen once React mounts
    const hideLoader = () => {
      const loader = document.getElementById('app-loader');
      if (loader) {
        loader.classList.add('loaded');
        setTimeout(() => loader.remove(), 300);
      }
    };

    // Check if React has mounted by looking for React root
    const checkReactMounted = () => {
      const root = document.getElementById('root');
      if (root && root.children.length > 0) {
        hideLoader();
      } else {
        // Retry after a short delay
        setTimeout(checkReactMounted, 50);
      }
    };

    // Start checking after a minimum delay
    setTimeout(checkReactMounted, 100);
  }
} catch (error) {
  console.error('[New Tab] Fatal initialization error:', error);
  
  // Ensure loader is hidden
  const loader = document.getElementById('app-loader');
  if (loader) {
    loader.classList.add('loaded');
    setTimeout(() => loader.remove(), 300);
  }
  
  // Show error to user
  const errorContainer = document.createElement('div');
  errorContainer.style.cssText = 'display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; font-family: system-ui;';
  errorContainer.innerHTML = `
    <div style="text-align: center; max-width: 500px;">
      <h1 style="color: #dc2626; font-size: 24px; margin-bottom: 16px;">Failed to Load</h1>
      <p style="color: #6b7280; margin-bottom: 24px;">There was an error initializing the application.</p>
      <button onclick="location.href=location.pathname" style="padding: 12px 24px; background: #dc2626; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px;">Reload Page</button>
      <pre style="margin-top: 24px; padding: 16px; background: #f3f4f6; border-radius: 8px; text-align: left; overflow: auto; font-size: 12px;">${error}</pre>
    </div>
  `;
  document.getElementById('root')?.appendChild(errorContainer);
}

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
