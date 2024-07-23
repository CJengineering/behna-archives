'use client';
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

interface AuthContextProps {
  isAuthenticated: boolean;
  login: (password: string, onSuccess: () => void) => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const password = Cookies.get('auth-password');
    if (password === process.env.NEXT_PUBLIC_AUTH_PASSWORD) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (password: string, onSuccess: () => void) => {
    // Replace this with your actual password validation logic
    const isValidPassword = password === process.env.NEXT_PUBLIC_AUTH_PASSWORD;

    if (isValidPassword) {
      Cookies.set('auth-password', password); // Set the cookie
      setIsAuthenticated(true);
      onSuccess();
    } else {
      setIsAuthenticated(false);
    }
  };

  const logout = () => {
    Cookies.remove('auth-password');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login }}>
      {children}
    </AuthContext.Provider>
  );
};
