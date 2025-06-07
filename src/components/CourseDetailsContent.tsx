
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Award, BookOpen, Play, Target } from "lucide-react";
import StudentDataForm from "./StudentDataForm";
import SuccessPopup from "./SuccessPopup";
import { useStudentForm } from "@/hooks/useStudentForm";

interface CourseDetailsContentProps {
  courseType: 'production' | 'mentorship';
}

const CourseDetailsContent = ({ courseType }: CourseDetailsContentProps) => {
  const { 
    showStudentForm, 
    showSuccessPopup, 
    openForm, 
    closeForm, 
    showSuccess, 
    closeSuccess 
  } = useStudentForm();

  const handleApplyClick = () => {
    console.log(`CourseDetails: Apply Now clicked for ${courseType} course`);
    openForm();
  };

  const handleFormSuccess = () => {
    console.log(`CourseDetails: Student form submitted successfully for ${courseType} course`);
    showSuccess();
  };

  const courseData = courseType === 'production' ? {
    title: "Complete Music Production Mastery Course",
    subtitle: "From Beginner to Advanced Level",
    duration: "12 Months",
    batchSize: "15 Students Per Batch",
    features: [
      "15 premium students per batch",
      "Weekly live interactive sessions",
      "Industry-standard DAW training (Logic Pro, Ableton)",
      "Collaborative music projects",
      "1-on-1 feedback sessions monthly",
      "Access to premium sample libraries",
      "Certificate of completion",
      "Alumni network access",
      "Career guidance & placement support"
    ]
  } : {
    title: "One-on-One Music Production Mentorship",
    subtitle: "Premium Individual Coaching",
    duration: "Flexible Duration",
    batchSize: "Exclusive 1-on-1 Sessions",
    features: [
      "Completely personalized curriculum",
      "4 intensive sessions per month",
      "Flexible scheduling across time zones",
      "Direct mentor WhatsApp access",
      "Custom project development",
      "Advanced mixing & mastering techniques",
      "Industry networking opportunities",
      "Lifetime mentorship support",
      "Priority career placement assistance"
    ]
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50 pt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                {courseData.title}
              </h1>
              <p className="text-xl text-gray-600 mb-6">{courseData.subtitle}</p>
              <div className="flex justify-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-red-600" />
                  <span className="text-gray-700">{courseData.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-red-600" />
                  <span className="text-gray-700">{courseData.batchSize}</span>
                </div>
              </div>
              <Button
                onClick={handleApplyClick}
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Apply Now
              </Button>
            </div>

            {/* Course Features */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                  <Award className="w-6 h-6 text-red-600" />
                  What You'll Get
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {courseData.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Ready to Start Your Musical Journey?
              </h3>
              <p className="text-gray-600 mb-6">
                Join hundreds of successful students who have transformed their passion into profession
              </p>
              <Button
                onClick={handleApplyClick}
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Apply Now - Secure Your Spot
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Student Data Form */}
      <StudentDataForm 
        open={showStudentForm} 
        onOpenChange={closeForm}
        onSuccess={handleFormSuccess}
      />

      {/* Success Popup */}
      <SuccessPopup
        open={showSuccessPopup}
        onOpenChange={closeSuccess}
        title="Application Submitted"
        message="Thank you for your interest! Your application has been received. You can now proceed to complete your enrollment."
        buttonText="Continue to Enrollment"
        redirectTo="/enrollment"
      />
    </>
  );
};

export default CourseDetailsContent;
