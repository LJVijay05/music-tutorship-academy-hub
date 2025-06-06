
import { Users, User, Star, CheckCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import StudentDataForm from "./StudentDataForm";
import { useStudentForm } from "@/hooks/useStudentForm";

const CoursesSection = () => {
  const { showStudentForm, openForm, closeForm } = useStudentForm();

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

  return (
    <>
      <section id="courses" className="py-16 bg-gradient-to-br from-slate-50 via-white to-red-50 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-red-400 to-pink-500 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full blur-3xl animate-float-delayed"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10 animate-zoom-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Choose Your <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">Musical Journey</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Whether you prefer collaborative learning or personalized attention, we have the perfect program for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {courses.map((course, index) => (
              <article key={course.id} className="group animate-stagger-fade" style={{ animationDelay: `${index * 0.2}s` }}>
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl h-full bg-white hover:-translate-y-1 relative">
                  {/* Popular Badge */}
                  {course.isPopular && (
                    <div className="absolute top-3 left-3 z-10">
                      <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
                        <Star className="w-3 h-3 fill-current" />
                        POPULAR
                      </div>
                    </div>
                  )}

                  <header className={`h-36 bg-gradient-to-br ${course.gradientFrom} ${course.gradientTo} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="text-center">
                        <course.icon className="w-10 h-10 text-white mb-2 mx-auto opacity-90" />
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                          <span className="text-white font-semibold text-sm">{course.description}</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </header>

                  <CardContent className="p-4 flex flex-col">
                    <div className="mb-3">
                      <h3 className="text-lg font-bold mb-1 text-gray-900 leading-tight">{course.title}</h3>
                      <p className="text-sm text-gray-600 mb-1">{course.level}</p>
                    </div>
                    
                    <div className="flex-grow">
                      <ul className="space-y-1 mb-3 text-sm">
                        {course.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className={`flex items-center gap-2 mb-3 p-2 ${course.bgColor} rounded-lg border ${course.borderColor} text-sm`}>
                        <div>
                          <p className={`font-semibold ${course.textColor} text-xs`}>{course.offerText}</p>
                          <p className={`text-xs ${course.textColor.replace('text-', 'text-').replace('-700', '-600')}`}>{course.offerSubtext}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-2 mt-2">
                      <Button 
                        variant="outline" 
                        className="border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 h-8 rounded-lg font-medium text-xs flex-1"
                        asChild
                      >
                        <Link to={`/courses/${course.id}`}>
                          <Info className="w-3 h-3 mr-1" />
                          Details
                        </Link>
                      </Button>
                      <Button 
                        onClick={openForm}
                        className={`bg-gradient-to-r ${course.buttonGradientFrom} ${course.buttonGradientTo} hover:from-red-600 hover:to-pink-600 text-white h-8 rounded-lg font-medium text-xs flex-1`}
                      >
                        Enquire Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </article>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button 
              asChild
              className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-5 py-2 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link to="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      <StudentDataForm 
        open={showStudentForm} 
        onOpenChange={closeForm} 
      />
    </>
  );
};

export default CoursesSection;
