
import { Button } from "@/components/ui/button";
import { Play, ChevronDown } from "lucide-react";
import { useState } from "react";

const PremiumHero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Background Video/Animation Container */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
        <img 
          src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&h=1080&fit=crop" 
          alt="Music Production Studio"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Premium Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium mb-8 hover:bg-white/20 transition-all duration-500">
            Professional Music Academy
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight leading-tight mb-8">
            <span className="block text-white drop-shadow-2xl">Master the Art of</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-light">
              Music Production
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-12 max-w-3xl mx-auto">
            Transform your passion into professional expertise with our world-class mentorship programs
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg"
              className="group bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-medium rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 border-0"
              onClick={() => setIsVideoPlaying(true)}
            >
              <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              Watch Preview
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 text-lg font-medium rounded-full backdrop-blur-md transition-all duration-500 hover:scale-105"
            >
              Explore Courses
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <div className="text-3xl font-light text-white mb-2">500+</div>
              <div className="text-white/80 font-light">Students Mentored</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <div className="text-3xl font-light text-white mb-2">15+</div>
              <div className="text-white/80 font-light">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <div className="text-3xl font-light text-white mb-2">98%</div>
              <div className="text-white/80 font-light">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ChevronDown className="w-6 h-6 text-white/70 animate-bounce" />
      </div>
    </section>
  );
};

export default PremiumHero;
