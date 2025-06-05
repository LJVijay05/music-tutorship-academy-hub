
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
  user: { email: string } | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ email: string } | null>(null);

  const login = (email: string, password: string) => {
    // Simple mock authentication
    setIsAuthenticated(true);
    setUser({ email });
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userEmail', email);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
  };

  React.useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    const userEmail = localStorage.getItem('userEmail');
    if (authStatus === 'true' && userEmail) {
      setIsAuthenticated(true);
      setUser({ email: userEmail });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};
