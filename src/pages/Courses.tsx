
import { useState } from "react";
import { Users, User } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CourseDetailsModal from "@/components/CourseDetailsModal";
import CoursesHero from "@/components/CoursesHero";
import CourseCard from "@/components/CourseCard";
import TrustIndicators from "@/components/TrustIndicators";

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log('Courses component rendered');
  console.log('Selected course:', selectedCourse);
  console.log('Modal open:', isModalOpen);

  const batchFeatures = [
    "15 students per batch",
    "12 weeks intensive program",
    "Live weekly sessions",
    "Group collaboration projects",
    "Industry-standard software training",
    "Certificate upon completion"
  ];

  const oneOnOneFeatures = [
    "Personalized curriculum",
    "Flexible scheduling",
    "Direct mentor feedback",
    "Custom project development",
    "Industry networking opportunities",
    "Lifetime support access"
  ];

  const handleDetailsClick = (courseId: string) => {
    console.log('handleDetailsClick called with courseId:', courseId);
    setSelectedCourse(courseId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log('Closing modal');
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  const getCourseTitle = (courseId: string) => {
    return courseId === "production-course" 
      ? "Complete Music Production Course"
      : "One-on-One Music Production Mentorship";
  };

  const courses = [
    {
      courseId: "production-course",
      title: "Complete Music Production Course",
      description: "Group Learning",
      level: "From Beginner to Advanced Level",
      icon: Users,
      features: batchFeatures,
      isPopular: true,
      isPremium: false,
      gradientFrom: "from-gray-900",
      gradientTo: "to-gray-700",
      borderColor: "border-red-100",
      textColor: "text-red-700",
      bgColor: "bg-red-50",
      buttonGradientFrom: "from-red-600",
      buttonGradientTo: "to-red-700",
      buttonHoverFrom: "from-red-700",
      buttonHoverTo: "to-red-800",
      offerText: "Limited Time Offer",
      offerSubtext: "Enroll for 1 Year & Get 15% Off!"
    },
    {
      courseId: "mentorship-90",
      title: "One-on-One Music Production Mentorship",
      description: "1-on-1 Mentorship",
      level: "Master the complete journey of music production",
      icon: User,
      features: oneOnOneFeatures,
      isPopular: false,
      isPremium: true,
      gradientFrom: "from-amber-600",
      gradientTo: "to-red-700",
      borderColor: "border-amber-200",
      textColor: "text-amber-700",
      bgColor: "bg-amber-50",
      buttonGradientFrom: "from-amber-500",
      buttonGradientTo: "to-yellow-500",
      buttonHoverFrom: "from-amber-600",
      buttonHoverTo: "to-yellow-600",
      offerText: "Exclusive Offer",
      offerSubtext: "Enroll for 1 Year & Get 20% Off!"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50">
      <Navigation />
      
      <main className="pt-16 md:pt-20">
        <CoursesHero />

        <section className="py-16 md:py-20 relative" aria-labelledby="courses-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <h2 id="courses-heading" className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900 px-2">
                Choose Your Learning Path
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                Whether you prefer collaborative learning or personalized attention, we have the perfect program for you
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
              {courses.map((course) => {
                console.log('Rendering course:', course.courseId);
                return (
                  <CourseCard
                    key={course.courseId}
                    courseId={course.courseId}
                    title={course.title}
                    description={course.description}
                    level={course.level}
                    icon={course.icon}
                    features={course.features}
                    isPopular={course.isPopular}
                    isPremium={course.isPremium}
                    gradientFrom={course.gradientFrom}
                    gradientTo={course.gradientTo}
                    borderColor={course.borderColor}
                    textColor={course.textColor}
                    bgColor={course.bgColor}
                    buttonGradientFrom={course.buttonGradientFrom}
                    buttonGradientTo={course.buttonGradientTo}
                    buttonHoverFrom={course.buttonHoverFrom}
                    buttonHoverTo={course.buttonHoverTo}
                    offerText={course.offerText}
                    offerSubtext={course.offerSubtext}
                    onDetailsClick={handleDetailsClick}
                  />
                );
              })}
            </div>

            <div className="mt-12 md:mt-16">
              <TrustIndicators />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {selectedCourse && (
        <CourseDetailsModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          courseId={selectedCourse}
          courseTitle={getCourseTitle(selectedCourse)}
        />
      )}
    </div>
  );
};

export default Courses;
