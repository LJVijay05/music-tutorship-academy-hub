
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Music, Users, Calendar, Award, Star, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-background to-muted/20 relative overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-card border border-border text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Music className="w-4 h-4" />
              Meet Your Mentor
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
                Expert Guidance
              </span>
              <br />
              <span className="text-foreground">for Your Musical Journey</span>
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
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                {/* Clean Card Container */}
                <div className="relative bg-card rounded-2xl p-6 border border-border shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="aspect-square rounded-xl overflow-hidden relative">
                    <img
                      src="/lovable-uploads/8e4988dc-184a-4830-b569-64e9a67c6d19.png"
                      alt="Vijay - Music Producer & Educator"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Clean Music Badge */}
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg border-2 border-background">
                    <Music className="w-5 h-5 text-primary-foreground" />
                  </div>
                  
                  {/* Top Rated Badge */}
                  <div className="absolute -top-2 left-6 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-semibold shadow-md flex items-center gap-2 text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    Top Rated
                  </div>
                </div>

                {/* Clean Floating Stats */}
                <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 shadow-lg border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">320+</div>
                      <div className="text-muted-foreground text-xs">Students</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 bg-card rounded-xl p-4 shadow-lg border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">10+</div>
                      <div className="text-muted-foreground text-xs">Years</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Text Section */}
            <div className="space-y-6 order-1 lg:order-2">
              <div className="space-y-4">
                <h3 className="text-3xl lg:text-4xl font-bold leading-tight">
                  <span className="text-foreground">Transforming</span>
                  <br />
                  <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
                    Musical Dreams
                  </span>
                  <br />
                  <span className="text-foreground">into Reality</span>
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

              {/* Clean Achievement Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card rounded-xl p-4 border border-border hover:border-primary/20 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <Award className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-foreground">Industry</div>
                      <div className="text-muted-foreground text-sm">Recognition</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-card rounded-xl p-4 border border-border hover:border-accent/20 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-foreground">Passionate</div>
                      <div className="text-muted-foreground text-sm">Teaching</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Clean CTA Button */}
              <div className="pt-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground">
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
