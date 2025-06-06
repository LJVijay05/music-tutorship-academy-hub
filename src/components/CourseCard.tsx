
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, User, Clock, Star, Info } from "lucide-react";
import { Link } from "react-router-dom";

interface CourseCardProps {
  courseId: string;
  title: string;
  description: string;
  level: string;
  icon: typeof Users | typeof User;
  features: string[];
  isPopular?: boolean;
  isPremium?: boolean;
  gradientFrom: string;
  gradientTo: string;
  borderColor: string;
  textColor: string;
  bgColor: string;
  buttonGradientFrom: string;
  buttonGradientTo: string;
  buttonHoverFrom: string;
  buttonHoverTo: string;
  offerText: string;
  offerSubtext: string;
  onDetailsClick: (courseId: string) => void;
}

const CourseCard = ({
  courseId,
  title,
  description,
  level,
  icon: IconComponent,
  features,
  isPopular,
  isPremium,
  gradientFrom,
  gradientTo,
  borderColor,
  textColor,
  bgColor,
  buttonGradientFrom,
  buttonGradientTo,
  buttonHoverFrom,
  buttonHoverTo,
  offerText,
  offerSubtext,
  onDetailsClick
}: CourseCardProps) => {

  return (
    <article className="group">
      <Card className={`overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl md:rounded-3xl h-full bg-white hover:-translate-y-2 relative ${isPremium ? 'ring-2 ring-amber-200' : ''}`}>
        {/* Popular Badge */}
        {isPopular && (
          <div className="absolute top-4 md:top-6 left-4 md:left-6 z-10">
            <div className="bg-green-500 text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-bold flex items-center gap-1 md:gap-2 shadow-lg">
              <Star className="w-3 md:w-4 h-3 md:h-4 fill-current" />
              <span className="hidden sm:inline">MOST</span> POPULAR
            </div>
          </div>
        )}

        {/* Premium Badge */}
        {isPremium && (
          <div className="absolute top-0 right-0 w-20 md:w-24 h-20 md:h-24 overflow-hidden z-20">
            <div className="absolute top-2 md:top-3 right-[-28px] md:right-[-32px] bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-6 md:px-8 py-1 md:py-2 text-xs font-bold transform rotate-45 shadow-lg">
              FLAGSHIP
            </div>
          </div>
        )}

        <header className={`h-48 md:h-64 bg-gradient-to-br ${gradientFrom} ${gradientTo} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center px-4">
              <IconComponent className="w-12 md:w-20 h-12 md:h-20 text-white mb-3 md:mb-4 mx-auto opacity-90" />
              <div className="bg-white/20 backdrop-blur-sm rounded-xl md:rounded-2xl px-4 md:px-6 py-2 md:py-3">
                <span className="text-white font-semibold text-sm md:text-lg">{description}</span>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </header>

        <CardContent className="p-4 md:p-8 flex flex-col">
          <div className="mb-4 md:mb-6">
            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-gray-900 leading-tight">{title}</h3>
            <p className="text-gray-600 mb-2 text-sm md:text-base">{description}</p>
            <p className={`text-xs md:text-sm ${textColor} font-semibold ${bgColor} px-2 md:px-3 py-1 rounded-full inline-block`}>
              {level}
            </p>
          </div>
          
          <div className="flex-grow">
            <ul className="space-y-2 md:space-y-4 mb-6 md:mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 md:gap-3">
                  <CheckCircle className="w-4 md:w-5 h-4 md:h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm md:text-base">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className={`flex items-center gap-2 md:gap-3 mb-6 md:mb-8 p-3 md:p-4 ${bgColor} rounded-xl md:rounded-2xl border ${borderColor}`}>
              <Clock className={`w-5 md:w-6 h-5 md:h-6 ${textColor.replace('text-', 'text-').replace('-700', '-600')} flex-shrink-0`} />
              <div>
                <p className={`font-semibold ${textColor} text-sm md:text-base`}>{offerText}</p>
                <p className={`text-xs md:text-sm ${textColor.replace('text-', 'text-').replace('-700', '-600')}`}>{offerSubtext}</p>
              </div>
            </div>
          </div>
          
          {/* Professional Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-4 md:mt-6">
            <Button 
              variant="outline" 
              className="flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 h-10 md:h-12 rounded-lg md:rounded-xl font-semibold group relative overflow-hidden hover:shadow-md text-sm md:text-base"
              asChild
            >
              <Link to={`/courses/${courseId}`}>
                <Info className="w-4 md:w-5 h-4 md:h-5 mr-1 md:mr-2 transition-all duration-300 group-hover:scale-110" />
                <span className="relative z-10">View Details</span>
              </Link>
            </Button>
            <Button 
              className={`flex-1 bg-gradient-to-r ${buttonGradientFrom} ${buttonGradientTo} hover:from-red-700 hover:to-pink-700 text-white group relative overflow-hidden h-10 md:h-12 rounded-lg md:rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-sm md:text-base ${isPremium ? 'animate-professional-golden-glow' : 'animate-professional-gradient'}`}
              asChild
            >
              <Link to="/enrollment" className="flex items-center justify-center">
                <span className="relative z-10 group-hover:font-bold transition-all duration-300">Enquire Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </article>
  );
};

export default CourseCard;
