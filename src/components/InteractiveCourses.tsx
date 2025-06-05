
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, User, Star, Clock, Award, Check, Crown } from "lucide-react";
import { useState, useEffect } from "react";

const InteractiveCourses = () => {
  const [activeTab, setActiveTab] = useState("production");
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

  const courses = {
    production: {
      title: "Complete Music Production Course",
      description: "Music production course for beginners - comprehensive journey from basics to professional level",
      duration: "12 months",
      students: "320+",
      rating: "4.9",
      popular: true,
      features: [
        "Weekly live training (Logic Pro / Ableton)",
        "1-on-1 feedback & mentorship", 
        "Collaborative track-building projects",
        "Premium sample pack access",
        "Lifetime access to recordings",
        "Certificate of Completion",
        "Alumni producer network"
      ],
      details: [
        "Duration: 12 months",
        "Format: Live Zoom Classes", 
        "Batch Strength: 15 Students"
      ],
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop"
    },
    mentorship: {
      title: "1-on-1 Premium Music Producer Mentorship",
      description: "Professional music producer mentorship - personalized guidance for serious artists",
      duration: "Flexible",
      students: "50+",
      rating: "5.0",
      premium: true,
      features: [
        "Customized learning path",
        "Direct mentor feedback",
        "Industry networking opportunities",
        "Portfolio development",
        "Lifetime support access",
        "Advanced production techniques",
        "Industry standard tools mastery"
      ],
      details: [
        "Duration: Flexible",
        "Format: 1-on-1 Sessions",
        "Personalized Curriculum"
      ],
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop"
    }
  };

  return (
    <section id="courses-section" className="py-32 bg-gradient-to-br from-white via-gray-50 to-red-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-red-500 to-red-600 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-red-600 to-red-700 rounded-full blur-3xl music-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-24 scroll-reveal ${scrollRevealed ? 'revealed' : ''}`}>
          <h2 className="text-6xl md:text-7xl font-extralight text-gray-900 mb-8">
            Choose Your
            <span className="block font-light bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
              Learning Journey
            </span>
          </h2>
          <p className="text-2xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
            Discover our carefully crafted programs designed for every stage of your musical journey. 
            Learn to produce music online with India's top music production training.
          </p>
        </div>

        {/* Course Tabs */}
        <div className={`flex justify-center mb-20 scroll-reveal ${scrollRevealed ? 'revealed' : ''}`} style={{ animationDelay: '0.2s' }}>
          <div className="inline-flex bg-gray-100 rounded-full p-2 shadow-lg">
            <button
              onClick={() => setActiveTab("production")}
              className={`px-10 py-5 rounded-full text-xl font-medium transition-all duration-300 ${
                activeTab === "production"
                  ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-xl"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Group Learning
            </button>
            <button
              onClick={() => setActiveTab("mentorship")}
              className={`px-10 py-5 rounded-full text-xl font-medium transition-all duration-300 ${
                activeTab === "mentorship"
                  ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-xl"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              1-on-1 Mentorship
            </button>
          </div>
        </div>

        {/* Course Content */}
        <div className={`max-w-7xl mx-auto scroll-reveal ${scrollRevealed ? 'revealed' : ''}`} style={{ animationDelay: '0.4s' }}>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Course Card */}
            <div className="relative">
              <Card className="overflow-hidden border-0 shadow-2xl rounded-3xl bg-white apple-card relative">
                {/* Popular/Premium Badge */}
                {courses[activeTab].popular && (
                  <div className="floating-tag bg-green-500">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    POPULAR
                  </div>
                )}
                {courses[activeTab].premium && (
                  <div className="floating-tag bg-gradient-to-r from-amber-500 to-yellow-500 text-black">
                    <Crown className="w-4 h-4 mr-1" />
                    PREMIUM GOLD
                  </div>
                )}

                {/* Course Image */}
                <div className="relative h-80">
                  <img
                    src={courses[activeTab].image}
                    alt={`${courses[activeTab].title} - ${courses[activeTab].description}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="text-lg font-medium">{courses[activeTab].rating}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5" />
                        <span>{courses[activeTab].students} trained</span>
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-8">
                  <h3 className="text-3xl font-light text-gray-900 mb-4">
                    {courses[activeTab].title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 font-light mb-8 leading-relaxed">
                    {courses[activeTab].description}
                  </p>

                  {/* Course Details */}
                  <div className="space-y-4 mb-8">
                    {courses[activeTab].details.map((detail, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-red-600" />
                        <span className="text-gray-700 font-medium">{detail}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 py-4 rounded-2xl text-lg font-medium transition-all duration-300 apple-button premium-glow">
                    Enquire Now
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Right Side - Feature Breakdown */}
            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-2xl inline-block mb-6 music-pulse">
                  <span className="text-lg font-medium">What You'll Master</span>
                </div>
                
                <ul className="space-y-5">
                  {courses[activeTab].features.map((feature, index) => (
                    <li 
                      key={index} 
                      className={`flex items-start gap-4 scroll-reveal ${scrollRevealed ? 'revealed' : ''}`}
                      style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                    >
                      <div className="w-6 h-6 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-lg text-gray-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-8 mb-10">
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-red-600" />
                  <span className="text-gray-700 font-medium">{courses[activeTab].duration}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-red-600" />
                  <span className="text-gray-700 font-medium">Certificate included</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 py-4 rounded-2xl text-lg font-medium apple-button premium-glow">
                  Start Learning
                </Button>
                <Button variant="outline" className="flex-1 border-2 border-red-300 hover:border-red-500 text-red-600 hover:bg-red-50 py-4 rounded-2xl text-lg font-medium apple-button">
                  Book Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveCourses;
