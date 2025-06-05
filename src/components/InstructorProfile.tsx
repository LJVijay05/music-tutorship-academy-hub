
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Music, Award, Users } from "lucide-react";

const InstructorProfile = () => {
  const achievements = [
    { icon: Users, label: "500+ Students", value: "Mentored" },
    { icon: Music, label: "1000+ Tracks", value: "Produced" },
    { icon: Award, label: "15+ Awards", value: "Won" },
    { icon: Star, label: "4.9/5 Rating", value: "Average" }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Instructor Image */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop"
                  alt="Music Production Mentor"
                  className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
                />
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-green-600 fill-current" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">4.9</div>
                      <div className="text-sm text-gray-600">Rating</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">500+</div>
                      <div className="text-sm text-gray-600">Students</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                  Meet Your Mentor
                </div>
                
                <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-6">
                  Expert Music
                  <span className="block font-light bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Producer & Educator
                  </span>
                </h2>
                
                <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
                  With over 15 years of experience in the music industry, our lead mentor has worked with 
                  Grammy-winning artists and produced chart-topping hits. Now, he's dedicated to nurturing 
                  the next generation of music producers.
                </p>
              </div>

              {/* Achievements Grid */}
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 text-center">
                      <achievement.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-gray-900 mb-1">{achievement.label}</div>
                      <div className="text-sm text-gray-600">{achievement.value}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Specializations */}
              <div>
                <h3 className="text-2xl font-light text-gray-900 mb-4">Specializations</h3>
                <div className="flex flex-wrap gap-3">
                  {["Electronic Music", "Hip-Hop Production", "Sound Design", "Mixing & Mastering", "Live Performance"].map((skill, index) => (
                    <span key={index} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105">
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorProfile;
