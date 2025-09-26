
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Star, Info } from "lucide-react";
import { Link } from "react-router-dom";
import EnhancedStudentForm from "./EnhancedStudentForm";
import SuccessPopup from "./SuccessPopup";
import { useStudentForm } from "@/hooks/useStudentForm";
import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

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
  imageUrl?: string;
}

const CourseCard = memo(({
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
  const navigate = useNavigate();
  const { 
    showStudentForm, 
    showSuccessPopup, 
    openForm, 
    closeForm, 
    showSuccess, 
    closeSuccess 
  } = useStudentForm();

  const handleEnquireClick = useCallback(() => {
    console.log(`CourseCard: Enquire clicked for course ${courseId}`);
    openForm();
  }, [courseId, openForm]);

  const handleFormSuccess = useCallback(() => {
    console.log(`CourseCard: Student form submitted successfully for course ${courseId}`);
    // Redirect directly to payments/enrollment page instead of showing success popup
    navigate('/enrollment');
  }, [courseId, navigate]);

  return (
    <>
      <article className="group w-full max-w-md h-full">
        <Card className={`overflow-hidden border-0 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 rounded-2xl h-full bg-white relative ${isPremium ? 'ring-2 ring-amber-200/60' : ''} w-full`}>
          {/* Course Type Icon - moved to top-left as floating badge */}
          <div className="absolute top-4 left-4 z-30">
            <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/40 shadow-md">
              <IconComponent className="w-4 h-4 text-gray-600" />
            </div>
          </div>

          {/* Popular Badge */}
          {isPopular && (
            <div className="absolute top-4 right-4 z-30">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg backdrop-blur-sm border border-white/20">
                <Star className="w-3 h-3 fill-current" />
                <span>POPULAR</span>
              </div>
            </div>
          )}

          {/* Premium Badge */}
          {isPremium && (
            <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden z-30">
              <div className="absolute top-4 right-[-24px] bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-xs font-bold px-6 py-1 transform rotate-45 shadow-lg border-t border-b border-white/20">
                PREMIUM
              </div>
            </div>
          )}

          {/* Header - Clean image without overlay text */}
          <header className={`h-48 md:h-52 bg-gradient-to-br ${gradientFrom} ${gradientTo} relative overflow-hidden`}>
            <div className="absolute inset-0">
              {imageUrl ? (
                <img 
                  src={imageUrl} 
                  alt={`${title} course preview`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="200"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-black/20 to-black/40" />
              )}
            </div>
          </header>

          <CardContent className="p-6 md:p-7 flex flex-col h-auto">
            {/* Title and Level Section */}
            <div className="mb-6">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900 leading-tight line-clamp-2">{title}</h3>
              <p className="text-sm md:text-base text-gray-600 mb-3 font-medium">{level}</p>
              <div className={`text-xs md:text-sm ${textColor} font-bold ${bgColor} px-3 py-2 rounded-xl inline-block shadow-md border ${borderColor}`}>
                Course Type: {description}
              </div>
            </div>
            
            {/* Features Section */}
            <div className="flex-grow mb-6">
              <ul className="space-y-2.5 mb-5 text-sm md:text-base" role="list">
                {features.slice(0, 4).map((feature, index) => (
                  <li key={`${courseId}-feature-${index}`} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-gray-700 leading-relaxed font-medium">{feature}</span>
                  </li>
                ))}
                {features.length > 4 && (
                  <li className="text-sm text-gray-500 pl-7 md:pl-8 font-semibold">
                    +{features.length - 4} more features
                  </li>
                )}
              </ul>
              
              {/* Offer Banner */}
              <div className={`flex items-start gap-3 p-4 ${bgColor} rounded-xl border-2 ${borderColor} text-sm md:text-base shadow-lg`}>
                <Clock className={`w-5 h-5 ${textColor.replace('text-', 'text-').replace('-700', '-600')} flex-shrink-0 mt-0.5`} />
                <div>
                  <p className={`font-bold ${textColor} text-sm md:text-base mb-1`}>{offerText}</p>
                  <p className={`text-xs md:text-sm ${textColor.replace('text-', 'text-').replace('-700', '-600')}`}>{offerSubtext}</p>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-3 mt-auto">
              <Button 
                variant="outline" 
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200 h-11 md:h-12 rounded-xl font-bold text-sm md:text-base flex-1 shadow-md"
                asChild
              >
                <Link to={`/courses/${courseId}`}>
                  <Info className="w-4 h-4 mr-2" />
                  Details
                </Link>
              </Button>
              <Button 
                onClick={handleEnquireClick}
                className={`bg-gradient-to-r ${buttonGradientFrom} ${buttonGradientTo} hover:from-red-600 hover:to-pink-600 text-white h-11 md:h-12 rounded-xl font-bold text-sm md:text-base flex-1 shadow-lg transition-colors duration-200 border-2 border-white/20`}
              >
                Enquire Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </article>

      <EnhancedStudentForm 
        open={showStudentForm} 
        onOpenChange={closeForm}
        onSuccess={handleFormSuccess}
      />

      <SuccessPopup
        open={showSuccessPopup}
        onOpenChange={closeSuccess}
        title="Successful Registration"
        message={courseId === "crash-course" 
          ? "Thank you! You're all set to enroll in the Essential Producer Bootcamp. Let's get you started on your 3-month music journey!"
          : "Thank you! You have successfully registered your interest. You can now proceed to explore our enrollment options."
        }
        buttonText={courseId === "crash-course" ? "Go to Bootcamp Enrollment" : "Continue"}
        redirectTo={courseId === "crash-course" ? "/essential-bootcamp-enrollment" : "/enrollment"}
      />
    </>
  );
});

CourseCard.displayName = 'CourseCard';

export default CourseCard;
