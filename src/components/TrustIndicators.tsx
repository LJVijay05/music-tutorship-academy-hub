
import { useEffect, useState } from "react";

// Counter Animation Component
const AnimatedCounter = ({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      const currentCount = Math.floor(easeOutQuad * target);
      
      setCount(currentCount);

      if (now < endTime) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    const timer = setTimeout(() => {
      updateCount();
    }, 300); // Small delay to ensure component is visible

    return () => clearTimeout(timer);
  }, [target, duration]);

  return (
    <div className="text-3xl font-bold text-red-600 mb-2">
      {count}{suffix}
    </div>
  );
};

const TrustIndicators = () => {
  const indicators = [
    { value: 60, suffix: "M+", label: "Total Streams" },
    { value: 131, suffix: "", label: "Countries Reached" },
    { value: 30, suffix: "+", label: "Awards Won" },
    { value: 5, suffix: "★", label: "Average Rating" }
  ];

  return (
    <div className="mt-20 text-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {indicators.map((indicator, index) => (
          <div key={index} className="text-center">
            <AnimatedCounter 
              target={indicator.value} 
              suffix={indicator.suffix} 
              duration={2000 + index * 200} 
            />
            <div className="text-gray-600">{indicator.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustIndicators;
