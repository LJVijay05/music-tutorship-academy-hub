
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, Monitor, Link as LinkIcon, Globe, Package, Target, Crown } from "lucide-react";
import { Link } from "react-router-dom";

interface CourseDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseId: string;
  courseTitle: string;
}

const CourseDetailsModal = ({ isOpen, onClose, courseId, courseTitle }: CourseDetailsModalProps) => {
  console.log('CourseDetailsModal rendered with:', { isOpen, courseId, courseTitle });

  const isPremium = courseId === "mentorship-90";
  
  const getCourseDetails = (courseId: string) => {
    if (courseId === "production-course") {
      return {
        features: [
          {
            icon: Monitor,
            title: "Group Learning",
            description: "Learn alongside 15 fellow students in our interactive batch program with collaborative projects."
          },
          {
            icon: LinkIcon,
            title: "Hands-on Projects",
            description: "Work on real music production projects from day one—learn recording, mixing, mastering, and finishing songs."
          },
          {
            icon: Globe,
            title: "Industry Standard",
            description: "Master professional software and techniques used by top producers in the music industry."
          },
          {
            icon: Target,
            title: "Structured Learning",
            description: "12-week intensive program with live weekly sessions and comprehensive curriculum coverage."
          }
        ]
      };
    } else {
      return {
        features: [
          {
            icon: Monitor,
            title: "Personal Lesson",
            description: "Learn at your own speed with a live 1-on-1 mentorship program designed just for you."
          },
          {
            icon: LinkIcon,
            title: "Hands-on Learning",
            description: "Make real music from day one—learn recording, mixing, mastering, and finishing songs."
          },
          {
            icon: Globe,
            title: "Industry Knowledge",
            description: "Learn how to work in the music world and collaborate effectively with other musicians and get the best from them."
          },
          {
            icon: Package,
            title: "Personal Insights",
            description: "You'll also get personal insights and lot of present updates and trends in global music."
          },
          {
            icon: Target,
            title: "Direct Support",
            description: "Get helpful feedback and guidance from me anytime you need it."
          }
        ]
      };
    }
  };

  const courseDetails = getCourseDetails(courseId);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`max-w-4xl max-h-[90vh] overflow-y-auto ${isPremium ? 'bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 border-2 border-amber-200' : 'bg-white'}`}>
        <DialogHeader className="relative">
          <button
            onClick={onClose}
            className="absolute right-0 top-0 p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="pr-10">
            <div className="flex items-center gap-3 mb-2">
              <DialogTitle className={`text-2xl font-bold ${isPremium ? 'text-amber-800' : 'text-gray-900'}`}>
                What You Will <span className={isPremium ? 'text-amber-600' : 'text-red-600'}>Learn</span>
              </DialogTitle>
              {isPremium && (
                <Badge className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold flex items-center gap-1">
                  <Crown className="w-3 h-3" />
                  FLAGSHIP
                </Badge>
              )}
            </div>
            <p className={`text-lg ${isPremium ? 'text-amber-700' : 'text-gray-600'} font-medium`}>
              {courseTitle}
            </p>
          </div>
        </DialogHeader>

        <div className="mt-6">
          <div className="grid md:grid-cols-2 gap-6">
            {courseDetails.features.map((feature, index) => (
              <div 
                key={index}
                className={`p-6 rounded-2xl transition-all duration-300 hover:shadow-md ${
                  isPremium 
                    ? 'bg-gradient-to-br from-amber-100 to-yellow-100 border border-amber-200 hover:shadow-amber-200' 
                    : 'bg-red-50 border border-red-100 hover:shadow-red-100'
                }`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${
                  isPremium 
                    ? 'bg-gradient-to-br from-amber-500 to-yellow-500' 
                    : 'bg-gradient-to-br from-red-500 to-red-600'
                }`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-lg font-bold mb-2 ${isPremium ? 'text-amber-800' : 'text-red-700'}`}>
                  {feature.title}
                </h3>
                <p className={`text-sm leading-relaxed ${isPremium ? 'text-amber-700' : 'text-gray-600'}`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button 
              className={`px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                isPremium 
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black' 
                  : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white'
              }`}
              asChild
            >
              <Link to="/enrollment">
                Enroll Now
              </Link>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CourseDetailsModal;
