
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface CourseDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseId: string;
  courseTitle: string;
}

const CourseDetailsModal = ({ isOpen, onClose, courseId, courseTitle }: CourseDetailsModalProps) => {
  const getImageSrc = () => {
    if (courseId === "production-course") {
      return "/lovable-uploads/b3ac942f-a004-4e7e-a005-13fa36ac41a7.png";
    } else if (courseId === "mentorship-90") {
      return "/lovable-uploads/e58ecfe4-170c-4008-ae3f-65d7ac6cfc2c.png";
    }
    return "";
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl mx-auto bg-white rounded-3xl p-0 border-0 shadow-2xl">
        <div className="relative p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-20 bg-white rounded-full p-2 shadow-sm hover:shadow-md"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{courseTitle}</h2>
            <p className="text-gray-600">What You Will Learn</p>
          </div>
          
          <div className="w-full">
            <img 
              src={getImageSrc()} 
              alt={`${courseTitle} curriculum`}
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CourseDetailsModal;
