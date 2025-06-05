
import { Star } from "lucide-react";

const CoursesHero = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-pink-600/5 to-orange-600/10"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-48 h-48 bg-gradient-to-r from-red-500 to-pink-500 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-2xl animate-sparkle"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-100 to-pink-100 text-red-700 rounded-full text-sm font-medium mb-8 animate-zoom-in-up shadow-lg backdrop-blur-sm border border-red-200/50">
            <Star className="w-4 h-4 mr-2 animate-sparkle" />
            Professional Music Education
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-title-reveal">
            <span className="bg-gradient-to-r from-red-600 via-pink-600 to-orange-500 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_auto] drop-shadow-2xl" style={{ backgroundImage: 'linear-gradient(90deg, #dc2626, #ec4899, #f97316, #dc2626)' }}>
              Master Music
            </span>
            <span className="text-gray-900 ml-4 drop-shadow-lg">Production</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed animate-slide-up font-medium" style={{ animationDelay: '200ms' }}>
            Transform your passion into professional skills with our world-class mentorship programs
          </p>
          
          <p className="text-lg text-gray-500 animate-slide-up backdrop-blur-sm bg-white/20 inline-block px-6 py-2 rounded-full border border-gray-200/50 shadow-lg" style={{ animationDelay: '400ms' }}>
            Join thousands of successful students who've launched their music careers with us
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoursesHero;
