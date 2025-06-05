
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import CoursesSection from "@/components/CoursesSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <main>
        <div className="animate-fade-in">
          <Hero />
        </div>
        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <AboutSection />
        </div>
        <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <WhyChooseSection />
        </div>
        <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <CoursesSection />
        </div>
        <div className="animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <FAQSection />
        </div>
      </main>
      <div className="animate-slide-in-bottom" style={{ animationDelay: '1s' }}>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
