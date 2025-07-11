
import { Button } from "@/components/ui/button";
import { Music, Headphones, Mic, Play } from "lucide-react";
import { Link } from "react-router-dom";

const WorksPortfolioSection = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-600/10 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              My <span className="text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text">Works</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Explore the sound that has captivated millions worldwide
            </p>
          </div>
          
          {/* Main Spotify Section */}
          <div className="mb-12 md:mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-green-500 via-green-600 to-emerald-600 p-2 rounded-3xl shadow-2xl hover:shadow-green-500/20 transition-all duration-700 hover:scale-[1.01] group">
                <div className="bg-gradient-to-br from-white via-gray-50 to-green-50 rounded-2xl p-6 lg:p-8 shadow-inner relative overflow-hidden">
                  {/* Header with Spotify branding */}
                  <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-6 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500 mb-3 sm:mb-0">
                      <Music className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Featured Portfolio</h3>
                      <p className="text-xl text-gray-600">Professional Productions & Collaborations</p>
                      <div className="flex items-center justify-center sm:justify-start gap-2 mt-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-lg text-green-600 font-semibold">Live on Spotify</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Spotify Embed */}
                  <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-green-500/20 hover:border-green-500/40 transition-all duration-500">
                    <iframe 
                      style={{
                        borderRadius: '16px',
                        border: 'none',
                        outline: 'none'
                      }} 
                      src="https://open.spotify.com/embed/playlist/1Baqr6iqDkXbHUCXXK8ThG?utm_source=generator&theme=0" 
                      width="100%" 
                      height="380" 
                      frameBorder="0" 
                      allowFullScreen 
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                      loading="lazy"
                      className="w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[380px]">
                    </iframe>
                  </div>
                  
                  {/* Stats Grid */}
                  <div className="mt-8 grid grid-cols-3 gap-6">
                    <div className="text-center bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-4 border border-green-500/20">
                      <div className="text-3xl font-bold text-green-600 mb-1">60M+</div>
                      <div className="text-base text-gray-600 font-medium">Total Streams</div>
                    </div>
                    <div className="text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-4 border border-blue-500/20">
                      <div className="text-3xl font-bold text-blue-600 mb-1">131+</div>
                      <div className="text-base text-gray-600 font-medium">Countries Reached</div>
                    </div>
                    <div className="text-center bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg p-4 border border-yellow-500/20">
                      <div className="text-3xl font-bold text-yellow-600 mb-1">30+</div>
                      <div className="text-base text-gray-600 font-medium">Awards Won</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-20 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
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
                <Link to="/courses">
                  <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative">Start Learning Today</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksPortfolioSection;
