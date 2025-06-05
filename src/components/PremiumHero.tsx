
import { Button } from "@/components/ui/button";
import { Play, ChevronDown } from "lucide-react";
import { useState } from "react";

const PremiumHero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-red-50">
      {/* Background Video/Animation Container */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
        <img 
          src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&h=1080&fit=crop" 
          alt="Professional Music Production Studio - India's Top Online Music Production Training"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Premium Badge */}
          <div className="inline-flex items-center px-8 py-4 glass-morphism rounded-full text-white text-lg font-medium mb-12 hover:bg-white/20 transition-all duration-500 apple-fade-in">
            India's #1 Music Production Training Platform
          </div>

          {/* Main Headline - SEO Optimized */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight leading-tight mb-10 apple-slide-up">
            <span className="block text-white drop-shadow-2xl">Master the Art of</span>
            <span className="block bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent font-light">
              Music Production
            </span>
          </h1>

          {/* Subtitle - SEO Keywords Integrated */}
          <p className="text-2xl md:text-3xl text-white/95 font-light leading-relaxed mb-16 max-w-4xl mx-auto apple-fade-in" style={{ animationDelay: '0.3s' }}>
            Learn Logic Pro and Ableton Live with professional music producer mentorship. Join 320+ creators who trusted us to launch their career.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20 apple-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg"
              className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-6 text-xl font-medium rounded-2xl shadow-2xl hover:shadow-red-500/25 transition-all duration-500 apple-button border-0"
              onClick={() => setIsVideoPlaying(true)}
            >
              <Play className="mr-4 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              Watch Course Preview
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="glass-morphism border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 px-12 py-6 text-xl font-medium rounded-2xl transition-all duration-500 apple-button"
            >
              View Course Details
            </Button>
          </div>

          {/* Stats - Updated Numbers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto apple-fade-in" style={{ animationDelay: '0.9s' }}>
            <div className="text-center p-8 glass-morphism rounded-3xl border border-white/30 apple-card">
              <div className="text-4xl font-light text-white mb-3">320+</div>
              <div className="text-white/90 font-light text-lg">Students Trained</div>
            </div>
            <div className="text-center p-8 glass-morphism rounded-3xl border border-white/30 apple-card">
              <div className="text-4xl font-light text-white mb-3">15+</div>
              <div className="text-white/90 font-light text-lg">Years Experience</div>
            </div>
            <div className="text-center p-8 glass-morphism rounded-3xl border border-white/30 apple-card">
              <div className="text-4xl font-light text-white mb-3">98%</div>
              <div className="text-white/90 font-light text-lg">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 apple-fade-in" style={{ animationDelay: '1.2s' }}>
        <ChevronDown className="w-8 h-8 text-white/80 animate-bounce" />
      </div>
    </section>
  );
};

export default PremiumHero;
