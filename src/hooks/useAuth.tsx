'use client';

import { useEffect, useState, useCallback } from 'react';
import Cookies from 'js-cookie';
import { CookiesKeyEnum } from '@/constants';

export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = Cookies.get(CookiesKeyEnum.ACCESS_TOKEN);
    setIsLoggedIn(Boolean(token));
  }, []);

  const logout = useCallback(() => {
    Cookies.remove(CookiesKeyEnum.ACCESS_TOKEN);
    setIsLoggedIn(false);
  }, []);

  const login = useCallback(() => {
    Cookies.set(CookiesKeyEnum.ACCESS_TOKEN, 'fake-token', { expires: 1 / 96 }); // 1/96 = 15 minutos
    setIsLoggedIn(true);
  }, []);

  return { isLoggedIn, login, logout };
}
