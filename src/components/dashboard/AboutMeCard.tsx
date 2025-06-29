
import React from "react";
import { Music, Star, Users, Calendar } from "lucide-react";

const AboutMeCard = () => {
  return (
    <div className="relative rounded-3xl bg-gradient-to-br from-slate-50 via-white to-red-50 shadow-2xl p-8 border border-slate-200 animate-fade-in overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-32 h-32 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-purple-500 rounded-full blur-2xl"></div>
      </div>

      {/* Top Rated Badge */}
      <div className="absolute -top-4 right-6 z-20">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce-in flex items-center gap-2">
          <Star className="w-4 h-4 fill-current" />
          Top Rated
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Image Section */}
        <div className="flex justify-center mb-8">
          <div className="relative group">
            {/* Image Container with Enhanced Styling */}
            <div className="relative w-40 h-40 rounded-3xl overflow-hidden shadow-2xl border-4 border-white group-hover:scale-105 transition-all duration-500">
              <img
                src="/lovable-uploads/31fe46dc-2cc5-4253-8b13-f7a401f8edc2.png"
                alt="Vijay - Music Mentor"
                className="w-full h-full object-cover"
                onLoad={() => console.log('Mentor image loaded successfully')}
                onError={(e) => {
                  console.error('Failed to load mentor image:', e);
                  e.currentTarget.style.display = 'none';
                }}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
            
            {/* Music Icon Badge */}
            <div className="absolute -bottom-3 -right-3 w-14 h-14 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center shadow-xl border-4 border-white">
              <Music className="w-6 h-6 text-white" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-yellow-400 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute top-8 -right-4 w-4 h-4 bg-purple-500 rounded-full opacity-60 animate-bounce"></div>
          </div>
        </div>

        {/* Name and Title */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text">
            Vijay
          </h3>
          <p className="text-xl text-gray-600 font-medium">Music Producer & Educator</p>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center justify-center mb-3">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center group-hover:bg-red-200 transition-colors">
                <Users className="w-6 h-6 text-red-600" />
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-1">320+</div>
              <div className="text-sm text-gray-600 font-semibold">Students</div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center justify-center mb-3">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">10+</div>
              <div className="text-sm text-gray-600 font-semibold">Years Exp</div>
            </div>
          </div>
        </div>

        {/* Enhanced Description */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
          <p className="text-gray-700 text-base leading-relaxed text-center">
            With expertise in music production, mixing, sound design, and music theory, I've dedicated my career to helping aspiring musicians unlock their creative potential. My journey spans over a decade, working with artists and helping hundreds of students master the art of music creation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMeCard;
