
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, User, Star, Crown } from "lucide-react";
import { Link } from "react-router-dom";

const CoursesSection = () => {
  const courses = [
    {
      id: "production-course",
      title: "Complete Music Production Course",
      level: "From Beginner to Advanced Level",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
      icon: Users,
      popular: true
    },
    {
      id: "mentorship-90",
      title: "One-on-One Music Production Mentorship",
      level: "Master the complete journey of music production",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop",
      icon: User,
      premium: true
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-red-50" aria-labelledby="courses-heading">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 id="courses-heading" className="text-3xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
            Choose Your Musical <span className="text-gray-900">Journey</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Embark on an exclusive musical adventure with our world-class mentorship programs, 
            crafted for ambitious artists who demand excellence.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
          {courses.map((course, index) => (
            <article 
              key={course.id} 
              className={`overflow-hidden hover:shadow-xl transition-all duration-500 border-0 rounded-2xl relative group hover:-translate-y-1 ${
                index === 0 ? 'animate-slide-left' : 'animate-slide-right'
              } ${course.premium ? 'ring-2 ring-amber-300 shadow-amber-100' : 'shadow-lg'}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Card className="h-full border-0 bg-white">
                {/* Premium Corner */}
                {course.premium && (
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden z-20">
                    <div className="absolute top-3 right-[-28px] bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-6 py-1 text-xs font-bold transform rotate-45 shadow-lg">
                      <Crown className="w-3 h-3 inline mr-1" aria-hidden="true" />
                      FLAGSHIP
                    </div>
                  </div>
                )}

                {/* Popular Badge */}
                {course.popular && (
                  <div className="absolute top-3 left-3 z-10">
                    <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
                      <Star className="w-3 h-3 fill-current" aria-hidden="true" />
                      POPULAR
                    </div>
                  </div>
                )}
                
                {/* Course Image */}
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={`${course.title} - Professional music production training`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{course.title}</h3>
                  <p className="text-xs text-red-600 mb-6 font-medium">({course.level})</p>
                  
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-sm h-10"
                    asChild
                  >
                    <Link 
                      to="/enrollment" 
                      aria-label={`Enquire now about ${course.title}`}
                    >
                      Enquire Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '600ms' }}>
          <Button asChild size="lg" className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 px-8 py-3 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-xl">
            <Link to="/courses" aria-label="View detailed course information">
              View Course Details
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
