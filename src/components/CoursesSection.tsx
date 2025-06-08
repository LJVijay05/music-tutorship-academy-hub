
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
      <section id="courses" className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-red-50 relative overflow-hidden">
        {/* Optimized Background Effects */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-red-400 to-pink-500 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full blur-3xl animate-float-delayed"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Choose Your <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">Musical Journey</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              Whether you prefer collaborative learning or personalized attention, we have the perfect program for you
            </p>
          </div>
          
          {/* Optimized Grid Layout */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 max-w-8xl mx-auto">
            {courses.map((course, index) => (
              <article key={course.id} className="group animate-fade-in-up" style={{ animationDelay: `${index * 0.3}s` }}>
                <Card className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 ease-out rounded-3xl h-full bg-white hover:-translate-y-3 relative group-hover:scale-[1.03]">
                  {/* Popular Badge */}
                  {course.isPopular && (
                    <div className="absolute top-6 left-6 z-30">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-xl backdrop-blur-sm border border-white/20">
                        <Star className="w-4 h-4 fill-current" />
                        POPULAR
                      </div>
                    </div>
                  )}

                  <header className={`h-64 md:h-72 lg:h-80 bg-gradient-to-br ${course.gradientFrom} ${course.gradientTo} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 flex items-center justify-center">
                      <div className="text-center px-6 max-w-md">
                        {/* Enhanced icon container */}
                        <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mx-auto mb-6 bg-white/15 backdrop-blur-lg rounded-3xl flex items-center justify-center border border-white/20 shadow-2xl">
                          <course.icon className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-white opacity-95" />
                        </div>
                        <div className="bg-white/20 backdrop-blur-lg rounded-2xl px-6 py-3 border border-white/20">
                          <span className="text-white font-bold text-base md:text-lg">{course.description}</span>
                        </div>
                      </div>
                    </div>
                  </header>

                  <CardContent className="p-8 md:p-10 lg:p-12 flex flex-col h-auto">
                    {/* Title and Level */}
                    <div className="mb-8">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-gray-900 leading-tight">{course.title}</h3>
                      <p className="text-base md:text-lg text-gray-600 mb-4 font-medium">{course.level}</p>
                    </div>
                    
                    {/* Features */}
                    <div className="flex-grow mb-8">
                      <ul className="space-y-3 md:space-y-4 mb-6 text-base md:text-lg">
                        {course.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-4">
                            <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-600 flex-shrink-0" />
                            <span className="text-gray-700 leading-relaxed font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Offer Banner */}
                      <div className={`flex items-center gap-4 p-6 ${course.bgColor} rounded-2xl border-2 ${course.borderColor} text-base md:text-lg shadow-xl`}>
                        <div>
                          <p className={`font-bold ${course.textColor} text-base md:text-lg mb-2`}>{course.offerText}</p>
                          <p className={`text-sm md:text-base ${course.textColor.replace('text-', 'text-').replace('-700', '-600')}`}>{course.offerSubtext}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-4 mt-auto">
                      <Button 
                        variant="outline" 
                        className="border-3 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 h-14 md:h-16 rounded-2xl font-bold text-base md:text-lg flex-1 hover:scale-105 shadow-lg hover:shadow-xl"
                        asChild
                      >
                        <Link to={`/courses/${course.id}`}>
                          <Info className="w-5 h-5 mr-3" />
                          Details
                        </Link>
                      </Button>
                      <Button 
                        onClick={handleEnquireClick}
                        className={`bg-gradient-to-r ${course.buttonGradientFrom} ${course.buttonGradientTo} hover:from-red-600 hover:to-pink-600 text-white h-14 md:h-16 rounded-2xl font-bold text-base md:text-lg flex-1 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-white/20`}
                      >
                        Enquire Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </article>
            ))}
          </div>

          <div className="text-center mt-16 lg:mt-20">
            <Button 
              asChild
              className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-10 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
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
