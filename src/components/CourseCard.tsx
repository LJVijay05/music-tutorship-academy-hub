
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Star, Info } from "lucide-react";
import { Link } from "react-router-dom";
import StudentDataForm from "./StudentDataForm";
import SuccessPopup from "./SuccessPopup";
import { useStudentForm } from "@/hooks/useStudentForm";

interface CourseCardProps {
  courseId: string;
  title: string;
  description: string;
  level: string;
  icon: any;
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
      <article className="group w-full">
        <Card className={`overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl h-full bg-white hover:-translate-y-2 relative group-hover:scale-[1.02] ${isPremium ? 'ring-2 ring-amber-200/50' : ''}`}>
          {/* Popular Badge */}
          {isPopular && (
            <div className="absolute top-4 left-4 z-20">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg backdrop-blur-sm">
                <Star className="w-3 h-3 fill-current" />
                <span>POPULAR</span>
              </div>
            </div>
          )}

          {/* Premium Badge */}
          {isPremium && (
            <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden z-20">
              <div className="absolute top-4 right-[-25px] bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-xs font-bold px-6 py-1 transform rotate-45 shadow-lg">
                PREMIUM
              </div>
            </div>
          )}

          {/* Header with Image Placeholder */}
          <header className={`h-48 md:h-56 bg-gradient-to-br ${gradientFrom} ${gradientTo} relative overflow-hidden`}>
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center px-4">
                {/* Placeholder for future image - currently using icon */}
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white opacity-90" />
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
                  <span className="text-white font-semibold text-sm md:text-base">{description}</span>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          </header>

          <CardContent className="p-6 md:p-8 flex flex-col h-auto">
            {/* Title and Level */}
            <div className="mb-6">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 text-gray-900 leading-tight line-clamp-2">{title}</h3>
              <p className="text-sm md:text-base text-gray-600 mb-3">{level}</p>
              <div className={`text-xs md:text-sm ${textColor} font-semibold ${bgColor} px-3 py-1.5 rounded-full inline-block`}>
                {description}
              </div>
            </div>
            
            {/* Features */}
            <div className="flex-grow mb-6">
              <ul className="space-y-2 md:space-y-3 mb-4 text-sm md:text-base">
                {features.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </li>
                ))}
                {features.length > 4 && (
                  <li className="text-sm text-gray-500 pl-7 md:pl-8 font-medium">
                    +{features.length - 4} more features
                  </li>
                )}
              </ul>
              
              {/* Offer Banner */}
              <div className={`flex items-start gap-3 p-4 ${bgColor} rounded-xl border ${borderColor} text-sm md:text-base shadow-sm`}>
                <Clock className={`w-4 h-4 md:w-5 md:h-5 ${textColor.replace('text-', 'text-').replace('-700', '-600')} flex-shrink-0 mt-0.5`} />
                <div>
                  <p className={`font-bold ${textColor} text-sm md:text-base`}>{offerText}</p>
                  <p className={`text-xs md:text-sm ${textColor.replace('text-', 'text-').replace('-700', '-600')} mt-1`}>{offerSubtext}</p>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-3 mt-auto">
              <Button 
                variant="outline" 
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 h-11 md:h-12 rounded-xl font-semibold text-sm md:text-base flex-1 hover:scale-105"
                asChild
              >
                <Link to={`/courses/${courseId}`}>
                  <Info className="w-4 h-4 mr-2" />
                  Details
                </Link>
              </Button>
              <Button 
                onClick={handleEnquireClick}
                className={`bg-gradient-to-r ${buttonGradientFrom} ${buttonGradientTo} hover:from-red-600 hover:to-pink-600 text-white h-11 md:h-12 rounded-xl font-semibold text-sm md:text-base flex-1 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
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
