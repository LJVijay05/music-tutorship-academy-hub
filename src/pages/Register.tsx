
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, Eye, EyeOff, UserPlus } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration attempt:", { name, email, password });
    
    if (password !== confirmPassword) {
      toast.error("Passwords don't match!");
      return;
    }
    
    if (name && email && password) {
      login(email, password);
      toast.success("Registration successful!");
      navigate("/courses");
    } else {
      toast.error("Please fill in all fields");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                <Music className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Join Us</h1>
              <p className="text-gray-600">Create your account to start your musical journey</p>
            </div>

            <Card className="shadow-xl border-0 rounded-2xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-center text-gray-900">Register</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="h-12 rounded-lg border-2 border-gray-200 focus:border-red-500 transition-all duration-300"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 rounded-lg border-2 border-gray-200 focus:border-red-500 transition-all duration-300"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="h-12 rounded-lg border-2 border-gray-200 focus:border-red-500 transition-all duration-300 pr-12"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                      Confirm Password
                    </label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="h-12 rounded-lg border-2 border-gray-200 focus:border-red-500 transition-all duration-300"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-out transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
                  >
                    <UserPlus className="w-5 h-5 mr-2" />
                    Create Account
                  </Button>
                </form>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link 
                      to="/login" 
                      className="text-red-600 hover:text-red-700 font-medium transition-colors duration-200 hover:underline"
                    >
                      Sign in here
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Register;
