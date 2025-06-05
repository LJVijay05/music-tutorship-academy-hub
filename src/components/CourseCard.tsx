
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
  
  const handleDetailsClick = () => {
    console.log('Details button clicked for course:', courseId);
    onDetailsClick(courseId);
  };

  return (
    <article className="group">
      <Card className={`overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl h-full bg-white hover:-translate-y-2 relative ${isPremium ? 'ring-2 ring-amber-200' : ''}`}>
        {/* Popular Badge */}
        {isPopular && (
          <div className="absolute top-6 left-6 z-10">
            <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
              <Star className="w-4 h-4 fill-current" />
              MOST POPULAR
            </div>
          </div>
        )}

        {/* Premium Badge */}
        {isPremium && (
          <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden z-20">
            <div className="absolute top-3 right-[-32px] bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-8 py-2 text-xs font-bold transform rotate-45 shadow-lg">
              FLAGSHIP
            </div>
          </div>
        )}

        <header className={`h-64 bg-gradient-to-br ${gradientFrom} ${gradientTo} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center">
              <IconComponent className="w-20 h-20 text-white mb-4 mx-auto opacity-90" />
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-3">
                <span className="text-white font-semibold text-lg">{description}</span>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </header>

        <CardContent className="p-8 flex flex-col">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-3 text-gray-900">{title}</h3>
            <p className="text-gray-600 mb-2">{description}</p>
            <p className={`text-sm ${textColor} font-semibold ${bgColor} px-3 py-1 rounded-full inline-block`}>
              {level}
            </p>
          </div>
          
          <div className="flex-grow">
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className={`flex items-center gap-3 mb-8 p-4 ${bgColor} rounded-2xl border ${borderColor}`}>
              <Clock className={`w-6 h-6 ${textColor.replace('text-', 'text-').replace('-700', '-600')}`} />
              <div>
                <p className={`font-semibold ${textColor}`}>{offerText}</p>
                <p className={`text-sm ${textColor.replace('text-', 'text-').replace('-700', '-600')}`}>{offerSubtext}</p>
              </div>
            </div>
          </div>
          
          {/* Action Buttons with Smooth Animations */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button 
              variant="outline" 
              className="flex-1 border-2 border-gray-300 text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 hover:text-gray-900 transition-all duration-300 ease-out h-12 rounded-xl font-semibold transform hover:scale-105 hover:shadow-md active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
              onClick={handleDetailsClick}
            >
              <Info className="w-5 h-5 mr-2 transition-transform duration-200" />
              View Details
            </Button>
            <Button 
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 ease-out h-12 rounded-xl font-semibold transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
              asChild
            >
              <Link to="/enrollment" className="flex items-center justify-center">
                Enroll Now
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </article>
  );
};

export default CourseCard;
