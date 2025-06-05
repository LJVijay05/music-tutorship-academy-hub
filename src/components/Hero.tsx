
import { Button } from "@/components/ui/button";
import { ArrowRight, Music, Star, Play, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-white to-red-50 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-red-600 to-pink-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-3xl animate-bounce"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 pt-20">
        {/* Left Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-100 to-pink-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 border border-red-200">
            <Star className="w-4 h-4 animate-pulse" />
            Professional Music Tutorship
          </div>
          
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              <span className="inline-block animate-slide-down" style={{ animationDelay: '0.2s' }}>Elevate Your</span>
              <br />
              <span className="text-transparent bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 bg-clip-text inline-block animate-slide-down" style={{ animationDelay: '0.4s' }}>
                Music Journey
              </span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl animate-slide-down" style={{ animationDelay: '0.6s' }}>
              Ready to take your music to the next level? My personalized music 
              mentorship program is designed to help you unlock your full creative potential.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <Button asChild size="lg" className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-base px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-xl">
              <Link to="/enrollment" className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Book Free Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 py-3 border-2 border-gray-300 hover:border-red-300 hover:bg-red-50 transition-all duration-300 hover:scale-105 rounded-xl">
              <Link to="/courses" className="flex items-center gap-2">
                <Headphones className="w-5 h-5" />
                View Courses
              </Link>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="flex items-center gap-8 pt-8 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="text-center group">
              <div className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors duration-300">500+</div>
              <div className="text-sm text-gray-600 font-medium">Students Taught</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center group">
              <div className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors duration-300">10+</div>
              <div className="text-sm text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center group">
              <div className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors duration-300">200+</div>
              <div className="text-sm text-gray-600 font-medium">Tracks Produced</div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="relative w-full max-w-lg mx-auto">
            {/* Main Visual */}
            <div className="w-full h-96 bg-gradient-to-br from-red-100 via-pink-100 to-purple-100 rounded-2xl shadow-xl flex items-center justify-center relative overflow-hidden group hover:shadow-red-200 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-pink-500/10 group-hover:from-red-500/20 group-hover:to-pink-500/20 transition-all duration-500"></div>
              
              {/* Center Icon */}
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-all duration-500">
                  <Music className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Professional Music Production</h3>
                <p className="text-sm text-gray-600 max-w-xs">Learn from industry experts and transform your musical vision</p>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce hover:scale-110 transition-transform duration-300">
                <Music className="w-6 h-6 text-red-600" />
              </div>
              <div className="absolute bottom-6 left-6 w-10 h-10 bg-gradient-to-r from-red-600 to-pink-600 rounded-full shadow-lg flex items-center justify-center animate-pulse hover:scale-110 transition-transform duration-300">
                <Star className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
