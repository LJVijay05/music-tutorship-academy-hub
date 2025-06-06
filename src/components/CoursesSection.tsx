
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
      description: "Master the complete journey of music production",
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
      description: "1-on-1 Mentorship Program",
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
      <section id="courses" className="py-20 bg-gradient-to-br from-slate-50 via-white to-red-50 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-red-400 to-pink-500 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full blur-3xl animate-float-delayed"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="text-center mb-16 animate-zoom-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Choose Your <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">Musical Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Whether you prefer collaborative learning or personalized attention, we have the perfect program to unlock your musical potential
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {courses.map((course, index) => (
              <article key={course.id} className="group animate-stagger-fade" style={{ animationDelay: `${index * 0.2}s` }}>
                <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl h-full bg-white hover:-translate-y-2 relative">
                  {/* Popular Badge */}
                  {course.isPopular && (
                    <div className="absolute top-6 left-6 z-10">
                      <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                        <Star className="w-4 h-4 fill-current" />
                        MOST POPULAR
                      </div>
                    </div>
                  )}

                  <header className={`h-64 bg-gradient-to-br ${course.gradientFrom} ${course.gradientTo} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="text-center">
                        <course.icon className="w-20 h-20 text-white mb-4 mx-auto opacity-90" />
                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-3">
                          <span className="text-white font-semibold text-lg">{course.description}</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </header>

                  <CardContent className="p-8 flex flex-col">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold mb-3 text-gray-900 leading-tight">{course.title}</h3>
                      <p className="text-gray-600 mb-2">{course.description}</p>
                      <p className={`text-sm ${course.textColor} font-semibold ${course.bgColor} px-3 py-1 rounded-full inline-block`}>
                        {course.level}
                      </p>
                    </div>
                    
                    <div className="flex-grow">
                      <ul className="space-y-4 mb-8">
                        {course.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                            <span className="text-gray-700 font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className={`flex items-center gap-3 mb-8 p-4 ${course.bgColor} rounded-2xl border ${course.borderColor}`}>
                        <div>
                          <p className={`font-semibold ${course.textColor}`}>{course.offerText}</p>
                          <p className={`text-sm ${course.textColor.replace('text-', 'text-').replace('-700', '-600')}`}>{course.offerSubtext}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                      <Button 
                        variant="outline" 
                        className="flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 h-12 rounded-xl font-semibold group relative overflow-hidden hover:shadow-md"
                        asChild
                      >
                        <Link to={`/courses/${course.id}`}>
                          <Info className="w-5 h-5 mr-2 transition-all duration-300 group-hover:scale-110" />
                          <span className="relative z-10">View Details</span>
                        </Link>
                      </Button>
                      <Button 
                        onClick={openForm}
                        className={`flex-1 bg-gradient-to-r ${course.buttonGradientFrom} ${course.buttonGradientTo} hover:from-red-700 hover:to-pink-700 text-white group relative overflow-hidden h-12 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5`}
                      >
                        <span className="relative z-10 group-hover:font-bold transition-all duration-300">Enquire Now</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              asChild
              className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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
