
import { Button } from "@/components/ui/button";
import { ArrowRight, Music, Star, Play, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-white to-red-50 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-red-600 to-pink-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 pt-24">
        {/* Left Content */}
        <div className="space-y-10 animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-100 to-pink-100 text-red-800 px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-red-200">
            <Star className="w-5 h-5 animate-pulse" />
            Professional Music Tutorship
          </div>
          
          <div className="space-y-8">
            <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
              <span className="inline-block animate-fade-in" style={{ animationDelay: '0.2s' }}>Elevate Your</span>
              <br />
              <span className="text-transparent bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 bg-clip-text inline-block animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Music Journey
              </span>
            </h1>
            <p className="text-2xl text-gray-600 leading-relaxed max-w-2xl animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Ready to take your music to the next level? My personalized music 
              mentorship program is designed to help you unlock your full creative potential and master professional production techniques.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button asChild size="lg" className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-xl px-12 py-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-2xl">
              <Link to="/enrollment" className="flex items-center gap-3">
                <Play className="w-6 h-6" />
                Book Free Demo
                <ArrowRight className="w-6 h-6" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-xl px-12 py-8 border-2 border-gray-300 hover:border-red-300 hover:bg-red-50 transition-all duration-300 hover:scale-105 rounded-2xl">
              <Link to="/courses" className="flex items-center gap-3">
                <Headphones className="w-6 h-6" />
                View Courses
              </Link>
            </Button>
          </div>
          
          {/* Enhanced Stats */}
          <div className="flex items-center gap-12 pt-12 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="text-center group">
              <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">500+</div>
              <div className="text-lg text-gray-600 font-medium">Students Taught</div>
            </div>
            <div className="w-px h-16 bg-gray-200"></div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">10+</div>
              <div className="text-lg text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="w-px h-16 bg-gray-200"></div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">200+</div>
              <div className="text-lg text-gray-600 font-medium">Tracks Produced</div>
            </div>
          </div>
        </div>

        {/* Enhanced Right Content */}
        <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="relative w-full max-w-2xl mx-auto">
            {/* Main Visual */}
            <div className="w-full h-[600px] bg-gradient-to-br from-red-100 via-pink-100 to-purple-100 rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden group hover:shadow-red-200 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-pink-500/20 group-hover:from-red-500/30 group-hover:to-pink-500/30 transition-all duration-500"></div>
              
              {/* Center Icon */}
              <div className="relative z-10 text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-red-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:scale-110 transition-all duration-500">
                  <Music className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Professional Music Production</h3>
                <p className="text-xl text-gray-600 max-w-md">Learn from industry experts and transform your musical vision into reality</p>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-8 right-8 w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center animate-bounce hover:scale-110 transition-transform duration-300">
                <Music className="w-8 h-8 text-red-600" />
              </div>
              <div className="absolute bottom-8 left-8 w-14 h-14 bg-gradient-to-r from-red-600 to-pink-600 rounded-full shadow-xl flex items-center justify-center animate-pulse hover:scale-110 transition-transform duration-300">
                <Star className="w-7 h-7 text-white" />
              </div>
              <div className="absolute top-1/2 -right-8 w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Headphones className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-4 left-1/4 w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full shadow-lg flex items-center justify-center animate-pulse hover:scale-110 transition-transform duration-300">
                <Play className="w-6 h-6 text-white" />
              </div>
            </div>
            
            {/* Enhanced Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-r from-red-600 to-pink-600 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-15 animate-bounce"></div>
            <div className="absolute top-1/4 -left-12 w-24 h-24 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full opacity-25 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
