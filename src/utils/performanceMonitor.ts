// Performance monitoring utility
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private observers: PerformanceObserver[] = [];

  private constructor() {
    this.setupPerformanceObservers();
  }

  public static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  private setupPerformanceObservers() {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    // Long Task Observer
    try {
      const longTaskObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) {
            console.warn('Long task detected:', {
              duration: entry.duration,
              startTime: entry.startTime,
              name: entry.name
            });
          }
        }
      });
      longTaskObserver.observe({ entryTypes: ['longtask'] });
      this.observers.push(longTaskObserver);
    } catch (e) {
      console.warn('Long task observer not supported');
    }

    // Largest Contentful Paint Observer
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log('LCP:', entry.startTime);
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(lcpObserver);
    } catch (e) {
      console.warn('LCP observer not supported');
    }

    // First Input Delay Observer
    try {
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const fidEntry = entry as any; // Type assertion for FID entry
          if (fidEntry.processingStart && fidEntry.startTime) {
            console.log('FID:', fidEntry.processingStart - fidEntry.startTime);
          }
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      this.observers.push(fidObserver);
    } catch (e) {
      console.warn('FID observer not supported');
    }
  }

  public measureComponentRender(componentName: string, renderFunction: () => void) {
    const startTime = performance.now();
    renderFunction();
    const endTime = performance.now();
    
    if (endTime - startTime > 16) { // 60fps threshold
      console.warn(`Slow render detected in ${componentName}: ${endTime - startTime}ms`);
    }
  }

  public markInteraction(interactionName: string) {
    performance.mark(`${interactionName}-start`);
  }

  public measureInteraction(interactionName: string) {
    try {
      performance.mark(`${interactionName}-end`);
      performance.measure(interactionName, `${interactionName}-start`, `${interactionName}-end`);
    } catch (e) {
      console.warn(`Could not measure interaction: ${interactionName}`);
    }
  }

  public cleanup() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Hook for React components
export const usePerformanceMonitor = () => {
  return PerformanceMonitor.getInstance();
};