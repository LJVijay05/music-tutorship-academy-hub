
import { Button } from "@/components/ui/button";
import { Music, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Me" },
    { path: "/courses", label: "Courses" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact Us" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-100' 
        : 'bg-white/80 backdrop-blur-sm shadow-sm'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 font-bold text-2xl group transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-red-200 transition-all duration-300 group-hover:rotate-6">
              <Music className="w-6 h-6 text-white" />
            </div>
            <span className="text-gray-900 tracking-tight">
              Music <span className="text-transparent bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text">Tutorship</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-6 py-3 font-semibold text-lg transition-all duration-300 rounded-xl hover:bg-gray-50 group ${
                  isActive(item.path) ? "text-red-600" : "text-gray-700 hover:text-red-600"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
                <span className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-red-600 to-pink-600 transition-all duration-300 ${
                  isActive(item.path) ? 'w-8' : 'group-hover:w-8'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Register Button */}
          <div className="hidden md:block">
            <Button 
              asChild 
              className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-xl"
            >
              <Link to="/enrollment">Register Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu className={`w-6 h-6 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100'}`} />
              <X className={`w-6 h-6 absolute top-0 left-0 transition-all duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 rotate-180'}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-6 space-y-2 border-t border-gray-100">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-6 py-4 font-semibold text-lg transition-all duration-300 rounded-xl hover:bg-red-50 hover:text-red-600 ${
                  isActive(item.path) ? "text-red-600 bg-red-50" : "text-gray-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-6 pt-4">
              <Button 
                asChild 
                className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-lg py-6 rounded-xl shadow-lg"
              >
                <Link to="/enrollment" onClick={() => setIsMenuOpen(false)}>
                  Register Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
