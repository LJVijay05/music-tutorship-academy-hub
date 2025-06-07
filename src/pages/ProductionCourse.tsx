
import React from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CourseDetailsContent from "@/components/CourseDetailsContent";

const ProductionCourse = () => {
  return (
    <>
      <Navigation />
      <CourseDetailsContent courseType="production" />
      <Footer />
    </>
  );
};

export default ProductionCourse;
