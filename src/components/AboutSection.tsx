
import { Button } from "@/components/ui/button";
import { Award, Users, Star, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const achievements = [
    { icon: Award, number: "10+", label: "Years Experience" },
    { icon: Users, number: "500+", label: "Students Mentored" },
    { icon: Star, number: "200+", label: "Tracks Produced" },
    { icon: TrendingUp, number: "95%", label: "Success Rate" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                About <span className="text-red-600">Me</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                With expertise in music production, mixing, sound design, and music theory, I've 
                dedicated my career to helping aspiring musicians unlock their creative potential.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                My journey in music production spans over a decade, working with artists across 
                various genres and helping hundreds of students master the art of music creation. 
                From bedroom producers to industry professionals, I've guided talents at every level.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <achievement.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{achievement.number}</div>
                  <div className="text-sm text-gray-600">{achievement.label}</div>
                </div>
              ))}
            </div>
            
            <Button asChild className="bg-red-600 hover:bg-red-700">
              <Link to="/about">Learn More About Me</Link>
            </Button>
          </div>

          {/* Right Content - Image/Visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Main Image */}
              <div className="col-span-2 h-64 bg-gradient-to-br from-gray-100 to-red-50 rounded-2xl shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <Award className="w-16 h-16 text-red-600 mx-auto mb-4" />
                  <p className="text-gray-700 font-semibold">Professional Music Producer</p>
                </div>
              </div>
              
              {/* Side Images */}
              <div className="h-32 bg-gradient-to-br from-red-100 to-gray-100 rounded-xl shadow-lg flex items-center justify-center">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <div className="h-32 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl shadow-lg flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              ⭐ Top Rated Mentor
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
