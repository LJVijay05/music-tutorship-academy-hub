import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { MentorAuthProvider } from "./contexts/MentorAuthContext";
import ScrollToTop from "./components/ScrollToTop";
import { Suspense, lazy, memo } from "react";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { AppSkeleton } from "./components/AppSkeleton";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Courses = lazy(() => import("./pages/Courses"));
const CourseSyllabus = lazy(() => import("./pages/CourseSyllabus"));
const ProductionCourse = lazy(() => import("./pages/ProductionCourse"));
const MentorshipCourse = lazy(() => import("./pages/MentorshipCourse"));
const RecordedCourses = lazy(() => import("./pages/RecordedCourses"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const Enrollment = lazy(() => import("./pages/Enrollment"));
const EssentialBootcampEnrollment = lazy(() => import("./pages/EssentialBootcampEnrollment"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const MentorLogin = lazy(() => import("./pages/MentorLogin"));
const MentorDashboard = lazy(() => import("./pages/MentorDashboard"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Terms = lazy(() => import("./pages/Terms"));
const Profile = lazy(() => import("./pages/Profile"));
const Privacy = lazy(() => import("./pages/Privacy"));
const HealthCheck = lazy(() => import("./pages/HealthCheck"));

// Optimized query client configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (renamed from cacheTime)
      retry: (failureCount, error: any) => {
        // Don't retry on 4xx errors except 429 (rate limit)
        if (error?.status >= 400 && error?.status < 500 && error?.status !== 429) {
          return false;
        }
        return failureCount < 3;
      },
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: 'always',
    },
    mutations: {
      retry: 1,
    },
  },
});

// Memoized route wrapper for better performance
const RouteWrapper = memo(({ children }: { children: React.ReactNode }) => (
  <ErrorBoundary>
    <Suspense fallback={<AppSkeleton />}>
      {children}
    </Suspense>
  </ErrorBoundary>
));

RouteWrapper.displayName = 'RouteWrapper';

const App = memo(() => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider delayDuration={300}>
      <AuthProvider>
        <MentorAuthProvider>
          <Toaster />
          <Sonner 
            position="top-right"
            closeButton
            richColors
            expand={false}
            visibleToasts={3}
          />
          <HashRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<RouteWrapper><Index /></RouteWrapper>} />
              <Route path="/about" element={<RouteWrapper><About /></RouteWrapper>} />
              <Route path="/courses" element={<RouteWrapper><Courses /></RouteWrapper>} />
              <Route path="/courses/:courseId" element={<RouteWrapper><CourseSyllabus /></RouteWrapper>} />
              <Route path="/courses/production-course" element={<RouteWrapper><ProductionCourse /></RouteWrapper>} />
              <Route path="/courses/mentorship-90" element={<RouteWrapper><MentorshipCourse /></RouteWrapper>} />
              <Route path="/recorded-courses" element={<RouteWrapper><RecordedCourses /></RouteWrapper>} />
              <Route path="/contact" element={<RouteWrapper><Contact /></RouteWrapper>} />
              <Route path="/blog" element={<RouteWrapper><Blog /></RouteWrapper>} />
              <Route path="/enrollment" element={<RouteWrapper><Enrollment /></RouteWrapper>} />
              <Route path="/essential-bootcamp-enrollment" element={<RouteWrapper><EssentialBootcampEnrollment /></RouteWrapper>} />
              <Route path="/login" element={<RouteWrapper><Login /></RouteWrapper>} />
              <Route path="/register" element={<RouteWrapper><Register /></RouteWrapper>} />
              <Route path="/dashboard" element={<RouteWrapper><Dashboard /></RouteWrapper>} />
              <Route path="/mentor-login" element={<RouteWrapper><MentorLogin /></RouteWrapper>} />
              <Route path="/mentor-dashboard" element={<RouteWrapper><MentorDashboard /></RouteWrapper>} />
              <Route path="/profile" element={<RouteWrapper><Profile /></RouteWrapper>} />
              <Route path="/privacy" element={<RouteWrapper><Privacy /></RouteWrapper>} />
              <Route path="/terms" element={<RouteWrapper><Terms /></RouteWrapper>} />
              <Route path="/health" element={<RouteWrapper><HealthCheck /></RouteWrapper>} />
              <Route path="*" element={<RouteWrapper><NotFound /></RouteWrapper>} />
            </Routes>
          </HashRouter>
        </MentorAuthProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
));

App.displayName = 'App';

export default App;