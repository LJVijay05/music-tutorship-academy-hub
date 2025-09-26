
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Music, Star, Users, Calendar, Award, Heart, Sparkles, Play, BookOpen, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-red-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-red-500 to-pink-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl animate-bounce"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20 animate-fade-in">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500/10 to-pink-500/10 backdrop-blur-sm text-red-700 px-8 py-4 rounded-full text-sm font-semibold mb-8 border border-red-200">
                <Sparkles className="w-5 h-5 text-red-500" />
                Meet Your Music Mentor
              </div>
              <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-tight">
                <span className="text-transparent bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 bg-clip-text">
                  Your Journey
                </span>
                <br />
                <span className="text-gray-800">Starts Here</span>
              </h1>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
              {/* Image Section */}
              <div className="relative animate-slide-right">
                <div className="relative group">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 scale-110"></div>
                  
                  {/* Main Image Container */}
                  <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-red-100">
                    <div className="aspect-square rounded-2xl overflow-hidden relative">
                      <img
                        src="/lovable-uploads/8e4988dc-184a-4830-b569-64e9a67c6d19.png"
                        alt="Vijay - Music Producer & Educator"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Content Section */}
              <div className="space-y-8 animate-slide-left">
                <div className="space-y-8">
                  <h2 className="text-5xl font-bold leading-tight text-gray-800">
                    Hi, I'm <span className="text-transparent bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text">Vijay</span>
                    <br />
                    <span className="text-3xl text-gray-600 font-medium">Music Producer & Educator</span>
                  </h2>
                  
                  <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                    <p className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                      With over a decade of experience in music production, mixing, sound design, and music theory, I've dedicated my career to helping aspiring musicians unlock their creative potential and achieve professional success.
                    </p>
                    
                    <p className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                      My journey spans working with renowned artists across various genres, producing tracks that have reached millions of listeners, and mentoring hundreds of students who have gone on to build successful music careers.
                    </p>
                    
                    <p className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
                      I believe that music production is not just about technology—it's about storytelling, emotion, and connecting with your audience. Through personalized mentorship, I guide students on a transformative journey that goes beyond software to truly understanding the art and business of music creation.
                    </p>
                  </div>
                </div>
                
                {/* CTA Button */}
                <div className="pt-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                  <Button asChild size="lg" className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white text-xl px-16 py-8 rounded-2xl shadow-2xl hover:shadow-red-200 transition-all duration-500 hover:scale-105 group relative overflow-hidden border-0">
                    <Link to="/courses">
                      <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <span className="relative flex items-center gap-4">
                        Start Your Journey
                        <Play className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-800 mb-4">
                Why Choose <span className="text-transparent bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text">My Mentorship</span>
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Proven track record of transforming aspiring musicians into successful artists
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 group border border-red-100">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-4">Industry Recognition</h4>
                <p className="text-gray-600">Worked with top artists and produced chart-topping tracks</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 group border border-purple-100">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-4">Comprehensive Learning</h4>
                <p className="text-gray-600">From basics to advanced techniques, covering all aspects of music production</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 group border border-green-100">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-4">Personalized Approach</h4>
                <p className="text-gray-600">Tailored mentorship that adapts to your unique style and goals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-800 mb-4">
                My <span className="text-transparent bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text">Work</span>
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A glimpse into the projects and collaborations that have shaped my career
              </p>
            </div>

            {/* Spotify Playlist Section */}
            <div className="mb-16">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold text-gray-800 mb-3">
                    Listen to My <span className="text-transparent bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text">Latest Work</span>
                  </h4>
                  <p className="text-lg text-gray-600">
                    Explore my music production portfolio on Spotify
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <iframe 
                    data-testid="embed-iframe" 
                    style={{borderRadius:'12px'}} 
                    src="https://open.spotify.com/embed/playlist/1Baqr6iqDkXbHUCXXK8ThG?utm_source=generator" 
                    width="100%" 
                    height="352" 
                    frameBorder="0" 
                    allowFullScreen 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy"
                    title="Vijay's Music Production Portfolio"
                  />
                </div>
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
