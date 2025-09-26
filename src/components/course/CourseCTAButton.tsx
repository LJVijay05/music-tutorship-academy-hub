import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useStudentForm } from "@/hooks/useStudentForm";

interface CourseCTAButtonProps {
  courseId: string;
  isPremium?: boolean;
  className?: string;
  children: React.ReactNode;
}

const CourseCTAButton = ({ courseId, isPremium = false, className = "", children }: CourseCTAButtonProps) => {
  const navigate = useNavigate();
  const { openForm } = useStudentForm();

  const handleClick = () => {
    openForm();
  };

  const buttonStyles = isPremium 
    ? 'bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-amber-900' 
    : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white';

  return (
    <Button 
      onClick={handleClick}
      className={`px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${buttonStyles} ${className}`}
    >
      {children}
    </Button>
  );
};

export default CourseCTAButton;