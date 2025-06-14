
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Music, Eye, EyeOff, Mail, Lock, AlertCircle, Shield } from 'lucide-react';
import { useMentorAuth } from '@/contexts/MentorAuthContext';
import { useToast } from '@/hooks/use-toast';

const MentorLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string; general?: string }>({});
  
  const { login, isLoading, isMentor } = useMentorAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  // Redirect if already logged in as mentor
  if (isMentor) {
    return <Navigate to="/mentor-dashboard" replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    if (!email || !password) {
      setErrors({ general: 'Please fill in all fields' });
      return;
    }

    try {
      await login(email, password);
      toast({
        title: "Welcome, Mentor!",
        description: "Successfully logged in. Redirecting to dashboard...",
      });
      navigate('/mentor-dashboard');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Login failed. Please try again.';
      setErrors({ general: errorMessage });
      toast({
        title: "Login Failed",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 font-bold text-2xl group">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-white">
              Mentor <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">Access</span>
            </span>
          </div>
        </div>

        <Card className="shadow-2xl border-0 bg-white/10 backdrop-blur-lg border border-white/20">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-bold text-white flex items-center justify-center gap-2">
              <Music className="w-6 h-6 text-purple-400" />
              Mentor Dashboard Access
            </CardTitle>
            <p className="text-gray-300 mt-2">Restricted Access - Mentors Only</p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {errors.general && (
              <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 flex items-center gap-2 text-red-200">
                <AlertCircle className="w-4 h-4" />
                <span className="text-sm">{errors.general}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-200">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter mentor email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-200">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-200"
                    disabled={isLoading}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
              >
                {isLoading ? 'Authenticating...' : 'Access Dashboard'}
              </Button>
            </form>

            <div className="text-center">
              <p className="text-sm text-gray-400">
                Access restricted to authorized mentors only
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MentorLogin;
