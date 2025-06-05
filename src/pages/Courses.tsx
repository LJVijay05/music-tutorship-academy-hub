
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, User, Clock, Star, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CourseDetailsModal from "@/components/CourseDetailsModal";

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const batchFeatures = [
    "15 students per batch",
    "12 weeks intensive program",
    "Live weekly sessions",
    "Group collaboration projects",
    "Industry-standard software training",
    "Certificate upon completion"
  ];

  const oneOnOneFeatures = [
    "Personalized curriculum",
    "Flexible scheduling",
    "Direct mentor feedback",
    "Custom project development",
    "Industry networking opportunities",
    "Lifetime support access"
  ];

  const handleDetailsClick = (courseId: string) => {
    setSelectedCourse(courseId);
    setIsModalOpen(true);
  };

  const getCourseTitle = (courseId: string) => {
    return courseId === "production-course" 
      ? "Complete Music Production Course"
      : "One-on-One Music Production Mentorship";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-orange-600/5"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-6 animate-fade-in">
                <Star className="w-4 h-4 mr-2" />
                Professional Music Education
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent animate-title-reveal">
                Master Music <span className="text-gray-900">Production</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
                Transform your passion into professional skills with our world-class mentorship programs
              </p>
              <p className="text-lg text-gray-500 animate-fade-in" style={{ animationDelay: '400ms' }}>
                Join thousands of successful students who've launched their music careers with us
              </p>
            </div>
          </div>
        </section>

        {/* Course Selection */}
        <section className="py-20 relative" aria-labelledby="courses-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="courses-heading" className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Choose Your Learning Path
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Whether you prefer collaborative learning or personalized attention, we have the perfect program for you
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {/* Batch Mentorship */}
              <article className="group">
                <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl h-full bg-white hover:-translate-y-2 relative">
                  {/* Popular Badge */}
                  <div className="absolute top-6 left-6 z-10">
                    <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                      <Star className="w-4 h-4 fill-current" />
                      MOST POPULAR
                    </div>
                  </div>

                  <header className="h-64 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="text-center">
                        <Users className="w-20 h-20 text-white mb-4 mx-auto opacity-90" />
                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-3">
                          <span className="text-white font-semibold text-lg">Group Learning</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </header>

                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">Complete Music Production Course</h3>
                      <p className="text-gray-600 mb-2">Comprehensive live course experience</p>
                      <p className="text-sm text-red-600 font-semibold bg-red-50 px-3 py-1 rounded-full inline-block">
                        From Beginner to Advanced Level
                      </p>
                    </div>
                    
                    <div className="flex-grow">
                      <ul className="space-y-4 mb-8">
                        {batchFeatures.map((feature, index) => (
                          <li key={index} className="flex items-center gap-3 group/item">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                            <span className="text-gray-700 font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex items-center gap-3 mb-8 p-4 bg-red-50 rounded-2xl border border-red-100">
                        <Clock className="w-6 h-6 text-red-600" />
                        <div>
                          <p className="font-semibold text-red-700">Limited Time Offer</p>
                          <p className="text-sm text-red-600">Enroll for 1 Year & Get 15% Off!</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <Button 
                        variant="outline" 
                        className="flex-1 border-2 border-red-600 text-red-600 hover:bg-red-50 group/btn transition-all duration-300 h-12 rounded-xl font-semibold" 
                        onClick={() => handleDetailsClick("production-course")}
                      >
                        <Info className="w-5 h-5 mr-2 group-hover/btn:scale-110 transition-transform" />
                        View Details
                      </Button>
                      <Button 
                        className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-12 rounded-xl font-semibold" 
                        asChild
                      >
                        <Link to="/enrollment">
                          Enroll Now
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </article>

              {/* One-on-One Mentorship */}
              <article className="group">
                <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl h-full bg-white hover:-translate-y-2 relative ring-2 ring-amber-200">
                  {/* Premium Badge */}
                  <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden z-20">
                    <div className="absolute top-3 right-[-32px] bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-8 py-2 text-xs font-bold transform rotate-45 shadow-lg">
                      FLAGSHIP
                    </div>
                  </div>

                  <header className="h-64 bg-gradient-to-br from-amber-600 via-red-600 to-red-700 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="text-center">
                        <User className="w-20 h-20 text-white mb-4 mx-auto opacity-90" />
                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-3">
                          <span className="text-white font-semibold text-lg">1-on-1 Mentorship</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </header>

                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">One-on-One Music Production Mentorship</h3>
                      <p className="text-gray-600 mb-2">Personalized mentorship experience</p>
                      <p className="text-sm text-amber-700 font-semibold bg-amber-50 px-3 py-1 rounded-full inline-block">
                        Master the complete journey of music production
                      </p>
                    </div>
                    
                    <div className="flex-grow">
                      <ul className="space-y-4 mb-8">
                        {oneOnOneFeatures.map((feature, index) => (
                          <li key={index} className="flex items-center gap-3 group/item">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                            <span className="text-gray-700 font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex items-center gap-3 mb-8 p-4 bg-amber-50 rounded-2xl border border-amber-200">
                        <Clock className="w-6 h-6 text-amber-600" />
                        <div>
                          <p className="font-semibold text-amber-700">Exclusive Offer</p>
                          <p className="text-sm text-amber-600">Enroll for 1 Year & Get 20% Off!</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <Button 
                        variant="outline" 
                        className="flex-1 border-2 border-amber-500 text-amber-600 hover:bg-amber-50 group/btn transition-all duration-300 h-12 rounded-xl font-semibold" 
                        onClick={() => handleDetailsClick("mentorship-90")}
                      >
                        <Info className="w-5 h-5 mr-2 group-hover/btn:scale-110 transition-transform" />
                        View Details
                      </Button>
                      <Button 
                        className="flex-1 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-12 rounded-xl font-semibold" 
                        asChild
                      >
                        <Link to="/enrollment">
                          Enroll Now
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </article>
            </div>

            {/* Trust Indicators */}
            <div className="mt-20 text-center">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">1000+</div>
                  <div className="text-gray-600">Students Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">95%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                  <div className="text-gray-600">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">5★</div>
                  <div className="text-gray-600">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Course Details Modal */}
      {selectedCourse && (
        <CourseDetailsModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          courseId={selectedCourse}
          courseTitle={getCourseTitle(selectedCourse)}
        />
      )}
    </div>
  );
};

export default Courses;
