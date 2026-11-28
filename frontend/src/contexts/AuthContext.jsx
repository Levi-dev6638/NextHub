import { useCallback, useEffect, useMemo, useState } from 'react';
import { AuthContext } from './auth-context.js';
import { ApiError, api } from '../services/api.js';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sessionError, setSessionError] = useState('');

  const refreshSession = useCallback(async () => {
    setLoading(true);
    setSessionError('');
    try {
      const result = await api.me();
      setUser(result.user);
    } catch (error) {
      if (error instanceof ApiError && error.status === 401) {
        setUser(null);
      } else {
        setSessionError(error.message);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let active = true;
    api.me().then((result) => {
      if (active) setUser(result.user);
    }).catch((error) => {
      if (!active) return;
      if (error instanceof ApiError && error.status === 401) {
        setUser(null);
      } else {
        setSessionError(error.message);
      }
    }).finally(() => {
      if (active) setLoading(false);
    });

    return () => {
      active = false;
    };
  }, []);

  const login = useCallback(async (credentials) => {
    const result = await api.login(credentials);
    setUser(result.user);
    setSessionError('');
    return result.user;
  }, []);

  const register = useCallback(async (details) => {
    const result = await api.register(details);
    setUser(result.user);
    setSessionError('');
    return result.user;
  }, []);

  const logout = useCallback(async () => {
    await api.logout();
    setUser(null);
  }, []);

  const value = useMemo(() => ({
    user,
    loading,
    sessionError,
    login,
    register,
    logout,
    refreshSession,
    updateUser: setUser,
  }), [user, loading, sessionError, login, register, logout, refreshSession]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
