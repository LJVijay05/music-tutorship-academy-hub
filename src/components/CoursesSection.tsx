
import { Users, User, Star, CheckCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import StudentDataForm from "./StudentDataForm";
import SuccessPopup from "./SuccessPopup";
import { useStudentForm } from "@/hooks/useStudentForm";
import { memo, useCallback } from "react";

const CoursesSection = memo(() => {
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
      imageUrl: "/lovable-uploads/fd4cf1bf-e786-42ff-8762-0f6086327f43.png",
      features: [
        "15 students per batch",
        "12 months intensive program", 
        "Live weekly sessions",
        "Group collaboration projects",
        "Industry-standard software training",
        "Certificate upon completion"
      ],
      isPopular: false,
      isPremium: false,
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
      id: "crash-course",
      title: "Essential Producer Bootcamp: Launch Your Music Career in 3 Months",
      description: "Intensive Learning",
      level: "Beginner to Intermediate Level",
      icon: Users,
      imageUrl: "/lovable-uploads/8e4988dc-184a-4830-b569-64e9a67c6d19.png",
      features: [
        "8 students per batch",
        "3 months intensive program",
        "Twice weekly sessions",
        "Hands-on project work",
        "Essential software training",
        "Certificate upon completion"
      ],
      isPopular: true,
      isPremium: false,
      gradientFrom: "from-purple-900",
      gradientTo: "to-purple-700",
      borderColor: "border-purple-100",
      textColor: "text-purple-700",
      bgColor: "bg-purple-50",
      buttonGradientFrom: "from-purple-600",
      buttonGradientTo: "to-purple-700",
      offerText: "🚀 MOST POPULAR",
      offerSubtext: "Complete Course for ₹49,800 Only!"
    },
    {
      id: "mentorship-90",
      title: "One-on-One Music Production Mentorship",
      description: "1-on-1 Mentorship",
      level: "Personalized learning experience",
      icon: User,
      imageUrl: "/lovable-uploads/41512049-f13b-4a51-9366-65e165c66344.png",
      features: [
        "Personalized curriculum",
        "Flexible scheduling",
        "Direct mentor feedback", 
        "Custom project development",
        "Industry networking opportunities",
        "Lifetime support access"
      ],
      isPopular: false,
      isPremium: true,
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

  const handleEnquireClick = useCallback(() => {
    console.log('CoursesSection: Enquire Now clicked');
    openForm();
  }, [openForm]);

  const handleFormSuccess = useCallback(() => {
    console.log('CoursesSection: Student form submitted successfully');
    showSuccess();
  }, [showSuccess]);

  return (
    <>
      <section id="courses" className="py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-red-50 relative overflow-hidden">
        {/* Enhanced Background Effects with Animation */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-red-400 to-pink-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Choose Your <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">Musical Journey</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Whether you prefer collaborative learning or personalized attention, we have the perfect program for you
            </p>
          </div>
          
          {/* Optimized Grid Layout for better screen fit */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 max-w-7xl mx-auto">
            {courses.map((course, index) => (
              <article key={course.id} className="group animate-fade-in hover-scale" style={{ animationDelay: `${index * 0.2}s` }}>
                <Card className={`overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 ease-out rounded-2xl h-full bg-white hover:-translate-y-1 relative group-hover:scale-[1.01] ${course.isPremium ? 'ring-2 ring-amber-200/60' : ''} ${course.isPopular ? 'ring-2 ring-green-400/60 shadow-green-200/30' : ''}`}>
                  {/* Course Type Icon - moved to top-left as floating badge */}
                  <div className="absolute top-4 left-4 z-30">
                    <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/40 shadow-md">
                      <course.icon className="w-4 h-4 text-gray-600" />
                    </div>
                  </div>

                  {/* Popular Badge with Enhanced Animation */}
                  {course.isPopular && (
                    <div className="absolute top-4 right-4 z-30">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg backdrop-blur-sm border border-white/20 animate-scale-in">
                        <Star className="w-3 h-3 fill-current animate-pulse" />
                        POPULAR
                      </div>
                    </div>
                  )}

                  {/* Premium Badge */}
                  {course.isPremium && (
                    <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden z-30">
                      <div className="absolute top-4 right-[-24px] bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-xs font-bold px-6 py-1 transform rotate-45 shadow-lg border-t border-b border-white/20">
                        PREMIUM
                      </div>
                    </div>
                  )}

                  <header className={`h-40 md:h-44 bg-gradient-to-br ${course.gradientFrom} ${course.gradientTo} relative overflow-hidden`}>
                    <div className="absolute inset-0">
                      {course.imageUrl ? (
                        <img 
                          src={course.imageUrl} 
                          alt={course.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-black/20 to-black/40" />
                      )}
                    </div>
                  </header>

                  <CardContent className="p-4 md:p-5 flex flex-col h-auto">
                    {/* Title and Level */}
                    <div className="mb-4">
                      <h3 className="text-base md:text-lg font-bold mb-2 text-gray-900 leading-tight">{course.title}</h3>
                      <p className="text-xs md:text-sm text-gray-600 mb-2 font-medium">{course.level}</p>
                    </div>
                    
                    {/* Features */}
                    <div className="flex-grow mb-4">
                      <ul className="space-y-2 mb-4 text-xs md:text-sm">
                        {course.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3">
                            <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0" />
                            <span className="text-gray-700 leading-relaxed font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Offer Banner */}
                      <div className={`flex items-center gap-2 p-3 ${course.bgColor} rounded-lg border-2 ${course.borderColor} text-xs md:text-sm shadow-lg`}>
                        <div>
                          <p className={`font-bold ${course.textColor} text-xs md:text-sm mb-1`}>{course.offerText}</p>
                          <p className={`text-xs ${course.textColor.replace('text-', 'text-').replace('-700', '-600')}`}>{course.offerSubtext}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-2 mt-auto">
                      <Button 
                        variant="outline" 
                        className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 h-9 md:h-10 rounded-lg font-bold text-xs md:text-sm flex-1 hover:scale-105 shadow-md hover:shadow-lg"
                        asChild
                      >
                        <Link to={`/courses/${course.id}`}>
                          <Info className="w-4 h-4 mr-2" />
                          Details
                        </Link>
                      </Button>
                      <Button 
                        onClick={handleEnquireClick}
                        className={`bg-gradient-to-r ${course.buttonGradientFrom} ${course.buttonGradientTo} hover:from-red-600 hover:to-pink-600 text-white h-9 md:h-10 rounded-lg font-bold text-xs md:text-sm flex-1 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-white/20`}
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
              className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-8 py-5 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
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
});

CoursesSection.displayName = 'CoursesSection';

export default CoursesSection;
