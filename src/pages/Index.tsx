import Navigation from "@/components/Navigation";
import { memo, lazy, Suspense } from "react";

const Hero = lazy(() => import("@/components/Hero"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const CoursesSection = lazy(() => import("@/components/CoursesSection"));
const WhyChooseSection = lazy(() => import("@/components/WhyChooseSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = memo(() => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main role="main">
        <Suspense fallback={<div className="h-[60vh]" />}> 
          <Hero />
        </Suspense>
        <Suspense fallback={<div className="h-40" />}> 
          <AboutSection />
        </Suspense>
        <Suspense fallback={<div className="h-40" />}> 
          <CoursesSection showOnlyFeatured={true} />
        </Suspense>
        <Suspense fallback={<div className="h-40" />}> 
          <WhyChooseSection />
        </Suspense>
        <Suspense fallback={<div className="h-40" />}> 
          <FAQSection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
});

Index.displayName = 'Index';

export default Index;
