
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Star, Music, Headphones, Mic, Play, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// Counter Animation Component
const AnimatedCounter = ({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      const currentCount = Math.floor(easeOutQuad * target);
      
      setCount(currentCount);

      if (now < endTime) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    const timer = setTimeout(() => {
      updateCount();
    }, 200); // Small delay to ensure component is visible

    return () => clearTimeout(timer);
  }, [target, duration]);

  return (
    <span className="text-5xl font-bold text-gray-900 mb-4 text-transparent bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text">
      {count}{suffix}
    </span>
  );
};

const About = () => {
  const achievements = [
    { number: 320, suffix: "+", label: "Students Mentored", icon: Users },
    { number: 131, suffix: "+", label: "Countries Reached", icon: Star },
    { number: 60, suffix: "M+", label: "Total Streams", icon: Music },
    { number: 30, suffix: "+", label: "Awards Won", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Meet Your Mentor Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-red-50 relative overflow-hidden">
        {/* Background Animation Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-red-600 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-600 rounded-full blur-3xl animate-bounce"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24 animate-fade-in">
              <h1 className="text-6xl lg:text-8xl font-bold mb-10 leading-tight">
                <span className="text-transparent bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 bg-clip-text">Meet Your Mentor</span>
              </h1>
              <p className="text-2xl lg:text-3xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
                Transform your musical journey with personalized guidance from an industry expert who has shaped the careers of hundreds of successful artists.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
              {/* Left Content */}
              <div className="space-y-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
                  <p className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    With over a decade of experience in music production, I've dedicated my career to helping aspiring artists and producers unlock their creative potential.
                  </p>
                  <p className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
                    My journey began in the underground music scene, where I developed a deep understanding of what makes music truly resonate with audiences. Having worked with renowned artists and produced tracks that have reached millions of listeners, I bring real-world industry experience to every lesson.
                  </p>
                  <p className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
                    My approach combines technical excellence with creative freedom, ensuring that each student develops their unique sound while mastering professional production techniques. I believe that music production is not just about technology—it's about storytelling, emotion, and connecting with your audience.
                  </p>
                  <p className="animate-fade-in" style={{ animationDelay: '1s' }}>
                    Through personalized mentorship, I guide students on a transformative journey that goes beyond just learning software to truly understanding the art and science of music creation.
                  </p>
                </div>
                
                <div className="pt-10 animate-fade-in" style={{ animationDelay: '1.2s' }}>
                  <Button asChild size="lg" className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-xl px-16 py-8 shadow-2xl hover:shadow-red-200 transition-all duration-500 hover:animate-button-smooth-hover active:animate-button-press rounded-2xl relative overflow-hidden group">
                    <Link to="/enrollment">
                      <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <span className="relative">Start Your Journey</span>
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right Content - Image Space */}
              <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="bg-gradient-to-br from-red-100 via-pink-100 to-purple-100 rounded-3xl p-16 shadow-2xl hover:shadow-red-200 transition-all duration-500 group">
                  <div className="aspect-square bg-gradient-to-br from-red-200 to-pink-200 rounded-3xl flex items-center justify-center relative overflow-hidden hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-pink-500/20 group-hover:from-red-500/30 group-hover:to-pink-500/30 transition-all duration-500"></div>
                    <div className="relative z-10 text-center">
                      <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                        <Music className="w-16 h-16 text-red-600" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-800 mb-4">Professional Mentor</h3>
                      <p className="text-xl text-gray-600">Industry Expert & Producer</p>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Decorative Elements */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-20 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Completely Redesigned My Works Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-bounce"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-600/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20 animate-fade-in">
              <h2 className="text-6xl lg:text-8xl font-bold text-white mb-8 leading-tight">
                My <span className="text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text">Works</span>
              </h2>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Explore the sound that has captivated millions worldwide
              </p>
            </div>
            
            {/* Main Spotify Section - Redesigned for prominence */}
            <div className="mb-20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative max-w-4xl mx-auto">
                {/* Spotify Container with enhanced styling */}
                <div className="bg-gradient-to-br from-green-500 via-green-600 to-emerald-600 p-2 rounded-3xl shadow-2xl hover:shadow-green-500/20 transition-all duration-700 hover:scale-[1.02] group">
                  <div className="bg-gradient-to-br from-white via-gray-50 to-green-50 rounded-3xl p-8 shadow-inner relative overflow-hidden">
                    {/* Header with Spotify branding */}
                    <div className="flex items-center justify-center gap-6 mb-8">
                      <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                        <Music className="w-10 h-10 text-white" />
                      </div>
                      <div className="text-center">
                        <h3 className="text-4xl font-bold text-gray-900 mb-2">Featured Portfolio</h3>
                        <p className="text-xl text-gray-600">Professional Productions & Collaborations</p>
                        <div className="flex items-center justify-center gap-2 mt-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-lg text-green-600 font-semibold">Live on Spotify</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Enhanced Spotify Embed */}
                    <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-green-500/20 hover:border-green-500/40 transition-all duration-500">
                      <iframe 
                        style={{borderRadius: '16px'}} 
                        src="https://open.spotify.com/embed/playlist/1Baqr6iqDkXbHUCXXK8ThG?utm_source=generator&theme=0" 
                        width="100%" 
                        height="500" 
                        frameBorder="0" 
                        allowFullScreen 
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                        loading="lazy">
                      </iframe>
                    </div>
                    
                    {/* Enhanced Stats under Spotify */}
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-4 border border-green-500/20">
                        <div className="text-3xl font-bold text-green-600 mb-1">60M+</div>
                        <div className="text-gray-600 font-medium">Total Streams</div>
                      </div>
                      <div className="text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-4 border border-blue-500/20">
                        <div className="text-3xl font-bold text-blue-600 mb-1">131+</div>
                        <div className="text-gray-600 font-medium">Countries Reached</div>
                      </div>
                      <div className="text-center bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl p-4 border border-yellow-500/20">
                        <div className="text-3xl font-bold text-yellow-600 mb-1">30+</div>
                        <div className="text-gray-600 font-medium">Awards Won</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-20 animate-bounce"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
              </div>
            </div>
            
            {/* Features Grid - Redesigned */}
            <div className="grid lg:grid-cols-3 gap-8 mb-20">
              <div className="bg-gradient-to-br from-red-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 group animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Headphones className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Industry Standards</h3>
                <p className="text-gray-300 leading-relaxed">
                  Each track showcases cutting-edge production techniques that define today's music industry standards.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 group animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mic className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Genre Mastery</h3>
                <p className="text-gray-300 leading-relaxed">
                  From electronic to acoustic, hip-hop to ambient - demonstrating versatility across all genres.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 group animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Learn From Examples</h3>
                <p className="text-gray-300 leading-relaxed">
                  In our sessions, we'll break down these exact production techniques for your learning.
                </p>
              </div>
            </div>
            
            {/* Enhanced Call to Action */}
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="bg-gradient-to-r from-red-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10 max-w-4xl mx-auto hover:border-white/20 transition-all duration-500 hover:scale-105">
                <h3 className="text-4xl font-bold text-white mb-6">Ready to Create Your Own Masterpiece?</h3>
                <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                  Learn the exact techniques used in these chart-topping productions
                </p>
                <Button asChild size="lg" className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-xl px-16 py-8 shadow-2xl hover:shadow-red-200 transition-all duration-500 hover:animate-button-smooth-hover active:animate-button-press rounded-2xl relative overflow-hidden group">
                  <Link to="/enrollment">
                    <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative">Start Learning Today</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
