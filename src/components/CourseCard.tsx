
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, User, Clock, Star, Info } from "lucide-react";
import { Link } from "react-router-dom";
import StudentDataForm from "./StudentDataForm";
import { useStudentForm } from "@/hooks/useStudentForm";

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
  const { showStudentForm, openForm, closeForm } = useStudentForm();

  return (
    <>
      <article className="group">
        <Card className={`overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl h-full bg-white ${isPremium ? 'ring-2 ring-amber-200' : ''}`}>
          {/* Popular Badge */}
          {isPopular && (
            <div className="absolute top-3 left-3 z-10">
              <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
                <Star className="w-3 h-3 fill-current" />
                POPULAR
              </div>
            </div>
          )}

          {/* Premium Badge */}
          {isPremium && (
            <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden z-10">
              <div className="absolute top-2 right-[-20px] bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-5 py-1 text-xs font-bold transform rotate-45 shadow-md">
                FLAGSHIP
              </div>
            </div>
          )}

          <header className={`h-40 bg-gradient-to-br ${gradientFrom} ${gradientTo} relative overflow-hidden`}>
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center px-4">
                <IconComponent className="w-10 h-10 text-white mb-2 mx-auto opacity-90" />
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-white font-semibold text-sm">{description}</span>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </header>

          <CardContent className="p-4 flex flex-col h-full">
            <div className="mb-3">
              <h3 className="text-lg font-bold mb-1 text-gray-900 line-clamp-2">{title}</h3>
              <p className="text-gray-600 mb-2 text-sm line-clamp-2">{description}</p>
              <p className={`text-xs ${textColor} font-semibold ${bgColor} px-2 py-0.5 rounded-full inline-block`}>
                {level}
              </p>
            </div>
            
            <div className="flex-grow">
              <ul className="space-y-1 mb-4 text-sm">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-1.5">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className={`flex items-center gap-2 mb-4 p-2 ${bgColor} rounded-lg border ${borderColor}`}>
                <Clock className={`w-4 h-4 ${textColor.replace('text-', 'text-').replace('-700', '-600')} flex-shrink-0`} />
                <div>
                  <p className={`font-semibold ${textColor} text-xs`}>{offerText}</p>
                  <p className={`text-xs ${textColor.replace('text-', 'text-').replace('-700', '-600')}`}>{offerSubtext}</p>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col gap-2 mt-auto">
              <Button 
                variant="outline" 
                className="w-full text-xs border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all h-8 rounded-lg font-medium"
                asChild
              >
                <Link to={`/courses/${courseId}`}>
                  <Info className="w-3.5 h-3.5 mr-1" />
                  View Details
                </Link>
              </Button>
              <Button 
                onClick={openForm}
                className={`w-full text-xs bg-gradient-to-r ${buttonGradientFrom} ${buttonGradientTo} hover:from-red-700 hover:to-pink-700 text-white transition-all h-8 rounded-lg font-medium`}
              >
                Enquire Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </article>

      <StudentDataForm 
        open={showStudentForm} 
        onOpenChange={closeForm} 
      />
    </>
  );
};

export default CourseCard;
