
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Music, Users, Calendar, Award, Star, Play } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-red-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-red-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-3 bg-red-100 text-red-700 px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <Music className="w-4 h-4" />
              Meet Your Mentor
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              About <span className="text-transparent bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 bg-clip-text">Me</span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-red-600 to-pink-600 mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
            {/* Left Content - Image Section */}
            <div className="relative animate-slide-right">
              <div className="relative group">
                {/* Main Image Container */}
                <div className="relative w-full max-w-lg mx-auto">
                  {/* Decorative Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-200 via-pink-200 to-purple-200 rounded-3xl transform rotate-6 group-hover:rotate-3 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-red-100 via-pink-100 to-purple-100 rounded-3xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
                  
                  {/* Image */}
                  <div className="relative bg-white rounded-3xl p-8 shadow-2xl group-hover:shadow-red-200 transition-all duration-500">
                    <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src="/lovable-uploads/8e4988dc-184a-4830-b569-64e9a67c6d19.png"
                        alt="Vijay - Music Producer & Educator"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Floating Badge */}
                    <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-2xl font-bold shadow-xl animate-bounce-in flex items-center gap-2">
                      <Star className="w-5 h-5 fill-current" />
                      Top Rated
                    </div>
                    
                    {/* Music Note Decoration */}
                    <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl">
                      <Music className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Floating Stats */}
                  <div className="absolute -right-8 top-1/4 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 animate-float-delayed">
                    <div className="flex items-center gap-3 mb-2">
                      <Users className="w-6 h-6 text-red-500" />
                      <span className="text-2xl font-bold text-red-600">320+</span>
                    </div>
                    <p className="text-sm text-gray-600 font-medium">Happy Students</p>
                  </div>
                  
                  <div className="absolute -left-8 bottom-1/4 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 animate-float">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-6 h-6 text-purple-500" />
                      <span className="text-2xl font-bold text-purple-600">10+</span>
                    </div>
                    <p className="text-sm text-gray-600 font-medium">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Text Section */}
            <div className="space-y-10 animate-slide-left">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h3 className="text-4xl font-bold text-gray-800 leading-tight">
                    Transforming Musical Dreams into 
                    <span className="text-transparent bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text"> Reality</span>
                  </h3>
                  
                  <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                    <p className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                      With over a decade of experience in music production, mixing, sound design, and music theory, I've dedicated my career to helping aspiring musicians unlock their creative potential and achieve professional success.
                    </p>
                    
                    <p className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                      My journey spans working with renowned artists across various genres, producing tracks that have reached millions of listeners, and mentoring hundreds of students who have gone on to build successful music careers.
                    </p>
                    
                    <p className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
                      Through personalized mentorship and innovative teaching methods, I guide students on a transformative journey that goes beyond just learning software to truly understanding the art, science, and business of music creation.
                    </p>
                  </div>
                </div>
                
                {/* Achievement Highlights */}
                <div className="grid grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-red-100 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center group-hover:bg-red-200 transition-colors">
                        <Award className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-red-600">Industry</div>
                        <div className="text-sm text-gray-600 font-medium">Recognition</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                        <Play className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-600">Live</div>
                        <div className="text-sm text-gray-600 font-medium">Sessions</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Call to Action */}
              <div className="pt-8 animate-fade-in" style={{ animationDelay: '1s' }}>
                <Button asChild size="lg" className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white text-xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-red-200 transition-all duration-500 hover:scale-105 group relative overflow-hidden">
                  <Link to="/about">
                    <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative flex items-center gap-3">
                      Know More About My Journey
                      <Music className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
