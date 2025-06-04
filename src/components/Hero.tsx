
import { Button } from "@/components/ui/button";
import { ArrowRight, Music, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-white to-red-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gray-900 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">
            <Star className="w-4 h-4" />
            Music Tutorship
          </div>
          
          <div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Elevate Your
              <br />
              <span className="text-red-600">Music Journey</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Ready to take your music to the next level? My personalized music 
              mentorship program is designed to help you unlock your full potential.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-6">
              <Link to="/enrollment" className="flex items-center gap-2">
                Book free demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-gray-300">
              <Link to="/courses">
                View Courses
              </Link>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="flex items-center gap-8 pt-8">
            <div>
              <div className="text-2xl font-bold text-gray-900">500+</div>
              <div className="text-sm text-gray-600">Students Taught</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">10+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">200+</div>
              <div className="text-sm text-gray-600">Tracks Produced</div>
            </div>
          </div>
        </div>

        {/* Right Content - Visual Elements */}
        <div className="relative">
          <div className="relative w-full max-w-lg mx-auto">
            {/* Main Image Placeholder */}
            <div className="w-full h-96 bg-gradient-to-br from-red-100 to-gray-100 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden">
              <Music className="w-24 h-24 text-red-600" />
              
              {/* Floating Icons */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce">
                <Music className="w-6 h-6 text-red-600" />
              </div>
              <div className="absolute bottom-4 left-4 w-10 h-10 bg-red-600 rounded-full shadow-lg flex items-center justify-center animate-pulse">
                <Star className="w-5 h-5 text-white" />
              </div>
              <div className="absolute top-1/2 -right-6 w-16 h-16 bg-gray-900 rounded-full shadow-lg flex items-center justify-center">
                <Music className="w-8 h-8 text-white" />
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-red-600 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gray-900 rounded-full opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
