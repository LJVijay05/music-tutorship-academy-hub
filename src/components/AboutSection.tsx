
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Music, Users, Calendar, Award, Star, ArrowRight, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-background via-background/95 to-red-50/30 relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full blur-xl animate-bounce"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-muted-foreground/20"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm text-primary px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-border/50 shadow-sm">
              <Music className="w-4 h-4" />
              Meet Your Mentor
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text">
                Expert Guidance
              </span>
              <br />
              <span className="text-foreground">for Your Musical Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Learn from a seasoned professional with 10+ years of experience in music production and education
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content - Image Section */}
            <div className="relative order-2 lg:order-1 animate-slide-left">
              <div className="relative group">
                {/* Enhanced Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/30 to-secondary/30 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700 scale-110"></div>
                
                {/* Glass Card Container */}
                <div className="relative bg-card/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-border/30 hover:border-border/50 transition-all duration-500">
                  <div className="aspect-square rounded-2xl overflow-hidden relative">
                    <img
                      src="/lovable-uploads/8e4988dc-184a-4830-b569-64e9a67c6d19.png"
                      alt="Vijay - Music Producer & Educator"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Floating Music Badge */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-2xl animate-bounce border-4 border-card">
                    <Music className="w-6 h-6 text-primary-foreground" />
                  </div>
                  
                  {/* Top Rated Badge */}
                  <div className="absolute -top-3 left-8 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-2xl font-bold shadow-xl flex items-center gap-2">
                    <Star className="w-5 h-5 fill-current" />
                    Top Rated
                  </div>
                </div>

                {/* Modern Floating Stats */}
                <div className="absolute -bottom-6 -left-6 bg-card/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-border/30 animate-pulse">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-foreground">320+</div>
                      <div className="text-muted-foreground text-sm font-medium">Students</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-card/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-border/30 animate-bounce">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-foreground">10+</div>
                      <div className="text-muted-foreground text-sm font-medium">Years</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Text Section */}
            <div className="space-y-8 order-1 lg:order-2 animate-slide-right">
              <div className="space-y-6">
                <h3 className="text-4xl lg:text-5xl font-bold leading-tight">
                  <span className="text-foreground">Transforming</span>
                  <br />
                  <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
                    Musical Dreams
                  </span>
                  <br />
                  <span className="text-foreground">into Reality</span>
                </h3>
                
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
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

              {/* Modern Achievement Cards */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-card/60 backdrop-blur-lg rounded-2xl p-6 border border-border/30 hover:bg-card/80 transition-all duration-300 group">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Award className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">Industry</div>
                      <div className="text-muted-foreground font-medium">Recognition</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-card/60 backdrop-blur-lg rounded-2xl p-6 border border-border/30 hover:bg-card/80 transition-all duration-300 group">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Sparkles className="w-7 h-7 text-secondary-foreground" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">Passionate</div>
                      <div className="text-muted-foreground font-medium">Teaching</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Modern CTA Button */}
              <div className="pt-8">
                <Button asChild size="lg" className="bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 text-primary-foreground text-xl px-16 py-8 rounded-2xl shadow-2xl hover:shadow-primary/25 transition-all duration-500 hover:scale-105 group relative overflow-hidden border-0">
                  <Link to="/about">
                    <span className="absolute inset-0 bg-gradient-to-r from-primary/50 via-accent/50 to-secondary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative flex items-center gap-4">
                      Discover My Journey
                      <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                    </span>
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
