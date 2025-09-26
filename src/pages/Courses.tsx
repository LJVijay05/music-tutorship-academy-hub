
import { Users, User } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CoursesHero from "@/components/CoursesHero";
import CourseCard from "@/components/CourseCard";
import TrustIndicators from "@/components/TrustIndicators";
import MentorIntroduction from "@/components/MentorIntroduction";
import { memo, useCallback, useMemo } from "react";

const Courses = memo(() => {
  const courseData = useMemo(() => ({
    batchFeatures: [
      "15 students per batch",
      "12 months intensive program", 
      "Live weekly sessions",
      "Group collaboration projects",
      "Industry-standard software training",
      "Certificate upon completion"
    ],
    oneOnOneFeatures: [
      "Personalized curriculum",
      "Flexible scheduling", 
      "Direct mentor feedback",
      "Custom project development",
      "Industry networking opportunities",
      "Lifetime support access"
    ]
  }), []);

  const handleDetailsClick = useCallback((courseId: string) => {
    console.log('Details click handled via routing for course:', courseId);
  }, []);

  const courses = useMemo(() => [
    {
      courseId: "production-course",
      title: "Complete Music Production Mastery Course",
      description: "Group Learning",
      level: "From Beginner to Advanced Level",
      icon: Users,
      imageUrl: "/lovable-uploads/fd4cf1bf-e786-42ff-8762-0f6086327f43.png",
      features: courseData.batchFeatures,
      isPopular: false,
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
      offerText: "Regular Batch",
      offerSubtext: "Enroll for 1 Year & Get 15% Off!"
    },
    {
      courseId: "crash-course",
      title: "Essential Producer Bootcamp: Launch Your Music Career in 3 Months",
      description: "Intensive Learning",
      level: "Beginner to Intermediate Level",
      icon: Users,
      imageUrl: "/assets/music-production-studio.jpg",
      features: [
        "15 students per batch",
        "3 months intensive program",
        "Twice weekly sessions",
        "Hands-on project work",
        "Essential software training",
        "Certificate upon completion"
      ],
      isPopular: true,
      isPremium: false,
      gradientFrom: "from-purple-900",
      gradientTo: "to-purple-700",
      borderColor: "border-purple-100",
      textColor: "text-purple-700",
      bgColor: "bg-purple-50",
      buttonGradientFrom: "from-purple-600",
      buttonGradientTo: "to-purple-700",
      buttonHoverFrom: "from-purple-700",
      buttonHoverTo: "to-purple-800",
      offerText: "🚀 MOST POPULAR",
      offerSubtext: "Start Your Music Production Journey!"
    },
    {
      courseId: "mentorship-90",
      title: "One-on-One Music Production Mentorship",
      description: "1-on-1 Mentorship",
      level: "Personalized learning experience",
      icon: User,
      imageUrl: "/lovable-uploads/41512049-f13b-4a51-9366-65e165c66344.png",
      features: courseData.oneOnOneFeatures,
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
  ], [courseData.batchFeatures, courseData.oneOnOneFeatures]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50">
      <Navigation />
      
      <main className="pt-16">
        <CoursesHero />
        <MentorIntroduction />

        <section className="py-16 lg:py-20 relative" aria-labelledby="courses-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-20">
            <div className="text-center mb-12 lg:mb-16">
              <h2 id="courses-heading" className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Choose Your Learning Path
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-medium">
                Whether you prefer collaborative learning or personalized attention, we have the perfect program for you
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 xl:gap-12 justify-center max-w-7xl mx-auto">
              {courses.map((course) => (
                <CourseCard
                  key={course.courseId}
                  {...course}
                  onDetailsClick={handleDetailsClick}
                />
              ))}
            </div>

            <div className="mt-12 lg:mt-16">
              <TrustIndicators />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
});

Courses.displayName = 'Courses';

export default Courses;
