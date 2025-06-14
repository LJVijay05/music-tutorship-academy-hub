
import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { User } from '@supabase/supabase-js';

interface MentorAuthContextType {
  user: User | null;
  isMentor: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const MentorAuthContext = createContext<MentorAuthContextType | undefined>(undefined);

export const useMentorAuth = () => {
  const context = useContext(MentorAuthContext);
  if (context === undefined) {
    throw new Error('useMentorAuth must be used within a MentorAuthProvider');
  }
  return context;
};

export const MentorAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isMentor, setIsMentor] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser(session.user);
        setIsMentor(session.user.email === 'producingwithvijay@gmail.com');
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      setIsMentor(session?.user?.email === 'producingwithvijay@gmail.com');
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // Check for hardcoded mentor credentials first
      if (email === 'producingwithvijay@gmail.com' && password === 'Vijay@0104') {
        // Create a mock user session for the mentor
        const mockUser = {
          id: 'mentor-mock-id',
          email: 'producingwithvijay@gmail.com',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          aud: 'authenticated',
          role: 'authenticated',
          email_confirmed_at: new Date().toISOString(),
          user_metadata: {},
          app_metadata: {}
        } as User;
        
        setUser(mockUser);
        setIsMentor(true);
        return true;
      }

      // If not the hardcoded credentials, try regular Supabase auth
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      if (data.user?.email !== 'producingwithvijay@gmail.com') {
        await supabase.auth.signOut();
        throw new Error('Access denied. This area is restricted to mentors only.');
      }

      return true;
    } catch (error) {
      console.error('Mentor login error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    // For mock session, just clear the state
    if (user?.id === 'mentor-mock-id') {
      setUser(null);
      setIsMentor(false);
      return;
    }
    // For real Supabase session, sign out normally
    await supabase.auth.signOut();
  };

  const value = {
    user,
    isMentor,
    login,
    logout,
    isLoading
  };

  return <MentorAuthContext.Provider value={value}>{children}</MentorAuthContext.Provider>;
};
