
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Music, Award, Users, Star, Play, Volume2 } from "lucide-react";

const About = () => {
  const achievements = [
    { icon: Music, title: "10+ Years Experience", description: "In music production and sound design" },
    { icon: Award, title: "200+ Tracks Produced", description: "Across various genres and styles" },
    { icon: Users, title: "500+ Students Taught", description: "Successfully mentored aspiring producers" },
    { icon: Star, title: "Industry Recognition", description: "Featured in major music publications" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-red-50 to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About <span className="text-red-600">Me</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                With expertise in music production, mixing, sound design, and music theory, I've 
                dedicated my career to helping aspiring musicians unlock their creative potential.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-3xl font-bold mb-6">My Musical Journey</h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    My journey in music production began over a decade ago when I first discovered 
                    the magic of creating sounds from nothing but imagination. What started as a 
                    hobby quickly evolved into a passion that would define my career.
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    I've had the privilege of working with artists across genres, from electronic 
                    dance music to cinematic soundscapes. Each project has taught me something new 
                    about the art and science of music production.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Now, I'm passionate about sharing this knowledge with the next generation of 
                    music producers through personalized mentorship and comprehensive courses.
                  </p>
                </div>
                <div className="relative">
                  <div className="w-full h-80 bg-gradient-to-br from-red-100 to-gray-100 rounded-lg shadow-lg flex items-center justify-center">
                    <Music className="w-24 h-24 text-red-600" />
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:bg-red-50 transition-colors">
                    <achievement.icon className="w-12 h-12 text-red-600 mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">{achievement.title}</h3>
                    <p className="text-gray-600 text-sm">{achievement.description}</p>
                  </div>
                ))}
              </div>

              {/* My Works Section */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                    My <span className="text-gray-900">Works</span>
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Experience the sounds that have shaped careers and inspired countless artists. 
                    Listen to my professional productions and understand why students trust my expertise.
                  </p>
                </div>
                
                <div className="max-w-4xl mx-auto">
                  <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-8 shadow-2xl">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-white fill-current" />
                      </div>
                      <div>
                        <h3 className="text-white text-xl font-bold">Featured Playlist</h3>
                        <p className="text-gray-300">Industry-level productions by your mentor</p>
                      </div>
                      <div className="ml-auto">
                        <Volume2 className="w-6 h-6 text-green-500" />
                      </div>
                    </div>
                    
                    <div className="bg-black bg-opacity-50 rounded-2xl p-2">
                      <iframe 
                        style={{borderRadius: "12px"}} 
                        src="https://open.spotify.com/embed/playlist/1Baqr6iqDkXbHUCXXK8ThG?utm_source=generator&theme=0" 
                        width="100%" 
                        height="352" 
                        frameBorder="0" 
                        allowFullScreen 
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                        loading="lazy"
                      />
                    </div>
                    
                    <div className="mt-6 text-center">
                      <p className="text-gray-300 text-sm mb-4">
                        🎧 These tracks represent years of industry experience and technical mastery
                      </p>
                      <div className="flex justify-center gap-6 text-sm">
                        <div className="text-green-400">
                          <span className="font-semibold">✓</span> Professional Quality
                        </div>
                        <div className="text-green-400">
                          <span className="font-semibold">✓</span> Industry Standards
                        </div>
                        <div className="text-green-400">
                          <span className="font-semibold">✓</span> Chart-Ready Sounds
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Teaching Philosophy</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                "Every great producer started as a beginner with a dream. My role is to bridge 
                the gap between where you are and where you want to be, providing not just 
                technical knowledge, but the creative confidence to express your unique voice."
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3 text-red-600">Personalized Learning</h3>
                  <p className="text-gray-600">Every student has unique goals and learning styles. I adapt my teaching to fit your specific needs.</p>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3 text-red-600">Hands-On Experience</h3>
                  <p className="text-gray-600">Learn by doing real projects that build your portfolio and practical skills from day one.</p>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3 text-red-600">Industry Insights</h3>
                  <p className="text-gray-600">Get insider knowledge about the music industry and how to navigate your career path.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
