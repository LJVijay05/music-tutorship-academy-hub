// Image optimization utilities
export const getOptimizedImageUrl = (src: string, width?: number, quality = 80): string => {
  // If it's a local uploaded image, return as-is for now
  if (src.startsWith('/lovable-uploads/') || src.startsWith('/public/')) {
    return src;
  }
  
  // For external images, add optimization parameters if supported
  if (src.includes('unsplash.com')) {
    const params = new URLSearchParams();
    if (width) params.set('w', width.toString());
    params.set('q', quality.toString());
    params.set('fm', 'webp');
    params.set('auto', 'format');
    
    return `${src}${src.includes('?') ? '&' : '?'}${params.toString()}`;
  }
  
  return src;
};

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const createImagePlaceholder = (width: number, height: number): string => {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
      <text x="50%" y="50%" font-family="sans-serif" font-size="14" fill="#9ca3af" text-anchor="middle" dy=".3em">Loading...</text>
    </svg>
  `;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

// Intersection Observer for lazy loading
export const createLazyLoadObserver = (callback: (entries: IntersectionObserverEntry[]) => void) => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }

  return new IntersectionObserver(callback, {
    threshold: 0.1,
    rootMargin: '50px 0px'
  });
};