
import { Users, User, Star, CheckCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import StudentDataForm from "./StudentDataForm";
import SuccessPopup from "./SuccessPopup";
import { useStudentForm } from "@/hooks/useStudentForm";

const CoursesSection = () => {
  const { 
    showStudentForm, 
    showSuccessPopup, 
    openForm, 
    closeForm, 
    showSuccess, 
    closeSuccess 
  } = useStudentForm();

  const courses = [
    {
      id: "production-course",
      title: "Complete Music Production Mastery Course",
      description: "Group Learning",
      level: "From Beginner to Advanced Level",
      icon: Users,
      features: [
        "15 students per batch",
        "12 months intensive program", 
        "Live weekly sessions",
        "Group collaboration projects",
        "Industry-standard software training",
        "Certificate upon completion"
      ],
      isPopular: true,
      gradientFrom: "from-gray-900",
      gradientTo: "to-gray-700",
      borderColor: "border-red-100",
      textColor: "text-red-700",
      bgColor: "bg-red-50",
      buttonGradientFrom: "from-red-600",
      buttonGradientTo: "to-red-700",
      offerText: "Limited Time Offer",
      offerSubtext: "Enroll for 1 Year & Get 15% Off!"
    },
    {
      id: "mentorship-90",
      title: "One-on-One Music Production Mentorship",
      description: "1-on-1 Mentorship",
      level: "Personalized learning experience",
      icon: User,
      features: [
        "Personalized curriculum",
        "Flexible scheduling",
        "Direct mentor feedback", 
        "Custom project development",
        "Industry networking opportunities",
        "Lifetime support access"
      ],
      isPopular: false,
      gradientFrom: "from-amber-600",
      gradientTo: "to-red-700",
      borderColor: "border-amber-200", 
      textColor: "text-amber-700",
      bgColor: "bg-amber-50",
      buttonGradientFrom: "from-amber-500",
      buttonGradientTo: "to-yellow-500", 
      offerText: "Exclusive Offer",
      offerSubtext: "Enroll for 1 Year & Get 20% Off!"
    }
  ];

  const handleEnquireClick = () => {
    console.log('CoursesSection: Enquire Now clicked');
    openForm();
  };

  const handleFormSuccess = () => {
    console.log('CoursesSection: Student form submitted successfully');
    showSuccess();
  };

  return (
    <>
      <section id="courses" className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-red-50 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-red-400 to-pink-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Choose Your <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">Musical Journey</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Whether you prefer collaborative learning or personalized attention, we have the perfect program for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
            {courses.map((course, index) => (
              <article key={course.id} className="group" style={{ animationDelay: `${index * 0.2}s` }}>
                <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl h-full bg-white hover:-translate-y-2 relative group-hover:scale-[1.02]">
                  {/* Popular Badge */}
                  {course.isPopular && (
                    <div className="absolute top-4 left-4 z-20">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg backdrop-blur-sm">
                        <Star className="w-3 h-3 fill-current" />
                        POPULAR
                      </div>
                    </div>
                  )}

                  <header className={`h-48 md:h-56 bg-gradient-to-br ${course.gradientFrom} ${course.gradientTo} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="text-center px-4">
                        {/* Placeholder for future image - currently using icon */}
                        <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                          <course.icon className="w-8 h-8 md:w-10 md:h-10 text-white opacity-90" />
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
                          <span className="text-white font-semibold text-sm md:text-base">{course.description}</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  </header>

                  <CardContent className="p-6 md:p-8 flex flex-col h-auto">
                    {/* Title and Level */}
                    <div className="mb-6">
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 text-gray-900 leading-tight">{course.title}</h3>
                      <p className="text-sm md:text-base text-gray-600 mb-3">{course.level}</p>
                    </div>
                    
                    {/* Features */}
                    <div className="flex-grow mb-6">
                      <ul className="space-y-2 md:space-y-3 mb-4 text-sm md:text-base">
                        {course.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3">
                            <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0" />
                            <span className="text-gray-700 leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Offer Banner */}
                      <div className={`flex items-center gap-3 p-4 ${course.bgColor} rounded-xl border ${course.borderColor} text-sm md:text-base shadow-sm`}>
                        <div>
                          <p className={`font-bold ${course.textColor} text-sm md:text-base`}>{course.offerText}</p>
                          <p className={`text-xs md:text-sm ${course.textColor.replace('text-', 'text-').replace('-700', '-600')} mt-1`}>{course.offerSubtext}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-auto">
                      <Button 
                        variant="outline" 
                        className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 h-11 md:h-12 rounded-xl font-semibold text-sm md:text-base flex-1 hover:scale-105"
                        asChild
                      >
                        <Link to={`/courses/${course.id}`}>
                          <Info className="w-4 h-4 mr-2" />
                          Details
                        </Link>
                      </Button>
                      <Button 
                        onClick={handleEnquireClick}
                        className={`bg-gradient-to-r ${course.buttonGradientFrom} ${course.buttonGradientTo} hover:from-red-600 hover:to-pink-600 text-white h-11 md:h-12 rounded-xl font-semibold text-sm md:text-base flex-1 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                      >
                        Enquire Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </article>
            ))}
          </div>

          <div className="text-center mt-12 lg:mt-16">
            <Button 
              asChild
              className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Link to="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      <StudentDataForm 
        open={showStudentForm} 
        onOpenChange={closeForm}
        onSuccess={handleFormSuccess}
      />

      <SuccessPopup
        open={showSuccessPopup}
        onOpenChange={closeSuccess}
        title="Successful Registration"
        message="Thank you! You have successfully registered your interest. You can now proceed to explore our enrollment options."
        buttonText="Continue"
        redirectTo="/enrollment"
      />
    </>
  );
};

export default CoursesSection;
