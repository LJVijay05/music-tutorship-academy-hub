
import React from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CourseDetailsContent from "@/components/CourseDetailsContent";

const MentorshipCourse = () => {
  return (
    <>
      <Navigation />
      <CourseDetailsContent courseType="mentorship" />
      <Footer />
    </>
  );
};

export default MentorshipCourse;
