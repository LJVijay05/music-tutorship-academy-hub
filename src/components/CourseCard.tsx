
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, User, Clock, Star, Info } from "lucide-react";
import { Link } from "react-router-dom";
import StudentDataForm from "./StudentDataForm";
import SuccessPopup from "./SuccessPopup";
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
  const { 
    showStudentForm, 
    showSuccessPopup, 
    openForm, 
    closeForm, 
    showSuccess, 
    closeSuccess 
  } = useStudentForm();

  const handleEnquireClick = () => {
    console.log(`CourseCard: Enquire clicked for course ${courseId}`);
    openForm();
  };

  const handleFormSuccess = () => {
    console.log(`CourseCard: Student form submitted successfully for course ${courseId}`);
    showSuccess();
  };

  return (
    <>
      <article className="group">
        <Card className={`overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl h-full bg-white hover:-translate-y-1 relative ${isPremium ? 'ring-2 ring-amber-200' : ''}`}>
          {/* Popular Badge */}
          {isPopular && (
            <div className="absolute top-2 sm:top-3 left-2 sm:left-3 z-10">
              <div className="bg-green-500 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
                <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" />
                <span className="hidden sm:inline">POPULAR</span>
                <span className="sm:hidden">POP</span>
              </div>
            </div>
          )}

          {/* Premium Badge */}
          {isPremium && (
            <div className="absolute top-0 right-0 w-12 sm:w-16 h-12 sm:h-16 overflow-hidden z-20">
              <div className="absolute top-2 sm:top-3 right-[-15px] sm:right-[-20px] bg-gradient-to-r from-amber-500 to-yellow-500 text-xs font-bold px-3 sm:px-5 py-0.5 sm:py-1 transform rotate-45 shadow-md">
                <span className="text-xs">PREMIUM</span>
              </div>
            </div>
          )}

          <header className={`h-24 sm:h-32 lg:h-36 bg-gradient-to-br ${gradientFrom} ${gradientTo} relative overflow-hidden`}>
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center px-2 sm:px-3">
                <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white mb-1 sm:mb-2 mx-auto opacity-90" />
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-0.5 sm:py-1">
                  <span className="text-white font-semibold text-xs sm:text-sm">{description}</span>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </header>

          <CardContent className="p-3 sm:p-4 flex flex-col">
            <div className="mb-2 sm:mb-3">
              <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-1 text-gray-900 leading-tight line-clamp-2">{title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-1">{level}</p>
              <div className={`text-xs ${textColor} font-semibold ${bgColor} px-2 py-0.5 rounded-full inline-block mb-1 sm:mb-2`}>
                {description}
              </div>
            </div>
            
            <div className="flex-grow">
              <ul className="space-y-0.5 sm:space-y-1 mb-2 sm:mb-3 text-xs sm:text-sm">
                {features.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-start gap-1.5 sm:gap-2">
                    <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 line-clamp-1">{feature}</span>
                  </li>
                ))}
                {features.length > 4 && (
                  <li className="text-xs text-gray-500 pl-4 sm:pl-5">
                    +{features.length - 4} more features
                  </li>
                )}
              </ul>
              
              <div className={`flex items-start gap-1.5 sm:gap-2 mb-2 sm:mb-3 p-1.5 sm:p-2 ${bgColor} rounded-lg border ${borderColor} text-xs sm:text-sm`}>
                <Clock className={`w-3 h-3 sm:w-4 sm:h-4 ${textColor.replace('text-', 'text-').replace('-700', '-600')} flex-shrink-0 mt-0.5`} />
                <div>
                  <p className={`font-semibold ${textColor} text-xs`}>{offerText}</p>
                  <p className={`text-xs ${textColor.replace('text-', 'text-').replace('-700', '-600')} line-clamp-1`}>{offerSubtext}</p>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-1.5 sm:gap-2 mt-1 sm:mt-2">
              <Button 
                variant="outline" 
                className="border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 h-7 sm:h-8 rounded-lg font-medium text-xs flex-1 px-2"
                asChild
              >
                <Link to={`/courses/${courseId}`}>
                  <Info className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
                  <span className="hidden sm:inline">Details</span>
                  <span className="sm:hidden">Info</span>
                </Link>
              </Button>
              <Button 
                onClick={handleEnquireClick}
                className={`bg-gradient-to-r ${buttonGradientFrom} ${buttonGradientTo} hover:from-red-600 hover:to-pink-600 text-white h-7 sm:h-8 rounded-lg font-medium text-xs flex-1 px-2`}
              >
                <span className="hidden sm:inline">Enquire Now</span>
                <span className="sm:hidden">Enquire</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </article>

      <StudentDataForm 
        open={showStudentForm} 
        onOpenChange={closeForm}
        onSuccess={handleFormSuccess}
      />

      <SuccessPopup
        open={showSuccessPopup}
        onOpenChange={closeSuccess}
        title="Successful Registration"
        message="Thank you! You have successfully registered your interest. You can now proceed to explore our enrollment options."
        buttonText="Continue"
        redirectTo="/enrollment"
      />
    </>
  );
};

export default CourseCard;
