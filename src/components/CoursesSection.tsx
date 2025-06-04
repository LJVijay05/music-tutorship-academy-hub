
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, User, Clock, Star, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CoursesSection = () => {
  const courses = [
    {
      id: "production-course",
      title: "Music Production Live Course",
      subtitle: "Complete Music Production",
      level: "From Beginner to Advanced Level",
      duration: "12 Months Duration - 10 Students Per Batch",
      price: "11,999",
      image: "bg-gradient-to-br from-gray-900 to-gray-700",
      icon: Users,
      features: [
        "15 students per batch",
        "Live weekly sessions", 
        "Industry software training",
        "Group collaboration projects"
      ]
    },
    {
      id: "mentorship-90",
      title: "One-on-One Music Production Mentorship",
      subtitle: "90MIN Sessions",
      level: "Flagship Course - 4 Classes / Month",
      duration: "Master the complete journey of music production",
      price: "16,000",
      image: "bg-gradient-to-br from-red-900 to-red-700",
      icon: User,
      badge: "FLAGSHIP",
      features: [
        "Personalized curriculum",
        "Flexible scheduling",
        "Direct mentor feedback", 
        "Custom project development"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Choose <span className="text-red-600">Course</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select from our comprehensive music production programs designed to elevate your skills 
            from beginner to professional level.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-red-200">
              {/* Course Image */}
              <div className={`h-48 ${course.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <course.icon className="w-16 h-16 text-white" />
                </div>
                {course.badge && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {course.badge}
                    </div>
                  </div>
                )}
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-1">{course.subtitle}</p>
                <p className="text-sm text-red-600 mb-4">({course.level})</p>
                <p className="text-sm text-gray-500 mb-6">{course.duration}</p>
                
                {/* Features */}
                <div className="space-y-2 mb-6">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="text-3xl font-bold text-gray-900">₹{course.price}</div>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>INR</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Button className="w-full bg-red-600 hover:bg-red-700" size="lg">
                    <Link to="/enrollment" className="w-full">
                      Book A Demo
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    <Link to="/courses" className="w-full">
                      View More
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 px-8">
            <Link to="/courses">
              View All Courses
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
