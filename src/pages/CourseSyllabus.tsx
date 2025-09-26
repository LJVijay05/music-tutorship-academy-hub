
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, Award, CheckCircle, Book, Video, Music, Headphones, Calendar, Monitor, Share2, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StudentDataForm from "@/components/StudentDataForm";
import { useStudentForm } from "@/hooks/useStudentForm";
import CourseCTAButton from "@/components/course/CourseCTAButton";
import CourseStatsCard from "@/components/course/CourseStatsCard";
import CourseModuleCard from "@/components/course/CourseModuleCard";

const CourseSyllabus = () => {
  const { courseId } = useParams();
  const { showStudentForm, openForm, closeForm } = useStudentForm();
  
  const courseData = {
    "production-course": {
      title: "Complete Music Production Mastery Course",
      subtitle: "From Beginner to Advanced Level",
      duration: "12 Months",
      batchSize: "15 Students",
      sessions: "Live Weekly Sessions",
      overview: "Master the complete journey of music production with our comprehensive 12-month program. Learn industry-standard techniques, software mastery, and professional workflow from experienced mentors.",
      modules: [
        {
          week: "Month 1-2",
          title: "Foundation & Software Setup",
          icon: Monitor,
          topics: [
            "Introduction to Music Production",
            "DAW Installation & Configuration (Logic Pro X/Ableton Live)",
            "Understanding Audio Basics",
            "Interface Navigation & Workflow Setup"
          ]
        },
        {
          week: "Month 3-4",
          title: "Beat Making & Rhythm Programming",
          icon: Music,
          topics: [
            "Drum Programming Fundamentals",
            "Rhythm Patterns & Groove",
            "Sample Selection & Editing",
            "Creating Dynamic Drum Patterns"
          ]
        },
        {
          week: "Month 5-6",
          title: "Melody & Harmony Creation",
          icon: Music,
          topics: [
            "Music Theory Basics",
            "Chord Progressions",
            "Melody Writing Techniques",
            "Bass Line Creation"
          ]
        },
        {
          week: "Month 7-8",
          title: "Sound Design & Synthesis",
          icon: Headphones,
          topics: [
            "Synthesizer Fundamentals",
            "Creating Custom Sounds",
            "Sampling Techniques",
            "Effect Processing"
          ]
        },
        {
          week: "Month 9-10",
          title: "Mixing & Audio Engineering",
          icon: Headphones,
          topics: [
            "EQ & Compression Techniques",
            "Reverb & Delay Applications",
            "Stereo Imaging & Panning",
            "Professional Mixing Workflow"
          ]
        },
        {
          week: "Month 11-12",
          title: "Mastering & Final Production",
          icon: Sparkles,
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
        "12 months of intensive hands-on training",
        "Live weekly sessions with updated insights and guidances",
        "Group collaboration projects",
        "Industry-standard software training (Logic Pro X/Ableton Live)",
        "Certificate upon successful completion",
        "Lifetime access to course materials and our exclusive discord server"
      ]
    },
    "mentorship-90": {
      title: "One-on-One Music Production Mentorship",
      subtitle: "Personalized learning journey for serious artists",
      duration: "Flexible",
      batchSize: "1-on-1",
      sessions: "Personalized Schedule",
      overview: "Experience personalized music production mentorship with our premium flagship program. Get direct access to industry professionals for customized learning, project feedback, and career guidance tailored specifically to your goals and aspirations.",
      modules: [
        {
          week: "Phase 1",
          title: "Personal Assessment & Goal Setting",
          icon: Calendar,
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
          icon: Monitor,
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
          icon: Sparkles,
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
          icon: Headphones,
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
          icon: Music,
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
          icon: Share2,
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
    },
    "crash-course": {
      title: "Essential Producer Bootcamp: Launch Your Music Career in 3 Months",
      subtitle: "Intensive Learning Path from Beginner to Intermediate Level",
      duration: "3 Months",
      batchSize: "15 Students",
      sessions: "Twice Weekly Sessions",
      overview: "Fast-track your music production journey with our intensive 3-month bootcamp. Perfect for aspiring producers who want to quickly build essential skills and launch their music career with confidence.",
      modules: [
        {
          week: "Week 1-2",
          title: "Production Fundamentals & DAW Setup",
          icon: Monitor,
          topics: [
            "Introduction to Music Production",
            "DAW Installation & Basic Navigation",
            "Audio Fundamentals & File Management",
            "Creating Your First Beat"
          ]
        },
        {
          week: "Week 3-4",
          title: "Beat Making & Rhythm Mastery",
          icon: Music,
          topics: [
            "Drum Programming Essentials",
            "Creating Grooves & Patterns",
            "Sample Selection & Manipulation",
            "Building Dynamic Rhythms"
          ]
        },
        {
          week: "Week 5-6",
          title: "Melody & Chord Progressions",
          icon: Music,
          topics: [
            "Basic Music Theory for Producers",
            "Creating Catchy Melodies",
            "Chord Progression Fundamentals",
            "Bass Line Construction"
          ]
        },
        {
          week: "Week 7-8",
          title: "Sound Design & Creative Processing",
          icon: Headphones,
          topics: [
            "Basic Synthesis Techniques",
            "Audio Effects & Processing",
            "Creating Unique Sounds",
            "Layering & Arrangement"
          ]
        },
        {
          week: "Week 9-10",
          title: "Mixing Fundamentals",
          icon: Headphones,
          topics: [
            "EQ & Compression Basics",
            "Creating Space with Reverb",
            "Balancing Mix Elements",
            "Professional Mixing Tips"
          ]
        },
        {
          week: "Week 11-12",
          title: "Track Completion & Career Launch",
          icon: Sparkles,
          topics: [
            "Finalizing Your Productions",
            "Basic Mastering Concepts",
            "Sharing Your Music Online",
            "Building Your Producer Identity"
          ]
        }
      ],
      features: [
        "15 students per batch for focused attention",
        "3 months of intensive twice-weekly sessions",
        "Hands-on project work every session",
        "Essential software training (DAW of choice)",
        "Complete track production by course end",
        "Certificate upon completion",
        "Access to exclusive producer community",
        "Career guidance and next steps planning"
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
        {/* Hero Section with Gradient Overlay */}
        <section className={`py-12 relative overflow-hidden ${isPremium ? 'bg-gradient-to-r from-amber-50 to-orange-50' : 'bg-gradient-to-r from-red-50 to-pink-50'}`}>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/30"></div>
          
          {/* Decorative Circles */}
          <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-red-400/20 to-pink-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-32 h-32 bg-gradient-to-r from-amber-400/20 to-yellow-500/20 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <Link 
              to="/courses" 
              className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 mb-6 transition-colors group"
            >
              <div className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-sm group-hover:bg-white group-hover:shadow transition-all duration-300">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <span className="font-medium">Back to Courses</span>
            </Link>

            <div className="max-w-4xl mx-auto text-center">
              {isPremium && (
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-amber-900 px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-md animate-pulse">
                  <Award className="w-4 h-4 fill-amber-900" />
                  FLAGSHIP PROGRAM
                </div>
              )}
              
              <h1 className={`text-4xl md:text-5xl font-bold mb-4 animate-fade-in ${isPremium ? 'text-amber-900' : 'text-gray-900'}`}>
                {course.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {course.subtitle}
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                <CourseStatsCard 
                  icon={Clock} 
                  value={course.duration} 
                  label="Duration" 
                  isPremium={isPremium} 
                />
                <CourseStatsCard 
                  icon={Users} 
                  value={course.batchSize} 
                  label="Batch Size" 
                  isPremium={isPremium} 
                />
                <CourseStatsCard 
                  icon={Video} 
                  value={course.sessions} 
                  label="Format" 
                  isPremium={isPremium} 
                />
              </div>
              
              {/* CTA Button */}
              <CourseCTAButton courseId={courseId || ""} isPremium={isPremium}>
                Apply For This Course
              </CourseCTAButton>
            </div>
          </div>
        </section>

        {/* Course Overview */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className={`mb-8 border-0 shadow-lg ${isPremium ? 'bg-gradient-to-br from-amber-50 to-white' : 'bg-gradient-to-br from-red-50 to-white'}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl text-gray-900">
                    <Book className={`w-6 h-6 ${isPremium ? 'text-amber-600' : 'text-red-600'}`} />
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
        <section className={`py-12 ${isPremium ? 'bg-amber-50' : 'bg-red-50'}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className={`text-3xl font-bold ${isPremium ? 'text-amber-900' : 'text-gray-900'} mb-8 text-center`}>
                Course Curriculum
              </h2>
              
              <div className="space-y-4">
                {course.modules.map((module, index) => (
                  <CourseModuleCard 
                    key={index}
                    module={module}
                    index={index}
                    isPremium={isPremium}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Course Features */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className={`border-0 shadow-lg ${isPremium ? 'bg-gradient-to-br from-amber-50 to-white' : 'bg-gradient-to-br from-red-50 to-white'}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl text-gray-900">
                    <Award className={`w-6 h-6 ${isPremium ? 'text-amber-600' : 'text-red-600'}`} />
                    What You'll Get
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {course.features.map((feature, index) => (
                      <div key={index} className={`flex items-start gap-3 p-3 rounded-lg ${isPremium ? 'hover:bg-amber-50' : 'hover:bg-red-50'} transition-colors duration-200`}>
                        <CheckCircle className={`w-5 h-5 ${isPremium ? 'text-amber-600' : 'text-green-600'} flex-shrink-0 mt-0.5`} />
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
        <section className={`py-16 ${isPremium ? 'bg-gradient-to-br from-amber-50 via-amber-50/50 to-white' : 'bg-gradient-to-br from-red-50 via-red-50/50 to-white'}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className={`text-3xl font-bold ${isPremium ? 'text-amber-900' : 'text-gray-900'} mb-6`}>
                Ready to Start Your {isPremium ? 'One-on-One' : 'Musical'} Journey?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Join thousands of students who have transformed their passion into professional skills.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CourseCTAButton courseId={courseId || ""} isPremium={isPremium}>
                  Apply Now
                </CourseCTAButton>
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
      <StudentDataForm 
        open={showStudentForm} 
        onOpenChange={closeForm} 
      />
    </div>
  );
};

export default CourseSyllabus;
