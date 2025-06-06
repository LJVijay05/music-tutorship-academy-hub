
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
      className="text-4xl md:text-5xl font-bold text-red-600 mb-3"
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
      label: "Total Streams", 
      bgColor: "bg-gradient-to-br from-green-500 to-green-600",
      shadowColor: "shadow-green-500/20"
    },
    { 
      value: 131, 
      suffix: "+", 
      label: "Countries Reached", 
      bgColor: "bg-gradient-to-br from-blue-500 to-purple-600",
      shadowColor: "shadow-blue-500/20"
    },
    { 
      value: 30, 
      suffix: "+", 
      label: "Awards Won", 
      bgColor: "bg-gradient-to-br from-yellow-500 to-orange-600",
      shadowColor: "shadow-orange-500/20"
    },
    { 
      value: 5, 
      suffix: "★", 
      label: "Average Rating", 
      bgColor: "bg-gradient-to-br from-red-500 to-pink-600",
      shadowColor: "shadow-red-500/20"
    }
  ], []);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-red-50 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-red-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-48 h-48 bg-gray-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-transparent bg-gradient-to-r from-red-600 via-red-700 to-gray-800 bg-clip-text">
              Trust & Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of successful students from around the world
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {indicators.map((indicator, index) => (
            <div 
              key={`indicator-${indicator.label}-${index}`} 
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Modern card design */}
              <div className={`relative ${indicator.bgColor} rounded-3xl p-8 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${indicator.shadowColor} shadow-xl hover:shadow-2xl`}>
                {/* White content container */}
                <div className="bg-white rounded-2xl p-6 relative z-10 transition-all duration-300 group-hover:bg-gray-50">
                  <AnimatedCounter 
                    target={indicator.value} 
                    suffix={indicator.suffix} 
                    duration={2000} 
                    delay={index * 200}
                  />
                  <div className="text-gray-700 font-semibold text-sm md:text-base leading-tight">
                    {indicator.label}
                  </div>
                </div>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Decorative floating elements */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-red-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
        <div className="absolute bottom-20 right-10 w-4 h-4 bg-gray-400 rounded-full opacity-50 animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
        <div className="absolute top-1/2 left-5 w-2 h-2 bg-red-500 rounded-full opacity-70 animate-ping" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/3 right-5 w-3 h-3 bg-gray-500 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
    </section>
  );
};

export default TrustIndicators;
