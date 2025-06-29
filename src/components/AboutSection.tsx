
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Music, Users, Calendar, Award, Star, Play, Heart, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full blur-2xl animate-pulse"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400/40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-pink-400/40 rounded-full animate-bounce"></div>
        <div className="absolute top-60 right-20 w-1 h-1 bg-white/50 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-sm font-semibold mb-8 border border-white/20">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              Your Creative Journey Starts Here
            </div>
            <h2 className="text-6xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text">
                Meet Your
              </span>
              <br />
              <span className="text-white">Mentor</span>
            </h2>
            <div className="w-40 h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          {/* Main Content - Split Screen Design */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Image Section */}
            <div className="relative animate-slide-right">
              <div className="relative group">
                {/* Main Image Container */}
                <div className="relative">
                  {/* Glow Effect Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 scale-110"></div>
                  
                  {/* Image Frame */}
                  <div className="relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                    <div className="aspect-square rounded-2xl overflow-hidden relative">
                      <img
                        src="/lovable-uploads/8e4988dc-184a-4830-b569-64e9a67c6d19.png"
                        alt="Vijay - Music Producer & Educator"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    </div>
                    
                    {/* Floating Music Badge */}
                    <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl animate-bounce border-4 border-white/20">
                      <Music className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Top Rated Badge */}
                    <div className="absolute -top-4 left-8 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-6 py-3 rounded-2xl font-bold shadow-xl animate-pulse flex items-center gap-2">
                      <Star className="w-5 h-5 fill-current" />
                      Top Rated
                    </div>
                  </div>

                  {/* Floating Stats Cards */}
                  <div className="absolute -right-12 top-1/4 bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 animate-float">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <Users className="w-6 h-6 text-purple-300" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-white">320+</div>
                        <div className="text-purple-200 text-sm font-medium">Students</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -left-12 bottom-1/4 bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 animate-float-delayed">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-cyan-300" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-white">10+</div>
                        <div className="text-cyan-200 text-sm font-medium">Years</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content Section */}
            <div className="space-y-8 animate-slide-left">
              <div className="space-y-8">
                <h3 className="text-5xl font-bold leading-tight">
                  <span className="text-white">Transforming</span>
                  <br />
                  <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                    Musical Dreams
                  </span>
                  <br />
                  <span className="text-white">into Reality</span>
                </h3>
                
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
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
                
                {/* Achievement Badges */}
                <div className="grid grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Award className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">Industry</div>
                        <div className="text-purple-200 font-medium">Recognition</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Heart className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">Passionate</div>
                        <div className="text-cyan-200 font-medium">Teaching</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Call to Action */}
              <div className="pt-8 animate-fade-in" style={{ animationDelay: '1s' }}>
                <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-700 hover:via-pink-700 hover:to-cyan-700 text-white text-xl px-16 py-8 rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105 group relative overflow-hidden border-0">
                  <Link to="/about">
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative flex items-center gap-4">
                      Discover My Journey
                      <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
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
