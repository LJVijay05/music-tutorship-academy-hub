
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { Menu, Moon, Sun, Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface DashboardNavbarProps {
  onMenuClick: () => void;
  darkMode: boolean;
  onDarkModeToggle: () => void;
}

const DashboardNavbar = ({ onMenuClick, darkMode, onDarkModeToggle }: DashboardNavbarProps) => {
  const { user } = useAuth();

  return (
    <nav className={`
      fixed top-0 right-0 left-0 lg:left-16 z-30 h-16 
      ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}
      border-b backdrop-blur-sm bg-opacity-95
    `}>
      <div className="flex items-center justify-between h-full px-4 lg:px-6">
        {/* Left Side */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="lg:hidden"
          >
            <Menu className="w-5 h-5" />
          </Button>

          {/* Search Bar */}
          <div className="hidden md:flex items-center relative">
            <Search className={`absolute left-3 w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            <Input
              placeholder="Search courses, lessons..."
              className={`
                pl-10 w-80 
                ${darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                  : 'bg-gray-50 border-gray-200'
                }
              `}
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Search Icon (Mobile) */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="w-5 h-5" />
          </Button>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs flex items-center justify-center text-white">
              3
            </span>
          </Button>

          {/* Dark Mode Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onDarkModeToggle}
            className="transition-transform duration-200 hover:scale-110"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>

          {/* User Info */}
          <div className="hidden sm:flex items-center gap-2 ml-2">
            <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-pink-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">
                {user?.email?.charAt(0).toUpperCase()}
              </span>
            </div>
            <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {user?.email?.split('@')[0]}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
