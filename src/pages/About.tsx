
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Star, Music, Headphones, Mic, Play, Clock, ArrowRight } from "lucide-react";
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
    }, 200);

    return () => clearTimeout(timer);
  }, [target, duration]);

  return (
    <span className="text-6xl font-extralight text-transparent bg-gradient-to-r from-red-600 to-red-700 bg-clip-text">
      {count}{suffix}
    </span>
  );
};

const About = () => {
  const [scrollRevealed, setScrollRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const achievements = [
    { number: 320, suffix: "+", label: "Students Trained", icon: Users },
    { number: 15, suffix: "+", label: "Years Experience", icon: Star },
    { number: 200, suffix: "+", label: "Tracks Produced", icon: Music },
    { number: 50, suffix: "+", label: "Industry Awards", icon: Award }
  ];

  const timeline = [
    { year: "2018", event: "Started in a bedroom studio with a simple setup" },
    { year: "2020", event: "First 50 students completed certification" },
    { year: "2022", event: "Expanded to advanced Logic Pro and Ableton training" },
    { year: "2024", event: "320+ creators trained, industry partnerships established" }
  ];

  const missionPoints = [
    { 
      icon: Music, 
      title: "Creative Freedom", 
      description: "Unleash your artistic vision with professional tools and techniques"
    },
    { 
      icon: Users, 
      title: "Structured Learning", 
      description: "Step-by-step curriculum designed for maximum skill development"
    },
    { 
      icon: Headphones, 
      title: "1-on-1 Mentorship", 
      description: "Personal guidance from industry experts who care about your growth"
    },
    { 
      icon: Award, 
      title: "Industry Standard Tools", 
      description: "Master Logic Pro, Ableton Live, and professional production workflows"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-white via-gray-50 to-red-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-red-600 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-red-700 rounded-full blur-3xl music-pulse"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="scroll-reveal mb-16">
              <h1 className="text-7xl lg:text-9xl font-extralight mb-8 leading-tight">
                <span className="text-transparent bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text">
                  We Help Aspiring Artists
                </span>
                <br />
                <span className="text-gray-900">Become Pro-Level</span>
                <br />
                <span className="text-transparent bg-gradient-to-r from-red-600 to-red-700 bg-clip-text">
                  Music Producers
                </span>
              </h1>
              <p className="text-2xl lg:text-3xl text-gray-600 max-w-5xl mx-auto leading-relaxed mb-12">
                India's premier music production training platform. Master Logic Pro and Ableton Live with professional mentorship.
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-2xl px-12 py-6 shadow-2xl hover:shadow-red-500/25 transition-all duration-500 apple-button rounded-2xl">
                <Link to="/enrollment">
                  Join 320+ Creators Who Started With Us
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="scroll-reveal text-center mb-20">
              <h2 className="text-6xl lg:text-7xl font-extralight text-gray-900 mb-8">
                Our <span className="text-transparent bg-gradient-to-r from-red-600 to-red-700 bg-clip-text">Story</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From humble beginnings to India's top online music production training platform
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-600 to-red-700 rounded-full"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className={`scroll-reveal flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`} style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="w-1/2 px-8">
                    <Card className="apple-card shadow-xl border-0 rounded-3xl bg-gradient-to-br from-white to-red-50">
                      <CardContent className="p-8">
                        <div className="text-4xl font-bold text-red-600 mb-4">{item.year}</div>
                        <p className="text-lg text-gray-700 leading-relaxed">{item.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-6 h-6 bg-gradient-to-r from-red-600 to-red-700 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-red-50">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="scroll-reveal text-center mb-20">
              <h2 className="text-6xl lg:text-7xl font-extralight text-gray-900 mb-8">
                Our <span className="text-transparent bg-gradient-to-r from-red-600 to-red-700 bg-clip-text">Mission</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Empowering the next generation of music producers with world-class education and mentorship
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {missionPoints.map((point, index) => (
                <Card key={index} className={`scroll-reveal apple-card shadow-xl border-0 rounded-3xl bg-white hover:shadow-red-500/10`} style={{ animationDelay: `${index * 0.2}s` }}>
                  <CardContent className="p-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl flex items-center justify-center mb-6">
                      <point.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{point.title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">{point.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Mentor */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="scroll-reveal text-center mb-20">
              <h2 className="text-6xl lg:text-7xl font-extralight text-gray-900 mb-8">
                Meet the <span className="text-transparent bg-gradient-to-r from-red-600 to-red-700 bg-clip-text">Mentor</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="scroll-reveal space-y-8">
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    With over 15 years of experience in music production, I've dedicated my career to helping aspiring artists and producers unlock their creative potential through structured learning and professional mentorship.
                  </p>
                  <p>
                    My journey began in the underground music scene, where I developed a deep understanding of what makes music truly resonate with audiences. Having worked with renowned artists and produced tracks that have reached millions of listeners, I bring real-world industry experience to every lesson.
                  </p>
                  <p>
                    Through personalized guidance and innovative teaching methods, I've helped 320+ students master Logic Pro, Ableton Live, and professional production techniques. My approach combines technical excellence with creative freedom, ensuring each student develops their unique sound.
                  </p>
                </div>
                
                <Button asChild size="lg" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-xl px-12 py-6 shadow-2xl transition-all duration-500 apple-button rounded-2xl">
                  <Link to="/enrollment">
                    Start Your Journey Today
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Link>
                </Button>
              </div>

              <div className="scroll-reveal relative" style={{ animationDelay: '0.3s' }}>
                <Card className="bg-gradient-to-br from-red-100 to-red-200 rounded-3xl p-12 shadow-2xl apple-card">
                  <div className="aspect-square bg-gradient-to-br from-red-200 to-red-300 rounded-3xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-600/30"></div>
                    <div className="relative z-10 text-center">
                      <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                        <Music className="w-16 h-16 text-red-600" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-800 mb-4">Professional Mentor</h3>
                      <p className="text-xl text-gray-600">Industry Expert & Producer</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl music-pulse"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="scroll-reveal text-center mb-20">
              <h2 className="text-6xl lg:text-7xl font-extralight text-white mb-8">
                Our <span className="text-transparent bg-gradient-to-r from-red-400 to-red-500 bg-clip-text">Impact</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className={`scroll-reveal bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl apple-card`} style={{ animationDelay: `${index * 0.2}s` }}>
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                      <achievement.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="mb-4">
                      <AnimatedCounter target={achievement.number} suffix={achievement.suffix} duration={2000 + index * 200} />
                    </div>
                    <div className="text-white/90 font-medium text-lg">{achievement.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Portfolio */}
      <section className="py-32 bg-gradient-to-br from-white via-gray-50 to-red-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="scroll-reveal text-center mb-16">
              <h2 className="text-6xl lg:text-7xl font-extralight text-gray-900 mb-8">
                My <span className="text-transparent bg-gradient-to-r from-red-600 to-red-700 bg-clip-text">Works</span>
              </h2>
              <p className="text-xl text-gray-600">
                Explore the sound that has captivated millions worldwide
              </p>
            </div>
            
            <div className="scroll-reveal bg-white rounded-3xl p-8 shadow-2xl border border-red-100" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center justify-center gap-6 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center shadow-xl">
                  <Music className="w-8 h-8 text-white" />
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Featured Portfolio</h3>
                  <p className="text-lg text-gray-600">Professional Productions & Collaborations</p>
                </div>
              </div>
              
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-red-100">
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
