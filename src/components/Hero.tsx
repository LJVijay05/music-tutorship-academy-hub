
import { Button } from "@/components/ui/button";
import { Play, Star, Users, Music } from "lucide-react";
import { useState, useEffect } from "react";
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
    }, 500); // Small delay to ensure component is visible

    return () => clearTimeout(timer);
  }, [target, duration]);

  return (
    <span className="text-3xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
      {count}{suffix}
    </span>
  );
};

const Hero = () => {
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-red-500 to-pink-500 rounded-full blur-3xl animate-pulse-wave"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500 to-red-500 rounded-full blur-3xl animate-orbit"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-r from-pink-500 to-red-500 rounded-full blur-3xl animate-breathing"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full blur-2xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-gradient-to-r from-orange-400 to-red-600 rounded-full blur-2xl animate-sway"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 lg:px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Animated Title */}
          <div className="mb-12 animate-fade-up">
            <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
              <span className="inline-block animate-slide-bounce text-gray-900 drop-shadow-lg" style={{ animationDelay: '0.1s' }}>
                Learn
              </span>
              <span className="inline-block animate-flip-in text-gray-900 ml-6 drop-shadow-lg" style={{ animationDelay: '0.4s' }}>
                Music
              </span>
              <span className="inline-block animate-glow-reveal bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 bg-clip-text text-transparent ml-6 drop-shadow-2xl" style={{ animationDelay: '0.7s', backgroundImage: 'linear-gradient(90deg, #dc2626, #ec4899, #9333ea, #dc2626)' }}>
                Production
              </span>
            </h1>
          </div>
          
          <div className="mb-12 animate-fade-up-slow" style={{ animationDelay: '1s' }}>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              Master the art of music production with expert guidance. From beginner basics to advanced techniques, unlock your creative potential and produce professional-quality tracks.
            </p>
          </div>
          
          {/* Enhanced CTA Buttons with New Animations */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-bounce-up" style={{ animationDelay: '1.2s' }}>
            <Button 
              onClick={() => setIsDemoPopupOpen(true)}
              size="lg" 
              className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 animate-button-pulse border-2 border-red-500/20"
            >
              <Play className="mr-2 h-5 w-5 group-hover:animate-spin-slow transition-transform duration-300" />
              Book Your Free Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="group border-2 border-gray-300 text-gray-700 hover:border-red-600 hover:text-red-600 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-500 hover:animate-button-bounce hover:shadow-xl backdrop-blur-sm bg-white/80"
            >
              <span className="group-hover:animate-wave">View Courses</span>
            </Button>
          </div>
          
          {/* Enhanced Stats with New Animations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-stagger-up" style={{ animationDelay: '1.4s' }}>
            <div className="text-center group hover:animate-elastic transition-all duration-500 p-6 rounded-2xl bg-gradient-to-br from-white/50 to-red-50/50 backdrop-blur-sm hover:shadow-xl hover:bg-gradient-to-br hover:from-red-50 hover:to-white border border-red-100/50">
              <div className="flex items-center justify-center mb-3">
                <Users className="h-8 w-8 text-red-600 mr-2 group-hover:animate-rubber-band" />
                <AnimatedCounter target={320} suffix="+" duration={2000} />
              </div>
              <p className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">Students Mentored</p>
            </div>
            <div className="text-center group hover:animate-elastic transition-all duration-500 p-6 rounded-2xl bg-gradient-to-br from-white/50 to-red-50/50 backdrop-blur-sm hover:shadow-xl hover:bg-gradient-to-br hover:from-red-50 hover:to-white border border-red-100/50" style={{ animationDelay: '1.5s' }}>
              <div className="flex items-center justify-center mb-3">
                <Star className="h-8 w-8 text-red-600 mr-2 group-hover:animate-twinkle" />
                <AnimatedCounter target={10} suffix="+" duration={2200} />
              </div>
              <p className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">Years Experience</p>
            </div>
            <div className="text-center group hover:animate-elastic transition-all duration-500 p-6 rounded-2xl bg-gradient-to-br from-white/50 to-red-50/50 backdrop-blur-sm hover:shadow-xl hover:bg-gradient-to-br hover:from-red-50 hover:to-white border border-red-100/50" style={{ animationDelay: '1.6s' }}>
              <div className="flex items-center justify-center mb-3">
                <Music className="h-8 w-8 text-red-600 mr-2 group-hover:animate-dance" />
                <AnimatedCounter target={200} suffix="+" duration={2400} />
              </div>
              <p className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">Tracks Produced</p>
            </div>
          </div>
        </div>
      </div>
      
      <DemoPopup isOpen={isDemoPopupOpen} onClose={() => setIsDemoPopupOpen(false)} />
    </section>
  );
};

export default Hero;
