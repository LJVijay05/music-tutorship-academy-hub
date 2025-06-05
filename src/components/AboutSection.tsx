
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Music, ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-6xl lg:text-7xl font-extralight mb-8">
              About <span className="text-transparent bg-gradient-to-r from-red-600 to-red-700 bg-clip-text font-light">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-700 mx-auto rounded-full"></div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-xl text-gray-700 leading-relaxed font-light">
                  With expertise in music production, mixing, sound design, and music theory, I've 
                  dedicated my career to helping aspiring musicians unlock their creative potential through 
                  professional music producer mentorship.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed font-light">
                  My journey in music production spans over 15 years, working with artists across 
                  various genres and helping 320+ students trained master the art of music creation 
                  using Logic Pro and Ableton Live.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed font-light">
                  Through personalized mentorship and innovative teaching methods, I guide students 
                  on a transformative journey in India's top online music production training, 
                  going beyond just learning software to truly understanding the art and science of music production.
                </p>
              </div>
              
              <div className="pt-8">
                <Button asChild className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-4 rounded-2xl font-semibold transition-all duration-300 apple-button shadow-xl hover:shadow-red-500/25 text-lg">
                  <Link to="/about">
                    Know More
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Content - Professional Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-10 shadow-2xl border border-red-200 apple-card">
                <div className="text-center">
                  <div className="w-28 h-28 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl apple-button">
                    <Music className="w-14 h-14 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">Professional Mentor</h3>
                  <p className="text-xl text-gray-600 mb-10">Music Producer & Educator</p>
                  
                  {/* Achievement Badges */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 apple-card">
                      <div className="text-3xl font-bold text-red-600">320+</div>
                      <div className="text-base text-gray-600 font-medium">Students Trained</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 apple-card">
                      <div className="text-3xl font-bold text-red-600">15+</div>
                      <div className="text-base text-gray-600 font-medium">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full text-base font-bold shadow-2xl apple-button">
                ⭐ Top Rated
              </div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-red-500 rounded-full opacity-60 animate-float"></div>
              <div className="absolute top-12 -left-4 w-6 h-6 bg-red-600 rounded-full opacity-40 music-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
