// Preload critical assets for faster initial page load
export const preloadCriticalAssets = () => {
  if (typeof window === 'undefined') return;

  // Critical images that should be preloaded
  const criticalImages = [
    '/lovable-uploads/b3ac942f-a004-4e7e-a005-13fa36ac41a7.png',
    '/music-tutorship-logo.png'
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    link.fetchPriority = 'high';
    document.head.appendChild(link);
  });
};

// Prefetch route-specific assets
export const prefetchRouteAssets = (route: string) => {
  if (typeof window === 'undefined') return;

  const routeAssets: Record<string, string[]> = {
    '/courses': [
      '/lovable-uploads/e58ecfe4-170c-4008-ae3f-65d7ac6cfc2c.png'
    ],
    '/about': [
      '/lovable-uploads/8e4988dc-184a-4830-b569-64e9a67c6d19.png'
    ],
    '/dashboard': [
      '/lovable-uploads/31fe46dc-2cc5-4253-8b13-f7a401f8edc2.png'
    ]
  };

  const assets = routeAssets[route] || [];
  
  assets.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};
