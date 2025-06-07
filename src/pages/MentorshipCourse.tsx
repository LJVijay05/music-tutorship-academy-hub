
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CourseDetailsContent from "@/components/CourseDetailsContent";

const MentorshipCourse = () => {
  const courseData = {
    courseTitle: "One-on-One Music Production Mentorship",
    courseDescription: "Get personalized guidance and accelerate your music production journey with our exclusive 1-on-1 mentorship program.",
    level: "All Levels",
    duration: "Flexible Duration",
    batchSize: "Individual Sessions",
    features: [
      "Personalized curriculum based on your goals",
      "Flexible scheduling to fit your lifestyle",
      "Direct mentor feedback on your projects",
      "Custom project development",
      "Industry networking opportunities",
      "Career guidance and planning",
      "Lifetime support access",
      "Exclusive masterclasses and workshops"
    ],
    syllabus: [
      {
        module: "Initial Assessment & Goal Setting",
        topics: [
          "Skill level evaluation",
          "Goal identification and planning",
          "Customized learning path creation",
          "Resource and equipment assessment"
        ]
      },
      {
        module: "Personalized Learning Modules",
        topics: [
          "Tailored lessons based on your interests",
          "Genre-specific techniques and styles",
          "Advanced production workflows",
          "Creative problem-solving approaches"
        ]
      },
      {
        module: "Project-Based Learning",
        topics: [
          "Work on real music projects",
          "Collaborative production opportunities",
          "Portfolio development",
          "Professional project management"
        ]
      },
      {
        module: "Industry Insights & Networking",
        topics: [
          "Music industry trends and opportunities",
          "Professional networking strategies",
          "Building your brand as a producer",
          "Monetizing your music production skills"
        ]
      },
      {
        module: "Career Development",
        topics: [
          "Portfolio review and optimization",
          "Job search strategies in music industry",
          "Freelance and entrepreneurship guidance",
          "Long-term career planning"
        ]
      }
    ],
    price: "₹49,999",
    originalPrice: "₹59,999",
    discount: "20%",
    courseType: "individual" as const
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <CourseDetailsContent {...courseData} />
      <Footer />
    </div>
  );
};

export default MentorshipCourse;
