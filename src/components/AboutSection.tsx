
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-right">
            <div className="mb-6">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                About <span className="text-red-600">Me</span>
              </h2>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                With expertise in music production, mixing, sound design, and music theory, I've 
                dedicated my career to helping aspiring musicians unlock their creative potential.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                My journey in music production spans over a decade, working with artists across 
                various genres and helping hundreds of students master the art of music creation.
              </p>
            </div>
            
            <Button asChild className="bg-red-600 hover:bg-red-700 text-sm px-6 py-2 rounded-lg">
              <Link to="/about">Know More</Link>
            </Button>
          </div>

          {/* Right Content */}
          <div className="relative animate-slide-left">
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 h-48 bg-gradient-to-br from-gray-100 to-red-50 rounded-xl shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <div className="w-8 h-8 bg-red-600 rounded-full"></div>
                  </div>
                  <p className="text-gray-700 font-medium text-sm">Professional Music Producer</p>
                </div>
              </div>
              
              <div className="h-24 bg-gradient-to-br from-red-100 to-gray-100 rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-6 h-6 bg-red-600 rounded-full"></div>
              </div>
              <div className="h-24 bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
            </div>
            
            <div className="absolute -top-3 -right-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-md">
              ⭐ Top Rated Mentor
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
