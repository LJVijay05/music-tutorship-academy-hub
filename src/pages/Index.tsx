
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import CoursesSection from "@/components/CoursesSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="animate-fade-in">
        <Hero />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <AboutSection />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <WhyChooseSection />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <CoursesSection />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <FAQSection />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
