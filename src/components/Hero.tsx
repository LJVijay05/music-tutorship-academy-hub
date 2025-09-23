
import { Button } from "@/components/ui/button";
import { Play, Star, Users, Music } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DemoPopup from "./DemoPopup";

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
    }, 500);

    return () => clearTimeout(timer);
  }, [target, duration]);

  return (
    <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
      {count}{suffix}
    </span>
  );
};

const Hero = () => {
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50 overflow-hidden">
      {/* Dynamic Background Elements - Optimized for performance */}
      <div className="absolute inset-0 opacity-20 will-change-transform">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-gradient-to-r from-red-500 to-pink-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-gradient-to-r from-purple-500 to-red-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 sm:w-32 lg:w-48 h-24 sm:h-32 lg:h-48 bg-gradient-to-r from-pink-500 to-red-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 lg:px-6 pt-20 sm:pt-28 lg:pt-32 pb-12 lg:pb-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Enhanced Animated Title */}
          <div className="mb-8 lg:mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
              <span className="inline-block opacity-0 animate-[fade-in_0.8s_ease-out_0.2s_forwards] text-gray-900 drop-shadow-lg">
                Learn
              </span>
              <span className="inline-block opacity-0 animate-[fade-in_0.8s_ease-out_0.5s_forwards] text-gray-900 ml-2 sm:ml-4 lg:ml-6 drop-shadow-lg">
                Music
              </span>
              <span className="inline-block opacity-0 animate-[fade-in_0.8s_ease-out_0.8s_forwards] bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 bg-clip-text text-transparent ml-2 sm:ml-4 lg:ml-6 drop-shadow-2xl">
                Production
              </span>
            </h1>
          </div>
          
          <div className="mb-8 lg:mb-12 opacity-0 animate-[fade-in_0.8s_ease-out_1.1s_forwards]">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium px-4">
              Complete music production mastery course. Professional guidance from basics to advanced techniques. Create studio-quality tracks today!
            </p>
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center mb-12 lg:mb-16 opacity-0 animate-[fade-in_0.8s_ease-out_1.4s_forwards] px-4">
            <Button 
              onClick={() => setIsDemoPopupOpen(true)}
              size="lg" 
              className="group w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 relative overflow-hidden"
            >
              <Play className="mr-2 h-4 w-4 lg:h-5 lg:w-5 transition-transform duration-300 group-hover:scale-110" />
              <span className="relative z-10">Book Your Free Demo</span>
              <div className="absolute inset-0 bg-white/10 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="group w-full sm:w-auto border-2 border-gray-300 text-gray-700 hover:border-red-600 hover:text-red-600 px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg backdrop-blur-sm bg-white/80 relative overflow-hidden"
              asChild
            >
              <Link to="/courses">
                <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">View Courses</span>
                <div className="absolute inset-0 bg-red-50 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out opacity-50"></div>
              </Link>
            </Button>
          </div>
          
          {/* Enhanced Stats - Fully Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8 max-w-4xl mx-auto opacity-0 animate-[fade-in_0.8s_ease-out_1.7s_forwards] px-4">
            <div className="text-center group transition-all duration-300 hover:scale-105 p-4 lg:p-6 rounded-2xl bg-gradient-to-br from-white/50 to-red-50/50 backdrop-blur-sm hover:shadow-xl hover:bg-gradient-to-br hover:from-red-50 hover:to-white border border-red-100/50">
              <div className="flex items-center justify-center mb-2 lg:mb-3">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-red-600 mr-1 sm:mr-2 transition-transform duration-300 group-hover:scale-110" />
                <AnimatedCounter target={320} suffix="+" duration={2000} />
              </div>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">Students Mentored</p>
            </div>
            <div className="text-center group transition-all duration-300 hover:scale-105 p-4 lg:p-6 rounded-2xl bg-gradient-to-br from-white/50 to-red-50/50 backdrop-blur-sm hover:shadow-xl hover:bg-gradient-to-br hover:from-red-50 hover:to-white border border-red-100/50">
              <div className="flex items-center justify-center mb-2 lg:mb-3">
                <Star className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-red-600 mr-1 sm:mr-2 transition-transform duration-300 group-hover:rotate-12" />
                <AnimatedCounter target={131} suffix="" duration={2200} />
              </div>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">Countries Reached</p>
            </div>
            <div className="text-center group transition-all duration-300 hover:scale-105 p-4 lg:p-6 rounded-2xl bg-gradient-to-br from-white/50 to-red-50/50 backdrop-blur-sm hover:shadow-xl hover:bg-gradient-to-br hover:from-red-50 hover:to-white border border-red-100/50">
              <div className="flex items-center justify-center mb-2 lg:mb-3">
                <Music className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-red-600 mr-1 sm:mr-2 transition-transform duration-300 group-hover:scale-110" />
                <AnimatedCounter target={60} suffix="M+" duration={2400} />
              </div>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">Total Streams</p>
            </div>
          </div>
        </div>
      </div>
      
      <DemoPopup isOpen={isDemoPopupOpen} onClose={() => setIsDemoPopupOpen(false)} />
    </section>
  );
};

export default Hero;
