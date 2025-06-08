
import { Star } from "lucide-react";
import { memo } from "react";

const CoursesHero = memo(() => {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-pink-600/5 to-orange-600/10"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-3 sm:px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-red-100 to-pink-100 text-red-700 rounded-full text-xs md:text-sm font-medium mb-4 sm:mb-6 md:mb-8 shadow-lg backdrop-blur-sm border border-red-200/50">
            <Star className="w-3 md:w-4 h-3 md:h-4 mr-2" />
            Professional Music Education
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight px-2">
            <span className="bg-gradient-to-r from-red-600 via-pink-600 to-orange-500 bg-clip-text text-transparent block sm:inline">
              Master Music
            </span>
            <span className="text-gray-900 block sm:inline sm:ml-2 lg:ml-4">Production</span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-gray-600 mb-4 sm:mb-6 md:mb-8 leading-relaxed font-medium px-4">
            Transform your passion into professional skills with our world-class mentorship programs
          </p>
          
          <p className="text-xs sm:text-sm md:text-lg text-gray-500 backdrop-blur-sm bg-white/20 inline-block px-3 sm:px-4 md:px-6 py-2 rounded-full border border-gray-200/50 shadow-lg mx-2">
            Join thousands of successful students who've launched their music careers with us
          </p>
        </div>
      </div>
    </section>
  );
});

CoursesHero.displayName = 'CoursesHero';

export default CoursesHero;
