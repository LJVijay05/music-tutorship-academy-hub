
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, User, Star, Crown, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const CoursesSection = () => {
  const [scrollRevealed, setScrollRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setScrollRevealed(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('courses-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const courses = [
    {
      id: "production-course",
      title: "Complete Music Production Course",
      level: "Music production course for beginners - From Beginner to Advanced Level",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
      icon: Users,
      popular: true,
      features: [
        "Weekly live training (Logic Pro / Ableton)",
        "1-on-1 feedback & mentorship",
        "Collaborative track-building projects",
        "Premium sample pack access"
      ],
      details: [
        "Duration: 12 months",
        "Format: Live Zoom Classes", 
        "Batch Strength: 15 Students"
      ]
    },
    {
      id: "mentorship-90",
      title: "1-on-1 Music Producer Mentorship",
      level: "Professional music producer mentorship - Master the complete journey",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop",
      icon: User,
      premium: true,
      features: [
        "Customized learning path",
        "Direct mentor feedback",
        "Industry networking opportunities",
        "Portfolio development"
      ],
      details: [
        "Duration: Flexible",
        "Format: 1-on-1 Sessions",
        "Personalized Curriculum"
      ]
    }
  ];

  return (
    <section id="courses-section" className="py-32 bg-gradient-to-br from-gray-50 via-white to-red-50 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-red-500 to-red-600 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-red-600 to-red-700 rounded-full blur-3xl music-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-red-400 to-red-500 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Enhanced Section Header */}
        <div className={`text-center mb-20 scroll-reveal ${scrollRevealed ? 'revealed' : ''}`}>
          <h2 className="text-6xl lg:text-8xl font-extralight mb-8 leading-tight">
            <span className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
              Choose Your Musical
            </span>
            <span className="text-gray-900 ml-4 block mt-2">Journey</span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Embark on an exclusive musical adventure with our world-class mentorship programs. 
            Learn to produce music online with India's top music production training.
          </p>
        </div>

        {/* Enhanced Courses Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-16">
          {courses.map((course, index) => (
            <article 
              key={course.id} 
              className={`overflow-hidden transition-all duration-700 border-0 rounded-3xl relative group apple-card ${
                index === 0 ? 'scroll-reveal' : 'scroll-reveal'
              } ${scrollRevealed ? 'revealed' : ''}`}
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <Card className="h-full border-0 bg-white shadow-2xl hover:shadow-red-500/20">
                {/* Enhanced Premium Corner */}
                {course.premium && (
                  <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden z-20">
                    <div className="absolute top-4 right-[-32px] bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-amber-900 px-8 py-2 text-xs font-bold transform rotate-45 shadow-xl">
                      <Crown className="w-3 h-3 inline mr-1" />
                      PREMIUM
                    </div>
                  </div>
                )}

                {/* Enhanced Popular Badge */}
                {course.popular && (
                  <div className="absolute top-6 left-6 z-10">
                    <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                      <Star className="w-4 h-4 fill-current" />
                      POPULAR
                    </div>
                  </div>
                )}
                
                {/* Enhanced Course Image */}
                <div className="h-64 relative overflow-hidden rounded-t-3xl">
                  <img 
                    src={course.image} 
                    alt={`${course.title} - ${course.level}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:from-black/40 transition-all duration-500"></div>
                </div>
                
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold mb-4 text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                    {course.title}
                  </h3>
                  <p className="text-base text-red-600 mb-6 font-medium leading-relaxed">
                    {course.level}
                  </p>

                  {/* Course Details */}
                  <div className="space-y-3 mb-6">
                    {course.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-red-600" />
                        <span className="text-gray-700 font-medium">{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Features Preview */}
                  <div className="space-y-2 mb-8">
                    {course.features.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                    <div className="text-red-600 text-sm font-medium">+{course.features.length - 2} more benefits</div>
                  </div>
                  
                  <Button 
                    className={`w-full h-14 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 apple-button ${
                      course.premium 
                        ? 'bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black' 
                        : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white'
                    }`}
                    asChild
                  >
                    <Link to="/enrollment">
                      Enquire Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className={`text-center scroll-reveal ${scrollRevealed ? 'revealed' : ''}`} style={{ animationDelay: '800ms' }}>
          <Button asChild size="lg" className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-700 hover:via-red-800 hover:to-red-900 px-12 py-6 text-xl font-semibold shadow-2xl hover:shadow-red-500/25 transition-all duration-500 apple-button rounded-2xl">
            <Link to="/courses">
              View Complete Course Details
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
