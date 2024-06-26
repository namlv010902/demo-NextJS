import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../types/auth';
import { AuthContextType } from './type';
import { logout as logoutApi } from '../api/auth';
import { useRouter } from 'next/navigation';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = async () => {
    setUser(null);
    await logoutApi().then(() => {
      router.push('/auth/login');
    })
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
