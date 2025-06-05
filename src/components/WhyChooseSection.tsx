
import { Award, Users, Star, TrendingUp } from "lucide-react";

const WhyChooseSection = () => {
  const achievements = [
    { icon: Award, number: "10+", label: "Years Experience" },
    { icon: Users, number: "500+", label: "Students Mentored" },
    { icon: Star, number: "200+", label: "Tracks Produced" },
    { icon: TrendingUp, number: "95%", label: "Success Rate" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-red-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-red-500 to-pink-500 rounded-full blur-3xl animate-float-delayed"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="text-center mb-16 animate-zoom-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why Choose <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Experience excellence in music education with proven results and industry expertise
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="text-center group hover:scale-110 transition-all duration-500 animate-stagger-fade p-6 rounded-2xl bg-gradient-to-br from-white/80 to-yellow-50/80 backdrop-blur-sm hover:shadow-2xl hover:bg-gradient-to-br hover:from-yellow-50 hover:to-white border border-yellow-200/50"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-yellow-500 group-hover:to-yellow-700 transition-all duration-500 shadow-xl group-hover:shadow-2xl group-hover:animate-golden-glow transform group-hover:rotate-12">
                <achievement.icon className="w-10 h-10 text-white drop-shadow-lg group-hover:scale-125 transition-transform duration-300" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300">{achievement.number}</div>
              <div className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">{achievement.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
