import { useEffect, useState, memo } from 'react';

interface DeferredAnimationsProps {
  children: React.ReactNode;
  delay?: number;
}

export const DeferredAnimations = memo(({ children, delay = 100 }: DeferredAnimationsProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = requestIdleCallback 
      ? requestIdleCallback(() => setShow(true))
      : setTimeout(() => setShow(true), delay);
    
    return () => {
      if (typeof timer === 'number') {
        clearTimeout(timer);
      }
    };
  }, [delay]);

  if (!show) return null;
  
  return <>{children}</>;
});

DeferredAnimations.displayName = 'DeferredAnimations';
