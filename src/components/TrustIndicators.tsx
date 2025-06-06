
import { useEffect, useState, useRef, useMemo } from "react";

// Optimized Counter Animation Component
const AnimatedCounter = ({ 
  target, 
  suffix = "", 
  duration = 2000,
  delay = 0 
}: { 
  target: number; 
  suffix?: string; 
  duration?: number; 
  delay?: number;
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      const startTime = Date.now();
      const endTime = startTime + duration;

      const updateCount = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        
        // Smooth easing function
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(easeOut * target);
        
        setCount(currentCount);

        if (now < endTime && progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          setCount(target);
        }
      };

      updateCount();
    }, delay);

    return () => clearTimeout(timer);
  }, [target, duration, isVisible, delay]);

  return (
    <div 
      ref={elementRef}
      className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 via-red-500 to-amber-500 bg-clip-text text-transparent mb-2"
    >
      {count}{suffix}
    </div>
  );
};

const TrustIndicators = () => {
  const indicators = useMemo(() => [
    { 
      value: 60, 
      suffix: "M+", 
      label: "Total Streams"
    },
    { 
      value: 131, 
      suffix: "+", 
      label: "Countries Reached"
    },
    { 
      value: 30, 
      suffix: "+", 
      label: "Awards Won"
    },
    { 
      value: 5, 
      suffix: "★", 
      label: "Average Rating"
    }
  ], []);

  return (
    <section className="py-16 bg-white relative overflow-hidden">      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Trust & Excellence
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of successful students from around the world
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {indicators.map((indicator, index) => (
            <div 
              key={`indicator-${indicator.label}-${index}`} 
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="p-6 transition-all duration-300 hover:scale-105">
                <AnimatedCounter 
                  target={indicator.value} 
                  suffix={indicator.suffix} 
                  duration={2000} 
                  delay={index * 200}
                />
                <div className="text-gray-600 font-medium text-sm md:text-base">
                  {indicator.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
