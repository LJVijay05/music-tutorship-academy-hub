
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Award, Star, BookOpen } from "lucide-react";
import StudentDataForm from "./StudentDataForm";
import SuccessPopup from "./SuccessPopup";
import { useStudentForm } from "@/hooks/useStudentForm";

interface CourseDetailsContentProps {
  courseTitle: string;
  courseDescription: string;
  level: string;
  duration: string;
  batchSize: string;
  features: string[];
  syllabus: Array<{
    module: string;
    topics: string[];
  }>;
  price: string;
  originalPrice?: string;
  discount?: string;
  courseType: "group" | "individual";
}

const CourseDetailsContent = ({
  courseTitle,
  courseDescription,
  level,
  duration,
  batchSize,
  features,
  syllabus,
  price,
  originalPrice,
  discount,
  courseType
}: CourseDetailsContentProps) => {
  const { showStudentForm, showSuccessPopup, openForm, closeForm, showSuccess, closeSuccess } = useStudentForm();

  const handleApplyNow = () => {
    console.log(`CourseDetailsContent: Apply Now clicked for ${courseTitle}`);
    openForm();
  };

  const handleFormSuccess = () => {
    console.log(`CourseDetailsContent: Student form submitted successfully for ${courseTitle}`);
    showSuccess();
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {courseTitle}
              </h1>
              <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                {courseDescription}
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-red-400" />
                  <span>{level}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-red-400" />
                  <span>{duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-red-400" />
                  <span>{batchSize}</span>
                </div>
              </div>

              <Button
                onClick={handleApplyNow}
                className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Apply Now
              </Button>
            </div>
          </div>
        </section>

        {/* Course Details */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Course Features */}
              <div className="lg:col-span-2">
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Star className="w-6 h-6 text-yellow-500" />
                      Course Features
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Syllabus */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="w-6 h-6 text-blue-600" />
                      Course Syllabus
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {syllabus.map((module, index) => (
                        <div key={index} className="border-l-4 border-red-500 pl-4">
                          <h3 className="font-semibold text-lg mb-2 text-gray-900">{module.module}</h3>
                          <ul className="space-y-1">
                            {module.topics.map((topic, topicIndex) => (
                              <li key={topicIndex} className="text-gray-600 flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Pricing Card */}
              <div className="lg:col-span-1">
                <Card className="sticky top-20">
                  <CardHeader>
                    <CardTitle className="text-center">
                      {courseType === "group" ? "Group Learning" : "1-on-1 Mentorship"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="mb-6">
                      {originalPrice && (
                        <div className="text-lg text-gray-500 line-through mb-1">
                          {originalPrice}
                        </div>
                      )}
                      <div className="text-4xl font-bold text-gray-900 mb-2">
                        {price}
                      </div>
                      {discount && (
                        <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {discount} OFF
                        </div>
                      )}
                    </div>

                    <Button
                      onClick={handleApplyNow}
                      className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 mb-4"
                    >
                      Apply Now
                    </Button>

                    <div className="text-sm text-gray-600">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Award className="w-4 h-4 text-yellow-500" />
                        <span>Certificate Included</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <Clock className="w-4 h-4 text-blue-500" />
                        <span>Lifetime Support</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>

      <StudentDataForm 
        open={showStudentForm} 
        onOpenChange={closeForm}
        onSuccess={handleFormSuccess}
      />

      <SuccessPopup
        open={showSuccessPopup}
        onOpenChange={closeSuccess}
        title="Application Submitted Successfully"
        message="Thank you for your interest! Your application has been submitted. You can now proceed to complete your enrollment."
        buttonText="Continue to Enrollment"
        redirectTo="/enrollment"
      />
    </>
  );
};

export default CourseDetailsContent;
