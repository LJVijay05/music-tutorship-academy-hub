
import { Award, Users, Star, TrendingUp } from "lucide-react";

const WhyChooseSection = () => {
  const achievements = [
    { icon: Award, number: "10+", label: "Years Experience" },
    { icon: Users, number: "500+", label: "Students Mentored" },
    { icon: Star, number: "200+", label: "Tracks Produced" },
    { icon: TrendingUp, number: "95%", label: "Success Rate" }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-10 animate-slide-up">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Why Choose <span className="text-red-600">Me</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Experience excellence in music education with proven results and industry expertise
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="text-center group hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors duration-300">
                <achievement.icon className="w-8 h-8 text-red-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">{achievement.number}</div>
              <div className="text-sm text-gray-600">{achievement.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
