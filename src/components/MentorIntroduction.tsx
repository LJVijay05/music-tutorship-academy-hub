import { memo, useCallback, useMemo } from "react";
import { OptimizedImage } from "./OptimizedImage";

const MentorIntroduction = memo(() => {
  // Memoize stats data
  const stats = useMemo(() => [
    { value: "500+", label: "Students Mentored", color: "text-red-600" },
    { value: "10M+", label: "Streams Generated", color: "text-amber-600" }
  ], []);

  // Memoize button handlers
  const handleStartJourney = useCallback(() => {
    // Smooth scroll to courses section
    const coursesSection = document.getElementById('courses-section');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleViewWork = useCallback(() => {
    // Navigate to portfolio or external link
    window.open('https://spotify.link/example', '_blank', 'noopener,noreferrer');
  }, []);
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-red-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-red-500 to-amber-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-amber-500 to-red-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Image */}
            <div className="relative group order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-white to-gray-50 p-1">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-amber-500 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-2xl overflow-hidden">
              <OptimizedImage 
                src="/assets/music-production-studio.jpg" 
                alt="Vijay - Music Producer & Educator"
                className="w-full h-[500px] lg:h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                width={600}
                height={600}
                priority
                placeholder="blur"
              />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-600 to-amber-600 text-white px-6 py-3 rounded-full shadow-lg font-semibold text-sm animate-pulse">
                10+ Years Experience
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-amber-600">Vijay</span>
                  </h1>
                  <div className="h-1 w-20 bg-gradient-to-r from-red-600 to-amber-600 rounded-full"></div>
                  <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700">
                    Music Producer & Educator
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p className="animate-fade-in">
                    With over a decade of experience in music production, mixing, sound design, and music theory, I've dedicated my career to helping aspiring musicians unlock their creative potential and achieve professional success.
                  </p>
                  
                  <p className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    My journey spans working with renowned artists across various genres, producing tracks that have reached millions of listeners, and mentoring hundreds of students who have gone on to build successful music careers.
                  </p>
                  
                  <p className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    I believe that music production is not just about technology—it's about storytelling, emotion, and connecting with your audience. Through my courses, I'll guide you through every aspect of the creative process.
                  </p>
                </div>
              </div>

              {/* Stats section */}
              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-200">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className={`text-3xl lg:text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="pt-6">
                <div className="bg-gradient-to-r from-red-50 to-amber-50 rounded-2xl p-6 border border-red-100">
                  <p className="text-gray-700 font-medium mb-4">
                    Ready to transform your musical ideas into professional productions?
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={handleStartJourney}
                      className="px-6 py-3 bg-gradient-to-r from-red-600 to-amber-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      Start Your Journey
                    </button>
                    <button 
                      onClick={handleViewWork}
                      className="px-6 py-3 border-2 border-red-300 text-red-700 font-semibold rounded-xl hover:bg-red-50 transition-all duration-300"
                    >
                      View My Work
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

MentorIntroduction.displayName = 'MentorIntroduction';

export default MentorIntroduction;