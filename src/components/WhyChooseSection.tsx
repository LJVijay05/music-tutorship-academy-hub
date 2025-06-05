
import { Award, Users, Star, TrendingUp } from "lucide-react";

const WhyChooseSection = () => {
  const achievements = [
    { icon: Award, number: "10+", label: "Years Experience" },
    { icon: Users, number: "500+", label: "Students Mentored" },
    { icon: Star, number: "200+", label: "Tracks Produced" },
    { icon: TrendingUp, number: "95%", label: "Success Rate" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Why Choose <span className="text-red-600">Me</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience excellence in music education with proven results and industry expertise
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="text-center group hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-yellow-500 group-hover:to-yellow-700 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <achievement.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-3">{achievement.number}</div>
              <div className="text-gray-600 font-medium">{achievement.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
