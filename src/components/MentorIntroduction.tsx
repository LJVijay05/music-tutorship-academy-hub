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
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center">
            {/* Centered Image Section */}
            <div className="relative group max-w-2xl">
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
          </div>
        </div>
      </div>
    </section>
  );
});

MentorIntroduction.displayName = 'MentorIntroduction';

export default MentorIntroduction;