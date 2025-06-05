
import { Button } from "@/components/ui/button";
import { Play, Star, Users, Music } from "lucide-react";
import { useState } from "react";
import DemoPopup from "./DemoPopup";

const Hero = () => {
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-red-500 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-pink-500 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 lg:px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Premium "Meet Your Mentor" Animation */}
          <div className="mb-12 animate-title-reveal">
            <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
              <span className="inline-block animate-word-slide-up text-gray-900" style={{ animationDelay: '0.1s' }}>
                Meet
              </span>
              <span className="inline-block animate-word-slide-up text-gray-900 ml-6" style={{ animationDelay: '0.3s' }}>
                Your
              </span>
              <br />
              <span className="inline-block animate-word-slide-up text-transparent bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 bg-clip-text mt-4" style={{ animationDelay: '0.5s' }}>
                Mentor
              </span>
            </h1>
          </div>
          
          <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transform your musical journey with personalized guidance from an industry expert who has shaped the careers of hundreds of successful artists.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in" style={{ animationDelay: '1s' }}>
            <Button 
              onClick={() => setIsDemoPopupOpen(true)}
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Play className="mr-2 h-5 w-5" />
              Free Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-gray-300 text-gray-700 hover:border-red-600 hover:text-red-600 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
            >
              View Courses
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center mb-3">
                <Users className="h-8 w-8 text-red-600 mr-2" />
                <span className="text-3xl font-bold text-gray-900">500+</span>
              </div>
              <p className="text-gray-600 font-medium">Students Mentored</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center mb-3">
                <Star className="h-8 w-8 text-red-600 mr-2" />
                <span className="text-3xl font-bold text-gray-900">10+</span>
              </div>
              <p className="text-gray-600 font-medium">Years Experience</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center mb-3">
                <Music className="h-8 w-8 text-red-600 mr-2" />
                <span className="text-3xl font-bold text-gray-900">200+</span>
              </div>
              <p className="text-gray-600 font-medium">Tracks Produced</p>
            </div>
          </div>
        </div>
      </div>
      
      <DemoPopup isOpen={isDemoPopupOpen} onClose={() => setIsDemoPopupOpen(false)} />
    </section>
  );
};

export default Hero;
