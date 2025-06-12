import { Button } from "@/components/ui/button";
import { Music, Menu, X, ChevronDown, LogIn, UserPlus } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import StudentDataForm from "./StudentDataForm";
import SuccessPopup from "./SuccessPopup";
import { useStudentForm } from "@/hooks/useStudentForm";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { showStudentForm, showSuccessPopup, openForm, closeForm, showSuccess, closeSuccess } = useStudentForm();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Me" },
    { path: "/courses", label: "Courses", hasDropdown: true },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact Us" }
  ];

  const handleFormSuccess = () => {
    console.log('Navigation: Student form submitted successfully');
    showSuccess();
  };

  const handleRecordedCoursesClick = () => {
    navigate('/recorded-courses');
  };

  const handleLiveMentorshipClick = () => {
    navigate('/courses');
  };

  const handleLoginClick = () => {
    // Placeholder for login functionality
    console.log('Login clicked');
  };

  const handleRegisterClick = () => {
    // Placeholder for register functionality
    console.log('Register clicked');
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-1.5 sm:gap-2 font-bold text-base sm:text-lg group transition-all duration-300 hover:scale-105">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-red-600 to-pink-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-red-200 transition-all duration-300 group-hover:rotate-3">
                <Music className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              </div>
              <span className="text-gray-900 tracking-tight text-sm sm:text-base font-semibold">
                Music <span className="text-transparent bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text">Tutorship</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                item.hasDropdown ? (
                  <DropdownMenu key={item.path}>
                    <DropdownMenuTrigger asChild>
                      <button className={`relative px-2 xl:px-3 py-2 font-medium text-sm transition-all duration-300 rounded-lg hover:bg-gray-50 group flex items-center gap-1 ${
                        isActive(item.path) ? "text-red-600" : "text-gray-700 hover:text-red-600"
                      }`}>
                        {item.label}
                        <ChevronDown className="w-3 h-3" />
                        <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-red-600 to-pink-600 transition-all duration-300 ${
                          isActive(item.path) ? 'w-6' : 'group-hover:w-6'
                        }`}></span>
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 bg-white border border-gray-200 shadow-lg rounded-lg z-50">
                      <DropdownMenuItem 
                        onClick={handleRecordedCoursesClick}
                        className="px-4 py-3 hover:bg-red-50 hover:text-red-600 cursor-pointer transition-colors"
                      >
                        Recorded Courses
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        onClick={handleLiveMentorshipClick}
                        className="px-4 py-3 hover:bg-red-50 hover:text-red-600 cursor-pointer transition-colors"
                      >
                        Live Mentorship Courses
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative px-2 xl:px-3 py-2 font-medium text-sm transition-all duration-300 rounded-lg hover:bg-gray-50 group ${
                      isActive(item.path) ? "text-red-600" : "text-gray-700 hover:text-red-600"
                    }`}
                  >
                    {item.label}
                    <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-red-600 to-pink-600 transition-all duration-300 ${
                      isActive(item.path) ? 'w-6' : 'group-hover:w-6'
                    }`}></span>
                  </Link>
                )
              ))}
            </div>

            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center gap-4">
              {/* Login Button */}
              <Button 
                onClick={handleLoginClick}
                variant="ghost"
                className="text-gray-700 hover:text-red-600 hover:bg-red-50 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg flex items-center gap-2"
              >
                <LogIn className="w-4 h-4" />
                Login
              </Button>

              {/* Register Button */}
              <Button 
                onClick={handleRegisterClick}
                className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-4 py-2 text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-lg flex items-center gap-2"
              >
                <UserPlus className="w-4 h-4" />
                Register
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative w-5 h-5">
                <Menu className={`w-5 h-5 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100'}`} />
                <X className={`w-5 h-5 absolute top-0 left-0 transition-all duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 rotate-180'}`} />
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-3 space-y-1 border-t border-gray-100">
              {navItems.map((item, index) => (
                item.hasDropdown ? (
                  <div key={item.path} className="space-y-1">
                    <div className={`block px-3 py-2.5 font-medium text-sm transition-all duration-300 rounded-lg ${
                      isActive(item.path) ? "text-red-600 bg-red-50" : "text-gray-700"
                    }`}>
                      {item.label}
                    </div>
                    <div className="pl-6 space-y-1">
                      <button
                        onClick={() => {
                          handleRecordedCoursesClick();
                          setIsMenuOpen(false);
                        }}
                        className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-300"
                      >
                        Recorded Courses
                      </button>
                      <button
                        onClick={() => {
                          handleLiveMentorshipClick();
                          setIsMenuOpen(false);
                        }}
                        className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-300"
                      >
                        Live Mentorship Courses
                      </button>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-3 py-2.5 font-medium text-sm transition-all duration-300 rounded-lg hover:bg-red-50 hover:text-red-600 ${
                      isActive(item.path) ? "text-red-600 bg-red-50" : "text-gray-700"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              ))}
              
              {/* Mobile Auth Buttons */}
              <div className="px-3 pt-2 space-y-3">
                <Button 
                  onClick={() => {
                    handleLoginClick();
                    setIsMenuOpen(false);
                  }}
                  variant="ghost"
                  className="w-full text-gray-700 hover:text-red-600 hover:bg-red-50 py-2.5 rounded-lg flex items-center justify-center gap-2"
                >
                  <LogIn className="w-4 h-4" />
                  Login
                </Button>
                
                <Button 
                  onClick={() => {
                    handleRegisterClick();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white py-2.5 rounded-lg shadow-md flex items-center justify-center gap-2"
                >
                  <UserPlus className="w-4 h-4" />
                  Register
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <StudentDataForm 
        open={showStudentForm} 
        onOpenChange={closeForm}
        onSuccess={handleFormSuccess}
      />

      <SuccessPopup
        open={showSuccessPopup}
        onOpenChange={closeSuccess}
        title="Successful Registration"
        message="Thank you! You have successfully registered on our website. You can now proceed to the payment process."
        buttonText="Continue"
        redirectTo="/enrollment"
      />
    </>
  );
};

export default Navigation;
