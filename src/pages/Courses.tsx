
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, User, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Courses = () => {
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

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20">
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
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Batch Mentorship */}
              <Card className="overflow-hidden border-2 hover:border-red-200 transition-all duration-300 hover:shadow-xl rounded-3xl">
                <div className="h-48 bg-gradient-to-br from-gray-900 to-gray-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Music Production Batch Mentorship</h3>
                  <p className="text-gray-600 mb-4">Complete Music Production Live Course</p>
                  <p className="text-sm text-red-600 mb-4">(From Beginner to Advanced Level)</p>
                  
                  <div className="space-y-3 mb-6">
                    {batchFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2 mb-6">
                    <Clock className="w-5 h-5 text-red-600" />
                    <span className="text-sm text-gray-600">Enroll for 1 Year & Get 15% Off!</span>
                  </div>
                  
                  <Button className="w-full bg-red-600 hover:bg-red-700" size="lg">
                    <Link to="/enrollment" className="w-full">
                      Enquire Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* One-on-One Mentorship */}
              <Card className="overflow-hidden border-2 hover:border-red-200 transition-all duration-300 hover:shadow-xl rounded-3xl">
                <div className="h-48 bg-gradient-to-br from-red-900 to-red-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <User className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      FLAGSHIP
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">One-on-One Music Production Mentorship</h3>
                  <p className="text-gray-600 mb-4">Personalized 90MIN Sessions</p>
                  <p className="text-sm text-red-600 mb-4">(Master the complete journey of music production)</p>
                  
                  <div className="space-y-3 mb-6">
                    {oneOnOneFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2 mb-6">
                    <Clock className="w-5 h-5 text-red-600" />
                    <span className="text-sm text-gray-600">Enroll for 1 Year & Get 20% Off!</span>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black" size="lg">
                    <Link to="/enrollment" className="w-full">
                      Enquire Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Courses;
