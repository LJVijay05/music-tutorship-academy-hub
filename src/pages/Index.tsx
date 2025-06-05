
import Navigation from "@/components/Navigation";
import PremiumHero from "@/components/PremiumHero";
import InteractiveCourses from "@/components/InteractiveCourses";
import InstructorProfile from "@/components/InstructorProfile";
import StudentTestimonials from "@/components/StudentTestimonials";
import StreamlinedEnrollment from "@/components/StreamlinedEnrollment";
import PremiumFAQ from "@/components/PremiumFAQ";
import PremiumContact from "@/components/PremiumContact";
import PremiumFooter from "@/components/PremiumFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <PremiumHero />
        <InteractiveCourses />
        <InstructorProfile />
        <StudentTestimonials />
        <StreamlinedEnrollment />
        <PremiumFAQ />
        <PremiumContact />
      </main>
      <PremiumFooter />
    </div>
  );
};

export default Index;
