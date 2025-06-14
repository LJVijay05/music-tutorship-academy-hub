
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
        setIsMentor(session.user.email === 'contact@musictutorship.com');
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      setIsMentor(session?.user?.email === 'contact@musictutorship.com');
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      if (data.user?.email !== 'contact@musictutorship.com') {
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
