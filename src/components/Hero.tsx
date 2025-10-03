import { Button } from "@/components/ui/button";
import { Play, Star, Users, Music } from "lucide-react";
import { useState, memo, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import EnhancedDemoBookingForm from "./EnhancedDemoBookingForm";

// Lazy load AnimatedCounter
const AnimatedCounter = lazy(() => import("./AnimatedCounter"));

const Hero = memo(() => {
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50 overflow-hidden">
      {/* Simplified Background - Reduced animations */}
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-red-500 to-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500 to-red-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 lg:px-6 pt-20 sm:pt-28 lg:pt-32 pb-12 lg:pb-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Optimized Title - Reduced animations */}
          <div className="mb-8 lg:mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
              <span className="inline-block text-gray-900">
                Learn
              </span>
              <span className="inline-block text-gray-900 ml-2 sm:ml-4 lg:ml-6">
                Music
              </span>
              <span className="inline-block bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 bg-clip-text text-transparent ml-2 sm:ml-4 lg:ml-6">
                Production
              </span>
            </h1>
          </div>
          
          <div className="mb-8 lg:mb-12">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium px-4">
              Complete music production mastery course. Professional guidance from basics to advanced techniques. Create studio-quality tracks today!
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center mb-12 lg:mb-16 px-4">
            <Button 
              onClick={() => setIsDemoPopupOpen(true)}
              size="lg" 
              className="group w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Play className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
              <span>Book Your Free Demo</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="group w-full sm:w-auto border-2 border-gray-300 text-gray-700 hover:border-red-600 hover:text-red-600 px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm bg-white/80"
              asChild
            >
              <Link to="/courses">
                <span>View Courses</span>
              </Link>
            </Button>
          </div>
          
          {/* Stats with Lazy Loaded Counter */}
          <Suspense fallback={
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8 max-w-4xl mx-auto px-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="text-center p-4 lg:p-6 rounded-2xl bg-gradient-to-br from-white/50 to-red-50/50 backdrop-blur-sm border border-red-100/50">
                  <div className="h-8 w-24 mx-auto bg-gray-200 animate-pulse rounded mb-2"></div>
                  <div className="h-4 w-32 mx-auto bg-gray-200 animate-pulse rounded"></div>
                </div>
              ))}
            </div>
          }>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8 max-w-4xl mx-auto px-4">
              <div className="text-center group transition-all duration-300 hover:scale-105 p-4 lg:p-6 rounded-2xl bg-gradient-to-br from-white/50 to-red-50/50 backdrop-blur-sm hover:shadow-xl border border-red-100/50">
                <div className="flex items-center justify-center mb-2 lg:mb-3">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-red-600 mr-1 sm:mr-2" />
                  <AnimatedCounter target={320} suffix="+" duration={2000} />
                </div>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium">Students Mentored</p>
              </div>
              <div className="text-center group transition-all duration-300 hover:scale-105 p-4 lg:p-6 rounded-2xl bg-gradient-to-br from-white/50 to-red-50/50 backdrop-blur-sm hover:shadow-xl border border-red-100/50">
                <div className="flex items-center justify-center mb-2 lg:mb-3">
                  <Star className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-red-600 mr-1 sm:mr-2" />
                  <AnimatedCounter target={131} suffix="" duration={2200} />
                </div>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium">Countries Reached</p>
              </div>
              <div className="text-center group transition-all duration-300 hover:scale-105 p-4 lg:p-6 rounded-2xl bg-gradient-to-br from-white/50 to-red-50/50 backdrop-blur-sm hover:shadow-xl border border-red-100/50">
                <div className="flex items-center justify-center mb-2 lg:mb-3">
                  <Music className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-red-600 mr-1 sm:mr-2" />
                  <AnimatedCounter target={60} suffix="M+" duration={2400} />
                </div>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium">Total Streams</p>
              </div>
            </div>
          </Suspense>
        </div>
      </div>
      
      <EnhancedDemoBookingForm open={isDemoPopupOpen} onOpenChange={setIsDemoPopupOpen} />
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
