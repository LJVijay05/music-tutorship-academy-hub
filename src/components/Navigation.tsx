import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import DemoPopup from "./DemoPopup";
import StudentDataForm from "./StudentDataForm";
import SuccessPopup from "./SuccessPopup";
import { useStudentForm } from "@/hooks/useStudentForm";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const { 
    showStudentForm, 
    showSuccessPopup, 
    openForm, 
    closeForm, 
    showSuccess, 
    closeSuccess 
  } = useStudentForm();

  const toggleMenu = () => {
    console.log('Navigation: Toggling mobile menu');
    setIsMenuOpen(!isMenuOpen);
  };

  const openDemoPopup = () => {
    console.log('Navigation: Opening demo popup');
    setShowDemo(true);
  };

  const handleRegisterClick = () => {
    console.log('Navigation: Register Now clicked');
    openForm();
  };

  const handleFormSuccess = () => {
    console.log('Navigation: Student form submitted successfully');
    showSuccess();
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <Link to="/" className="flex items-center font-bold text-xl text-gray-900">
              <img src="/logo.svg" alt="Music Tutorship Academy Logo" className="h-8 mr-2" />
              <span className="hidden sm:inline">Music Tutorship Academy</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-red-600 transition-colors duration-300">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-red-600 transition-colors duration-300">
                About
              </Link>
              <Link to="/courses" className="text-gray-700 hover:text-red-600 transition-colors duration-300">
                Courses
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-red-600 transition-colors duration-300">
                Blog
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-red-600 transition-colors duration-300">
                Contact
              </Link>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="outline"
                onClick={() => setShowDemo(true)}
                className="border-red-600 text-red-600 hover:bg-red-50 hover:border-red-700 transition-all duration-300"
              >
                Book Free Demo
              </Button>
              <Button
                onClick={handleRegisterClick}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-2 transition-all duration-300"
              >
                Register Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-700 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
          <div className="p-4">
            <div className="flex justify-end mb-4">
              <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-red-600 transition-colors duration-300 block py-2" onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-red-600 transition-colors duration-300 block py-2" onClick={toggleMenu}>
                About
              </Link>
              <Link to="/courses" className="text-gray-700 hover:text-red-600 transition-colors duration-300 block py-2" onClick={toggleMenu}>
                Courses
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-red-600 transition-colors duration-300 block py-2" onClick={toggleMenu}>
                Blog
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-red-600 transition-colors duration-300 block py-2" onClick={toggleMenu}>
                Contact
              </Link>
              <Button
                variant="outline"
                onClick={() => { setShowDemo(true); toggleMenu(); }}
                className="border-red-600 text-red-600 hover:bg-red-50 hover:border-red-700 transition-all duration-300 w-full"
              >
                Book Free Demo
              </Button>
              <Button
                onClick={() => { handleRegisterClick(); toggleMenu(); }}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-2 transition-all duration-300 w-full"
              >
                Register Now
              </Button>
            </nav>
          </div>
        </div>
      </nav>

      <DemoPopup open={showDemo} onOpenChange={setShowDemo} />
      
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
        title="Registration Successful"
        message="Thank you! You have successfully registered your interest. You can now proceed to explore our enrollment options."
        buttonText="Continue"
        redirectTo="/enrollment"
      />
    </>
  );
};

export default Navigation;
