
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
    // Optimize loading performance
    const loadImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      images.forEach((img) => {
        const imageElement = img as HTMLImageElement;
        imageElement.src = imageElement.dataset.src || '';
        imageElement.removeAttribute('data-src');
      });
    };

    // Load images after initial render
    const timer = setTimeout(loadImages, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <AboutSection />
        <CoursesSection />
        <WhyChooseSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
