
import { Button } from "@/components/ui/button";
import { Music } from "lucide-react";
import { Link } from "react-router-dom";

const MentorIntroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-red-50 relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-red-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-600 rounded-full blur-3xl animate-bounce"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 animate-fade-in">
            <h1 className="text-6xl lg:text-8xl font-bold mb-10 leading-tight">
              <span className="text-transparent bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 bg-clip-text">Meet Your Mentor</span>
            </h1>
            <p className="text-2xl lg:text-3xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
              Transform your musical journey with personalized guidance from an industry expert who has shaped the careers of hundreds of successful artists.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
            {/* Left Content */}
            <div className="space-y-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
                <p className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  With over a decade of experience in music production, I've dedicated my career to helping aspiring artists and producers unlock their creative potential.
                </p>
                <p className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
                  My journey began in the underground music scene, where I developed a deep understanding of what makes music truly resonate with audiences. Having worked with renowned artists and produced tracks that have reached millions of listeners, I bring real-world industry experience to every lesson.
                </p>
                <p className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
                  My approach combines technical excellence with creative freedom, ensuring that each student develops their unique sound while mastering professional production techniques. I believe that music production is not just about technology—it's about storytelling, emotion, and connecting with your audience.
                </p>
                <p className="animate-fade-in" style={{ animationDelay: '1s' }}>
                  Through personalized mentorship, I guide students on a transformative journey that goes beyond just learning software to truly understanding the art and science of music creation.
                </p>
              </div>
              
              <div className="pt-10 animate-fade-in" style={{ animationDelay: '1.2s' }}>
                <Button asChild size="lg" className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-xl px-16 py-8 shadow-2xl hover:shadow-red-200 transition-all duration-500 hover:animate-button-smooth-hover active:animate-button-press rounded-2xl relative overflow-hidden group">
                  <Link to="/courses">
                    <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative">Start Your Journey</span>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Content - Image Space */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="bg-gradient-to-br from-red-100 via-pink-100 to-purple-100 rounded-3xl p-16 shadow-2xl hover:shadow-red-200 transition-all duration-500 group">
                <div className="aspect-square bg-gradient-to-br from-red-200 to-pink-200 rounded-3xl flex items-center justify-center relative overflow-hidden hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-pink-500/20 group-hover:from-red-500/30 group-hover:to-pink-500/30 transition-all duration-500"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                      <Music className="w-16 h-16 text-red-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">Professional Mentor</h3>
                    <p className="text-xl text-gray-600">Industry Expert & Producer</p>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-20 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorIntroSection;
