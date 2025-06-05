
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";
import { 
  User, 
  BookOpen, 
  CreditCard, 
  Bell, 
  Settings, 
  LogOut, 
  Menu, 
  Moon, 
  Sun,
  TrendingUp,
  Calendar,
  Award,
  Clock
} from "lucide-react";
import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardNavbar from "@/components/DashboardNavbar";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Mock data for demonstration
  const userStats = {
    profileCompletion: 85,
    totalLogins: 47,
    coursesEnrolled: 3,
    certificatesEarned: 1
  };

  const recentActivity = [
    { id: 1, action: "Completed lesson: Advanced Mixing Techniques", time: "2 hours ago" },
    { id: 2, action: "Started course: Music Production Fundamentals", time: "1 day ago" },
    { id: 3, action: "Earned certificate: Basic Music Theory", time: "3 days ago" },
  ];

  const notifications = [
    { id: 1, message: "New course available: Electronic Music Production", type: "info" },
    { id: 2, message: "Payment reminder: Monthly subscription due in 3 days", type: "warning" },
    { id: 3, message: "Achievement unlocked: 30-day learning streak!", type: "success" },
  ];

  const userName = user?.email?.split('@')[0] || 'Student';

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <DashboardSidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)}
        darkMode={darkMode}
      />
      
      <div className={`${sidebarOpen ? 'lg:ml-64' : 'lg:ml-16'} transition-all duration-300`}>
        <DashboardNavbar 
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
          darkMode={darkMode}
          onDarkModeToggle={() => setDarkMode(!darkMode)}
        />
        
        <main className="p-4 lg:p-6 pt-20">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
              Welcome back, {userName}! 👋
            </h1>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Here's what's happening with your learning journey today.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} hover:shadow-lg transition-shadow duration-200`}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Profile Completion
                </CardTitle>
                <User className={`h-4 w-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600 mb-2">{userStats.profileCompletion}%</div>
                <Progress value={userStats.profileCompletion} className="h-2" />
              </CardContent>
            </Card>

            <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} hover:shadow-lg transition-shadow duration-200`}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Total Logins
                </CardTitle>
                <Clock className={`h-4 w-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">{userStats.totalLogins}</div>
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  +12% from last month
                </p>
              </CardContent>
            </Card>

            <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} hover:shadow-lg transition-shadow duration-200`}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Courses Enrolled
                </CardTitle>
                <BookOpen className={`h-4 w-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">{userStats.coursesEnrolled}</div>
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  2 in progress
                </p>
              </CardContent>
            </Card>

            <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} hover:shadow-lg transition-shadow duration-200`}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Certificates
                </CardTitle>
                <Award className={`h-4 w-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">{userStats.certificatesEarned}</div>
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  2 more pending
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Quick Actions */}
            <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
              <CardHeader>
                <CardTitle className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild variant="outline" className="w-full justify-start hover:scale-105 transition-transform duration-200">
                  <Link to="/profile">
                    <User className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start hover:scale-105 transition-transform duration-200">
                  <Link to="/courses">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Go to Courses
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start hover:scale-105 transition-transform duration-200">
                  <Link to="/transactions">
                    <CreditCard className="w-4 h-4 mr-2" />
                    View Transactions
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start hover:scale-105 transition-transform duration-200">
                  <Link to="/settings">
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
              <CardHeader>
                <CardTitle className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                          {activity.action}
                        </p>
                        <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
              <CardHeader>
                <CardTitle className={`${darkMode ? 'text-white' : 'text-gray-900'} flex items-center`}>
                  <Bell className="w-5 h-5 mr-2" />
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="flex items-start space-x-3">
                      <Badge 
                        variant={notification.type === 'success' ? 'default' : notification.type === 'warning' ? 'destructive' : 'secondary'}
                        className="mt-1 flex-shrink-0"
                      >
                        {notification.type}
                      </Badge>
                      <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {notification.message}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Analytics Section */}
          <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} mt-6`}>
            <CardHeader>
              <CardTitle className={`${darkMode ? 'text-white' : 'text-gray-900'} flex items-center`}>
                <TrendingUp className="w-5 h-5 mr-2" />
                Learning Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24h</div>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Study Time This Week</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">89%</div>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Average Quiz Score</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">15</div>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Days Learning Streak</p>
                </div>
              </div>
              <div className="mt-6 h-32 bg-gradient-to-r from-red-100 to-pink-100 rounded-lg flex items-center justify-center">
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Analytics Chart Placeholder
                </p>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
