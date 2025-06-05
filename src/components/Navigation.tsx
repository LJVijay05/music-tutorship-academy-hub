
import { Button } from "@/components/ui/button";
import { Music, Menu, X, LogIn, UserPlus, LogOut, User } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Me" },
    { path: "/courses", label: "Courses" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact Us" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100' 
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-lg group transition-all duration-300 hover:scale-105">
            <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-pink-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-red-200 transition-all duration-300 group-hover:rotate-3">
              <Music className="w-4 h-4 text-white" />
            </div>
            <span className="text-gray-900 tracking-tight text-base font-semibold">
              Music <span className="text-transparent bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text">Tutorship</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 font-medium text-sm transition-all duration-300 rounded-lg hover:bg-gray-50 group ${
                  isActive(item.path) ? "text-red-600" : "text-gray-700 hover:text-red-600"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-red-600 to-pink-600 transition-all duration-300 ${
                  isActive(item.path) ? 'w-6' : 'group-hover:w-6'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <User className="w-4 h-4" />
                  <span>{user?.email}</span>
                </div>
                <Button 
                  variant="outline"
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 hover:text-gray-900 transition-all duration-300 ease-out px-4 py-2 text-sm font-medium rounded-lg transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
                  onClick={handleLogout}
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <Button 
                  variant="outline"
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 hover:text-gray-900 transition-all duration-300 ease-out px-4 py-2 text-sm font-medium rounded-lg transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
                  asChild
                >
                  <Link to="/login" className="flex items-center gap-2">
                    <LogIn className="w-4 h-4" />
                    Login
                  </Link>
                </Button>
                <Button 
                  className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-6 py-2 text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 ease-out rounded-lg transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
                  asChild
                >
                  <Link to="/register" className="flex items-center gap-2">
                    <UserPlus className="w-4 h-4" />
                    Register
                  </Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:scale-105 active:scale-95"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
          <div className="py-4 space-y-1 border-t border-gray-100">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-3 font-medium text-sm transition-all duration-300 rounded-lg hover:bg-red-50 hover:text-red-600 ${
                  isActive(item.path) ? "text-red-600 bg-red-50" : "text-gray-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 px-4 pt-4">
              {isAuthenticated ? (
                <Button 
                  variant="outline"
                  className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 ease-out py-3 rounded-lg transform hover:scale-105 active:scale-95"
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              ) : (
                <>
                  <Button 
                    variant="outline"
                    className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 ease-out py-3 rounded-lg transform hover:scale-105 active:scale-95"
                    asChild
                  >
                    <Link to="/login" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center gap-2">
                      <LogIn className="w-4 h-4" />
                      Login
                    </Link>
                  </Button>
                  <Button 
                    className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-sm py-3 rounded-lg shadow-md transition-all duration-300 ease-out transform hover:scale-105 active:scale-95"
                    asChild
                  >
                    <Link to="/register" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center gap-2">
                      <UserPlus className="w-4 h-4" />
                      Register
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
