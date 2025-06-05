
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, User, Star, Crown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

const CoursesSection = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleEnquireNow = () => {
    if (!isAuthenticated) {
      toast.error("Please login to view course details and pricing");
      navigate("/login");
      return;
    }
    navigate("/enrollment");
  };

  const handleViewDetails = () => {
    if (!isAuthenticated) {
      toast.error("Please login to view course details and pricing");
      navigate("/login");
      return;
    }
    navigate("/courses");
  };

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
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-red-50 relative overflow-hidden" aria-labelledby="courses-heading">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-red-500 to-pink-500 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500 to-red-500 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full blur-2xl animate-sparkle"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16 animate-zoom-in-up">
          <h2 id="courses-heading" className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-600 via-pink-600 to-orange-500 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_auto] drop-shadow-2xl" style={{ backgroundImage: 'linear-gradient(90deg, #dc2626, #ec4899, #f97316, #dc2626)' }}>
              Choose Your Musical
            </span>
            <span className="text-gray-900 ml-4 drop-shadow-lg">Journey</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Embark on an exclusive musical adventure with our world-class mentorship programs, 
            crafted for ambitious artists who demand excellence.
          </p>
        </div>

        {/* Enhanced Courses Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {courses.map((course, index) => (
            <article 
              key={course.id} 
              className={`overflow-hidden transition-all duration-700 border-0 rounded-3xl relative group hover:-translate-y-2 ${
                index === 0 ? 'animate-slide-left' : 'animate-slide-right'
              } ${course.premium ? 'animate-golden-glow' : 'hover:shadow-2xl shadow-xl'}`}
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <Card className="h-full border-0 bg-gradient-to-br from-white to-gray-50 group-hover:from-white group-hover:to-red-50 transition-all duration-500">
                {/* Enhanced Premium Corner */}
                {course.premium && (
                  <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden z-20">
                    <div className="absolute top-4 right-[-32px] bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-amber-900 px-8 py-2 text-xs font-bold transform rotate-45 shadow-xl animate-golden-glow">
                      <Crown className="w-3 h-3 inline mr-1" aria-hidden="true" />
                      FLAGSHIP
                    </div>
                  </div>
                )}

                {/* Enhanced Popular Badge */}
                {course.popular && (
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg animate-bounce-in">
                      <Star className="w-3 h-3 fill-current animate-sparkle" aria-hidden="true" />
                      POPULAR
                    </div>
                  </div>
                )}
                
                {/* Enhanced Course Image */}
                <div className="h-56 relative overflow-hidden rounded-t-3xl">
                  <img 
                    src={course.image} 
                    alt={`${course.title} - Professional music production training`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-500"></div>
                </div>
                
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-red-600 transition-colors duration-300">{course.title}</h3>
                  <p className="text-sm text-red-600 mb-8 font-semibold">({course.level})</p>
                  
                  <Button 
                    className="w-full h-12 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-out transform hover:scale-[1.02] hover:-translate-y-1 active:scale-95 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white"
                    onClick={handleEnquireNow}
                  >
                    {isAuthenticated ? "Enroll Now" : "Login to View Pricing"}
                  </Button>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center animate-slide-in-bottom" style={{ animationDelay: '800ms' }}>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-red-600 via-pink-600 to-red-700 hover:from-red-700 hover:via-pink-700 hover:to-red-800 px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 ease-out transform hover:scale-[1.02] hover:-translate-y-1 active:scale-95 rounded-2xl border-2 border-red-500/20"
            onClick={handleViewDetails}
          >
            View Course Details
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
