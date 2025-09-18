
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
    
    const optimizePerformance = () => {
      // Lazy load images below the fold
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));

      // Preload critical resources
      const criticalResources = [
        '/lovable-uploads/b3ac942f-a004-4e7e-a005-13fa36ac41a7.png',
        '/lovable-uploads/e58ecfe4-170c-4008-ae3f-65d7ac6cfc2c.png'
      ];

      criticalResources.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });

      // Optimize font loading
      if ('fonts' in document) {
        document.fonts.ready.then(() => {
          document.body.classList.add('fonts-loaded');
        });
      }
    };

    const timer = setTimeout(optimizePerformance, 100);
    return () => clearTimeout(timer);
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
