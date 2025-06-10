
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MentorIntroSection from "@/components/MentorIntroSection";
import WorksPortfolioSection from "@/components/WorksPortfolioSection";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <MentorIntroSection />
      <WorksPortfolioSection />
      <Footer />
    </div>
  );
};

export default About;
