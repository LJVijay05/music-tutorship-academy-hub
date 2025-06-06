
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, Award, CheckCircle, Book, Video, Music, Headphones } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CourseSyllabus = () => {
  const { courseId } = useParams();
  
  const courseData = {
    "production-course": {
      title: "Complete Music Production Mastery Course",
      subtitle: "From Beginner to Advanced Level",
      duration: "12 Weeks",
      batchSize: "15 Students",
      sessions: "Live Weekly Sessions",
      overview: "Master the complete journey of music production with our comprehensive 12-week program. Learn industry-standard techniques, software mastery, and professional workflow from experienced mentors.",
      modules: [
        {
          week: "Week 1-2",
          title: "Foundation & Software Setup",
          topics: [
            "Introduction to Music Production",
            "DAW Installation & Configuration (FL Studio/Ableton Live)",
            "Understanding Audio Basics",
            "Interface Navigation & Workflow Setup"
          ]
        },
        {
          week: "Week 3-4",
          title: "Beat Making & Rhythm Programming",
          topics: [
            "Drum Programming Fundamentals",
            "Rhythm Patterns & Groove",
            "Sample Selection & Editing",
            "Creating Dynamic Drum Patterns"
          ]
        },
        {
          week: "Week 5-6",
          title: "Melody & Harmony Creation",
          topics: [
            "Music Theory Basics",
            "Chord Progressions",
            "Melody Writing Techniques",
            "Bass Line Creation"
          ]
        },
        {
          week: "Week 7-8",
          title: "Sound Design & Synthesis",
          topics: [
            "Synthesizer Fundamentals",
            "Creating Custom Sounds",
            "Sampling Techniques",
            "Effect Processing"
          ]
        },
        {
          week: "Week 9-10",
          title: "Mixing & Audio Engineering",
          topics: [
            "EQ & Compression Techniques",
            "Reverb & Delay Applications",
            "Stereo Imaging & Panning",
            "Professional Mixing Workflow"
          ]
        },
        {
          week: "Week 11-12",
          title: "Mastering & Final Production",
          topics: [
            "Mastering Chain Setup",
            "Loudness & Dynamics",
            "Final Track Polish",
            "Release Preparation"
          ]
        }
      ],
      features: [
        "15 students per batch for personalized attention",
        "12 weeks of intensive hands-on training",
        "Live weekly sessions with industry professionals",
        "Group collaboration projects",
        "Industry-standard software training (FL Studio/Ableton Live)",
        "Certificate upon successful completion",
        "Lifetime access to course materials",
        "Direct mentor support during course period"
      ]
    },
    "mentorship-90": {
      title: "One-on-One Music Production Mentorship",
      subtitle: "Master the complete journey of music production",
      duration: "Flexible",
      batchSize: "1-on-1",
      sessions: "Personalized Schedule",
      overview: "Experience personalized music production mentorship with our flagship program. Get direct access to industry professionals for customized learning, project feedback, and career guidance.",
      modules: [
        {
          week: "Phase 1",
          title: "Personal Assessment & Goal Setting",
          topics: [
            "Current skill evaluation",
            "Personalized learning path creation",
            "Goal setting and milestone planning",
            "Software and equipment recommendations"
          ]
        },
        {
          week: "Phase 2",
          title: "Technical Foundation Building",
          topics: [
            "DAW mastery based on your preference",
            "Audio fundamentals tailored to your style",
            "Custom workflow development",
            "Hardware integration (if applicable)"
          ]
        },
        {
          week: "Phase 3",
          title: "Creative Development",
          topics: [
            "Genre-specific production techniques",
            "Personal sound development",
            "Advanced composition methods",
            "Creative problem-solving"
          ]
        },
        {
          week: "Phase 4",
          title: "Professional Production Skills",
          topics: [
            "Advanced mixing techniques",
            "Mastering fundamentals",
            "Industry-standard practices",
            "Client communication skills"
          ]
        },
        {
          week: "Phase 5",
          title: "Portfolio Development",
          topics: [
            "Track development and completion",
            "Portfolio curation",
            "Release strategy planning",
            "Branding and marketing basics"
          ]
        },
        {
          week: "Phase 6",
          title: "Industry Integration",
          topics: [
            "Networking strategies",
            "Collaboration opportunities",
            "Career pathway guidance",
            "Ongoing mentorship planning"
          ]
        }
      ],
      features: [
        "Completely personalized curriculum design",
        "Flexible scheduling to fit your lifestyle",
        "Direct one-on-one feedback from industry professionals",
        "Custom project development and guidance",
        "Industry networking opportunities",
        "Lifetime support and mentorship access",
        "Portfolio development assistance",
        "Career guidance and placement support"
      ]
    }
  };

  const course = courseData[courseId as keyof typeof courseData];

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50">
        <Navigation />
        <div className="pt-32 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Course not found</h1>
          <Link to="/courses" className="text-red-600 hover:text-red-700 mt-4 inline-block">
            Back to Courses
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const isPremium = courseId === "mentorship-90";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50">
      <Navigation />
      
      <main className="pt-20">
        {/* Header Section */}
        <section className="py-12 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <Link 
              to="/courses" 
              className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Courses
            </Link>

            <div className="max-w-4xl mx-auto text-center">
              {isPremium && (
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-amber-900 px-4 py-2 rounded-full text-sm font-bold mb-4">
                  <Award className="w-4 h-4" />
                  FLAGSHIP PROGRAM
                </div>
              )}
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {course.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                {course.subtitle}
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="flex items-center justify-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-red-100">
                  <Clock className="w-5 h-5 text-red-600" />
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">{course.duration}</p>
                    <p className="text-sm text-gray-600">Duration</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-red-100">
                  <Users className="w-5 h-5 text-red-600" />
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">{course.batchSize}</p>
                    <p className="text-sm text-gray-600">Batch Size</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-red-100">
                  <Video className="w-5 h-5 text-red-600" />
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">{course.sessions}</p>
                    <p className="text-sm text-gray-600">Format</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Overview */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="mb-8 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl text-gray-900">
                    <Book className="w-6 h-6 text-red-600" />
                    Course Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {course.overview}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Course Modules */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Course Curriculum
              </h2>
              
              <div className="space-y-6">
                {course.modules.map((module, index) => (
                  <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                    <CardHeader className="bg-gradient-to-r from-red-50 to-pink-50 rounded-t-lg">
                      <CardTitle className="flex items-center gap-3 text-xl">
                        <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                          {index + 1}
                        </div>
                        <div>
                          <span className="text-red-600 text-sm font-medium">{module.week}</span>
                          <h3 className="text-gray-900">{module.title}</h3>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-3">
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Course Features */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-red-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl text-gray-900">
                    <Music className="w-6 h-6 text-red-600" />
                    What You'll Get
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Start Your Musical Journey?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Join thousands of students who have transformed their passion into professional skills.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg" 
                  className={`px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                    isPremium 
                      ? 'bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-amber-900' 
                      : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white'
                  }`}
                >
                  <Link to="/enrollment">
                    Enroll Now
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold rounded-xl border-2 border-gray-300 hover:border-gray-400"
                >
                  <Link to="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CourseSyllabus;
