
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Music, Users, Calendar, Award, Star, ArrowRight, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-red-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-red-400/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-bl from-purple-400/20 to-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/10 to-pink-500/10 backdrop-blur-sm text-red-700 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-red-200">
              <Music className="w-4 h-4" />
              Meet Your Mentor
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              <span className="text-transparent bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 bg-clip-text">
                Expert Guidance
              </span>
              <br />
              <span className="text-gray-800">for Your Musical Journey</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Learn from a seasoned professional with 10+ years of experience in music production
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content - Image Section */}
            <div className="relative order-2 lg:order-1 animate-slide-left">
              <div className="relative group max-w-md mx-auto">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 scale-105"></div>
                
                {/* Main Image Container */}
                <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-red-100">
                  <div className="aspect-square rounded-2xl overflow-hidden relative">
                    <img
                      src="/lovable-uploads/8e4988dc-184a-4830-b569-64e9a67c6d19.png"
                      alt="Vijay - Music Producer & Educator"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Floating Music Badge */}
                  <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl animate-bounce border-3 border-white">
                    <Music className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Top Rated Badge */}
                  <div className="absolute -top-2 left-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-xl font-bold shadow-lg flex items-center gap-2 text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    Top Rated
                  </div>
                </div>

                {/* Floating Stats Cards */}
                <div className="absolute -bottom-3 -left-3 bg-gradient-to-br from-purple-500 to-blue-500 text-white rounded-xl p-3 shadow-lg">
                  <div className="text-xl font-bold">320+</div>
                  <div className="text-xs opacity-90">Students</div>
                </div>
                
                <div className="absolute -bottom-3 -right-3 bg-gradient-to-br from-green-500 to-teal-500 text-white rounded-xl p-3 shadow-lg">
                  <div className="text-xl font-bold">10+</div>
                  <div className="text-xs opacity-90">Years</div>
                </div>
              </div>
            </div>

            {/* Right Content - Text Section */}
            <div className="space-y-6 order-1 lg:order-2 animate-slide-right text-center lg:text-left">
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 leading-tight">
                  Transforming Passion into
                  <span className="text-transparent bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text"> Professional Success</span>
                </h3>
                
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                  With over a decade of experience in music production, I've dedicated my career to helping aspiring artists and producers unlock their creative potential and achieve professional success in the music industry.
                </p>
              </div>

              {/* Achievement Badges */}
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
                <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-4 border border-red-100 hover:shadow-lg transition-all duration-300 group text-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-sm font-bold text-red-600">Industry</div>
                  <div className="text-red-500 text-xs font-medium">Recognition</div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-4 border border-purple-100 hover:shadow-lg transition-all duration-300 group text-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-sm font-bold text-purple-600">Personalized</div>
                  <div className="text-purple-500 text-xs font-medium">Learning</div>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="pt-2">
                <Button asChild size="lg" className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-red-200 transition-all duration-300 hover:scale-105 group relative overflow-hidden border-0 w-full sm:w-auto">
                  <Link to="/about">
                    <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative flex items-center justify-center gap-2">
                      Learn More About Me
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
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
