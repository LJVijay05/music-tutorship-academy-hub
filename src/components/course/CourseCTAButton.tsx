import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useStudentForm } from "@/hooks/useStudentForm";
import EnhancedStudentForm from "@/components/EnhancedStudentForm";
import SuccessPopup from "@/components/SuccessPopup";

interface CourseCTAButtonProps {
  courseId: string;
  isPremium?: boolean;
  className?: string;
  children: React.ReactNode;
}

const CourseCTAButton = ({ courseId, isPremium = false, className = "", children }: CourseCTAButtonProps) => {
  const navigate = useNavigate();
  const { 
    showStudentForm, 
    showSuccessPopup, 
    setShowStudentForm, 
    showSuccess, 
    closeSuccess 
  } = useStudentForm();

  const handleClick = () => {
    setShowStudentForm(true);
  };

  const handleFormSuccess = () => {
    showSuccess();
  };

  const buttonStyles = isPremium 
    ? 'bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-amber-900' 
    : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white';

  return (
    <>
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

      <Button 
        onClick={handleClick}
        className={`px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${buttonStyles} ${className}`}
      >
        {children}
      </Button>
    </>
  );
};

export default CourseCTAButton;