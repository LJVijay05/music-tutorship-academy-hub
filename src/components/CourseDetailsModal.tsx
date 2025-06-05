
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, Book, Guitar, Globe, Box, Target, Volume2, Headphones, Music2 } from "lucide-react";

interface CourseDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseId: string;
  courseTitle: string;
}

const CourseDetailsModal = ({ isOpen, onClose, courseId, courseTitle }: CourseDetailsModalProps) => {
  const getCurriculumData = () => {
    if (courseId === "production-course") {
      return [
        {
          icon: Volume2,
          title: "Daw basics",
          description: "Master essential music software tools and shortcuts for Music production."
        },
        {
          icon: Guitar,
          title: "Music theory",
          description: "Learn fundamental music theory concepts essential for music production."
        },
        {
          icon: Target,
          title: "Music production basics",
          description: "Create compelling beats, melodies, and bass lines—the core elements of every EDM track."
        },
        {
          icon: Music2,
          title: "Sound design",
          description: "Create unique sounds using advanced synthesizer techniques."
        },
        {
          icon: Headphones,
          title: "Sample selection",
          description: "Learn to choose the right sound samples and customize the perfect sounds for your tracks."
        },
        {
          icon: Music2,
          title: "Song structure",
          description: "Learn how to build your track from start to finish."
        },
        {
          icon: Box,
          title: "Gen-AI tools",
          description: "You'll also learn essential AI tools needed to explore a wide range of creative possibilities in music production"
        },
        {
          icon: Target,
          title: "Mixing & mastering",
          description: "Master the art of mixing and mastering to ensure your tracks sound professional everywhere."
        }
      ];
    } else if (courseId === "mentorship-90") {
      return [
        {
          icon: Book,
          title: "Personal lesson",
          description: "Learn at your own speed with a live 1-on-1 mentorship program designed just for you."
        },
        {
          icon: Guitar,
          title: "Hands-on learning",
          description: "Make real music from day one—learn recording, mixing, mastering, and finishing songs"
        },
        {
          icon: Globe,
          title: "Industry knowledge",
          description: "Learn how to work in the music world and collaborate effectively with other musicians and get the best from them."
        },
        {
          icon: Box,
          title: "Personal insights",
          description: "You'll also get personal insights and lot of present updates and trends in global music."
        },
        {
          icon: Target,
          title: "Direct support",
          description: "Get helpful feedback and guidance from me anytime you need it."
        }
      ];
    }
    return [];
  };

  const curriculumData = getCurriculumData();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl mx-auto bg-white rounded-3xl p-0 border-0 shadow-2xl">
        <div className="relative p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-20 bg-white rounded-full p-2 shadow-sm hover:shadow-md"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">
              <span className="text-red-600">What You Will</span> <span className="text-gray-900">Learn</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {curriculumData.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 text-center border border-red-100 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-red-600 mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CourseDetailsModal;
