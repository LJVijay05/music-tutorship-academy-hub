
import { Star } from "lucide-react";
import { memo } from "react";

const CoursesHero = memo(() => {
  const animationDelays = ['0.5s', '0.8s', '1.1s'];
  const titleWords = ['Master', 'Music', 'Production'];
  
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      {/* Optimized Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-pink-600/5 to-orange-600/10" />
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 opacity-20">
        {[
          { size: 'w-48 h-48 lg:w-64 lg:h-64', position: 'top-20 left-20', gradient: 'from-red-500 to-pink-500', delay: '0s' },
          { size: 'w-64 h-64 lg:w-96 lg:h-96', position: 'bottom-20 right-20', gradient: 'from-purple-500 to-red-500', delay: '1s' },
          { size: 'w-32 h-32 lg:w-48 lg:h-48', position: 'top-1/2 left-1/2', gradient: 'from-pink-500 to-red-500', delay: '2s' }
        ].map((elem, i) => (
          <div
            key={i}
            className={`absolute ${elem.position} ${elem.size} bg-gradient-to-r ${elem.gradient} rounded-full blur-3xl animate-pulse`}
            style={{ animationDelay: elem.delay }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-100 to-pink-100 text-red-700 rounded-full text-sm font-medium shadow-lg backdrop-blur-sm border border-red-200/50 opacity-0 animate-[fade-in_0.8s_ease-out_0.2s_forwards]">
            <Star className="w-4 h-4" />
            Professional Music Education
          </div>
          
          <h1 className="text-4xl md:text-5xl xl:text-7xl font-bold leading-tight">
            {titleWords.map((word, i) => (
              <span
                key={word}
                className={`inline-block opacity-0 animate-[fade-in_0.8s_ease-out_${animationDelays[i]}_forwards] ${
                  i === 1 
                    ? 'bg-gradient-to-r from-red-600 via-pink-600 to-orange-500 bg-clip-text text-transparent'
                    : 'text-gray-900'
                } ${i > 0 ? 'ml-4 lg:ml-6' : ''} drop-shadow-lg`}
                style={{ animationDelay: animationDelays[i] }}
              >
                {word}
              </span>
            ))}
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed font-medium opacity-0 animate-[fade-in_0.8s_ease-out_1.4s_forwards]">
            Transform your passion into professional skills with our world-class mentorship programs
          </p>
          
          <p className="text-sm md:text-lg text-gray-500 backdrop-blur-sm bg-white/20 inline-block px-6 py-2 rounded-full border border-gray-200/50 shadow-lg opacity-0 animate-[fade-in_0.8s_ease-out_1.7s_forwards]">
            Join thousands of successful students who've launched their music careers with us
          </p>
        </div>
      </div>
    </section>
  );
});

CoursesHero.displayName = 'CoursesHero';

export default CoursesHero;
