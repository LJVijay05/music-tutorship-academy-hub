import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { memo } from "react";

const Index = memo(() => {
  return (
    <div className="min-h-screen">
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
});

Index.displayName = 'Index';

export default Index;
