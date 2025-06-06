
import { useEffect, useState } from "react";

// Optimized Counter Animation Component
const AnimatedCounter = ({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add intersection observer for better performance
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`counter-${target}-${suffix}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [target, suffix]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Enhanced easing function for smoother animation
      const easeOutElastic = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress) * Math.sin((progress * 10 - 0.75) * (2 * Math.PI) / 3);
      const currentCount = Math.floor(easeOutElastic * target);
      
      setCount(currentCount);

      if (now < endTime && progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    const timer = setTimeout(() => {
      updateCount();
    }, 300);

    return () => clearTimeout(timer);
  }, [target, duration, isVisible]);

  return (
    <div 
      id={`counter-${target}-${suffix}`}
      className="text-3xl font-bold text-red-600 mb-2"
    >
      {count}{suffix}
    </div>
  );
};

// Enhanced Colorful Paper Splash Component
const PaperSplash = ({ delay = 0 }: { delay?: number }) => {
  const paperPieces = [
    { color: "bg-red-500", size: "w-3 h-3", shape: "rounded-full", position: { top: "20%", left: "10%" }, animation: "animate-bounce", duration: "2s" },
    { color: "bg-blue-500", size: "w-2 h-4", shape: "transform rotate-45", position: { top: "30%", right: "15%" }, animation: "animate-pulse", duration: "1.5s" },
    { color: "bg-yellow-500", size: "w-4 h-2", shape: "rounded", position: { bottom: "25%", left: "20%" }, animation: "animate-ping", duration: "2.5s" },
    { color: "bg-green-500", size: "w-3 h-3", shape: "transform rotate-12", position: { top: "40%", right: "25%" }, animation: "animate-bounce", duration: "1.8s" },
    { color: "bg-purple-500", size: "w-2 h-3", shape: "rounded-full", position: { bottom: "20%", right: "10%" }, animation: "animate-pulse", duration: "2.2s" },
    { color: "bg-pink-500", size: "w-4 h-1", shape: "", position: { top: "15%", left: "30%" }, animation: "animate-ping", duration: "1.7s" },
    { color: "bg-orange-500", size: "w-2 h-2", shape: "rounded", position: { bottom: "35%", left: "35%" }, animation: "animate-bounce", duration: "2.1s" },
    { color: "bg-cyan-500", size: "w-3 h-2", shape: "transform -rotate-12", position: { top: "25%", left: "45%" }, animation: "animate-pulse", duration: "1.9s" }
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {paperPieces.map((piece, index) => (
        <div 
          key={index}
          className={`absolute ${piece.size} ${piece.color} ${piece.shape} opacity-70 ${piece.animation}`}
          style={{ 
            ...piece.position,
            animationDelay: `${delay + (index * 200)}ms`,
            animationDuration: piece.duration
          }}
        />
      ))}
    </div>
  );
};

const TrustIndicators = () => {
  const indicators = [
    { value: 60, suffix: "M+", label: "Total Streams", color: "from-green-500 to-emerald-600" },
    { value: 131, suffix: "+", label: "Countries Reached", color: "from-blue-500 to-purple-600" },
    { value: 30, suffix: "+", label: "Awards Won", color: "from-yellow-500 to-orange-600" },
    { value: 5, suffix: "★", label: "Average Rating", color: "from-red-500 to-pink-600" }
  ];

  return (
    <div className="mt-20 text-center relative">
      {/* Background gradient effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-r from-red-500 to-pink-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl animate-bounce"></div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto relative z-10">
        {indicators.map((indicator, index) => (
          <div key={`${indicator.label}-${index}`} className="text-center relative group">
            {/* Enhanced card with gradient borders and hover effects */}
            <div className={`relative bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 border-transparent hover:border-opacity-50 bg-gradient-to-br ${indicator.color} bg-clip-padding`}>
              {/* Inner content container */}
              <div className="bg-white rounded-xl p-4 relative z-10">
                <AnimatedCounter 
                  target={indicator.value} 
                  suffix={indicator.suffix} 
                  duration={2000 + index * 200} 
                />
                <div className="text-gray-600 font-semibold">{indicator.label}</div>
              </div>
              
              {/* Paper splash effects */}
              <PaperSplash delay={index * 300} />
              
              {/* Gradient overlay for hover effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${indicator.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Additional floating elements */}
      <div className="absolute -top-10 left-10 w-6 h-6 bg-red-400 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute -bottom-10 right-10 w-8 h-8 bg-blue-400 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/2 -left-5 w-4 h-4 bg-yellow-400 rounded-full opacity-50 animate-ping" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 -right-5 w-5 h-5 bg-purple-400 rounded-full opacity-35 animate-bounce" style={{ animationDelay: '2.5s' }}></div>
    </div>
  );
};

export default TrustIndicators;
