
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
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-red-50 to-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Course <span className="text-red-600">Details</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Register for our music tutorship program and become a student at our school.
            </p>
            <p className="text-lg text-gray-500">
              Fill out the form below to start your musical journey with us.
            </p>
          </div>
        </section>

        {/* Course Selection */}
        <section className="py-20" aria-labelledby="courses-heading">
          <div className="container mx-auto px-4">
            <h2 id="courses-heading" className="sr-only">Available Music Production Courses</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Batch Mentorship */}
              <article className="course-card">
                <Card className="overflow-hidden border-2 hover:border-red-200 transition-all duration-300 hover:shadow-xl rounded-3xl h-full">
                  <header className="h-48 bg-gradient-to-br from-gray-900 to-gray-700 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <Users className="w-16 h-16 text-white" aria-hidden="true" />
                    </div>
                  </header>
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-2xl font-bold mb-2">Complete Music Production Course</h3>
                    <p className="text-gray-600 mb-4">Complete Music Production Live Course</p>
                    <p className="text-sm text-red-600 mb-4">(From Beginner to Advanced Level)</p>
                    
                    <ul className="space-y-3 mb-6 flex-grow" role="list">
                      {batchFeatures.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" aria-hidden="true" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center gap-2 mb-6">
                      <Clock className="w-5 h-5 text-red-600" aria-hidden="true" />
                      <span className="text-sm text-gray-600">Enroll for 1 Year & Get 15% Off!</span>
                    </div>
                    
                    <div className="flex gap-3 mt-auto">
                      <Button 
                        variant="outline" 
                        className="flex-1 border-red-600 text-red-600 hover:bg-red-50 group transition-all duration-300" 
                        onClick={() => handleDetailsClick("production-course")}
                      >
                        <Info className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                        Details
                      </Button>
                      <Button 
                        className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5" 
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
              <article className="course-card">
                <Card className="overflow-hidden border-2 hover:border-red-200 transition-all duration-300 hover:shadow-xl rounded-3xl h-full">
                  <header className="h-48 bg-gradient-to-br from-red-900 to-red-700 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <User className="w-16 h-16 text-white" aria-hidden="true" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                        <Star className="w-4 h-4" aria-hidden="true" />
                        FLAGSHIP
                      </div>
                    </div>
                  </header>
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-2xl font-bold mb-2">One-on-One Music Production Mentorship</h3>
                    <p className="text-gray-600 mb-4">Personalised mentorship sessions</p>
                    <p className="text-sm text-red-600 mb-4">(Master the complete journey of music production)</p>
                    
                    <ul className="space-y-3 mb-6 flex-grow" role="list">
                      {oneOnOneFeatures.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" aria-hidden="true" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center gap-2 mb-6">
                      <Clock className="w-5 h-5 text-red-600" aria-hidden="true" />
                      <span className="text-sm text-gray-600">Enroll for 1 Year & Get 20% Off!</span>
                    </div>
                    
                    <div className="flex gap-3 mt-auto">
                      <Button 
                        variant="outline" 
                        className="flex-1 border-amber-500 text-amber-600 hover:bg-amber-50 group transition-all duration-300" 
                        onClick={() => handleDetailsClick("mentorship-90")}
                      >
                        <Info className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                        Details
                      </Button>
                      <Button 
                        className="flex-1 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5" 
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
