
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Music, Users, Calendar, Award, Star, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-background to-muted/20 relative overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0 opacity-30 animate-fade-in">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite_reverse] opacity-80"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-red-400/5 to-pink-400/5 rounded-full blur-2xl animate-[pulse_4s_ease-in-out_infinite]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-card border border-border text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Music className="w-4 h-4" />
              Meet Your Mentor
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight text-center">
              <span className="text-transparent bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text">
                Expert Guidance for Your Musical Journey
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn from a seasoned professional with 10+ years of experience in music production and education
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content - Image Section */}
            <div className="relative order-2 lg:order-1">
              <div className="relative group">
                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                {/* Clean Card Container */}
                <div className="relative bg-card rounded-2xl p-6 border border-border shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="aspect-square rounded-xl overflow-hidden relative">
                    <img
                      src="/lovable-uploads/8e4988dc-184a-4830-b569-64e9a67c6d19.png"
                      alt="Vijay - Music Producer & Educator"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Text Section */}
            <div className="space-y-6 order-1 lg:order-2">
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-3xl font-bold leading-tight">
                  <span className="text-foreground">Transforming </span>
                  <span className="text-transparent bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text">
                    Musical Dreams
                  </span>
                  <span className="text-foreground"> into Reality</span>
                </h3>
                
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    With over a decade of experience in music production, mixing, sound design, and music theory, I've dedicated my career to helping aspiring musicians unlock their creative potential and achieve professional success.
                  </p>
                  
                  <p>
                    My journey spans working with renowned artists across various genres, producing tracks that have reached millions of listeners, and mentoring hundreds of students who have gone on to build successful music careers.
                  </p>
                  
                  <p>
                    Through personalized mentorship and innovative teaching methods, I guide students on a transformative journey that goes beyond just learning software to truly understanding the art, science, and business of music creation.
                  </p>
                </div>
              </div>
              
              {/* Clean CTA Button */}
              <div className="pt-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <Link to="/about" className="flex items-center gap-2">
                    Discover My Journey
                    <Sparkles className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
