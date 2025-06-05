
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-slide-right">
            <div className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                About <span className="text-red-600">Me</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                With expertise in music production, mixing, sound design, and music theory, I've 
                dedicated my career to helping aspiring musicians unlock their creative potential.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                My journey in music production spans over a decade, working with artists across 
                various genres and helping hundreds of students master the art of music creation.
              </p>
            </div>
            
            <Button asChild className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
              <Link to="/about">Know More</Link>
            </Button>
          </div>

          {/* Right Content - Single Image with Splash Background */}
          <div className="relative animate-slide-left">
            {/* Splash Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Red splashes */}
              <div className="absolute top-4 right-8 w-12 h-12 bg-red-500 rounded-full opacity-80"></div>
              <div className="absolute top-16 right-20 w-6 h-6 bg-red-400 rounded-full opacity-60"></div>
              <div className="absolute bottom-20 left-4 w-8 h-8 bg-red-600 rounded-full opacity-70"></div>
              <div className="absolute top-32 left-12 w-4 h-4 bg-red-500 rounded-full opacity-50"></div>
              
              {/* Black splashes */}
              <div className="absolute top-8 left-16 w-10 h-10 bg-gray-900 rounded-full opacity-60"></div>
              <div className="absolute bottom-32 right-12 w-14 h-14 bg-gray-800 rounded-full opacity-40"></div>
              <div className="absolute bottom-8 right-24 w-5 h-5 bg-gray-900 rounded-full opacity-70"></div>
              
              {/* Abstract splash shapes */}
              <div className="absolute top-20 right-4 w-16 h-4 bg-red-500 rounded-full transform rotate-45 opacity-60"></div>
              <div className="absolute bottom-16 left-8 w-12 h-3 bg-gray-900 rounded-full transform -rotate-30 opacity-50"></div>
            </div>
            
            {/* Main Image Container */}
            <div className="relative z-10 bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group">
              <div className="aspect-square bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl flex items-center justify-center relative overflow-hidden hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-pink-500/10 group-hover:from-red-500/20 group-hover:to-pink-500/20 transition-all duration-500"></div>
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500">
                    <div className="w-12 h-12 bg-red-600 rounded-full"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Professional Mentor</h3>
                  <p className="text-gray-600 font-medium">Music Producer & Educator</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg z-20">
              ⭐ Top Rated
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
