
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, User, Star, Clock, Award } from "lucide-react";
import { useState } from "react";

const InteractiveCourses = () => {
  const [activeTab, setActiveTab] = useState("production");

  const courses = {
    production: {
      title: "Music Production Mastery",
      description: "Complete journey from beginner to professional producer",
      duration: "12 weeks",
      students: "320+",
      rating: "4.9",
      features: [
        "Industry-standard software training",
        "Live weekly sessions with mentor",
        "Collaborative group projects",
        "Professional studio access",
        "Certificate of completion"
      ],
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop"
    },
    mentorship: {
      title: "1-on-1 Premium Mentorship",
      description: "Personalized guidance for serious music professionals",
      duration: "Flexible",
      students: "50+",
      rating: "5.0",
      features: [
        "Customized learning path",
        "Direct mentor feedback",
        "Industry networking opportunities",
        "Portfolio development",
        "Lifetime support access"
      ],
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop"
    }
  };

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-6">
            Choose Your
            <span className="block font-light bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Learning Journey
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Discover our carefully crafted programs designed for every stage of your musical journey
          </p>
        </div>

        {/* Course Tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-gray-100 rounded-full p-2">
            <button
              onClick={() => setActiveTab("production")}
              className={`px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 ${
                activeTab === "production"
                  ? "bg-white text-gray-900 shadow-lg"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Group Learning
            </button>
            <button
              onClick={() => setActiveTab("mentorship")}
              className={`px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 ${
                activeTab === "mentorship"
                  ? "bg-white text-gray-900 shadow-lg"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              1-on-1 Mentorship
            </button>
          </div>
        </div>

        {/* Course Content */}
        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden border-0 shadow-2xl rounded-3xl bg-gradient-to-br from-white to-gray-50">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Course Image */}
              <div className="relative h-96 lg:h-auto">
                <img
                  src={courses[activeTab].image}
                  alt={courses[activeTab].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Course Details */}
              <CardContent className="p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="text-lg font-medium">{courses[activeTab].rating}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-5 h-5" />
                    <span>{courses[activeTab].students} enrolled</span>
                  </div>
                </div>

                <h3 className="text-3xl font-light text-gray-900 mb-4">
                  {courses[activeTab].title}
                </h3>
                
                <p className="text-lg text-gray-600 font-light mb-8 leading-relaxed">
                  {courses[activeTab].description}
                </p>

                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">{courses[activeTab].duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Certificate included</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-10">
                  {courses[activeTab].features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1 bg-black text-white hover:bg-gray-800 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105">
                    Learn More
                  </Button>
                  <Button variant="outline" className="flex-1 border-2 border-gray-300 hover:border-black py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105">
                    Book Demo
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InteractiveCourses;
