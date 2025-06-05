
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Users, Music, Star } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Students Taught" },
    { icon: Star, number: "10+", label: "Years Experience" },
    { icon: Music, number: "200+", label: "Tracks Produced" },
    { icon: Award, number: "50+", label: "Industry Awards" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              About <span className="text-red-600">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-pink-600 mx-auto rounded-full"></div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  With expertise in music production, mixing, sound design, and music theory, I've 
                  dedicated my career to helping aspiring musicians unlock their creative potential.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  My journey in music production spans over a decade, working with artists across 
                  various genres and helping hundreds of students master the art of music creation.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Through personalized mentorship and innovative teaching methods, I guide students 
                  on a transformative journey that goes beyond just learning software to truly 
                  understanding the art and science of music production.
                </p>
              </div>
              
              <div className="pt-6">
                <Button asChild className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  <Link to="/about">Know More</Link>
                </Button>
              </div>
            </div>

            {/* Right Content - Professional Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-8 shadow-xl border border-red-100">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-red-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <Music className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Professional Mentor</h3>
                  <p className="text-lg text-gray-600 mb-8">Music Producer & Educator</p>
                  
                  {/* Achievement Badges */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                      <div className="text-2xl font-bold text-red-600">500+</div>
                      <div className="text-sm text-gray-600">Students</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                      <div className="text-2xl font-bold text-red-600">10+</div>
                      <div className="text-sm text-gray-600">Years Exp</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                ⭐ Top Rated
              </div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-red-500 rounded-full opacity-60"></div>
              <div className="absolute top-8 -left-2 w-4 h-4 bg-pink-500 rounded-full opacity-40"></div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-shadow duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
