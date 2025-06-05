
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Star, Music, Headphones, Mic, Play, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const achievements = [
    { number: "500+", label: "Students Taught", icon: Users },
    { number: "10+", label: "Years Experience", icon: Star },
    { number: "200+", label: "Tracks Produced", icon: Music },
    { number: "50+", label: "Industry Awards", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Meet Your Mentor Section */}
      <section className="pt-32 pb-40 bg-gradient-to-br from-gray-50 via-white to-red-50 relative overflow-hidden">
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
                  <Button asChild size="lg" className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-xl px-16 py-8 shadow-2xl hover:shadow-red-200 transition-all duration-500 hover:scale-105 rounded-2xl">
                    <Link to="/enrollment">Start Your Journey</Link>
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

            {/* Enhanced Achievements Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-32">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-white shadow-2xl border-0 hover:shadow-red-200 transition-all duration-500 hover:-translate-y-6 group animate-fade-in" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                  <CardContent className="p-10 text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-red-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-125 transition-transform duration-500 shadow-2xl">
                      <achievement.icon className="w-12 h-12 text-white" />
                    </div>
                    <div className="text-5xl font-bold text-gray-900 mb-4 text-transparent bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text">
                      {achievement.number}
                    </div>
                    <div className="text-gray-600 font-semibold text-xl leading-tight">{achievement.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* My Works Section - Enhanced */}
      <section className="py-40 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-bounce"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-600/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Enhanced Header */}
            <div className="text-center mb-24 animate-fade-in">
              <h2 className="text-6xl lg:text-8xl font-bold text-white mb-10 leading-tight">
                My <span className="text-transparent bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text">Works</span>
              </h2>
              <p className="text-2xl lg:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed mb-16">
                Experience the sound that has captivated audiences worldwide. These tracks represent years of dedication, innovation, and artistic excellence in music production.
              </p>
              
              {/* Enhanced Feature Highlights */}
              <div className="flex flex-wrap justify-center gap-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <Star className="w-6 h-6 text-yellow-400" />
                  <span className="text-white font-semibold text-lg">Industry Standard</span>
                </div>
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <Award className="w-6 h-6 text-yellow-400" />
                  <span className="text-white font-semibold text-lg">Award Winning</span>
                </div>
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <Headphones className="w-6 h-6 text-yellow-400" />
                  <span className="text-white font-semibold text-lg">Million+ Streams</span>
                </div>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              {/* Enhanced Left Content */}
              <div className="space-y-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="bg-gradient-to-r from-red-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-10 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 group">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Headphones className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Industry-Standard Productions</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-xl">
                    Each track showcases different aspects of modern music production - from intricate sound design to masterful mixing and mastering techniques that define today's industry standards.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-10 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 group">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mic className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Diverse Genre Expertise</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-xl">
                    From electronic dance music to hip-hop, ambient soundscapes to cinematic scores - this portfolio demonstrates versatility and deep understanding across multiple musical genres.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 backdrop-blur-sm rounded-3xl p-10 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 group">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Learn From Real Examples</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-xl">
                    In our mentorship program, we'll break down the production techniques used in these tracks, giving you insider knowledge of professional music creation processes.
                  </p>
                </div>
              </div>

              {/* Enhanced Right Content - Spotify Embed */}
              <div className="relative animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-3xl shadow-2xl hover:shadow-green-500/20 transition-all duration-500 hover:scale-105">
                  <div className="bg-white rounded-3xl p-10 shadow-inner">
                    <div className="flex items-center gap-8 mb-10">
                      <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-xl">
                        <Music className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <h4 className="text-3xl font-bold text-gray-900">Featured Portfolio</h4>
                        <p className="text-gray-600 text-xl">Professional Productions & Collaborations</p>
                      </div>
                    </div>
                    
                    <div className="rounded-2xl overflow-hidden shadow-2xl">
                      <iframe 
                        style={{borderRadius: '16px'}} 
                        src="https://open.spotify.com/embed/playlist/1Baqr6iqDkXbHUCXXK8ThG?utm_source=generator&theme=0" 
                        width="100%" 
                        height="400" 
                        frameBorder="0" 
                        allowFullScreen 
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                        loading="lazy">
                      </iframe>
                    </div>
                    
                    <div className="mt-8 text-center">
                      <p className="text-gray-600 font-medium text-lg">🎵 Listen to tracks that have shaped careers and inspired thousands</p>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-r from-red-500 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-20 animate-bounce"></div>
                <div className="absolute top-1/2 -right-16 w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-15"></div>
              </div>
            </div>
            
            {/* Enhanced Call to Action */}
            <div className="text-center mt-24 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="bg-gradient-to-r from-red-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-16 border border-white/10 max-w-5xl mx-auto hover:border-white/20 transition-all duration-500 hover:scale-105">
                <h3 className="text-4xl font-bold text-white mb-8">Ready to Create Your Own Masterpiece?</h3>
                <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
                  Learn the exact techniques and workflows used in these professional productions
                </p>
                <Button asChild size="lg" className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-xl px-16 py-8 shadow-2xl hover:shadow-red-200 transition-all duration-500 hover:scale-105 rounded-2xl">
                  <Link to="/enrollment">Start Learning Today</Link>
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
