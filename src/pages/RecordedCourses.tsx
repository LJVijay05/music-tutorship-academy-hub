
import { useEffect, useState } from "react";
import { ArrowLeft, PlayCircle, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const RecordedCourses = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50">
      <Navigation />
      
      <main className="pt-16 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 py-20">
          <div className={`text-center space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            
            {/* Animated Icon */}
            <div className="relative">
              <div className="w-32 h-32 mx-auto mb-8 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600 rounded-full animate-pulse"></div>
                <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                  <PlayCircle className="w-16 h-16 text-red-600 animate-bounce" />
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-6 h-6 bg-yellow-400 rounded-full animate-ping delay-300"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-400 rounded-full animate-ping delay-500"></div>
                <div className="absolute top-1/2 -right-8 w-3 h-3 bg-green-400 rounded-full animate-ping delay-700"></div>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-6 max-w-2xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                <span className="block">Coming</span>
                <span className="text-transparent bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text animate-pulse">
                  Soon
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                We're crafting an amazing collection of recorded music production courses. 
                Get ready for high-quality, comprehensive lessons you can access anytime, anywhere.
              </p>

              {/* Feature Preview Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <Clock className="w-8 h-8 text-red-600 mb-4 mx-auto" />
                  <h3 className="font-semibold text-gray-900 mb-2">Learn at Your Pace</h3>
                  <p className="text-sm text-gray-600">Access courses 24/7 and learn whenever it suits you</p>
                </div>
                
                <div className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 delay-100">
                  <Star className="w-8 h-8 text-red-600 mb-4 mx-auto" />
                  <h3 className="font-semibold text-gray-900 mb-2">Premium Quality</h3>
                  <p className="text-sm text-gray-600">High-definition video lessons with crystal clear audio</p>
                </div>
                
                <div className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 delay-200">
                  <PlayCircle className="w-8 h-8 text-red-600 mb-4 mx-auto" />
                  <h3 className="font-semibold text-gray-900 mb-2">Comprehensive</h3>
                  <p className="text-sm text-gray-600">From basics to advanced techniques, all in one place</p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-12 space-y-4">
                <p className="text-gray-600">
                  Want to get notified when we launch? Join our live mentorship courses in the meantime!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link 
                    to="/courses"
                    className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Explore Live Courses
                  </Link>
                  
                  <Link 
                    to="/"
                    className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors duration-300"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>

            {/* Animated Background Elements */}
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl animate-pulse delay-1500"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RecordedCourses;
