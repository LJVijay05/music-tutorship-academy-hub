
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, User, Clock, Star, CheckCircle, Crown } from "lucide-react";
import { Link } from "react-router-dom";

const CoursesSection = () => {
  const courses = [
    {
      id: "production-course",
      title: "Music Production Batch Mentorship",
      subtitle: "Complete Music Production Live Course",
      level: "From Beginner to Advanced Level",
      duration: "12 Months Duration - 15 Students Per Batch",
      monthlyPrice: 9599,
      annualPrice: 8159, // 15% discount when paid annually
      originalMonthlyPrice: 11999,
      image: "bg-gradient-to-br from-gray-900 to-gray-700",
      icon: Users,
      popular: true,
      features: [
        "15 students per batch",
        "12 weeks intensive program", 
        "Live weekly sessions",
        "Group collaboration projects",
        "Industry-standard software training",
        "Certificate upon completion"
      ]
    },
    {
      id: "mentorship-90",
      title: "One-on-One Music Production Mentorship",
      subtitle: "Personalized 90MIN Sessions",
      level: "Master the complete journey of music production",
      duration: "Flagship Course - 4 Classes / Month",
      monthlyPrice: 12800,
      annualPrice: 12800, // 20% discount when paid annually
      originalMonthlyPrice: 16000,
      image: "bg-gradient-to-br from-amber-600 to-yellow-600",
      icon: User,
      premium: true,
      features: [
        "Personalized curriculum",
        "Flexible scheduling",
        "Direct mentor feedback", 
        "Custom project development",
        "Industry networking opportunities",
        "Lifetime support access"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-red-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
            Select Your <span className="text-gray-900">Premium</span> Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Embark on an exclusive musical adventure with our world-class mentorship programs, 
            crafted for ambitious artists who demand excellence.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {courses.map((course, index) => (
            <Card 
              key={course.id} 
              className={`overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 rounded-3xl relative group hover:-translate-y-2 shadow-lg ${
                index === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
              } ${course.premium ? 'ring-2 ring-amber-300 shadow-amber-200' : 'shadow-gray-200'}`}
              style={{ 
                animationDelay: `${index * 200}ms`,
                boxShadow: course.premium 
                  ? '0 25px 50px -12px rgba(251, 191, 36, 0.25)' 
                  : '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
              }}
            >
              {/* Premium Golden Corner */}
              {course.premium && (
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[60px] border-l-transparent border-t-[60px] border-t-gradient-to-r from-amber-400 to-yellow-500 z-10">
                  <div className="absolute -top-[45px] -right-[15px] text-black text-xs font-bold transform rotate-45">
                    <Crown className="w-4 h-4" />
                  </div>
                </div>
              )}

              {/* Premium Corner Alternative */}
              {course.premium && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-500 to-yellow-500 text-black px-6 py-2 text-xs font-bold flex items-center gap-1 rounded-bl-2xl shadow-lg">
                  <Star className="w-3 h-3 fill-current" />
                  FLAGSHIP
                </div>
              )}

              {/* Popular Badge */}
              {course.popular && (
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    POPULAR
                  </div>
                </div>
              )}
              
              {/* Course Image */}
              <div className={`h-48 ${course.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                  <course.icon className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{course.title}</h3>
                <p className="text-gray-600 mb-1 font-medium">{course.subtitle}</p>
                <p className="text-sm text-red-600 mb-4 font-semibold">({course.level})</p>
                
                {/* Features */}
                <div className="space-y-3 mb-8">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Discount Offer */}
                <div className="mb-6 flex items-center gap-2 text-red-600">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-semibold">
                    Enroll for 1 Year & Get {course.premium ? '20' : '15'}% Off!
                  </span>
                </div>
                
                {/* Pricing */}
                <div className="mb-8 text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    ₹{course.annualPrice.toLocaleString()}
                  </div>
                  <div className="text-lg text-gray-400 line-through mb-2">
                    ₹{course.originalMonthlyPrice.toLocaleString()}
                  </div>
                  <p className="text-sm text-gray-600">per month when paid annually</p>
                </div>
                
                <div className="space-y-3">
                  <Button 
                    className={`w-full h-12 text-lg font-semibold ${
                      course.premium 
                        ? 'bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black shadow-lg'
                        : 'bg-red-600 hover:bg-red-700 shadow-lg'
                    }`} 
                    size="lg"
                  >
                    <Link to="/enrollment" className="w-full">
                      Enroll Now
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '600ms' }}>
          <Button asChild size="lg" className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 px-12 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <Link to="/courses">
              Discover All Programs
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
