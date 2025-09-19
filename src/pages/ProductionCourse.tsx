
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CourseDetailsContent from "@/components/CourseDetailsContent";

const ProductionCourse = () => {
  const courseData = {
    courseId: "production-course",
    courseTitle: "Complete Music Production Mastery Course",
    courseDescription: "Master the art of music production from beginner to advanced level with our comprehensive group learning program.",
    level: "Beginner to Advanced",
    duration: "12 Months",
    batchSize: "15 Students per Batch",
    features: [
      "Live weekly sessions with expert instructors",
      "Hands-on practice with industry-standard software",
      "Group collaboration projects",
      "Individual feedback and mentoring",
      "Access to professional recording equipment",
      "Certificate upon completion",
      "Lifetime access to course materials",
      "Industry networking opportunities"
    ],
    syllabus: [
      {
        module: "Module 1: Foundations of Music Production",
        topics: [
          "Introduction to Digital Audio Workstations (DAWs)",
          "Understanding audio interfaces and MIDI",
          "Basic music theory for producers",
          "Setting up your home studio"
        ]
      },
      {
        module: "Module 2: Recording Techniques",
        topics: [
          "Microphone placement and techniques",
          "Recording vocals and instruments",
          "Multi-track recording",
          "Managing recording sessions"
        ]
      },
      {
        module: "Module 3: Mixing and Sound Design",
        topics: [
          "EQ, compression, and effects",
          "Creating depth with reverb and delay",
          "Sound design and synthesis",
          "Automation and dynamic processing"
        ]
      },
      {
        module: "Module 4: Advanced Production Techniques",
        topics: [
          "Genre-specific production styles",
          "Collaboration with other musicians",
          "Creative sampling and remixing",
          "Building your unique sound"
        ]
      },
      {
        module: "Module 5: Mastering and Distribution",
        topics: [
          "Audio mastering fundamentals",
          "Preparing tracks for distribution",
          "Digital platforms and streaming",
          "Building your music career"
        ]
      }
    ],
    courseType: "group" as const,
    showPricing: false
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <CourseDetailsContent {...courseData} />
      <Footer />
    </div>
  );
};

export default ProductionCourse;
