'use client';
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import Cookies from 'js-cookie';
import LoginPage from './login';


interface AuthContextProps {
  isAuthenticated: boolean;
  login: (inputPassword: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const password = Cookies.get('auth-password');
    if (password === process.env.NEXT_PUBLIC_AUTH_PASSWORD) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (inputPassword: string) => {
    if (inputPassword === process.env.NEXT_PUBLIC_AUTH_PASSWORD) {
      Cookies.set('auth-password', inputPassword, { expires: 1 });
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  const logout = () => {
    Cookies.remove('auth-password');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
    { children }
    </AuthContext.Provider>
  );
};