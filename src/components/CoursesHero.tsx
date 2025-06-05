
import { Star } from "lucide-react";

const CoursesHero = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-orange-600/5"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Star className="w-4 h-4 mr-2" />
            Professional Music Education
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent animate-title-reveal">
            Master Music <span className="text-gray-900">Production</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
            Transform your passion into professional skills with our world-class mentorship programs
          </p>
          <p className="text-lg text-gray-500 animate-fade-in" style={{ animationDelay: '400ms' }}>
            Join thousands of successful students who've launched their music careers with us
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoursesHero;
