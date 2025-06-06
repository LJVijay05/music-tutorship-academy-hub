
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
        <Card className={`overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl h-full bg-white hover:-translate-y-1 relative ${isPremium ? 'ring-2 ring-amber-200' : ''}`}>
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
            <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden z-20">
              <div className="absolute top-3 right-[-20px] bg-gradient-to-r from-amber-500 to-yellow-500 text-xs font-bold px-5 py-1 transform rotate-45 shadow-md">
                PREMIUM
              </div>
            </div>
          )}

          <header className={`h-36 bg-gradient-to-br ${gradientFrom} ${gradientTo} relative overflow-hidden`}>
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center px-3">
                <IconComponent className="w-10 h-10 text-white mb-2 mx-auto opacity-90" />
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-white font-semibold text-sm">{description}</span>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </header>

          <CardContent className="p-4 flex flex-col">
            <div className="mb-3">
              <h3 className="text-lg font-bold mb-1 text-gray-900 leading-tight">{title}</h3>
              <p className="text-sm text-gray-600 mb-1">{level}</p>
              <div className={`text-xs ${textColor} font-semibold ${bgColor} px-2 py-0.5 rounded-full inline-block mb-2`}>
                {description}
              </div>
            </div>
            
            <div className="flex-grow">
              <ul className="space-y-1 mb-3 text-sm">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className={`flex items-center gap-2 mb-3 p-2 ${bgColor} rounded-lg border ${borderColor} text-sm`}>
                <Clock className={`w-4 h-4 ${textColor.replace('text-', 'text-').replace('-700', '-600')} flex-shrink-0`} />
                <div>
                  <p className={`font-semibold ${textColor} text-xs`}>{offerText}</p>
                  <p className={`text-xs ${textColor.replace('text-', 'text-').replace('-700', '-600')}`}>{offerSubtext}</p>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-2 mt-2">
              <Button 
                variant="outline" 
                className="border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 h-8 rounded-lg font-medium text-xs flex-1"
                asChild
              >
                <Link to={`/courses/${courseId}`}>
                  <Info className="w-3 h-3 mr-1" />
                  Details
                </Link>
              </Button>
              <Button 
                onClick={openForm}
                className={`bg-gradient-to-r ${buttonGradientFrom} ${buttonGradientTo} hover:from-red-600 hover:to-pink-600 text-white h-8 rounded-lg font-medium text-xs flex-1`}
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
