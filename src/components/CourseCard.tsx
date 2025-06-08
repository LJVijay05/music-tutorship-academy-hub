
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
  imageUrl?: string; // New prop for future image support
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
  onDetailsClick,
  imageUrl
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
      <article className="group w-full max-w-2xl mx-auto">
        <Card className={`overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 ease-out rounded-3xl h-full bg-white hover:-translate-y-3 relative group-hover:scale-[1.03] ${isPremium ? 'ring-4 ring-amber-200/60 animate-premium-golden-glow' : ''}`}>
          {/* Popular Badge */}
          {isPopular && (
            <div className="absolute top-6 left-6 z-30">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-xl backdrop-blur-sm border border-white/20">
                <Star className="w-4 h-4 fill-current" />
                <span>POPULAR</span>
              </div>
            </div>
          )}

          {/* Premium Badge */}
          {isPremium && (
            <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden z-30">
              <div className="absolute top-5 right-[-28px] bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-sm font-bold px-8 py-1.5 transform rotate-45 shadow-xl border-t border-b border-white/20">
                PREMIUM
              </div>
            </div>
          )}

          {/* Enhanced Header with Image/Icon Placeholder */}
          <header className={`h-64 md:h-72 lg:h-80 bg-gradient-to-br ${gradientFrom} ${gradientTo} relative overflow-hidden`}>
            {/* Future image container */}
            <div className="absolute inset-0">
              {imageUrl ? (
                <img 
                  src={imageUrl} 
                  alt={title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-black/20 to-black/40" />
              )}
            </div>
            
            {/* Overlay content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 flex items-center justify-center">
              <div className="text-center px-6 max-w-md">
                {/* Icon container - designed for future image replacement */}
                <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mx-auto mb-6 bg-white/15 backdrop-blur-lg rounded-3xl flex items-center justify-center border border-white/20 shadow-2xl">
                  <IconComponent className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-white opacity-95" />
                </div>
                <div className="bg-white/20 backdrop-blur-lg rounded-2xl px-6 py-3 border border-white/20">
                  <span className="text-white font-bold text-base md:text-lg">{description}</span>
                </div>
              </div>
            </div>
          </header>

          <CardContent className="p-8 md:p-10 lg:p-12 flex flex-col h-auto">
            {/* Title and Level Section */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-gray-900 leading-tight line-clamp-2">{title}</h3>
              <p className="text-base md:text-lg text-gray-600 mb-4 font-medium">{level}</p>
              <div className={`text-sm md:text-base ${textColor} font-bold ${bgColor} px-4 py-2.5 rounded-2xl inline-block shadow-lg border ${borderColor}`}>
                {description}
              </div>
            </div>
            
            {/* Features Section */}
            <div className="flex-grow mb-8">
              <ul className="space-y-3 md:space-y-4 mb-6 text-base md:text-lg">
                {features.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 leading-relaxed font-medium">{feature}</span>
                  </li>
                ))}
                {features.length > 4 && (
                  <li className="text-base text-gray-500 pl-9 md:pl-10 font-semibold">
                    +{features.length - 4} more features
                  </li>
                )}
              </ul>
              
              {/* Enhanced Offer Banner */}
              <div className={`flex items-start gap-4 p-6 ${bgColor} rounded-2xl border-2 ${borderColor} text-base md:text-lg shadow-xl`}>
                <Clock className={`w-6 h-6 md:w-7 md:h-7 ${textColor.replace('text-', 'text-').replace('-700', '-600')} flex-shrink-0 mt-1`} />
                <div>
                  <p className={`font-bold ${textColor} text-base md:text-lg mb-2`}>{offerText}</p>
                  <p className={`text-sm md:text-base ${textColor.replace('text-', 'text-').replace('-700', '-600')}`}>{offerSubtext}</p>
                </div>
              </div>
            </div>
            
            {/* Enhanced Action Buttons */}
            <div className="flex gap-4 mt-auto">
              <Button 
                variant="outline" 
                className="border-3 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 h-14 md:h-16 rounded-2xl font-bold text-base md:text-lg flex-1 hover:scale-105 shadow-lg hover:shadow-xl"
                asChild
              >
                <Link to={`/courses/${courseId}`}>
                  <Info className="w-5 h-5 mr-3" />
                  Details
                </Link>
              </Button>
              <Button 
                onClick={handleEnquireClick}
                className={`bg-gradient-to-r ${buttonGradientFrom} ${buttonGradientTo} hover:from-red-600 hover:to-pink-600 text-white h-14 md:h-16 rounded-2xl font-bold text-base md:text-lg flex-1 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-white/20`}
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
