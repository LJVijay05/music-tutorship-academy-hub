
import { Users, User } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CoursesHero from "@/components/CoursesHero";
import CourseCard from "@/components/CourseCard";
import TrustIndicators from "@/components/TrustIndicators";

const Courses = () => {
  const batchFeatures = [
    "15 students per batch",
    "12 months intensive program",
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

  // Placeholder function since we're now using direct routing
  const handleDetailsClick = (courseId: string) => {
    console.log('Details click handled via routing for course:', courseId);
  };

  const courses = [
    {
      courseId: "production-course",
      title: "Complete Music Production Mastery Course",
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
      level: "Personalized learning experience",
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
      
      <main className="pt-16">
        <CoursesHero />

        <section className="py-12 sm:py-16 md:py-20 relative" aria-labelledby="courses-heading">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
            <div className="text-center mb-12 sm:mb-16">
              <h2 id="courses-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
                Choose Your Learning Path
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto px-4 font-medium">
                Whether you prefer collaborative learning or personalized attention, we have the perfect program for you
              </p>
            </div>

            {/* Optimized grid for better screen fit */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {courses.map((course) => (
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
              ))}
            </div>

            <div className="mt-12 sm:mt-16">
              <TrustIndicators />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Courses;
