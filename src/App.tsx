import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { MentorAuthProvider } from "./contexts/MentorAuthContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Courses from "./pages/Courses";
import CourseSyllabus from "./pages/CourseSyllabus";
import ProductionCourse from "./pages/ProductionCourse";
import MentorshipCourse from "./pages/MentorshipCourse";
import RecordedCourses from "./pages/RecordedCourses";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Enrollment from "./pages/Enrollment";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import MentorLogin from "./pages/MentorLogin";
import MentorDashboard from "./pages/MentorDashboard";
import NotFound from "./pages/NotFound";
import Terms from "./pages/Terms";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <MentorAuthProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:courseId" element={<CourseSyllabus />} />
              <Route path="/courses/production-course" element={<ProductionCourse />} />
              <Route path="/courses/mentorship-90" element={<MentorshipCourse />} />
              <Route path="/recorded-courses" element={<RecordedCourses />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/enrollment" element={<Enrollment />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/mentor-login" element={<MentorLogin />} />
              <Route path="/mentor-dashboard" element={<MentorDashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />

              {/* Legal: Terms of Service */}
              <Route path="/terms" element={<Terms />} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </MentorAuthProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
