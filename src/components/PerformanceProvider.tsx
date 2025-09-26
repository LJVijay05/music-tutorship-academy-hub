import { createContext, useContext, ReactNode, memo } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface PerformanceContextValue {
  preloadImage: (src: string) => void;
  markInteraction: (name: string) => void;
  measureInteraction: (name: string) => void;
}

const PerformanceContext = createContext<PerformanceContextValue | null>(null);

export const usePerformance = () => {
  const context = useContext(PerformanceContext);
  if (!context) {
    throw new Error('usePerformance must be used within PerformanceProvider');
  }
  return context;
};

interface PerformanceProviderProps {
  children: ReactNode;
}

export const PerformanceProvider = memo(({ children }: PerformanceProviderProps) => {
  const preloadImage = (src: string) => {
    if (typeof window === 'undefined') return;
    
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  };

  const markInteraction = (name: string) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      performance.mark(`${name}-start`);
    }
  };

  const measureInteraction = (name: string) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      try {
        performance.mark(`${name}-end`);
        performance.measure(name, `${name}-start`, `${name}-end`);
      } catch (e) {
        console.warn(`Could not measure interaction: ${name}`);
      }
    }
  };

  const value: PerformanceContextValue = {
    preloadImage,
    markInteraction,
    measureInteraction,
  };

  return (
    <PerformanceContext.Provider value={value}>
      {children}
    </PerformanceContext.Provider>
  );
});

PerformanceProvider.displayName = 'PerformanceProvider';