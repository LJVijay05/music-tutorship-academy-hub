
import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

const AnimatedCounter = ({ target, suffix = "", duration = 2000 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    
    const updateCount = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth easing function
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      const currentCount = Math.floor(easeOutQuad * target);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    const timer = setTimeout(updateCount, 200);
    return () => clearTimeout(timer);
  }, [target, duration]);

  return (
    <span className="text-5xl font-bold text-gray-900 mb-4 text-transparent bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text">
      {count}{suffix}
    </span>
  );
};

export default AnimatedCounter;
