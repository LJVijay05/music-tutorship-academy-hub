
import React from "react";
import { Music } from "lucide-react";

const AboutMeCard = () => {
  return (
    <div className="relative rounded-3xl bg-gradient-to-br from-red-50 to-pink-50 shadow-xl p-8 border border-red-100 animate-fade-in">
      {/* Top Rated Badge */}
      <div className="absolute -top-4 right-6">
        <div className="bg-yellow-400 text-black px-4 py-1 rounded-full text-xs font-bold shadow animate-bounce-in flex items-center gap-1">
          <span className="text-base leading-none mr-1">⭐</span>
          Top Rated
        </div>
      </div>

      {/* Mentor Image & Icon */}
      <div className="flex flex-col items-center justify-center text-center mt-3 mb-8">
        {/* Mentor Photo */}
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg border-4 border-white bg-gray-200">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face"
              alt="Music Mentor"
              className="w-full h-full object-cover"
              onLoad={() => console.log('Mentor image loaded successfully')}
              onError={(e) => {
                console.error('Failed to load mentor image:', e);
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          {/* Music Icon Overlay */}
          <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center shadow-lg">
            <Music className="w-5 h-5 text-white" />
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-1">Professional Mentor</h3>
          <p className="text-lg text-gray-600">Music Producer & Educator</p>
        </div>
      </div>

      {/* Stats */}
      <div className="flex gap-4 mb-8 justify-center">
        <div className="bg-white rounded-xl p-5 shadow border border-gray-100 min-w-[100px]">
          <div className="text-2xl font-bold text-red-600 mb-1">320+</div>
          <div className="text-xs text-gray-600 font-semibold">Students</div>
        </div>
        <div className="bg-white rounded-xl p-5 shadow border border-gray-100 min-w-[100px]">
          <div className="text-2xl font-bold text-red-600 mb-1">10+</div>
          <div className="text-xs text-gray-600 font-semibold">Years Exp</div>
        </div>
      </div>

      {/* Description */}
      <div className="text-gray-700 text-sm leading-relaxed text-center">
        With expertise in music production, mixing, sound design, and music theory, I've dedicated my career to helping aspiring musicians unlock their creative potential. My journey spans over a decade, working with artists and helping hundreds of students master the art of music creation.
      </div>
    </div>
  );
};

export default AboutMeCard;
