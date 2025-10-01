
import { Button } from "@/components/ui/button";
import { Music, Award, Users, Calendar, Star, Heart, Sparkles, Play } from "lucide-react";
import { Link } from "react-router-dom";

const MentorIntroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-red-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-red-500 to-pink-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl animate-bounce"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500/10 to-pink-500/10 backdrop-blur-sm text-red-700 px-8 py-4 rounded-full text-sm font-semibold mb-8 border border-red-200">
              <Sparkles className="w-5 h-5 text-red-500" />
              Your Musical Journey Begins Here
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 bg-clip-text">
                Meet Your
              </span>
              <br />
              <span className="text-gray-800">Music Mentor</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transform your musical dreams into reality with personalized guidance from an industry expert
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Left Content */}
            <div className="space-y-8 animate-slide-right">
              <div className="space-y-6">
                <h3 className="text-4xl font-bold text-gray-800 leading-tight">
                  Empowering <span className="text-transparent bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text">Artists</span>
                  <br />
                  for Over a Decade
                </h3>
                
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    With over 10 years of experience in music production, I've dedicated my career to helping aspiring artists and producers unlock their creative potential and achieve professional success.
                  </p>
                  <p>
                    My journey spans working with renowned artists across various genres, producing tracks that have reached millions of listeners, and mentoring hundreds of students who have gone on to build successful music careers.
                  </p>
                  <p>
                    I believe that music production is not just about technology—it's about storytelling, emotion, and connecting with your audience. Through personalized mentorship, I guide students on a transformative journey.
                  </p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 border border-red-100 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-red-600">320+</div>
                      <div className="text-red-500 text-sm font-medium">Students Mentored</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-100 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">10+</div>
                      <div className="text-purple-500 text-sm font-medium">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="pt-6">
                <Button asChild size="lg" className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white text-xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-red-200 transition-all duration-500 hover:scale-105 group relative overflow-hidden border-0">
                  <Link to="/courses">
                    <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative flex items-center gap-3">
                      Start Your Journey
                      <Play className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    </span>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Content - Image Section */}
            <div className="relative animate-slide-left">
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
                      loading="lazy"
                      decoding="async"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Floating Music Badge */}
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl animate-bounce border-4 border-white">
                    <Music className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Top Rated Badge */}
                  <div className="absolute -top-4 left-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-2xl font-bold shadow-xl flex items-center gap-2">
                    <Star className="w-5 h-5 fill-current" />
                    Top Rated
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 group border border-red-100">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Industry Recognition</h4>
              <p className="text-gray-600">Worked with top artists and produced chart-topping tracks</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 group border border-purple-100">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-8 h-8 text-white" />
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
  );
};

export default MentorIntroSection;
