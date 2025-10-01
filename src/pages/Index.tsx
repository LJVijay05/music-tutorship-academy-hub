
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen critical-above-fold">
      <Navigation />
      <main role="main">
        <Hero />
        <AboutSection />
        <CoursesSection showOnlyFeatured={true} />
        <WhyChooseSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
