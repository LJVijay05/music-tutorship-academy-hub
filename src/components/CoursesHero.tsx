
import { Star } from "lucide-react";
import { memo } from "react";

const CoursesHero = memo(() => {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Enhanced Background with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-pink-600/5 to-orange-600/10"></div>
      
      {/* Dynamic Background Elements - Similar to home page */}
      <div className="absolute inset-0 opacity-20 will-change-transform">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-gradient-to-r from-red-500 to-pink-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-gradient-to-r from-purple-500 to-red-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 sm:w-32 lg:w-48 h-24 sm:h-32 lg:h-48 bg-gradient-to-r from-pink-500 to-red-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-3 sm:px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-red-100 to-pink-100 text-red-700 rounded-full text-xs md:text-sm font-medium mb-4 sm:mb-6 md:mb-8 shadow-lg backdrop-blur-sm border border-red-200/50 opacity-0 animate-[fade-in_0.8s_ease-out_0.2s_forwards]">
            <Star className="w-3 md:w-4 h-3 md:h-4 mr-2" />
            Professional Music Education
          </div>
          
          {/* Enhanced Animated Title - Similar to home page */}
          <div className="mb-8 lg:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold leading-tight px-2">
              <span className="inline-block opacity-0 animate-[fade-in_0.8s_ease-out_0.5s_forwards] text-gray-900 drop-shadow-lg">
                Master
              </span>
              <span className="inline-block opacity-0 animate-[fade-in_0.8s_ease-out_0.8s_forwards] bg-gradient-to-r from-red-600 via-pink-600 to-orange-500 bg-clip-text text-transparent ml-2 sm:ml-4 lg:ml-6 drop-shadow-2xl">
                Music
              </span>
              <span className="inline-block opacity-0 animate-[fade-in_0.8s_ease-out_1.1s_forwards] text-gray-900 ml-2 sm:ml-4 lg:ml-6 drop-shadow-lg">
                Production
              </span>
            </h1>
          </div>
          
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-gray-600 mb-4 sm:mb-6 md:mb-8 leading-relaxed font-medium px-4 opacity-0 animate-[fade-in_0.8s_ease-out_1.4s_forwards]">
            Transform your passion into professional skills with our world-class mentorship programs
          </p>
          
          <p className="text-xs sm:text-sm md:text-lg text-gray-500 backdrop-blur-sm bg-white/20 inline-block px-3 sm:px-4 md:px-6 py-2 rounded-full border border-gray-200/50 shadow-lg mx-2 opacity-0 animate-[fade-in_0.8s_ease-out_1.7s_forwards]">
            Join thousands of successful students who've launched their music careers with us
          </p>
        </div>
      </div>
    </section>
  );
});

CoursesHero.displayName = 'CoursesHero';

export default CoursesHero;
