
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import CoursesSection from "@/components/CoursesSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <main>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <Hero />
        </div>
        <div className="animate-slide-in-from-left" style={{ animationDelay: '0.3s' }}>
          <AboutSection />
        </div>
        <div className="animate-slide-in-from-right" style={{ animationDelay: '0.5s' }}>
          <WhyChooseSection />
        </div>
        <div className="animate-zoom-in-up" style={{ animationDelay: '0.7s' }}>
          <CoursesSection />
        </div>
        <div className="animate-slide-in-from-bottom" style={{ animationDelay: '0.9s' }}>
          <PricingSection />
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '1.1s' }}>
          <FAQSection />
        </div>
      </main>
      <div className="animate-slide-in-bottom" style={{ animationDelay: '1.3s' }}>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
