
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Clock, 
  Users, 
  Star, 
  Play, 
  Award,
  Target,
  Zap
} from "lucide-react";
import { useStudentForm } from "@/hooks/useStudentForm";
import EnhancedStudentForm from "@/components/EnhancedStudentForm";
import SuccessPopup from "@/components/SuccessPopup";

interface CourseDetailsContentProps {
  courseId?: string;
  courseTitle: string;
  courseDescription: string;
  level: string;
  duration: string;
  batchSize: string;
  features: string[];
  syllabus: {
    module: string;
    topics: string[];
  }[];
  price?: string;
  originalPrice?: string;
  discount?: string;
  courseType: "group" | "individual";
  showPricing?: boolean;
}

const CourseDetailsContent = ({
  courseId,
  courseTitle,
  courseDescription,
  level,
  duration,
  batchSize,
  features,
  syllabus,
  price,
  originalPrice,
  discount,
  courseType,
  showPricing = false
}: CourseDetailsContentProps) => {
  const { 
    showStudentForm, 
    showSuccessPopup, 
    setShowStudentForm, 
    showSuccess, 
    closeSuccess 
  } = useStudentForm();

  const handleApplyNow = () => {
    setShowStudentForm(true);
  };

  const handleFormSuccess = () => {
    showSuccess();
  };

  return (
    <div className="pt-16 md:pt-20">
      {/* Enhanced Student Form with OTP */}
      <EnhancedStudentForm 
        open={showStudentForm} 
        onOpenChange={setShowStudentForm}
        onSuccess={handleFormSuccess}
      />

      {/* Success Popup */}
      <SuccessPopup
        open={showSuccessPopup}
        onOpenChange={closeSuccess}
        title="Application Submitted!"
        message="Thank you for your interest! We'll contact you within 24 hours to discuss your learning journey."
        buttonText="Go to Enrollment"
        redirectTo={courseId === "crash-course" ? "/essential-bootcamp-enrollment" : "/enrollment"}
      />

      {/* Hero Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className={`grid ${showPricing ? 'lg:grid-cols-2' : 'lg:grid-cols-1'} gap-8 lg:gap-12 items-center`}>
              
              {/* Course Info - Full width when pricing is hidden */}
              <div className={`space-y-4 sm:space-y-6 ${!showPricing ? 'max-w-4xl mx-auto text-center' : ''}`}>
                <div className="space-y-3 sm:space-y-4">
                  <div className={`flex flex-wrap items-center gap-2 sm:gap-3 ${!showPricing ? 'justify-center' : ''}`}>
                    <Badge className={`px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold ${
                      courseType === "individual" 
                        ? "bg-amber-100 text-amber-700" 
                        : "bg-green-100 text-green-700"
                    }`}>
                      {courseType === "individual" ? "PREMIUM MENTORSHIP" : "POPULAR CHOICE"}
                    </Badge>
                    {showPricing && discount && (
                      <Badge className="bg-red-100 text-red-700 px-2 sm:px-3 py-1 text-xs sm:text-sm">
                        {discount} OFF
                      </Badge>
                    )}
                  </div>
                  
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    {courseTitle}
                  </h1>
                  
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    {courseDescription}
                  </p>
                </div>

                {/* Course Stats */}
                <div className={`grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 ${!showPricing ? 'max-w-2xl mx-auto' : ''}`}>
                  <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <Target className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-gray-900">{level}</p>
                      <p className="text-xs text-gray-600">Skill Level</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-gray-900">{duration}</p>
                      <p className="text-xs text-gray-600">Duration</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-gray-900">{batchSize}</p>
                      <p className="text-xs text-gray-600">Class Size</p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className={`flex ${!showPricing ? 'max-w-lg mx-auto' : ''}`}>
                  <Button 
                    onClick={handleApplyNow}
                    className={`w-full h-11 sm:h-12 text-sm sm:text-base font-semibold shadow-lg transition-all duration-300 hover:scale-105 ${
                      courseType === "individual"
                        ? "bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black"
                        : "bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white"
                    }`}
                  >
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Apply Now
                  </Button>
                </div>
              </div>

              {/* Right Column - Pricing Card (only show if showPricing is true) */}
              {showPricing && price && originalPrice && discount && (
                <div className="lg:sticky lg:top-24">
                  <Card className={`shadow-2xl border-0 overflow-hidden ${
                    courseType === "individual" 
                      ? "bg-gradient-to-br from-amber-50 via-yellow-50 to-white ring-2 ring-amber-200" 
                      : "bg-gradient-to-br from-white via-red-50 to-white ring-1 ring-red-100"
                  }`}>
                    <CardContent className="p-0">
                      <div className={`p-4 sm:p-6 ${
                        courseType === "individual" 
                          ? "bg-gradient-to-r from-amber-500 to-yellow-500" 
                          : "bg-gradient-to-r from-red-600 to-red-500"
                      } text-white`}>
                        <div className="text-center">
                          <p className="text-sm sm:text-base opacity-90 mb-1">Course Investment</p>
                          <div className="flex items-center justify-center gap-2 sm:gap-3">
                            <span className="text-lg sm:text-xl line-through opacity-75">{originalPrice}</span>
                            <span className="text-2xl sm:text-3xl md:text-4xl font-bold">{price}</span>
                          </div>
                          <p className="text-xs sm:text-sm opacity-90 mt-1">Limited Time Offer - {discount} OFF!</p>
                        </div>
                      </div>
                      
                      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                        <div>
                          <h3 className="font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
                            What's Included:
                          </h3>
                          <div className="space-y-2 sm:space-y-3">
                            {features.map((feature, index) => (
                              <div key={index} className="flex items-start gap-2 sm:gap-3">
                                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <Button 
                          onClick={handleApplyNow}
                          className={`w-full h-11 sm:h-12 text-sm sm:text-base font-bold shadow-lg transition-all duration-300 hover:scale-105 ${
                            courseType === "individual" 
                              ? "bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black" 
                              : "bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600"
                          }`}
                        >
                          <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                          Secure Your Spot
                        </Button>
                        
                        <div className="text-center">
                          <p className="text-xs text-gray-500">
                            ✓ 30-day money-back guarantee
                          </p>
                          <p className="text-xs text-gray-500">
                            ✓ Secure payment processing
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Course Syllabus */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">
                Course Curriculum
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Comprehensive learning path designed by industry experts
              </p>
            </div>
            
            <div className="grid gap-4 sm:gap-6">
              {syllabus.map((module, index) => (
                <Card key={index} className="border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-white text-sm sm:text-base ${
                        courseType === "individual" ? "bg-amber-500" : "bg-red-500"
                      }`}>
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                          {module.module}
                        </h3>
                        <ul className="space-y-1 sm:space-y-2">
                          {module.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-start gap-2">
                              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span className="text-gray-700 text-xs sm:text-sm">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetailsContent;
