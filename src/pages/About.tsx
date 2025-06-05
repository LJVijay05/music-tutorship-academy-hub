
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Clock, Star, Music, Headphones, Mic, Play } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const features = [
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Learn from industry professionals with years of experience in music production and sound engineering."
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Get certified credentials that are recognized by top music studios and production houses worldwide."
    },
    {
      icon: Clock,
      title: "Global Accessibility",
      description: "Flexible scheduling across multiple time zones to accommodate students from around the world."
    }
  ];

  const achievements = [
    { number: "500+", label: "Students Taught", icon: Users },
    { number: "10+", label: "Years Experience", icon: Star },
    { number: "200+", label: "Tracks Produced", icon: Music },
    { number: "50+", label: "Industry Awards", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 bg-gradient-to-br from-red-500 via-red-600 to-pink-600 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-yellow-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="mb-8">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Elevate Your <span className="text-yellow-300">Music Production</span> Journey
              </h1>
              <p className="text-xl lg:text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto">
                Join India's most exclusive music production mentorship program designed for serious artists and NRI students seeking world-class education.
              </p>
            </div>
            
            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <Star className="w-5 h-5 text-yellow-300" />
                <span className="font-semibold">Premium Quality Education</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <Clock className="w-5 h-5 text-yellow-300" />
                <span className="font-semibold">Global Time Zone Support</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <Award className="w-5 h-5 text-yellow-300" />
                <span className="font-semibold">Industry Recognition</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-red-500 via-red-600 to-pink-600 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Why Choose Us</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">Premium Music Production Course Features</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                  <feature.icon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-white/90 leading-relaxed max-w-sm mx-auto">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Personal Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-red-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                  Meet Your Mentor
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    With over a decade of experience in music production, I've dedicated my career to helping aspiring artists and producers unlock their creative potential. My journey began in the underground music scene, where I developed a deep understanding of what makes music truly resonate with audiences.
                  </p>
                  <p>
                    Having worked with renowned artists and produced tracks that have reached millions of listeners, I bring real-world industry experience to every lesson. My approach combines technical excellence with creative freedom, ensuring that each student develops their unique sound while mastering professional production techniques.
                  </p>
                  <p>
                    I believe that music production is not just about technology—it's about storytelling, emotion, and connecting with your audience. Through personalized mentorship, I guide students on a transformative journey that goes beyond just learning software to truly understanding the art and science of music creation.
                  </p>
                </div>
                
                <div className="mt-12">
                  <Button asChild size="lg" className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-lg px-8 py-6 shadow-xl">
                    <Link to="/enrollment">Start Your Journey</Link>
                  </Button>
                </div>
              </div>

              {/* Right Content - Stats */}
              <div className="grid grid-cols-2 gap-8">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="bg-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <achievement.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                      <div className="text-gray-600 font-medium">{achievement.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Works Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">My Works</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Experience the sound that has captivated audiences worldwide. These tracks represent years of dedication, innovation, and artistic excellence in music production.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-red-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <Headphones className="w-8 h-8 text-red-400" />
                    Industry-Standard Productions
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Each track in this collection showcases different aspects of modern music production - from intricate sound design to masterful mixing and mastering techniques that define today's industry standards.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <Mic className="w-8 h-8 text-purple-400" />
                    Diverse Genre Expertise
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    From electronic dance music to hip-hop, ambient soundscapes to cinematic scores - this portfolio demonstrates versatility and deep understanding across multiple musical genres.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <Play className="w-8 h-8 text-yellow-400" />
                    Learn From Real Examples
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    In our mentorship program, we'll break down the production techniques used in these tracks, giving you insider knowledge of professional music creation processes.
                  </p>
                </div>
              </div>

              {/* Right Content - Spotify Embed */}
              <div className="relative">
                <div className="bg-gradient-to-r from-green-400 to-green-600 p-1 rounded-3xl shadow-2xl">
                  <div className="bg-white rounded-3xl p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <Music className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Featured Playlist</h4>
                        <p className="text-gray-600">Professional Productions</p>
                      </div>
                    </div>
                    
                    <iframe 
                      style={{borderRadius: '12px'}} 
                      src="https://open.spotify.com/embed/playlist/1Baqr6iqDkXbHUCXXK8ThG?utm_source=generator&theme=0" 
                      width="100%" 
                      height="352" 
                      frameBorder="0" 
                      allowFullScreen 
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                      loading="lazy">
                    </iframe>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-red-500 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-yellow-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Ready to Transform Your Musical Journey?
            </h2>
            <p className="text-xl lg:text-2xl opacity-90 mb-12 leading-relaxed">
              Join hundreds of successful students who have elevated their music production skills with our premium mentorship program.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-lg px-12 py-6 shadow-2xl">
                <Link to="/enrollment">Start Your Journey</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-red-600 text-lg px-12 py-6">
                <Link to="/courses">Explore Courses</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
