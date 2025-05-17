'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { CookiesKeyEnum } from '@/constants';
import { AuthContextType } from './types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = Cookies.get(CookiesKeyEnum.ACCESS_TOKEN);
    setIsLoggedIn(Boolean(token));
  }, []);

  const login = () => {
    Cookies.set(CookiesKeyEnum.ACCESS_TOKEN, 'fake-token', { expires: 1 / 96 });
    setIsLoggedIn(true);
  };

  const logout = () => {
    Cookies.remove(CookiesKeyEnum.ACCESS_TOKEN);
    Cookies.remove(CookiesKeyEnum.CART_PRODUCTS);
    setIsLoggedIn(false);
    window.location.reload();
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
