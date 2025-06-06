
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutSection />
      <CoursesSection />
      <WhyChooseSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
